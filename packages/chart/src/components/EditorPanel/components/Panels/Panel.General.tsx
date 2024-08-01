import { useContext, FC } from 'react'

// external libraries
import { AccordionItem, AccordionItemHeading, AccordionItemPanel, AccordionItemButton } from 'react-accessible-accordion'
import { approvedCurveTypes } from '@cdc/core/helpers/lineChartHelpers'

// core
import { TextField, Select, CheckBox } from '@cdc/core/components/EditorPanel/Inputs'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import Icon from '@cdc/core/components/ui/Icon'

// contexts
import { useEditorPermissions } from '../../useEditorPermissions.js'
import { useEditorPanelContext } from '../../EditorPanelContext.js'
import ConfigContext from '../../../../ConfigContext.js'
import { PanelProps } from '../PanelProps'

const PanelGeneral: FC<PanelProps> = props => {
  const { config } = useContext(ConfigContext)
  const { updateField } = useEditorPanelContext()
  const { enabledChartTypes, visHasNumbersOnBars, visHasaAdditionalLabelsOnBars, visHasLabelOnData, visSupportsChartHeight, visSupportsSuperTitle, visSupportsFootnotes } = useEditorPermissions()
  const { visualizationType, visualizationSubType, barStyle } = config

  const showBarStyleOptions = () => {
    if ((visualizationType === 'Bar' || visualizationType === 'Deviation Bar') && visualizationSubType !== 'stacked' && (config.orientation === 'horizontal' || config.orientation === 'vertical')) {
      return ['flat', 'rounded', 'lollipop']
    } else {
      return ['flat', 'rounded']
    }
  }

  return (
    <AccordionItem>
      {' '}
      {/* General */}
      <AccordionItemHeading>
        <AccordionItemButton>General</AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        {config?.visualizationType !== 'Sankey' && <Select value={visualizationType} fieldName='visualizationType' label='Chart Type' updateField={updateField} options={enabledChartTypes} />}
        {visSupportsChartHeight() && config.orientation === 'vertical' && (
          <TextField
            type='number'
            value={config.heights.vertical}
            section='heights'
            fieldName='vertical'
            label='Chart Height'
            updateField={updateField}
            tooltip={
              <Tooltip style={{ textTransform: 'none' }}>
                <Tooltip.Target>
                  <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                </Tooltip.Target>
                <Tooltip.Content>
                  <p>For some visualization types, such as the sankey diagram, it may be necessary to adjust to chart height for optimal display.</p>
                </Tooltip.Content>
              </Tooltip>
            }
          />
        )}
        {(visualizationType === 'Bar' || visualizationType === 'Combo' || visualizationType === 'Area Chart') && <Select value={visualizationSubType || 'Regular'} fieldName='visualizationSubType' label='Chart Subtype' updateField={updateField} options={['regular', 'stacked']} />}
        {visualizationType === 'Area Chart' && visualizationSubType === 'stacked' && <Select value={config.stackedAreaChartLineType || 'Linear'} fieldName='stackedAreaChartLineType' label='Stacked Area Chart Line Type' updateField={updateField} options={Object.keys(approvedCurveTypes)} />}
        {visualizationType === 'Bar' && <Select value={config.orientation || 'vertical'} fieldName='orientation' label='Orientation' updateField={updateField} options={['vertical', 'horizontal']} />}
        {visualizationType === 'Deviation Bar' && <Select label='Orientation' options={['horizontal']} />}
        {(visualizationType === 'Bar' || visualizationType === 'Deviation Bar') && (
          <Select
            value={config.isLollipopChart ? 'lollipop' : barStyle || 'flat'}
            fieldName='barStyle'
            label='bar style'
            updateField={updateField}
            options={showBarStyleOptions()}
            tooltip={
              <Tooltip style={{ textTransform: 'none' }}>
                <Tooltip.Target>
                  <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                </Tooltip.Target>
                <Tooltip.Content>
                  <p>Consider using the 'Flat' bar style when presenting data that includes '0' values.</p>
                </Tooltip.Content>
              </Tooltip>
            }
          />
        )}
        {(visualizationType === 'Bar' || visualizationType === 'Deviation Bar') && barStyle === 'rounded' && <Select value={config.tipRounding || 'top'} fieldName='tipRounding' label='tip rounding' updateField={updateField} options={['top', 'full']} />}
        {(visualizationType === 'Bar' || visualizationType === 'Deviation Bar') && barStyle === 'rounded' && <Select value={config.roundingStyle || 'standard'} fieldName='roundingStyle' label='rounding style' updateField={updateField} options={['standard', 'shallow', 'finger']} />}
        {visualizationType === 'Bar' && config.orientation === 'horizontal' && <Select value={config.yAxis.labelPlacement || 'Below Bar'} section='yAxis' fieldName='labelPlacement' label='Label Placement' updateField={updateField} options={['Below Bar', 'On Date/Category Axis']} />}
        {visHasNumbersOnBars() ? (
          <CheckBox value={config.yAxis.displayNumbersOnBar} section='yAxis' fieldName='displayNumbersOnBar' label={config.isLollipopChart ? 'Display Numbers after Bar' : 'Display Numbers on Bar'} updateField={updateField} />
        ) : (
          visHasLabelOnData() && (
            <CheckBox
              value={config.labels}
              fieldName='labels'
              label='Display label on data'
              updateField={updateField}
              tooltip={
                <Tooltip style={{ textTransform: 'none' }}>
                  <Tooltip.Target>
                    <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                  </Tooltip.Target>
                  <Tooltip.Content>
                    <p>Selecting this option will not hide the display of "zero value", "suppressed data", or "missing data" indicators on the chart (if applicable).</p>
                  </Tooltip.Content>
                </Tooltip>
              }
            />
          )
        )}
        {visHasaAdditionalLabelsOnBars() && (
          <>
            <CheckBox
              tooltip={
                <Tooltip style={{ textTransform: 'none' }}>
                  <Tooltip.Target>
                    <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                  </Tooltip.Target>
                  <Tooltip.Content>
                    <p>Selecting this option will display 'N/A' on the Date/Category Axis, in the tooltip hover, and in the data table to indicate missing or undefined data values.</p>
                  </Tooltip.Content>
                </Tooltip>
              }
              value={config.general.showMissingDataLabel}
              section='general'
              fieldName='showMissingDataLabel'
              label='Display "Missing Data" Label'
              updateField={updateField}
            />
            <CheckBox
              tooltip={
                <Tooltip style={{ textTransform: 'none' }}>
                  <Tooltip.Target>
                    <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                  </Tooltip.Target>
                  <Tooltip.Content>
                    <p> Selecting this option will display a thin line slightly above the Date/Category Axis to indicate "zero value" where zero values are indicated in the Data Series.</p>
                  </Tooltip.Content>
                </Tooltip>
              }
              value={config.general.showZeroValueDataLabel}
              section='general'
              fieldName='showZeroValueDataLabel'
              label='Display "Zero Value Data" Label'
              updateField={updateField}
            />

            <CheckBox
              tooltip={
                <Tooltip style={{ textTransform: 'none' }}>
                  <Tooltip.Target>
                    <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                  </Tooltip.Target>
                  <Tooltip.Content>
                    <p>Selecting this option will display the 'suppressed data symbol' on the Date/Category Axis, in the tooltip hover, and in the data table where suppressed data values are indicated in the Data Series</p>
                  </Tooltip.Content>
                </Tooltip>
              }
              value={config.general.showSuppressedSymbol}
              section='general'
              fieldName='showSuppressedSymbol'
              label='Display "suppressed data" label'
              updateField={updateField}
            />
          </>
        )}

        {visualizationType === 'Pie' && <Select fieldName='pieType' label='Pie Chart Type' updateField={updateField} options={['Regular', 'Donut']} />}
        {visualizationType === 'Line' && (
          <CheckBox
            value={config.allowLineToBarGraph}
            fieldName='allowLineToBarGraph'
            label='Convert to Bar Graph'
            updateField={updateField}
            tooltip={
              <Tooltip style={{ textTransform: 'none' }}>
                <Tooltip.Target>
                  <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                </Tooltip.Target>
                <Tooltip.Content>
                  <p>Switch to bar graph when less than 3 data points available.</p>
                </Tooltip.Content>
              </Tooltip>
            }
          />
        )}

        <TextField
          value={config.title || 'Chart Title'}
          fieldName='title'
          id='title'
          label='Title'
          placeholder='Chart Title'
          //defaultValue='Chart Title'
          updateField={updateField}
          //onChange={handleTitleChange}
          tooltip={
            <Tooltip style={{ textTransform: 'none' }}>
              <Tooltip.Target>
                <Icon display='question' style={{ marginLeft: '0.5rem' }} />
              </Tooltip.Target>
              <Tooltip.Content>
                <p>Title is required to set the name of the download file but can be hidden using the option below.</p>
              </Tooltip.Content>
            </Tooltip>
          }
        />
        <CheckBox value={config.showTitle} fieldName='showTitle' label='Show Title' updateField={updateField} />

        {visSupportsSuperTitle() && (
          <TextField
            value={config.superTitle}
            updateField={updateField}
            fieldName='superTitle'
            label='Super Title'
            placeholder='Super Title'
            tooltip={
              <Tooltip style={{ textTransform: 'none' }}>
                <Tooltip.Target>
                  <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                </Tooltip.Target>
                <Tooltip.Content>
                  <p>Super Title</p>
                </Tooltip.Content>
              </Tooltip>
            }
          />
        )}

        <TextField
          type='textarea'
          value={config.introText}
          updateField={updateField}
          fieldName='introText'
          label='Message'
          tooltip={
            <Tooltip style={{ textTransform: 'none' }}>
              <Tooltip.Target>
                <Icon display='question' style={{ marginLeft: '0.5rem' }} />
              </Tooltip.Target>
              <Tooltip.Content>
                <p>Intro Text</p>
              </Tooltip.Content>
            </Tooltip>
          }
        />

        <TextField
          type='textarea'
          value={config.description}
          fieldName='description'
          label='Subtext/Citation'
          updateField={updateField}
          tooltip={
            <Tooltip style={{ textTransform: 'none' }}>
              <Tooltip.Target>
                <Icon display='question' style={{ marginLeft: '0.5rem' }} />
              </Tooltip.Target>
              <Tooltip.Content>
                <p>Enter supporting text to display below the data visualization, if applicable. The following HTML tags are supported: strong, em, sup, and sub.</p>
              </Tooltip.Content>
            </Tooltip>
          }
        />

        {visSupportsFootnotes() && (
          <TextField
            type='textarea'
            value={config.footnotes}
            updateField={updateField}
            fieldName='footnotes'
            label='Footnotes'
            tooltip={
              <Tooltip style={{ textTransform: 'none' }}>
                <Tooltip.Target>
                  <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                </Tooltip.Target>
                <Tooltip.Content>
                  <p>Consider adding footnotes when displaying 'suppressed,' 'no data,' and 'zero values' to ensure accurate interpretation of the data.</p>
                </Tooltip.Content>
              </Tooltip>
            }
          />
        )}
      </AccordionItemPanel>
    </AccordionItem>
  )
}

export default PanelGeneral
