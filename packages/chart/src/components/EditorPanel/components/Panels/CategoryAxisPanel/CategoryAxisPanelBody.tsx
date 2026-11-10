import { isDateScale } from '@cdc/core/helpers/cove/date'
import { CheckBox, Select, TextField } from '@cdc/core/components/EditorPanel/Inputs'
import Button from '@cdc/core/components/elements/Button'
import Icon from '@cdc/core/components/ui/Icon'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import { viewports } from '@cdc/core/helpers/getViewport'
import { HEATMAP_CONFIG_DEFAULTS } from '../../../../HeatMap/heatmap.constants'
import CategoryOrderControls from './CategoryOrderControls'
import AxisAnchorEditor from '../ValueAxisPanel/AxisAnchorEditor'
import CategoricalAxis from './CategoricalAxis'
import { useCategoryAxisPanelContext } from './CategoryAxisPanelContext'

type ExclusionsListProps = {
  exclusions: string[]
  removeExclusion: (exclusion: string) => void
}

const ExclusionsList = ({ exclusions, removeExclusion }: ExclusionsListProps) => (
  <ul className='series-list'>
    {exclusions.map(exclusion => (
      <li key={exclusion}>
        <div className='series-list__name' data-title={exclusion}>
          <div className='series-list__name--text'>{exclusion}</div>
        </div>
        <button className='series-list__remove' onClick={() => removeExclusion(exclusion)}>
          &#215;
        </button>
      </li>
    ))}
  </ul>
)

