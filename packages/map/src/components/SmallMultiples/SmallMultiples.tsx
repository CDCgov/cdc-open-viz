import React, { useContext, useMemo } from 'react'
import SmallMultipleTile from './SmallMultipleTile'
import ConfigContext from '../../context'
import { MapContext } from '../../types/MapContext'
import { getTileValues, applyTileOrder } from '../../helpers/smallMultiplesHelpers'
import { isMobileSmallMultiplesViewport } from '@cdc/core/helpers/viewports'
import './SmallMultiples.css'

interface SmallMultiplesProps {}

const SmallMultiples: React.FC<SmallMultiplesProps> = () => {
  const { config, currentViewport } = useContext<MapContext>(ConfigContext)

  const { mode, tileColumn, tilesPerRowDesktop, tilesPerRowMobile, tileOrderType, tileOrder, tileTitles } =
    config.smallMultiples || {}

  const data = config.data || []

  const isMobile = isMobileSmallMultiplesViewport(currentViewport)
  const tilesPerRow = isMobile ? tilesPerRowMobile || 1 : tilesPerRowDesktop || 3

  const rawTileValues = useMemo(() => {
    return getTileValues(data, tileColumn)
  }, [data, tileColumn])

  const orderedTileValues = useMemo(() => {
    return applyTileOrder(rawTileValues, tileOrderType, tileOrder, tileTitles)
  }, [rawTileValues, tileOrderType, tileOrder, tileTitles])

  // Calculate grid styling
  const gridGap = isMobile ? '1rem' : '2rem'
  const gridStyle = {
    gridTemplateColumns: `repeat(${tilesPerRow}, 1fr)`,
    gap: gridGap
  }

  return (
    <div className='small-multiples-container mt-4'>
      <div className='small-multiples-grid' style={gridStyle}>
        {orderedTileValues.map((tileValue, index) => (
          <SmallMultipleTile
            key={String(tileValue)}
            tileValue={tileValue}
            tileColumn={tileColumn}
            config={config}
            data={data}
            isFirstInRow={index % tilesPerRow === 0}
          />
        ))}
      </div>
    </div>
  )
}

export default SmallMultiples
