import { useContext } from 'react'
import { mesh, Topology } from 'topojson-client'
import ConfigContext from '../../../../context'

type GeometryObject = {
  type: string
  coordinates: number[][][] | number[][][][] | number[][][][][]
  properties?: any
}

type SingleFeature = {
  id: string
  type: string
  properties: any
  geometry: GeometryObject
}

type StateOutputProps = {
  topoData: Topology
  statePassed: SingleFeature
  path: any
  scale: any
}

const StateOutput: React.FC<StateOutputProps> = ({ topoData, statePassed, path, scale }: StateOutputProps) => {
  const { state } = useContext(ConfigContext)
  if (!topoData?.objects?.states) return null
  let geo = topoData.objects.states.geometries.filter(s => {
    console.log('s', s)
    console.log('statePassed', statePassed)
    return s.id === statePassed.id
  })

  const geoStrokeColor = state.general.geoBorderColor === 'darkGray' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255,255,255,0.7)'

  let stateLines = path(mesh(topoData, geo[0]))
  return (
    <g key={'single-state'} className='single-state' style={{ fill: '#E6E6E6' }} stroke={geoStrokeColor} strokeWidth={0.95 / scale}>
      <path tabIndex={-1} className='state-path' d={stateLines} />
    </g>
  )
}

export default StateOutput
