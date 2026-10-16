import { useEffect, useId, useState } from 'react'
import type { MapConfig } from '../types/MapConfig'
import {
  buildLocationOptions,
  getLocationLinks,
  hasLocationLinkColumn,
  isLocationSelectorEligible
} from '../helpers/locationLinks'
import parse from 'html-react-parser'
import { createTooltipBuilder } from '../hooks/useTooltip'
import ExternalIcon from '../images/external-link.svg'
import isDomainExternal from '@cdc/core/helpers/isDomainExternal'
import './location-selector.scss'

export default function LocationSelector({
  config,
  runtimeData
}: {
  config: MapConfig
  runtimeData: Record<string, any>
}) {
  const id = useId()
  const [selectedId, setSelectedId] = useState('')
  const options = buildLocationOptions(config, runtimeData)
  const selected = options.find(option => option.id === selectedId)
  useEffect(() => {
    if (selectedId && !selected) setSelectedId('')
  }, [selectedId, selected])
  const settings = getLocationLinks(config).selector
  const newWindow = config.general.navigationTarget === '_blank'
  if (!isLocationSelectorEligible(config) || !hasLocationLinkColumn(config) || !settings.enabled) return null

  const tooltipInformation =
    selected && settings.showTooltipInformation && Object.values(config.columns).some(column => column.tooltip)
      ? createTooltipBuilder(config).buildTooltip(runtimeData[selected.id], selected.id, '', {
          includeGeoHeading: false
        })
      : undefined

  return (
    <section
      className='map-location-selector'
      style={{
        marginBlockStart: settings.position === 'below' ? 'var(--cove-visualization-section-gap, 1.5rem)' : 0,
        marginBlockEnd: settings.position === 'above' ? 'var(--cove-visualization-section-gap, 1.5rem)' : '1rem'
      }}
    >
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
        {tooltipInformation && <div className='map-location-selector__information'>{parse(tooltipInformation)}</div>}
        {selected &&
          (selected.url ? (
            <a
              href={new URL(selected.url, window.location.origin).toString()}
              target={config.general.navigationTarget}
              rel={newWindow ? 'noopener noreferrer' : undefined}
            >
              {settings.linkText.replace(/\{location\}/g, () => selected.label)}
              {isDomainExternal(selected.url) && <ExternalIcon className='inline-icon ms-1' />}
              {newWindow && <span className='cdcdataviz-sr-only'> (Opens in a new window)</span>}
            </a>
          ) : (
            settings.noLinkMessage && <span>{settings.noLinkMessage}</span>
          ))}
      </div>
    </section>
  )
}
