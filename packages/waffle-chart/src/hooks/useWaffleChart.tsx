import React from 'react'

export const useWaffleChart = config => {
  // TODO: move these to state?
  const gaugeWidth = '100%'
  const gaugeHeight = 35

  const themeColor = {
    'theme-blue': '#005eaa',
    'theme-purple': '#712177',
    'theme-brown': '#705043',
    'theme-teal': '#00695c',
    'theme-pink': '#af4448',
    'theme-orange': '#bb4d00',
    'theme-slate': '#29434e',
    'theme-indigo': '#26418f',
    'theme-cyan': '#006778',
    'theme-green': '#4b830d',
    'theme-amber': '#fbab18'
  }

  const handleWaffleChartAriaLabel = (state, testing = false): string => {
    if (testing) console.log(`handleWaffleChartAriaLabels Testing On:`, state)
    try {
      let ariaLabel = 'Waffle chart'
      if (state.title) {
        ariaLabel += ` with the title: ${state.title}`
      }
      return ariaLabel
    } catch (e) {
      console.error(e.message)
    }
  }

  const gaugeColor = themeColor[config.theme]
  let dataFontSize = config.fontSize ? { fontSize: config.fontSize + 'px' } : null

  return { themeColor, gaugeWidth, gaugeHeight, gaugeColor, dataFontSize, handleWaffleChartAriaLabel }
}
