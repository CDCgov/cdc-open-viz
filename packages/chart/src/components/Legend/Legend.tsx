import { useContext, forwardRef, Fragment } from 'react'
import ConfigContext from '../../ConfigContext'
import LegendComponent from './Legend.Component'
import { createFormatLabels } from './helpers/createFormatLabels'

/* eslint-disable jsx-a11y/no-noninteractive-tabindex, jsx-a11y/no-static-element-interactions */
const Legend = forwardRef((props, ref) => {
  // prettier-ignore
  const {
    // prettier-ignore
    config,
    colorScale,
    seriesHighlight,
    highlight,
    tableData,
    handleShowAll,
    transformedData: data,
    currentViewport,
    dimensions,
    getTextWidth,
    transformedData
  } = useContext(ConfigContext)
  if (!config.legend) return null
  // create fn to reverse labels while legend is Bottom.  Legend-right , legend-left works by default
  const { configUrl } = props

  const createLegendLabels = createFormatLabels(config, tableData, data, colorScale)

  return (
    <Fragment>
      <LegendComponent
        getTextWidth={getTextWidth}
        dimensions={dimensions}
        ref={ref}
        transformedData={transformedData}
        skipId={props.skipId || 'legend'}
        config={config}
        colorScale={colorScale}
        seriesHighlight={seriesHighlight}
        highlight={highlight}
        handleShowAll={handleShowAll}
        currentViewport={currentViewport}
        formatLabels={createLegendLabels}
        configUrl={configUrl}
      />
    </Fragment>
  )
})

export default Legend
