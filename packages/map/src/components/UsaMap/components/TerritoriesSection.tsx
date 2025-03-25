import React from 'react'

type TerritoriesSectionProps = {
  territories: JSX.Element[]
  // Keys of the territories to display
  territoresData: string[]
  logo: string
  config: any
}

const TerritoriesSection: React.FC<TerritoriesSectionProps> = ({ territories, logo, config, territoriesData }) => {
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
          <div>
            {(usTerritories.length > 0 || config.general.territoriesAlwaysShow) && (
              <>
                <h5 className='territories-label'>U.S. territories</h5>
                <span className='mt-1 mb-2 d-flex flex-wrap territories'>{usTerritories}</span>
              </>
            )}
            {(freelyAssociatedStates.length > 0 || config.general.territoriesAlwaysShow) && (
              <>
                <h5 className='territories-label'>Freely associated states</h5>
                <span className='mt-1 mb-2 d-flex flex-wrap territories'>{freelyAssociatedStates}</span>
              </>
            )}
          </div>
        </div>
      </>
    )
  )
}

export default TerritoriesSection
