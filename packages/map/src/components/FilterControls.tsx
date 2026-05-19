import React, { useContext } from 'react'
import ConfigContext from '../context'
import { MapContext } from '../types/MapContext'
import './zoomControls.styles.css'

const FilterControls: React.FC = () => {
  const { config, clearSharedFilter, hasActiveSharedFilter } = useContext<MapContext>(ConfigContext)

  if (config.general.showClearSelectionButton === false) return null
  if (!hasActiveSharedFilter || !clearSharedFilter) return null

  return (
    <div className='zoom-controls zoom-controls--top-right' data-html2canvas-ignore='true'>
      <button onClick={() => clearSharedFilter(config.uid)} className='reset' aria-label='Clear Selection'>
        Clear Selection
      </button>
    </div>
  )
}

export default FilterControls
