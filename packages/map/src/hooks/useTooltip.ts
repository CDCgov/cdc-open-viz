const useTooltip = props => {
  const { state, displayGeoName, displayDataAsText, supportedStatesFipsCodes } = props

  const config = state

  /**
   * On county maps there's a need to append the state name
   * @param {String} toolTipText - previous tooltip text to build upon
   * @param {Object} row - row of data to lookup fips code with using the geo column.
   * @returns {String} toolTipText - new toolTipText
   */
  const handleTooltipStateNameColumn = (toolTipText, row) => {
    const { geoType, type, hideGeoColumnInTooltip } = config.general
    if (geoType === 'us-county' && type !== 'us-geocode') {
      let stateFipsCode = row[config.columns.geo.name].substring(0, 2)
      const stateName = supportedStatesFipsCodes[stateFipsCode]
      toolTipText += hideGeoColumnInTooltip ? `<strong>${stateName}</strong><br/>` : `<strong>Location:  ${stateName}</strong><br/>`
    }
    return toolTipText
  }

  /**
   * On county and state maps, adds the ability to hide the geo column name (prefix)
   * @param {String} geoName - feature name
   * @returns {String} text to be appended to toolTipText
   */
  const handleTooltipGeoColumn = (geoName: string) => {
    const { hideGeoColumnInTooltip } = config.general as { hideGeoColumnInTooltip: boolean }

    const handleTooltipPrefix = (toolTipText: string) => {
      const { geoType, geoLabelOverride } = config.general
      switch (geoType) {
        case 'us':
          toolTipText = 'State: '
          break
        case 'us-county':
          toolTipText = 'County: '
          break
        case 'single-state':
          toolTipText = 'County: '
          break
        default:
          toolTipText = ''
          break
      }

      if (geoLabelOverride) toolTipText = `${geoLabelOverride}: `

      return toolTipText
    }

    const prefix = handleTooltipPrefix('')

    if (hideGeoColumnInTooltip) return `<strong>${displayGeoName(geoName)}</strong>`
    return `<p class="tooltip-heading">${prefix}${displayGeoName(geoName)}</p>`
  }

  /**
   * Handles special class descriptions in tooltips
   */
  const handleTooltipSpecialClassText = (specialClasses, column, row, value, columnKey) => {
    if (specialClasses && specialClasses.length && typeof specialClasses[0] === 'object') {
      for (const specialClass of specialClasses) {
        if (column.name === specialClass.key && String(row[specialClass.key]) === specialClass.value) {
          value = displayDataAsText(specialClass.label, columnKey)
          break
        }
      }
    }
    return value
  }

  const handleTooltipPrimaryColumn = (tooltipValue, column) => {
    const { hidePrimaryColumnInTooltip } = config.general as { hidePrimaryColumnInTooltip: boolean }
    let tooltipPrefix = column.label?.length > 0 ? column.label : ''
    if ((column.name === config.columns.primary.name && hidePrimaryColumnInTooltip) || !tooltipPrefix) return `<li class="tooltip-body">${tooltipValue}</li>`
    return `<li class="tooltip-body">${tooltipPrefix}: ${tooltipValue}</li>`
  }

  /**
   *
   * @param {String} toolTipText - previous tooltipText to build upon
   * @param {Object} row - row of data
   * @returns {String} new tooltipText value
   */
  const handleTooltipColumns = (toolTipText, row) => {
    const tooltipEnabledMaps = ['data', 'bubble', 'us-geocode', 'world-geocode', 'map']
    const {
      general: { type: currentMapType },
      columns,
      legend: { specialClasses }
    } = config

    if (tooltipEnabledMaps.includes(currentMapType) && undefined !== row) {
      toolTipText += `<ul>`

      // if tooltips are allowed, loop through each column
      Object.keys(columns).forEach(columnKey => {
        const column = config.columns[columnKey]

        if (column.tooltip) {
          let tooltipValue = handleTooltipSpecialClassText(specialClasses, column, row, '', columnKey)

          if (!tooltipValue) {
            tooltipValue = displayDataAsText(row[column.name], columnKey)
          }

          toolTipText += handleTooltipPrimaryColumn(tooltipValue, column)
        }
      })
      toolTipText += `</ul>`
    }

    return toolTipText
  }

  const buildTooltip = (row, geoName, toolTipText = '') => {
    if (!row) return

    // Handle County Location Columns
    toolTipText += handleTooltipStateNameColumn(toolTipText, row)

    // Handle Columns > Data Column In tooltips
    toolTipText += handleTooltipGeoColumn(geoName)

    // Handle Columns > Geography Column In tooltips
    toolTipText = handleTooltipColumns(toolTipText, row)

    return toolTipText
  }

  return {
    buildTooltip
  }
}

export default useTooltip
