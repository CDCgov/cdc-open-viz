import React, { useContext, useMemo } from 'react'
import { geoMercator, geoPath } from 'd3-geo'
import ConfigContext from '../../../context'
import { MapContext } from '../../../types/MapContext'
import { displayGeoName, getGeoStrokeColor } from '../../../helpers'
import SingleState from './SingleState'
import {
  COUNTY_TERRITORY_GROUPS,
  getCountyTerritoryUidForCountyId,
  COUNTY_TERRITORY_UIDS,
  isFreelyAssociatedStateUid
} from '../helpers/countyTerritories'
import './CountyTerritoriesSection.styles.css'

type CountyTerritoriesSectionProps = {
  territoryCounties: any[]
  territoryStates: any[]
  tooltipId: string
}

const GROUP_DIMENSIONS = {
  territories: {
    width: 164,
    height: 118,
    padding: 10
  },
  'freely-associated': {
    width: 260,
    height: 184,
    padding: 2
  }
} as const

const CountyTerritoriesSection: React.FC<CountyTerritoriesSectionProps> = ({
  territoryCounties,
  territoryStates,
  tooltipId
}) => {
  const { config, runtimeData } = useContext<MapContext>(ConfigContext)
  const geoStrokeColor = getGeoStrokeColor(config)

  const sectionGroups = useMemo(() => {
    return COUNTY_TERRITORY_GROUPS.map(group => {
      const counties = territoryCounties.filter(
        county => getCountyTerritoryUidForCountyId(county.id) === group.territoryId
      )
      const states = territoryStates.filter(state => {
        const stateId = String(state.id)
        if (stateId === group.stateId) return true
        return `US-${stateId}` === group.territoryId
      })
      const hasTerritoryLevelAlias = counties.length === 1 && Boolean(runtimeData?.[group.territoryId])
      const renderCounties = hasTerritoryLevelAlias
        ? counties.map(county => ({
            ...county,
            id: group.territoryId
          }))
        : counties

      return {
        ...group,
        counties: renderCounties,
        states,
        hasData: counties.some(county => runtimeData?.[county.id]) || hasTerritoryLevelAlias
      }
    }).filter(group => group.hasData)
  }, [runtimeData, territoryCounties, territoryStates])

  if (!sectionGroups.length) return null

  const renderGroup = heading => {
    const groups = sectionGroups.filter(group =>
      heading === 'territories'
        ? COUNTY_TERRITORY_UIDS.includes(group.territoryId)
        : isFreelyAssociatedStateUid(group.territoryId)
    )
    const dimensions = GROUP_DIMENSIONS[heading]

    if (!groups.length) return null

    return (
      <div className={`county-territories-section__group county-territories-section__group--${heading}`}>
        <h3 className='county-territories-section__heading'>
          {heading === 'territories' ? 'U.S. territories' : 'Freely associated states'}
        </h3>
        <div className='county-territories-section__cards'>
          {groups.map(group => {
            const projection = geoMercator().fitExtent(
              [
                [dimensions.padding, dimensions.padding],
                [dimensions.width - dimensions.padding, dimensions.height - dimensions.padding]
              ],
              {
                type: 'FeatureCollection',
                features: group.states.length ? group.states : group.counties
              }
            )

            const path = geoPath().projection(projection)
            const scale = projection.scale()

            return (
              <article className='county-territories-section__card' key={group.territoryId}>
                <svg
                  viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
                  className='county-territories-section__map'
                  role='img'
                  aria-label={displayGeoName(group.territoryId)}
                >
                  <g className='county-territories-section__counties'>
                    <SingleState.CountyOutput
                      counties={group.counties}
                      scale={scale}
                      geoStrokeColor={geoStrokeColor}
                      tooltipId={tooltipId}
                      path={path}
                    />
                  </g>
                  <g
                    className='county-territories-section__state-borders'
                    stroke={geoStrokeColor}
                    strokeWidth={Math.max(0.75 / scale, 0.5)}
                    fill='none'
                  >
                    {group.states.map(state => (
                      <path key={`border-${group.territoryId}-${state.id}`} d={path(state) || ''} />
                    ))}
                  </g>
                </svg>
                <div className='county-territories-section__label'>{displayGeoName(group.territoryId)}</div>
              </article>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <section className='county-territories-section'>
      {renderGroup('territories')}
      {renderGroup('freely-associated')}
    </section>
  )
}

export default CountyTerritoriesSection
