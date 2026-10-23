import React, { useContext, useEffect, useState, useMemo, useRef } from 'react'
import { filterColorPalettes } from '@cdc/core/helpers/filterColorPalettes'
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

// Data
import { mapColorPalettes as colorPalettes } from '@cdc/core/data/colorPalettes'

// Components - Core
import { EditorPanel as BaseEditorPanel } from '@cdc/core/components/EditorPanel/EditorPanel'
import AdvancedEditor from '@cdc/core/components/AdvancedEditor'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import Icon from '@cdc/core/components/ui/Icon'
import GroupedList from '@cdc/core/components/EditorPanel/GroupedList'
import InputToggle from '@cdc/core/components/inputs/InputToggle'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import PanelMarkup from '@cdc/core/components/EditorPanel/components/PanelMarkup'

import useMapLayers from '../../../hooks/useMapLayers.tsx'
import ConfigContext from '../../../context.ts'
import ModernStylesAction from '@cdc/core/components/EditorPanel/ModernStylesAction'
import { MapContext } from '../../../types/MapContext.js'
import { updateFieldFactory } from '@cdc/core/helpers/updateFieldFactory'
import { CheckBox, Select, TextField } from '@cdc/core/components/EditorPanel/Inputs'
import Button from '@cdc/core/components/elements/Button'
import StyleTreatmentSection from '@cdc/core/components/EditorPanel/sections/StyleTreatmentSection'
import { HeaderThemeSelector } from '@cdc/core/components/HeaderThemeSelector'

import '@cdc/core/components/EditorPanel/editor.scss'
import './editorPanel.styles.css'
import { Datasets } from '@cdc/core/types/DataSet'
import { paletteMigrationMap } from '@cdc/core/helpers/palettes/migratePaletteName'
import { isV1Palette, getCurrentPaletteName, migratePaletteWithMap } from '@cdc/core/helpers/palettes/utils'
import {
  ENABLE_CHART_MAP_TP5_TREATMENT_SELECTION,
  ENABLE_MAP_DATA_BITE_VISUAL_SETTINGS,
  USE_V2_MIGRATION
} from '@cdc/core/helpers/constants'
import { isCoveDeveloperMode } from '@cdc/core/helpers/queryStringUtils'
import { PaletteSelector, DeveloperPaletteRollback } from '@cdc/core/components/PaletteSelector'
import PaletteConversionModal, { V21_PALETTE_CONVERSION_MESSAGE } from '@cdc/core/components/PaletteConversionModal'
import { CustomColorsEditor } from '@cdc/core/components/CustomColorsEditor'
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

type MapEditorPanelProps = {
  datasets?: Datasets
}

