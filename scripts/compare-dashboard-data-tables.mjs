import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { parseArgs } from 'node:util'
import { chromium } from 'playwright'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const repoRoot = path.resolve(__dirname, '..')

const defaultConfigDir = path.join(repoRoot, 'packages/dashboard/examples/private/deprecate-table')
const defaultConfigUrlPrefix = '/examples/private/deprecate-table'

const helpText = `Compare rendered dashboard data tables between two running dashboard servers.

Usage:
  node scripts/compare-dashboard-data-tables.mjs [options]

Options:
  --new-port <port>            Port for the migrated dashboard server. Default: 8080
  --old-port <port>            Port for the old dashboard server. Default: 8081
  --host <host>                Host for both servers. Default: localhost
  --config-dir <path>          Directory of dashboard JSON configs.
                               Default: packages/dashboard/examples/private/deprecate-table
  --config-url-prefix <path>   URL prefix used by the dashboard server for configs.
                               Default: /examples/private/deprecate-table
  --config <file>              Compare one config file. Can be passed multiple times.
  --output <path>              Write full JSON results to this path.
  --wait-ms <ms>               Extra wait after page load before reading tables. Default: 1800
  --timeout-ms <ms>            Page load timeout. Default: 45000
  --include-captions           Treat caption text differences as mismatches.
  --include-ids                Treat rendered table id/key differences as mismatches.
  --ignore-legacy-root-tables  Ignore old-only root dashboard tables that are intentionally
                               not migrated into standalone table visualizations.
  --no-fail                    Exit 0 even when mismatches are found.
  --help                       Show this help.
`

const parseCli = () => {
  const { values } = parseArgs({
    allowPositionals: false,
    options: {
      'new-port': { type: 'string', default: '8080' },
      'old-port': { type: 'string', default: '8081' },
      host: { type: 'string', default: 'localhost' },
      'config-dir': { type: 'string', default: defaultConfigDir },
      'config-url-prefix': { type: 'string', default: defaultConfigUrlPrefix },
      config: { type: 'string', multiple: true },
      output: { type: 'string' },
      'wait-ms': { type: 'string', default: '1800' },
      'timeout-ms': { type: 'string', default: '45000' },
      'include-captions': { type: 'boolean', default: false },
      'include-ids': { type: 'boolean', default: false },
      'ignore-legacy-root-tables': { type: 'boolean', default: false },
      'no-fail': { type: 'boolean', default: false },
      help: { type: 'boolean', default: false }
    }
  })

  return {
    newPort: Number(values['new-port']),
    oldPort: Number(values['old-port']),
    host: values.host,
    configDir: path.resolve(repoRoot, values['config-dir']),
    configUrlPrefix: values['config-url-prefix'].replace(/\/$/, ''),
    configs: values.config ?? [],
    output: values.output ? path.resolve(repoRoot, values.output) : undefined,
    waitMs: Number(values['wait-ms']),
    timeoutMs: Number(values['timeout-ms']),
    includeCaptions: values['include-captions'],
    includeIds: values['include-ids'],
    ignoreLegacyRootTables: values['ignore-legacy-root-tables'],
    noFail: values['no-fail'],
    help: values.help
  }
}

const validateNumberOption = (name, value) => {
  if (!Number.isFinite(value) || value < 0) {
    throw new Error(`${name} must be a non-negative number.`)
  }
}

const compareStrings = (left, right) => left.localeCompare(right, undefined, { sensitivity: 'base' })

const normalizeText = value =>
  String(value ?? '')
    .replace(/\s+/g, ' ')
    .trim()

const readJson = async filePath => JSON.parse(await readFile(filePath, 'utf8'))

const getConfigFiles = async ({ configDir, configs }) => {
  if (configs.length > 0) {
    return configs.map(config => path.basename(config)).sort(compareStrings)
  }

  const entries = await readdir(configDir, { withFileTypes: true })

  return entries
    .filter(entry => entry.isFile())
    .map(entry => entry.name)
    .filter(file => file.endsWith('.json') && file !== '_manifest.json')
    .sort(compareStrings)
}

const buildUrl = ({ host, port, configUrlPrefix, file }) => {
  const encodedFile = encodeURIComponent(file)

  return `http://${host}:${port}/?config=${configUrlPrefix}/${encodedFile}&sidebar=false`
}

const tableSignature = (table, options) => {
  const signature = {
    label: table.label,
    rowCount: table.rowCount,
    columnHeaders: table.columnHeaders,
    contentHash: table.contentHash,
    dataLinks: table.dataLinks
  }

  if (options.includeCaptions) {
    signature.caption = table.caption
  }

  if (options.includeIds) {
    signature.key = table.key
  }

  return signature
}

const tableSignatureSortKey = table => [table.label, table.rowCount, table.contentHash, table.key].join('\u0000')

