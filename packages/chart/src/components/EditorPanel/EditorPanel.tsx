import { useState, useEffect, useCallback, memo, useContext, useMemo } from 'react'
import { Draggable } from '@hello-pangea/dnd'
import chroma from 'chroma-js'
import { getAutoDetectedDateParseFormat, isDateScale } from '@cdc/core/helpers/cove/date'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton
} from 'react-accessible-accordion'

// @cdc/core
import { EditorPanel as BaseEditorPanel } from '@cdc/core/components/EditorPanel/EditorPanel'
import AdvancedEditor from '@cdc/core/components/AdvancedEditor'
import ModernStylesAction from '@cdc/core/components/EditorPanel/ModernStylesAction'
import Icon from '@cdc/core/components/ui/Icon'
import ColumnsEditor from '@cdc/core/components/EditorPanel/ColumnsEditor'
import DataTableEditor from '@cdc/core/components/EditorPanel/DataTableEditor'
import GroupedList from '@cdc/core/components/EditorPanel/GroupedList'
import VizFilterEditor from '@cdc/core/components/EditorPanel/VizFilterEditor'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import { Select, TextField, CheckBox } from '@cdc/core/components/EditorPanel/Inputs'
import MultiSelect from '@cdc/core/components/MultiSelect'
import Button from '@cdc/core/components/elements/Button'
import { viewports } from '@cdc/core/helpers/getViewport'
import { approvedCurveTypes } from '@cdc/core/helpers/lineChartHelpers'
import PanelMarkup from '@cdc/core/components/EditorPanel/components/PanelMarkup'
import { useDataColumns } from '@cdc/core/hooks/useDataColumns'

// chart components
import Panels from './components/Panels'
import PaletteConversionModal, { V21_PALETTE_CONVERSION_MESSAGE } from '@cdc/core/components/PaletteConversionModal'

// cdc additional
import { useEditorPermissions } from './useEditorPermissions'
import { useHighlightedBars } from '../../hooks/useHighlightedBars'
import ConfigContext from '../../ConfigContext'
import useReduceData from '../../hooks/useReduceData'
import WarningImage from '../../images/warning.svg'
import getMinMax from '../../helpers/getMinMax'

import { type ChartContext } from '../../types/ChartContext'
import { type ChartConfig } from '../../types/ChartConfig'

import '@cdc/core/components/EditorPanel/EditorPanel.styles.css'
import './editor-panel.scss'
import { Anchor } from '@cdc/core/types/Axis'
import EditorPanelContext from './EditorPanelContext'
import cloneDeep from 'lodash/cloneDeep'
import flatMap from 'lodash/flatMap'
import keys from 'lodash/keys'
import uniq from 'lodash/uniq'
import { adjustedSymbols as symbolCodes } from '@cdc/core/helpers/footnoteSymbols'
import { updateFieldRankByValue } from './helpers/updateFieldRankByValue'
import cloneConfig from '@cdc/core/helpers/cloneConfig'
import FootnotesEditor from '@cdc/core/components/EditorPanel/FootnotesEditor'
import { Datasets } from '@cdc/core/types/DataSet'
import { updateFieldFactory } from '@cdc/core/helpers/updateFieldFactory'
import { paletteMigrationMap, twoColorPaletteMigrationMap } from '@cdc/core/helpers/palettes/migratePaletteName'
import { isV1Palette, migratePaletteWithMap } from '@cdc/core/helpers/palettes/utils'
import { USE_V2_MIGRATION } from '@cdc/core/helpers/constants'
import { getSeriesOwnedColumnNames } from '../../helpers/seriesColumnSettings'
import CategoryOrderControls from './components/CategoryOrderControls'
import RightValueAxisSection, {
  type RightDataFormatField,
  type RightYAxisField
} from './components/sections/RightValueAxisSection'
import LegendSection, { type LegendField } from './components/sections/LegendSection'
import DataSeriesSection from './components/sections/DataSeriesSection'
import {
  DataSeriesSectionProvider,
  type DataSeriesRootField,
  type DataSeriesSectionContextValue
} from './components/sections/DataSeriesSectionContext'
import PieDataFormatSection from './components/sections/PieDataFormatSection'
import {
  PieDataFormatSectionProvider,
  type PieDataFormatField,
  type PieDataFormatSectionContextValue,
  type PieYAxisField
} from './components/sections/PieDataFormatSectionContext'
import ValueAxisControls from './components/sections/value-axis/ValueAxisControls'
import {
  ValueAxisControlsProvider,
  type ValueAxisControlsContextValue,
  type ValueAxisDataFormatField,
  type ValueAxisRootField,
  type ValueAxisXAxisField,
  type ValueAxisYAxisField
} from './components/sections/value-axis/ValueAxisControlsContext'
import {
  HEATMAP_CONFIG_DEFAULTS,
  MAX_HEATMAP_COLUMN_WIDTH,
  MAX_HEATMAP_COLOR_BUCKETS,
  MIN_HEATMAP_COLUMN_WIDTH,
  MIN_HEATMAP_COLOR_BUCKETS
} from '../HeatMap/heatmap.constants'

interface PreliminaryProps {
  config: ChartConfig
  updateConfig: Function
  data: Record<string, any>[]
}

const PreliminaryData: React.FC<PreliminaryProps> = ({ config, updateConfig, data }) => {
  const isCombo = config.visualizationType === 'Combo'
  const lineSeriesExists = config.runtime.lineSeriesKeys?.length > 0
  const barSeriesExists = config.runtime.barSeriesKeys?.length > 0
  const hasComboLineSeries = isCombo && lineSeriesExists
  const hasComboBarSeries = isCombo && barSeriesExists

  const getColumnOptions = () => {
    return uniq(flatMap(data, keys))
  }

  const getTypeOptions = () => {
    return config.visualizationType === 'Line' || hasComboLineSeries ? ['effect', 'suppression'] : ['suppression']
  }

  const lineCodes = {
    'Dashed Small': '\u002D \u002D \u002D',
    'Dashed Medium': '\u2013 \u2013',
    'Dashed Large': '\u2014 \u2013',
    'Open Circles': '\u25EF',
    'Filled Circles': ''
  }

  const getStyleOptions = type => {
    const options = Object.keys(lineCodes)
    if (type === 'suppression') {
      return options.slice(0, -2)
    } else {
      return options
    }
  }

  const getSymbolOptions = () => {
    if (config.visualizationType === 'Bar' || hasComboBarSeries) {
      return Object.keys(symbolCodes)
    }
  }

  let removeColumn = i => {
    let preliminaryData = []

    if (config.preliminaryData) {
      preliminaryData = [...config.preliminaryData]
    }

    preliminaryData.splice(i, 1)

    updateConfig({ ...config, preliminaryData })
  }

  let addColumn = () => {
    const defaultType = config.visualizationType === 'Line' ? 'effect' : 'suppression'
    let preliminaryData = config.preliminaryData ? [...config.preliminaryData] : []
    const defaultValues = {
      type: defaultType,
      lineEffectScope: 'outgoing',
      seriesKeys: [],
      label: 'Suppressed',
      column: '',
      value: '',
      style: '',
      displayTooltip: true,
      displayLegend: true,
      displayTable: true,
      symbol: '',
      iconCode: '',
      lineCode: '',
      hideBarSymbol: false,
      hideLineStyle: false,
      circleSize: 6,
      displayGray: true,
      weight: undefined
    }
    preliminaryData.push(defaultValues)
    updateConfig({ ...config, preliminaryData })
  }

  let update = (fieldName, value, i) => {
    let preliminaryData = []

    if (config.preliminaryData) {
      preliminaryData = [...config.preliminaryData]
    }

    preliminaryData[i] = { ...preliminaryData[i], [fieldName]: value }
    if (fieldName === 'lineEffectScope' && value === '') {
      delete preliminaryData[i].lineEffectScope
    }
    if (fieldName === 'symbol') {
      preliminaryData[i]['iconCode'] = symbolCodes[value]
    }
    if (fieldName === 'style') {
      preliminaryData[i]['lineCode'] = lineCodes[value]
    }
    updateConfig({ ...config, preliminaryData })
  }

  const moveColumn = (sourceIndex, destinationIndex) => {
    const preliminaryData = config.preliminaryData ? [...config.preliminaryData] : []
    const [movedItem] = preliminaryData.splice(sourceIndex, 1)
    preliminaryData.splice(destinationIndex, 0, movedItem)
    updateConfig({ ...config, preliminaryData })
  }

  return (
    <>
      <GroupedList
        items={config.preliminaryData}
        label='Suppressed Data'
        droppableId='chart-preliminary-data-order'
        onDragEnd={({ source, destination }) => {
          if (!destination || source.index === destination.index) return
          moveColumn(source.index, destination.index)
        }}
        renderItem={(
          {
            displayGray,
            circleSize,
            column,
            displayLegend,
            displayTable,
            displayTooltip,
            label,
            seriesKeys,
            style,
            symbol,
            type,
            value,
            hideBarSymbol,
            hideLineStyle,
            lineEffectScope,
            weight
          },
          i
        ) => (
          <Draggable key={`preliminaryData-${i}`} draggableId={`preliminaryData-${i}`} index={i}>
            {(provided, snapshot) => (
              <div
                className={snapshot.isDragging ? 'currently-dragging' : ''}
                style={provided.draggableProps.style}
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              >
                <Accordion allowZeroExpanded>
                  <AccordionItem className='series-item series-item--chart'>
                    <AccordionItemHeading className='series-item__title'>
                      <AccordionItemButton className='accordion__button'>
                        <Icon display='move' size={15} style={{ cursor: 'default' }} />
                        {type === 'suppression' ? 'Suppressed Data' : `Effect Data ${i + 1}`}
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className='series-item__panel-actions'>
                        <Button
                          type='button'
                          variant='danger'
                          size='sm'
                          className='grouped-list__remove'
                          onClick={event => {
                            event.preventDefault()
                            removeColumn(i)
                          }}
                        >
                          Remove
                        </Button>
                      </div>

                      <Select
                        value={type}
                        initial={config.visualizationType == 'Bar' ? '' : 'Select'}
                        fieldName='type'
                        label='Type'
                        updateField={(_, __, fieldName, value) => update(fieldName, value, i)}
                        options={getTypeOptions()}
                      />
                      {type === 'suppression' ? (
                        <>
                          <Select
                            tooltip={
                              <Tooltip style={{ textTransform: 'none' }}>
                                <Tooltip.Target>
                                  <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                                </Tooltip.Target>
                                <Tooltip.Content>
                                  <p>
                                    {' '}
                                    Without a selected "Data Series", the suppression symbol will be applied for all
                                    series in the current dataset visualization. However, choosing a specific "data
                                    series" will isolate the suppression to that series.
                                  </p>
                                </Tooltip.Content>
                              </Tooltip>
                            }
                            value={column}
                            initial='Select'
                            fieldName='column'
                            label='Add Data Series'
                            updateField={(_, __, fieldName, value) => update(fieldName, value, i)}
                            options={config.runtime?.seriesKeys}
                          />
                          <TextField
                            value={value}
                            fieldName='value'
                            label='Suppressed Data  Value'
                            updateField={(_, __, fieldName, value) => update(fieldName, value, i)}
                          />
                          {(hasComboLineSeries || config.visualizationType === 'Line') && (
                            <>
                              <Select
                                tooltip={
                                  <Tooltip style={{ textTransform: 'none' }}>
                                    <Tooltip.Target>
                                      <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                                    </Tooltip.Target>
                                    <Tooltip.Content>
                                      <p>
                                        The recommended approach for presenting data is to include a footnote indicating
                                        any data suppression.
                                      </p>
                                    </Tooltip.Content>
                                  </Tooltip>
                                }
                                value={style}
                                initial='Select'
                                fieldName='style'
                                label={'suppression line style'}
                                updateField={(_, __, fieldName, value) => update(fieldName, value, i)}
                                options={getStyleOptions(type)}
                              />
                              <TextField
                                type='number'
                                min={1}
                                max={9}
                                value={weight}
                                fieldName='weight'
                                label='Line Weight'
                                placeholder='Default'
                                updateField={(_, __, fieldName, value) => update(fieldName, value, i)}
                              />
                              <CheckBox
                                value={hideLineStyle}
                                fieldName='hideLineStyle'
                                label='Hide Suppressed line Style'
                                updateField={(_, __, fieldName, value) => update(fieldName, value, i)}
                              />
                            </>
                          )}

                          {(hasComboBarSeries || config.visualizationType === 'Bar') && (
                            <>
                              <Select
                                tooltip={
                                  <Tooltip style={{ textTransform: 'none' }}>
                                    <Tooltip.Target>
                                      <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                                    </Tooltip.Target>
                                    <Tooltip.Content>
                                      <p>
                                        A symbol is <i>required</i> to indicate suppressed data. We suggest "double
                                        asterisks." If "double asterisks" are already used elsewhere (e.g., footnotes),
                                        please select an alternative symbol from the menu to denote data suppression.
                                      </p>
                                    </Tooltip.Content>
                                  </Tooltip>
                                }
                                value={symbol}
                                initial='Select'
                                fieldName='symbol'
                                label={
                                  config.visualizationType === 'Combo' ? 'suppression bar symbol' : 'suppression symbol'
                                }
                                updateField={(_, __, fieldName, value) => update(fieldName, value, i)}
                                options={getSymbolOptions()}
                              />
                              <CheckBox
                                value={hideBarSymbol}
                                fieldName='hideBarSymbol'
                                label='Hide Suppressed Bar Symbol  '
                                updateField={(_, __, fieldName, value) => update(fieldName, value, i)}
                              />
                            </>
                          )}

                          <TextField
                            tooltip={
                              <Tooltip style={{ textTransform: 'none' }}>
                                <Tooltip.Target>
                                  <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                                </Tooltip.Target>
                                <Tooltip.Content>
                                  <p>This label will display in the tooltip and legend.</p>
                                </Tooltip.Content>
                              </Tooltip>
                            }
                            value={label ? label : 'Suppressed'}
                            fieldName='label'
                            label='Suppressed Data Label'
                            placeholder=''
                            updateField={(_, __, fieldName, value) => update(fieldName, value, i)}
                          />
                          <CheckBox
                            display={config.visualizationSubType === 'regular'}
                            tooltip={
                              <Tooltip style={{ textTransform: 'none' }}>
                                <Tooltip.Target>
                                  <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                                </Tooltip.Target>
                                <Tooltip.Content>
                                  <p>
                                    Deselecting the "Display In Tooltips" option prevents suppressed values from
                                    appearing in tooltips.
                                  </p>
                                </Tooltip.Content>
                              </Tooltip>
                            }
                            value={displayTooltip}
                            fieldName='displayTooltip'
                            label='Display in tooltips'
                            updateField={(_, __, fieldName, value) => update(fieldName, value, i)}
                          />
                          <CheckBox
                            display={config.visualizationSubType === 'regular'}
                            tooltip={
                              <Tooltip style={{ textTransform: 'none' }}>
                                <Tooltip.Target>
                                  <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                                </Tooltip.Target>
                                <Tooltip.Content>
                                  <p>
                                    Deselecting "Display in Legend" indicates that you do not want to display suppressed
                                    data in the legend.
                                  </p>
                                </Tooltip.Content>
                              </Tooltip>
                            }
                            value={displayLegend}
                            fieldName='displayLegend'
                            label='Display in legend'
                            updateField={(_, __, fieldName, value) => update(fieldName, value, i)}
                          />
                          <CheckBox
                            display={config.visualizationSubType === 'regular'}
                            tooltip={
                              <Tooltip style={{ textTransform: 'none' }}>
                                <Tooltip.Target>
                                  <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                                </Tooltip.Target>
                                <Tooltip.Content>
                                  <p>
                                    Deselecting "Display In Data Table" indicates that you do not want to display
                                    suppressed data in the data table.
                                  </p>
                                </Tooltip.Content>
                              </Tooltip>
                            }
                            value={displayTable}
                            fieldName='displayTable'
                            label='Display in table'
                            updateField={(_, __, fieldName, value) => update(fieldName, value, i)}
                          />
                          <CheckBox
                            display={config.visualizationSubType === 'regular'}
                            tooltip={
                              <Tooltip style={{ textTransform: 'none' }}>
                                <Tooltip.Target>
                                  <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                                </Tooltip.Target>
                                <Tooltip.Content>
                                  <p>
                                    Selecting this option will apply to chart, tooltip hover, legend, and data table.
                                  </p>
                                </Tooltip.Content>
                              </Tooltip>
                            }
                            value={displayGray}
                            fieldName='displayGray'
                            label='Highlight Suppressed Data In Gray'
                            updateField={(_, __, fieldName, value) => update(fieldName, value, i)}
                          />
                        </>
                      ) : (
                        <>
                          <label>
                            <span className='edit-label'>ASSOCIATE TO THESE SERIES</span>
                            <MultiSelect
                              fieldName='seriesKeys'
                              updateField={(_, __, fieldName, value) => update(fieldName, value, i)}
                              options={(config.runtime.lineSeriesKeys ?? config.runtime?.seriesKeys).map(c => ({
                                label: c,
                                value: c
                              }))}
                              selected={seriesKeys}
                            />
                          </label>
                          <Select
                            value={column}
                            initial='Select'
                            fieldName='column'
                            label='COLUMN WITH CONFIGURATION VALUE'
                            updateField={(_, __, fieldName, value) => update(fieldName, value, i)}
                            options={getColumnOptions()}
                          />
                          <TextField
                            tooltip={
                              <Tooltip style={{ textTransform: 'none' }}>
                                <Tooltip.Target>
                                  <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                                </Tooltip.Target>
                                <Tooltip.Content>
                                  <p>
                                    If 'Filled Circles' is selected as the style, this field is optional, and the style
                                    'Filled Circles' will apply to all points within the associated series data.
                                  </p>
                                </Tooltip.Content>
                              </Tooltip>
                            }
                            value={value}
                            fieldName='value'
                            label='VALUE TO TRIGGER'
                            updateField={(_, __, fieldName, value) => update(fieldName, value, i)}
                          />
                          <Select
                            value={style}
                            initial='Select'
                            fieldName='style'
                            label='Style'
                            updateField={(_, __, fieldName, value) => update(fieldName, value, i)}
                            options={getStyleOptions(type)}
                          />
                          {style?.includes('Circles') && (
                            <TextField
                              className='number-narrow'
                              type='number'
                              value={circleSize}
                              fieldName='circleSize'
                              label='circle size'
                              updateField={(_, __, fieldName, value) => update(fieldName, value, i)}
                            />
                          )}
                          {style && !style.includes('Circles') && (
                            <Select
                              display={config.visualizationType === 'Line' || hasComboLineSeries}
                              id={`line-effect-scope-${i}`}
                              value={lineEffectScope === 'outgoing' ? 'outgoing' : ''}
                              fieldName='lineEffectScope'
                              label='Apply style to'
                              aria-label='Apply style to'
                              tooltip={
                                <Tooltip style={{ textTransform: 'none' }}>
                                  <Tooltip.Target>
                                    <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                                  </Tooltip.Target>
                                  <Tooltip.Content>
                                    <p>
                                      A matching data point styles either the segment after it or both segments before
                                      and after it.
                                    </p>
                                  </Tooltip.Content>
                                </Tooltip>
                              }
                              updateField={(_, __, fieldName, value) => update(fieldName, value, i)}
                              options={[
                                { label: 'Segment after point', value: 'outgoing' },
                                { label: 'Both adjacent segments', value: '' }
                              ]}
                            />
                          )}
                          {style && !style.includes('Circles') && (
                            <TextField
                              type='number'
                              min={1}
                              max={9}
                              value={weight}
                              fieldName='weight'
                              label='Line Weight'
                              placeholder='Default'
                              updateField={(_, __, fieldName, value) => update(fieldName, value, i)}
                            />
                          )}
                          {style !== 'Filled Circles' && (
                            <TextField
                              value={label}
                              fieldName='label'
                              label='Label'
                              placeholder=''
                              updateField={(_, __, fieldName, value) => update(fieldName, value, i)}
                            />
                          )}
                        </>
                      )}
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            )}
          </Draggable>
        )}
      />
      <Button type='button' variant='editor-primary' onClick={addColumn}>
        {config.visualizationType === 'Line'
          ? 'Add Special Line'
          : config.visualizationType === 'Bar'
          ? ' Add Special Bar'
          : 'Add Special Bar/Line'}
      </Button>
    </>
  )
}

