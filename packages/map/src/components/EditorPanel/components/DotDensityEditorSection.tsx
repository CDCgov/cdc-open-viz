import { useContext } from 'react'
import chroma from 'chroma-js'
import {
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel
} from 'react-accessible-accordion'
import { CheckBox, TextField } from '@cdc/core/components/EditorPanel/Inputs'
import Button from '@cdc/core/components/elements/Button'
import Icon from '@cdc/core/components/ui/Icon'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import { cloneConfig } from '@cdc/core/helpers/cloneConfig'
import ConfigContext from '../../../context'
import { createDotDensitySeries, getDotDensityConfig, isDotDensitySupported } from '../../../helpers/dotDensityConfig'
import type { DotDensityConfig, DotDensitySeries } from '../../../types/MapConfig'

export default function DotDensityEditorSection({ columnNames }: { columnNames: string[] }) {
  const { config, setConfig } = useContext(ConfigContext)
  const density = getDotDensityConfig(config)
  const unresolvedIndex = Math.max(
    0,
    density.series.findIndex(series => !series.column || !columnNames.includes(series.column))
  )
  if (!isDotDensitySupported(config) || !density.enabled) return null
  const update = (changes: Partial<DotDensityConfig>) => {
    const next = cloneConfig(config)
    next.dotDensity = { ...density, ...changes }
    setConfig(next)
  }
  const updateSeries = (id: string, changes: Partial<DotDensitySeries>) =>
    update({ series: density.series.map(item => (item.id === id ? { ...item, ...changes } : item)) })
  const numberField = (key: 'dotValue' | 'radius' | 'seed', label: string, min: number, step: number) => (
    <TextField
      label={label}
      aria-label={label}
      type='number'
      value={density[key]}
      fieldName={key}
      section='dotDensity'
      min={min}
      step={step}
      tooltip={
        key === 'seed' ? (
          <Tooltip style={{ textTransform: 'none' }}>
            <Tooltip.Target>
              <Icon display='question' style={{ marginLeft: '0.5rem' }} />
            </Tooltip.Target>
            <Tooltip.Content>
              <p>
                Controls the approximate dot positions within each county. Keep the same seed and data to repeat the
                same placement. Change the seed to move the dots without changing their counts or values. Dots do not
                represent actual case locations. You can leave this at 42.
              </p>
            </Tooltip.Content>
          </Tooltip>
        ) : undefined
      }
      updateField={(_section: unknown, _subsection: unknown, _field: unknown, value: string) =>
        update({ [key]: Number(value) })
      }
    />
  )
  return (
    <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemButton data-required-field-section='map-dot-density'>Dot Density</AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <p>
          Use nonnegative counts. Dots show approximate distribution within counties, not individual locations. Keep the
          base Data Column empty for a neutral map.
        </p>
        {numberField('dotValue', 'Value per dot', 0.001, 1)}
        {numberField('radius', 'Dot radius', 0.25, 0.25)}
        {numberField('seed', 'Placement seed', 0, 1)}
        <TextField
          label='Unit label'
          value={density.unit}
          fieldName='unit'
          section='dotDensity'
          updateField={(_section: unknown, _subsection: unknown, _field: unknown, unit: string) => update({ unit })}
        />
        <CheckBox
          label='Show Dot Density Legend'
          value={density.legend.show}
          fieldName='show'
          section='dotDensity'
          subsection='legend'
          updateField={(_section: unknown, _subsection: unknown, _field: unknown, show: boolean) =>
            update({ legend: { ...density.legend, show } })
          }
        />
        <TextField
          label='Dot Density Legend Title'
          value={density.legend.title}
          fieldName='title'
          section='dotDensity'
          subsection='legend'
          updateField={(_section: unknown, _subsection: unknown, _field: unknown, title: string) =>
            update({ legend: { ...density.legend, title } })
          }
        />
        {density.series.length === 0 && <p>Choose Add Count Series, then select a count column.</p>}
        {density.series.map((series, index) => (
          <fieldset key={series.id} className='primary-fieldset edit-block'>
            <legend>Count Series {index + 1}</legend>
            <label className='d-block mb-2'>
              Count column {index + 1}
              <select
                className='cove-form-select d-block w-100'
                value={series.column}
                data-required-field-control={index === unresolvedIndex ? 'map-dot-density-count' : undefined}
                onChange={event => updateSeries(series.id, { column: event.target.value })}
              >
                <option value=''>- Select Option -</option>
                {series.column && !columnNames.includes(series.column) && (
                  <option value={series.column}>{series.column} (missing)</option>
                )}
                {columnNames.map(column => (
                  <option key={column} value={column}>
                    {column}
                  </option>
                ))}
              </select>
            </label>
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
            <label className='d-block mb-2'>
              Series color {index + 1}
              <input
                className='d-block'
                type='color'
                value={chroma.valid(series.color) ? chroma(series.color).hex() : '#0072b2'}
                onChange={event => updateSeries(series.id, { color: event.target.value })}
              />
            </label>
            <Button
              type='button'
              variant='danger'
              size='sm'
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
      </AccordionItemPanel>
    </AccordionItem>
  )
}
