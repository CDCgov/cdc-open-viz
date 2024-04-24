export type Annotation = {
  title: string
  text: string
  fontSize: number
  show: {
    desktop: boolean
    tablet: boolean
    mobile: boolean
  }
  markerType: 'arrow'
  connectorType: 'line'
  colors: {
    connector: string
    label: string
    marker: string
  }
  selected: boolean
  anchor: {
    horizontal: boolean
    vertical: boolean
  }
  xKey: string
  yKey: string
  x: number
  y: number
  dx: number
  dy: number
}
