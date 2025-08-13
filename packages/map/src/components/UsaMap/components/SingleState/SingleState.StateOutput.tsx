import { useContext } from 'react'
import { Topology } from 'topojson-client'
import ConfigContext from '../../../../context'
import { getGeoStrokeColor } from '../../../../helpers/colors'

type StateOutputProps = {
  topoData: Topology
  path: any
  scale: any
}

const StateOutput: React.FC<StateOutputProps> = ({ topoData, path, scale }: StateOutputProps) => {
  const { config } = useContext(ConfigContext)
  if (!topoData?.states) return null
  const statesPicked = topoData.states.filter(s => {
    return config.general.statesPicked.map(sp => sp.stateName).includes(s.properties.name)
  })

  const geoStrokeColor = getGeoStrokeColor(config)

  const stateLines = statesPicked.map(s => path(s.geometry))

  return stateLines.map((line, index) => (
    <g
      key={`single-state-${index}`}
      className='single-state pe-none'
      style={{ fill: 'transparent' }}
      stroke={geoStrokeColor}
      strokeWidth={2 / scale}
    >
      <path tabIndex={-1} className='state-path' d={line} />
    </g>
  ))
}

export default StateOutput
