import React, { useState } from 'react'
import { type ModernizationRecipe } from '../helpers/modernizationRecipes'

type ModernStylesPreviewBarProps = {
  recipe: ModernizationRecipe
  previewView: 'modernized' | 'current'
  onPreviewViewChange: (view: 'modernized' | 'current') => void
  onKeep: () => void
  onDiscard: () => void
}

const ModernStylesPreviewBar: React.FC<ModernStylesPreviewBarProps> = ({
  recipe,
  previewView,
  onPreviewViewChange,
  onKeep,
  onDiscard
}) => {
  const [showLocations, setShowLocations] = useState(false)
  const settingDetails = recipe.editorLocationDetails?.length
    ? recipe.editorLocationDetails
    : recipe.editorLocations.map(path => ({ path }))

  return (
    <div className='modern-styles-preview-bar' data-testid='modern-styles-preview-bar'>
      <div className='modern-styles-preview-bar__summary'>
        <strong>Comparing modern styles</strong>
        <span>{previewView === 'modernized' ? 'Showing the modernized version.' : 'Showing the current version.'}</span>
      </div>
      <div className='modern-styles-preview-bar__actions'>
        <div className='modern-styles-preview-bar__toggle' role='group' aria-label='Preview version'>
          <button
            type='button'
            aria-pressed={previewView === 'modernized'}
            onClick={() => onPreviewViewChange('modernized')}
          >
            Modernized
          </button>
          <button type='button' aria-pressed={previewView === 'current'} onClick={() => onPreviewViewChange('current')}>
            Current
          </button>
        </div>
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
          {showLocations ? 'Hide settings' : 'Display settings'}
        </button>
      </div>
      {showLocations && (
        <div className='modern-styles-preview-bar__locations' aria-label='Modern style settings'>
          <p>
            These settings were changed in the modernized preview. You can discard the preview and apply any of them
            manually instead.
          </p>
          <ul>
            {settingDetails.map(detail => (
              <li key={`${detail.path}-${detail.value ?? ''}`}>
                {detail.path}
                {detail.value ? ` > ${detail.value}` : ''}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default ModernStylesPreviewBar
