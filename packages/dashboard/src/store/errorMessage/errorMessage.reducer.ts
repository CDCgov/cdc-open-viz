import _ from 'lodash'
import errorMessagesActions from './errorMessage.actions'
import { devToolsWrapper } from '@cdc/core/helpers/withDevTools'

export type errorMessagesState = string[]

const reducer = (state: errorMessagesState, action: errorMessagesActions): errorMessagesState => {
  switch (action.type) {
    case 'ADD_ERROR_MESSAGE': {
      const message = action.payload
      return [...state, message]
    }

    case 'DISMISS_ERROR_MESSAGE': {
      const messages = [...state]
      _.remove(messages, (_, index) => {
        return index === action.payload
      })
      return messages
    }
  }
}

export default devToolsWrapper<errorMessagesState, errorMessagesActions>(reducer)