const getComparableTables = (tables, options) =>
  tables
    .map(table => tableSignature(table, options))
    .sort((left, right) => tableSignatureSortKey(left).localeCompare(tableSignatureSortKey(right)))

const getVisibleLabelMap = tables => {
  const labelCounts = new Map()

  return tables.reduce((map, table) => {
    const baseLabel = table.label || table.key || `table ${table.index + 1}`
    const count = labelCounts.get(baseLabel) ?? 0
    const label = count === 0 ? baseLabel : `${baseLabel} #${count + 1}`

    labelCounts.set(baseLabel, count + 1)
    map.set(label, table)

    return map
  }, new Map())
}

const tableExistsInNewResult = ({ table, newTables }) =>
  newTables.some(newTable => {
    if (table.label && newTable.label === table.label) return true
    if (table.key && newTable.key === table.key) return true
    return !table.label && !newTable.label && table.key === newTable.key
  })

const isLegacyRootDashboardTable = ({ table, sourceConfig }) => {
  if (!sourceConfig?.table?.show || !Array.isArray(sourceConfig.data)) return false

  const legacyTitle = normalizeText(sourceConfig.dashboard?.title)
  if (legacyTitle) return table.label === legacyTitle

  return table.key === 'data-table' || table.label === ''
}

const filterIgnoredOldTables = ({ newResult, oldResult, sourceConfig, options }) => {
  if (!options.ignoreLegacyRootTables) {
    return { oldResult, ignoredOldTables: [] }
  }

  const ignoredOldTables = []
  let ignoredLegacyRootTable = false
  const tables = oldResult.tables.filter(table => {
    const shouldIgnore =
      !ignoredLegacyRootTable &&
      isLegacyRootDashboardTable({ table, sourceConfig }) &&
      !tableExistsInNewResult({ table, newTables: newResult.tables })

    if (shouldIgnore) {
      ignoredLegacyRootTable = true
      ignoredOldTables.push(table)
      return false
    }

    return true
  })

  return {
    oldResult: { ...oldResult, tableCount: tables.length, tables },
    ignoredOldTables
  }
}

const compareTableSets = (newResult, oldResult, options) => {
  if (newResult.error || oldResult.error) {
    return {
      mismatch: true,
      reasons: ['load/extraction error'],
      missingLabels: [],
      extraLabels: [],
      rowMismatches: [],
      headerMismatches: [],
      contentMismatches: [],
      captionMismatches: [],
      idMismatches: [],
      dataLinkMismatches: []
    }
  }

  const reasons = []
  const newByLabel = getVisibleLabelMap(newResult.tables)
  const oldByLabel = getVisibleLabelMap(oldResult.tables)
  const labels = [...new Set([...newByLabel.keys(), ...oldByLabel.keys()])]
  const missingLabels = labels.filter(label => !newByLabel.has(label))
  const extraLabels = labels.filter(label => !oldByLabel.has(label))
  const commonLabels = labels.filter(label => newByLabel.has(label) && oldByLabel.has(label))

  const rowMismatches = []
  const headerMismatches = []
  const contentMismatches = []
  const captionMismatches = []
  const idMismatches = []
  const dataLinkMismatches = []

  commonLabels.forEach(label => {
    const newTable = newByLabel.get(label)
    const oldTable = oldByLabel.get(label)

    if (newTable.rowCount !== oldTable.rowCount) {
      rowMismatches.push({ label, newRows: newTable.rowCount, oldRows: oldTable.rowCount })
    }

    if (JSON.stringify(newTable.columnHeaders) !== JSON.stringify(oldTable.columnHeaders)) {
      headerMismatches.push(label)
    }

    if (newTable.contentHash !== oldTable.contentHash) {
      contentMismatches.push(label)
    }

    if (options.includeCaptions && newTable.caption !== oldTable.caption) {
      captionMismatches.push(label)
    }

    if (options.includeIds && newTable.key !== oldTable.key) {
      idMismatches.push(label)
    }

    if (JSON.stringify(newTable.dataLinks) !== JSON.stringify(oldTable.dataLinks)) {
      dataLinkMismatches.push({
        label,
        newLinks: newTable.dataLinks,
        oldLinks: oldTable.dataLinks
      })
    }
  })

  if (newResult.tableCount !== oldResult.tableCount) {
    reasons.push(`count ${newResult.tableCount}->${oldResult.tableCount}`)
  }

  if (missingLabels.length > 0) {
    reasons.push(`missing in new: ${formatList(missingLabels)}`)
  }

  if (extraLabels.length > 0) {
    reasons.push(`extra in new: ${formatList(extraLabels)}`)
  }

  if (rowMismatches.length > 0) {
    reasons.push(
      `row mismatch: ${formatList(rowMismatches.map(item => `${item.label} ${item.newRows}->${item.oldRows}`))}`
    )
  }

  if (headerMismatches.length > 0) {
    reasons.push(`header mismatch: ${formatList(headerMismatches)}`)
  }

  const rowMismatchLabels = new Set(rowMismatches.map(item => item.label))
  const pureContentMismatches = contentMismatches.filter(
    label => !rowMismatchLabels.has(label) && !headerMismatches.includes(label)
  )

  if (pureContentMismatches.length > 0) {
    reasons.push(`cell/content mismatch: ${formatList(pureContentMismatches)}`)
  }

  if (captionMismatches.length > 0) {
    reasons.push(`caption mismatch: ${formatList(captionMismatches)}`)
  }

  if (idMismatches.length > 0) {
    reasons.push(`id/key mismatch: ${formatList(idMismatches)}`)
  }

  if (dataLinkMismatches.length > 0) {
    reasons.push(`data link mismatch: ${formatList(dataLinkMismatches.map(item => item.label))}`)
  }

  const signatureMismatch =
    JSON.stringify(getComparableTables(newResult.tables, options)) !==
    JSON.stringify(getComparableTables(oldResult.tables, options))

  return {
    mismatch: reasons.length > 0 || signatureMismatch,
    reasons,
    missingLabels,
    extraLabels,
    rowMismatches,
    headerMismatches,
    contentMismatches,
    captionMismatches,
    idMismatches,
    dataLinkMismatches
  }
}

