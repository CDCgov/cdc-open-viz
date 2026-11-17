import FilterNote from '@cdc/core/components/Filters/components/FilterNote'
import Button from '@cdc/core/components/elements/Button'
import { useEffect, useId, useRef, useState } from 'react'
import { processMarkupVariables } from '@cdc/core/helpers/markupProcessor'
import type { VizFilter } from '@cdc/core/types/VizFilter'
import { getLocationInformationRows } from '../helpers/locationInformation'
import type { DataRow, MapConfig } from '../types/MapConfig'
import {
  buildLocationOptions,
  getLocationHighlighter,
  isLocationHighlighterEligible
} from '../helpers/locationHighlighter'
import parse from 'html-react-parser'
import escape from 'lodash/escape'
import './location-highlighter.css'

export default function LocationHighlighter({
  config,
  runtimeData,
  sourceData = config.data ?? [],
  runtimeFilters = config.filters ?? [],
  isEditor = false,
  onSelectionChange
}: {
  config: MapConfig
  runtimeData: Record<string, any>
  sourceData?: DataRow[]
  runtimeFilters?: VizFilter[]
  isEditor?: boolean
  onSelectionChange?: (id: string) => void
}) {
  const id = useId()
  const selectRef = useRef<HTMLSelectElement>(null)
  const [selectedId, setSelectedId] = useState('')
  const options = buildLocationOptions(config, runtimeData)
  const selected = options.find(option => option.id === selectedId)
  useEffect(() => {
    if (selectedId && !selected) setSelectedId('')
  }, [selectedId, selected])
  useEffect(() => {
    onSelectionChange?.(selected?.id ?? '')
    return () => onSelectionChange?.('')
  }, [selected?.id, onSelectionChange])
  const settings = getLocationHighlighter(config)
  if (!isLocationHighlighterEligible(config) || !settings.enabled) return null

  const useMarkupVariables = config.enableMarkupVariables && config.markupVariables?.length
  const rows =
    selected && useMarkupVariables ? getLocationInformationRows(config, sourceData, runtimeFilters, selected.id) : []
  const processText = (text: string): string => {
    if (!selected) return ''
    // Resolve the reserved token separately so authored variables cannot override it,
    // and display names are never reprocessed as markup variables or HTML.
    return text
      .split('{{location}}')
      .map(part =>
        useMarkupVariables
          ? processMarkupVariables(part, rows, config.markupVariables, {
              isEditor,
              locale: config.locale,
              dataMetadata: config.dataMetadata
            }).processedContent
          : part
      )
      .join(escape(selected.label))
  }
  const content = processText(settings.details)
  const hasNote = Boolean(settings.note?.trim())
  const noteId = `${id}-note`

  return (
    <section className='map-location-highlighter'>
      <label htmlFor={id}>{settings.dropdownLabel}</label>
      <div className='map-location-highlighter__controls'>
        <div className='map-location-highlighter__field'>
          <FilterNote id={noteId} note={settings.note} hasLabel={Boolean(settings.dropdownLabel?.trim())} />
          <select
            ref={selectRef}
            id={id}
            aria-describedby={hasNote ? noteId : undefined}
            className={['cove-form-select py-2 ps-2 d-block', hasNote ? 'filters-section__select--with-note' : '']
              .filter(Boolean)
              .join(' ')}
            value={selected?.id ?? ''}
            disabled={!options.length}
            onChange={event => setSelectedId(event.target.value)}
          >
            <option value=''>{settings.placeholder}</option>
            {options.map(option => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        {settings.showResetButton && selected && (
          <Button
            type='button'
            variant='link'
            onClick={() => {
              setSelectedId('')
              selectRef.current?.focus()
            }}
          >
            {settings.resetButtonLabel?.trim() || 'Reset'}
          </Button>
        )}
      </div>
      <div className='map-location-highlighter__result' aria-live='polite' aria-atomic='true'>
        {selected && content && <div className='map-location-highlighter__details cove-prose'>{parse(content)}</div>}
      </div>
    </section>
  )
}
