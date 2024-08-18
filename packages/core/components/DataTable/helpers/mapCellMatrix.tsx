import LegendShape from '@cdc/core/components/LegendShape'
import CellAnchor from '../components/CellAnchor'
import { DataTableProps } from '../DataTable'
import { ReactNode } from 'react'

type MapRowsProps = DataTableProps & {
  rows: string[]
}

const mapCellArray = ({ rows, columns, runtimeData, config, applyLegendToRow, displayGeoName, formatLegendLocation, displayDataAsText, navigationHandler, setFilteredCountryCode, viewport }: MapRowsProps): ReactNode[][] => {
  return rows.map(row =>
    Object.keys(columns)
      .filter(column => columns[column].dataTable === true && columns[column].name)
      .map(column => {
        let cellValue

        if (column === 'geo') {
          const rowObj = runtimeData[row]
          const legendColor = applyLegendToRow(rowObj)

          let labelValue
          const mapZoomHandler = config.general.type === 'bubble' && config.general.allowMapZoom && config.general.geoType === 'world' ? () => setFilteredCountryCode(row) : undefined
          if ((config.general.geoType !== 'single-state' && config.general.geoType !== 'us-county') || config.general.type === 'us-geocode') {
            const capitalize = str => {
              return str.charAt(0).toUpperCase() + str.slice(1)
            }
            labelValue = displayGeoName(row)
            labelValue = String(labelValue).startsWith('region') ? capitalize(labelValue) : labelValue
          } else {
            labelValue = formatLegendLocation(row)
          }
          cellValue = (
            <div className='col-12'>
              <LegendShape viewport={viewport} fill={legendColor[0]} />
              <CellAnchor markup={labelValue} row={rowObj} columns={columns} navigationHandler={navigationHandler} mapZoomHandler={mapZoomHandler} />
            </div>
          )
        } else {
          // check for special classes
          let specialValFound = ''
          let columnName = config.columns[column].name
          const { specialClasses } = config.legend
          if (specialClasses && specialClasses.length && typeof specialClasses[0] === 'object') {
            specialClasses.forEach(specialClass => {
              if (specialClass.key === columnName) {
                if (String(runtimeData[row][specialClass.key]) === specialClass.value) {
                  specialValFound = specialClass.label
                }
              }
            })
          }
          cellValue = displayDataAsText(specialValFound || runtimeData[row][columnName], column)
        }

        return cellValue
      })
  )
}

export default mapCellArray
