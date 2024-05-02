import { Config } from '../types/Config'
import MarkupIncludeActions from './markupInclude.actions'

export type MarkupIncludeState = {
  config?: Config
  loading: boolean
  urlMarkup: string
  markupError: any
  errorMessage: any
  coveLoadedHasRan: boolean
}

const reducer = (state: MarkupIncludeState, action: MarkupIncludeActions): MarkupIncludeState => {
  switch (action.type) {
    case 'SET_CONFIG': {
      return { ...state, config: action.payload }
    }
    case 'SET_LOADING': {
      return { ...state, loading: action.payload }
    }
    case 'SET_URL_MARKUP': {
      return { ...state, urlMarkup: action.payload }
    }
    case 'SET_MARKUP_ERROR': {
      return { ...state, markupError: action.payload }
    }
    case 'SET_ERROR_MESSAGE': {
      return { ...state, errorMessage: action.payload }
    }
    case 'SET_COVE_LOADED_HAS_RAN': {
      return { ...state, coveLoadedHasRan: action.payload }
    }
  }
}

export default reducer
