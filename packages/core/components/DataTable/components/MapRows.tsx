import LegendCircle from '@cdc/core/components/LegendCircle'
import CellAnchor from './CellAnchor'
import { DataTableProps } from '../DataTable'

type MapRowsProps = DataTableProps & {
  rows: string[]
}

const MapRows = ({ rows, columns, runtimeData, config, applyLegendToRow, displayGeoName, formatLegendLocation, displayDataAsText, navigationHandler }: MapRowsProps) => {
  return (
    <>
      {rows.map(row => {
        return (
          <tr role='row'>
            {Object.keys(columns)
              .filter(column => columns[column].dataTable === true && columns[column].name)
              .map(column => {
                let cellValue

                if (column === 'geo') {
                  const rowObj = runtimeData[row]
                  const legendColor = applyLegendToRow(rowObj)

                  var labelValue
                  if ((config.general.geoType !== 'single-state' && config.general.geoType !== 'us-county') || config.general.type === 'us-geocode') {
                    labelValue = displayGeoName(row)
                  } else {
                    labelValue = formatLegendLocation(row)
                  }

                  labelValue = <CellAnchor markup={labelValue} row={rowObj} columns={columns} navigationHandler={navigationHandler} />
                  cellValue = (
                    <>
                      <LegendCircle fill={legendColor[0]} />
                      {labelValue}
                    </>
                  )
                } else {
                  // check for special classes
                  let specialValFound = ''
                  if (config.legend.specialClasses && config.legend.specialClasses.length && typeof config.legend.specialClasses[0] === 'object') {
                    for (let i = 0; i < config.legend.specialClasses.length; i++) {
                      if (config.legend.specialClasses[i].key === config.columns[column].name) {
                        if (String(runtimeData[row][config.legend.specialClasses[i].key]) === config.legend.specialClasses[i].value) {
                          specialValFound = config.legend.specialClasses[i].label
                        }
                      }
                    }
                  }
                  cellValue = specialValFound ? displayDataAsText(specialValFound, column) : displayDataAsText(runtimeData[row][config.columns[column].name], column)
                }

                return (
                  <td tabIndex={0} role='gridcell'>
                    {cellValue}
                  </td>
                )
              })}
          </tr>
        )
      })}
    </>
  )
}

export default MapRows
