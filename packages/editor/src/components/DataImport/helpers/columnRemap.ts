import { DataTransform } from '@cdc/core/helpers/DataTransform'
import { type Visualization } from '@cdc/core/types/Visualization'

type ColumnSchemaDiff = {
  oldColumns: string[]
  newColumns: string[]
  removed: string[]
  added: string[]
  unchanged: string[]
}

type DashboardDatasetSchema = {
  datasetKey: string
  columns: string[]
}

export type ColumnMapping = Record<string, string>

type ColumnRemapMatch = {
  kind: 'key' | 'string'
  path: Array<string | number>
  value: string
}

export type ColumnRemapConflict = {
  kind:
    | 'incomplete-mapping'
    | 'invalid-source'
    | 'invalid-target'
    | 'reused-target'
    | 'unsafe-key'
    | 'object-key-collision'
    | 'array-duplicate'
    | 'literal-value-overlap'
    | 'dashboard-ambiguity'
    | 'schema-ambiguity'
  message: string
  path?: Array<string | number>
  column?: string
}

type ColumnRemapResult<T> = {
  value?: T
  replacements: number
  conflicts: ColumnRemapConflict[]
}

export type PendingDataReplacement = {
  status: 'mapping' | 'blocked'
  newData: Object[]
  dataMetadata: Record<string, string>
  fileSource: string
  fileSourceType: string
  fileSize: number
  mimeType: string
  datasetKey?: string
  datasetLabel?: string
  dashboardDatasetSchemas?: DashboardDatasetSchema[]
  oldData: Object[]
  originalConfig: Visualization
  workingConfig: Visualization
  rawRequiredColumns: string[]
  rawAvailableColumns: string[]
  transformedRequiredColumns: string[]
  transformedAvailableColumns: string[]
  rawMapping: ColumnMapping
  transformedMapping: ColumnMapping
  replacementCount?: number
  readyToApply: boolean
  conflicts: ColumnRemapConflict[]
}

type ColumnRemapPlanOptions = {
  config: Visualization
  tempConfig?: Visualization
  keepURL: boolean
  newData: Object[]
  dataMetadata: Record<string, string>
  fileSource: string
  fileSourceType: string
  fileSize: number
  mimeType: string
  datasetKey?: string
  datasetLabel?: string
  oldDataOverride?: Object[]
  standaloneRawData?: Object[]
}

const DERIVED_DATA_KEYS = [
  'data',
  'formattedData',
  'originalFormattedData',
  'yAxisDomainData',
  'tableData',
  'dataMetadata'
]

const COLUMN_REMAP_EXCLUDED_BRANCHES = new Set([...DERIVED_DATA_KEYS, 'runtime', 'runtimeDataUrl'])

const DANGEROUS_COLUMN_KEYS = new Set(['__proto__', 'prototype', 'constructor'])

export const getSafeColumnTargets = (columns: Iterable<string>): string[] =>
  Array.from(columns).filter(column => !DANGEROUS_COLUMN_KEYS.has(column))

const uniqueSorted = (values: Iterable<string>) => Array.from(new Set(values)).sort((a, b) => a.localeCompare(b))

// Schema comparison and recursive remapping

export const collectColumnNames = (rows: unknown): string[] => {
  if (!Array.isArray(rows)) return []
  const columns: string[] = []
  rows.forEach(row => {
    if (!row || typeof row !== 'object' || Array.isArray(row)) return
    columns.push(...Object.keys(row))
  })
  return uniqueSorted(columns)
}

export const calculateColumnSchemaDiff = (oldRows: unknown, newRows: unknown): ColumnSchemaDiff => {
  const oldColumns = collectColumnNames(oldRows)
  const newColumns = collectColumnNames(newRows)
  const oldSet = new Set(oldColumns)
  const newSet = new Set(newColumns)

  return {
    oldColumns,
    newColumns,
    removed: oldColumns.filter(column => !newSet.has(column)),
    added: newColumns.filter(column => !oldSet.has(column)),
    unchanged: oldColumns.filter(column => newSet.has(column))
  }
}

const getTransformedData = (data: Object[], dataDescription: any): Object[] =>
  new DataTransform().developerStandardize(data, dataDescription) || data

