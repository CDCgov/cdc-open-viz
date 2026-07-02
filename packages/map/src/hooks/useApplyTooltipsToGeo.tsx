import { type ReactNode, useContext } from 'react'
import { navigationHandler } from '../helpers/navigationHandler'
import ConfigContext from '../context'
import useTooltip from './useTooltip'
import parse from 'html-react-parser'
import isDomainExternal from '@cdc/core/helpers/isDomainExternal'
import ExternalIcon from './../images/external-link.svg'

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
  const navigationColumnName = config.columns.navigate.name
  const { buildTooltip } = useTooltip(config)

  const applyTooltipsToGeo = (geoName: string, row: Object, returnType = 'string') => {
    let toolTipText: string | ReactNode = buildTooltip(row, geoName, '')

    // We convert the markup into JSX and add a navigation link if it's going into a modal.
    if ('jsx' === returnType) {
      if (typeof toolTipText === 'string') {
        toolTipText = [<div key='modal-content'>{parse(toolTipText)}</div>]
      }

      if (config.columns.hasOwnProperty('navigate') && row[navigationColumnName]) {
        // Check that toolTipText is an array before pushing to it
        if (Array.isArray(toolTipText)) {
          const navigationUrl = row[navigationColumnName]

          toolTipText.push(
            <a
              href='#'
              className='navigation-link'
              key='modal-navigation-link'
              onClick={e => {
                e.preventDefault()
                navigationHandler(config.general.navigationTarget, row[navigationColumnName], customNavigationHandler)
              }}
            >
              <span className='navigation-link__label'>{config.tooltips.linkLabel}</span>
              {isPdfLink(navigationUrl) ? (
                <span className='navigation-link__pdf-badge'>PDF</span>
              ) : (
                isDomainExternal(navigationUrl) && <ExternalIcon className='inline-icon ms-1' />
              )}
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
