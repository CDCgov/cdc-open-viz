import React, { createContext, useContext, useState } from 'react'

export const GlobalContext = createContext({})
export const useGlobalContext = () => useContext(GlobalContext)

export const GlobalContextProvider = ({ children }) => {
  const [ globalContextData, setGlobalContextData ] = useState({})

  const openOverlay = (obj) => {
    let payload = { object: obj, show: true }
    setGlobalContextData(context => ({ ...context, overlay: { ...payload } }))
  }

  const toggleOverlay = (display = false) => {
    setGlobalContextData(context => ({ ...context, overlay: {...context.overlay, show: display } }))
  }

  const globalSettings = {
    overlay: {
      object: globalContextData.overlay?.object || null,
      show: globalContextData.overlay?.show || false,
      actions: {
        openOverlay,
        toggleOverlay
      }
    }
  }

  return (
    <GlobalContext.Provider value={globalSettings}>
      {children}
    </GlobalContext.Provider>
  )
}