export const getEffectiveColumnNames = (data: Object[], dataDescription: any): string[] => {
  const rawColumns = collectColumnNames(data)
  const transformedColumns = collectColumnNames(getTransformedData(data, dataDescription))
  return uniqueSorted([...rawColumns, ...transformedColumns])
}

export const getDashboardDatasetSchemas = (
  datasets: Record<string, { data?: Object[]; dataDescription?: any }> | undefined
): DashboardDatasetSchema[] =>
  Object.entries(datasets || {}).map(([datasetKey, dataset]) => ({
    datasetKey,
    columns: getEffectiveColumnNames(dataset.data || [], dataset.dataDescription)
  }))

const isObject = (value: unknown): value is Record<string, unknown> =>
  value !== null && typeof value === 'object' && !Array.isArray(value)

const ownsColumnKeyedRegistry = (value: Record<string, unknown>) => value.type === 'chart' || value.type === 'table'

const isColumnIdentityKey = (key: string, entry: unknown) => {
  if (!isObject(entry)) return false
  return !entry.name || entry.name === key
}

export const findColumnRemapMatches = (
  value: unknown,
  columns: Iterable<string>,
  path: Array<string | number> = []
): ColumnRemapMatch[] => {
  const columnSet = columns instanceof Set ? columns : new Set(columns)
  const matches: ColumnRemapMatch[] = []
  const rootDatasets = isObject(value) && isObject(value.datasets) ? value.datasets : {}
  const datasetKeys = new Set(Object.keys(rootDatasets))

  const visit = (current: unknown, currentPath: Array<string | number>, isColumnRegistry = false) => {
    if (typeof current === 'string') {
      if (columnSet.has(current)) matches.push({ kind: 'string', path: currentPath, value: current })
      return
    }

    if (Array.isArray(current)) {
      current.forEach((item, index) => visit(item, [...currentPath, index]))
      return
    }

    if (!isObject(current)) return

    Object.entries(current).forEach(([key, child]) => {
      if (!isColumnRegistry && COLUMN_REMAP_EXCLUDED_BRANCHES.has(key)) return
      const childPath = [...currentPath, key]
      const isDatasetReference =
        (key === 'dataKey' || key === 'datasetKey') && typeof child === 'string' && datasetKeys.has(child)
      if (isColumnRegistry && isColumnIdentityKey(key, child) && columnSet.has(key)) {
        matches.push({ kind: 'key', path: childPath, value: key })
      }
      if (isDatasetReference) return
      visit(child, childPath, key === 'columns' && ownsColumnKeyedRegistry(current))
    })
  }

  visit(value, path)
  return matches
}

export const validateColumnMapping = (
  mapping: ColumnMapping,
  requiredSources: Iterable<string>,
  allowedTargets: Iterable<string>
): ColumnRemapConflict[] => {
  const required = new Set(requiredSources)
  const allowed = new Set(allowedTargets)
  const conflicts: ColumnRemapConflict[] = []
  const usedTargets = new Map<string, string>()

  required.forEach(source => {
    if (!mapping[source]) {
      conflicts.push({
        kind: 'incomplete-mapping',
        column: source,
        message: `Choose a replacement for removed column "${source}".`
      })
    }
  })

  Object.entries(mapping).forEach(([source, target]) => {
    if (!required.has(source)) {
      conflicts.push({
        kind: 'invalid-source',
        column: source,
        message: `"${source}" is not a required removed column.`
      })
    }
    if (!allowed.has(target)) {
      conflicts.push({
        kind: 'invalid-target',
        column: target,
        message: `"${target}" is not a newly added replacement column.`
      })
    }
    if (DANGEROUS_COLUMN_KEYS.has(source) || DANGEROUS_COLUMN_KEYS.has(target)) {
      const column = DANGEROUS_COLUMN_KEYS.has(target) ? target : source
      conflicts.push({
        kind: 'unsafe-key',
        column,
        message: `"${column}" is a reserved name and cannot be remapped safely. Rename this column in the replacement data and try again.`
      })
    }
    const priorSource = usedTargets.get(target)
    if (priorSource && priorSource !== source) {
      conflicts.push({
        kind: 'reused-target',
        column: target,
        message: `Replacement column "${target}" is already used by "${priorSource}".`
      })
    }
    usedTargets.set(target, source)
  })

  return conflicts
}

const pathLabel = (path: Array<string | number>) => (path.length ? path.join('.') : 'configuration root')

