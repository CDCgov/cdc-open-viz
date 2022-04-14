import React, { createContext, useContext, useState } from 'react'

export const GlobalContext = createContext({})
export const useGlobalContext = () => useContext(GlobalContext)

export const GlobalContextProvider = ({ children }) => {
  const [ globalContextData, setGlobalContextData ] = useState({})

  const setGlobalModalObj = (obj) => {
    setGlobalContextData(prevState => ({ ...prevState, modal: obj }))
  }

  const setGlobalModalDisplay = (display) => {
    setGlobalContextData(prevState => ({ ...prevState, showModal: display }))
  }

  const globalSettings = {
    modal: globalContextData.modal,
    showModal: globalContextData.showModal,
    actions: {
      setGlobalContextData
    }
  }

  return (
    <GlobalContext.Provider value={globalSettings}>
      {children}
    </GlobalContext.Provider>
  )
}
