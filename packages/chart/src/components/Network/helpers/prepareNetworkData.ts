import type { NetworkColumns, NetworkLink, NetworkPreparedData, NetworkRawRow } from '../types'
import { sanitizePaletteColor } from '@cdc/core/helpers/palettes/colorValidation'

const getLabel = (row: NetworkRawRow, column?: string) => {
  if (!column) return ''
  const value = row[column]
  if (value === null || typeof value === 'undefined') return ''
  if (!['string', 'number'].includes(typeof value)) return ''
  return String(value).trim()
}

const getWeight = (row: NetworkRawRow, column?: string) => {
  if (!column) return 1
  const rawValue = row[column]
  if (typeof rawValue === 'string') {
    const trimmedValue = rawValue.trim()
    if (!/^(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(trimmedValue)) return null
  }
  const value = typeof rawValue === 'string' ? rawValue.replaceAll(',', '').trim() : rawValue
  const weight = Number(value)
  return Number.isFinite(weight) && weight > 0 ? weight : null
}

const getStyle = (row: NetworkRawRow, column?: string): NetworkLink['style'] => {
  if (!column) return 'solid'
  return String(row[column] ?? '')
    .trim()
    .toLowerCase() === 'dashed'
    ? 'dashed'
    : 'solid'
}

const getNodeColor = (row: NetworkRawRow, column?: string) => {
  if (!column) return ''
  return sanitizePaletteColor(row[column])
}

export const prepareNetworkData = (
  data: unknown,
  columns: NetworkColumns = {},
  directed = false
): NetworkPreparedData => {
  const rawRows = Array.isArray(data) ? data : []
  const rows = rawRows.filter(row => row && typeof row === 'object' && !Array.isArray(row)) as NetworkRawRow[]
  const linksByPair = new Map<string, NetworkLink>()
  const nodeColors = new Map<string, string>()
  let rejectedRowCount = rawRows.length - rows.length

  rows.forEach(row => {
    const source = getLabel(row, columns.source)
    const target = getLabel(row, columns.target)
    const weight = getWeight(row, columns.weight)
    const style = getStyle(row, columns.style)

    if (!source || !target || source === target || weight === null) {
      rejectedRowCount += 1
      return
    }

    const [normalizedSource, normalizedTarget] = !directed && source > target ? [target, source] : [source, target]
    const id = JSON.stringify([normalizedSource, normalizedTarget])
    const existing = linksByPair.get(id)

    if (existing) {
      const aggregatedWeight = existing.weight + weight
      if (!Number.isFinite(aggregatedWeight)) {
        rejectedRowCount += 1
        return
      }
      existing.weight = aggregatedWeight
      existing.rowCount += 1
      if (style === 'dashed') existing.style = 'dashed'
    } else {
      linksByPair.set(id, {
        id,
        source: normalizedSource,
        target: normalizedTarget,
        weight,
        rowCount: 1,
        style
      })
    }

    const nodeColor = getNodeColor(row, columns.nodeColor)
    if (nodeColor && !nodeColors.has(source)) nodeColors.set(source, nodeColor)
  })

  const links = Array.from(linksByPair.values()).sort((a, b) => a.id.localeCompare(b.id))
  const connectionCounts = new Map<string, number>()
  links.forEach(link => {
    connectionCounts.set(link.source, (connectionCounts.get(link.source) || 0) + 1)
    connectionCounts.set(link.target, (connectionCounts.get(link.target) || 0) + 1)
  })

  const nodes = Array.from(connectionCounts, ([id, connectionCount]) => {
    const color = nodeColors.get(id)
    return color ? { id, connectionCount, color } : { id, connectionCount }
  }).sort((a, b) => a.id.localeCompare(b.id))

  return { nodes, links, rejectedRowCount, hasWeights: Boolean(columns.weight) }
}