const defineOwnProperty = (target: Record<string, unknown>, key: string, value: unknown) => {
  Object.defineProperty(target, key, {
    configurable: true,
    enumerable: true,
    value,
    writable: true
  })
}

export const applyColumnMapping = <T>(value: T, mapping: ColumnMapping): ColumnRemapResult<T> => {
  const conflicts: ColumnRemapConflict[] = []
  let replacements = 0
  const rootDatasets = isObject(value) && isObject(value.datasets) ? value.datasets : {}
  const datasetKeys = new Set(Object.keys(rootDatasets))

  Object.entries(mapping).forEach(([source, target]) => {
    if (DANGEROUS_COLUMN_KEYS.has(source) || DANGEROUS_COLUMN_KEYS.has(target)) {
      const column = DANGEROUS_COLUMN_KEYS.has(target) ? target : source
      conflicts.push({
        kind: 'unsafe-key',
        column,
        message: `"${column}" is a reserved name and cannot be remapped safely. Rename this column in the replacement data and try again.`
      })
    }
  })
  if (conflicts.length) return { replacements, conflicts }

  const visit = (current: unknown, path: Array<string | number>, isColumnRegistry = false): unknown => {
    if (typeof current === 'string') {
      if (Object.prototype.hasOwnProperty.call(mapping, current)) {
        replacements += 1
        return mapping[current]
      }
      return current
    }

    if (Array.isArray(current)) {
      const mapped = current.map((item, index) => visit(item, [...path, index]))
      const originalStrings = current.filter(item => typeof item === 'string') as string[]
      const mappedStrings = mapped.filter(item => typeof item === 'string') as string[]
      if (new Set(mappedStrings).size < new Set(originalStrings).size) {
        const targetOrigins = new Map<string, string>()
        let duplicateSource: string
        let duplicateTarget: string
        originalStrings.some(source => {
          const target = Object.prototype.hasOwnProperty.call(mapping, source) ? mapping[source] : source
          const priorSource = targetOrigins.get(target)
          if (priorSource !== undefined && priorSource !== source) {
            duplicateSource = target !== source ? source : priorSource
            duplicateTarget = target
            return true
          }
          targetOrigins.set(target, source)
          return false
        })
        conflicts.push({
          kind: 'array-duplicate',
          path,
          message: `Remapping "${duplicateSource}" to "${duplicateTarget}" would create a duplicate configuration entry at ${pathLabel(
            path
          )}. Choose a different replacement column or remove the existing "${duplicateTarget}" entry before trying again.`
        })
      }
      return mapped
    }

    if (!isObject(current)) return current

    const next: Record<string, unknown> = {}
    const keyOrigins = new Map<string, string>()
    Object.entries(current).forEach(([key, child]) => {
      const isExcludedBranch = !isColumnRegistry && COLUMN_REMAP_EXCLUDED_BRANCHES.has(key)
      const isDatasetReference =
        (key === 'dataKey' || key === 'datasetKey') && typeof child === 'string' && datasetKeys.has(child)
      const mappedKey =
        !isExcludedBranch &&
        isColumnRegistry &&
        isColumnIdentityKey(key, child) &&
        Object.prototype.hasOwnProperty.call(mapping, key)
          ? mapping[key]
          : key
      if (mappedKey !== key) replacements += 1
      if (Object.prototype.hasOwnProperty.call(next, mappedKey)) {
        const priorKey = keyOrigins.get(mappedKey)
        const remappedSource = mappedKey !== key ? key : priorKey || key
        conflicts.push({
          kind: 'object-key-collision',
          path: [...path, key],
          message: `Remapping "${remappedSource}" to "${mappedKey}" would overwrite existing configuration at ${pathLabel(
            [...path, mappedKey]
          )}. Choose a different replacement column or remove the existing "${mappedKey}" configuration before trying again.`
        })
        return
      }
      if (isExcludedBranch) {
        defineOwnProperty(next, key, child)
        keyOrigins.set(key, key)
        return
      }
      defineOwnProperty(
        next,
        mappedKey,
        isDatasetReference
          ? child
          : visit(child, [...path, mappedKey], key === 'columns' && ownsColumnKeyedRegistry(current))
      )
      keyOrigins.set(mappedKey, key)
    })
    return next
  }

  const mappedValue = visit(value, []) as T
  return { value: conflicts.length ? undefined : mappedValue, replacements, conflicts }
}

