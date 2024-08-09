import { useContext } from 'react'
import { mesh, Topology } from 'topojson-client'
import ConfigContext from '../../../../context'

type StateOutputProps = {
  topoData: Topology
  path: any
  scale: any
}

const StateOutput: React.FC<StateOutputProps> = ({ topoData, path, scale, stateToShow }: StateOutputProps) => {
  const { state } = useContext(ConfigContext)
  if (!topoData?.objects?.states) return null
  let geo = topoData.objects.states.geometries.filter(s => {
    return s.properties.name === state.general.statePicked.stateName
  })

  const geoStrokeColor = state.general.geoBorderColor === 'darkGray' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255,255,255,0.7)'

  let stateLines = path(mesh(topoData, geo[0]))

  return (
    <g
      key={'single-state'}
      className='single-state'
      style={{ fill: '#E6E6E6' }}
      stroke={geoStrokeColor}
      strokeWidth={0.95 / scale}
    >
      <path tabIndex={-1} className='state-path' d={stateLines} />
    </g>
  )
}

export default StateOutput
