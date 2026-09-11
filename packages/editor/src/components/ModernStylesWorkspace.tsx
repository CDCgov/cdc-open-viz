import React, { useLayoutEffect, useRef, useState } from 'react'

import { type ModernizationOption } from '../helpers/modernizationRecipes'
import VisualizationRenderer from './VisualizationRenderer'

type PreviewView = 'modernized' | 'current'

type ModernStylesWorkspaceProps = {
  subject: string
  config: Record<string, any>
  options: ModernizationOption[]
  selectedIds: Set<string>
  previewView: PreviewView
  selectionCustomized: boolean
  containerEl?: HTMLElement
  isDebug?: boolean
  configUrl?: string
  onPreviewViewChange: (view: PreviewView) => void
  onSelectionChange: (ids: Set<string>) => void
  onAccept: () => void
  onDiscard: () => void
}

const ModernStylesWorkspace: React.FC<ModernStylesWorkspaceProps> = ({
  subject,
  config,
  options,
  selectedIds,
  previewView,
  selectionCustomized,
  containerEl,
  isDebug,
  configUrl,
  onPreviewViewChange,
  onSelectionChange,
  onAccept,
  onDiscard
}) => {
  const [reviewOpen, setReviewOpen] = useState(false)
  const previewRef = useRef<HTMLElement>(null)
  const previewContentRef = useRef<HTMLDivElement>(null)
  const previewScrollTopRef = useRef(0)
  const selectionDisabled = previewView === 'current'
  const selectedCount = selectedIds.size
  const rendererKey = `${previewView}-${Array.from(selectedIds).sort().join(',')}`
  const acceptLabel = selectionCustomized ? `Accept ${selectedCount} changes` : 'Accept all changes'

  useLayoutEffect(() => {
    const preview = previewRef.current
    if (!preview) return

    const restorePreviewScroll = () => {
      preview.scrollTop = previewScrollTopRef.current
    }

    restorePreviewScroll()
  }, [rendererKey])

  const preservePreviewScroll = (update: () => void) => {
    const previewContent = previewContentRef.current
    if (previewContent) {
      const minimumHeight = Number.parseFloat(previewContent.style.minHeight) || 0
      previewContent.style.minHeight = `${Math.max(minimumHeight, previewContent.scrollHeight)}px`
    }
    previewScrollTopRef.current = previewRef.current?.scrollTop ?? 0
    update()
  }

  const toggleReview = () => {
    if (!reviewOpen) preservePreviewScroll(() => onPreviewViewChange('modernized'))
    setReviewOpen(!reviewOpen)
  }

  const toggleOption = (id: string) => {
    const next = new Set(selectedIds)
    if (next.has(id)) next.delete(id)
    else next.add(id)
    preservePreviewScroll(() => onSelectionChange(next))
  }

  return (
    <div className='modern-styles-workspace' data-testid='modern-styles-workspace'>
      <aside className='modern-styles-workspace__controls'>
        <div className='modern-styles-workspace__actions'>
          <h1>Modernize this {subject}</h1>
          <div className='modern-styles-workspace__action-buttons'>
            <button className='btn' type='button' disabled={selectedCount === 0} onClick={onAccept}>
              {acceptLabel}
            </button>
            <button className='btn btn-secondary' type='button' onClick={onDiscard}>
              Discard changes
            </button>
          </div>
          <button
            className='modern-styles-workspace__disclosure'
            type='button'
            aria-expanded={reviewOpen}
            onClick={toggleReview}
          >
            <span aria-hidden='true'>{reviewOpen ? '▾' : '▸'}</span> Review changes individually
          </button>
        </div>

        {reviewOpen && (
          <div className='modern-styles-workspace__change-list' aria-label='Modernization changes'>
            {selectionDisabled && (
              <p className='modern-styles-workspace__guidance'>Switch to Modernized to edit these changes.</p>
            )}
            <div className='modern-styles-workspace__bulk-actions'>
              <button
                type='button'
                disabled={selectionDisabled || selectedCount === options.length}
                onClick={() =>
                  preservePreviewScroll(() => onSelectionChange(new Set(options.map(option => option.id))))
                }
              >
                Select All
              </button>
              <button
                type='button'
                disabled={selectionDisabled || selectedCount === 0}
                onClick={() => preservePreviewScroll(() => onSelectionChange(new Set()))}
              >
                Deselect All
              </button>
            </div>
            <ul className='modern-styles-workspace__options'>
              {options.map(option => {
                const details = option.editorLocationDetails?.length
                  ? option.editorLocationDetails
                  : option.editorLocations.map(path => ({ path }))
                return (
                  <li key={option.id}>
                    <label>
                      <input
                        type='checkbox'
                        role='switch'
                        checked={selectedIds.has(option.id)}
                        disabled={selectionDisabled}
                        onChange={() => toggleOption(option.id)}
                      />
                      <span>{option.label}</span>
                    </label>
                    <ul className='modern-styles-workspace__breadcrumbs'>
                      {details.map(detail => (
                        <li key={`${detail.path}-${detail.value ?? ''}`}>
                          {detail.path}
                          {detail.value ? ` > ${detail.value}` : ''}
                        </li>
                      ))}
                    </ul>
                  </li>
                )
              })}
            </ul>
          </div>
        )}
      </aside>

      <main className='modern-styles-workspace__preview' ref={previewRef}>
        <div className='modern-styles-workspace__preview-header'>
          <h2>Previewing {subject}</h2>
          <div className='modern-styles-workspace__segmented-control' role='group' aria-label='Preview version'>
            <button
              type='button'
              aria-pressed={previewView === 'current'}
              onClick={() => preservePreviewScroll(() => onPreviewViewChange('current'))}
            >
              Current version
            </button>
            <button
              type='button'
              aria-pressed={previewView === 'modernized'}
              onClick={() => preservePreviewScroll(() => onPreviewViewChange('modernized'))}
            >
              Modernized version
            </button>
          </div>
        </div>
        <div ref={previewContentRef} className='modern-styles-workspace__preview-content'>
          <VisualizationRenderer
            key={rendererKey}
            config={config}
            mode='runtime'
            containerEl={containerEl}
            isDebug={isDebug}
            configUrl={configUrl}
          />
        </div>
      </main>
    </div>
  )
}

export default ModernStylesWorkspace
