import React, { createContext, useContext, useState } from 'react'

export const GlobalContext = createContext({})

export const GlobalContextProvider = ({ children }) => {
  const [ contextData, setContextData ] = useState({
    modal: {
      show: false,
      object: null,
    },
    globalActions: {
      setModalDisplay: (display) => {
        let payload = {...contextData.modal}
        payload.show = display
        setContextData(prevState => ({...prevState, modal: {...payload} }))
      },
      setModalObj: (obj) => {
        let payload = {...contextData.modal}
        payload.object = obj
        payload.show = true
        setContextData(prevState => ({...prevState, modal: {...payload} }))
      }
    }
  })

  return (
    <GlobalContext.Provider value={contextData}>
      {children}
    </GlobalContext.Provider>
  )
}

GlobalContextProvider.displayName = 'GlobalContext'

export const useGlobalContext = () => useContext(GlobalContext)
