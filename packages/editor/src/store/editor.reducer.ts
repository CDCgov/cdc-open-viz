import _ from 'lodash'
import EditorActions from './editor.actions'
import { Visualization } from '@cdc/core/types/Visualization'
import { devToolsWrapper } from '@cdc/core/helpers/withDevTools'

export type EditorState = {
  config?: Visualization
  tempConfig?: Visualization | null
  errors: string[]
  currentViewport: string
  globalActive: number
  newViz?: boolean
}
const reducer = (state: EditorState, action: EditorActions): EditorState => {
  switch (action.type) {
    case 'EDITOR_SAVE': {
      return { ...state, config: action.payload, tempConfig: null }
    }
    case 'EDITOR_SET_CONFIG': {
      return { ...state, config: action.payload }
    }
    case 'EDITOR_TEMP_SAVE': {
      return { ...state, tempConfig: action.payload }
    }
    case 'EDITOR_SET_ERRORS': {
      return { ...state, errors: action.payload }
    }
    case 'EDITOR_SET_VIEWPORT': {
      return { ...state, currentViewport: action.payload }
    }
    case 'EDITOR_SET_GLOBALACTIVE': {
      return { ...state, globalActive: action.payload }
    }
    default:
      return state
  }
}

export default devToolsWrapper<EditorState, EditorActions>(reducer)
