import { type ReactNode, useContext } from 'react'
import { displayGeoName, navigationHandler } from '../helpers'
import ConfigContext from '../context'
import useTooltip from './useTooltip'
import { supportedStatesFipsCodes } from './../data/supported-geos'
import parse from 'html-react-parser'
import isDomainExternal from '@cdc/core/helpers/isDomainExternal'
import ExternalIcon from './../images/external-link.svg'

const useApplyTooltipsToGeo = () => {
  const { state } = useContext(ConfigContext)
  const navigationColumnName = state.columns.navigate.name
  const { buildTooltip } = useTooltip({ state, displayGeoName, supportedStatesFipsCodes })

  return (geoName, row, returnType = 'string') => {
    let toolTipText: string | ReactNode = buildTooltip(row, geoName, '')

    // We convert the markup into JSX and add a navigation link if it's going into a modal.
    if ('jsx' === returnType) {
      if (typeof toolTipText === 'string') {
        toolTipText = [<div key='modal-content'>{parse(toolTipText)}</div>]
      }

      if (state.columns.hasOwnProperty('navigate') && row[navigationColumnName]) {
        toolTipText.push(
          <a
            href='#'
            className='navigation-link'
            key='modal-navigation-link'
            onClick={e => {
              e.preventDefault()
              navigationHandler(state.general.navigationTarget, row[navigationColumnName], customNavigationHandler)
            }}
          >
            {state.tooltips.linkLabel}
            {isDomainExternal(row[navigationColumnName]) && <ExternalIcon className='inline-icon ms-1' />}
          </a>
        )
      }
    }

    return toolTipText
  }
}

export default useApplyTooltipsToGeo
