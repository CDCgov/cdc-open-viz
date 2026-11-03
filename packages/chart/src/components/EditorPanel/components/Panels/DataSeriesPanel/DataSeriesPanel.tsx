import {
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel
} from 'react-accessible-accordion'
import GroupedList from '@cdc/core/components/EditorPanel/GroupedList'
import PanelHeader from '@cdc/core/components/panels/PanelHeader'
import { Select } from '@cdc/core/components/EditorPanel/Inputs'
import Icon from '@cdc/core/components/ui/Icon'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import WarningImage from '../../../../../images/warning.svg'
import SeriesEditor from './SeriesEditor'
import PreliminaryData from './PreliminaryData'
import { useDataSeriesSectionContext, type DataSeriesRootField } from './DataSeriesPanelContext'

const DataSeriesSection = () => {
  const {
    model,
    onRootFieldChange,
    onAddSeries,
    onReorderSeries,
    onConfidenceKeyChange,
    onRankByValueChange,
    getColumns,
    handleForecastPaletteSelection,
    renderSeriesItem,
    preliminaryDataEditor,
    preliminaryData
  } = useDataSeriesSectionContext()
  const series = model.series || []
  const seriesCount = series.length
  const showHeadingWarning =
    (!model.series ||
      seriesCount === 0 ||
      (model.isLollipopChart && seriesCount !== 1) ||
      (model.visualizationType === 'Radar' && seriesCount < 3) ||
      (model.visualizationType === 'Deviation Bar' && seriesCount !== 1) ||
      (model.visualizationType === 'Paired Bar' && seriesCount !== 2)) &&
    !model.dynamicSeries &&
    model.visualizationType !== 'HeatMap'
  const showStaticControls = !model.supportsDynamicSeries || !model.dynamicSeries
  const showConfidenceKeys =
    (model.visualizationType === 'Bar' && seriesCount > 0) ||
    (model.visualizationType === 'Line' && model.series !== undefined && seriesCount <= 1)
  const updateRootField = (_section, _subsection, field: DataSeriesRootField, value) => onRootFieldChange(field, value)

  return (
    <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemButton data-required-field-section='data-series'>
          Data Series {showHeadingWarning && <WarningImage width='25' className='warning-icon' />}
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        {model.dynamicSeries && model.visualizationType === 'Line' && (
          <Select
            fieldName='dynamicSeriesType'
            value={model.dynamicSeriesType}
            label='Series Type'
            initial='Select'
            updateField={updateRootField}
            options={['Line', 'dashed-sm', 'dashed-md', 'dashed-lg']}
          />
        )}
        {model.dynamicSeries && model.visualizationType === 'Line' && model.dynamicSeriesType === 'Line' && (
          <Select
            fieldName='dynamicSeriesLineType'
            value={model.dynamicSeriesLineType || 'curveLinear'}
            label='Line Type'
            initial='Select'
            updateField={updateRootField}
            options={model.curveOptions}
          />
        )}
        {showStaticControls && (
          <>
            {model.visualizationType === 'HeatMap' && (
              <p className='helper-text'>
                Add one or more data series to create heatmap rows. Each selected series becomes a row in the heatmap,
                while the Date/Category Axis provides the columns.
              </p>
            )}
            {seriesCount === 0 &&
              !model.dynamicSeries &&
              model.visualizationType !== 'Paired Bar' &&
              model.visualizationType !== 'Deviation Bar' &&
              model.visualizationType !== 'HeatMap' &&
              !model.isLollipopChart && <p className='warning'>At least one series is required</p>}
            {model.isLollipopChart && seriesCount !== 1 && (
              <p className='warning'>Select exactly one data series for a lollipop chart.</p>
            )}
            {model.visualizationType === 'Deviation Bar' && seriesCount !== 1 && (
              <p className='warning'>Select exactly one data series for a deviation bar chart.</p>
            )}
            {seriesCount === 0 && !model.dynamicSeries && model.visualizationType === 'HeatMap' && (
              <p className='warning'>At least one series is required</p>
            )}
            {seriesCount !== 2 && model.visualizationType === 'Paired Bar' && (
              <p className='warning'>Select two data series for paired bar chart (e.g., Male and Female).</p>
            )}
            <Select
              fieldName='visualizationType'
              label='Add Data Series'
              aria-label='Add Data Series'
              data-required-field-control='data-series'
              initial='Select'
              onChange={event => {
                if (event.target.value !== '' && event.target.value !== 'Select') onAddSeries(event.target.value)
                event.target.value = ''
              }}
              options={model.seriesOptions}
            />
            {seriesCount > 0 && (
              <SeriesEditor.Wrapper
                getColumns={getColumns}
                handleForecastPaletteSelection={handleForecastPaletteSelection}
              >
                <GroupedList
                  items={series}
                  droppableId='chart-series-order'
                  label={
                    <>
                      {model.visualizationType === 'HeatMap' ? 'Displaying Rows' : 'Displaying'}
                      <Tooltip style={{ textTransform: 'none' }}>
                        <Tooltip.Target>
                          <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                        </Tooltip.Target>
                        <Tooltip.Content>
                          {model.visualizationType === 'HeatMap' ? (
                            <p>
                              Each selected data series becomes a row in the heatmap. Reorder these entries to change
                              the row order shown in the visualization.
                            </p>
                          ) : (
                            <p>
                              A data series is a set of related data points plotted in a chart and typically represented
                              in the chart legend.
                            </p>
                          )}
                        </Tooltip.Content>
                      </Tooltip>
                    </>
                  }
                  onDragEnd={({ source, destination }) => {
                    if (!destination || source.index === destination.index) return
                    onReorderSeries(source.index, destination.index)
                  }}
                  renderItem={renderSeriesItem}
                />
              </SeriesEditor.Wrapper>
            )}
            {showConfidenceKeys && (
              <>
                <PanelHeader>Confidence Keys</PanelHeader>
                <Select
                  value={model.confidenceKeys.upper || ''}
                  label='Upper'
                  initial='Select'
                  options={model.columnOptions}
                  onChange={event => onConfidenceKeyChange('upper', event.target.value)}
                />
                <Select
                  value={model.confidenceKeys.lower || ''}
                  label='Lower'
                  initial='Select'
                  options={model.columnOptions}
                  onChange={event => onConfidenceKeyChange('lower', event.target.value)}
                />
              </>
            )}
            {model.supportsRankByValue && seriesCount === 1 && (
              <Select
                value={model.rankByValue}
                fieldName='rankByValue'
                label='Rank by Value'
                initial='Select'
                updateField={(_section, _subsection, _fieldName, value) => onRankByValueChange(value)}
                options={['asc', 'desc']}
              />
            )}
            {preliminaryDataEditor || (preliminaryData && <PreliminaryData {...preliminaryData} />)}
          </>
        )}
      </AccordionItemPanel>
    </AccordionItem>
  )
}

export default DataSeriesSection
