import { type ReactNode, useContext } from 'react'
import { navigationHandler } from '../helpers/navigationHandler'
import ConfigContext from '../context'
import { createTooltipBuilder } from './useTooltip'
import parse from 'html-react-parser'
import isDomainExternal from '@cdc/core/helpers/isDomainExternal'
import ExternalIcon from './../images/external-link.svg'
import { MapConfig } from '../types/MapConfig'

const isPdfLink = (url: unknown) => {
  if ('string' !== typeof url) return false

  const trimmedUrl = url.trim()
  if (!trimmedUrl) return false

  try {
    return new URL(trimmedUrl, 'https://www.cdc.gov').pathname.toLowerCase().endsWith('.pdf')
  } catch {
    return /\.pdf(?:[?#].*)?$/i.test(trimmedUrl)
  }
}

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
        toolTipText = [<div key='modal-content'>{parse(toolTipText)}</div>]
      }

      if (tooltipConfig.columns.hasOwnProperty('navigate') && row[navigationColumnName]) {
        // Check that toolTipText is an array before pushing to it
        if (Array.isArray(toolTipText)) {
          const navigationUrl = row[navigationColumnName]

          toolTipText.push(
            <button
              type='button'
              className='navigation-link'
              key='modal-navigation-link'
              onClick={() => {
                navigationHandler(
                  tooltipConfig.general.navigationTarget,
                  row[navigationColumnName],
                  customNavigationHandler
                )
              }}
            >
              <span className='navigation-link__label'>{config.tooltips.linkLabel}</span>
              {isPdfLink(navigationUrl) ? (
                <span className='navigation-link__pdf-badge'>PDF</span>
              ) : (
                isDomainExternal(navigationUrl) && <ExternalIcon className='inline-icon ms-1' />
              )}
            </button>
          )
        }
      }
    }

    return toolTipText
  }

  return { applyTooltipsToGeo }
}

export default useApplyTooltipsToGeo
