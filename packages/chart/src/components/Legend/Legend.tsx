import { useContext } from 'react'
import ConfigContext from '../../ConfigContext'
import LegendComponent from './Legend.Component'
import { createFormatLabels } from './helpers/createFormatLabels'

/* eslint-disable jsx-a11y/no-noninteractive-tabindex, jsx-a11y/no-static-element-interactions */
const Legend = () => {
  // prettier-ignore
  const {
    config,
    colorScale,
    seriesHighlight,
    highlight,
    tableData,
    highlightReset,
    transformedData: data,
    currentViewport
  } = useContext(ConfigContext)

  if (!config.legend) return null
  // create fn to reverse labels while legend is Bottom.  Legend-right , legend-left works by default.

  const createLegendLabels = createFormatLabels(config, tableData, data, colorScale)

  return config.visualizationType !== 'Box Plot' && <LegendComponent config={config} colorScale={colorScale} seriesHighlight={seriesHighlight} highlight={highlight} highlightReset={highlightReset} currentViewport={currentViewport} formatLabels={createLegendLabels} />
}

export default Legend