const formatList = values => {
  const visibleValues = values.slice(0, 3)
  const suffix = values.length > visibleValues.length ? ` +${values.length - visibleValues.length}` : ''

  return `${visibleValues.join(', ')}${suffix}`
}

const extractDashboardTables = async (page, options) => {
  const url = buildUrl(options)

  try {
    await page.goto(url, { waitUntil: 'load', timeout: options.timeoutMs })
    await page.waitForTimeout(options.waitMs)

    const result = await page.evaluate(() => {
      const normalize = value => (value || '').replace(/\s+/g, ' ').trim()
      const cleanHeading = text =>
        normalize(text)
          .replace(/^(plus|minus)\s*/i, '')
          .trim()
      const hashString = input => {
        let hash = 2166136261

        for (let index = 0; index < input.length; index += 1) {
          hash ^= input.charCodeAt(index)
          hash = Math.imul(hash, 16777619)
        }

        return (hash >>> 0).toString(16).padStart(8, '0')
      }
      const getDataLinks = container =>
        Array.from(container?.querySelectorAll?.('a[href]') || [])
          .map(link => ({
            text: normalize(link.innerText || link.textContent || link.getAttribute('title')),
            href: link.getAttribute('href') || ''
          }))
          .filter(link => link.href && !link.href.startsWith('#') && link.text)
          .sort((left, right) => `${left.text}\u0000${left.href}`.localeCompare(`${right.text}\u0000${right.href}`))

      const tables = Array.from(document.querySelectorAll('table.data-table, table[class*="data-table"]')).map(
        (table, index) => {
          const section = table.closest('.data-table-container') || table.closest('section') || table.parentElement
          const multiTableContainer = table.closest('.multi-table-container')
          const tableRoot = table.closest('[id^="data-table-"]') || multiTableContainer || section
          const heading = section?.querySelector?.('.data-table-heading')
          const headingText = cleanHeading(heading?.innerText || heading?.textContent)
          const fallbackHeading = normalize(section?.querySelector?.('h1,h2,h3,h4,[role="heading"]')?.textContent)
          const label = headingText || fallbackHeading || normalize(table.getAttribute('aria-label'))
          const caption = normalize(
            table.querySelector('caption')?.innerText || table.querySelector('caption')?.textContent
          )
          const columnHeaders = Array.from(table.querySelectorAll('thead th'))
            .map(header =>
              normalize(header.innerText || header.textContent)
                .replace(/Press command.*$/i, '')
                .trim()
            )
            .filter(Boolean)
          const rowCells = Array.from(table.querySelectorAll('tbody tr')).map(row =>
            Array.from(row.children).map(cell => normalize(cell.textContent))
          )
          const id = section?.id || multiTableContainer?.id || table.id || ''

          return {
            index,
            id,
            key: id.replace(/^dashboard-table-/, '').replace(/^data-table-/, ''),
            label,
            caption,
            rowCount: rowCells.length,
            columnHeaders,
            dataLinks: getDataLinks(tableRoot),
            contentHash: hashString(`${columnHeaders.join('|')}\n${rowCells.map(row => row.join('\t')).join('\n')}`),
            sampleRows: rowCells.slice(0, 2).map(row => row.slice(0, 6))
          }
        }
      )

      return {
        loadedUrl: location.href,
        tableCount: tables.length,
        tables,
        appErrorText: normalize(document.querySelector('.cove-error, .error-message, [role="alert"]')?.textContent)
      }
    })

    return { file: options.file, port: options.port, url, ...result }
  } catch (error) {
    return {
      file: options.file,
      port: options.port,
      url,
      tableCount: 0,
      tables: [],
      error: error instanceof Error ? error.message : String(error)
    }
  }
}

