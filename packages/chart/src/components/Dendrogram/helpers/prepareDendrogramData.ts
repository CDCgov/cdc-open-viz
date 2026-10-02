import { sanitizePaletteColor } from '@cdc/core/helpers/palettes/colorValidation'

import type {
  DendrogramColumns,
  DendrogramNode,
  DendrogramPreparedData,
  DendrogramRawRow,
  DendrogramValidationError
} from '../types'

const getScalar = (row: DendrogramRawRow, column?: string): string | null => {
  if (!column) return null
  const value = row[column]
  if (!['string', 'number'].includes(typeof value)) return null
  const normalized = String(value).trim()
  return normalized || null
}

const getParent = (row: DendrogramRawRow, column?: string): string | null | undefined => {
  if (!column) return undefined
  const value = row[column]
  if (value === null || typeof value === 'undefined' || value === '') return null
  if (!['string', 'number'].includes(typeof value)) return undefined
  return String(value).trim() || null
}

const getError = (nodes: DendrogramNode[]): { rootId?: string; error?: DendrogramValidationError } => {
  const nodesById = new Map<string, DendrogramNode>()
  for (const node of nodes) {
    if (nodesById.has(node.id)) {
      return {
        error: {
          code: 'duplicate-node',
          message: `Node ID “${node.id}” appears more than once. Each node must have a unique ID.`
        }
      }
    }
    nodesById.set(node.id, node)
  }

  const selfParent = nodes.find(node => node.parentId === node.id)
  if (selfParent) {
    return {
      error: {
        code: 'self-parent',
        message: `Node “${selfParent.id}” cannot be its own parent.`
      }
    }
  }

  const missingParentNode = nodes.find(node => node.parentId !== null && !nodesById.has(node.parentId))
  if (missingParentNode) {
    return {
      error: {
        code: 'missing-parent',
        message: `Node “${missingParentNode.id}” references missing parent “${missingParentNode.parentId}”.`
      }
    }
  }

  const visited = new Set<string>()
  for (const node of nodes) {
    if (visited.has(node.id)) continue
    const path = new Set<string>()
    const pathNodes: string[] = []
    let current: DendrogramNode | undefined = node
    while (current && !visited.has(current.id)) {
      if (path.has(current.id)) {
        return {
          error: {
            code: 'cycle',
            message: `The hierarchy contains a cycle involving node “${current.id}”. Remove the circular parent relationship.`
          }
        }
      }
      path.add(current.id)
      pathNodes.push(current.id)
      current = current.parentId === null ? undefined : nodesById.get(current.parentId)
    }
    pathNodes.forEach(id => visited.add(id))
  }

  const roots = nodes.filter(node => node.parentId === null)
  if (!roots.length) {
    return {
      error: {
        code: 'missing-root',
        message: 'The hierarchy needs one root row with a blank Parent ID.'
      }
    }
  }
  if (roots.length > 1) {
    return {
      error: {
        code: 'multiple-roots',
        message: `The hierarchy has ${roots.length} roots. Leave Parent ID blank for exactly one row.`
      }
    }
  }

  const rootId = roots[0].id
  const childrenByParent = new Map<string, string[]>()
  nodes.forEach(node => {
    if (node.parentId === null) return
    const siblings = childrenByParent.get(node.parentId)
    if (siblings) siblings.push(node.id)
    else childrenByParent.set(node.parentId, [node.id])
  })
  const reachable = new Set<string>()
  const pending = [rootId]
  while (pending.length) {
    const id = pending.pop()!
    if (reachable.has(id)) continue
    reachable.add(id)
    childrenByParent.get(id)?.forEach(childId => pending.push(childId))
  }
  if (reachable.size !== nodes.length) {
    return {
      error: {
        code: 'disconnected',
        message: 'Every node must connect to the single root. Check the Parent ID relationships.'
      }
    }
  }

  return { rootId }
}

export const prepareDendrogramData = (data: unknown, columns: DendrogramColumns = {}): DendrogramPreparedData => {
  const safeColumns = columns && typeof columns === 'object' ? columns : {}
  const rawRows = Array.isArray(data) ? data : []
  const nodes: DendrogramNode[] = []
  let rejectedRowCount = 0

  rawRows.forEach(rawRow => {
    if (!rawRow || typeof rawRow !== 'object' || Array.isArray(rawRow)) {
      rejectedRowCount += 1
      return
    }

    const row = rawRow as DendrogramRawRow
    const id = getScalar(row, safeColumns.node)
    const parentId = getParent(row, safeColumns.parent)
    if (!id || typeof parentId === 'undefined') {
      rejectedRowCount += 1
      return
    }

    const style = String(safeColumns.style ? row[safeColumns.style] ?? '' : '')
      .trim()
      .toLowerCase()
    const color = safeColumns.nodeColor ? sanitizePaletteColor(row[safeColumns.nodeColor]) : ''
    nodes.push({
      id,
      parentId,
      label: id,
      style: style === 'dashed' ? 'dashed' : 'solid',
      ...(color ? { color } : {})
    })
  })

  if (!nodes.length) return { nodes, rejectedRowCount }

  const duplicateCount = nodes.length - new Set(nodes.map(node => node.id)).size
  return { nodes, rejectedRowCount: rejectedRowCount + duplicateCount, ...getError(nodes) }
}
