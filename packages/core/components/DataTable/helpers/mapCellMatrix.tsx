import LegendShape from '@cdc/core/components/LegendShape'
import CellAnchor from '../components/CellAnchor'
import { DataTableProps } from '../DataTable'
import { ReactNode } from 'react'
import { displayDataAsText } from '@cdc/core/helpers/displayDataAsText'
import _ from 'lodash'
import { applyLegendToRow } from '@cdc/map/src/helpers/applyLegendToRow'

type MapRowsProps = DataTableProps & {
  rows: string[]
}

const geoSpecialTypes = new Set(['single-state', 'us-county'])
const getGeoLabel = (config, row, formatLegendLocation, displayGeoName) => {
  const { geoType, type } = config.general
  let labelValue
  if (!geoSpecialTypes.has(geoType) || type === 'us-geocode') {
    labelValue = displayGeoName(row)
    if (typeof labelValue === 'string' && labelValue.startsWith('region')) {
      labelValue = labelValue.charAt(0).toUpperCase() + labelValue.slice(1)
    }
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
  rows,
  columns,
  config,
  formatLegendLocation,
  runtimeData,
  displayGeoName,
  filterColumns
) => {
  // Precompute columns to include and their labels
  const filterColSet = new Set(filterColumns)
  const dataTableCols = Object.keys(columns).filter(
    column => columns[column].dataTable === true && columns[column].name
  )
  const allColumns = [...filterColumns, ...dataTableCols]
  const columnLabels = {}
  allColumns.forEach(column => {
    columnLabels[column] = columns[column]?.label || columns[column]?.name || column
  })

  return rows.map(row => {
    const dataRow = {}
    allColumns.forEach(column => {
      const label = columnLabels[column]
      if (column === 'geo') {
        dataRow[label] = getGeoLabel(config, row, formatLegendLocation, displayGeoName)
      } else if (filterColSet.has(column)) {
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

          if (!legendColor) {
            console.error('No legend color found') // eslint-disable-line no-console
          }
          const labelValue = getGeoLabel(config, row, formatLegendLocation, displayGeoName)
          const mapZoomHandler =
            type === 'bubble' && allowMapZoom && geoType === 'world' ? () => setFilteredCountryCode(row) : undefined
          return (
            <div className='col-12'>
              {legendColor && legendColor.length > 0 && <LegendShape fill={legendColor[0]} />}
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
