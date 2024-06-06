export type Annotation = {
  // background opacity of annotation
  opacity: number
  // HTML text string to display in annotation
  text: string
  // can the user edit/drag the annotation
  edit: {
    subject: boolean
    label: boolean
  }
  // if the connectionType is curve - allow choosing a visx curve type
  lineType: string
  // anchor points for lines
  anchor: {
    horizontal: boolean
    vertical: boolean
  }
  // x value for scaling
  xKey: string
  // y value for scaling
  yKey: string
  // orignal x value of subject
  originalX: number
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
  // if the dragged item should be snapped to the nearest point
  snapToNearestPoint: boolean
  // type of  connecting line from label to subject
  connectionType: 'line' | 'curve' | 'elbow' | 'none'
  // marker type highlighting the subject
  marker: 'arrow' | 'circle'
  // should the item be snapped to the subject?
  snapToSubject: boolean
  // savedDimensions - the original dimensions of the svg when the svg was saved
  savedDimensions: [width: number, height: number]
}
