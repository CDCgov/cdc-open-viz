import { useContext } from 'react'
import { mesh, Topology } from 'topojson-client'
import ConfigContext from '../../../../context'
import { getGeoFillColor, getGeoStrokeColor } from '../../../../helpers/colors'

type StateOutputProps = {
  topoData: Topology
  path: any
  scale: any
}

const StateOutput: React.FC<StateOutputProps> = ({ topoData, path, scale, stateToShow }: StateOutputProps) => {
  const { config } = useContext(ConfigContext)
  if (!topoData?.objects?.states) return null
  let geo = topoData.objects.states.geometries.filter(s => {
    return s.properties.name === config.general.statePicked.stateName
  })

  const geoStrokeColor = getGeoStrokeColor(config)
  const geoFillColor = getGeoFillColor(config)

  let stateLines = path(mesh(topoData, geo[0]))

  return (
    <g
      key={'single-state'}
      className='single-state'
      style={{ fill: geoFillColor }}
      stroke={geoStrokeColor}
      strokeWidth={0.95 / scale}
    >
      <path tabIndex={-1} className='state-path' d={stateLines} />
    </g>
  )
}

export default StateOutput
