import React, { useContext } from 'react'
import ConfigContext from '../context'
import { MapContext } from '../types/MapContext'
import './filterControls.styles.css'

const FilterControls: React.FC = () => {
  const { config, clearSharedFilter, hasActiveSharedFilter } = useContext<MapContext>(ConfigContext)

  if (config.general.showClearSelectionButton === false) return null
  if (!hasActiveSharedFilter || !clearSharedFilter) return null

  return (
    <div className='filter-controls' data-html2canvas-ignore='true'>
      <button className='cove-button' onClick={() => clearSharedFilter(config.uid)} aria-label='Clear Selection'>
        Clear Selection
      </button>
    </div>
  )
}

export default FilterControls
