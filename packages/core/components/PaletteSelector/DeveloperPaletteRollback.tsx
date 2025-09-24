import React from 'react'
import _ from 'lodash'
import { isCoveDeveloperMode } from '../../helpers/queryStringUtils'
import {
  hasPaletteBackup,
  getOriginalPaletteName,
  rollbackPaletteToOriginal,
  hasTwoColorPaletteBackup,
  getOriginalTwoColorPaletteName,
  rollbackTwoColorPaletteToOriginal
} from '../../helpers/palettes/utils'
import './PaletteSelector.css'
import cloneConfig from '@cdc/core/helpers/cloneConfig'

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

  // Check for both regular and two-color palette backups
  const hasRegularBackup = hasPaletteBackup(config)
  const hasTwoColorBackup = hasTwoColorPaletteBackup(config)

  // Only show if there's backup data available
  if (!hasRegularBackup && !hasTwoColorBackup) {
    return null
  }

  const originalPaletteName = getOriginalPaletteName(config)
  const originalTwoColorPaletteName = getOriginalTwoColorPaletteName(config)
  const currentPaletteName = config?.general?.palette?.name || config?.palette || config?.color
  const currentTwoColorPaletteName = config?.twoColor?.palette

  const handleRollback = () => {
    // Determine which type of rollback to perform and show appropriate confirmation
    let confirmMessage = ''
    let fromName = ''
    let toName = ''

    if (hasTwoColorBackup) {
      // Two-color palette rollback
      fromName = currentTwoColorPaletteName
      toName = originalTwoColorPaletteName
      confirmMessage = `Are you sure you want to rollback the palette from "${fromName}" to "${toName}"?\n\nThis will restore the original v1 palette configuration.`
    } else if (hasRegularBackup) {
      // Regular palette rollback
      fromName = currentPaletteName
      toName = originalPaletteName
      confirmMessage = `Are you sure you want to rollback the palette from "${fromName}" to "${toName}"?\n\nThis will restore the original palette configuration and remove the migrated structure.`
    }

    const confirmRollback = window.confirm(confirmMessage)

    if (confirmRollback) {
      const configCopy = cloneConfig(config)
      console.log('Config before rollback:', JSON.stringify(configCopy, null, 2))

      let success = false

      if (hasTwoColorBackup) {
        success = rollbackTwoColorPaletteToOriginal(configCopy)
        console.log('Two-color rollback success:', success)
      } else if (hasRegularBackup) {
        const rolledBackConfig = rollbackPaletteToOriginal(configCopy)
        success = !!rolledBackConfig
        console.log('Regular rollback success:', success)
      }

      console.log('Config after rollback:', JSON.stringify(configCopy, null, 2))

      if (success) {
        updateConfig(configCopy)
      } else {
        alert('Rollback failed: No backup data available')
      }
    }
  }

  // Determine display text based on available backups
  const displayPaletteName = hasTwoColorBackup ? originalTwoColorPaletteName : originalPaletteName
  const infoText = hasTwoColorBackup
    ? `Developer Mode: Two-color palette migrated from "${originalTwoColorPaletteName}"`
    : `Developer Mode: Migrated from "${originalPaletteName}"`

  return (
    <div className={`developer-palette-rollback ${className}`}>
      <div className='rollback-info'>
        <small className='text-muted'>{infoText}</small>
      </div>
      <button
        type='button'
        className='btn btn-sm btn-outline-warning'
        onClick={handleRollback}
        title={`Rollback to original palette: ${displayPaletteName}`}
      >
        Rollback Palette
      </button>
    </div>
  )
}

export default DeveloperPaletteRollback