export const findLiteralValueOverlaps = (rows: unknown, columns: Iterable<string>): ColumnRemapConflict[] => {
  if (!Array.isArray(rows)) return []
  const columnSet = new Set(columns)
  const found = new Set<string>()

  const visit = (value: unknown) => {
    if (typeof value === 'string' && columnSet.has(value)) found.add(value)
    else if (Array.isArray(value)) value.forEach(visit)
    else if (isObject(value)) Object.values(value).forEach(visit)
  }
  rows.forEach(row => isObject(row) && Object.values(row).forEach(visit))

  return Array.from(found).map(column => ({
    kind: 'literal-value-overlap',
    column,
    message: `"${column}" appears both as a column name and as a value in the current data, so COVE cannot safely distinguish every use. Keep "${column}" as the column name, or first replace the data with a same-schema version that changes the literal value, then try again.`
  }))
}

export const findDashboardColumnAmbiguities = (
  datasetSchemas: DashboardDatasetSchema[],
  selectedDatasetKey: string,
  columns: Iterable<string>
): ColumnRemapConflict[] => {
  const requested = new Set(columns)
  const conflicts: ColumnRemapConflict[] = []
  datasetSchemas.forEach(({ datasetKey }) => {
    if (!requested.has(datasetKey)) return
    conflicts.push({
      kind: 'dashboard-ambiguity',
      column: datasetKey,
      message: `"${datasetKey}" is both a column name and a dashboard dataset ID. Dataset IDs cannot be renamed by this tool. Keep "${datasetKey}" as the column name, or cancel and import an updated dashboard JSON configuration with a different dataset ID.`
    })
  })
  datasetSchemas.forEach(({ datasetKey, columns: datasetColumns }) => {
    if (datasetKey === selectedDatasetKey) return
    datasetColumns.forEach(column => {
      if (!requested.has(column)) return
      conflicts.push({
        kind: 'dashboard-ambiguity',
        column,
        message: `"${column}" also exists in dashboard dataset "${datasetKey}". COVE replaces one dataset at a time and cannot safely determine which dashboard references belong to each dataset. Keep "${column}" as the column name, or cancel and import a fully updated dashboard JSON configuration.`
      })
    })
  })
  return conflicts
}

export const getReferencedRemovedColumns = (config: unknown, diff: ColumnSchemaDiff): string[] => {
  const referenced = new Set(findColumnRemapMatches(config, diff.removed).map(match => match.value))
  return diff.removed.filter(column => referenced.has(column))
}

// Data Import workflow

const formatColumnList = (columns: string[]) => {
  const quoted = columns.map(column => `"${column}"`)
  if (quoted.length < 2) return quoted[0] || ''
  if (quoted.length === 2) return `${quoted[0]} and ${quoted[1]}`
  return `${quoted.slice(0, -1).join(', ')}, and ${quoted[quoted.length - 1]}`
}

export const isRawDataForDescription = (data: Object[], description: any) => {
  if (!description) return true
  const expectedColumns = [
    description.xKey,
    description.seriesKey,
    description.valueKey,
    ...(description.valueKeys || []),
    ...(description.valueKeysTallSupport || [])
  ].filter(Boolean)
  if (!expectedColumns.length) return true
  const availableColumns = new Set(collectColumnNames(data))
  return expectedColumns.every(column => availableColumns.has(column))
}

const getDataDescription = (sourceConfig: Visualization, datasetKey?: string) =>
  datasetKey ? sourceConfig.datasets?.[datasetKey]?.dataDescription : sourceConfig.dataDescription

const getTransformedDiff = (
  originalConfig: Visualization,
  workingConfig: Visualization,
  oldData: Object[],
  newData: Object[],
  datasetKey?: string
): { diff: ColumnSchemaDiff; required: string[] } => {
  const oldTransformed = getTransformedData(oldData, getDataDescription(originalConfig, datasetKey))
  const newTransformed = getTransformedData(newData, getDataDescription(workingConfig, datasetKey))
  const diff = calculateColumnSchemaDiff(oldTransformed, newTransformed)
  return { diff, required: getReferencedRemovedColumns(workingConfig, diff) }
}

