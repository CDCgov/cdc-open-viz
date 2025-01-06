import React from 'react'

type TerritoriesSectionProps = {
  territories: JSX.Element[]
  logo: string
  config: any
}

const TerritoriesSection: React.FC<TerritoriesSectionProps> = ({ territories, logo, config }) => {
  const usTerritories = territories
    .filter(territory => {
      return ['US-AS', 'US-GU', 'US-MP', 'US-PR', 'US-VI'].includes(territory.props.territory)
    })
    .sort((a, b) => {
      return a.props.territory.localeCompare(b.props.territory)
    })

  const freelyAssociatedStates = territories
    .filter(territory => {
      return ['US-FM', 'US-MH', 'US-PW'].includes(territory.props.territory)
    })
    .sort((a, b) => {
      return a.props.territory.localeCompare(b.props.territory)
    })

  return (
    territories.length > 0 && (
      <>
        {/* Temporarily make the max width fit the image width */}
        <div>
          <div className='d-flex mt-4'>
            {'data' === config.general.type && logo && (
              <img src={logo} alt='' className='map-logo' style={{ maxWidth: '50px' }} />
            )}
          </div>
          <div>
            {usTerritories.length > 0 && (
              <>
                <h5>US Territories:</h5>
                <span className='mt-1 mb-2 d-flex flex-wrap territories'>{usTerritories}</span>
              </>
            )}
            {freelyAssociatedStates.length > 0 && (
              <>
                <h5>Freely Associated States:</h5>
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
