import DataTableStandAlone from '@cdc/core/components/DataTable/DataTableStandAlone'
import React, { useContext, useMemo } from 'react'
import Toggle from './Toggle'
import _ from 'lodash'
import { ConfigRow } from '../types/ConfigRow'
import CdcChart from '@cdc/chart/src/CdcChart'
import CdcDataBite from '@cdc/data-bite/src/CdcDataBite'
import CdcMap from '@cdc/map/src/CdcMap'
import CdcWaffleChart from '@cdc/waffle-chart/src/CdcWaffleChart'
import CdcMarkupInclude from '@cdc/markup-include/src/CdcMarkupInclude'
import CdcFilteredText from '@cdc/filtered-text/src/CdcFilteredText'
import DashboardSharedFilters, { APIFilterDropdowns } from './DashboardFilters'
import { DashboardContext } from '../DashboardContext'
import { ViewPort } from '@cdc/core/types/ViewPort'
import { getFootnotesVizConfig, getVizConfig } from '../helpers/getVizConfig'
import { TableConfig } from '@cdc/core/components/DataTable/types/TableConfig'
import FootnotesStandAlone from '@cdc/core/components/Footnotes/FootnotesStandAlone'
import CollapsibleVisualizationRow from './CollapsibleVisualizationRow'
import { DashboardFilters } from '../types/DashboardFilters'
import { hasDashboardApplyBehavior } from '../helpers/hasDashboardApplyBehavior'

type VisualizationWrapperProps = {
  allExpanded: boolean
  children: React.ReactNode
  currentViewport: ViewPort
  groupName: string
  hideVisualization: boolean
  row: ConfigRow
}

const VisualizationWrapper: React.FC<VisualizationWrapperProps> = ({
  allExpanded,
  currentViewport,
  groupName,
  hideVisualization,
  row,
  children
}) => {
  return hideVisualization ? (
    <></>
  ) : row.expandCollapseAllButtons ? (
    <div className='collapsable-multiviz-container'>
      <CollapsibleVisualizationRow
        allExpanded={allExpanded}
        fontSize={'26px'}
        groupName={groupName}
        currentViewport={currentViewport}
      >
        {children}
      </CollapsibleVisualizationRow>
    </div>
  ) : (
    <>
      {groupName !== '' ? <h3>{groupName}</h3> : <></>}
      {children}
    </>
  )
}

type VizRowProps = {
  allExpanded: boolean
  filteredDataOverride?: Object[]
  groupName: string
  row: ConfigRow
  rowIndex: number
  inNoDataState: boolean
  setSharedFilter: Function
  updateChildConfig: Function
  apiFilterDropdowns: APIFilterDropdowns
  currentViewport: ViewPort
}

