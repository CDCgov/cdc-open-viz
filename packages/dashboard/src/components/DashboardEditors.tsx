import CdcChart from '@cdc/chart/src/CdcChartComponent'
import { APIFilterDropdowns } from './DashboardFilters'
import CdcMap from '@cdc/map/src/CdcMap'
import CdcDataBite from '@cdc/data-bite/src/CdcDataBite'
import CdcWaffleChart from '@cdc/waffle-chart/src/CdcWaffleChart'
import CdcMarkupInclude from '@cdc/markup-include/src/CdcMarkupInclude'
import CdcFilteredText from '@cdc/filtered-text/src/CdcFilteredText'
import DashboardSharedFilters from './DashboardFilters'
import DataTableStandAlone from '@cdc/core/components/DataTable/DataTableStandAlone'
import FootnotesStandAlone from '@cdc/core/components/Footnotes/FootnotesStandAlone'
import _ from 'lodash'

type DashboardEditorProps = {
  visualizationKey: string
  visualizationConfig: any
  _updateConfig: (config: any) => void
  isDebug?: boolean
  setSharedFilter?: Function
  apiFilterDropdowns?: APIFilterDropdowns
  state: any
}

const DashboardEditors: React.FC<DashboardEditorProps> = ({
  visualizationKey,
  visualizationConfig,
  _updateConfig,
  isDebug,
  setSharedFilter,
  apiFilterDropdowns,
  state
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
          isDashboard={true}
        />
      )
    case 'map':
      return (
        <CdcMap
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
        />
      )

    case 'dashboardFilters':
      return (
        <DashboardSharedFilters
          isEditor={true}
          visualizationConfig={visualizationConfig}
          apiFilterDropdowns={apiFilterDropdowns}
          setConfig={_updateConfig}
        />
      )

    case 'table':
      return (
        <DataTableStandAlone
          visualizationKey={visualizationKey}
          config={visualizationConfig}
          isEditor={true}
          updateConfig={_updateConfig}
        />
      )

    case 'footnotes':
      return (
        <FootnotesStandAlone
          visualizationKey={visualizationKey}
          config={{ ...visualizationConfig, datasets: state.config.datasets }}
          isEditor={true}
          updateConfig={conf => {
            /* Datasets are passed in just for reference and need to be removed */
            _updateConfig(_.omit(conf, 'datasets'))
          }}
        />
      )

    default:
      return null
  }
}

export default DashboardEditors
