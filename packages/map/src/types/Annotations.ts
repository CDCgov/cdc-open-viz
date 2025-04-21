type Annotation = {
  /** The x-coordinate of the annotation */
  x: number
  /** The y-coordinate of the annotation */
  y: number
  /** The x-offset for the annotation's text */
  dx: number
  /** The y-offset for the annotation's text */
  dy: number
  /** The opacity level of the annotation */
  opacity: number
  /** The text content of the annotation */
  text: string
  /** The type of connection for the annotation */
  connectionType: string
  edit: {
    /** Indicates if the label can be edited */
    label: boolean
    /** Indicates if the subject can be edited */
    subject: boolean
  }
  /** The type of marker used for the annotation */
  marker: 'arrow' | 'circle'
}
