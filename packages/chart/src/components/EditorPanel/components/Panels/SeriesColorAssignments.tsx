import { useEffect, useMemo, useRef } from 'react'
import cloneConfig from '@cdc/core/helpers/cloneConfig'
import { Select } from '@cdc/core/components/EditorPanel/Inputs'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import Icon from '@cdc/core/components/ui/Icon'
import { DataColorSelector } from '@cdc/core/components/DataColorSelector'
import { getColorPaletteVersion } from '@cdc/core/helpers/getColorPaletteVersion'
import { getCurrentPaletteName, migratePaletteWithMap } from '@cdc/core/helpers/palettes/utils'
import { paletteMigrationMap } from '@cdc/core/helpers/palettes/migratePaletteName'
import { getColorScale } from '../../../../helpers/getColorScale'
import { ChartConfig } from '../../../../types/ChartConfig'
import {
  getSeriesColorAssignmentItems,
  getSeriesColorAssignments,
  isSeriesColorAssignmentModeByValue,
  supportsSeriesColorAssignments,
  type SeriesColorAssignment
} from '../../../../helpers/colorAssignmentHelpers'

type SeriesColorAssignmentsProps = {
  config: ChartConfig
  updateConfig: (config: ChartConfig) => void
  colorPalettes: Record<string, any>
}

