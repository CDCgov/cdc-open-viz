import React, { createContext, useContext, useState } from 'react'

export const GlobalContext = createContext({})
export const useGlobalContext = () => useContext(GlobalContext)

export const GlobalContextProvider = ({ children }) => {
  const [ globalContextData, setGlobalContextData ] = useState({})

  const openModal = (modal) => {
    let payload = { object: modal, showModal: true }
    setGlobalContextData(context => ({ ...context, modal: { ...payload } }))
  }

  const toggleModal = (display = false) => {
    setGlobalContextData(context => ({ ...context, modal: {...context.modal, showModal: display } }))
  }

  const globalSettings = {
    modal: {
      object: globalContextData.modal?.object || null,
      showModal: globalContextData.modal?.showModal || false,
      actions: {
        openModal,
        toggleModal
      }
    }
  }

  return (
    <GlobalContext.Provider value={globalSettings}>
      {children}
    </GlobalContext.Provider>
  )
}
