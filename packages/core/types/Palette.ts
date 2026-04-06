export type PaletteVersion = '1.0' | '2.0'

export type PaletteBackup = {
  name: string
  type?: 'twoColor' | 'primary'
  version?: PaletteVersion
  isReversed?: boolean
}

export type Palette = {
  name?: string
  customColors?: string[]
  customColorsOrdered?: string[]
  version?: PaletteVersion
  isReversed?: boolean
  backups?: PaletteBackup[]
}

export type TwoColorConfig = {
  palette?: string
  isPaletteReversed?: boolean
}
