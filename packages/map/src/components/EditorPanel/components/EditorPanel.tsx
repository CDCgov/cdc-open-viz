import React, { useContext, useMemo } from 'react'
import { cloneConfig } from '@cdc/core/helpers/cloneConfig'

// Third Party
import { Accordion } from 'react-accessible-accordion'
import cloneDeep from 'lodash/cloneDeep'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import Panels from './Panels'

// Components - Core
import { EditorPanel as BaseEditorPanel } from '@cdc/core/components/EditorPanel/EditorPanel'
import AdvancedEditor from '@cdc/core/components/AdvancedEditor'
import PanelMarkup from '@cdc/core/components/EditorPanel/components/PanelMarkup'

import ConfigContext from '../../../context.ts'
import ModernStylesAction from '@cdc/core/components/EditorPanel/ModernStylesAction'
import { MapContext } from '../../../types/MapContext.js'

import '@cdc/core/components/EditorPanel/editor.scss'
import './editorPanel.styles.css'
import { Datasets } from '@cdc/core/types/DataSet'
import BubbleEditorSection from './BubbleEditorSection'
import TimePlaybackEditorSection from './TimePlaybackEditorSection'
import InteractivitySection from './sections/InteractivitySection'
import GeneralSection from './sections/GeneralSection'
import TypeSection from './sections/TypeSection'
import ColumnsSection from './sections/ColumnsSection'
import LegendSection from './sections/LegendSection'
import FiltersSection from './sections/FiltersSection'
import FootnotesSection from './sections/FootnotesSection'
import DataTableSection from './sections/DataTableSection'
import VisualSection from './sections/VisualSection'
import CustomMapLayersSection from './sections/CustomMapLayersSection'

type MapEditorPanelProps = {
  datasets?: Datasets
}

const EditorPanel: React.FC<MapEditorPanelProps> = ({ datasets }) => {
  const { setParentConfig, isDashboard, setConfig, config } = useContext<MapContext>(ConfigContext)

  // Get columns from data with fallback to datasets (for dashboard context)
  const columnsInData = useMemo(() => {
    // First try config.data
    if (config?.data?.[0]) {
      return Object.keys(config.data[0])
    }

    // Fallback to datasets using config.dataKey (for dashboard visualizations)
    if (datasets && config?.dataKey) {
      const assignedDataset = datasets[config.dataKey]
      if (assignedDataset?.data?.[0]) {
        return Object.keys(assignedDataset.data[0])
      }
    }

    return []
  }, [
    config?.data?.length > 0 ? JSON.stringify(Object.keys(config.data[0])) : null,
    datasets?.[config?.dataKey as string]?.data?.length,
    config?.dataKey
  ])

  const numberOfItemsLimit = 8

  // Custom convertStateToConfig for map with map-specific logic
  const customConvertStateToConfig = () => {
    let strippedState = cloneConfig(config) // Deep copy

    // Strip ref
    delete strippedState['']

    if (strippedState.columns.geo.name && strippedState.columns.primary.name) {
      delete strippedState.newViz
    }

    // Remove the legend
    let strippedLegend = cloneDeep(config.legend)

    delete strippedLegend.disabledAmt

    strippedState.legend = strippedLegend

    // Remove default data marker if the user started this map from default data
    delete strippedState.defaultData

    // Remove tooltips if they're active in the editor
    strippedState.general = cloneDeep(config.general)

    strippedState.general.showSidebar = 'hidden'

    return strippedState
  }

  return (
    <React.Fragment>
      <BaseEditorPanel
        config={config}
        updateConfig={setConfig as (config: any) => void}
        loading={false}
        setParentConfig={setParentConfig as ((config: any) => void) | undefined}
        isDashboard={isDashboard}
        title='Configure Map'
      >
        {() => (
          <>
            <ReactTooltip multiline={true} />
            <Accordion allowZeroExpanded={true}>
              <TypeSection columnNames={columnsInData} />
              <GeneralSection />
              <ColumnsSection columnNames={columnsInData} />
              <LegendSection columnNames={columnsInData} numberOfItemsLimit={numberOfItemsLimit} />
              <FiltersSection />
              <FootnotesSection datasets={datasets} />
              <TimePlaybackEditorSection />
              <DataTableSection />
              <InteractivitySection />
              <VisualSection columnNames={columnsInData} />
              {['world', 'us'].includes(config.general.geoType) && config.general.type === 'data' && (
                <BubbleEditorSection columnNames={columnsInData} numberOfItemsLimit={numberOfItemsLimit} />
              )}
              <CustomMapLayersSection />
              {['us', 'us-county'].includes(config.general.geoType) && (
                <Panels.PatternSettings name='Pattern Settings' />
              )}
              {config.general.geoType !== 'us-county' && <Panels.Annotate name='Text Annotations' />}
              <PanelMarkup
                name='Markup Variables'
                markupVariables={config.markupVariables || []}
                data={config.data || []}
                enableMarkupVariables={config.enableMarkupVariables || false}
                onMarkupVariablesChange={variables => setConfig({ ...config, markupVariables: variables })}
                onToggleEnable={enabled => setConfig({ ...config, enableMarkupVariables: enabled })}
                dataMetadata={config.dataMetadata}
              />
              <Panels.SmallMultiples name='Small Multiples' />
            </Accordion>
            {!isDashboard && <ModernStylesAction />}
            <AdvancedEditor loadConfig={setConfig} config={config} convertStateToConfig={customConvertStateToConfig} />
          </>
        )}
      </BaseEditorPanel>
    </React.Fragment>
  )
}

export default EditorPanel
