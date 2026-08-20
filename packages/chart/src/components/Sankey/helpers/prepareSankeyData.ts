import type { SankeyColumns, SankeyPreparedData, SankeyPreparedLink, SankeyRawRow } from '../types'

const SOURCE_FIELDS = ['source', 'from']
const TARGET_FIELDS = ['target', 'to']
const VALUE_FIELDS = ['value', 'weight', 'count']

const getFieldValue = (row: SankeyRawRow, fieldNames: string[], selectedFieldName?: string) => {
  const keys = Object.keys(row)
  const selectedField = selectedFieldName?.trim()

  if (selectedField) {
    if (Object.prototype.hasOwnProperty.call(row, selectedField)) return row[selectedField]

    const matchingSelectedKey = keys.find(key => key.toLowerCase() === selectedField.toLowerCase())
    if (matchingSelectedKey) return row[matchingSelectedKey]
  }

  for (const fieldName of fieldNames) {
    if (Object.prototype.hasOwnProperty.call(row, fieldName)) return row[fieldName]

    const matchingKey = keys.find(key => key.toLowerCase() === fieldName)
    if (matchingKey) return row[matchingKey]
  }
}

const toLabel = (value: unknown) => {
  if (value === undefined || value === null) return ''
  return String(value).trim()
}

const toPositiveNumber = (value: unknown) => {
  if (typeof value === 'number') return Number.isFinite(value) && value > 0 ? value : null
  if (typeof value !== 'string') return null

  const normalizedValue = Number(value.replace(/,/g, '').trim())
  return Number.isFinite(normalizedValue) && normalizedValue > 0 ? normalizedValue : null
}

export const getSankeyInputRows = (data: unknown): SankeyRawRow[] => {
  if (!Array.isArray(data)) return []
  return data.filter(row => row && typeof row === 'object') as SankeyRawRow[]
}

export const prepareSankeyData = (data: unknown, columns: SankeyColumns = {}): SankeyPreparedData => {
  const rows = getSankeyInputRows(data)
  const linksByPair = new Map<string, SankeyPreparedLink>()
  let rejectedRowCount = 0

  rows.forEach(row => {
    const source = toLabel(getFieldValue(row, SOURCE_FIELDS, columns.source))
    const target = toLabel(getFieldValue(row, TARGET_FIELDS, columns.target))
    const value = toPositiveNumber(getFieldValue(row, VALUE_FIELDS, columns.value))

    if (!source || !target || value === null) {
      rejectedRowCount += 1
      return
    }

    const key = JSON.stringify([source, target])
    const existingLink = linksByPair.get(key)

    if (existingLink) {
      existingLink.value += value
      existingLink.rows.push(row)
      return
    }

    linksByPair.set(key, {
      id: `${source}--${target}`,
      source,
      target,
      value,
      rows: [row]
    })
  })

  const nodeIds = new Set<string>()
  const links = Array.from(linksByPair.values())

  links.forEach(link => {
    nodeIds.add(link.source)
    nodeIds.add(link.target)
  })

  return {
    links,
    nodes: Array.from(nodeIds).map(id => ({ id })),
    rejectedRowCount
  }
}
