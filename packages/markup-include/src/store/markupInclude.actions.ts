import type { MarkupIncludeConfig } from '@cdc/core/types/MarkupInclude'

type Action<T, P> = { type: T; payload: P }

type SET_CONFIG = Action<'SET_CONFIG', MarkupIncludeConfig>
type SET_LOADING = Action<'SET_LOADING', boolean>
type SET_URL_MARKUP = Action<'SET_URL_MARKUP', string>
type SET_MARKUP_ERROR = Action<'SET_MARKUP_ERROR', any>
type SET_ERROR_MESSAGE = Action<'SET_ERROR_MESSAGE', any>
type SET_COVE_LOADED_HAS_RAN = Action<'SET_COVE_LOADED_HAS_RAN', boolean>

// prettier-ignore
type MarkupIncludeActions =
  | SET_CONFIG
  | SET_LOADING
  | SET_URL_MARKUP
  | SET_MARKUP_ERROR
  | SET_ERROR_MESSAGE
  | SET_COVE_LOADED_HAS_RAN

export default MarkupIncludeActions
