import React from 'react'
import { ChartConfig } from '../../types/ChartConfig'
import Icon from '@cdc/core/components/ui/Icon'
import { Tooltip as ReactTooltip } from 'react-tooltip'
interface LegendProps {
  config: ChartConfig
  isBottomOrSmallViewport: boolean
}

const LegendSuppression: React.FC<LegendProps> = ({ config, isBottomOrSmallViewport }) => {
  const { preliminaryData, visualizationType, visualizationSubType, legend } = config

  const hasOpenCircleEffects = () => preliminaryData?.some(pd => pd.label && pd.type === 'effect' && pd.style === 'Open Circles') && ['Line', 'Combo'].includes(visualizationType)

  const shouldShowSuppressedLabels = () =>
    !legend.hideSuppressedLabels &&
    preliminaryData?.some(pd => pd.label && pd.displayLegend && pd.type === 'suppression' && pd.value && (pd?.style || pd.symbol)) &&
    ((visualizationType === 'Bar' && visualizationSubType === 'regular') || visualizationType === 'Line' || visualizationType === 'Combo')

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
  const handleLinkClick = event => {
    // prevent defintion link to change URl
    event.preventDefault()
  }

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

  const getLegendContainerClass = () => (legend.singleRow && isBottomOrSmallViewport ? 'legend-container__inner bottom single-row' : '')

  return (
    <React.Fragment>
      {hasOpenCircleEffects() && (
        <React.Fragment>
          <hr />
          <div className={getLegendContainerClass()}>{renderEffectItems()}</div>
        </React.Fragment>
      )}

      {shouldShowSuppressedLabels() && (
        <React.Fragment>
          <hr />
          <div className={getLegendContainerClass()}>{renderSuppressedItems()}</div>
        </React.Fragment>
      )}
      {!config.legend.hideSuppressionLink && config.visualizationSubType !== 'stacked' && preliminaryData?.some(pd => pd.label && pd.type === 'suppression' && pd.value && (pd?.style || pd.symbol)) && (
        <div className='legend-container__outer definition-link'>
          <Icon alt='info-icon' display='info' />
          <p>
            This chart contains
            <a // prettier-ignore
              onClick={handleLinkClick}
              data-tooltip-content='Data is suppressed to maintain statistical reliability. This occurs when the number of respondents or reported values does not meet the minimum reporting threshold.'
              data-tooltip-id='my-tooltip'
              href='no-router-link'
            >
              suppressed data
            </a>
          </p>
        </div>
      )}

      <ReactTooltip // prettier-ignore
        id='my-tooltip'
        variant='light'
        style={{ background: `rgba(255,255,255, ${config.tooltips.opacity / 100})`, color: 'black', maxWidth: '100%' }}
      />
    </React.Fragment>
  )
}

export default LegendSuppression
