import { type ReactNode, useContext } from 'react'
import { navigationHandler } from '../helpers'
import ConfigContext from '../context'
import { createTooltipBuilder } from './useTooltip'
import parse from 'html-react-parser'
import isDomainExternal from '@cdc/core/helpers/isDomainExternal'
import ExternalIcon from './../images/external-link.svg'
import { MapConfig } from '../types/MapConfig'

const useApplyTooltipsToGeo = () => {
  const { config, customNavigationHandler } = useContext(ConfigContext)

  const applyTooltipsToGeo = (
    geoName: string,
    row: Object,
    returnType = 'string',
    tooltipConfig: MapConfig = config
  ) => {
    const navigationColumnName = tooltipConfig.columns.navigate.name
    const { buildTooltip } = createTooltipBuilder(tooltipConfig)
    let toolTipText: string | ReactNode = buildTooltip(row, geoName, '')

    // We convert the markup into JSX and add a navigation link if it's going into a modal.
    if ('jsx' === returnType) {
      if (typeof toolTipText === 'string') {
        toolTipText = [
          <div key='modal-content' className='cove-prose'>
            {parse(toolTipText)}
          </div>
        ]
      }

      if (tooltipConfig.columns.hasOwnProperty('navigate') && row[navigationColumnName]) {
        // Check that toolTipText is an array before pushing to it
        if (Array.isArray(toolTipText)) {
          toolTipText.push(
            <a
              href='#'
              className='navigation-link'
              key='modal-navigation-link'
              onClick={e => {
                e.preventDefault()
                navigationHandler(
                  tooltipConfig.general.navigationTarget,
                  row[navigationColumnName],
                  customNavigationHandler
                )
              }}
            >
              {tooltipConfig.tooltips.linkLabel}
              {isDomainExternal(row[navigationColumnName]) && <ExternalIcon className='inline-icon ms-1' />}
            </a>
          )
        }
      }
    }

    return toolTipText
  }

  return { applyTooltipsToGeo }
}

export default useApplyTooltipsToGeo
