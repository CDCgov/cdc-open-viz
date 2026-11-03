import {
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel
} from 'react-accessible-accordion'
import { CheckBox, TextField } from '@cdc/core/components/EditorPanel/Inputs'
import Icon from '@cdc/core/components/ui/Icon'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import type { ChartConfig } from '../../../../../types/ChartConfig'
import {
  HEATMAP_CONFIG_DEFAULTS,
  MAX_HEATMAP_COLUMN_WIDTH,
  MAX_HEATMAP_COLOR_BUCKETS,
  MIN_HEATMAP_COLUMN_WIDTH,
  MIN_HEATMAP_COLOR_BUCKETS
} from '../../../../HeatMap/heatmap.constants'

type HeatMapSettingsPanelProps = {
  config: ChartConfig
  updateField: (...args: any[]) => void
}

const HeatMapSettingsPanel = ({ config, updateField }: HeatMapSettingsPanelProps) => {
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
          updateField={updateField}
        />
        <CheckBox
          value={Boolean(config.heatmap?.horizontalScroll ?? HEATMAP_CONFIG_DEFAULTS.horizontalScroll)}
          section='heatmap'
          fieldName='horizontalScroll'
          label='Enable Horizontal Scrolling'
          updateField={updateField}
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
            updateField={updateField}
          />
        )}
        <TextField
          value={config.heatmap?.cellPadding ?? HEATMAP_CONFIG_DEFAULTS.cellPadding}
          type='number'
          min={0}
          section='heatmap'
          fieldName='cellPadding'
          label='Cell Padding'
          updateField={updateField}
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
          updateField={updateField}
        />
        <TextField
          value={config.heatmap?.columnLabelGap ?? HEATMAP_CONFIG_DEFAULTS.columnLabelGap}
          type='number'
          min={0}
          section='heatmap'
          fieldName='columnLabelGap'
          label='Column Label Gap'
          updateField={updateField}
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
          updateField={updateField}
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

export default HeatMapSettingsPanel
