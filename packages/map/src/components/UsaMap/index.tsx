import UsaStateMap from './components/UsaMap.State'
import UsaRegionMap from './components/UsaMap.Region.jsx'
import UsaCountyMap from './components/UsaMap.County'
import UsaSingleStateMap from './components/UsaMap.SingleState.jsx'

const UsaMap = {
  State: UsaStateMap,
  Region: UsaRegionMap,
  County: UsaCountyMap,
  SingleState: UsaSingleStateMap
}

export default UsaMap