const VisualizationRow: React.FC<VizRowProps> = ({
  allExpanded,
  filteredDataOverride,
  groupName,
  row,
  rowIndex: index,
  inNoDataState,
  setSharedFilter,
  updateChildConfig,
  apiFilterDropdowns,
  currentViewport
}) => {
  const { config, filteredData: dashboardFilteredData, data: rawData } = useContext(DashboardContext)
  const [show, setShow] = React.useState(row.columns.map((col, i) => i === 0))
  const setToggled = (colIndex: number) => {
    setShow(show.map((_, i) => i === colIndex))
  }

  const footnotesConfig = useMemo(() => {
    if (row.footnotesId) {
      const footnoteConfig = getFootnotesVizConfig(row.footnotesId, index, config)
      if (row.multiVizColumn && filteredDataOverride) {
        const vizCategory = filteredDataOverride[0][row.multiVizColumn]
        // the multiViz filtering filtering is applied after the dashboard filters
        const categoryFootnote = footnoteConfig.formattedData.filter(d => d[row.multiVizColumn] === vizCategory)
        footnoteConfig.formattedData = categoryFootnote
      } else {
        footnoteConfig.formattedData = dashboardFilteredData[row.footnotesId]
      }

      return footnoteConfig
    }
    return null
  }, [config, row, rawData, dashboardFilteredData])

  const applyButtonNotClicked = (vizConfig: DashboardFilters): boolean => {
    const dashboardFilters = Object.values(config.visualizations).filter(
      v => v.type === 'dashboardFilters'
    ) as DashboardFilters[]
    const applyFilters = dashboardFilters.filter(v => !v.autoLoad).flatMap(v => v.sharedFilterIndexes)
    if (hasDashboardApplyBehavior(config.visualizations) && vizConfig.autoLoad) {
      return applyFilters.some(index => {
        const { queuedActive, active, subGrouping } = config.dashboard.sharedFilters[index]
        if (!active && !queuedActive) return true
        if (!queuedActive) return false
        // for nested dropdowns
        if (subGrouping) return queuedActive[0] !== active || queuedActive[1] !== subGrouping.active
        // all other dropdowns
        return queuedActive !== active
      })
    }
    return false
  }
  return (
    <div className={`row${row.equalHeight ? ' equal-height' : ''}${row.toggle ? ' toggle' : ''}`} key={`row__${index}`}>
      {row.columns.map((col, colIndex) => {
        if (col.width) {
          if (!col.widget) return <div key={`row__${index}__col__${colIndex}`} className={`col col-${col.width}`}></div>

          const visualizationConfig = getVizConfig(col.widget, index, config, rawData, dashboardFilteredData)
          if (filteredDataOverride) {
            visualizationConfig.data = filteredDataOverride
            if (visualizationConfig.formattedData) {
              visualizationConfig.formattedData = filteredDataOverride
            }
          }

          const setsSharedFilter =
            config.dashboard.sharedFilters &&
            config.dashboard.sharedFilters.filter(sharedFilter => sharedFilter.setBy === col.widget).length > 0
          const setSharedFilterValue = setsSharedFilter
            ? config.dashboard.sharedFilters.filter(sharedFilter => sharedFilter.setBy === col.widget)[0].active
            : undefined
          const tableLink = (
            <a href={`#data-table-${visualizationConfig.dataKey}`} className='margin-left-href'>
              {visualizationConfig.dataKey} (Go to Table)
            </a>
          )

          const hideVisualization =
            inNoDataState &&
            visualizationConfig.filterBehavior !== 'Apply Button' &&
            (visualizationConfig.type !== 'dashboardFilters' || applyButtonNotClicked(visualizationConfig))

          const shouldShow = row.toggle === undefined || (row.toggle && show[colIndex])

          return (
            <div
              key={`vis__${index}__${colIndex}`}
              className={`col-12 col-md-${col.width}${!shouldShow ? ' d-none' : ''}${
                hideVisualization ? ' hide-parent-visualization' : ' mb-4'
              }`}
            >
              {row.toggle && !hideVisualization && (
                <Toggle
                  row={row}
                  visualizations={config.visualizations}
                  active={show.indexOf(true)}
                  setToggled={setToggled}
                />
              )}
              <VisualizationWrapper
                allExpanded={allExpanded}
                currentViewport={currentViewport}
                groupName={groupName}
                hideVisualization={hideVisualization}
                row={row}
              >
                {visualizationConfig.type === 'chart' && (
                  <CdcChart
                    key={col.widget}
                    config={visualizationConfig}
                    dashboardConfig={config}
                    isEditor={false}
                    setConfig={newConfig => {
                      updateChildConfig(col.widget, newConfig)
                    }}
                    setSharedFilter={setsSharedFilter ? setSharedFilter : undefined}
                    isDashboard={true}
                    link={
                      config.table &&
                      config.table.show &&
                      config.datasets &&
                      visualizationConfig.table &&
                      visualizationConfig.table.showDataTableLink
                        ? tableLink
                        : undefined
                    }
                    configUrl={undefined}
                    setEditing={undefined}
                    hostname={undefined}
                    setSharedFilterValue={undefined}
                  />
                )}
                {visualizationConfig.type === 'map' && (
                  <CdcMap
                    key={col.widget}
                    config={visualizationConfig}
                    isEditor={false}
                    setConfig={newConfig => {
                      updateChildConfig(col.widget, newConfig)
                    }}
                    showLoader={false}
                    setSharedFilter={setsSharedFilter ? setSharedFilter : undefined}
                    setSharedFilterValue={setSharedFilterValue}
                    isDashboard={true}
                    link={
                      config.table &&
                      config.table.show &&
                      config.datasets &&
                      visualizationConfig.table &&
                      visualizationConfig.table.showDataTableLink
                        ? tableLink
                        : undefined
                    }
                  />
                )}
                {visualizationConfig.type === 'data-bite' && (
                  <CdcDataBite
                    key={col.widget}
                    config={visualizationConfig}
                    isEditor={false}
                    setConfig={newConfig => {
                      updateChildConfig(col.widget, newConfig)
                    }}
                    isDashboard={true}
                  />
                )}
                {visualizationConfig.type === 'waffle-chart' && (
                  <CdcWaffleChart
                    key={col.widget}
                    config={visualizationConfig}
                    isEditor={false}
                    setConfig={newConfig => {
                      updateChildConfig(col.widget, newConfig)
                    }}
                    isDashboard={true}
                    configUrl={
                      config.table &&
                      config.table.show &&
                      config.datasets &&
                      visualizationConfig.table &&
                      visualizationConfig.table.showDataTableLink
                        ? tableLink
                        : undefined
                    }
                  />
                )}
                {visualizationConfig.type === 'markup-include' && (
                  <CdcMarkupInclude
                    key={col.widget}
                    config={visualizationConfig}
                    configUrl={undefined}
                    isDashboard={true}
                    isEditor={false}
                    setConfig={newConfig => {
                      updateChildConfig(col.widget, newConfig)
                    }}
                  />
                )}
                {visualizationConfig.type === 'filtered-text' && (
                  <CdcFilteredText
                    key={col.widget}
                    config={visualizationConfig}
                    isEditor={false}
                    setConfig={newConfig => {
                      updateChildConfig(col.widget, newConfig)
                    }}
                    isDashboard={true}
                    configUrl={undefined}
                  />
                )}
                {visualizationConfig.type === 'dashboardFilters' && (
                  <DashboardSharedFilters
                    setConfig={newConfig => {
                      updateChildConfig(col.widget, newConfig)
                    }}
                    key={col.widget}
                    visualizationConfig={visualizationConfig as DashboardFilters}
                    apiFilterDropdowns={apiFilterDropdowns}
                    currentViewport={currentViewport}
                  />
                )}
                {visualizationConfig.type === 'table' && (
                  <DataTableStandAlone
                    key={col.widget}
                    updateConfig={newConfig => {
                      updateChildConfig(col.widget, newConfig)
                    }}
                    visualizationKey={col.widget}
                    config={visualizationConfig as TableConfig}
                    viewport={currentViewport}
                  />
                )}
                {visualizationConfig.type === 'footnotes' && (
                  <FootnotesStandAlone
                    key={col.widget}
                    visualizationKey={col.widget}
                    config={visualizationConfig}
                    viewport={currentViewport}
                  />
                )}
              </VisualizationWrapper>
            </div>
          )
        }
        return <React.Fragment key={`vis__${index}__${colIndex}`}></React.Fragment>
      })}
      {row.footnotesId && !inNoDataState ? (
        <FootnotesStandAlone
          isEditor={false}
          visualizationKey={row.footnotesId}
          config={footnotesConfig}
          viewport={currentViewport}
        />
      ) : null}
    </div>
  )
}

export default VisualizationRow
