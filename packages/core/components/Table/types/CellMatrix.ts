import { ReactNode } from 'react'

export type CellMatrix = ReactNode[][]
export type GroupCellMatrix = Record<string, CellMatrix> | Map<string, CellMatrix>