interface CategoricalAxisProps {
  config: ChartConfig
  updateConfig: Function
  display: boolean
}

type AxisAnchorEditorProps = {
  axisKey: 'xAxis' | 'yAxis'
  anchorField?: 'anchors' | 'rightAnchors'
  config: ChartConfig
  lineOptions: { value: string; label?: string }[]
  updateConfig: Function
}

const AxisAnchorEditor: React.FC<AxisAnchorEditorProps> = ({
  axisKey,
  anchorField = 'anchors',
  config,
  lineOptions,
  updateConfig
}) => {
  const anchors = config[axisKey]?.[anchorField] || []

  const updateAnchors = (nextAnchors: Anchor[]) => {
    updateConfig({
      ...config,
      [axisKey]: {
        ...config[axisKey],
        [anchorField]: nextAnchors
      }
    })
  }

  const updateAnchorField = (index: number, field: keyof Anchor, value: string) => {
    const copiedAnchors = [...anchors]
    copiedAnchors[index] = {
      ...copiedAnchors[index],
      [field]: value
    }
    updateAnchors(copiedAnchors)
  }

  const removeAnchor = (index: number) => {
    const copiedAnchors = [...anchors]
    copiedAnchors.splice(index, 1)
    updateAnchors(copiedAnchors)
  }

  const addAnchor = () => {
    updateAnchors([...anchors, {} as Anchor])
  }

  const reorderAnchors = (sourceIndex: number, destinationIndex: number) => {
    const copiedAnchors = [...anchors]
    const [movedAnchor] = copiedAnchors.splice(sourceIndex, 1)
    copiedAnchors.splice(destinationIndex, 0, movedAnchor)
    updateAnchors(copiedAnchors)
  }

  return (
    <>
      <GroupedList
        items={anchors}
        label='Anchors'
        droppableId={`${axisKey}-${anchorField}-order`}
        onDragEnd={({ source, destination }) => {
          if (!destination || source.index === destination.index) return
          reorderAnchors(source.index, destination.index)
        }}
        renderItem={(anchor, index) => (
          <Draggable
            key={`${axisKey}-${anchorField}-anchor-${index}`}
            draggableId={`${axisKey}-${anchorField}-anchor-${index}`}
            index={index}
          >
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                className={snapshot.isDragging ? 'currently-dragging' : ''}
                style={provided.draggableProps.style}
              >
                <Accordion allowZeroExpanded>
                  <AccordionItem className='series-item series-item--chart'>
                    <AccordionItemHeading className='series-item__title'>
                      <AccordionItemButton className='accordion__button'>
                        <Icon display='move' size={15} style={{ cursor: 'default' }} />
                        {`Anchor ${index + 1}`}
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className='series-item__panel-actions'>
                        <Button
                          type='button'
                          variant='danger'
                          size='sm'
                          className='grouped-list__remove'
                          onClick={e => {
                            e.preventDefault()
                            removeAnchor(index)
                          }}
                        >
                          Remove
                        </Button>
                      </div>
                      <label>
                        <span>Anchor Value</span>
                        <Tooltip style={{ textTransform: 'none' }}>
                          <Tooltip.Target>
                            <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                          </Tooltip.Target>
                          <Tooltip.Content>
                            <p>Enter the value as its shown in the data column</p>
                          </Tooltip.Content>
                        </Tooltip>
                        <input
                          type='text'
                          value={anchor?.value || ''}
                          onChange={e => {
                            e.preventDefault()
                            updateAnchorField(index, 'value', e.target.value)
                          }}
                        />
                      </label>

                      <label>
                        <span>Anchor Color</span>
                        <input
                          type='text'
                          value={anchor?.color || ''}
                          onChange={e => {
                            e.preventDefault()
                            updateAnchorField(index, 'color', e.target.value)
                          }}
                        />
                      </label>

                      <Select
                        value={anchor?.lineStyle || ''}
                        label='Anchor Line Style'
                        onChange={e => updateAnchorField(index, 'lineStyle', e.target.value)}
                        options={[
                          { value: '', label: 'Select' },
                          ...lineOptions.map(line => ({ value: line.value, label: line.value }))
                        ]}
                      />
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            )}
          </Draggable>
        )}
      />

      <Button
        variant='editor-primary'
        onClick={e => {
          e.preventDefault()
          addAnchor()
        }}
      >
        Add Anchor
      </Button>
    </>
  )
}

const CategoricalAxis: React.FC<CategoricalAxisProps> = ({ config, updateConfig, display }) => {
  const dataDrivenCategories = config.yAxis.dataDrivenCategories
  const isDataDriven =
    config.yAxis.categoryMode === 'data-driven' || (config.yAxis.categoryMode === undefined && !!dataDrivenCategories)

  const updateDynamicCategories = (updates: Record<string, any>) => {
    updateConfig({
      ...config,
      yAxis: {
        ...config.yAxis,
        dataDrivenCategories: { ...dataDrivenCategories, ...updates }
      }
    })
  }

  const updateDynamicCategory = (index: number, fieldName: string, value: string) => {
    const categories = [...(dataDrivenCategories?.categories || [])]
    categories[index] = { ...categories[index], [fieldName]: value }
    updateDynamicCategories({ categories })
  }

  const addDynamicCategory = () => {
    const categories = [...(dataDrivenCategories?.categories || [])]
    categories.push({ label: `Category ${categories.length + 1}`, upperBoundKey: '', color: '#c9c9c9' })
    updateDynamicCategories({ categories })
  }

  const removeDynamicCategory = (index: number) => {
    const categories = [...(dataDrivenCategories?.categories || [])]
    categories.splice(index, 1)
    updateDynamicCategories({ categories })
  }

  const maxHeight = config?.yAxis?.maxValue

  const totalEnteredHeight =
    config?.yAxis?.categories?.reduce((sum, obj) => sum + (parseFloat(obj.height) || 0), 0) || 0

  const removeColumn = i => {
    let categories = []

    if (config.yAxis.categories) {
      categories = [...config.yAxis.categories]
    }

    categories.splice(i, 1)

    updateConfig({ ...config, yAxis: { ...config.yAxis, categories } })
  }

  const getDarkerColor = () => {
    const timesDarkened = config.yAxis?.categories?.length
    const darkeningFactor = 0.4
    const baseColor = '#ddd'
    return chroma(baseColor)
      .darken(darkeningFactor * timesDarkened)
      .hex()
  }

  const addColumn = () => {
    const categories = config.yAxis.categories ? [...config.yAxis.categories] : []
    const defaultValues = {
      label: 'Label ' + Number(categories.length + 1),
      height: '',
      color: getDarkerColor()
    }
    categories.push(defaultValues)
    updateConfig({ ...config, yAxis: { ...config.yAxis, categories: categories } })
  }

  const update = (fieldName, value, i) => {
    let categories = []

    if (config.yAxis.categories) {
      categories = [...config.yAxis.categories]
    }

    categories[i][fieldName] = value

    updateConfig({ ...config, yAxis: { ...config.yAxis, categories } })
  }

  if (!display) {
    return <></>
  }

  if (isDataDriven && dataDrivenCategories) {
    return (
      <div className='edit-block'>
        <p>Data-Driven Category Axis</p>
        <p>Thresholds are read from the current filtered data. The last category defines the axis maximum.</p>
        {dataDrivenCategories.categories?.map((category, index) => (
          <div key={category.upperBoundKey || category.label || 'unnamed-category'} className='edit-block'>
            <p>Data-Driven Category {index + 1}</p>
            <Button type='button' className='btn btn-danger' onClick={() => removeDynamicCategory(index)}>
              Remove
            </Button>
            <TextField
              value={category.label}
              fieldName='label'
              label='Category Label'
              updateField={(_, __, fieldName, value) => updateDynamicCategory(index, fieldName, value)}
            />
            <TextField
              value={category.upperBoundKey}
              fieldName='upperBoundKey'
              label='Upper-Bound Column'
              updateField={(_, __, fieldName, value) => updateDynamicCategory(index, fieldName, value)}
            />
            <TextField
              value={category.color}
              fieldName='color'
              label='Color'
              updateField={(_, __, fieldName, value) => updateDynamicCategory(index, fieldName, value)}
            />
          </div>
        ))}
        <Button type='button' variant='editor-primary' onClick={addDynamicCategory}>
          Add Data-Driven Category
        </Button>
      </div>
    )
  }

  return (
    <>
      {config.yAxis.type === 'categorical' &&
        config.yAxis.categories?.map(({ label, color, height }, i) => {
          return (
            <div key={`preliminaryData-${i}`} className='edit-block'>
              <p>Axis Category {i + 1}</p>
              <Button
                type='button'
                className='btn btn-danger'
                onClick={event => {
                  event.preventDefault()
                  removeColumn(i)
                }}
              >
                Remove
              </Button>
              <TextField
                tooltip={
                  <Tooltip style={{ textTransform: 'none' }}>
                    <Tooltip.Target>
                      <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                    </Tooltip.Target>
                    <Tooltip.Content>
                      <p>
                        {' '}
                        Category Height will be ignored for the last category. The last category will fill the rest of
                        the axis height.
                      </p>
                    </Tooltip.Content>
                  </Tooltip>
                }
                type='number'
                value={height}
                fieldName='height'
                label='Category Height'
                updateField={(_, __, fieldName, value) => update(fieldName, value, i)}
              />
              {Number(totalEnteredHeight) > Number(maxHeight) && config.yAxis.categories.length - 1 === i && (
                <span style={{ color: 'red', display: 'block', fontSize: '15px' }}>
                  Update Max value to show all categories
                </span>
              )}

              <div className='two-col-inputs'>
                <TextField
                  value={color}
                  fieldName='color'
                  label='Color'
                  updateField={(_, __, fieldName, value) => update(fieldName, value, i)}
                />
                <TextField
                  value={label}
                  fieldName='label'
                  label='Label'
                  updateField={(_, __, fieldName, value) => update(fieldName, value, i)}
                />
              </div>
            </div>
          )
        })}

      <Button type='button' variant='editor-primary' onClick={addColumn}>
        Add Axis Category
      </Button>
    </>
  )
}

