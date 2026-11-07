import { useMemo, type ContextType } from 'react'
import type { MapConfig } from '../types/MapConfig'
import { CountyDotDensityContext } from '../context/CountyDotDensityContext'
import { prepareCountyDotDensity, type CountyDotDensitySettings } from '../helpers/countyDotDensityLayer'
import type { DotDensityGeometry } from '../helpers/dotDensity'
import {
  getDotDensityConfig,
  getConfiguredDotDensitySeries,
  isDotDensitySupported,
  getActiveHiddenDensitySeries
} from '../helpers/dotDensityConfig'
import { getAvailableMapColumns } from '../helpers/getMissingRequiredMapFields'

/** Separate expensive geographic preparation from radius and visibility redraws. */
export default function useCountyDotDensity(
  config: MapConfig,
  runtimeData: Record<string, Record<string, unknown>>,
  renderableGeos: DotDensityGeometry[] | undefined,
  previewDotDensity: ContextType<typeof CountyDotDensityContext>,
  hiddenDensitySeries: readonly string[],
  densitySourceColumns?: readonly string[]
) {
  const { enabled, dotValue, seed, radius } = getDotDensityConfig(config)
  const supported = isDotDensitySupported(config)
  // Config updates can clone the series array even when only radius or labels changed.
  const seriesKey = JSON.stringify(
    getConfiguredDotDensitySeries(config).map(({ id, column, color }) => ({ id, column, color }))
  )
  const authoredSettings = useMemo<CountyDotDensitySettings | undefined>(
    () =>
      supported && enabled
        ? { dotValue, seed, series: JSON.parse(seriesKey) as CountyDotDensitySettings['series'] }
        : undefined,
    [supported, enabled, dotValue, seed, seriesKey]
  )
  const dotDensity = useMemo(
    () =>
      previewDotDensity ||
      (authoredSettings
        ? {
            settings: authoredSettings,
            radius,
            hiddenSeries: getActiveHiddenDensitySeries(authoredSettings.series, hiddenDensitySeries)
          }
        : null),
    [previewDotDensity, authoredSettings, radius, hiddenDensitySeries]
  )
  const counties = useMemo(
    () => (renderableGeos || []).filter(geo => String(geo.id ?? '').length > 2),
    [renderableGeos]
  )
  const sourceColumns = useMemo(
    () => densitySourceColumns ?? getAvailableMapColumns(config.data || []),
    [config.data, densitySourceColumns]
  )
  const densitySettings = dotDensity?.settings
  const densityLayer = useMemo(
    () =>
      densitySettings
        ? prepareCountyDotDensity(
            counties,
            runtimeData,
            densitySettings,
            sourceColumns.length ? sourceColumns : undefined
          )
        : null,
    [densitySettings, counties, runtimeData, sourceColumns]
  )
  return { dotDensity, densityLayer }
}
