import CdcChart from '@cdc/chart/src/CdcChartComponent'
import { APIFilterDropdowns } from './DashboardFilters'
import CdcMapComponent from '@cdc/map/src/CdcMapComponent'
import CdcDataBite from '@cdc/data-bite/src/CdcDataBite'
import CdcWaffleChart from '@cdc/waffle-chart/src/CdcWaffleChart'
import CdcMarkupInclude from '@cdc/markup-include/src/CdcMarkupInclude'
import CdcFilteredText from '@cdc/filtered-text/src/CdcFilteredText'
import DashboardSharedFilters from './DashboardFilters'
import DataTableStandAlone from '@cdc/core/components/DataTable/DataTableStandAlone'
import _ from 'lodash'
import { AnyVisualization } from '@cdc/core/types/Visualization'
import { DashboardState } from '../store/dashboard.reducer'

type DashboardEditorProps = {
  visualizationKey: string
  visualizationConfig: AnyVisualization
  _updateConfig: (config: any) => void
  isDebug?: boolean
  setSharedFilter?: Function
  apiFilterDropdowns?: APIFilterDropdowns
  state: DashboardState
  interactionLabel: string
}

const DashboardEditors: React.FC<DashboardEditorProps> = ({
  visualizationKey,
  visualizationConfig,
  _updateConfig,
  isDebug,
  setSharedFilter,
  apiFilterDropdowns,
  state,
  interactionLabel = ''
}) => {
  const setsSharedFilter =
    state.config.dashboard.sharedFilters &&
    state.config.dashboard.sharedFilters.filter(sharedFilter => sharedFilter.setBy === visualizationKey).length > 0
  const setSharedFilterValue = setsSharedFilter
    ? state.config.dashboard.sharedFilters.filter(sharedFilter => sharedFilter.setBy === visualizationKey)[0].active
    : undefined
  switch (visualizationConfig.type) {
    case 'chart':
      return (
        <CdcChart
          key={visualizationKey}
          config={visualizationConfig}
          isEditor={true}
          isDebug={isDebug}
          setConfig={_updateConfig}
          setSharedFilter={setsSharedFilter ? setSharedFilter : undefined}
          setSharedFilterValue={setSharedFilterValue}
          dashboardConfig={state.config}
          datasets={state.config.datasets}
          isDashboard={true}
        />
      )
    case 'map':
      return (
        <CdcMapComponent
          key={visualizationKey}
          config={visualizationConfig}
          isEditor={true}
          isDebug={isDebug}
          setConfig={_updateConfig}
          setSharedFilter={setsSharedFilter ? setSharedFilter : undefined}
          setSharedFilterValue={setSharedFilterValue}
          isDashboard={true}
          showLoader={false}
          dashboardConfig={state.config}
          datasets={state.config.datasets}
          interactionLabel={interactionLabel}
        />
      )

    case 'data-bite':
      return (
        <CdcDataBite
          key={visualizationKey}
          config={{ ...visualizationConfig, newViz: true }}
          isEditor={true}
          setConfig={_updateConfig}
          isDashboard={true}
          interactionLabel={interactionLabel}
        />
      )

    case 'waffle-chart':
      return (
        <CdcWaffleChart
          key={visualizationKey}
          config={visualizationConfig}
          isEditor={true}
          setConfig={_updateConfig}
          isDashboard={true}
          interactionLabel={interactionLabel}
        />
      )

    case 'markup-include':
      return (
        <CdcMarkupInclude
          key={visualizationKey}
          config={visualizationConfig}
          isEditor={true}
          setConfig={_updateConfig}
          isDashboard={true}
          datasets={state.config.datasets}
          interactionLabel={interactionLabel}
        />
      )

    case 'filtered-text':
      return (
        <CdcFilteredText
          key={visualizationKey}
          config={visualizationConfig}
          isEditor={true}
          setConfig={_updateConfig}
          isDashboard={true}
          interactionLabel={interactionLabel}
        />
      )
    case 'dashboardFilters':
      return (
        <DashboardSharedFilters
          isEditor={true}
          visualizationConfig={visualizationConfig}
          apiFilterDropdowns={apiFilterDropdowns}
          setConfig={_updateConfig}
          interactionLabel={interactionLabel}
        />
      )

    case 'table':
      return (
        <DataTableStandAlone
          visualizationKey={visualizationKey}
          config={visualizationConfig}
          isEditor={true}
          updateConfig={_updateConfig}
          datasets={state.config.datasets}
          interactionLabel={interactionLabel}
        />
      )

    default:
      return null
  }
}

export default DashboardEditors
