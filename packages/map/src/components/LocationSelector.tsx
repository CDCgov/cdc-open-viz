import { useEffect, useId, useState } from 'react'
import type { MapConfig } from '../types/MapConfig'
import {
  buildLocationOptions,
  getLocationLinks,
  hasLocationLinkColumn,
  isLocationSelectorEligible
} from '../helpers/locationLinks'
import ExternalIcon from '../images/external-link.svg'
import isDomainExternal from '@cdc/core/helpers/isDomainExternal'

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
  const spanish = (config.locale ?? config.general.language)?.toLowerCase().startsWith('es')
  const windowMessage = spanish ? 'Se abre en una ventana nueva' : 'Opens in a new window'
  if (!isLocationSelectorEligible(config) || !hasLocationLinkColumn(config) || !settings.enabled) return null

  return (
    <section
      className='map-location-selector'
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '.5rem',
        minWidth: 0,
        maxWidth: '100%',
        marginBlockStart: settings.position === 'below' ? 'var(--cove-visualization-section-gap, 1.5rem)' : 0,
        marginBlockEnd: settings.position === 'above' ? 'var(--cove-visualization-section-gap, 1.5rem)' : 0,
        overflowWrap: 'anywhere'
      }}
    >
      <label htmlFor={id}>{settings.label}</label>
      <select
        id={id}
        value={selected?.id ?? ''}
        disabled={!options.length}
        style={{ width: '100%', minWidth: 0, maxWidth: '100%' }}
        onChange={event => setSelectedId(event.target.value)}
      >
        <option value=''>{settings.label}</option>
        {options.map(option => (
          <option key={option.id} value={option.id}>
            {option.label}
          </option>
        ))}
      </select>
      <div aria-live='polite' aria-atomic='true'>
        {selected &&
          (selected.url ? (
            <a
              href={new URL(selected.url, window.location.origin).toString()}
              target={config.general.navigationTarget}
              rel={newWindow ? 'noopener noreferrer' : undefined}
            >
              {settings.linkText}
              {isDomainExternal(selected.url) && <ExternalIcon className='inline-icon ms-1' />}
              {newWindow && <span className='cdcdataviz-sr-only'> ({windowMessage})</span>}
            </a>
          ) : (
            <span>
              {spanish ? 'No hay enlace disponible para esta ubicación.' : 'No link available for this location.'}
            </span>
          ))}
      </div>
    </section>
  )
}