const findRawGeneratedColumnCollisions = (
  config: Visualization,
  oldData: Object[],
  newData: Object[],
  datasetKey?: string
): { columns: string[]; conflicts: ColumnRemapConflict[] } => {
  const oldRawColumns = new Set(collectColumnNames(oldData))
  const newRawColumns = new Set(collectColumnNames(newData))
  const oldGeneratedColumns = collectColumnNames(
    getTransformedData(oldData, getDataDescription(config, datasetKey))
  ).filter(column => !oldRawColumns.has(column) && newRawColumns.has(column))
  const referencedCollisions = new Set(findColumnRemapMatches(config, oldGeneratedColumns).map(match => match.value))

  return {
    columns: oldGeneratedColumns,
    conflicts: oldGeneratedColumns
      .filter(column => referencedCollisions.has(column))
      .map(column => ({
        kind: 'schema-ambiguity',
        column,
        message: `"${column}" is a referenced generated column in the current data and also a raw column in the replacement data, so COVE cannot safely distinguish the two meanings. Rename the raw replacement column or import a fully updated JSON configuration.`
      }))
  }
}

export const evaluateRemapMappings = (
  pending: PendingDataReplacement,
  rawMapping: ColumnMapping,
  transformedMapping: ColumnMapping
): PendingDataReplacement => {
  const rawValidation = validateColumnMapping(rawMapping, pending.rawRequiredColumns, pending.rawAvailableColumns)
  const rawIncomplete = rawValidation.some(conflict => conflict.kind === 'incomplete-mapping')
  if (rawIncomplete) {
    return {
      ...pending,
      status: 'mapping',
      workingConfig: pending.originalConfig,
      rawMapping,
      transformedMapping: {},
      transformedRequiredColumns: [],
      transformedAvailableColumns: [],
      replacementCount: undefined,
      readyToApply: false,
      conflicts: rawValidation.filter(conflict => conflict.kind !== 'incomplete-mapping')
    }
  }
  if (rawValidation.length) {
    return {
      ...pending,
      status: 'mapping',
      rawMapping,
      replacementCount: undefined,
      readyToApply: false,
      conflicts: rawValidation
    }
  }

  const rawApplied = applyColumnMapping(pending.originalConfig, rawMapping)
  if (rawApplied.conflicts.length) {
    return {
      ...pending,
      status: 'mapping',
      rawMapping,
      transformedMapping: {},
      transformedRequiredColumns: [],
      transformedAvailableColumns: [],
      replacementCount: undefined,
      readyToApply: false,
      conflicts: rawApplied.conflicts
    }
  }

  const rawConfig = rawApplied.value as Visualization
  const transformed = getTransformedDiff(
    pending.originalConfig,
    rawConfig,
    pending.oldData,
    pending.newData,
    pending.datasetKey
  )
  const transformedAvailableColumns = getSafeColumnTargets(transformed.diff.added)
  if (!transformed.required.length) {
    return {
      ...pending,
      status: 'mapping',
      workingConfig: rawConfig,
      rawMapping,
      transformedMapping: {},
      transformedRequiredColumns: [],
      transformedAvailableColumns: [],
      replacementCount: rawApplied.replacements,
      readyToApply: true,
      conflicts: []
    }
  }

  const dashboardConflicts = pending.datasetKey
    ? findDashboardColumnAmbiguities(pending.dashboardDatasetSchemas || [], pending.datasetKey, transformed.required)
    : []
  if (dashboardConflicts.length) {
    return {
      ...pending,
      status: 'blocked',
      workingConfig: rawConfig,
      rawMapping,
      transformedMapping: {},
      transformedRequiredColumns: transformed.required,
      transformedAvailableColumns,
      replacementCount: undefined,
      readyToApply: false,
      conflicts: dashboardConflicts
    }
  }

  if (transformedAvailableColumns.length < transformed.required.length) {
    const hasOneColumn = transformed.required.length === 1
    const availableCount = transformedAvailableColumns.length
    return {
      ...pending,
      status: 'blocked',
      workingConfig: rawConfig,
      rawMapping,
      transformedMapping: {},
      transformedRequiredColumns: transformed.required,
      transformedAvailableColumns,
      replacementCount: undefined,
      readyToApply: false,
      conflicts: [
        {
          kind: 'invalid-target',
          message: `Generated ${hasOneColumn ? 'column' : 'columns'} ${formatColumnList(transformed.required)} ${
            hasOneColumn ? 'is' : 'are'
          } still referenced by the configuration, but only ${availableCount} usable new ${
            availableCount === 1 ? 'column is' : 'columns are'
          } available for ${transformed.required.length} required ${
            transformed.required.length === 1 ? 'mapping' : 'mappings'
          }. Each removed column needs a unique replacement. Update the source data or transformation settings so enough replacement columns are generated, or restore the values that generated the original ${
            hasOneColumn ? 'column' : 'columns'
          }.`
        }
      ]
    }
  }

  const transformedSources = new Set(transformed.required)
  const transformedTargets = new Set(transformedAvailableColumns)
  const validTransformedMapping = Object.fromEntries(
    Object.entries(transformedMapping).filter(
      ([source, target]) => transformedSources.has(source) && transformedTargets.has(target)
    )
  )
  const transformedValidation = validateColumnMapping(
    validTransformedMapping,
    transformed.required,
    transformedAvailableColumns
  )
  if (transformedValidation.length) {
    return {
      ...pending,
      status: 'mapping',
      workingConfig: rawConfig,
      rawMapping,
      transformedMapping: validTransformedMapping,
      transformedRequiredColumns: transformed.required,
      transformedAvailableColumns,
      replacementCount: undefined,
      readyToApply: false,
      conflicts: transformedValidation.filter(conflict => conflict.kind !== 'incomplete-mapping')
    }
  }

  const transformedApplied = applyColumnMapping(rawConfig, validTransformedMapping)
  return {
    ...pending,
    status: 'mapping',
    workingConfig: (transformedApplied.value || rawConfig) as Visualization,
    rawMapping,
    transformedMapping: validTransformedMapping,
    transformedRequiredColumns: transformed.required,
    transformedAvailableColumns,
    replacementCount:
      transformedApplied.conflicts.length > 0 ? undefined : rawApplied.replacements + transformedApplied.replacements,
    readyToApply: transformedApplied.conflicts.length === 0,
    conflicts: transformedApplied.conflicts
  }
}

