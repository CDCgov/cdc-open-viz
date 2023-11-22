import React, { ReactElement, createContext, useContext, useState } from 'react'

type Global = {
  overlay: {
    object: ReactElement,
    show: boolean,
    disableBgClose: boolean,
    actions: {
      openOverlay: (any, boolean?) => void,
      toggleOverlay: (boolean?) => void
    }
  }
}
export const GlobalContext = createContext<Global>({} as Global)
export const useGlobalContext = () => useContext(GlobalContext)

export const GlobalContextProvider = ({ children }) => {
  const [globalContextData, setGlobalContextData] = useState<Global>({} as Global)

  const openOverlay = (obj, disableBgClose = false) => {
    let payload = { object: obj, show: true, disableBgClose: disableBgClose }
    setGlobalContextData(context => ({ ...context, overlay: { ...payload } } as Global))
  }

  const toggleOverlay = (display = false) => {
    setGlobalContextData(context => ({
      ...context,
      overlay: {
        ...context.overlay,
        show: display
      }
    }))
  }

  const globalSettings: Global = {
    overlay: {
      object: globalContextData.overlay?.object || null,
      show: globalContextData.overlay?.show || false,
      disableBgClose: globalContextData.overlay?.disableBgClose || false,
      actions: {
        openOverlay,
        toggleOverlay
      }
    }
  }

  return <GlobalContext.Provider value={globalSettings}>{children}</GlobalContext.Provider>
}
