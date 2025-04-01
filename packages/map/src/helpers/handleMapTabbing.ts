import { type MapConfig } from '../types/MapConfig'

export const handleMapTabbing = (state: MapConfig, loading: boolean, legendId: string) => {
  const { general, runtime, table } = state

  const hasDataTable =
    runtime.editorErrorMessage.length === 0 &&
    true === table.forceDisplay &&
    general.type !== 'navigation' &&
    false === loading

  let tabbingID: string

  // 1) skip to legend
  if (general.showSidebar) {
    tabbingID = legendId
  }

  // 2) skip to data table if it exists and not a navigation map
  if (hasDataTable && !general.showSidebar) {
    tabbingID = `dataTableSection__${Date.now()}`
  }

  // 3) if it's a navigation map skip to the dropdown.
  if (state.general.type === 'navigation') {
    tabbingID = `dropdown-${Date.now()}`
  }

  // 4) handle other options
  return tabbingID || '!'
}
