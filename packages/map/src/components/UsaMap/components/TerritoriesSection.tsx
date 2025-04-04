import React, { useContext } from 'react'

import ConfigContext from '../../../context'
import { isMobileTerritoryViewport } from '@cdc/core/helpers/viewports'

type TerritoriesSectionProps = {
  territories: JSX.Element[]
  // Keys of the territories to display
  territoresData: string[]
  logo: string
  config: any
}

const TerritoriesSection: React.FC<TerritoriesSectionProps> = ({ territories, logo, config, territoriesData }) => {
  const { currentViewport } = useContext<MapContext>(ConfigContext)

  // filter territioriesData into the two groups below
  const freelyAssociatedKeys = territoriesData.filter(territory => {
    return ['US-FM', 'US-MH', 'US-PW'].includes(territory)
  })
  const usTerritoriesKeys = territoriesData.filter(territory => {
    return ['US-AS', 'US-GU', 'US-MP', 'US-PR', 'US-VI'].includes(territory)
  })

  const usTerritories = territories
    .filter(territory => {
      return usTerritoriesKeys.includes(`US-${territory?.props?.label}`)
    })
    .sort((a, b) => {
      return a.props.label.localeCompare(b.props.label)
    })

  const freelyAssociatedStates = territories
    .filter(territory => {
      return freelyAssociatedKeys.includes(`US-${territory?.props?.label}`)
    })
    .sort((a, b) => {
      return a.props.label.localeCompare(b.props.label)
    })

  const isMobileViewport = isMobileTerritoryViewport(currentViewport)
  const SVG_GAP = 9
  const SVG_WIDTH = isMobileViewport ? 30 : 45

  return (
    territoriesData.length > 0 && (
      <>
        {/* Temporarily make the max width fit the image width */}
        <div>
          <div className='d-flex mt-4'>
            {'data' === config.general.type && logo && (
              <img src={logo} alt='' className='map-logo' style={{ maxWidth: '50px' }} />
            )}
          </div>
          <div className='d-flex flex-wrap' style={{ columnGap: '1.5rem' }}>
            {(usTerritories.length > 0 || config.general.territoriesAlwaysShow) && (
              <div>
                <h5 className='territories-label'>U.S. territories</h5>
                <span
                  className={`mt-2 ${isMobileViewport ? 'mb-3' : 'mb-4'} d-flex territories`}
                  style={{ minWidth: `${usTerritories.length * SVG_WIDTH + (usTerritories.length - 1) * SVG_GAP}px` }}
                >
                  {usTerritories}
                </span>
              </div>
            )}
            {(freelyAssociatedStates.length > 0 || config.general.territoriesAlwaysShow) && (
              <div>
                <h5 className='territories-label'>Freely associated states</h5>
                <span
                  className={`mt-2 ${isMobileViewport ? 'mb-3' : 'mb-4'} d-flex territories`}
                  style={{
                    minWidth: `${
                      freelyAssociatedStates.length * SVG_WIDTH + (freelyAssociatedStates.length - 1) * SVG_GAP
                    }px`
                  }}
                >
                  {freelyAssociatedStates}
                </span>
              </div>
            )}
          </div>
        </div>
      </>
    )
  )
}

export default TerritoriesSection
