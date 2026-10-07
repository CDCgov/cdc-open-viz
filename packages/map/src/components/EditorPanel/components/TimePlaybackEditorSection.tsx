import {
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel
} from 'react-accessible-accordion'

import Alert from '@cdc/core/components/Alert'
import CustomSortOrder from '@cdc/core/components/EditorPanel/CustomSortOrder'
import { CheckBox, Select } from '@cdc/core/components/EditorPanel/Inputs'
import {
  DEFAULT_PLAYBACK_SECONDS_PER_FRAME,
  PLAYBACK_SECONDS_PER_FRAME_OPTIONS
} from '@cdc/core/components/PlaybackButton'
import type { UpdateFieldFunc } from '@cdc/core/types/UpdateFieldFunc'

import { getOrderedTimeFrames, getTimePlaybackEligibility } from '../../../helpers/timePlayback'
import type { MapConfig, TimePlaybackConfig } from '../../../types/MapConfig'

type TimePlaybackEditorSectionProps = {
  config: MapConfig
  runtimeFilters?: unknown
  updateField: UpdateFieldFunc<unknown>
}

type TimePlaybackEnableControlProps = Pick<TimePlaybackEditorSectionProps, 'config' | 'updateField'>

const eligibilityMessages = {
  'unsupported-map':
    'Time playback is available only for standard U.S. state or world data maps without bubbles or small multiples.',
  'missing-column': 'Choose a time column to enable playback.',
  'missing-geo-column': 'Choose a geography column to enable playback.',
  'missing-primary-column': 'Choose a data column to enable playback.',
  'insufficient-frames':
    'The selected time column must contain at least two non-blank values after filters are applied.',
  'duplicate-geography-frame':
    'Each geography can appear only once in each time step. Remove duplicate geography and time rows to enable playback.'
} as const

const isSupportedGeography = (geoType: MapConfig['general']['geoType']) => geoType === 'us' || geoType === 'world'

const getNextTimePlaybackSettings = (
  settings: MapConfig['timePlayback'],
  changes: Partial<TimePlaybackConfig>
): TimePlaybackConfig => ({
  enabled: settings?.enabled ?? false,
  column: settings?.column || '',
  secondsPerFrame: settings?.secondsPerFrame ?? DEFAULT_PLAYBACK_SECONDS_PER_FRAME,
  order: settings?.order || 'ascending',
  customOrder: settings?.customOrder || [],
  ...(settings?.showSlider === undefined ? {} : { showSlider: settings.showSlider }),
  ...(settings?.showPreviousNextButtons === undefined
    ? {}
    : { showPreviousNextButtons: settings.showPreviousNextButtons }),
  ...changes
})

export const TimePlaybackEnableControl = ({ config, updateField }: TimePlaybackEnableControlProps) => {
  if (!isSupportedGeography(config.general.geoType)) return null

  const settings = config.timePlayback

  return (
    <CheckBox
      value={settings?.enabled ?? false}
      fieldName='enabled'
      label='Enable Time Playback'
      section='timePlayback'
      updateField={(_section: unknown, _subsection: unknown, _fieldName: unknown, value: boolean) =>
        updateField(null, null, 'timePlayback', getNextTimePlaybackSettings(settings, { enabled: value }))
      }
    />
  )
}

const TimePlaybackEditorSection = ({ config, runtimeFilters = [], updateField }: TimePlaybackEditorSectionProps) => {
  const settings = config.timePlayback
  const enabled = settings?.enabled ?? false
  if (!isSupportedGeography(config.general.geoType) || !enabled) return null

  const secondsPerFrame = settings?.secondsPerFrame ?? DEFAULT_PLAYBACK_SECONDS_PER_FRAME
  const columnOptions = Object.keys(config.data?.[0] || {}).map(column => ({ label: column, value: column }))
  const orderedFrames = getOrderedTimeFrames(config.data, settings?.column || '')
  const eligibility = enabled
    ? getTimePlaybackEligibility(config, Array.isArray(runtimeFilters) ? runtimeFilters : [])
    : undefined

  const updateSettings = (changes: Partial<TimePlaybackConfig>) => {
    updateField(null, null, 'timePlayback', getNextTimePlaybackSettings(settings, changes))
  }

  const updateOrder = (order: TimePlaybackConfig['order']) => {
    updateSettings({
      order,
      customOrder: order === 'custom' ? orderedFrames.map(String) : []
    })
  }

  const alertMessage =
    eligibility?.reason && eligibility.reason !== 'disabled' ? eligibilityMessages[eligibility.reason] : undefined

  return (
    <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemButton>Time Playback</AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <Select
          value={settings?.column || ''}
          fieldName='column'
          label='Time Column'
          options={columnOptions}
          initial='- Select Time Column -'
          section='timePlayback'
          updateField={(_section: unknown, _subsection: unknown, _fieldName: unknown, value: string) => {
            const column = String(value)
            updateSettings({
              column,
              customOrder: settings?.order === 'custom' ? getOrderedTimeFrames(config.data, column).map(String) : []
            })
          }}
        />

        <CheckBox
          value={settings?.showSlider ?? true}
          fieldName='showSlider'
          label='Show Time Slider'
          section='timePlayback'
          updateField={(_section: unknown, _subsection: unknown, _fieldName: unknown, value: boolean) =>
            updateSettings({ showSlider: value })
          }
        />

        <CheckBox
          value={settings?.showPreviousNextButtons ?? true}
          fieldName='showPreviousNextButtons'
          label='Show Previous/Next Buttons'
          section='timePlayback'
          updateField={(_section: unknown, _subsection: unknown, _fieldName: unknown, value: boolean) =>
            updateSettings({ showPreviousNextButtons: value })
          }
        />

        <label className='time-playback-settings__range' htmlFor='time-playback-seconds-per-frame'>
          <span className='edit-label column-heading'>Seconds Per Step: {secondsPerFrame}</span>
          <input
            id='time-playback-seconds-per-frame'
            name='timePlayback-secondsPerFrame'
            type='range'
            min={PLAYBACK_SECONDS_PER_FRAME_OPTIONS[0]}
            max={PLAYBACK_SECONDS_PER_FRAME_OPTIONS[PLAYBACK_SECONDS_PER_FRAME_OPTIONS.length - 1]}
            step={PLAYBACK_SECONDS_PER_FRAME_OPTIONS[1] - PLAYBACK_SECONDS_PER_FRAME_OPTIONS[0]}
            value={secondsPerFrame}
            aria-valuetext={`${secondsPerFrame} seconds per step`}
            onChange={event => updateSettings({ secondsPerFrame: Number(event.target.value) })}
          />
        </label>

        <Select
          value={settings?.order || 'ascending'}
          fieldName='order'
          label='Time Order'
          options={[
            { label: 'Ascending', value: 'ascending' },
            { label: 'Custom', value: 'custom' }
          ]}
          section='timePlayback'
          updateField={(_section: unknown, _subsection: unknown, _fieldName: unknown, value: string) =>
            updateOrder(value as TimePlaybackConfig['order'])
          }
        />

        {settings?.order === 'custom' && settings.column && (
          <CustomSortOrder
            column={settings.column}
            data={config.data}
            customOrder={(settings.customOrder || []).map(String)}
            updateField={updateField}
            updateTarget={{ section: 'timePlayback', subsection: null, fieldName: 'customOrder' }}
            droppableId='time_playback_order'
            draggableIdPrefix='timePlaybackOrder'
          />
        )}

        {alertMessage && <Alert type='info' message={alertMessage} showCloseButton={false} />}
      </AccordionItemPanel>
    </AccordionItem>
  )
}

export default TimePlaybackEditorSection
