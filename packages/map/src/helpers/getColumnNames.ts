import { type MapConfig } from '../types/MapConfig'

type ColumnNames = {
  geoColumnName: string | null
  primaryColumnName: string | null
  latitudeColumnName: string | null
  longitudeColumnName: string | null
  categoricalColumnName: string | null
} | null

export const getColumnNames = (columns?: Pick<MapConfig, 'columns'>): ColumnNames => {
  if (!columns) return null
  const geoColumnName = columns.geo?.name || null
  const primaryColumnName = columns.primary?.name || null
  const latitudeColumnName = columns.latitude?.name || null
  const longitudeColumnName = columns.longitude?.name || null
  const categoricalColumnName = columns.categorical?.name || null
  return { geoColumnName, primaryColumnName, latitudeColumnName, longitudeColumnName, categoricalColumnName }
}
