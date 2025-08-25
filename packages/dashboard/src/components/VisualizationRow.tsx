import DataTableStandAlone from '@cdc/core/components/DataTable/DataTableStandAlone'
import React, { useContext, useEffect, useMemo, useState } from 'react'
import Toggle from './Toggle'
import _ from 'lodash'
import { ConfigRow } from '../types/ConfigRow'
import CdcDataBite from '@cdc/data-bite/src/CdcDataBite'
import CdcMap from '@cdc/map/src/CdcMapComponent'
import CdcWaffleChart from '@cdc/waffle-chart/src/CdcWaffleChart'
import CdcMarkupInclude from '@cdc/markup-include/src/CdcMarkupInclude'
import CdcFilteredText from '@cdc/filtered-text/src/CdcFilteredText'
import DashboardSharedFilters, { APIFilterDropdowns } from './DashboardFilters'
import { DashboardContext } from '../DashboardContext'
import { ViewPort } from '@cdc/core/types/ViewPort'
import { getVizConfig } from '../helpers/getVizConfig'
import { TableConfig } from '@cdc/core/components/DataTable/types/TableConfig'
import CollapsibleVisualizationRow from './CollapsibleVisualizationRow'
import { DashboardFilters } from '../types/DashboardFilters'
import { hasDashboardApplyBehavior } from '../helpers/hasDashboardApplyBehavior'
import CdcChart from '@cdc/chart/src/CdcChartComponent'
import ExpandCollapseButtons from './ExpandCollapseButtons'
import { ChartConfig } from '@cdc/chart/src/types/ChartConfig'
import { publishAnalyticsEvent } from '@cdc/core/helpers/metrics/helpers'

type VisualizationWrapperProps = {
  allExpanded: boolean
  children: React.ReactNode
  currentViewport: ViewPort
  groupName: string
  className: string
  collapsible?: boolean
}

