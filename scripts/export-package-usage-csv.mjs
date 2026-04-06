import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const repoRoot = path.resolve(__dirname, '..')
const packagesDir = path.join(repoRoot, 'packages')
const docsPackagesDir = path.join(repoRoot, 'docs', 'packages')

const csvHeaders = ['dependency', 'version']

const escapeCsv = value => {
  const stringValue = String(value ?? '')

  if (/[",\n]/.test(stringValue)) {
    return `"${stringValue.replaceAll('"', '""')}"`
  }

  return stringValue
}

const readJson = async filePath => {
  const fileContents = await readFile(filePath, 'utf8')
  return JSON.parse(fileContents)
}

const collectPackageRows = async (manifestPath, packagePathLabel) => {
  const manifest = await readJson(manifestPath)
  const dependencies = Object.entries(manifest.dependencies ?? {})
    .sort(([left], [right]) => left.localeCompare(right))
    .map(([dependency, version]) => [dependency, version])

  return dependencies
}

const getWorkspaceManifestPaths = async () => {
  const directoryEntries = await readdir(packagesDir, { withFileTypes: true })

  return directoryEntries
    .filter(entry => entry.isDirectory())
    .map(entry => path.join(packagesDir, entry.name, 'package.json'))
    .sort((left, right) => left.localeCompare(right))
}

const getDateStamp = () => {
  const today = new Date()
  const year = today.getFullYear()
  const month = String(today.getMonth() + 1).padStart(2, '0')
  const day = String(today.getDate()).padStart(2, '0')

  return `${year}-${month}-${day}`
}

const main = async () => {
  const manifestPaths = [
    path.join(repoRoot, 'package.json'),
    ...(await getWorkspaceManifestPaths())
  ]

  const rowGroups = await Promise.all(
    manifestPaths.map(manifestPath => collectPackageRows(manifestPath, path.relative(repoRoot, manifestPath)))
  )

  const rows = rowGroups.flat()
  const outputLines = [
    csvHeaders.join(','),
    ...rows.map(row => row.map(escapeCsv).join(','))
  ]
  const outputPath = path.join(docsPackagesDir, `package_history_${getDateStamp()}.csv`)

  await mkdir(docsPackagesDir, { recursive: true })
  await writeFile(outputPath, `${outputLines.join('\n')}\n`, 'utf8')

  process.stdout.write(`${path.relative(repoRoot, outputPath)}\n`)
}

main().catch(error => {
  console.error(error instanceof Error ? error.message : error)
  process.exitCode = 1
})
