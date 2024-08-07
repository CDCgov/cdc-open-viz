import React from 'react'
import { ChartConfig } from '../../types/ChartConfig'

interface LegendProps {
  config: ChartConfig
  isBottomOrSmallViewport: boolean
}

const LegendSuppression: React.FC<LegendProps> = ({ config, isBottomOrSmallViewport }) => {
  const findSuppressionData = (config, value, key, additionalCheck = pd => true) => {
    return config.preliminaryData?.find(pd => pd.label && pd.type === 'suppression' && pd.displayTooltip && value === pd.value && (!pd.column || key === pd.column) && additionalCheck(pd))
  }
  //   const isSuppressed = findSuppressionData(config, value, key)
  //   const isGrayTooltip = findSuppressionData(config, value, key, pd => pd.displayGray)
  return (
    <>
      {/* Efffect legend items */}
      {config?.preliminaryData?.some(pd => pd.label && pd.type === 'effect' && pd.style === 'Open Circles') && ['Line', 'Combo'].includes(config.visualizationType) && (
        <>
          <hr></hr>
          <div className={config.legend.singleRow && isBottomOrSmallViewport ? 'legend-container__inner bottom single-row' : ''}>
            {config?.preliminaryData?.map((pd, index) => {
              return (
                <>
                  {pd.label && pd.type === 'effect' && pd.style && (
                    <div key={index} className='legend-preliminary'>
                      <span className={pd.symbol}>{pd.lineCode}</span>
                      <p> {pd.label}</p>
                    </div>
                  )}
                </>
              )
            })}
          </div>
        </>
      )}
      {/* Suppressed legend items */}
      {!config.legend.hideSuppressedLabels &&
        config?.preliminaryData?.some(pd => pd.label && pd.displayLegend && pd.type === 'suppression' && pd.value && (pd?.style || pd.symbol)) &&
        ((config.visualizationType === 'Bar' && config.visualizationSubType === 'regular') || config.visualizationType === 'Line' || config.visualizationType === 'Combo') && (
          <>
            <hr></hr>
            <div className={config.legend.singleRow && isBottomOrSmallViewport ? 'legend-container__inner bottom single-row' : ''}>
              {config?.preliminaryData?.map(
                (pd, index) =>
                  pd.displayLegend &&
                  pd.type === 'suppression' && (
                    <>
                      {config.visualizationType === 'Bar' && (
                        <>
                          <div key={index + 'Bar'} className={`legend-preliminary ${pd.symbol}`}>
                            <span className={pd.symbol}>{pd.iconCode}</span>
                            <p className={pd.type}>{pd.label}</p>
                          </div>
                        </>
                      )}
                      {config.visualizationType === 'Line' && (
                        <>
                          <div key={index + 'Line'} className={`legend-preliminary `}>
                            <span>{pd.lineCode}</span>
                            <p className={pd.type}>{pd.label}</p>
                          </div>
                        </>
                      )}
                      {config.visualizationType === 'Combo' && (
                        <>
                          {pd.symbol && pd.iconCode && (
                            <div key={index + 'Combo'} className={`legend-preliminary ${pd.symbol}`}>
                              <span className={pd.symbol}>{pd.iconCode}</span>
                              <p className={pd.type}>{pd.label}</p>
                            </div>
                          )}

                          {pd.style && pd.lineCode && (
                            <div key={index + 'Combo'} className='legend-preliminary'>
                              <span>{pd.lineCode}</span>
                              <p>{pd.label}</p>
                            </div>
                          )}
                        </>
                      )}
                    </>
                  )
              )}
            </div>
          </>
        )}
    </>
  )
}

export default LegendSuppression
