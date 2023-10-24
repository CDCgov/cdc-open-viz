// todo: improve base config to extend from
// todo: theme type is different from waffle chart so its been assigned to any for now.
export type Config = {
  title: string
  showHeader: boolean
  type: string
  srcUrl: string
  theme: any
  visual: {
    border: boolean
    accent: boolean
    background: boolean
    hideBackgroundColor: boolean
    borderColorTheme: boolean
  }
}