type ChartEditorPanelProps = {
  datasets?: Datasets
}

const EditorPanel: React.FC<ChartEditorPanelProps> = ({ datasets }) => {
  const {
    config,
    updateConfig,
    tableData,
    transformedData: data,
    isLoading,
    colorScale,
    colorPalettes,
    twoColorPalette,
    unfilteredData,
    excludedData,
    isDashboard,
    setParentConfig,
    missingRequiredSections,
    isDebug,
    setFilteredData,
    lineOptions,
    rawData,
    highlight,
    handleShowAll,
    dimensions
  } = useContext<ChartContext>(ConfigContext)
  const isBarRace = config.visualizationType === 'Bar' && config.visualizationSubType === 'racing'
  const { minValue, maxValue, existPositiveValue, isAllLine } = useReduceData(config, unfilteredData)
  const properties = {
    data,
    tableData: data,
    config,
    minValue,
    maxValue,
    existPositiveValue,
    isAllLine
  }
  const { leftMax, rightMax } = getMinMax(properties)

  const {
    visHasAnchors,
    visHasBrushChart,
    visHasCategoricalAxis,
    visHasLegend,
    visHasLegendAxisAlign,
    visHasLegendColorCategory,
    visHasSelectableLegendValues,
    visSupportsClickingLegend,
    visSupportsDateCategoryAxis,
    visSupportsDateCategoryAxisLabel,
    visSupportsDateCategoryAxisLine,
    visSupportsDateCategoryAxisMax,
    visSupportsDateCategoryAxisMin,
    visSupportsDateCategoryAxisPadding,
    visSupportsDateCategoryAxisTicks,
    visSupportsDateCategoryHeight,
    visSupportsDateCategoryNumTicks,
    visSupportsDateCategoryTickRotation,
    visSupportsDynamicSeries,
    visSupportsAutoMaxStrategy,
    visSupportsFilterDomainBehavior,
    visSupportsFilters,
    visSupportsLeftValueAxis,
    visSupportsPreliminaryData,
    visSupportsRankByValue,
    visSupportsResponsiveTicks,
    visSupportsRightValueAxis,
    visSupportsValueAxisGridLines,
    visSupportsValueAxisLabels,
    visSupportsValueAxisLine,
    visSupportsValueAxisMax,
    visSupportsValueAxisMin,
    visSupportsValueAxisTicks,
    visSupportsYPadding
  } = useEditorPermissions()

  // when the visualization type changes we
  // have to update the individual series type & axis details
  // dataKey is unchanged here.
  // ie. { dataKey: 'series_name', type: 'Bar', axis: 'Left'}
  useEffect(() => {
    let newSeries = []
    if (config.series) {
      newSeries = config.series.map(series => {
        return {
          ...series,
          type:
            config.visualizationType === 'Combo' ? 'Bar' : config.visualizationType ? config.visualizationType : 'Bar',
          axis: 'Left',
          tooltip: series.tooltip ?? true
        }
      })
    }

    updateConfig({
      ...config,
      series: newSeries
    })
  }, [config.visualizationType]) // eslint-disable-line

  // Scatter Plots default date/category axis is 'continuous'
  useEffect(() => {
    if (config.visualizationType === 'Scatter Plot') {
      updateConfig({
        ...config,
        xAxis: {
          ...config.xAxis,
          type: 'continuous'
        }
      })
    }
  }, [])

  useEffect(() => {
    if (config.visualizationType !== 'Bar') {
      updateConfig({ ...config, tooltips: { ...config.tooltips, singleSeries: false } })
    }
  }, [config.visualizationType])

  const getItemStyle = (isDragging, draggableStyle) => ({
    ...draggableStyle
  })

  const sortableItemStyles = {
    animate: false,
    animateReplay: true,
    display: 'block',
    boxSizing: 'border-box',
    border: '1px solid #D1D1D1',
    borderRadius: '2px',
    background: '#F1F1F1',
    padding: '.4em .6em',
    fontSize: '.8em',
    marginRight: '.3em',
    marginBottom: '.3em',
    cursor: 'move',
    zIndex: '999'
  }

  const enforceRestrictions = updatedConfig => {
    if (updatedConfig.orientation === 'horizontal') {
      updatedConfig.labels = false
    }
    if (updatedConfig.table.show === undefined) {
      updatedConfig.table.show = !isDashboard
    }
    // DEV-3293 - Force combo to always be vertical
    if (updatedConfig.visualizationType === 'Combo') {
      updatedConfig.orientation = 'vertical'
    }
    if (isDateScale(updatedConfig.xAxis) && !updatedConfig.xAxis.padding) {
      updatedConfig.xAxis.padding = 0
    }
    if (isDateScale(updatedConfig.xAxis) && updatedConfig.xAxis.dataKey && !updatedConfig.table.defaultSort?.column) {
      updatedConfig.table.defaultSort = {
        column: updatedConfig.xAxis.dataKey,
        sortDirection: 'desc'
      }
    }
    // Default Radar charts to a taller height
    if (updatedConfig.visualizationType === 'Radar' && updatedConfig.heights?.vertical <= 400) {
      updatedConfig.heights.vertical = 400
    }
    // DEV-8008 - Remove Bar styling when Line is converted to Bar
    if (updatedConfig.visualizationType === 'Line') {
      if (updatedConfig.visualizationSubType !== 'racing') updatedConfig.visualizationSubType = 'regular'
      updatedConfig.barStyle = 'flat'
      updatedConfig.isLollipopChart = false
    }
  }

  const updateField = updateFieldFactory(config, updateConfig)
  const getAutoDetectedXAxisDateParseFormat = (dataKey = config.xAxis.dataKey, axisType = config.xAxis.type) => {
    const hasExistingDateParseFormat =
      typeof config.xAxis.dateParseFormat === 'string' && config.xAxis.dateParseFormat.trim() !== ''

    if (hasExistingDateParseFormat || !['date', 'date-time'].includes(axisType)) {
      return undefined
    }

    return getAutoDetectedDateParseFormat(config.data, dataKey)
  }

  const updateFieldDeprecated = (section, subsection, fieldName, newValue) => {
    if (isDebug)
      console.error(
        '#COVE: CHART: EditorPanel: section, subsection, fieldName, newValue',
        section,
        subsection,
        fieldName,
        newValue
      ) // eslint-disable-line

    if (section === 'boxplot' && (subsection === 'legend' || subsection === 'labels')) {
      updateConfig({
        ...config,
        [section]: {
          ...config[section],
          [subsection]: {
            ...config.boxplot[subsection],
            [fieldName]: newValue
          }
        }
      })
      return
    }

    const truthy = val => {
      if (val === 0) return true // indexes can be used as keys
      return !!val
    }

    if (section === 'columns' && truthy(subsection) && truthy(fieldName)) {
      updateConfig({
        ...config,
        columns: {
          ...config.columns,
          [subsection]: {
            ...config.columns[subsection],
            [fieldName]: newValue
          }
        }
      })
      return
    }

    if (section === 'xAxis' && !truthy(subsection) && fieldName === 'dataKey') {
      const autoDetectedDateParseFormat = getAutoDetectedXAxisDateParseFormat(newValue)
      const updatedConfig = {
        ...config,
        xAxis: {
          ...config.xAxis,
          dataKey: newValue,
          categoryOrder: [],
          categoryOrderType: 'data',
          ...(autoDetectedDateParseFormat ? { dateParseFormat: autoDetectedDateParseFormat } : {})
        }
      }

      enforceRestrictions(updatedConfig)
      updateConfig(updatedConfig)
      return
    }

    if (null === section && null === subsection) {
      // special case that allows for updating the config object directly
      if (!truthy(fieldName)) console.error('fieldName is required')
      let updatedConfig = { ...config, [fieldName]: newValue }
      enforceRestrictions(updatedConfig)
      updateConfig(updatedConfig)
      return
    }

    const isArray = Array.isArray(config[section])

    let sectionValue = isArray ? [...config[section], newValue] : { ...config[section], [fieldName]: newValue }

    if (truthy(subsection)) {
      if (isArray) {
        sectionValue = [...config[section]]
        sectionValue[subsection] = { ...sectionValue[subsection], [fieldName]: newValue }
      } else if (typeof newValue === 'string') {
        sectionValue[subsection] = newValue
      } else if (truthy(fieldName)) {
        sectionValue = { ...config[section], [subsection]: { ...config[section][subsection], [fieldName]: newValue } }
      }
    }

    let updatedConfig = { ...config, [section]: sectionValue }

    enforceRestrictions(updatedConfig)

    updateConfig(updatedConfig)
  }

  const updateRightYAxisField = (field: RightYAxisField, value: unknown) =>
    updateFieldDeprecated('yAxis', null, field, value)

  const updateRightDataFormatField = (field: RightDataFormatField, value: unknown) =>
    updateFieldDeprecated('dataFormat', null, field, value)

  const updateRightTitlePlacement = (value: 'side' | 'top') => updateField('yAxis', null, 'rightTitlePlacement', value)

  const [displayViewportOverrides, setDisplayViewportOverrides] = useState(false)
  const [showConversionModal, setShowConversionModal] = useState(false)
  const [pendingPaletteSelection, setPendingPaletteSelection] = useState<{
    palette: string
    action: () => void
    seriesIndex?: number
    stageIndex?: number
    type?: 'general' | 'twoColor' | 'forecast'
  } | null>(null)

  const setLollipopShape = shape => {
    updateConfig({
      ...config,
      lollipopShape: shape
    })
  }

  const addNewSeries = seriesKey => {
    let newSeries = config.series ? [...config.series] : []
    let forecastingStages = Array.from(new Set(data.map(item => item[seriesKey])))
    let forecastingStageArr = []

    forecastingStages.forEach(stage => {
      forecastingStageArr.push({ key: stage })
    })

    if (config.visualizationType === 'Forecasting') {
      newSeries.push({
        dataKey: seriesKey,
        type: config.visualizationType,
        stages: forecastingStageArr,
        stageColumn: seriesKey,
        axis: 'Left',
        tooltip: true
      })
    } else {
      newSeries.push({ dataKey: seriesKey, type: config.visualizationType, axis: 'Left', tooltip: true })
    }
    updateConfig({ ...config, series: newSeries }) // left axis series keys
  }

  const addNewExclusion = exclusionKey => {
    let newExclusion = [...(config.exclusions?.keys ?? [])]
    newExclusion.push(exclusionKey)

    let payload = { ...config.exclusions, keys: newExclusion }
    updateConfig({ ...config, exclusions: payload })
  }

  const removeExclusion = excludeValue => {
    let exclusionsIndex = -1
    let exclusions = [...(config.exclusions?.keys ?? [])]

    for (let i = 0; i < exclusions.length; i++) {
      if (exclusions[i] === excludeValue) {
        exclusionsIndex = i
        break
      }
    }

    if (exclusionsIndex !== -1) {
      exclusions.splice(exclusionsIndex, 1)

      let newExclusions = { ...config.exclusions, keys: exclusions }
      let newExclusionsPayload = { ...config, exclusions: newExclusions }

      updateConfig(newExclusionsPayload)
    }
  }

  // Select data source with memoization (replaces getColumns data source selection logic)
  const dataSourceForColumns = useMemo(() => {
    if (unfilteredData && unfilteredData.length > 0) {
      return unfilteredData
    } else if (isDashboard && datasets && config.dataKey && datasets[config.dataKey]?.data?.length > 0) {
      return datasets[config.dataKey].data
    } else if (rawData && rawData.length > 0) {
      return rawData
    } else if (data && data.length > 0) {
      return data
    } else if (config.data && config.data.length > 0) {
      return config.data
    }
    return []
  }, [unfilteredData, isDashboard, datasets, config.dataKey, config.data, rawData, data])

  // Extract column names from data with memoization (replaces getColumns)
  const allColumns = useDataColumns(dataSourceForColumns)
  const seriesOwnedColumnNames = useMemo(() => getSeriesOwnedColumnNames(config.series), [config.series])

  // Filter out series columns and confidence key columns (except lower and upper)
  const filteredColumns = useMemo(() => {
    const { lower, upper } = config.confidenceKeys || {}
    return allColumns.filter(key => {
      // Filter out series columns
      if (config.series && config.series.some(series => series.dataKey === key)) {
        return false
      }
      // Filter out confidence key columns (except lower and upper)
      if (
        config.confidenceKeys &&
        Object.keys(config.confidenceKeys).includes(key) &&
        ((lower && upper) || lower || upper) &&
        key !== lower &&
        key !== upper
      ) {
        return false
      }
      return true
    })
  }, [allColumns, config.series, config.confidenceKeys])

  // Maintain backwards compatibility with getColumns(filter) API
  const getColumns = useCallback(
    (filter = true) => (filter ? filteredColumns : allColumns),
    [filteredColumns, allColumns]
  )

  const isHeatMap = config.visualizationType === 'HeatMap'
  const heatMapOwnedColumnNames = useMemo(
    () => [config.xAxis?.dataKey, ...(config.series || []).map(series => series.dataKey)].filter(Boolean),
    [config.xAxis?.dataKey, config.series]
  )

  const getDataValueOptions = (data: Record<string, any>[]): string[] => {
    if (!data) return []
    const set = new Set<string>()
    for (let i = 0; i < data.length; i++) {
      for (const [key] of Object.entries(data[i])) {
        set.add(key)
      }
    }
    return Array.from(set)
  }

  const getDataValues = (dataKey, unique = false) => {
    let values = []
    excludedData.forEach(e => {
      values.push(e[dataKey])
    })
    return unique ? [...new Set(values)] : values
  }

  const getAvailableExclusionValues = dataKey => {
    const excludedKeys = (config.exclusions.keys || []).map(String)
    return getDataValues(dataKey, true).filter(value => !excludedKeys.includes(String(value)))
  }

  const updateCategoryOrderType = (categoryOrderType: 'data' | 'custom', categoryOrder: string[]) => {
    updateConfig({
      ...config,
      xAxis: {
        ...config.xAxis,
        categoryOrderType,
        categoryOrder
      }
    })
  }

  const updateCategoryOrder = (categoryOrder: string[]) => {
    updateConfig({
      ...config,
      xAxis: {
        ...config.xAxis,
        categoryOrder
      }
    })
  }

  // prettier-ignore
  const {
    highlightedBarValues,
    getHighlightedSeriesValues,
    handleUpdateHighlightedBar,
    handleAddNewHighlightedBar,
    handleRemoveHighlightedBar,
    handleUpdateHighlightedBarColor,
    handleHighlightedBarLegendLabel,
    handleUpdateHighlightedBorderWidth
  } = useHighlightedBars(config, updateConfig)

  useEffect(() => {
    if (config.orientation === 'horizontal') {
      updateConfig({
        ...config,
        lollipopShape: config.lollipopShape
      })
    }
  }, [config.isLollipopChart, config.lollipopShape]) // eslint-disable-line

  const ExclusionsList = useCallback(() => {
    const exclusions = [...(config.exclusions?.keys ?? [])]
    return (
      <ul className='series-list'>
        {exclusions.map((exclusion, index) => {
          return (
            <li key={exclusion}>
              <div className='series-list__name' data-title={exclusion}>
                <div className='series-list__name--text'>{exclusion}</div>
              </div>
              <button className='series-list__remove' onClick={() => removeExclusion(exclusion)}>
                &#215;
              </button>
            </li>
          )
        })}
      </ul>
    )
  }, [config]) // eslint-disable-line

  const handleSeriesChange = (idx1, idx2) => {
    let seriesOrder = config.series
    let [movedItem] = seriesOrder.splice(idx1, 1)
    seriesOrder.splice(idx2, 0, movedItem)
    updateConfig({ ...config, series: seriesOrder })
  }

  if (config.isLollipopChart && config?.series?.length > 1) {
    config.runtime.editorErrorMessage = 'Lollipop charts must use only one data series'
  }
  if (config.visualizationType === 'Paired Bar' && config?.series?.length !== 2) {
    config.runtime.editorErrorMessage = 'Paired Bar charts must use exactly two data series'
  }

  if (config.visualizationType === 'Deviation Bar' && config?.series?.length !== 1) {
    config.runtime.editorErrorMessage = 'Deviation Bar charts must use exactly one data series'
  }
  if (config.isLollipopChart && config?.series?.length === 0) {
    config.runtime.editorErrorMessage = 'Add a data series'
  }
  if (config.visualizationType === 'HeatMap') {
    const missingMappings = [
      !config.xAxis?.dataKey && 'Date/Category Axis',
      (!config.series || config.series.length === 0) && 'Data Series'
    ].filter(Boolean)

    config.runtime.editorErrorMessage =
      missingMappings.length > 0 ? `${missingMappings.join(', ')} must be set for heatmaps.` : ''
  }

  const section = config.orientation === 'horizontal' ? 'xAxis' : 'yAxis'
  const [warningMsg, setWarningMsg] = useState({ maxMsg: '', minMsg: '', rightMaxMessage: '', minMsgRight: '' })

  // Palette migration functions
  const handlePaletteSelection = (palette: string) => {
    try {
      // Check if config exists and has basic structure
      if (!config) {
        console.error('COVE: Config is undefined in handlePaletteSelection')
        return
      }

      // Check if it's a v1 palette configuration
      const isV1PaletteConfig = isV1Palette(config)
      const shouldUpgradePalette = USE_V2_MIGRATION && (isV1PaletteConfig || config.general?.palette?.version === '2.0')

      const executeSelection = () => {
        const _newConfig = cloneConfig(config)
        if (!_newConfig.general.palette) {
          _newConfig.general.palette = {}
        }

        // If v2 migration is disabled, use the original palette name and keep v1 version
        if (!USE_V2_MIGRATION) {
          _newConfig.general.palette.name = palette
          _newConfig.general.palette.version = '1.0'
        } else {
          // V2 migration logic
          const migratedName = palette ? migratePaletteWithMap(palette, paletteMigrationMap, false) : undefined
          _newConfig.general.palette.name = migratedName
          if (shouldUpgradePalette) {
            _newConfig.general.palette.version = '2.1'
          }
        }
        updateConfig(_newConfig)
      }

      if (shouldUpgradePalette) {
        setPendingPaletteSelection({ palette, action: executeSelection, type: 'general' })
        setShowConversionModal(true)
      } else {
        executeSelection()
      }
    } catch (error) {
      console.error('COVE: Error in handlePaletteSelection:', error)
    }
  }

  // Two-color palette migration function
  const handleTwoColorPaletteSelection = (palette: string) => {
    try {
      // Check if config exists and has basic structure
      if (!config) {
        console.error('COVE: Config is undefined in handleTwoColorPaletteSelection')
        return
      }

      // Check if it's a v1 palette configuration
      const isV1PaletteConfig = isV1Palette(config)

      const executeSelection = () => {
        const _newConfig = cloneConfig(config)
        if (!_newConfig.twoColor) {
          _newConfig.twoColor = { palette: '', isPaletteReversed: false }
        }

        // If v2 migration is disabled, use the original palette name and keep v1 version
        if (!USE_V2_MIGRATION) {
          _newConfig.twoColor.palette = palette
          if (!_newConfig.general) {
            _newConfig.general = {}
          }
          if (!_newConfig.general.palette) {
            _newConfig.general.palette = {}
          }
          _newConfig.general.palette.version = '1.0'
        } else {
          // V2 migration logic
          const migratedPaletteName = isV1PaletteConfig
            ? migratePaletteWithMap(palette, twoColorPaletteMigrationMap, false)
            : palette

          _newConfig.twoColor.palette = migratedPaletteName

          if (isV1PaletteConfig) {
            if (!_newConfig.general) {
              _newConfig.general = {}
            }
            if (!_newConfig.general.palette) {
              _newConfig.general.palette = {}
            }
            _newConfig.general.palette.version = '2.1'

            // Create backup for rollback functionality (consistent with standard format)
            if (!_newConfig.general.palette.backups) {
              _newConfig.general.palette.backups = []
            }
            _newConfig.general.palette.backups.push({
              name: config.twoColor?.palette || palette,
              version: '1.0',
              isReversed: false,
              type: 'twoColor'
            })
          }
        }
        updateConfig(_newConfig)
      }

      if (isV1PaletteConfig) {
        setPendingPaletteSelection({ palette, action: executeSelection, type: 'twoColor' })
        setShowConversionModal(true)
      } else {
        executeSelection()
      }
    } catch (error) {
      console.error('COVE: Error in handleTwoColorPaletteSelection:', error)
    }
  }

  // Forecast palette selection - includes v1/v2 migration modal logic
  const handleForecastPaletteSelection = (palette: string, seriesIndex: number, stageIndex: number) => {
    try {
      if (!config) {
        console.error('COVE: Config is undefined in handleForecastPaletteSelection')
        return
      }

      // Check if it's a v1 palette configuration
      const isV1PaletteConfig = isV1Palette(config)

      const executeSelection = () => {
        const copyOfSeries = [...config.series]
        const copyOfStages = [...(copyOfSeries[seriesIndex].stages || [])]
        copyOfStages[stageIndex] = { ...copyOfStages[stageIndex], color: palette }
        copyOfSeries[seriesIndex] = { ...copyOfSeries[seriesIndex], stages: copyOfStages }

        const _newConfig = cloneConfig(config)
        _newConfig.series = copyOfSeries

        // If this is the first v2 palette selection, upgrade to v2
        if (isV1PaletteConfig && USE_V2_MIGRATION) {
          if (!_newConfig.general) {
            _newConfig.general = {}
          }
          if (!_newConfig.general.palette) {
            _newConfig.general.palette = {}
          }
          _newConfig.general.palette.version = '2.1'

          // Forecast-specific migration map for v1 → v2 palette names (all lowercase-hyphen format)
          const forecastPaletteMigrationMap: Record<string, string> = {
            // Sequential Blue variants → sequential-blue
            'sequential-blue': 'sequential-blue',
            'sequential-blue-two': 'sequential-blue',
            'sequential-blue-three': 'sequential-blue',
            'sequential-blue-2-(mpx)': 'sequential-blue',
            'sequential-blue-2-mpx': 'sequential-blue',
            // Sequential Orange variants → sequential-orange
            'sequential-orange': 'sequential-orange',
            'sequential-orange-two': 'sequential-orange',
            'sequential-orange-(mpx)': 'sequential-orange',
            'sequential-orange-mpx': 'sequential-orange',
            // Other sequential palettes (no variants, just normalize)
            'sequential-green': 'sequential-green',
            'sequential-purple': 'sequential-purple',
            'sequential-teal': 'sequential-teal',
            // Reverse variants - Sequential Blue
            'sequential-bluereverse': 'sequential-bluereverse',
            'sequential-blue-reverse': 'sequential-bluereverse',
            'sequential-blue-tworeverse': 'sequential-bluereverse',
            'sequential-blue-two-reverse': 'sequential-bluereverse',
            'sequential-blue-threereverse': 'sequential-bluereverse',
            'sequential-blue-three-reverse': 'sequential-bluereverse',
            'sequential-blue-2-(mpx)reverse': 'sequential-bluereverse',
            'sequential-blue-2-(mpx)-reverse': 'sequential-bluereverse',
            'sequential-blue-2-mpxreverse': 'sequential-bluereverse',
            'sequential-blue-2-mpx-reverse': 'sequential-bluereverse',
            // Reverse variants - Sequential Orange
            'sequential-orangereverse': 'sequential-orangereverse',
            'sequential-orange-reverse': 'sequential-orangereverse',
            'sequential-orange-tworeverse': 'sequential-orangereverse',
            'sequential-orange-two-reverse': 'sequential-orangereverse',
            'sequential-orange-(mpx)reverse': 'sequential-orangereverse',
            'sequential-orange-(mpx)-reverse': 'sequential-orangereverse',
            'sequential-orange-mpxreverse': 'sequential-orangereverse',
            'sequential-orange-mpx-reverse': 'sequential-orangereverse',
            // Reverse variants - Other sequential palettes
            'sequential-greenreverse': 'sequential-greenreverse',
            'sequential-green-reverse': 'sequential-greenreverse',
            'sequential-purplereverse': 'sequential-purplereverse',
            'sequential-purple-reverse': 'sequential-purplereverse',
            'sequential-tealreverse': 'sequential-tealreverse',
            'sequential-teal-reverse': 'sequential-tealreverse'
          }

          // Migrate and normalize all forecast stage colors to v2 format
          _newConfig.series.forEach((series: any) => {
            if (series.type === 'Forecasting' && series.stages) {
              series.stages.forEach((stage: any) => {
                if (stage.color) {
                  // First, try to migrate using the map
                  const migrated = forecastPaletteMigrationMap[stage.color] || stage.color
                  // Then normalize to lowercase with hyphens
                  stage.color = migrated.toLowerCase().replace(/ /g, '-').replace(/_/g, '-')
                }
              })
            }
          })
        }

        updateConfig(_newConfig)
      }

      if (isV1PaletteConfig) {
        setPendingPaletteSelection({ palette, action: executeSelection, type: 'forecast', seriesIndex, stageIndex })
        setShowConversionModal(true)
      } else {
        executeSelection()
      }
    } catch (error) {
      console.error('COVE: Error in handleForecastPaletteSelection:', error)
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
    // Don't update config - just close modal and discard pending selection
    setShowConversionModal(false)
    setPendingPaletteSelection(null)
  }

  const handleReturnToV1 = () => {
    if (pendingPaletteSelection) {
      const _newConfig = cloneConfig(config)
      const { palette, type } = pendingPaletteSelection

      // Handle based on palette type
      if (type === 'forecast') {
        // Forecast palette selection
        const { seriesIndex, stageIndex } = pendingPaletteSelection
        if (seriesIndex !== undefined && stageIndex !== undefined) {
          const copyOfSeries = [..._newConfig.series]
          const copyOfStages = [...copyOfSeries[seriesIndex].stages]
          copyOfStages[stageIndex] = { ...copyOfStages[stageIndex], color: palette }
          copyOfSeries[seriesIndex] = { ...copyOfSeries[seriesIndex], stages: copyOfStages }
          _newConfig.series = copyOfSeries
        }
      } else if (type === 'twoColor') {
        // Two-color palette selection
        if (!_newConfig.twoColor) {
          _newConfig.twoColor = { palette: '', isPaletteReversed: false }
        }
        _newConfig.twoColor.palette = palette
      } else {
        // General palette selection (type === 'general' or undefined for backwards compatibility)
        if (!_newConfig.general) {
          _newConfig.general = {}
        }
        if (!_newConfig.general.palette) {
          _newConfig.general.palette = {}
        }
        _newConfig.general.palette.name = palette
      }

      // Keep the current palette version
      if (!_newConfig.general) {
        _newConfig.general = {}
      }
      if (!_newConfig.general.palette) {
        _newConfig.general.palette = {}
      }
      _newConfig.general.palette.version = config.general?.palette?.version || '1.0'
      updateConfig(_newConfig)
    }
    setShowConversionModal(false)
    setPendingPaletteSelection(null)
  }

  const validateMaxValue = () => {
    const enteredValue = config[section].max
    const enteredRightMax = config[section].rightMax

    let message = ''
    let rightMaxMessage = ''

    if (config.visualizationType !== 'Combo') {
      switch (true) {
        case enteredValue && parseFloat(enteredValue) < parseFloat(maxValue) && existPositiveValue:
          message = 'Max value must be more than ' + maxValue
          break
        case enteredValue && parseFloat(enteredValue) < 0 && !existPositiveValue:
          message = 'Value must be more than or equal to 0'
          break
        default:
          message = ''
      }
    }

    if (config.visualizationType === 'Combo') {
      switch (true) {
        case enteredValue && parseFloat(enteredValue) < leftMax:
          message = 'Max value must be more than ' + leftMax
          break
        case enteredRightMax && parseFloat(enteredRightMax) < rightMax:
          rightMaxMessage = 'Max value must be more than ' + rightMax
          break
        case enteredValue && parseFloat(enteredValue) < 0 && !existPositiveValue:
          message = 'Value must be more than or equal to 0'
          break
        default:
          message = ''
      }
    }

    setWarningMsg(prevMsg => ({ ...prevMsg, maxMsg: message, rightMaxMessage: rightMaxMessage }))
  }

  const validateMinValue = () => {
    const enteredValue = parseFloat(config[section].min)
    let minVal = Number(minValue)
    let message = ''

    switch (true) {
      case config.useLogScale && ['Line', 'Combo', 'Bar'].includes(config.visualizationType) && enteredValue < 0:
        message = 'Negative numbers are not supported in logarithmic scale'
        break
      case (config.visualizationType === 'Line' || config.visualizationType === 'Spark Line') && enteredValue > minVal:
        message = 'Value should not exceed ' + minValue
        break
      case config.visualizationType === 'Combo' && isAllLine && enteredValue > minVal:
        message = 'Value should not exceed ' + minValue
        break
      case (config.visualizationType === 'Bar' || (config.visualizationType === 'Combo' && !isAllLine)) &&
        minVal > 0 &&
        enteredValue > 0:
        message = config.useLogScale ? 'Value must be equal to 0' : 'Value must be less than or equal to 0'
        break
      case config.visualizationType === 'Deviation Bar' && enteredValue >= Math.min(minVal, config.xAxis.target):
        message = 'Value must be less than ' + Math.min(minVal, config.xAxis.target)
        break
      case config.visualizationType !== 'Deviation Bar' && enteredValue && minVal < 0 && enteredValue > minVal:
        message = 'Value should not exceed ' + minValue
        break
      default:
        message = ''
    }
    setWarningMsg(prevMsg => ({ ...prevMsg, minMsg: message }))
  }
  useEffect(() => {
    validateMinValue()
    validateMaxValue()
  }, [minValue, maxValue, config]) // eslint-disable-line

  const isLoadedFromUrl = config?.dataKey?.includes('http://') || config?.dataKey?.includes('https://')

  // if isDebug = true, then try to set the category and data col to reduce clicking
  const setCategoryAxis = () => {
    // only for debug mode
    if (undefined !== isDebug && isDebug && !config?.xAxis?.dataKey) {
      // then try to set the x axis to appropriate value so we dont have to manually do it
      let datakeys = getColumns(false)
      if (datakeys.includes('Date')) return 'Date'
      if (datakeys.includes('Race')) return 'Race'
      if (datakeys.includes('Month')) return 'Month'
      // add other known Category cols here to extend debug
    }
    return config?.xAxis?.dataKey || ''
  }
  const setDataColumn = () => {
    // only for debug mode
    if (undefined !== isDebug && isDebug && getColumns(false).length > 0) {
      // then try to set the x axis to appropriate value so we dont have to manually do it
      let datacols = getColumns(false).filter(x => x !== setCategoryAxis())
      if (datacols.length > 0) {
        return datacols[0]
      }
    }
    return ''
  }
  if (isDebug && !config.xAxis.dataKey) config.xAxis.dataKey = setCategoryAxis()
  if (isDebug && config?.series?.length === 0) {
    let setdatacol = setDataColumn()
    if (setdatacol !== '') addNewSeries(setdatacol)
    if (isDebug) console.log('### COVE DEBUG: Chart: Setting default datacol=', setdatacol) // eslint-disable-line
  }

  const chartsWithOptions = [
    'Bump Chart',
    'Area Chart',
    'Combo',
    'HeatMap',
    'Line',
    'Bar',
    'Forecasting',
    'Scatter Plot',
    'Paired Bar',
    'Deviation Bar'
  ]

  const removeAdditionalColumn = columnName => {
    const newColumns = cloneDeep(config.columns)

    delete newColumns[columnName]

    updateConfig({
      ...config,
      columns: newColumns
    })
  }

  const editColumn = async (addCol, columnName, setval) => {
    // not using special classes like in map editorpanel so removed those cases
    switch (columnName) {
      case 'name':
        updateConfig({
          ...config,
          columns: {
            ...config.columns,
            [addCol]: {
              ...config.columns[addCol],
              [columnName]: setval
            }
          }
        })
        break
      default:
        updateConfig({
          ...config,
          columns: {
            ...config.columns,
            [addCol]: {
              ...config.columns[addCol],
              [columnName]: setval
            }
          }
        })
        break
    }
  }

  const updateSeriesTooltip = (column, event) => {
    let updatedColumns = config.columns

    updatedColumns[column].tooltips = event

    updateConfig({
      ...config,
      columns: updatedColumns
    })
  }

  const colorCodeByCategory =
    config.visualizationType === 'Bar' &&
    config.visualizationSubType === 'regular' &&
    config.runtime.seriesKeys.length === 1
  const supportsLegendColorCategory = visHasLegendColorCategory()
  const legendIsolateOptions =
    visHasSelectableLegendValues && config.legend.behavior === 'isolate' && !colorCodeByCategory
      ? getColumns(false).filter(d => d !== config.xAxis.dataKey)
      : []

  const updateSeriesIsolateValues = updatedValues => {
    updateConfig({ ...config, legend: { ...config.legend, seriesHighlight: updatedValues } })
  }

  const updateLegendBehavior = newValue => {
    const legend = { ...config.legend, behavior: newValue }
    const updatedConfig = { ...config, legend }

    if (newValue === 'highlight' && config.legend.seriesHighlight?.length) {
      updatedConfig.legend.seriesHighlight.length = 0
    }

    updateConfig(updatedConfig)
  }

  const updateLegendField = (field: LegendField, value: unknown, subsection?: 'hideBorder') =>
    updateFieldDeprecated('legend', subsection || null, field, value)

  const updateViewportOverrides = (property, viewport, numTicks) => {
    const propertyObject = { ...config.xAxis[property] }
    propertyObject[viewport] = numTicks
    const updatedConfig = { ...config, xAxis: { ...config.xAxis, [property]: propertyObject } }

    updateConfig(updatedConfig)
  }

  const handleConfidenceKeyChange = (fieldName: 'upper' | 'lower', columnName: string) => {
    const updatedConfig = cloneConfig(config)
    updatedConfig.confidenceKeys[fieldName] = columnName

    // Auto-add confidence key column to tooltips and data table
    if (columnName) {
      const existingColumn = updatedConfig.columns[columnName]
      const baseColumnProps = { dataTable: true, tooltips: true }
      updatedConfig.columns = {
        ...updatedConfig.columns,
        [columnName]: existingColumn
          ? { ...existingColumn, ...baseColumnProps }
          : {
              name: columnName,
              label: columnName,
              ...baseColumnProps
            }
      }
    }

    updateConfig(updatedConfig)
  }

  const updateDataSeriesRootField = (field: DataSeriesRootField, value: unknown) =>
    updateFieldDeprecated(null, null, field, value)

  const updateRankByValue = (value: ChartConfig['rankByValue']) => {
    const [newConfig, newData] = updateFieldRankByValue(config, value, data)
    updateConfig(newConfig, newData)
  }

  const hasDynamicCategory = ![undefined, '- Select - '].includes(config.series?.[0]?.dynamicCategory)
  const hasMultipleSeries = config.series?.length > 1

  const highlightedSeriesOptions = useMemo(() => {
    if (
      !(
        config.visualizationType === 'Bar' &&
        config.series?.length === 1 &&
        config.highlightedBarValues?.length > 0 &&
        getHighlightedSeriesValues
      )
    ) {
      return []
    }

    return [...new Set(getHighlightedSeriesValues())].sort().map(option => ({ value: option, label: option }))
  }, [
    config.visualizationType,
    config.series?.length,
    config.highlightedBarValues?.length,
    config.data,
    config.xAxis.dataKey
  ])

  const supportsDynamicSeries = visSupportsDynamicSeries()
  const supportsRankByValue = visSupportsRankByValue()
  const supportsPreliminaryData = visSupportsPreliminaryData()
  const dataSeriesSectionContextValue = useMemo<DataSeriesSectionContextValue>(
    () => ({
      model: {
        visualizationType: config.visualizationType,
        isLollipopChart: config.isLollipopChart,
        dynamicSeries: config.dynamicSeries,
        dynamicSeriesType: config.dynamicSeriesType,
        dynamicSeriesLineType: config.dynamicSeriesLineType,
        series: config.series,
        confidenceKeys: config.confidenceKeys,
        rankByValue: config.rankByValue,
        supportsDynamicSeries,
        supportsRankByValue,
        seriesOptions: getColumns().filter(column => column !== config.xAxis?.dataKey),
        columnOptions: getColumns(),
        curveOptions: Object.values(approvedCurveTypes)
      },
      onRootFieldChange: updateDataSeriesRootField,
      onAddSeries: addNewSeries,
      onReorderSeries: handleSeriesChange,
      onConfidenceKeyChange: handleConfidenceKeyChange,
      onRankByValueChange: updateRankByValue,
      getColumns,
      handleForecastPaletteSelection,
      renderSeriesItem: (series, index) => (
        <Panels.Series.Item
          getItemStyle={getItemStyle}
          sortableItemStyles={sortableItemStyles}
          chartsWithOptions={chartsWithOptions}
          series={series}
          index={index}
          key={`series-list-${index}`}
        />
      ),
      preliminaryDataEditor: supportsPreliminaryData ? (
        <PreliminaryData config={config} updateConfig={updateConfig} data={data} />
      ) : null
    }),
    [config, data, getColumns, supportsDynamicSeries, supportsRankByValue, supportsPreliminaryData, updateConfig]
  )

  const pieDataFormatSectionContextValue = useMemo<PieDataFormatSectionContextValue>(
    () => ({
      model: {
        dataKey: config.yAxis.dataKey,
        label: config.yAxis.label,
        columnOptions: getColumns(false),
        commas: config.dataFormat.commas,
        abbreviated: config.dataFormat.abbreviated,
        showPiePercent: config.dataFormat.showPiePercent,
        roundTo: config.dataFormat.roundTo,
        preserveOriginalDecimals: config.dataFormat.preserveOriginalDecimals,
        prefix: config.dataFormat.prefix,
        suffix: config.dataFormat.suffix
      },
      onYAxisChange: (field: PieYAxisField, value: unknown) => updateFieldDeprecated('yAxis', null, field, value),
      onDataFormatChange: (field: PieDataFormatField, value: unknown) =>
        updateFieldDeprecated('dataFormat', null, field, value)
    }),
    [config, getColumns]
  )

  const valueAxisControlsContextValue = useMemo<ValueAxisControlsContextValue>(
    () => ({
      model: {
        visualizationType: config.visualizationType,
        visualizationSubType: config.visualizationSubType,
        orientation: config.orientation,
        isBarRace,
        hasCategoricalAxis: visHasCategoricalAxis(),
        seriesCount: config.runtime.seriesKeys?.length || 0,
        yAxis: {
          type: config.yAxis.type,
          categoryMode: config.yAxis.categoryMode,
          dataDrivenCategories: config.yAxis.dataDrivenCategories,
          label: config.yAxis.label,
          titlePlacement: config.yAxis.titlePlacement,
          inlineLabel: config.yAxis.inlineLabel,
          size: config.yAxis.size,
          hideAxis: config.yAxis.hideAxis,
          hideLabel: config.yAxis.hideLabel,
          hideTicks: config.yAxis.hideTicks,
          tickRotation: config.yAxis.tickRotation,
          numTicks: config.yAxis.numTicks,
          gridLines: config.yAxis.gridLines,
          labelsAboveGridlines: config.yAxis.labelsAboveGridlines,
          smallestLeftAxisMax: config.yAxis.smallestLeftAxisMax,
          autoMaxStrategy: config.yAxis.autoMaxStrategy,
          filterDomainBehavior: config.yAxis.filterDomainBehavior,
          max: config.yAxis.max,
          min: config.yAxis.min,
          enablePadding: config.yAxis.enablePadding,
          scalePadding: config.yAxis.scalePadding
        },
        xAxis: {
          maxTickRotation: config.xAxis.maxTickRotation,
          hideAxis: config.xAxis.hideAxis,
          hideLabel: config.xAxis.hideLabel,
          hideTicks: config.xAxis.hideTicks,
          max: config.xAxis.max,
          min: config.xAxis.min,
          target: config.xAxis.target,
          targetLabel: config.xAxis.targetLabel,
          showTargetLabel: config.xAxis.showTargetLabel
        },
        dataFormat: {
          commas: config.dataFormat.commas,
          abbreviated: config.dataFormat.abbreviated,
          roundTo: config.dataFormat.roundTo,
          preserveOriginalDecimals: config.dataFormat.preserveOriginalDecimals,
          prefix: config.dataFormat.prefix,
          suffix: config.dataFormat.suffix
        },
        root: {
          isLegendValue: config.isLegendValue,
          isResponsiveTicks: config.isResponsiveTicks
        },
        warnings: { max: warningMsg.maxMsg, min: warningMsg.minMsg },
        permissions: {
          gridLines: visSupportsValueAxisGridLines(),
          axisLine: visSupportsValueAxisLine(),
          axisLabels: visSupportsValueAxisLabels(),
          axisTicks: visSupportsValueAxisTicks(),
          axisMax: visSupportsValueAxisMax(),
          axisMin: visSupportsValueAxisMin(),
          autoMaxStrategy: visSupportsAutoMaxStrategy(),
          filterDomainBehavior: visSupportsFilterDomainBehavior(),
          yPadding: visSupportsYPadding()
        },
        categoricalAxisEditor: (
          <CategoricalAxis config={config} updateConfig={updateConfig} data={data} display={visHasCategoricalAxis()} />
        ),
        anchorEditor: visHasAnchors() ? (
          <AxisAnchorEditor
            axisKey={config.orientation === 'horizontal' ? 'xAxis' : 'yAxis'}
            config={config}
            lineOptions={lineOptions}
            updateConfig={updateConfig}
          />
        ) : null
      },
      onLegacyYAxisChange: (field: ValueAxisYAxisField, value: unknown) =>
        updateFieldDeprecated('yAxis', null, field, value),
      onCurrentYAxisChange: (field: 'titlePlacement' | 'inlineLabel', value: unknown) =>
        updateField('yAxis', null, field, value),
      onLegacyXAxisChange: (field: ValueAxisXAxisField, value: unknown) =>
        updateFieldDeprecated('xAxis', null, field, value),
      onDataFormatChange: (field: ValueAxisDataFormatField, value: unknown) =>
        updateFieldDeprecated('dataFormat', null, field, value),
      onRootChange: (field: ValueAxisRootField, value: unknown) => updateFieldDeprecated(null, null, field, value),
      onAxisTypeChange: value => {
        const isDataDriven = value === 'categorical-data-driven'
        const isCategorical = value === 'categorical' || isDataDriven
        const nextYAxis = {
          ...config.yAxis,
          type: isCategorical ? 'categorical' : value
        }

        if (isDataDriven) {
          nextYAxis.categoryMode = 'data-driven'
          nextYAxis.dataDrivenCategories = config.yAxis.dataDrivenCategories || {
            categories: [],
            manualCategories: config.yAxis.categories || []
          }
          nextYAxis.categories = []
        } else if (isCategorical) {
          nextYAxis.categoryMode = 'manual'
          nextYAxis.categories = config.yAxis.dataDrivenCategories?.manualCategories || config.yAxis.categories || []
        } else {
          delete nextYAxis.categoryMode
        }

        updateConfig({ ...config, yAxis: nextYAxis })
      }
    }),
    [config, data, isBarRace, lineOptions, updateConfig, warningMsg]
  )

  const editorContextValues = {
    addNewExclusion,
    data,
    editColumn,
    getColumns,
    getDataValueOptions,
    getDataValues,
    getItemStyle,
    handleSeriesChange,
    handleAddNewHighlightedBar,
    setCategoryAxis,
    updateField: updateFieldDeprecated,
    warningMsg,
    highlightedBarValues,
    handleHighlightedBarLegendLabel,
    handleUpdateHighlightedBar,
    handleRemoveHighlightedBar,
    isPaletteReversed: config.general?.palette?.isReversed,
    getHighlightedSeriesValues,
    handleUpdateHighlightedBorderWidth,
    handleUpdateHighlightedBarColor,
    setLollipopShape,
    handlePaletteSelection,
    handleTwoColorPaletteSelection,
    handleForecastPaletteSelection
  }
  if (isLoading) {
    return <></>
  }

  if (isLoading) {
    return null
  }

  // Custom convertStateToConfig for chart that preserves newViz when required sections are missing
  const customConvertStateToConfig = () => {
    let strippedState = cloneConfig(config)
    if (false === missingRequiredSections(config)) {
      delete strippedState.newViz
    }
    delete strippedState.runtime
    return strippedState
  }

  const renderHeatMapSettingsAccordion = () => {
    if (config.visualizationType !== 'HeatMap') return null

    return (
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>HeatMap Settings</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p className='helper-text'>Selected data series columns provide the heatmap cell values.</p>
          <CheckBox
            value={Boolean(config.heatmap?.showCellValues ?? HEATMAP_CONFIG_DEFAULTS.showCellValues)}
            section='heatmap'
            fieldName='showCellValues'
            label='Show Cell Values'
            updateField={updateFieldDeprecated}
          />
          <CheckBox
            value={Boolean(config.heatmap?.horizontalScroll ?? HEATMAP_CONFIG_DEFAULTS.horizontalScroll)}
            section='heatmap'
            fieldName='horizontalScroll'
            label='Enable Horizontal Scrolling'
            updateField={updateFieldDeprecated}
          />
          {Boolean(config.heatmap?.horizontalScroll ?? HEATMAP_CONFIG_DEFAULTS.horizontalScroll) && (
            <TextField
              value={config.heatmap?.minColumnWidth ?? HEATMAP_CONFIG_DEFAULTS.minColumnWidth}
              type='number'
              min={MIN_HEATMAP_COLUMN_WIDTH}
              max={MAX_HEATMAP_COLUMN_WIDTH}
              section='heatmap'
              fieldName='minColumnWidth'
              label='Minimum Column Width'
              updateField={updateFieldDeprecated}
            />
          )}
          <TextField
            value={config.heatmap?.cellPadding ?? HEATMAP_CONFIG_DEFAULTS.cellPadding}
            type='number'
            min={0}
            section='heatmap'
            fieldName='cellPadding'
            label='Cell Padding'
            updateField={updateFieldDeprecated}
            tooltip={
              <Tooltip style={{ textTransform: 'none' }}>
                <Tooltip.Target>
                  <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                </Tooltip.Target>
                <Tooltip.Content>To adjust cell height, use Chart Height in the General panel.</Tooltip.Content>
              </Tooltip>
            }
          />
          <TextField
            value={config.heatmap?.rowLabelGap ?? HEATMAP_CONFIG_DEFAULTS.rowLabelGap}
            type='number'
            min={0}
            section='heatmap'
            fieldName='rowLabelGap'
            label='Row Label Gap'
            updateField={updateFieldDeprecated}
          />
          <TextField
            value={config.heatmap?.columnLabelGap ?? HEATMAP_CONFIG_DEFAULTS.columnLabelGap}
            type='number'
            min={0}
            section='heatmap'
            fieldName='columnLabelGap'
            label='Column Label Gap'
            updateField={updateFieldDeprecated}
          />
          <TextField
            value={config.heatmap?.colorBucketCount ?? HEATMAP_CONFIG_DEFAULTS.colorBucketCount}
            type='number'
            min={MIN_HEATMAP_COLOR_BUCKETS}
            max={MAX_HEATMAP_COLOR_BUCKETS}
            step={1}
            section='heatmap'
            fieldName='colorBucketCount'
            label='Data Grouping'
            updateField={updateFieldDeprecated}
            tooltip={
              <Tooltip style={{ textTransform: 'none' }}>
                <Tooltip.Target>
                  <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                </Tooltip.Target>
                <Tooltip.Content>
                  Choose the number of value groups used to color the heatmap. Values are limited to 1-9.
                </Tooltip.Content>
              </Tooltip>
            }
          />
        </AccordionItemPanel>
      </AccordionItem>
    )
  }

  return (
    <EditorPanelContext.Provider value={editorContextValues}>
      <BaseEditorPanel
        config={config}
        updateConfig={updateConfig as (config: any) => void}
        loading={isLoading}
        setParentConfig={setParentConfig as ((config: any) => void) | undefined}
        isDashboard={isDashboard}
        title='Configure Chart'
      >
        {({ displayPanel, convertStateToConfig }) => {
          // Use custom convertStateToConfig for chart-specific logic
          const chartConvertStateToConfig = customConvertStateToConfig

          return (
            <>
              <Accordion allowZeroExpanded={true}>
                <Panels.General name='General' />
                <Panels.ForestPlot name='Forest Plot Settings' />
                <Panels.Sankey name='Sankey' />
                <Panels.Network name='Network' />
                <Panels.Dendrogram name='Dendrogram' />
                {config.visualizationType !== 'Pie' &&
                  config.visualizationType !== 'Forest Plot' &&
                  !['Sankey', 'Network', 'Dendrogram'].includes(config.visualizationType) && (
                    <DataSeriesSectionProvider value={dataSeriesSectionContextValue}>
                      <DataSeriesSection />
                    </DataSeriesSectionProvider>
                  )}
                <Panels.BoxPlot name='Measures' />
                <Panels.Radar name='Radar Chart Settings' />
                {/* Left Value Axis */}
                {visSupportsLeftValueAxis() && (
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton
                        data-required-field-section={config.visualizationType === 'Pie' ? 'pie-data-column' : undefined}
                      >
                        {config.visualizationType === 'Pie'
                          ? 'Data Format'
                          : config.orientation === 'vertical'
                          ? 'Left Value Axis'
                          : 'Value Axis'}
                        {config.visualizationType === 'Pie' && !config.yAxis.dataKey ? (
                          <WarningImage width='25' className='warning-icon' />
                        ) : null}
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      {config.visualizationType === 'Pie' && (
                        <PieDataFormatSectionProvider value={pieDataFormatSectionContextValue}>
                          <PieDataFormatSection />
                        </PieDataFormatSectionProvider>
                      )}
                      {config.visualizationType !== 'Pie' && (
                        <ValueAxisControlsProvider value={valueAxisControlsContextValue}>
                          <ValueAxisControls />
                        </ValueAxisControlsProvider>
                      )}
                    </AccordionItemPanel>
                  </AccordionItem>
                )}
                {/* Right Value Axis Settings */}
                {visSupportsRightValueAxis() && (
                  <RightValueAxisSection
                    model={{
                      rightLabel: config.yAxis.rightLabel,
                      rightTitlePlacement: config.yAxis.rightTitlePlacement,
                      rightNumTicks: config.yAxis.rightNumTicks,
                      rightCommas: config.dataFormat.rightCommas,
                      rightRoundTo: config.dataFormat.rightRoundTo,
                      rightPrefix: config.dataFormat.rightPrefix,
                      rightSuffix: config.dataFormat.rightSuffix,
                      rightHideAxis: config.yAxis.rightHideAxis,
                      rightHideLabel: config.yAxis.rightHideLabel,
                      rightHideTicks: config.yAxis.rightHideTicks,
                      rightMax: config.yAxis.rightMax,
                      rightMin: config.yAxis.rightMin,
                      smallestRightAxisMax: config.yAxis.smallestRightAxisMax,
                      rightMaxMessage: warningMsg.rightMaxMessage,
                      rightMinMessage: warningMsg.minMsg
                    }}
                    onYAxisChange={updateRightYAxisField}
                    onDataFormatChange={updateRightDataFormatField}
                    onTitlePlacementChange={updateRightTitlePlacement}
                    anchorEditor={
                      <AxisAnchorEditor
                        axisKey='yAxis'
                        anchorField='rightAnchors'
                        config={config}
                        lineOptions={lineOptions}
                        updateConfig={updateConfig}
                      />
                    }
                  />
                )}
                {visSupportsDateCategoryAxis() && (
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton
                        data-required-field-section={
                          config.visualizationType === 'Pie' ? 'pie-segments' : 'date-category-axis'
                        }
                      >
                        {config.visualizationType === 'Pie' ? 'Segments' : 'Date/Category Axis'}
                        {!config.xAxis.dataKey && <WarningImage width='25' className='warning-icon' />}
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      {config.visualizationType !== 'Pie' && (
                        <>
                          {config.visualizationType !== 'Forest Plot' && (
                            <>
                              <Select
                                display={!isBarRace}
                                label='Data Scaling Type'
                                tooltip={
                                  <Tooltip style={{ textTransform: 'none', display: 'inline-block' }}>
                                    <Tooltip.Target>
                                      <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                                    </Tooltip.Target>
                                    <Tooltip.Content>
                                      Linear scales are employed for quantitative data, while time scales are used for
                                      time-series data.
                                    </Tooltip.Content>
                                  </Tooltip>
                                }
                                value={config.xAxis.type}
                                options={[
                                  ...(!['Bump Chart', 'Forecasting'].includes(config.visualizationType)
                                    ? [{ label: 'Categorical (Linear Scale)', value: 'categorical' }]
                                    : []),
                                  ...(!['Bump Chart'].includes(config.visualizationType)
                                    ? [{ label: 'Date (Linear Scale)', value: 'date' }]
                                    : []),
                                  { label: 'Date (Date Time Scale)', value: 'date-time' },
                                  ...(config.visualizationType === 'Scatter Plot'
                                    ? [{ label: 'Continuous', value: 'continuous' }]
                                    : [])
                                ]}
                                section='xAxis'
                                fieldName='type'
                                updateField={(_section, _subsection, _fieldName, value) => {
                                  const autoDetectedDateParseFormat = getAutoDetectedXAxisDateParseFormat(
                                    config.xAxis.dataKey,
                                    value
                                  )

                                  updateConfig({
                                    ...config,
                                    xAxis: {
                                      ...config.xAxis,
                                      type: value,
                                      ...(value !== 'categorical'
                                        ? { categoryOrder: [], categoryOrderType: 'data' }
                                        : {}),
                                      ...(autoDetectedDateParseFormat
                                        ? { dateParseFormat: autoDetectedDateParseFormat }
                                        : {})
                                    }
                                  })
                                }}
                              />
                              {config.visualizationType !== 'HeatMap' && !isBarRace && (
                                <CheckBox
                                  value={config.xAxis.manual}
                                  section='xAxis'
                                  fieldName='manual'
                                  label='Manual Ticks'
                                  updateField={updateFieldDeprecated}
                                />
                              )}
                              <CheckBox
                                display={config.xAxis.type !== 'categorical'}
                                value={config.xAxis.sortByRecentDate}
                                section='xAxis'
                                fieldName='sortByRecentDate'
                                label='Show dates newest to oldest'
                                updateField={updateFieldDeprecated}
                              />

                              {visSupportsDateCategoryAxisPadding() && (
                                <TextField
                                  value={config.xAxis.padding}
                                  type='number'
                                  min={0}
                                  section='xAxis'
                                  fieldName='padding'
                                  label={'Padding (Percent)'}
                                  className='number-narrow'
                                  updateField={updateFieldDeprecated}
                                  tooltip={
                                    <Tooltip style={{ textTransform: 'none' }}>
                                      <Tooltip.Target>
                                        <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                                      </Tooltip.Target>
                                      <Tooltip.Content>
                                        <p>
                                          For use with date scale. Extends the earliest and latest dates represented on
                                          the scale by the percentage specified.
                                        </p>
                                      </Tooltip.Content>
                                    </Tooltip>
                                  }
                                />
                              )}
                            </>
                          )}
                          <Select
                            value={config.xAxis.dataKey || setCategoryAxis() || ''}
                            section='xAxis'
                            fieldName='dataKey'
                            label='Data Key'
                            data-required-field-control='date-category-axis'
                            initial='Select'
                            required={true}
                            updateField={updateFieldDeprecated}
                            options={getColumns(false)}
                            tooltip={
                              <Tooltip style={{ textTransform: 'none' }}>
                                <Tooltip.Target>
                                  <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                                </Tooltip.Target>
                                <Tooltip.Content>
                                  <p>Select the column or row containing the categories or dates for this axis. </p>
                                </Tooltip.Content>
                              </Tooltip>
                            }
                          />
                          <CategoryOrderControls
                            axisType={config.xAxis?.type}
                            categoryOrder={config.xAxis?.categoryOrder}
                            categoryOrderType={config.xAxis?.categoryOrderType}
                            data={excludedData as Record<string, any>[]}
                            dataKey={config.xAxis?.dataKey}
                            onOrderChange={updateCategoryOrder}
                            onOrderTypeChange={updateCategoryOrderType}
                          />
                        </>
                      )}

                      {config.visualizationType === 'Pie' && (
                        <>
                          <Select
                            value={config.xAxis.dataKey || ''}
                            section='xAxis'
                            fieldName='dataKey'
                            label='Segment Labels'
                            data-required-field-control='pie-segments'
                            initial='Select'
                            required={true}
                            updateField={updateFieldDeprecated}
                            options={getColumns(false)}
                            tooltip={
                              <Tooltip style={{ textTransform: 'none' }}>
                                <Tooltip.Target>
                                  <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                                </Tooltip.Target>
                                <Tooltip.Content>
                                  <p>
                                    Select the source row or column that contains the segment labels. Depending on the
                                    data structure, it may be listed as "Key."
                                  </p>
                                </Tooltip.Content>
                              </Tooltip>
                            }
                          />
                          <CategoryOrderControls
                            axisType={config.xAxis?.type}
                            categoryOrder={config.xAxis?.categoryOrder}
                            categoryOrderType={config.xAxis?.categoryOrderType}
                            data={excludedData as Record<string, any>[]}
                            dataKey={config.xAxis?.dataKey}
                            label='Segment Order'
                            onOrderChange={updateCategoryOrder}
                            onOrderTypeChange={updateCategoryOrderType}
                          />
                        </>
                      )}

                      {config.visualizationType !== 'Pie' && (
                        <>
                          <TextField
                            value={config.xAxis.label}
                            section='xAxis'
                            fieldName='label'
                            label='Label'
                            updateField={updateFieldDeprecated}
                            maxLength={
                              config.orientation === 'horizontal' && config.yAxis.titlePlacement === 'top'
                                ? undefined
                                : 35
                            }
                            tooltip={
                              <Tooltip style={{ textTransform: 'none' }}>
                                <Tooltip.Target>
                                  <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                                </Tooltip.Target>
                                <Tooltip.Content>
                                  <p>
                                    {config.orientation === 'horizontal'
                                      ? '35 character limit when Label Placement is Side'
                                      : '35 character limit'}
                                  </p>
                                </Tooltip.Content>
                              </Tooltip>
                            }
                          />
                          <Select
                            display={config.orientation === 'horizontal' && !isBarRace}
                            value={config.yAxis.titlePlacement}
                            section='yAxis'
                            fieldName='titlePlacement'
                            label='Label Placement'
                            updateField={updateField}
                            options={[
                              { value: 'side', label: 'Side' },
                              { value: 'top', label: 'Top' }
                            ]}
                          />
                          {config.visualizationType === 'HeatMap' && (
                            <Select
                              value={config.heatmap?.xAxisPosition ?? HEATMAP_CONFIG_DEFAULTS.xAxisPosition}
                              section='heatmap'
                              fieldName='xAxisPosition'
                              label='X-Axis Position'
                              updateField={updateFieldDeprecated}
                              options={['top', 'bottom']}
                            />
                          )}

                          {config.xAxis.type === 'continuous' && (
                            <>
                              <TextField
                                value={config.dataFormat.bottomPrefix}
                                section='dataFormat'
                                fieldName='bottomPrefix'
                                label='Prefix'
                                updateField={updateFieldDeprecated}
                                tooltip={
                                  <Tooltip style={{ textTransform: 'none' }}>
                                    <Tooltip.Target>
                                      <Icon
                                        display='question'
                                        style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }}
                                      />
                                    </Tooltip.Target>
                                    <Tooltip.Content>
                                      <p>Enter a data prefix (such as "$"), if applicable.</p>
                                    </Tooltip.Content>
                                  </Tooltip>
                                }
                              />

                              <TextField
                                value={config.dataFormat.bottomSuffix}
                                section='dataFormat'
                                fieldName='bottomSuffix'
                                label='Suffix'
                                updateField={updateFieldDeprecated}
                                tooltip={
                                  <Tooltip style={{ textTransform: 'none' }}>
                                    <Tooltip.Target>
                                      <Icon
                                        display='question'
                                        style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }}
                                      />
                                    </Tooltip.Target>
                                    <Tooltip.Content>
                                      <p>Enter a data suffix (such as "%"), if applicable.</p>
                                    </Tooltip.Content>
                                  </Tooltip>
                                }
                              />

                              <CheckBox
                                value={config.dataFormat.bottomAbbreviated}
                                section='dataFormat'
                                fieldName='bottomAbbreviated'
                                label='Abbreviate Axis Values'
                                updateField={updateFieldDeprecated}
                                tooltip={
                                  <Tooltip style={{ textTransform: 'none' }}>
                                    <Tooltip.Target>
                                      <Icon
                                        display='question'
                                        style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }}
                                      />
                                    </Tooltip.Target>
                                    <Tooltip.Content>
                                      <p>{`This option abbreviates very large or very small numbers on the value axis`}</p>
                                    </Tooltip.Content>
                                  </Tooltip>
                                }
                              />
                            </>
                          )}

                          {(isDateScale(config.xAxis) ||
                            config?.visualizationType === 'Bump Chart' ||
                            config?.visualizationType === 'Forecasting') && (
                            <>
                              <p style={{ padding: '1.5em 0 0.5em', fontSize: '.9rem', lineHeight: '1rem' }}>
                                Format how charts should parse and display your dates using{' '}
                                <a
                                  href='https://d3js.org/d3-time-format#locale_format'
                                  target='_blank'
                                  rel='noreferrer'
                                >
                                  these guidelines
                                </a>
                                .
                              </p>
                              <TextField
                                tooltip={
                                  <Tooltip style={{ textTransform: 'none' }}>
                                    <Tooltip.Target>
                                      <Icon
                                        display='question'
                                        style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }}
                                      />
                                    </Tooltip.Target>
                                    <Tooltip.Content>
                                      <p>
                                        This field specifies the pattern used to read and interpret dates in your
                                        dataset, ensuring the dates are correctly understood and processed.{' '}
                                      </p>
                                    </Tooltip.Content>
                                  </Tooltip>
                                }
                                value={config.xAxis.dateParseFormat}
                                section='xAxis'
                                fieldName='dateParseFormat'
                                placeholder='Ex. %Y-%m-%d'
                                label='Date Parse Format'
                                updateField={updateFieldDeprecated}
                              />
                              <TextField
                                tooltip={
                                  <Tooltip style={{ textTransform: 'none' }}>
                                    <Tooltip.Target>
                                      <Icon
                                        display='question'
                                        style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }}
                                      />
                                    </Tooltip.Target>
                                    <Tooltip.Content>
                                      <p>
                                        {' '}
                                        Adjusts the date display format on the axis for clear, visual date
                                        representation.
                                      </p>
                                    </Tooltip.Content>
                                  </Tooltip>
                                }
                                value={config.xAxis.dateDisplayFormat}
                                section='xAxis'
                                fieldName='dateDisplayFormat'
                                placeholder='Ex. %Y-%m-%d'
                                label='AXIS DATE DISPLAY FORMAT'
                                updateField={updateFieldDeprecated}
                              />
                              <TextField
                                tooltip={
                                  <Tooltip style={{ textTransform: 'none' }}>
                                    <Tooltip.Target>
                                      <Icon
                                        display='question'
                                        style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }}
                                      />
                                    </Tooltip.Target>
                                    <Tooltip.Content>
                                      <p>
                                        Specify a custom format for displaying dates in data table. If left empty, dates
                                        will adopt the Axis Date Display format.{' '}
                                      </p>
                                    </Tooltip.Content>
                                  </Tooltip>
                                }
                                value={config.table.dateDisplayFormat}
                                section='table'
                                fieldName='dateDisplayFormat'
                                placeholder='Ex. %Y-%m-%d'
                                label='DATA TABLE DATE DISPLAY FORMAT'
                                updateField={updateFieldDeprecated}
                              />
                              <TextField
                                tooltip={
                                  <Tooltip style={{ textTransform: 'none' }}>
                                    <Tooltip.Target>
                                      <Icon
                                        display='question'
                                        style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }}
                                      />
                                    </Tooltip.Target>
                                    <Tooltip.Content>
                                      <p>
                                        Specify a custom format for displaying dates on hovers. If left empty, dates
                                        will adopt the Axis Date Display format.{' '}
                                      </p>
                                    </Tooltip.Content>
                                  </Tooltip>
                                }
                                value={config.tooltips.dateDisplayFormat}
                                section='tooltips'
                                fieldName='dateDisplayFormat'
                                placeholder='Ex. %Y-%m-%d'
                                label='HOVER DATE DISPLAY FORMAT'
                                updateField={updateFieldDeprecated}
                              />
                            </>
                          )}
                          <CheckBox
                            value={config.exclusions.active}
                            section='exclusions'
                            fieldName='active'
                            label={
                              config.xAxis.type === 'date' || config.xAxis.type === 'date-time'
                                ? 'Limit by start and/or end dates'
                                : 'Exclude one or more values'
                            }
                            tooltip={
                              <Tooltip style={{ textTransform: 'none' }}>
                                <Tooltip.Target>
                                  <Icon
                                    display='question'
                                    style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }}
                                  />
                                </Tooltip.Target>
                                <Tooltip.Content>
                                  <p>
                                    When this option is checked, you can select source-file values for exclusion from
                                    the date/category axis.{' '}
                                  </p>
                                </Tooltip.Content>
                              </Tooltip>
                            }
                            updateField={updateFieldDeprecated}
                          />
                          <CheckBox
                            display={!isBarRace}
                            value={config.xAxis.showYearsOnce}
                            section='xAxis'
                            fieldName='showYearsOnce'
                            label='Show years once'
                            tooltip={
                              <Tooltip style={{ textTransform: 'none' }}>
                                <Tooltip.Target>
                                  <Icon
                                    display='question'
                                    style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }}
                                  />
                                </Tooltip.Target>
                                <Tooltip.Content>
                                  <p>
                                    When this option is checked and the date format for the axis includes years, each
                                    year will only be shown once in the axis.
                                  </p>
                                </Tooltip.Content>
                              </Tooltip>
                            }
                            updateField={updateFieldDeprecated}
                          />
                          {visHasBrushChart() && config.visualizationSubType !== 'racing' && (
                            <>
                              <CheckBox
                                value={config.xAxis.brushActive}
                                section='xAxis'
                                fieldName='brushActive'
                                label='Show Brush Slider '
                                updateField={updateFieldDeprecated}
                                tooltip={
                                  <Tooltip style={{ textTransform: 'none' }}>
                                    <Tooltip.Target>
                                      <Icon
                                        display='question'
                                        style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }}
                                      />
                                    </Tooltip.Target>
                                    <Tooltip.Content>
                                      <p>
                                        Use the brush slider to narrow down your data view to specific values along the
                                        axis. This tool is useful for examining detailed data segments within the larger
                                        dataset.{' '}
                                      </p>
                                    </Tooltip.Content>
                                  </Tooltip>
                                }
                              />
                              {config.xAxis.brushActive && (
                                <>
                                  <CheckBox
                                    value={config.xAxis.brushHideHatching === true}
                                    section='xAxis'
                                    fieldName='brushHideHatching'
                                    label='Hide diagonal hatching'
                                    className='ms-4'
                                    updateField={updateFieldDeprecated}
                                  />
                                  <CheckBox
                                    value={!!config.xAxis.brushDynamicYAxis}
                                    section='xAxis'
                                    fieldName='brushDynamicYAxis'
                                    label='Dynamic Y-Axis'
                                    className='ms-4'
                                    updateField={updateFieldDeprecated}
                                    tooltip={
                                      <Tooltip style={{ textTransform: 'none' }}>
                                        <Tooltip.Target>
                                          <Icon
                                            display='question'
                                            style={{
                                              marginLeft: '0.5rem',
                                              display: 'inline-block',
                                              whiteSpace: 'nowrap'
                                            }}
                                          />
                                        </Tooltip.Target>
                                        <Tooltip.Content>
                                          <p>
                                            When enabled, the Y-axis rescales to fit only the data visible in the
                                            current brush selection. When disabled, the Y-axis shows the full data
                                            range.
                                          </p>
                                        </Tooltip.Content>
                                      </Tooltip>
                                    }
                                  />
                                  <div className='ms-4 mt-2'>
                                    <TextField
                                      value={config.xAxis.brushDefaultRecentDateCount ?? ''}
                                      placeholder='Default (35%)'
                                      type='number'
                                      min={1}
                                      section='xAxis'
                                      fieldName='brushDefaultRecentDateCount'
                                      label='Show Last X Dates by Default'
                                      className='number-narrow'
                                      updateField={updateFieldDeprecated}
                                      tooltip={
                                        <Tooltip style={{ textTransform: 'none' }}>
                                          <Tooltip.Target>
                                            <Icon
                                              display='question'
                                              style={{
                                                marginLeft: '0.5rem',
                                                display: 'inline-block',
                                                whiteSpace: 'nowrap'
                                              }}
                                            />
                                          </Tooltip.Target>
                                          <Tooltip.Content>
                                            <p>
                                              When set, the brush slider will initially select this many recent data
                                              points instead of the default 35%. Leave empty to use the default
                                              percentage-based selection.
                                            </p>
                                          </Tooltip.Content>
                                        </Tooltip>
                                      }
                                    />
                                  </div>
                                </>
                              )}
                            </>
                          )}

                          {config.exclusions.active && (
                            <>
                              {config.xAxis.type === 'categorical' && (
                                <>
                                  {(config.exclusions?.keys?.length ?? 0) > 0 && (
                                    <>
                                      <fieldset>
                                        <legend className='edit-label'>Excluded Keys</legend>
                                      </fieldset>
                                      <ExclusionsList />
                                    </>
                                  )}

                                  <Select
                                    fieldName='visualizationType'
                                    label='Add Exclusion'
                                    initial='Select'
                                    onChange={e => {
                                      if (e.target.value !== '' && e.target.value !== 'Select') {
                                        addNewExclusion(e.target.value)
                                      }
                                      e.target.value = ''
                                    }}
                                    options={getAvailableExclusionValues(config.xAxis.dataKey)}
                                  />
                                </>
                              )}

                              {(config.xAxis.type === 'date' || config.xAxis.type === 'date-time') && (
                                <>
                                  <TextField
                                    type='date'
                                    section='exclusions'
                                    fieldName='dateStart'
                                    label='Start Date'
                                    updateField={updateFieldDeprecated}
                                    value={config.exclusions.dateStart || ''}
                                  />
                                  <TextField
                                    type='date'
                                    section='exclusions'
                                    fieldName='dateEnd'
                                    label='End Date'
                                    updateField={updateFieldDeprecated}
                                    value={config.exclusions.dateEnd || ''}
                                  />
                                </>
                              )}
                            </>
                          )}

                          {visSupportsDateCategoryNumTicks() &&
                            config.visualizationType !== 'HeatMap' &&
                            config.xAxis.type !== 'date-time' &&
                            config.xAxis.manual && (
                              <>
                                <TextField
                                  value={config.xAxis.manualStep}
                                  placeholder='Auto'
                                  type='number'
                                  min={1}
                                  section='xAxis'
                                  fieldName='manualStep'
                                  label='Step count'
                                  className='number-narrow'
                                  updateField={updateFieldDeprecated}
                                  tooltip={
                                    <Tooltip style={{ textTransform: 'none' }}>
                                      <Tooltip.Target>
                                        <Icon
                                          display='question'
                                          style={{
                                            marginLeft: '0.5rem',
                                            display: 'inline-block',
                                            whiteSpace: 'nowrap'
                                          }}
                                        />
                                      </Tooltip.Target>
                                      <Tooltip.Content>
                                        <p>
                                          Number of data points which are assigned a tick, starting from the right most
                                          data point. Value of 1 will show a tick at every data point, value of 2 will
                                          show a tick for every other, etc.
                                        </p>
                                      </Tooltip.Content>
                                    </Tooltip>
                                  }
                                />
                                <div className='viewport-overrides'>
                                  <label>
                                    <button
                                      onClick={() => setDisplayViewportOverrides(!displayViewportOverrides)}
                                      className='edit-label'
                                    >
                                      Step Count: viewport overrides{' '}
                                      <span
                                        style={{ transform: `rotate(${displayViewportOverrides ? '90deg' : '0deg'})` }}
                                      >
                                        &gt;
                                      </span>
                                    </button>
                                  </label>
                                  {displayViewportOverrides && (
                                    <div className='edit-block'>
                                      {Object.keys(viewports).map(viewport => (
                                        <TextField
                                          key={`viewport-step-count-input-${viewport}`}
                                          value={
                                            config.xAxis.viewportStepCount
                                              ? config.xAxis.viewportStepCount[viewport]
                                              : undefined
                                          }
                                          placeholder='Auto'
                                          type='number'
                                          label={viewport}
                                          className='number-narrow'
                                          updateField={(section, fieldName, label, val) =>
                                            updateViewportOverrides('viewportStepCount', viewport, val)
                                          }
                                        />
                                      ))}
                                    </div>
                                  )}
                                </div>
                              </>
                            )}
                          {visSupportsDateCategoryNumTicks() &&
                            (config.visualizationType === 'HeatMap' ||
                              config.xAxis.type === 'date-time' ||
                              !config.xAxis.manual) && (
                              <>
                                <TextField
                                  value={config.xAxis.numTicks}
                                  placeholder='Auto'
                                  type='number'
                                  min={1}
                                  section='xAxis'
                                  fieldName='numTicks'
                                  label='Number of ticks'
                                  className='number-narrow'
                                  updateField={updateFieldDeprecated}
                                  tooltip={
                                    <Tooltip style={{ textTransform: 'none' }}>
                                      <Tooltip.Target>
                                        <Icon
                                          display='question'
                                          style={{
                                            marginLeft: '0.5rem',
                                            display: 'inline-block',
                                            whiteSpace: 'nowrap'
                                          }}
                                        />
                                      </Tooltip.Target>
                                      <Tooltip.Content>
                                        <p>
                                          Approximate number of ticks. Other factors such as space available and data
                                          may change the exact number of ticks used.
                                          {config.visualizationType !== 'HeatMap' &&
                                            ' To enforce an exact number of ticks, check "Manual Ticks" above.'}
                                        </p>
                                      </Tooltip.Content>
                                    </Tooltip>
                                  }
                                />
                                <div className='viewport-overrides'>
                                  <label>
                                    <button
                                      onClick={() => setDisplayViewportOverrides(!displayViewportOverrides)}
                                      className='edit-label'
                                    >
                                      Number of ticks: viewport overrides{' '}
                                      <span
                                        style={{ transform: `rotate(${displayViewportOverrides ? '90deg' : '0deg'})` }}
                                      >
                                        &gt;
                                      </span>
                                    </button>
                                  </label>
                                  {displayViewportOverrides && (
                                    <div className='edit-block'>
                                      {Object.keys(viewports).map(viewport => (
                                        <TextField
                                          key={`viewport-num-ticks-input-${viewport}`}
                                          value={
                                            config.xAxis.viewportNumTicks
                                              ? config.xAxis.viewportNumTicks[viewport]
                                              : undefined
                                          }
                                          placeholder='Auto'
                                          type='number'
                                          label={viewport}
                                          className='number-narrow'
                                          updateField={(section, fieldName, label, val) =>
                                            updateViewportOverrides('viewportNumTicks', viewport, val)
                                          }
                                        />
                                      ))}
                                    </div>
                                  )}
                                </div>
                              </>
                            )}
                          {visSupportsDateCategoryHeight() && (
                            <TextField
                              value={config.xAxis.size}
                              type='number'
                              min={0}
                              section='xAxis'
                              fieldName='size'
                              label={config.orientation === 'horizontal' ? 'Size (Width)' : 'Size (Height)'}
                              className='number-narrow'
                              updateField={updateFieldDeprecated}
                            />
                          )}
                          {/* Hiding this for now, not interested in moving the axis lines away from chart comp. right now. */}
                          {/* <TextField value={config.xAxis.axisPadding} type='number' max={10} min={0} section='xAxis' fieldName='axisPadding' label={'Axis Padding'} className='number-narrow' updateField={updateFieldDeprecated} /> */}
                          {(config.xAxis.type === 'continuous' || config.forestPlot.type === 'Logarithmic') && (
                            <>
                              <CheckBox
                                value={config.dataFormat.bottomCommas}
                                section='dataFormat'
                                fieldName='bottomCommas'
                                label='Add commas'
                                updateField={updateFieldDeprecated}
                              />
                              <TextField
                                value={config.dataFormat.bottomRoundTo}
                                type='number'
                                section='dataFormat'
                                fieldName='bottomRoundTo'
                                label='Round to decimal point'
                                className='number-narrow'
                                updateField={updateFieldDeprecated}
                                min={0}
                              />
                            </>
                          )}
                          {visSupportsResponsiveTicks() &&
                            config.orientation === 'vertical' &&
                            config.visualizationType !== 'Paired Bar' && (
                              <CheckBox
                                value={config.isResponsiveTicks}
                                fieldName='isResponsiveTicks'
                                label='Use Responsive Ticks'
                                updateField={updateFieldDeprecated}
                              />
                            )}
                          {(config.orientation === 'horizontal' || !config.isResponsiveTicks) &&
                            visSupportsDateCategoryTickRotation() && (
                              <TextField
                                value={config.xAxis.tickRotation}
                                type='number'
                                min={0}
                                section='xAxis'
                                fieldName='tickRotation'
                                label='Tick rotation (Degrees)'
                                className='number-narrow'
                                updateField={updateFieldDeprecated}
                              />
                            )}
                          {config.orientation === 'vertical' &&
                            config.isResponsiveTicks &&
                            config.visualizationType !== 'Paired Bar' && (
                              <TextField
                                value={config.xAxis.maxTickRotation}
                                type='number'
                                min={0}
                                section='xAxis'
                                fieldName='maxTickRotation'
                                label='Max Tick Rotation'
                                className='number-narrow'
                                updateField={updateFieldDeprecated}
                                tooltip={
                                  <Tooltip style={{ textTransform: 'none' }}>
                                    <Tooltip.Target>
                                      <Icon
                                        display='question'
                                        style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }}
                                      />
                                    </Tooltip.Target>
                                    <Tooltip.Content>
                                      <p>
                                        Degrees ticks will be rotated if values overlap, especially in smaller
                                        viewports.
                                      </p>
                                    </Tooltip.Content>
                                  </Tooltip>
                                }
                              />
                            )}

                          {config.orientation === 'horizontal' ? (
                            <>
                              {visSupportsDateCategoryAxisLine() && (
                                <CheckBox
                                  value={config.yAxis.hideAxis}
                                  section='yAxis'
                                  fieldName='hideAxis'
                                  label='Hide Axis'
                                  updateField={updateFieldDeprecated}
                                />
                              )}
                              {visSupportsDateCategoryAxisLabel() && (
                                <CheckBox
                                  value={config.yAxis.hideLabel}
                                  section='yAxis'
                                  fieldName='hideLabel'
                                  label='Hide Tick Labels'
                                  updateField={updateFieldDeprecated}
                                />
                              )}
                            </>
                          ) : (
                            <>
                              {visSupportsDateCategoryAxisLine() && (
                                <CheckBox
                                  value={config.xAxis.hideAxis}
                                  section='xAxis'
                                  fieldName='hideAxis'
                                  label='Hide Axis'
                                  updateField={updateFieldDeprecated}
                                />
                              )}
                              {visSupportsDateCategoryAxisLabel() && (
                                <CheckBox
                                  value={config.xAxis.hideLabel}
                                  section='xAxis'
                                  fieldName='hideLabel'
                                  label='Hide Tick Labels'
                                  updateField={updateFieldDeprecated}
                                />
                              )}
                              {visSupportsDateCategoryAxisTicks() && (
                                <CheckBox
                                  value={config.xAxis.hideTicks}
                                  section='xAxis'
                                  fieldName='hideTicks'
                                  label='Hide Ticks'
                                  updateField={updateFieldDeprecated}
                                />
                              )}
                            </>
                          )}

                          {config.series?.length === 1 && config.visualizationType === 'Bar' && (
                            <>
                              {/* HIGHLIGHTED BARS */}
                              <label htmlFor='barHighlight'>Bar Highlighting</label>
                              {config.series.length === 1 &&
                                highlightedBarValues.map((highlightedBarValue, i) => (
                                  <fieldset key={`highlighted-bar-${i}`}>
                                    <div className='edit-block'>
                                      <Button
                                        className='btn btn-danger'
                                        onClick={e => handleRemoveHighlightedBar(e, i)}
                                      >
                                        Remove
                                      </Button>
                                      <p>Highlighted Bar {i + 1}</p>
                                      <Select
                                        value={config.highlightedBarValues[i].value}
                                        label='Value'
                                        onChange={e => handleUpdateHighlightedBar(e, i)}
                                        options={[
                                          { value: '', label: '- Select Value -' },
                                          ...highlightedSeriesOptions
                                        ]}
                                      />
                                      <label>
                                        <span className='edit-label column-heading'>Color</span>
                                        <input
                                          type='text'
                                          value={
                                            config.highlightedBarValues[i].color
                                              ? config.highlightedBarValues[i].color
                                              : ''
                                          }
                                          onChange={e => handleUpdateHighlightedBarColor(e, i)}
                                        />
                                      </label>
                                      <label>
                                        <span className='edit-label column-heading'>Border Width</span>
                                        <input
                                          max='5'
                                          min='0'
                                          type='number'
                                          value={
                                            config.highlightedBarValues[i].borderWidth
                                              ? config.highlightedBarValues[i].borderWidth
                                              : ''
                                          }
                                          onChange={e => handleUpdateHighlightedBorderWidth(e, i)}
                                        />
                                      </label>
                                      <label>
                                        <span className='edit-label column-heading'>Legend Label</span>
                                        <input
                                          type='text'
                                          value={
                                            config.highlightedBarValues[i].legendLabel
                                              ? config.highlightedBarValues[i].legendLabel
                                              : ''
                                          }
                                          onChange={e => handleHighlightedBarLegendLabel(e, i)}
                                        />
                                      </label>
                                    </div>
                                  </fieldset>
                                ))}
                              <Button variant='editor-primary' onClick={e => handleAddNewHighlightedBar(e)}>
                                Add Highlighted Bar
                              </Button>
                            </>
                          )}
                        </>
                      )}

                      {config.visualizationType === 'Pie' && (
                        <>
                          <CheckBox
                            value={config.exclusions.active}
                            section='exclusions'
                            fieldName='active'
                            label={'Exclude one or more values'}
                            updateField={updateFieldDeprecated}
                            tooltip={
                              <Tooltip style={{ textTransform: 'none' }}>
                                <Tooltip.Target>
                                  <Icon
                                    display='question'
                                    style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }}
                                  />
                                </Tooltip.Target>
                                <Tooltip.Content>
                                  <p>
                                    When this option is checked, you can select values for exclusion from the pie
                                    segments.
                                  </p>
                                </Tooltip.Content>
                              </Tooltip>
                            }
                          />
                          {config.exclusions.active && (
                            <>
                              {(config.exclusions?.keys?.length ?? 0) > 0 && (
                                <>
                                  <fieldset>
                                    <legend className='edit-label'>Excluded Keys</legend>
                                  </fieldset>
                                  <ExclusionsList />
                                </>
                              )}

                              <Select
                                fieldName='visualizationType'
                                label='Add Exclusion'
                                initial='Select'
                                onChange={e => {
                                  if (e.target.value !== '' && e.target.value !== 'Select') {
                                    addNewExclusion(e.target.value)
                                  }
                                  e.target.value = ''
                                }}
                                options={getAvailableExclusionValues(config.xAxis.dataKey)}
                              />
                            </>
                          )}
                        </>
                      )}

                      {visSupportsDateCategoryAxisMin() && (
                        <TextField
                          value={config.xAxis.min}
                          section='xAxis'
                          fieldName='min'
                          type='number'
                          label='min value'
                          placeholder='Auto'
                          updateField={updateFieldDeprecated}
                        />
                      )}

                      {visSupportsDateCategoryAxisMax() && (
                        <TextField
                          value={config.xAxis.max}
                          section='xAxis'
                          fieldName='max'
                          type='number'
                          label='max value'
                          placeholder='Auto'
                          updateField={updateFieldDeprecated}
                        />
                      )}

                      {/* anchors */}
                      {visHasAnchors() && config.orientation !== 'horizontal' && (
                        <AxisAnchorEditor
                          axisKey='xAxis'
                          config={config}
                          lineOptions={lineOptions}
                          updateConfig={updateConfig}
                        />
                      )}

                      {visHasAnchors() && config.orientation === 'horizontal' && (
                        <AxisAnchorEditor
                          axisKey='yAxis'
                          config={config}
                          lineOptions={lineOptions}
                          updateConfig={updateConfig}
                        />
                      )}
                    </AccordionItemPanel>
                  </AccordionItem>
                )}
                {renderHeatMapSettingsAccordion()}
                <Panels.Regions name='Regions' />

                {/* Columns */}
                {!['Box Plot', 'Sankey'].includes(config.visualizationType) && (
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>Columns</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <ColumnsEditor
                        config={config}
                        updateField={updateFieldDeprecated}
                        deleteColumn={removeAdditionalColumn}
                        hiddenColumnNames={
                          isHeatMap ? [...seriesOwnedColumnNames, ...heatMapOwnedColumnNames] : seriesOwnedColumnNames
                        }
                      />{' '}
                    </AccordionItemPanel>
                  </AccordionItem>
                )}
                {/* End Columns */}
                {visHasLegend() && (
                  <LegendSection
                    model={{
                      visualizationType: config.visualizationType,
                      position: config.legend.position,
                      hide: config.legend.hide,
                      style: config.legend.style,
                      groupBy: config.legend.groupBy,
                      hasShape: config.legend.hasShape,
                      subStyle: config.legend.subStyle,
                      tickRotation: config.legend.tickRotation,
                      hideSuppressedLabels: config.legend.hideSuppressedLabels,
                      hideSuppressionLink: config.legend.hideSuppressionLink,
                      behavior: config.legend.behavior,
                      colorCode: config.legend.colorCode,
                      axisAlign: config.legend.axisAlign,
                      highlightOnHover: config.legend.highlightOnHover,
                      seriesHighlight: config.legend.seriesHighlight,
                      reverseLabelOrder: config.legend.reverseLabelOrder,
                      hideBorder: config.legend.hideBorder,
                      singleRow: config.legend.singleRow,
                      verticalSorted: config.legend.verticalSorted,
                      label: config.legend.label,
                      description: config.legend.description,
                      unified: config.legend.unified,
                      hasSuppressionData: Boolean(
                        config.preliminaryData?.some(pd => pd.label && pd.type === 'suppression' && pd.value)
                      ),
                      supportsClicking: visSupportsClickingLegend(),
                      hasDynamicCategory,
                      hasMultipleSeries,
                      supportsColorCategory: supportsLegendColorCategory,
                      supportsAxisAlign: visHasLegendAxisAlign(),
                      supportsSelectableValues: visHasSelectableLegendValues,
                      colorCodeByCategory,
                      tooltipsSingleSeries: config.tooltips.singleSeries,
                      groupByOptions: getColumns(),
                      colorCodeOptions: supportsLegendColorCategory ? getDataValueOptions(data) : [],
                      isolateOptions: legendIsolateOptions
                    }}
                    onFieldChange={updateLegendField}
                    onBehaviorChange={updateLegendBehavior}
                    onSeriesHighlightChange={updateSeriesIsolateValues}
                    onShowAll={handleShowAll}
                  />
                )}
                {visSupportsFilters() && (
                  <>
                    {!isBarRace && (
                      <AccordionItem>
                        <AccordionItemHeading>
                          <AccordionItemButton>Filters</AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <VizFilterEditor
                            config={config}
                            updateField={updateField}
                            rawData={rawData}
                            hasFootnotes={isDashboard}
                          />
                        </AccordionItemPanel>
                      </AccordionItem>
                    )}
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton>Footnotes</AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <FootnotesEditor config={config} updateField={updateField} datasets={datasets} />
                      </AccordionItemPanel>
                    </AccordionItem>
                  </>
                )}
                <Panels.Visual name='Visual' />
                {!isBarRace && !['Network', 'Dendrogram'].includes(config.visualizationType) && (
                  <Panels.PatternSettings name='PatternSettings' />
                )}
                {/* Spark Line has no data table */}
                {config.visualizationType !== 'Spark Line' && (
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>Data Table</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <DataTableEditor
                        config={config}
                        columns={Object.keys(data[0] || {})}
                        updateField={updateFieldDeprecated}
                        isDashboard={isDashboard}
                        isLoadedFromUrl={isLoadedFromUrl}
                      />{' '}
                    </AccordionItemPanel>
                  </AccordionItem>
                )}
                {!isBarRace && !['Network', 'Dendrogram'].includes(config.visualizationType) && (
                  <Panels.Annotate name='Text Annotations' />
                )}
                {/* {(config.visualizationType === 'Bar' || config.visualizationType === 'Line') && <Panels.DateHighlighting name='Date Highlighting' />} */}
                {config.visualizationType !== 'Radar' && (
                  <PanelMarkup
                    name='Markup Variables'
                    markupVariables={config.markupVariables || []}
                    data={rawData}
                    enableMarkupVariables={config.enableMarkupVariables || false}
                    onMarkupVariablesChange={variables => updateField(null, null, 'markupVariables', variables)}
                    onToggleEnable={enabled => updateField(null, null, 'enableMarkupVariables', enabled)}
                    dataMetadata={config.dataMetadata}
                  />
                )}
                <Panels.SmallMultiples name='Small Multiples' />
              </Accordion>
              {!isDashboard && <ModernStylesAction />}
              {config.type !== 'Spark Line' && (
                <AdvancedEditor
                  loadConfig={updateConfig}
                  config={config}
                  convertStateToConfig={chartConvertStateToConfig}
                  defaultExpanded={config.visualizationType === 'HeatMap'}
                />
              )}
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
    </EditorPanelContext.Provider>
  )
}

export default EditorPanel
