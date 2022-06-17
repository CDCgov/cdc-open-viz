import React, { createContext, useContext, useCallback, useState, useRef } from 'react'

//Helpers
import getViewport from '../helpers/getViewport'

//Styles
import '../styles/v2/main.scss'

export const GlobalContext = createContext({})
export const useGlobalContext = () => useContext(GlobalContext)

export const GlobalContextProvider = ({ children }) => {
  const [ globalContextData, setGlobalContextData ] = useState({})
  const [ currentViewport, setCurrentViewport ] = useState('lg')

  //Overlay Actions -----------------------------------
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

  //General Actions & Data -----------------------------------
  const isEditor = () => window.location.href.includes('editor=true') ? 'editor' : false
  const isDashboard = false
  const getView = (isEditor() || isDashboard) || 'component'
  const getOS = navigator.userAgent.indexOf("Win") !== -1 ? "Win" : navigator.userAgent.indexOf("Mac") !== -1 ? "MacOS" : null

  //Observe changes to viewport size
  const resizeObserver = new ResizeObserver(entries => {
    for (let entry of entries) {
      let { width } = entry.contentRect
      setCurrentViewport(getViewport(width))
    }
  })

  //Create viewport size observer callback
  const outerContainerRef = useCallback(node => {
    if (node !== null) {
      resizeObserver.observe(node)
    }
  }, [])

  //Build Context
  const globalSettings = {
    os: getOS,
    view: getView,
    viewport: currentViewport,
    dimensions: globalContextData.dimensions,
    globalActions: {
      setGlobalContextData
    },
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
      <div className={'cove' + (currentViewport ? ' ' + currentViewport : '')} ref={outerContainerRef}>
        {children}
      </div>
    </GlobalContext.Provider>
  )
}

GlobalContextProvider.displayName = 'GlobalContext'
GlobalContext.displayName = 'GlobalContext'
