import { useContext } from 'react'
import { Topology } from 'topojson-client'
import ConfigContext from '../../../../context'
import { getGeoStrokeColor } from '../../../../helpers/colors'
import { getStatesPicked } from '../../../../helpers/getStatesPicked'

const GRAYED_OUT_COLOR = '#d3d3d3'

type StateOutputProps = {
  topoData: Topology
  path: any
  scale: any
  runtimeData?: any
}

const StateOutput: React.FC<StateOutputProps> = ({ topoData, path, scale, runtimeData }: StateOutputProps) => {
  const { config } = useContext(ConfigContext)
  if (!topoData?.states) return null

  const statesPickedData = getStatesPicked(config, runtimeData)
  const stateNames = statesPickedData.map(sp => sp.stateName)

  const showUnselected = config.general.hideUnselectedStates === false

  const selectedStates = topoData.states.filter(s => stateNames.includes(s.properties.name))
  const unselectedStates = showUnselected ? topoData.states.filter(s => !stateNames.includes(s.properties.name)) : []

  const geoStrokeColor = getGeoStrokeColor(config)

  return (
    <>
      {unselectedStates.map((s, index) => (
        <g
          key={`unselected-state-${index}`}
          className='single-state unselected'
          style={{ fill: GRAYED_OUT_COLOR, opacity: 0.3, pointerEvents: 'none' }}
          stroke={geoStrokeColor}
          strokeWidth={1 / scale}
        >
          <path tabIndex={-1} className='state-path' d={path(s.geometry)} />
        </g>
      ))}
      {selectedStates.map((s, index) => (
        <g
          key={`single-state-${index}`}
          className='single-state'
          style={{ fill: 'transparent', pointerEvents: 'none' }}
          stroke={geoStrokeColor}
          strokeWidth={2 / scale}
        >
          <path tabIndex={-1} className='state-path' d={path(s.geometry)} />
        </g>
      ))}
    </>
  )
}

export default StateOutput
