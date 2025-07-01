import LegendShape from '@cdc/core/components/LegendShape'
import CellAnchor from '../components/CellAnchor'
import { DataTableProps } from '../DataTable'
import { ReactNode } from 'react'
import { displayDataAsText } from '@cdc/core/helpers/displayDataAsText'
import _ from 'lodash'
import { applyLegendToRow } from '@cdc/map/src/helpers/applyLegendToRow'
import { hashObj } from '@cdc/map/src/helpers'

type MapRowsProps = DataTableProps & {
  rows: string[]
}

const getGeoLabel = (config, row, formatLegendLocation, displayGeoName) => {
  const { geoType, type } = config.general
  let labelValue
  if (!['single-state', 'us-county'].includes(geoType) || type === 'us-geocode') {
    labelValue = displayGeoName(row)
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
  return rows.map((row: string) => {
    const dataRow = {}
    ;[
      ...filterColumns,
      ...Object.keys(columns).filter(column => columns[column].dataTable === true && columns[column].name)
    ].map(column => {
      const label = columns[column]?.label || columns[column]?.name || column
      if (column === 'geo') {
        dataRow[label] = getGeoLabel(config, row, formatLegendLocation, displayGeoName)
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
  runtimeLegend
}: MapRowsProps): ReactNode[][] => {
  const { allowMapZoom, geoType, type } = config.general
  return rows.map(row =>
    Object.keys(columns)
      .filter(column => columns[column].dataTable === true && columns[column].name)
      .map(column => {
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
          const labelValue = getGeoLabel(config, row, formatLegendLocation, displayGeoName)
          const mapZoomHandler =
            type === 'bubble' && allowMapZoom && geoType === 'world' ? () => setFilteredCountryCode(row) : undefined

          const validColor = legendColor && legendColor.length > 0 && !noColor
          return (
            <div className='col-12'>
              {validColor ? (
                <LegendShape fill={legendColor[0]} />
              ) : (
                <div className='d-inline-block me-2' style={{ width: '1rem', height: '1rem' }} />
              )}
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
          return displayDataAsText(dataValue, column, config)
        }
      })
  )
}

export default mapCellArray