const VisualizationWrapper: React.FC<VisualizationWrapperProps> = ({
  allExpanded,
  currentViewport,
  groupName,
  collapsible,
  className,
  children
}) => {
  return (
    <div className={className}>
      {collapsible ? (
        <CollapsibleVisualizationRow allExpanded={allExpanded} groupName={groupName} currentViewport={currentViewport}>
          {children}
        </CollapsibleVisualizationRow>
      ) : (
        <>
          {groupName !== '' ? <h3>{groupName}</h3> : <></>}
          {children}
        </>
      )}
    </div>
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
  isLastRow: boolean
  setAllExpanded?: (expanded: boolean) => void
  interactionLabel: string
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
  currentViewport,
  isLastRow,
  setAllExpanded,
  interactionLabel = ''
}) => {
  const { config, filteredData: dashboardFilteredData, data: rawData, apiLoading } = useContext(DashboardContext)
  const [toggledRow, setToggled] = React.useState<number>(0)

  useEffect(() => {
    if (row.toggle) setToggled(0)
  }, [config.activeDashboard, index])

  const show = useMemo(() => {
    if (row.toggle) {
      return row.columns.map((col, i) => i === toggledRow)
    } else {
      return row.columns.map((col, i) => true)
    }
  }, [config.activeDashboard, toggledRow])

  const _data = dashboardFilteredData[index] || row.formattedData || []
  const dataGroups =
    row.multiVizColumn &&
    _data.reduce((acc, dataRow) => {
      const groupKey = dataRow[row.multiVizColumn]
      if (!acc[groupKey]) acc[groupKey] = []
      acc[groupKey].push(dataRow)
      return acc
    }, {})

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

  if (dataGroups) {
    return (
      <React.Fragment key={`row__${index}`}>
        {/* Expand/Collapse All */}
        {!inNoDataState && row.expandCollapseAllButtons === true && (
          <ExpandCollapseButtons setAllExpanded={setAllExpanded} />
        )}
        {Object.keys(dataGroups).map(groupName => {
          const dataValue = dataGroups[groupName]
          const _row = _.cloneDeep(row) // clone the row to avoid mutating the original row
          const originalMultiVizColumn = _row.multiVizColumn // store original value before clearing
          _row.multiVizColumn = undefined // reset the multiVizColumn to avoid passing it to the child components
          _row.originalMultiVizColumn = originalMultiVizColumn // store for footnote filtering
          return (
            <VisualizationRow
              key={`row__${index}__${groupName}`}
              allExpanded={allExpanded}
              filteredDataOverride={dataValue}
              groupName={groupName}
              row={_row}
              rowIndex={index}
              setSharedFilter={setSharedFilter}
              updateChildConfig={updateChildConfig}
              apiFilterDropdowns={apiFilterDropdowns}
              currentViewport={currentViewport}
              inNoDataState={inNoDataState}
              isLastRow={isLastRow}
              interactionLabel={interactionLabel}
            />
          )
        })}
      </React.Fragment>
    )
  }

  return (
    <div className={`row${row.equalHeight ? ' equal-height' : ''}${row.toggle ? ' toggle' : ''}`} key={`row__${index}`}>
      {row.toggle && !inNoDataState && (
        <Toggle row={row} visualizations={config.visualizations} active={toggledRow} setToggled={setToggled} />
      )}
      {row.columns.map((col, colIndex) => {
        if (col.width) {
          if (!col.widget) return <div key={`row__${index}__col__${colIndex}`} className={`col col-${col.width}`}></div>

          const visualizationConfig = getVizConfig(
            col.widget,
            index,
            config,
            rawData,
            dashboardFilteredData,
            filteredDataOverride,
            row.multiVizColumn || row.originalMultiVizColumn
          )

          const { type, sharedFilterIndexes, filterBehavior, table, dataKey } = visualizationConfig

          const setsSharedFilter =
            config.dashboard.sharedFilters &&
            config.dashboard.sharedFilters.filter(sharedFilter => sharedFilter.setBy === col.widget).length > 0
          const setSharedFilterValue = setsSharedFilter
            ? config.dashboard.sharedFilters.filter(sharedFilter => sharedFilter.setBy === col.widget)[0].active
            : undefined
          const tableLink = (
            <a
              href={`#data-table-${dataKey}`}
              className='margin-left-href'
              onClick={() => {
                publishAnalyticsEvent(
                  `link_to_data_table_click`,
                  'click',
                  `${interactionLabel}|#data-table-${dataKey}`,
                  visualizationConfig.type
                )
              }}
            >
              {dataKey} (Go to Table)
            </a>
          )

          const hideVisualization =
            (inNoDataState || apiLoading) &&
            filterBehavior !== 'Apply Button' &&
            (type !== 'dashboardFilters' || applyButtonNotClicked(visualizationConfig))

          const shouldShow = row.toggle === undefined || (row.toggle && show[colIndex])

          const hiddenDashboardFilters =
            type === 'dashboardFilters' &&
            sharedFilterIndexes &&
            sharedFilterIndexes.filter(idx => config.dashboard.sharedFilters?.[idx]?.showDropdown === false).length ===
              sharedFilterIndexes.length
          const hasMarginBottom = !isLastRow && !hiddenDashboardFilters

          const vizWrapperClass = `col-12 col-md-${col.width}${!shouldShow ? ' d-none' : ''}${
            hideVisualization ? ' hide-parent-visualization' : hasMarginBottom ? ' mb-4' : ''
          }`
          const link =
            config.table && config.table.show && config.datasets && table && table.showDataTableLink
              ? tableLink
              : undefined
          return hideVisualization ? null : (
            <VisualizationWrapper
              key={`vis__${index}__${colIndex}`}
              className={vizWrapperClass}
              allExpanded={allExpanded}
              currentViewport={currentViewport}
              groupName={groupName}
              collapsible={row.expandCollapseAllButtons}
            >
              {type === 'chart' && (
                <CdcChart
                  key={col.widget}
                  config={visualizationConfig as ChartConfig}
                  dashboardConfig={config}
                  datasets={config.datasets}
                  setConfig={newConfig => {
                    updateChildConfig(col.widget, newConfig)
                  }}
                  setSharedFilter={setsSharedFilter ? setSharedFilter : undefined}
                  isDashboard={true}
                  link={link}
                  interactionLabel={interactionLabel}
                />
              )}
              {type === 'map' && (
                <CdcMap
                  key={col.widget}
                  config={visualizationConfig}
                  setConfig={newConfig => {
                    updateChildConfig(col.widget, newConfig)
                  }}
                  showLoader={false}
                  setSharedFilter={setsSharedFilter ? setSharedFilter : undefined}
                  setSharedFilterValue={setSharedFilterValue}
                  isDashboard={true}
                  link={link}
                  dataset={config.datasets}
                  interactionLabel={interactionLabel}
                />
              )}
              {type === 'data-bite' && (
                <CdcDataBite
                  key={col.widget}
                  config={visualizationConfig}
                  setConfig={newConfig => {
                    updateChildConfig(col.widget, newConfig)
                  }}
                  isDashboard={true}
                />
              )}
              {type === 'waffle-chart' && (
                <CdcWaffleChart
                  key={col.widget}
                  config={visualizationConfig}
                  setConfig={newConfig => {
                    updateChildConfig(col.widget, newConfig)
                  }}
                  isDashboard={true}
                  interactionLabel={link}
                />
              )}
              {type === 'markup-include' && (
                <CdcMarkupInclude
                  key={col.widget}
                  config={visualizationConfig}
                  isDashboard={true}
                  setConfig={newConfig => {
                    updateChildConfig(col.widget, newConfig)
                  }}
                />
              )}
              {type === 'filtered-text' && (
                <CdcFilteredText
                  key={col.widget}
                  config={visualizationConfig}
                  setConfig={newConfig => {
                    updateChildConfig(col.widget, newConfig)
                  }}
                  isDashboard={true}
                />
              )}
              {type === 'dashboardFilters' && (
                <DashboardSharedFilters
                  setConfig={newConfig => {
                    updateChildConfig(col.widget, newConfig)
                  }}
                  key={col.widget}
                  visualizationConfig={visualizationConfig as DashboardFilters}
                  apiFilterDropdowns={apiFilterDropdowns}
                  currentViewport={currentViewport}
                  interactionLabel={interactionLabel}
                />
              )}
              {type === 'table' && (
                <DataTableStandAlone
                  key={col.widget}
                  updateConfig={newConfig => {
                    updateChildConfig(col.widget, newConfig)
                  }}
                  visualizationKey={col.widget}
                  config={visualizationConfig as TableConfig}
                  viewport={currentViewport}
                  interactionLabel={interactionLabel}
                />
              )}
            </VisualizationWrapper>
          )
        }
      })}
    </div>
  )
}

export default VisualizationRow
