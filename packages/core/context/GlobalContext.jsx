import React, { createContext, useContext, useState } from 'react'

//Helpers
import getViewport from '../helpers/getViewport'

//Styles
import '../styles/v2/main.scss'

export const GlobalContext = createContext({})
export const useGlobalContext = () => useContext(GlobalContext)

export const GlobalContextProvider = ({ children }) => {
  const [ globalContextData, setGlobalContextData ] = useState({})

  //Overlay Actions
  const openOverlay = (obj, disableBgClose = false) => {
    let payload = { object: obj, show: true, disableBgClose: disableBgClose }
    setGlobalContextData(context => ({ ...context, overlay: { ...payload } }))
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

  //General Actions & Data
  let isEditor = () => window.location.href.includes('editor=true') ? 'editor' : false
  let isDashboard = false
  const getView = (isEditor() || isDashboard) || 'component'

  //Build Context
  const globalSettings = {
    view: getView,
    viewport: '',
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

  return (
    <GlobalContext.Provider value={globalSettings}>
      <div className="cove">
        {children}
      </div>
    </GlobalContext.Provider>
  )
}

GlobalContext.displayName = 'GlobalContext'