const CategoryAxisPanelBody = () => {
  const {
    config,
    isBarRace,
    excludedData,
    lineOptions,
    displayViewportOverrides,
    highlightedBarValues,
    highlightedSeriesOptions,
    updateConfig,
    updateField,
    updateFieldDeprecated,
    getColumns,
    getAutoDetectedXAxisDateParseFormat,
    updateCategoryOrder,
    updateCategoryOrderType,
    setCategoryAxis,
    getAvailableExclusionValues,
    addNewExclusion,
    removeExclusion,
    setDisplayViewportOverrides,
    updateViewportOverrides,
    visHasBrushChart,
    visSupportsDateCategoryAxisLabel,
    visSupportsDateCategoryAxisLine,
    visSupportsDateCategoryAxisMax,
    visSupportsDateCategoryAxisMin,
    visSupportsDateCategoryAxisPadding,
    visSupportsDateCategoryAxisTicks,
    visSupportsDateCategoryHeight,
    visSupportsDateCategoryNumTicks,
    visSupportsDateCategoryTickRotation,
    visSupportsResponsiveTicks,
    visHasAnchors,
    handleAddNewHighlightedBar,
    handleHighlightedBarLegendLabel,
    handleUpdateHighlightedBar,
    handleRemoveHighlightedBar,
    handleUpdateHighlightedBorderWidth,
    handleUpdateHighlightedBarColor
  } = useCategoryAxisPanelContext()

  return (
    <>
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
                      Linear scales are employed for quantitative data, while time scales are used for time-series data.
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
                  ...(config.visualizationType === 'Scatter Plot' ? [{ label: 'Continuous', value: 'continuous' }] : [])
                ]}
                section='xAxis'
                fieldName='type'
                updateField={(_section, _subsection, _fieldName, value) => {
                  const autoDetectedDateParseFormat = getAutoDetectedXAxisDateParseFormat(config.xAxis.dataKey, value)

                  updateConfig({
                    ...config,
                    xAxis: {
                      ...config.xAxis,
                      type: value,
                      ...(value !== 'categorical' ? { categoryOrder: [], categoryOrderType: 'data' } : {}),
                      ...(autoDetectedDateParseFormat ? { dateParseFormat: autoDetectedDateParseFormat } : {})
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
                          For use with date scale. Extends the earliest and latest dates represented on the scale by the
                          percentage specified.
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
                    Select the source row or column that contains the segment labels. Depending on the data structure,
                    it may be listed as "Key."
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
            maxLength={config.orientation === 'horizontal' && config.yAxis.titlePlacement === 'top' ? undefined : 35}
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
                <a href='https://d3js.org/d3-time-format#locale_format' target='_blank' rel='noreferrer'>
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
                        This field specifies the pattern used to read and interpret dates in your dataset, ensuring the
                        dates are correctly understood and processed.{' '}
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
                      <p> Adjusts the date display format on the axis for clear, visual date representation.</p>
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
                        Specify a custom format for displaying dates in data table. If left empty, dates will adopt the
                        Axis Date Display format.{' '}
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
                        Specify a custom format for displaying dates on hovers. If left empty, dates will adopt the Axis
                        Date Display format.{' '}
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
                    When this option is checked, you can select source-file values for exclusion from the date/category
                    axis.{' '}
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
                    When this option is checked and the date format for the axis includes years, each year will only be
                    shown once in the axis.
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
                        Use the brush slider to narrow down your data view to specific values along the axis. This tool
                        is useful for examining detailed data segments within the larger dataset.{' '}
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
                            When enabled, the Y-axis rescales to fit only the data visible in the current brush
                            selection. When disabled, the Y-axis shows the full data range.
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
                              When set, the brush slider will initially select this many recent data points instead of
                              the default 35%. Leave empty to use the default percentage-based selection.
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
                      <ExclusionsList
                        exclusions={[...(config.exclusions?.keys ?? [])]}
                        removeExclusion={removeExclusion}
                      />
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
                          Number of data points which are assigned a tick, starting from the right most data point.
                          Value of 1 will show a tick at every data point, value of 2 will show a tick for every other,
                          etc.
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
                      <span style={{ transform: `rotate(${displayViewportOverrides ? '90deg' : '0deg'})` }}>&gt;</span>
                    </button>
                  </label>
                  {displayViewportOverrides && (
                    <div className='edit-block'>
                      {Object.keys(viewports).map(viewport => (
                        <TextField
                          key={`viewport-step-count-input-${viewport}`}
                          value={config.xAxis.viewportStepCount ? config.xAxis.viewportStepCount[viewport] : undefined}
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
            (config.visualizationType === 'HeatMap' || config.xAxis.type === 'date-time' || !config.xAxis.manual) && (
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
                          Approximate number of ticks. Other factors such as space available and data may change the
                          exact number of ticks used.
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
                      <span style={{ transform: `rotate(${displayViewportOverrides ? '90deg' : '0deg'})` }}>&gt;</span>
                    </button>
                  </label>
                  {displayViewportOverrides && (
                    <div className='edit-block'>
                      {Object.keys(viewports).map(viewport => (
                        <TextField
                          key={`viewport-num-ticks-input-${viewport}`}
                          value={config.xAxis.viewportNumTicks ? config.xAxis.viewportNumTicks[viewport] : undefined}
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
                      <p>Degrees ticks will be rotated if values overlap, especially in smaller viewports.</p>
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
                      <Button className='btn btn-danger' onClick={e => handleRemoveHighlightedBar(e, i)}>
                        Remove
                      </Button>
                      <p>Highlighted Bar {i + 1}</p>
                      <Select
                        value={config.highlightedBarValues[i].value}
                        label='Value'
                        onChange={e => handleUpdateHighlightedBar(e, i)}
                        options={[{ value: '', label: '- Select Value -' }, ...highlightedSeriesOptions]}
                      />
                      <label>
                        <span className='edit-label column-heading'>Color</span>
                        <input
                          type='text'
                          value={config.highlightedBarValues[i].color ? config.highlightedBarValues[i].color : ''}
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
                            config.highlightedBarValues[i].borderWidth ? config.highlightedBarValues[i].borderWidth : ''
                          }
                          onChange={e => handleUpdateHighlightedBorderWidth(e, i)}
                        />
                      </label>
                      <label>
                        <span className='edit-label column-heading'>Legend Label</span>
                        <input
                          type='text'
                          value={
                            config.highlightedBarValues[i].legendLabel ? config.highlightedBarValues[i].legendLabel : ''
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
                  <p>When this option is checked, you can select values for exclusion from the pie segments.</p>
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
                  <ExclusionsList exclusions={[...(config.exclusions?.keys ?? [])]} removeExclusion={removeExclusion} />
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
        <AxisAnchorEditor axisKey='xAxis' config={config} lineOptions={lineOptions} updateConfig={updateConfig} />
      )}

      {visHasAnchors() && config.orientation === 'horizontal' && (
        <AxisAnchorEditor axisKey='yAxis' config={config} lineOptions={lineOptions} updateConfig={updateConfig} />
      )}
    </>
  )
}

export default CategoryAxisPanelBody