const EditorPanel: React.FC<MapEditorPanelProps> = ({ datasets }) => {
  const { setParentConfig, isDashboard, isEditor, runtimeFilters, runtimeLegend, setConfig, config, tooltipId } =
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

  const [showConversionModal, setShowConversionModal] = useState(false)
  const [pendingPaletteSelection, setPendingPaletteSelection] = useState<{
    palette: string
    action: () => void
  } | null>(null)

  const {
    MapLayerHandlers: { handleMapLayer, handleAddLayer, handleRemoveLayer }
  } = useMapLayers(config, setConfig, false, tooltipId)

  const getCityStyleOptions = target => {
    switch (target) {
      case 'value': {
        const values = ['Circle', 'Square', 'Triangle', 'Diamond', 'Star', 'Pin']
        const filteredValues = values.filter(
          val => String(config.visual.cityStyle).toLocaleLowerCase() !== val.toLocaleLowerCase()
        )

        return (
          <>
            <option value='' key={'Select Option'}>
              - Select Option -
            </option>
            {filteredValues.map((val, i) => {
              return (
                <option key={i} value={val}>
                  {val}
                </option>
              )
            })}
          </>
        )
      }
    }
  }

  const editCityStyles = (target, index, fieldName, value) => {
    switch (target) {
      case 'add': {
        const additionalCityStyles = config.visual.additionalCityStyles ? [...config.visual.additionalCityStyles] : []
        additionalCityStyles.push({ label: '', column: '', value: '', shape: '' })
        setConfig({
          ...config,
          visual: {
            ...config.visual,
            additionalCityStyles: additionalCityStyles
          }
        })
        break
      }
      case 'remove': {
        let additionalCityStyles = []
        if (config.visual.additionalCityStyles) {
          additionalCityStyles = [...config.visual.additionalCityStyles]
        }

        additionalCityStyles.splice(index, 1)
        setConfig({
          ...config,
          visual: {
            ...config.visual,
            additionalCityStyles: additionalCityStyles
          }
        })
        break
      }
      case 'update': {
        let additionalCityStyles = []
        additionalCityStyles = [...config.visual.additionalCityStyles]
        additionalCityStyles[index][fieldName] = value
        setConfig({
          ...config,
          visual: {
            ...config.visual,
            additionalCityStyles: additionalCityStyles
          }
        })
      }
    }
  }

  const handleEditorChanges = async (property, value) => {
    switch (property) {
      case 'geoLabelOverride':
        setConfig({
          ...config,
          general: {
            ...config.general,
            geoLabelOverride: value
          }
        })
        break
      case 'showTitle':
        setConfig({
          ...config,
          general: {
            ...config.general,
            showTitle: value
          }
        })
        break
      case 'handleCityStyle':
        setConfig({
          ...config,
          visual: {
            ...config.visual,
            cityStyle: value
          }
        })
        break
      case 'geoBorderColor':
        setConfig({
          ...config,
          general: {
            ...config.general,
            geoBorderColor: value
          }
        })
        break
      case 'headerColor':
        setConfig({
          ...config,
          general: {
            ...config.general,
            headerColor: value
          }
        })
        break
      case 'navigateColumn':
        setConfig({
          ...config,
          columns: {
            ...config.columns,
            navigate: {
              ...config.columns.navigate,
              name: value
            }
          }
        })
        break
      case 'filterBehavior':
        setConfig({
          ...config,
          filterBehavior: value
        })
        break
      default:
        console.warn(`COVE: Did not recognize editor property.`) // eslint-disable-line
        break
    }
  }

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

  const isReversed = config.general.palette.isReversed

  const { sequential, nonSequential, accessibleColors } = useMemo(
    () => filterColorPalettes({ config, isReversed, colorPalettes }),
    [isReversed, colorPalettes, config.general.palette.version]
  )
  // Helper function to handle palette selection with conversion prompt
  const handlePaletteSelection = (palette: string) => {
    const isV1PaletteConfig = isV1Palette(config)
    const shouldUpgradePalette = USE_V2_MIGRATION && (isV1PaletteConfig || config.general?.palette?.version === '2.0')

    const executeSelection = () => {
      const _newConfig = cloneDeep(config)

      // If v2 migration is disabled, use the original palette name and keep v1 version
      if (!USE_V2_MIGRATION) {
        _newConfig.general.palette.name = palette
        _newConfig.general.palette.version = '1.0'
      } else {
        // V2 migration logic
        _newConfig.general.palette.name = palette
          ? migratePaletteWithMap(palette, paletteMigrationMap, false)
          : undefined
        if (shouldUpgradePalette) {
          _newConfig.general.palette.version = '2.1'
        }
      }
      setConfig(_newConfig)
    }

    if (shouldUpgradePalette) {
      setPendingPaletteSelection({ palette, action: executeSelection })
      setShowConversionModal(true)
    } else {
      executeSelection()
    }
  }

  // Modal handlers
  const handleConversionConfirm = () => {
    if (pendingPaletteSelection) {
      pendingPaletteSelection.action()
    }
    setShowConversionModal(false)
    setPendingPaletteSelection(null)
  }

  const handleConversionCancel = () => {
    setShowConversionModal(false)
    setPendingPaletteSelection(null)
  }

  const handleReturnToV1 = () => {
    if (pendingPaletteSelection) {
      const _newConfig = cloneConfig(config)
      _newConfig.general.palette.name = pendingPaletteSelection.palette
      _newConfig.general.palette.version = config.general?.palette?.version || '1.0'
      setConfig(_newConfig)
    }
    setShowConversionModal(false)
    setPendingPaletteSelection(null)
  }

  // Helper function to determine if a palette should be marked as selected
  const getPaletteClassName = (palette: string) => {
    const currentPaletteName = config.general.palette.name || ''

    // Direct comparison since the UI filters palettes by version
    // When v1 is selected, UI shows v1 palettes; when v2 is selected, UI shows v2 palettes
    return currentPaletteName === palette ? 'selected' : ''
  }

  const columnsOptions = [
    <option value='' key={'Select Option'}>
      - Select Option -
    </option>
  ]

  columnsInData.map(colName => {
    return columnsOptions.push(
      <option value={colName} key={colName}>
        {colName}
      </option>
    )
  })

  const updateField = updateFieldFactory(config, setConfig)

  const handleStyleTreatmentChange = (value: string) => {
    const useTp5Treatment = value === 'tp5'

    setConfig({
      ...config,
      general: {
        ...config.general,
        titleStyle: useTp5Treatment ? 'small' : 'legacy'
      },
      visual: {
        ...config.visual,
        tp5Treatment: useTp5Treatment,
        border: useTp5Treatment ? false : config.visual?.border,
        borderColorTheme: useTp5Treatment ? false : config.visual?.borderColorTheme,
        accent: useTp5Treatment ? false : config.visual?.accent
      }
    })
  }

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
                <AccordionItem>
                  {' '}
                  {/* Type */}
                  <AccordionItemHeading>
                    <AccordionItemButton>Type</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <TypeSection columnNames={columnsInData} />
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  {' '}
                  {/* General */}
                  <AccordionItemHeading>
                    <AccordionItemButton>General</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <GeneralSection />
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  {' '}
                  {/* Columns */}
                  <AccordionItemHeading>
                    <AccordionItemButton data-required-field-section='map-columns'>Columns</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <ColumnsSection columnNames={columnsInData} />
                  </AccordionItemPanel>
                </AccordionItem>{' '}
                {/* Columns */}
                <LegendSection columnNames={columnsInData} numberOfItemsLimit={numberOfItemsLimit} />
                <FiltersSection />
                <FootnotesSection datasets={datasets} />
                <TimePlaybackEditorSection config={config} runtimeFilters={runtimeFilters} updateField={updateField} />
                <DataTableSection />
                <InteractivitySection />
                <AccordionItem>
                  {' '}
                  {/* Visual */}
                  <AccordionItemHeading>
                    <AccordionItemButton>Visual</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <HeaderThemeSelector
                      selectedTheme={config.general.headerColor}
                      onThemeSelect={palette => handleEditorChanges('headerColor', palette)}
                      label='Header Theme'
                    />
                    {ENABLE_MAP_DATA_BITE_VISUAL_SETTINGS && (
                      <StyleTreatmentSection
                        styleTreatment={
                          config.general.titleStyle === 'legacy' && !config.visual?.tp5Treatment ? 'legacy' : 'tp5'
                        }
                        onStyleTreatmentChange={handleStyleTreatmentChange}
                        showStyleTreatment={ENABLE_CHART_MAP_TP5_TREATMENT_SELECTION}
                        border={config.visual?.border}
                        borderColorTheme={config.visual?.borderColorTheme}
                        accent={config.visual?.accent}
                        updateField={updateField}
                      />
                    )}
                    <CheckBox
                      value={config.general.showTitle || false}
                      section='general'
                      subsection={null}
                      fieldName='showTitle'
                      label='Show Title'
                      updateField={updateField}
                      onChange={event => {
                        handleEditorChanges('showTitle', event.target.checked)
                      }}
                    />

                    {'navigation' === config.general.type && (
                      <CheckBox
                        value={config.general.fullBorder || false}
                        section='general'
                        subsection={null}
                        fieldName='fullBorder'
                        label='Add border around map'
                        updateField={updateField}
                      />
                    )}
                    <Select
                      label='Geo Border Color'
                      value={config.general.geoBorderColor || ''}
                      options={[
                        { value: 'darkGray', label: 'Dark Gray (Default)' },
                        { value: 'sameAsBackground', label: 'White' }
                      ]}
                      onChange={event => {
                        handleEditorChanges('geoBorderColor', event.target.value)
                      }}
                    />
                    <label>
                      <span className='edit-label'>Map Color Palette</span>
                    </label>
                    <div className='mb-2'>
                      <small className='text-muted'>
                        Review color contrasts{' '}
                        <a
                          href='https://webaim.org/resources/contrastchecker/'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          here
                        </a>
                      </small>
                    </div>
                    <DeveloperPaletteRollback config={config} updateConfig={setConfig} />
                    <InputToggle
                      type='3d'
                      section='general'
                      subsection='palette'
                      fieldName='isReversed'
                      size='small'
                      label='Use selected palette in reverse order'
                      onClick={() => {
                        const _state = cloneConfig(config)
                        const currentPaletteName = config.general.palette?.name || ''
                        _state.general.palette.isReversed = !_state.general.palette.isReversed
                        let paletteName = ''
                        if (_state.general.palette.isReversed && !currentPaletteName.endsWith('reverse')) {
                          paletteName = currentPaletteName + 'reverse'
                        }
                        if (!_state.general.palette.isReversed && currentPaletteName.endsWith('reverse')) {
                          paletteName = currentPaletteName.slice(0, -7)
                        }
                        if (paletteName) {
                          _state.general.palette.name = paletteName
                        }
                        setConfig(_state)
                      }}
                      value={config.general.palette.isReversed}
                    />
                    <span>Sequential</span>
                    <PaletteSelector
                      palettes={sequential}
                      colorPalettes={colorPalettes}
                      config={config}
                      onPaletteSelect={handlePaletteSelection}
                      selectedPalette={getCurrentPaletteName(config)}
                      colorIndices={[2, 3, 5]}
                      className='color-palette'
                      element='button'
                      getItemClassName={getPaletteClassName}
                    />
                    <span>Non-Sequential</span>
                    <PaletteSelector
                      palettes={nonSequential}
                      colorPalettes={colorPalettes}
                      config={config}
                      onPaletteSelect={handlePaletteSelection}
                      selectedPalette={getCurrentPaletteName(config)}
                      colorIndices={[2, 3, 5]}
                      className='color-palette'
                      element='button'
                      getItemClassName={getPaletteClassName}
                      minColorsForFilter={(_, paletteAccessor, config) => {
                        if (paletteAccessor.length <= 8 && config.general.geoType === 'us-region') {
                          return false
                        }
                        return true
                      }}
                    />
                    <span>Colorblind Safe</span>
                    <PaletteSelector
                      palettes={accessibleColors}
                      colorPalettes={colorPalettes}
                      config={config}
                      onPaletteSelect={handlePaletteSelection}
                      selectedPalette={getCurrentPaletteName(config)}
                      colorIndices={[2, 3, 5]}
                      className='color-palette'
                      element='button'
                      getItemClassName={getPaletteClassName}
                      minColorsForFilter={(_, paletteAccessor, config) => {
                        if (paletteAccessor.length <= 8 && config.general.geoType === 'us-region') {
                          return false
                        }
                        return true
                      }}
                    />

                    {isCoveDeveloperMode() && (
                      <>
                        <div className='mt-3'>
                          <label className='checkbox'>
                            <input
                              type='checkbox'
                              checked={!!config.general.palette.customColorsOrdered}
                              onChange={e => {
                                const _state = cloneConfig(config)
                                if (e.target.checked) {
                                  // Extract actual colors from runtime legend if available
                                  if (runtimeLegend?.items && runtimeLegend.items.length > 0) {
                                    const extractedColors = []
                                    for (const item of runtimeLegend.items) {
                                      // Skip special classes (like "No Data")
                                      if (item.special) continue
                                      // Add the color if it exists and hasn't been added yet
                                      if (item.color && !extractedColors.includes(item.color)) {
                                        extractedColors.push(item.color)
                                      }
                                    }
                                    _state.general.palette.customColorsOrdered =
                                      extractedColors.length > 0
                                        ? extractedColors
                                        : ['#3366cc', '#5588dd', '#77aaee', '#99ccff']
                                  } else {
                                    // Fallback to default colors if runtime legend not available
                                    _state.general.palette.customColorsOrdered = [
                                      '#3366cc',
                                      '#5588dd',
                                      '#77aaee',
                                      '#99ccff'
                                    ]
                                  }
                                } else {
                                  // Remove custom colors and revert to default palette
                                  delete _state.general.palette.customColorsOrdered
                                  delete _state.general.palette.customColors
                                  // Set default palette if none exists
                                  if (!_state.general.palette.name) {
                                    _state.general.palette.name = 'sequential_blue_green'
                                    _state.general.palette.version = '2.1'
                                  }
                                }
                                setConfig(_state)
                              }}
                            />
                            Use Custom Colors
                          </label>
                        </div>

                        {config.general.palette.customColorsOrdered && (
                          <div className='mt-2'>
                            <CustomColorsEditor
                              colors={config.general.palette.customColorsOrdered}
                              onChange={newColors => {
                                const _state = cloneConfig(config)
                                _state.general.palette.customColorsOrdered = newColors
                                setConfig(_state)
                              }}
                              label='Custom Color Order'
                              minColors={1}
                            />
                          </div>
                        )}
                      </>
                    )}

                    <label>
                      Geocode Settings
                      <TextField
                        type='number'
                        value={config.visual.geoCodeCircleSize}
                        section='visual'
                        max='10'
                        fieldName='geoCodeCircleSize'
                        label='Geocode Circle Size'
                        updateField={updateField}
                      />
                    </label>

                    {(config.general.geoType === 'world' ||
                      config.general.geoType === 'single-state' ||
                      config.general.geoType === 'us-county') && (
                      <label className='checkbox'>
                        <input
                          type='checkbox'
                          checked={config.general.allowMapZoom}
                          onChange={event => {
                            const _newConfig = cloneConfig(config)
                            _newConfig.general.allowMapZoom = event.target.checked
                            _newConfig.mapPosition.coordinates = config.general.geoType === 'world' ? [0, 30] : [0, 0]
                            _newConfig.mapPosition.zoom = 1
                            setConfig(_newConfig)
                          }}
                        />
                        <span className='edit-label'>Allow Map Zooming</span>
                      </label>
                    )}
                    {config.general.geoType === 'us' && (
                      <label className='checkbox'>
                        <input
                          type='checkbox'
                          checked={config.general.showClearSelectionButton !== false}
                          onChange={event => {
                            const _newConfig = cloneConfig(config)
                            _newConfig.general.showClearSelectionButton = event.target.checked
                            setConfig(_newConfig)
                          }}
                        />
                        <span className='edit-label'>Show Clear Selection Button</span>
                      </label>
                    )}
                    {(config.general.geoType === 'us' ||
                      config.general.geoType === 'us-county' ||
                      config.general.geoType === 'world') && (
                      <>
                        <Select
                          label='Default City Style'
                          value={config.visual.cityStyle || 'circle'}
                          options={[
                            { value: 'circle', label: 'Circle' },
                            { value: 'pin', label: 'Pin' },
                            { value: 'square', label: 'Square' },
                            { value: 'triangle', label: 'Triangle' },
                            { value: 'diamond', label: 'Diamond' },
                            { value: 'star', label: 'Star' }
                          ]}
                          onChange={event => {
                            handleEditorChanges('handleCityStyle', event.target.value)
                          }}
                        />
                        <TextField
                          value={config.visual.cityStyleLabel}
                          section='visual'
                          fieldName='cityStyleLabel'
                          label='Label (Optional) '
                          updateField={updateField}
                          tooltip={
                            <Tooltip style={{ textTransform: 'none' }}>
                              <Tooltip.Target>
                                <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                              </Tooltip.Target>
                              <Tooltip.Content>
                                <p>When a label is provided, the default city style will appear in the legend.</p>
                              </Tooltip.Content>
                            </Tooltip>
                          }
                        />
                      </>
                    )}
                    {/* <AdditionalCityStyles /> */}
                    <>
                      <GroupedList
                        items={config.visual.additionalCityStyles}
                        label='Additional City Styles'
                        droppableId='map-city-styles'
                        draggable={false}
                        renderItem={({ label, column, value, shape }, i) => (
                          <Accordion allowZeroExpanded key={`additional-city-style-${i}`}>
                            <AccordionItem className='series-item series-item--chart'>
                              <AccordionItemHeading className='series-item__title'>
                                <AccordionItemButton className='accordion__button'>
                                  {label || column || `City Style ${i + 1}`}
                                </AccordionItemButton>
                              </AccordionItemHeading>
                              <AccordionItemPanel>
                                <div className='series-item__panel-actions'>
                                  <Button
                                    type='button'
                                    variant='danger'
                                    size='sm'
                                    className='grouped-list__remove'
                                    onClick={() => editCityStyles('remove', i, '', '')}
                                  >
                                    Remove
                                  </Button>
                                </div>
                                <Select
                                  label='Column with configuration value'
                                  value={column}
                                  options={columnsOptions.map(c => c.key)}
                                  onChange={e => {
                                    editCityStyles('update', i, 'column', e.target.value)
                                  }}
                                />
                                <label>
                                  <span className='edit-label column-heading'>Value to Trigger</span>
                                  <input
                                    type='text'
                                    value={value}
                                    onChange={e => {
                                      editCityStyles('update', i, 'value', e.target.value)
                                    }}
                                  />
                                </label>
                                <Select
                                  label='Shape'
                                  value={shape}
                                  options={[
                                    { value: '', label: '- Select Option -' },
                                    ...['Circle', 'Square', 'Triangle', 'Diamond', 'Star', 'Pin']
                                      .filter(
                                        val => String(config.visual.cityStyle).toLowerCase() !== val.toLowerCase()
                                      )
                                      .map(val => ({ value: val, label: val }))
                                  ]}
                                  onChange={e => {
                                    editCityStyles('update', i, 'shape', e.target.value)
                                  }}
                                />
                                <label>
                                  <span className='edit-label column-heading'>Label</span>
                                  <input
                                    key={i}
                                    type='text'
                                    value={label}
                                    onChange={e => {
                                      editCityStyles('update', i, 'label', e.target.value)
                                    }}
                                  />
                                </label>
                              </AccordionItemPanel>
                            </AccordionItem>
                          </Accordion>
                        )}
                      />

                      <Button type='button' variant='editor-primary' onClick={() => editCityStyles('add', 0, '', '')}>
                        Add city style
                      </Button>
                    </>
                    <label htmlFor='opacity'>
                      <TextField
                        type='number'
                        min={0}
                        max={100}
                        value={config.tooltips.opacity ? config.tooltips.opacity : 100}
                        section='tooltips'
                        fieldName='opacity'
                        label='Tooltip Opacity (%)'
                        updateField={updateField}
                      />
                    </label>
                    {/* Leaflet Map Type */}
                    {config.general.geoType === 'leaflet' && (
                      <>
                        <Select
                          label='Leaflet Theme'
                          options={layerOptions}
                          section={'leaflet'}
                          fieldName='theme'
                          updateField={updateField}
                        />
                      </>
                    )}
                    {isCoveDeveloperMode() && (
                      <CheckBox
                        value={config.visual?.highlightWrappers}
                        section='visual'
                        fieldName='highlightWrappers'
                        label='Highlight Layout Wrappers'
                        updateField={updateField}
                      />
                    )}
                  </AccordionItemPanel>
                </AccordionItem>
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

      {showConversionModal && (
        <PaletteConversionModal
          onConfirm={handleConversionConfirm}
          onCancel={handleConversionCancel}
          onReturnToV1={handleReturnToV1}
          paletteName={pendingPaletteSelection?.palette}
          message={config.general?.palette?.version === '2.0' ? V21_PALETTE_CONVERSION_MESSAGE : undefined}
        />
      )}
    </React.Fragment>
  )
}

export default EditorPanel
