import { useContext } from 'react'
import { Select, TextField } from '@cdc/core/components/EditorPanel/Inputs'
import Button from '@cdc/core/components/elements/Button'
import PanelSection from '@cdc/core/components/panels/PanelSection'
import { isCoveDeveloperMode } from '@cdc/core/helpers/queryStringUtils'
import { cloneConfig } from '@cdc/core/helpers/cloneConfig'
import ConfigContext from '../../../context'
import { createDotDensitySeries, getDotDensityConfig, isDotDensitySupported } from '../../../helpers/dotDensityConfig'
import type { DotDensityConfig, DotDensitySeries } from '../../../types/MapConfig'

export default function DotDensityEditorSection({ columnNames }: { columnNames: string[] }) {
  const { config, setConfig } = useContext(ConfigContext)
  const density = getDotDensityConfig(config)
  const missingMappedIndex = density.series.findIndex(
    series => Boolean(series.column) && !columnNames.includes(series.column)
  )
  const unresolvedIndex =
    missingMappedIndex >= 0
      ? missingMappedIndex
      : Math.max(
          0,
          density.series.findIndex(series => !series.column)
        )
  if (!isCoveDeveloperMode() || !isDotDensitySupported(config) || !density.enabled) return null
  const update = (changes: Partial<DotDensityConfig>) => {
    const next = cloneConfig(config)
    next.dotDensity = { ...density, ...changes }
    setConfig(next)
  }
  const updateSeries = (id: string, changes: Partial<DotDensitySeries>) =>
    update({ series: density.series.map(item => (item.id === id ? { ...item, ...changes } : item)) })
  const numberField = (key: 'dotValue' | 'radius', label: string, min: number, step: number) => (
    <TextField
      label={label}
      aria-label={label}
      type='number'
      value={density[key]}
      fieldName={key}
      section='dotDensity'
      min={min}
      step={step}
      updateField={(_section: unknown, _subsection: unknown, _field: unknown, value: string) =>
        update({ [key]: Number(value) })
      }
    />
  )
  return (
    <PanelSection title='Dot Density' buttonProps={{ 'data-required-field-section': 'map-dot-density' }}>
      <span className='subtext'>
        Use nonnegative counts. Dots show approximate distribution within counties, not individual locations. Keep the
        base Data Column empty for a neutral map.
      </span>
      <div className='two-col-inputs'>
        {numberField('dotValue', 'Value per dot', 0.001, 1)}
        {numberField('radius', 'Dot radius', 0.25, 0.25)}
      </div>
      <span className='subtext mt-3'>Choose series colors in Visual → Map Color Palette.</span>
      {density.series.length === 0 && (
        <span className='subtext mt-3'>Choose Add Count Series, then select a count column.</span>
      )}
      {density.series.map((series, index) => (
        <fieldset key={series.id} className='edit-block'>
          <legend className='mb-2'>Count Series {index + 1}</legend>
          <Select
            label={`Count column ${index + 1}`}
            value={series.column}
            section='dotDensity'
            subsection={series.id}
            fieldName='column'
            initial='- Select Option -'
            options={[
              ...(series.column && !columnNames.includes(series.column)
                ? [{ value: series.column, label: `${series.column} (missing)` }]
                : []),
              ...columnNames.map(column => ({ value: column, label: column }))
            ]}
            data-required-field-control={index === unresolvedIndex ? 'map-dot-density-count' : undefined}
            onChange={event => updateSeries(series.id, { column: event.target.value })}
          />
          <TextField
            label={`Series label ${index + 1}`}
            value={series.label}
            fieldName='label'
            section='dotDensity'
            subsection={series.id}
            updateField={(_section: unknown, _subsection: unknown, _field: unknown, label: string) =>
              updateSeries(series.id, { label })
            }
          />
          <Button
            type='button'
            variant='danger'
            size='sm'
            className='mt-2'
            onClick={() => update({ series: density.series.filter(item => item.id !== series.id) })}
          >
            Remove Count Series {index + 1}
          </Button>
        </fieldset>
      ))}
      <Button
        type='button'
        variant='editor-primary'
        data-required-field-control={density.series.length === 0 ? 'map-dot-density-count' : undefined}
        onClick={() => update({ series: [...density.series, createDotDensitySeries(density.series)] })}
      >
        Add Count Series
      </Button>
    </PanelSection>
  )
}
