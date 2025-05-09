import { useContext } from 'react'
import { MapDispatchContext } from '../context'

const useModal = () => {
  const dispatch = useContext(MapDispatchContext)

  const closeModal = ({ target }, modal: Object) => {
    if (
      'string' === typeof target.className &&
      (target.className.includes('modal-close') || target.className.includes('modal-background')) &&
      null !== modal
    ) {
      dispatch({ type: 'SET_MODAL', payload: null })
    }
  }

  return {
    closeModal
  }
}

export default useModal