const compareConfig = async ({ browser, file, options }) => {
  const page = await browser.newPage()

  try {
    const sourceConfig = await readJson(path.join(options.configDir, file))
    const newResult = await extractDashboardTables(page, { ...options, port: options.newPort, file })
    const rawOldResult = await extractDashboardTables(page, { ...options, port: options.oldPort, file })
    const { oldResult, ignoredOldTables } = filterIgnoredOldTables({
      newResult,
      oldResult: rawOldResult,
      sourceConfig,
      options
    })
    const comparison = compareTableSets(newResult, oldResult, options)

    return {
      file,
      mismatch: comparison.mismatch,
      reasons: comparison.reasons,
      new: newResult,
      old: oldResult,
      rawOld: ignoredOldTables.length > 0 ? rawOldResult : undefined,
      ignoredOldTables,
      comparison
    }
  } finally {
    await page.close()
  }
}

const printSummary = ({ results, options }) => {
  const mismatches = results.filter(result => result.mismatch)
  const exactMatches = results.filter(result => !result.mismatch)
  const errors = results.filter(result => result.new.error || result.old.error)
  const ignoredOldTableCount = results.reduce((sum, result) => sum + (result.ignoredOldTables?.length || 0), 0)

  console.log(`Compared ${results.length} dashboard config${results.length === 1 ? '' : 's'}.`)
  console.log(`New server: http://${options.host}:${options.newPort}`)
  console.log(`Old server: http://${options.host}:${options.oldPort}`)
  console.log(`Matches: ${exactMatches.length}`)
  console.log(`Mismatches: ${mismatches.length}`)

  if (errors.length > 0) {
    console.log(`Load/extraction errors: ${errors.length}`)
  }

  if (ignoredOldTableCount > 0) {
    console.log(`Ignored old-only legacy root tables: ${ignoredOldTableCount}`)
  }

  if (mismatches.length === 0) {
    return
  }

  console.log('\nMismatched configs:')

  mismatches.forEach(result => {
    const counts = `${result.new.tableCount} vs ${result.old.tableCount}`
    const reason = result.reasons.length > 0 ? result.reasons.join('; ') : 'signature mismatch'

    console.log(`- ${result.file} (${counts}): ${reason}`)
  })
}

const writeJsonOutput = async ({ output, results, options }) => {
  if (!output) {
    return
  }

  const payload = {
    generatedAt: new Date().toISOString(),
    options: {
      host: options.host,
      newPort: options.newPort,
      oldPort: options.oldPort,
      configDir: path.relative(repoRoot, options.configDir),
      configUrlPrefix: options.configUrlPrefix,
      waitMs: options.waitMs,
      timeoutMs: options.timeoutMs,
      includeCaptions: options.includeCaptions,
      includeIds: options.includeIds,
      ignoreLegacyRootTables: options.ignoreLegacyRootTables
    },
    summary: {
      total: results.length,
      matches: results.filter(result => !result.mismatch).length,
      mismatches: results.filter(result => result.mismatch).length,
      errors: results.filter(result => result.new.error || result.old.error).length,
      ignoredOldTables: results.reduce((sum, result) => sum + (result.ignoredOldTables?.length || 0), 0)
    },
    results
  }

  await mkdir(path.dirname(output), { recursive: true })
  await writeFile(output, `${JSON.stringify(payload, null, 2)}\n`, 'utf8')
  console.log(`\nWrote ${path.relative(repoRoot, output)}`)
}

const main = async () => {
  const options = parseCli()

  if (options.help) {
    process.stdout.write(helpText)
    return
  }

  validateNumberOption('--new-port', options.newPort)
  validateNumberOption('--old-port', options.oldPort)
  validateNumberOption('--wait-ms', options.waitMs)
  validateNumberOption('--timeout-ms', options.timeoutMs)

  const files = await getConfigFiles(options)
  const browser = await chromium.launch({ headless: true })
  const results = []

  try {
    for (const file of files) {
      results.push(await compareConfig({ browser, file, options }))
    }
  } finally {
    await browser.close()
  }

  printSummary({ results, options })
  await writeJsonOutput({ output: options.output, results, options })

  if (!options.noFail && results.some(result => result.mismatch)) {
    process.exitCode = 1
  }
}

main().catch(error => {
  console.error(error instanceof Error ? error.message : error)
  process.exitCode = 1
})
