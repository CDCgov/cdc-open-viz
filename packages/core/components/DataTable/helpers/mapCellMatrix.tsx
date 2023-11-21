import LegendCircle from '@cdc/core/components/LegendCircle'
import CellAnchor from '../components/CellAnchor'
import { DataTableProps } from '../DataTable'
import { ReactNode } from 'react'

type MapRowsProps = DataTableProps & {
  rows: string[]
}

const mapCellArray = ({ rows, columns, runtimeData, config, applyLegendToRow, displayGeoName, formatLegendLocation, displayDataAsText, navigationHandler, setFilteredCountryCode }: MapRowsProps): ReactNode[][] => {
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
            labelValue = displayGeoName(row)
          } else {
            labelValue = formatLegendLocation(row)
          }
          cellValue = (
            <div className='col-12'>
              <LegendCircle fill={legendColor[0]} />
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
