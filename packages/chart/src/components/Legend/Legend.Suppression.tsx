import React, { useMemo } from 'react'
import { ChartConfig } from '../../types/ChartConfig'
import RichTooltip from '@cdc/core/components/RichTooltip/RichTooltip'
interface LegendProps {
  config: ChartConfig
  isLegendBottom: boolean
}

const LegendSuppression: React.FC<LegendProps> = ({ config, isLegendBottom }) => {
  const { preliminaryData, visualizationType, visualizationSubType, legend, data } = config
  const showPiePercent = config.dataFormat.showPiePercent && config.visualizationType === 'Pie'
  const hasOpenCircleEffects = () =>
    preliminaryData?.some(pd => pd.label && pd.type === 'effect' && pd.style !== 'Filled Circles') &&
    ['Line', 'Combo'].includes(visualizationType)

  const shouldShowSuppressedLabels = () =>
    !legend.hideSuppressedLabels &&
    preliminaryData?.some(
      pd => pd.label && pd.displayLegend && pd.type === 'suppression' && pd.value && (pd?.style || pd.symbol)
    ) &&
    ((visualizationType === 'Bar' && visualizationSubType === 'regular') ||
      visualizationType === 'Line' ||
      visualizationType === 'Combo')

  const renderEffectItems = () =>
    preliminaryData?.map(
      (pd, index) =>
        pd.label &&
        pd.type === 'effect' &&
        pd.style && (
          <div key={index} className='legend-preliminary'>
            <span className={pd.symbol}>{pd.lineCode}</span>
            <p>{pd.label}</p>
          </div>
        )
    )

  const renderSuppressedItems = () => {
    const getStyle = displayGray => {
      if (displayGray) {
        return {
          color: '#777772'
        }
      }
      return null
    }
    return preliminaryData?.map((pd, index) => {
      if (!pd.displayLegend || pd.type !== 'suppression') return null

      const baseClass = 'legend-preliminary'
      const itemKey = index + visualizationType

      if (visualizationType === 'Bar') {
        return (
          <div style={getStyle(pd.displayGray)} key={itemKey} className={`${baseClass} ${pd.symbol}`}>
            <span className={pd.symbol}>{pd.iconCode}</span>
            <p className={pd.type}>{pd.label}</p>
          </div>
        )
      }

      if (visualizationType === 'Line') {
        return (
          <div style={getStyle(pd.displayGray)} key={itemKey} className={baseClass}>
            <span>{pd.lineCode}</span>
            <p className={pd.type}>{pd.label}</p>
          </div>
        )
      }

      if (visualizationType === 'Combo') {
        return (
          <React.Fragment>
            {pd.symbol && pd.iconCode && (
              <div style={getStyle(pd.displayGray)} key={itemKey} className={`${baseClass} ${pd.symbol}`}>
                <span className={pd.symbol}>{pd.iconCode}</span>
                <p className={pd.type}>{pd.label}</p>
              </div>
            )}

            {pd.style && pd.lineCode && (
              <div style={getStyle(pd.displayGray)} key={itemKey} className={baseClass}>
                <span>{pd.lineCode}</span>
                <p>{pd.label}</p>
              </div>
            )}
          </React.Fragment>
        )
      }

      return null
    })
  }

  const getLegendContainerClass = () =>
    legend.singleRow && isLegendBottom ? 'legend-container__inner bottom single-row' : ''

  const sumSeries = (data, seriesKey) => {
    if (!Array.isArray(data)) return 0

    return data.reduce((total, row) => {
      const raw = row[seriesKey]
      const num = parseFloat(raw)
      return total + (Number.isFinite(num) ? num : 0)
    }, 0)
  }
  const total = sumSeries(data, config.runtime.yAxis.dataKey)

  const shouldShowSuppressedInfo = () =>
    !config.legend.hideSuppressionLink &&
    config.visualizationSubType !== 'stacked' &&
    preliminaryData?.some(pd => pd.label && pd.type === 'suppression' && pd.value && (pd?.style || pd.symbol))
  // controls Pie chart Legend  for calculated Area

  const renderCalculatedAreaItems = () => {
    return (
      <div key={'pie-asterisk'} className='legend-preliminary'>
        <span className={'Asterisk'}>{'**'}</span>
        <p>{'Calculated Area'}</p>
      </div>
    )
  }

  return (
    <React.Fragment>
      {hasOpenCircleEffects() && (
        <React.Fragment>
          <hr />
          <div className={getLegendContainerClass()}>{renderEffectItems()}</div>
        </React.Fragment>
      )}
      {showPiePercent && total < 100 && (
        <React.Fragment>
          <hr />
          <div className={getLegendContainerClass()}>{renderCalculatedAreaItems()}</div>
        </React.Fragment>
      )}

      {shouldShowSuppressedLabels() && (
        <React.Fragment>
          <hr />
          <div className={getLegendContainerClass()}>{renderSuppressedItems()}</div>
        </React.Fragment>
      )}
      {shouldShowSuppressedInfo() && (
        <div className='legend-container__outer link-container'>
          <p>
            This chart contains
            <RichTooltip
              tooltipContent={`Data is
                           suppressed to maintain statistical reliability.
                            This occurs when the number of respondents or 
                            reported values does not meet the minimum
                             reporting threshold.`}
              linkText='suppressed data'
              href={null}
              tooltipOpacity={config.tooltips.opacity}
            />
          </p>
        </div>
      )}
      {showPiePercent && (total < 100 || total > 100) && (
        <div className='legend-container__outer link-container'>
          <p>
            {total < 100 ? '** This graph contains ' : 'The sum of percentages in this graph is larger than 100 '}
            <RichTooltip
              tooltipContent={
                total < 100
                  ? 'Calculated Areas are used to supplement the pie chart when the sum of the values in the data is less than 100%.'
                  : 'Calculated Areas are disabled when the total exceeds 100%.'
              }
              linkText={total < 100 ? 'calculated area' : ''}
              href={null}
              tooltipOpacity={config.tooltips.opacity}
            />
          </p>
        </div>
      )}
    </React.Fragment>
  )
}

export default LegendSuppression
