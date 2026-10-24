import React, { useContext, useEffect, useMemo, useRef } from 'react'
import { cloneConfig } from '@cdc/core/helpers/cloneConfig'

// Third Party
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel
} from 'react-accessible-accordion'
import cloneDeep from 'lodash/cloneDeep'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import Panels from './Panels'

// Components - Core
import { EditorPanel as BaseEditorPanel } from '@cdc/core/components/EditorPanel/EditorPanel'
import AdvancedEditor from '@cdc/core/components/AdvancedEditor'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import GroupedList from '@cdc/core/components/EditorPanel/GroupedList'
import PanelMarkup from '@cdc/core/components/EditorPanel/components/PanelMarkup'

import useMapLayers from '../../../hooks/useMapLayers.tsx'
import ConfigContext from '../../../context.ts'
import ModernStylesAction from '@cdc/core/components/EditorPanel/ModernStylesAction'
import { MapContext } from '../../../types/MapContext.js'
import { updateFieldFactory } from '@cdc/core/helpers/updateFieldFactory'
import Button from '@cdc/core/components/elements/Button'

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

type MapEditorPanelProps = {
  datasets?: Datasets
}

const EditorPanel: React.FC<MapEditorPanelProps> = ({ datasets }) => {
  const { setParentConfig, isDashboard, isEditor, runtimeFilters, setConfig, config, tooltipId } =
    useContext<MapContext>(ConfigContext)

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

  const {
    MapLayerHandlers: { handleMapLayer, handleAddLayer, handleRemoveLayer }
  } = useMapLayers(config, setConfig, false, tooltipId)

  const convertStateToConfig = () => {
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

    // Add columns property back to data if it's there
    if (config.columns) {
      strippedState.columns = config.columns
    }

    return strippedState
  }

  const updateField = updateFieldFactory(config, setConfig)

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
        {({ displayPanel, convertStateToConfig }) => {
          // Use custom convertStateToConfig for map-specific logic
          const mapConvertStateToConfig = customConvertStateToConfig

          return (
            <>
              <ReactTooltip multiline={true} />
              <Accordion allowZeroExpanded={true}>
                <TypeSection columnNames={columnsInData} />
                <GeneralSection />
                <ColumnsSection columnNames={columnsInData} />
                <LegendSection columnNames={columnsInData} numberOfItemsLimit={numberOfItemsLimit} />
                <FiltersSection />
                <FootnotesSection datasets={datasets} />
                <TimePlaybackEditorSection config={config} runtimeFilters={runtimeFilters} updateField={updateField} />
                <DataTableSection />
                <InteractivitySection />
                <VisualSection columnNames={columnsInData} />
                {['world', 'us'].includes(config.general.geoType) && config.general.type === 'data' && (
                  <BubbleEditorSection columnNames={columnsInData} numberOfItemsLimit={numberOfItemsLimit} />
                )}
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>Custom Map Layers</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    {config.map.layers.length === 0 && <p>There are currently no layers.</p>}
                    <GroupedList
                      items={config.map.layers}
                      label='Custom Map Layers'
                      droppableId='map-custom-layers'
                      draggable={false}
                      renderItem={(layer, index) => (
                        <Accordion allowZeroExpanded key={`map-layer-${index}`}>
                          <AccordionItem className='series-item series-item--chart map-layers-list'>
                            <AccordionItemHeading className='series-item__title map-layers-list--title'>
                              <AccordionItemButton className='accordion__button'>
                                {`Layer ${index + 1}: ${layer.name}`}
                              </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                              <div className='series-item__panel-actions'>
                                <Button
                                  type='button'
                                  variant='danger'
                                  size='sm'
                                  className='grouped-list__remove'
                                  onClick={e => handleRemoveLayer(e, index)}
                                >
                                  Remove Layer
                                </Button>
                              </div>
                              <div className='map-layers-panel'>
                                <label htmlFor='layerName'>Layer Name:</label>
                                <input
                                  type='text'
                                  name='layerName'
                                  value={layer.name}
                                  onChange={e => handleMapLayer(e, index, 'name')}
                                />
                                <label htmlFor='layerFilename'>File:</label>
                                <input
                                  type='text'
                                  name='layerFilename'
                                  value={layer.url}
                                  onChange={e => handleMapLayer(e, index, 'url')}
                                />
                                <label htmlFor='layerNamespace'>TOPOJSON Namespace:</label>
                                <input
                                  type='text'
                                  name='layerNamespace'
                                  value={layer.namespace}
                                  onChange={e => handleMapLayer(e, index, 'namespace')}
                                />
                                <label htmlFor='layerFill'>Fill Color:</label>
                                <input
                                  type='text'
                                  name='layerFill'
                                  value={layer.fill}
                                  onChange={e => handleMapLayer(e, index, 'fill')}
                                />
                                <label htmlFor='layerFill'>Fill Opacity (%):</label>
                                <input
                                  type='number'
                                  min={0}
                                  max={100}
                                  name='layerFill'
                                  value={layer.fillOpacity ? layer.fillOpacity * 100 : ''}
                                  onChange={e => handleMapLayer(e, index, 'fillOpacity')}
                                />
                                <label htmlFor='layerStroke'>Stroke Color:</label>
                                <input
                                  type='text'
                                  name='layerStroke'
                                  value={layer.stroke}
                                  onChange={e => handleMapLayer(e, index, 'stroke')}
                                />
                                <label htmlFor='layerStroke'>Stroke Width:</label>
                                <input
                                  type='number'
                                  min={0}
                                  max={5}
                                  name='layerStrokeWidth'
                                  value={layer.strokeWidth}
                                  onChange={e => handleMapLayer(e, index, 'strokeWidth')}
                                />
                                <label htmlFor='layerTooltip'>Tooltip:</label>
                                <textarea
                                  name='layerTooltip'
                                  value={layer.tooltip}
                                  onChange={e => handleMapLayer(e, index, 'tooltip')}
                                ></textarea>
                              </div>
                            </AccordionItemPanel>
                          </AccordionItem>
                        </Accordion>
                      )}
                    />
                    <Button type='button' variant='editor-primary' onClick={handleAddLayer}>
                      Add Map Layer
                    </Button>
                    <p className='layer-purpose-details'>
                      Context should be added to your visualization or associated page to describe the significance of
                      layers that are added to maps.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
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
              <AdvancedEditor loadConfig={setConfig} config={config} convertStateToConfig={mapConvertStateToConfig} />
            </>
          )
        }}
      </BaseEditorPanel>
    </React.Fragment>
  )
}

export default EditorPanel
