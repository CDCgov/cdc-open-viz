import React from 'react'
import { ChartConfig } from '../../types/ChartConfig'

interface LegendProps {
  config: ChartConfig
  isBottomOrSmallViewport: boolean
}

const LegendSuppression: React.FC<LegendProps> = ({ config, isBottomOrSmallViewport }) => {
  const { preliminaryData, visualizationType, visualizationSubType, legend } = config

  const hasOpenCircleEffects = () => preliminaryData?.some(pd => pd.label && pd.type === 'effect' && pd.style === 'Open Circles') && ['Line', 'Combo'].includes(visualizationType)

  const shouldShowSuppressedLabels = () =>
    !legend.hideSuppressedLabels && preliminaryData?.some(pd => pd.label && pd.displayLegend && pd.type === 'suppression' && pd.value && (pd?.style || pd.symbol)) && ((visualizationType === 'Bar' && visualizationSubType === 'regular') || visualizationType === 'Line' || visualizationType === 'Combo')

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
          color: '#8b8b8a'
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
          <>
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
          </>
        )
      }

      return null
    })
  }

  const getLegendContainerClass = () => (legend.singleRow && isBottomOrSmallViewport ? 'legend-container__inner bottom single-row' : '')

  return (
    <React.Fragment>
      {hasOpenCircleEffects() && (
        <>
          <hr />
          <div className={getLegendContainerClass()}>{renderEffectItems()}</div>
        </>
      )}

      {shouldShowSuppressedLabels() && (
        <>
          <hr />
          <div className={getLegendContainerClass()}>{renderSuppressedItems()}</div>
        </>
      )}
    </React.Fragment>
  )
}

export default LegendSuppression
