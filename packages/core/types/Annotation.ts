export type Annotation = {
  // Positioning mode: absolute uses x/y percentages, data anchors to data point
  anchorMode?: 'absolute' | 'data'

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
  // Data X value for data-anchored mode (timestamp, category, etc.)
  dataX?: any
  // x of subject (percentage 0-100)
  x: number
  // y of object (percentage 0-100)
  y: number
  // x offset of label from subject
  dx: number
  // y offset of label from subject
  dy: number
  // assigned series that the annotation should snap to
  seriesKey?: string
  // type of  connecting line from label to subject
  connectionType: 'line' | 'curve' | 'elbow' | 'none'
  // curve control point offset for curve connection type
  bezier?: number
  // marker type highlighting the subject
  marker: 'arrow' | 'circle'
  // should the item be snapped to the subject?
  snapToSubject: boolean
  // savedDimensions - the original dimensions of the svg when the svg was saved
  savedDimensions: [width: number, height: number]
  // displayDropdown - whether or not to show the mobile dropdown on desktop for annotations
  displayDropdown?: boolean
}
