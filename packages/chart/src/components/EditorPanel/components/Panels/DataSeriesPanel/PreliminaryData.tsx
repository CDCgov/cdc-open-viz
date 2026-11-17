import React from 'react'
import { Draggable } from '@hello-pangea/dnd'
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel
} from 'react-accessible-accordion'
import GroupedList from '@cdc/core/components/EditorPanel/GroupedList'
import { CheckBox, Select, TextField } from '@cdc/core/components/EditorPanel/Inputs'
import MultiSelect from '@cdc/core/components/MultiSelect'
import Button from '@cdc/core/components/elements/Button'
import Icon from '@cdc/core/components/ui/Icon'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import { adjustedSymbols as symbolCodes } from '@cdc/core/helpers/footnoteSymbols'
import flatMap from 'lodash/flatMap'
import keys from 'lodash/keys'
import uniq from 'lodash/uniq'
import type { ChartConfig } from '../../../../../types/ChartConfig'

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

export default PreliminaryData
