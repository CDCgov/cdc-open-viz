import LegendShape from '@cdc/core/components/LegendShape'
import CellAnchor from '../components/CellAnchor'
import { DataTableProps } from '../DataTable'
import { ReactNode } from 'react'
import { displayDataAsText } from '@cdc/core/helpers/displayDataAsText'
import parse from 'html-react-parser'
import _ from 'lodash'
import { hashObj } from '../../../helpers/hashObj'
import { sanitizeToSvgId } from '../../../helpers/cove/string'
import { getMapDataTableColumnKeys } from './getMapDataTableColumnKeys'

type MapRowsProps = DataTableProps & {
  rows: string[]
  applyLegendToRow: (
    rowObj: any,
    config: any,
    runtimeLegend: any,
    legendMemo: any,
    legendSpecialClassLastMemo: any
  ) => string[]
  getPatternForRow: (rowObj: any, config: any) => any
}

const getGeoLabel = (config, row, formatLegendLocation, displayGeoName, runtimeData = null) => {
  const { geoType, type } = config.general

  let labelValue
  const displayOverride = runtimeData?.[row]?.[config.columns?.geo?.displayColumn]
  if (!['single-state', 'us-county'].includes(geoType) || type === 'us-geocode') {
    // Use the row (UID) for lookup - this allows "US-AL" to become "Alabama"
    labelValue = displayGeoName(row, displayOverride)

    // If displayGeoName returned the same value (not found in lookups), use the raw imported data
    if (labelValue === row && runtimeData && config.columns?.geo?.name) {
      const rawGeoValue = runtimeData[row]?.[config.columns.geo.name]
      if (rawGeoValue && rawGeoValue !== row) {
        labelValue = rawGeoValue
      }
    }

    labelValue = String(labelValue).startsWith('region') ? _.capitalize(labelValue) : labelValue
  } else {
    labelValue = formatLegendLocation(row)
  }
  return labelValue
}

const getDataValue = (config, rowData, column) => {
  // check for special classes
  let specialValFound = ''
  let columnName = config.columns[column]?.name
  const { specialClasses } = config.legend
  if (specialClasses && specialClasses.length && typeof specialClasses[0] === 'object') {
    specialClasses.forEach(specialClass => {
      if (specialClass.key === columnName) {
        if (String(rowData[specialClass.key]) === specialClass.value) {
          specialValFound = specialClass.label
        }
      }
    })
  }
  return specialValFound || rowData[columnName]
}

export const getMapRowData = (
  rows: string[],
  columns: Record<string, { label; name?; dataTable }>,
  config: Record<string, Object>,
  formatLegendLocation: (row: string) => string,
  runtimeData: Record<string, Object>,
  displayGeoName: (row: string) => string,
  filterColumns: string[]
) => {
  const orderedColumnKeys = getMapDataTableColumnKeys(columns as any)

  return rows.map((row: string) => {
    const dataRow = {}
    ;[
      ...filterColumns,
      ...orderedColumnKeys
    ].map(column => {
      const label = columns[column]?.label || columns[column]?.name || column
      if (column === 'geo') {
        dataRow[label] = getGeoLabel(config, row, formatLegendLocation, displayGeoName, runtimeData)
      } else if (filterColumns.includes(column)) {
        dataRow[label] = runtimeData[row][column]
      } else {
        const dataValue = getDataValue(config, runtimeData[row], column)
        dataRow[label] = displayDataAsText(dataValue, column, config)
      }
    })
    return dataRow
  })
}

const mapCellArray = ({
  rows,
  columns,
  runtimeData,
  config,
  displayGeoName,
  formatLegendLocation,
  navigationHandler,
  setFilteredCountryCode,
  legendMemo,
  legendSpecialClassLastMemo,
  runtimeLegend,
  applyLegendToRow,
  getPatternForRow
}: MapRowsProps): ReactNode[][] => {
  const { allowMapZoom, geoType, type } = config.general
  const orderedColumnKeys = getMapDataTableColumnKeys(columns as any)

  return rows.map(row =>
    orderedColumnKeys.map(column => {
        if (column === 'geo') {
          const rowObj = runtimeData[row]
          if (!rowObj) {
            throw new Error('No row object found')
          }

          const legendColor = applyLegendToRow(rowObj, config, runtimeLegend, legendMemo, legendSpecialClassLastMemo)
          const noColor = !legendMemo.current.has(hashObj(rowObj))

          if (!legendColor) {
            console.error('No legend color found') // eslint-disable-line no-console
          }
          const labelValue = getGeoLabel(config, row, formatLegendLocation, displayGeoName, runtimeData)
          const mapZoomHandler =
            type === 'bubble' && allowMapZoom && geoType === 'world' ? () => setFilteredCountryCode(row) : undefined

          const validColor = legendColor && legendColor.length > 0 && !noColor

          // Check for pattern information
          const patternInfo = getPatternForRow(rowObj, config)
          const mapId = config.runtime?.uniqueId || 'map'
          const sanitizedPatternDataKey = sanitizeToSvgId(patternInfo?.dataKey || '')

          return (
            <div style={{ display: 'flex', alignItems: 'flex-start', flexWrap: 'nowrap', whiteSpace: 'nowrap' }}>
              <div style={{ flexShrink: 0 }}>
                {validColor ? (
                  patternInfo ? (
                    <LegendShape
                      fill={legendColor[0]}
                      patternInfo={{
                        pattern: patternInfo.pattern,
                        patternId: `${mapId}--${sanitizedPatternDataKey}--${patternInfo.patternIndex}--table`,
                        size: patternInfo.size,
                        color: patternInfo.color
                      }}
                    />
                  ) : (
                    <LegendShape fill={legendColor[0]} />
                  )
                ) : (
                  <div className='me-2' style={{ width: '1rem', height: '1rem' }} />
                )}
              </div>
              <CellAnchor
                markup={labelValue}
                row={rowObj}
                columns={columns}
                navigationHandler={navigationHandler}
                mapZoomHandler={mapZoomHandler}
              />
            </div>
          )
        } else {
          const rowData = runtimeData[row]
          const dataValue = getDataValue(config, rowData, column)
          const text = displayDataAsText(dataValue, column, config)
          return typeof text === 'string' ? parse(text) : text
        }
      })
  )
}

export default mapCellArray
