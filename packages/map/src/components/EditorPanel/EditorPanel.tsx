import React, { useContext, useMemo } from 'react'
import { cloneConfig } from '@cdc/core/helpers/cloneConfig'

// Third Party
import { Accordion } from 'react-accessible-accordion'
import cloneDeep from 'lodash/cloneDeep'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import Panels from './components/Panels'

// Components - Core
import { EditorPanel as BaseEditorPanel } from '@cdc/core/components/EditorPanel/EditorPanel'
import AdvancedEditor from '@cdc/core/components/AdvancedEditor'
import ConfigContext from '../../context.ts'
import ModernStylesAction from '@cdc/core/components/EditorPanel/ModernStylesAction'
import { MapContext } from '../../types/MapContext.js'

import '@cdc/core/components/EditorPanel/editor.scss'
import './EditorPanel.styles.css'
import { Datasets } from '@cdc/core/types/DataSet'
import { getAvailableMapColumns } from '../../helpers/getMissingRequiredMapFields'
import { getConfiguredDotDensitySeries } from '../../helpers/dotDensityConfig'

type MapEditorPanelProps = {
  datasets?: Datasets
}

const EditorPanel: React.FC<MapEditorPanelProps> = ({ datasets }) => {
  const { setParentConfig, isDashboard, setConfig, config } = useContext<MapContext>(ConfigContext)

  // Use the same sparse-row column discovery as required-field validation.
  const sourceRows = config.data?.length ? config.data : datasets?.[config.dataKey]?.data
  const columnsInData = useMemo(() => getAvailableMapColumns(sourceRows ?? []), [sourceRows])

  const numberOfItemsLimit = 8

  // Custom convertStateToConfig for map with map-specific logic
  const customConvertStateToConfig = () => {
    let strippedState = cloneConfig(config) // Deep copy

    // Strip ref
    delete strippedState['']

    if (
      strippedState.columns.geo.name &&
      (strippedState.columns.primary.name || getConfiguredDotDensitySeries(strippedState).length > 0)
    ) {
      delete strippedState.newViz
    }

    // Remove the legend
    let strippedLegend = cloneDeep(config.legend)

    delete strippedLegend.disabledAmt

    strippedState.legend = strippedLegend

    // Remove default data marker if the user started this map from default data
    delete strippedState.defaultData

    // Preserve authored display settings when editing the advanced JSON configuration.
    strippedState.general = cloneDeep(config.general)

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
              <Panels.Type columnNames={columnsInData} />
              <Panels.General />
              <Panels.Columns columnNames={columnsInData} />
              <Panels.DotDensity columnNames={columnsInData} />
              <Panels.Legend columnNames={columnsInData} numberOfItemsLimit={numberOfItemsLimit} />
              <Panels.Filters />
              <Panels.Footnotes datasets={datasets} />
              <Panels.TimePlayback />
              <Panels.DataTable />
              <Panels.Interactivity columnNames={columnsInData} />
              <Panels.Visual columnNames={columnsInData} />
              {['world', 'us'].includes(config.general.geoType) && config.general.type === 'data' && (
                <Panels.BubbleLayers columnNames={columnsInData} numberOfItemsLimit={numberOfItemsLimit} />
              )}
              <Panels.CustomMapLayers />
              {['us', 'us-county'].includes(config.general.geoType) && (
                <Panels.PatternSettings name='Pattern Settings' />
              )}
              {config.general.geoType !== 'us-county' && <Panels.TextAnnotations name='Text Annotations' />}
              <Panels.MarkupVariables />
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
