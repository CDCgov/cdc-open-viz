import React, { useState } from 'react'
import { type ModernizationRecipe } from '../helpers/modernizationRecipes'

type ModernStylesPreviewBarProps = {
  recipe: ModernizationRecipe
  onKeep: () => void
  onDiscard: () => void
}

const ModernStylesPreviewBar: React.FC<ModernStylesPreviewBarProps> = ({ recipe, onKeep, onDiscard }) => {
  const [showLocations, setShowLocations] = useState(false)

  return (
    <div className='modern-styles-preview-bar' data-testid='modern-styles-preview-bar'>
      <div className='modern-styles-preview-bar__summary'>
        <strong>Previewing modernized visualization</strong>
        <span>Keep these changes, discard them, or review changed settings.</span>
      </div>
      <div className='modern-styles-preview-bar__actions'>
        <button className='btn' type='button' onClick={onKeep}>
          Keep changes
        </button>
        <button className='btn btn-secondary' type='button' onClick={onDiscard}>
          Discard
        </button>
        <button
          className='btn btn-secondary'
          type='button'
          aria-expanded={showLocations}
          onClick={() => setShowLocations(current => !current)}
        >
          {showLocations ? 'Hide settings' : 'Show settings'}
        </button>
      </div>
      {showLocations && (
        <div className='modern-styles-preview-bar__locations' aria-label='Modern style settings'>
          <ul>
            {recipe.editorLocations.map(location => (
              <li key={location}>{location}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default ModernStylesPreviewBar
