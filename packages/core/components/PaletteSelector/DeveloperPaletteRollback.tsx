import React from 'react'
import _ from 'lodash'
import { isCoveDeveloperMode } from '../../helpers/queryStringUtils'
import { hasPaletteBackup, getOriginalPaletteName, rollbackPaletteToOriginal } from '../../helpers/palettes/utils'
import './PaletteSelector.css'

interface DeveloperPaletteRollbackProps {
  config: any
  updateConfig: (newConfig: any) => void
  className?: string
}

const DeveloperPaletteRollback: React.FC<DeveloperPaletteRollbackProps> = ({
  config,
  updateConfig,
  className = ''
}) => {
  // Only show if developer mode is enabled
  if (!isCoveDeveloperMode()) {
    return null
  }

  // Only show if there's backup data available
  if (!hasPaletteBackup(config)) {
    return null
  }

  const originalPaletteName = getOriginalPaletteName(config)
  const currentPaletteName = config?.general?.palette?.name || config?.palette || config?.color

  const handleRollback = () => {
    const confirmRollback = window.confirm(
      `Are you sure you want to rollback the palette from "${currentPaletteName}" to "${originalPaletteName}"?\n\nThis will restore the original palette configuration and remove the migrated structure.`
    )

    if (confirmRollback) {
      const configCopy = _.cloneDeep(config)
      console.log('Config before rollback:', JSON.stringify(configCopy, null, 2))
      const rolledBackConfig = rollbackPaletteToOriginal(configCopy)
      console.log('Rollback success:', rolledBackConfig)
      console.log('Config after rollback:', JSON.stringify(configCopy, null, 2))

      if (rolledBackConfig) {
        updateConfig(rolledBackConfig)
      } else {
        alert('Rollback failed: No backup data available')
      }
    }
  }

  return (
    <div className={`developer-palette-rollback ${className}`}>
      <div className="rollback-info">
        <small className="text-muted">
          Developer Mode: Migrated from "{originalPaletteName}"
        </small>
      </div>
      <button
        type="button"
        className="btn btn-sm btn-outline-warning"
        onClick={handleRollback}
        title={`Rollback to original palette: ${originalPaletteName}`}
      >
        Rollback Palette
      </button>
    </div>
  )
}

export default DeveloperPaletteRollback