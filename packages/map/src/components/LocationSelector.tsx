import { useEffect, useId, useState } from 'react'
import { processMarkupVariables } from '@cdc/core/helpers/markupProcessor'
import type { VizFilter } from '@cdc/core/types/VizFilter'
import { getLocationInformationRows } from '../helpers/locationInformation'
import type { DataRow, MapConfig } from '../types/MapConfig'
import { buildLocationOptions, getLocationSelector, isLocationSelectorEligible } from '../helpers/locationSelector'
import parse from 'html-react-parser'
import escape from 'lodash/escape'
import './location-selector.scss'

export default function LocationSelector({
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
  const settings = getLocationSelector(config)
  if (!isLocationSelectorEligible(config) || !settings.enabled) return null

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
  const content = processText(settings.information)

  return (
    <section className='map-location-selector'>
      <label htmlFor={id}>{settings.label}</label>
      <select
        id={id}
        className='cove-form-select py-2 ps-2 d-block'
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
      <div className='map-location-selector__result' aria-live='polite' aria-atomic='true'>
        {selected && content && <div className='map-location-selector__information cove-prose'>{parse(content)}</div>}
      </div>
    </section>
  )
}