export const createColumnRemapPlan = ({
  config,
  tempConfig,
  keepURL,
  newData,
  dataMetadata,
  fileSource,
  fileSourceType,
  fileSize,
  mimeType,
  datasetKey,
  datasetLabel,
  oldDataOverride,
  standaloneRawData
}: ColumnRemapPlanOptions): PendingDataReplacement | undefined => {
  const originalConfig = { ...config, ...tempConfig } as Visualization
  const oldData =
    oldDataOverride ||
    ((datasetKey ? config.datasets?.[datasetKey]?.data : standaloneRawData || config.data) as Object[])
  if (!Array.isArray(oldData) || !oldData.length) return undefined

  const currentSource = datasetKey ? originalConfig.datasets?.[datasetKey] : originalConfig
  if (keepURL && fileSourceType === 'url' && currentSource?.dataUrl && currentSource.dataUrl === fileSource) {
    return undefined
  }

  const rawDiff = calculateColumnSchemaDiff(oldData, newData)
  const rawRequired = getReferencedRemovedColumns(originalConfig, rawDiff)
  const rawGeneratedCollisions = findRawGeneratedColumnCollisions(originalConfig, oldData, newData, datasetKey)
  const collisionColumns = new Set(rawGeneratedCollisions.columns)
  const rawAvailableColumns = getSafeColumnTargets(rawDiff.added).filter(column => !collisionColumns.has(column))
  const dashboardDatasetSchemas = datasetKey ? getDashboardDatasetSchemas(config.datasets) : undefined
  const conflicts = [
    ...findLiteralValueOverlaps(oldData, rawRequired),
    ...rawGeneratedCollisions.conflicts,
    ...(datasetKey ? findDashboardColumnAmbiguities(dashboardDatasetSchemas || [], datasetKey, rawRequired) : [])
  ]

  const base: PendingDataReplacement = {
    status: 'mapping',
    newData,
    dataMetadata,
    fileSource,
    fileSourceType,
    fileSize,
    mimeType,
    datasetKey,
    datasetLabel,
    dashboardDatasetSchemas,
    oldData,
    originalConfig,
    workingConfig: originalConfig,
    rawRequiredColumns: rawRequired,
    rawAvailableColumns,
    transformedRequiredColumns: [],
    transformedAvailableColumns: [],
    rawMapping: {},
    transformedMapping: {},
    replacementCount: undefined,
    readyToApply: false,
    conflicts
  }

  if (conflicts.length) return { ...base, status: 'blocked' }

  if (rawRequired.length) {
    if (rawAvailableColumns.length >= rawRequired.length) return base
    const hasOneColumn = rawRequired.length === 1
    const availableCount = rawAvailableColumns.length
    return {
      ...base,
      status: 'blocked',
      conflicts: [
        {
          kind: 'invalid-target',
          message: `Referenced ${hasOneColumn ? 'column' : 'columns'} ${formatColumnList(rawRequired)} ${
            hasOneColumn ? 'is' : 'are'
          } missing from the replacement data, but only ${availableCount} usable new ${
            availableCount === 1 ? 'column is' : 'columns are'
          } available for ${rawRequired.length} required ${
            rawRequired.length === 1 ? 'mapping' : 'mappings'
          }. Each removed column needs a unique replacement. Add enough replacement columns to the file or restore the original column ${
            hasOneColumn ? 'name' : 'names'
          }, then upload it again.`
        }
      ]
    }
  }

  const evaluated = evaluateRemapMappings(base, {}, {})
  return evaluated.transformedRequiredColumns.length ? evaluated : undefined
}

