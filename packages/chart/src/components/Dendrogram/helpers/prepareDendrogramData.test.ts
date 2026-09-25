import { prepareDendrogramData } from './prepareDendrogramData'

describe('prepareDendrogramData', () => {
  const columns = { node: 'id', parent: 'parentId', style: 'linkStyle', nodeColor: 'color' }

  it('prepares one row per node with optional styles and literal colors', () => {
    const result = prepareDendrogramData(
      [
        { id: 'root', parentId: '', linkStyle: 'dashed', color: '#005eaa' },
        { id: 'child', parentId: 'root', linkStyle: 'DASHED', color: 'not-a-color' },
        { id: 3, parentId: 'child' }
      ],
      columns
    )

    expect(result).toEqual({
      rootId: 'root',
      rejectedRowCount: 0,
      nodes: [
        { id: 'root', parentId: null, label: 'root', style: 'dashed', color: '#005eaa' },
        { id: 'child', parentId: 'root', label: 'child', style: 'dashed' },
        { id: '3', parentId: 'child', label: '3', style: 'solid' }
      ]
    })
  })

  it('rejects malformed rows and non-scalar identifiers', () => {
    const result = prepareDendrogramData(
      [
        null,
        ['root'],
        { id: { value: 'root' }, parentId: '' },
        { id: 'root', parentId: [] },
        { id: 'ok', parentId: '' }
      ],
      columns
    )

    expect(result.rejectedRowCount).toBe(4)
    expect(result.nodes).toEqual([{ id: 'ok', parentId: null, label: 'ok', style: 'solid' }])
    expect(result.error).toBeUndefined()
  })

  it('handles null mappings and deeply nested hierarchies without recursion', () => {
    expect(prepareDendrogramData([{ id: 'root', parentId: '' }], null as any)).toEqual({
      nodes: [],
      rejectedRowCount: 1
    })

    const rows = Array.from({ length: 5000 }, (_, index) => ({
      id: `node-${index}`,
      parentId: index === 0 ? '' : `node-${index - 1}`
    }))
    const result = prepareDendrogramData(rows, columns)
    expect(result.error).toBeUndefined()
    expect(result.nodes).toHaveLength(5000)
  })

  it('counts duplicate node IDs as rejected rows', () => {
    const result = prepareDendrogramData(
      [
        { id: 'root', parentId: '' },
        { id: 'root', parentId: '' }
      ],
      columns
    )

    expect(result.error?.code).toBe('duplicate-node')
    expect(result.rejectedRowCount).toBe(1)
  })

  it.each([
    {
      name: 'duplicate IDs',
      rows: [
        { id: 'root', parentId: '' },
        { id: 'root', parentId: '' }
      ],
      code: 'duplicate-node'
    },
    {
      name: 'multiple roots',
      rows: [
        { id: 'root-a', parentId: '' },
        { id: 'root-b', parentId: '' }
      ],
      code: 'multiple-roots'
    },
    {
      name: 'missing parents',
      rows: [
        { id: 'root', parentId: '' },
        { id: 'child', parentId: 'missing' }
      ],
      code: 'missing-parent'
    },
    {
      name: 'self-parenting',
      rows: [
        { id: 'root', parentId: '' },
        { id: 'child', parentId: 'child' }
      ],
      code: 'self-parent'
    },
    {
      name: 'cycles',
      rows: [
        { id: 'root', parentId: '' },
        { id: 'a', parentId: 'b' },
        { id: 'b', parentId: 'a' }
      ],
      code: 'cycle'
    }
  ])('returns an actionable validation error for $name', ({ rows, code }) => {
    const result = prepareDendrogramData(rows, columns)

    expect(result.error?.code).toBe(code)
    expect(result.error?.message).toBeTruthy()
    expect(result.rootId).toBeUndefined()
  })

  it('does not mutate source rows or config mappings', () => {
    const rows = [
      { id: 'root', parentId: '' },
      { id: 'child', parentId: 'root' }
    ]
    const rowsBefore = structuredClone(rows)
    const columnsBefore = structuredClone(columns)

    prepareDendrogramData(rows, columns)

    expect(rows).toEqual(rowsBefore)
    expect(columns).toEqual(columnsBefore)
  })
})