const SeriesColorAssignments = ({ config, updateConfig, colorPalettes }: SeriesColorAssignmentsProps) => {
  const seriesColorAssignmentItems = useMemo(() => getSeriesColorAssignmentItems(config), [config])
  const seriesColorAssignments = getSeriesColorAssignments(config)
  const seriesColorAssignmentMap = useMemo(
    () => new Map(seriesColorAssignments.map(assignment => [assignment.key, assignment.color])),
    [seriesColorAssignments]
  )
  const seriesColorAssignmentSupported = supportsSeriesColorAssignments(config)
  const seriesColorAssignmentMode = config.general?.palette?.colorAssignmentMode || 'ordered'
  const isSeriesColorAssignmentByValue = isSeriesColorAssignmentModeByValue(config)
  const currentPaletteName = getCurrentPaletteName(config)
  const customColors = config.general?.palette?.customColorsOrdered || config.general?.palette?.customColors
  const hasCustomColors = Array.isArray(customColors) && customColors.length > 0

  const getOrderedColorScaleConfig = () => ({
    ...config,
    general: {
      ...config.general,
      palette: {
        ...config.general?.palette,
        colorAssignmentMode: 'ordered' as const
      }
    }
  })

  const orderedColorScaleConfig = useMemo(getOrderedColorScaleConfig, [config])
  const orderedColorScale = useMemo(() => getColorScale(orderedColorScaleConfig), [orderedColorScaleConfig])
  const distributedPaletteColorOptions = useMemo(() => {
    const colors = (orderedColorScale as any)?.range?.() || []
    return Array.from(new Set(colors.filter(Boolean)))
  }, [orderedColorScale])
  const paletteColorOptions = useMemo(() => {
    if (hasCustomColors) {
      return Array.from(new Set(customColors.filter(Boolean)))
    }

    const version = getColorPaletteVersion(config)
    const versionedPalettes = colorPalettes?.[`v${version}`] || colorPalettes?.v2 || colorPalettes || {}
    const paletteName = migratePaletteWithMap(currentPaletteName, paletteMigrationMap, false)
    const colors =
      versionedPalettes[paletteName] || versionedPalettes[currentPaletteName] || distributedPaletteColorOptions

    return Array.from(new Set(colors.filter(Boolean)))
  }, [colorPalettes, config, customColors, hasCustomColors, currentPaletteName, distributedPaletteColorOptions])
  const paletteSourceFingerprint = hasCustomColors
    ? 'custom-colors'
    : `${currentPaletteName}|${paletteColorOptions.join('|')}`
  const previousPaletteSource = useRef<{ hasCustomColors: boolean; fingerprint: string } | null>(null)

  const getAssignmentsFromCurrentColors = (): SeriesColorAssignment[] => {
    return seriesColorAssignmentItems.map(({ key, label }, index) => {
      const orderedColor = orderedColorScale(label)
      const color = paletteColorOptions.includes(orderedColor)
        ? orderedColor
        : distributedPaletteColorOptions[index % distributedPaletteColorOptions.length] ||
          paletteColorOptions[index % paletteColorOptions.length] ||
          '#000000'

      return { key, color }
    })
  }

  const updateSeriesColorAssignmentMode = (mode: 'ordered' | 'by-value') => {
    const _state = cloneConfig(config)
    if (!_state.general.palette) {
      _state.general.palette = {}
    }

    _state.general.palette.colorAssignmentMode = mode
    if (mode === 'by-value') {
      _state.general.palette.colorAssignments = getAssignmentsFromCurrentColors()
    }

    updateConfig(_state)
  }

  const resetSeriesColorAssignmentsToCurrentColors = () => {
    const _state = cloneConfig(config)
    if (!_state.general.palette) {
      _state.general.palette = {}
    }

    _state.general.palette.colorAssignmentMode = 'by-value'
    _state.general.palette.colorAssignments = getAssignmentsFromCurrentColors()
    updateConfig(_state)
  }

  const updateSeriesColorAssignment = (key: string, color: string) => {
    const _state = cloneConfig(config)
    if (!_state.general.palette) {
      _state.general.palette = {}
    }

    const currentSeriesKeys = new Set(seriesColorAssignmentItems.map(({ key }) => key))
    const assignments = seriesColorAssignments.filter(assignment => currentSeriesKeys.has(assignment.key))
    const existingIndex = assignments.findIndex(assignment => assignment.key === key)
    if (existingIndex === -1) {
      assignments.push({ key, color })
    } else {
      assignments[existingIndex] = { key, color }
    }

    _state.general.palette.colorAssignmentMode = 'by-value'
    _state.general.palette.colorAssignments = assignments
    updateConfig(_state)
  }

  useEffect(() => {
    const currentSource = { hasCustomColors, fingerprint: paletteSourceFingerprint }

    if (!seriesColorAssignmentSupported || !isSeriesColorAssignmentByValue) {
      previousPaletteSource.current = currentSource
      return
    }

    if (previousPaletteSource.current === null) {
      previousPaletteSource.current = currentSource
      return
    }

    const shouldResetFromPalette =
      !hasCustomColors &&
      paletteColorOptions.length > 0 &&
      (previousPaletteSource.current.hasCustomColors ||
        previousPaletteSource.current.fingerprint !== paletteSourceFingerprint)

    previousPaletteSource.current = currentSource

    if (shouldResetFromPalette) {
      resetSeriesColorAssignmentsToCurrentColors()
    }
  }, [hasCustomColors, isSeriesColorAssignmentByValue, paletteSourceFingerprint, seriesColorAssignmentSupported])

  if (!seriesColorAssignmentSupported) return null

  return (
    <fieldset className='series-color-assignments'>
      <Select
        value={seriesColorAssignmentMode}
        label='Color Assignment Mode'
        tooltip={
          <Tooltip style={{ textTransform: 'none' }}>
            <Tooltip.Target>
              <Icon display='question' style={{ marginLeft: '0.5rem' }} />
            </Tooltip.Target>
            <Tooltip.Content>
              <p>
                Toggling this determines how colors in the palette are assigned. Colors can be assigned in order or can
                be associated with specific series.
              </p>
            </Tooltip.Content>
          </Tooltip>
        }
        fieldName='colorAssignmentMode'
        section='general'
        subsection='palette'
        updateField={(_section, _subsection, _fieldName, value) => {
          updateSeriesColorAssignmentMode(value as 'ordered' | 'by-value')
        }}
        options={[
          { label: 'Use palette order', value: 'ordered' },
          { label: 'Assign colors to series', value: 'by-value' }
        ]}
      />
      {isSeriesColorAssignmentByValue && (
        <div className='series-color-assignments__rows'>
          {seriesColorAssignmentItems.map(({ key, label }) => {
            const assignedColor = seriesColorAssignmentMap.get(key)
            const color = assignedColor || orderedColorScale(label) || paletteColorOptions[0] || '#000000'

            return (
              <div className='series-color-assignments__row' key={key}>
                <label className='series-color-assignments__label' title={`Series key: ${key}`}>
                  {label}
                </label>
                <DataColorSelector
                  aria-label={`Color for ${label}`}
                  value={color}
                  colors={paletteColorOptions}
                  allowNone={false}
                  allowCustom={false}
                  showCustomValue={false}
                  onChange={nextColor => updateSeriesColorAssignment(key, nextColor)}
                />
              </div>
            )
          })}
        </div>
      )}
    </fieldset>
  )
}

export default SeriesColorAssignments
