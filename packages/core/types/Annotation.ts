export type Annotation = {
  // background opacity of annotation
  opacity: number
  text: string
  fontSize: number
  edit: {
    subject: boolean
    label: boolean
  }
  show: {
    desktop: boolean
    tablet: boolean
    mobile: boolean
  }
  // shap of marker/subject
  markerType: 'arrow' | 'circle'
  connectorType: 'line'
  // visx curve type
  lineType: string
  // color adustments if needed?
  colors: {
    connector: string
    label: string
    marker: string
  }
  selected: boolean
  // anchor points for lines
  anchor: {
    horizontal: boolean
    vertical: boolean
  }
  // x value for scaling
  xKey: string
  // y value for scaling
  yKey: string
  // x of subject
  x: number
  // y of object
  y: number
  // x offset of label from subject
  dx: number
  // y offset of label from subject
  dy: number
  // assigned series that the annotation should snap to
  seriesKey: string
}