export const buildReplacementConfig = (pending: PendingDataReplacement, keepURL: boolean): Visualization => {
  const transform = new DataTransform()
  let nextConfig: any = prepareConfigForDataReplacement(pending.workingConfig, pending.datasetKey)
  const setDataURL = keepURL && pending.fileSourceType === 'url'

  if (pending.datasetKey) {
    const existingDataset = nextConfig.datasets[pending.datasetKey] || {}
    Object.values(nextConfig.datasets || {}).forEach((dataset: any) => {
      dataset.preview = false
    })
    const dataDescription = existingDataset.dataDescription
    nextConfig.datasets[pending.datasetKey] = {
      ...existingDataset,
      ...(pending.datasetLabel ? { label: pending.datasetLabel } : {}),
      data: pending.newData,
      dataMetadata: pending.dataMetadata,
      formattedData: transform.developerStandardize(pending.newData, dataDescription),
      dataFileSize: pending.fileSize,
      dataFileName: pending.fileSource,
      dataFileSourceType: pending.fileSourceType,
      dataFileFormat: pending.mimeType.split('/')[1].toUpperCase(),
      preview: true
    }
    if (setDataURL) nextConfig.datasets[pending.datasetKey].dataUrl = pending.fileSource
    else delete nextConfig.datasets[pending.datasetKey].dataUrl
  } else {
    nextConfig.data = pending.newData
    nextConfig.dataMetadata = pending.dataMetadata
    nextConfig.dataFileName = pending.fileSource
    nextConfig.dataFileSourceType = pending.fileSourceType
    nextConfig.formattedData = transform.developerStandardize(pending.newData, nextConfig.dataDescription)
    if (setDataURL) nextConfig.dataUrl = pending.fileSource
    else delete nextConfig.dataUrl
  }

  return nextConfig
}

// Derived-state cleanup

export const prepareConfigForDataReplacement = <T>(config: T, datasetKey?: string): T => {
  const cloneWithoutRuntime = (value: unknown): unknown => {
    if (Array.isArray(value)) return value.map(cloneWithoutRuntime)
    if (!isObject(value)) return value
    return Object.fromEntries(
      Object.entries(value)
        .filter(([key]) => key !== 'runtime' && key !== 'runtimeDataUrl')
        .map(([key, child]) => [key, cloneWithoutRuntime(child)])
    )
  }

  const next = cloneWithoutRuntime(config) as Record<string, any>
  if (!datasetKey) {
    DERIVED_DATA_KEYS.forEach(key => delete next[key])
    return next as T
  }

  const clearConsumers = dashboard => {
    dashboard.rows?.forEach(row => {
      if (row.dataKey === datasetKey) DERIVED_DATA_KEYS.forEach(key => delete row[key])
    })
    Object.values(dashboard.visualizations || {}).forEach((visualization: any) => {
      if (visualization.dataKey === datasetKey) DERIVED_DATA_KEYS.forEach(key => delete visualization[key])
    })
  }
  clearConsumers(next)
  next.multiDashboards?.forEach(clearConsumers)
  return next as T
}
