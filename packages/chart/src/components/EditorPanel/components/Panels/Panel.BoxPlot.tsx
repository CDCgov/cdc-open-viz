import { useContext, FC } from 'react'
import { AccordionItem, AccordionItemHeading, AccordionItemPanel, AccordionItemButton } from 'react-accessible-accordion'
import { TextField } from '@cdc/core/components/EditorPanel/Inputs'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import Icon from '@cdc/core/components/ui/Icon'
import ConfigContext from '../../../../ConfigContext'
import { useEditorPanelContext } from '../../EditorPanelContext'

// types
import { type PanelProps } from './../PanelProps'

const PanelBoxPlot: FC<PanelProps> = props => {
  const { config } = useContext(ConfigContext)
  const { boxplot } = config
  if (config.visualizationType !== 'Box Plot') return
  const { updateField } = useEditorPanelContext()

  return (
    <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemButton>{props.name}</AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <h4 style={{ fontSize: '18px' }}>Labels for 5-Number Summary</h4>

        {/* max */}
        <TextField
          type='text'
          value={boxplot.labels.maximum}
          fieldName='maximum'
          section='boxplot'
          subsection='labels'
          label='Maximum'
          updateField={updateField}
          tooltip={
            <Tooltip style={{ textTransform: 'none' }}>
              <Tooltip.Target>
                <Icon display='question' style={{ marginLeft: '0.5rem' }} />
              </Tooltip.Target>
              <Tooltip.Content>
                <p>Highest value, excluding outliers</p>
              </Tooltip.Content>
            </Tooltip>
          }
        />

        {/* Q3 */}
        <TextField
          type='text'
          value={boxplot.labels.q3}
          fieldName='q3'
          section='boxplot'
          subsection='labels'
          label='Upper Quartile'
          updateField={updateField}
          tooltip={
            <Tooltip style={{ textTransform: 'none' }}>
              <Tooltip.Target>
                <Icon display='question' style={{ marginLeft: '0.5rem' }} />
              </Tooltip.Target>
              <Tooltip.Content>
                <p>Represented by top line of box. 25% of data are higher.</p>
              </Tooltip.Content>
            </Tooltip>
          }
        />

        {/* median */}
        <TextField
          type='text'
          value={boxplot.labels.median}
          fieldName='median'
          section='boxplot'
          subsection='labels'
          label='Median'
          updateField={updateField}
          tooltip={
            <Tooltip style={{ textTransform: 'none' }}>
              <Tooltip.Target>
                <Icon display='question' style={{ marginLeft: '0.5rem' }} />
              </Tooltip.Target>
              <Tooltip.Content>
                <p>Middle data point. Half of data are higher value.</p>
              </Tooltip.Content>
            </Tooltip>
          }
        />

        {/* q1 */}
        <TextField
          type='text'
          value={boxplot.labels.q1}
          fieldName='q1'
          section='boxplot'
          subsection='labels'
          label='Lower Quartile'
          updateField={updateField}
          tooltip={
            <Tooltip style={{ textTransform: 'none' }}>
              <Tooltip.Target>
                <Icon display='question' style={{ marginLeft: '0.5rem' }} />
              </Tooltip.Target>
              <Tooltip.Content>
                <p>Represented by bottom line of box. 25% of data are lower.</p>
              </Tooltip.Content>
            </Tooltip>
          }
        />

        {/* minimum */}
        <TextField
          type='text'
          value={boxplot.labels.minimum}
          fieldName='minimum'
          section='boxplot'
          subsection='labels'
          label='Minimum'
          updateField={updateField}
          tooltip={
            <Tooltip style={{ textTransform: 'none' }}>
              <Tooltip.Target>
                <Icon display='question' style={{ marginLeft: '0.5rem' }} />
              </Tooltip.Target>
              <Tooltip.Content>
                <p>Lowest value, excluding outliers</p>
              </Tooltip.Content>
            </Tooltip>
          }
        />
        <br />
        <h4 style={{ fontSize: '18px' }}>Labels for Additional Measures</h4>

        {/* iqr */}
        <TextField type='text' value={boxplot.labels.iqr} fieldName='iqr' section='boxplot' subsection='labels' label='Interquartile Range' updateField={updateField} />
        {/* count */}
        <TextField type='text' value={boxplot.labels.total} fieldName='total' section='boxplot' subsection='labels' label='Total' updateField={updateField} />
        {/* mean */}
        <TextField type='text' value={boxplot.labels.mean} fieldName='mean' section='boxplot' subsection='labels' label='Mean' updateField={updateField} />
        {/* outliers */}
        <TextField type='text' value={boxplot.labels.outliers} fieldName='outliers' section='boxplot' subsection='labels' label='Outliers' updateField={updateField} />
        {/* values */}
        <TextField type='text' value={boxplot.labels.values} fieldName='values' section='boxplot' subsection='labels' label='Values' updateField={updateField} />
      </AccordionItemPanel>
    </AccordionItem>
  )
}

export default PanelBoxPlot
