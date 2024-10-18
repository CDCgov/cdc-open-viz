import { Action } from '@cdc/core/types/Action'

type ADD_ERROR_MESSAGE = Action<'ADD_ERROR_MESSAGE', string>
type DISMISS_ERROR_MESSAGE = Action<'DISMISS_ERROR_MESSAGE', number>

type errorMessagesActions = ADD_ERROR_MESSAGE | DISMISS_ERROR_MESSAGE
export default errorMessagesActions
