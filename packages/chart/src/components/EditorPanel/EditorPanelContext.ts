import { createContext, useContext } from 'react'

export type EditorPanelContext = {
  addNewExclusion?: Function
  updateField?: Function
  // warning messages updated within EditorPanel
  warningMsg?: { maxMsg?: string; minMsg?: string; rightMaxMessage?: string; minMsgRight?: string }
  // current enabled chart types in useEditorPermissions file
  enabledChartTypes?: string[]
  showBarStyleOptions?: boolean
  getDataValueOptions?: Function
  data?: object[]
  // function used on inputs, selects, etc. to update config values.
  getColumns?: Function
  getDataValues?: Function
  handleAddNewHighlightedBar?: Function
  handleHighlightedBarLegendLabel?: Function
  handleUpdateHighlightedBar?: Function
  handleUpdateHighlightedBarColor?: Function
  handleUpdateHighlightedBorderWidth?: Function
  highlightedBarValues?: Function
  highlightedSeriesValues?: Function
  isPaletteReversed?: boolean
  handleRemoveHighlightedBar?: Function
  setLollipopShape?: Function
  handlePaletteSelection?: (palette: string) => void
}

const EditorPanelContext = createContext<EditorPanelContext>(null)

export const useEditorPanelContext = () => {
  const editorPanelCtx = useContext(EditorPanelContext)

  if (editorPanelCtx === null) {
    throw new Error('COVE: editor panel context is null.')
  }

  return editorPanelCtx
}

export default EditorPanelContext
