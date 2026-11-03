import {
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel
} from 'react-accessible-accordion'
import WarningImage from '../../../../../images/warning.svg'
import type { ChartConfig } from '../../../../../types/ChartConfig'
import PieDataFormatSection from '../CategoryAxisPanel/PieDataFormatSection'
import CategoricalAxis from '../CategoryAxisPanel/CategoricalAxis'
import {
  PieDataFormatSectionProvider,
  type PieDataFormatSectionContextValue
} from '../CategoryAxisPanel/PieDataFormatSectionContext'
import ValueAxisControls from './ValueAxisControls'
import { ValueAxisControlsProvider, type ValueAxisControlsContextValue } from './ValueAxisControlsContext'
import AxisAnchorEditor from './AxisAnchorEditor'

type ValueAxisPanelProps = {
  config: ChartConfig
  pieDataFormatValue: PieDataFormatSectionContextValue
  valueAxisControlsValue: ValueAxisControlsContextValue
  updateConfig: Function
  hasCategoricalAxis: boolean
  hasAnchors: boolean
  lineOptions: { value: string; label?: string }[]
}

const ValueAxisPanel = ({
  config,
  pieDataFormatValue,
  valueAxisControlsValue,
  updateConfig,
  hasCategoricalAxis,
  hasAnchors,
  lineOptions
}: ValueAxisPanelProps) => {
  const controlsValue: ValueAxisControlsContextValue = {
    ...valueAxisControlsValue,
    model: {
      ...valueAxisControlsValue.model,
      categoricalAxisEditor: (
        <CategoricalAxis config={config} updateConfig={updateConfig} display={hasCategoricalAxis} />
      ),
      anchorEditor: hasAnchors ? (
        <AxisAnchorEditor
          axisKey={config.orientation === 'horizontal' ? 'xAxis' : 'yAxis'}
          config={config}
          lineOptions={lineOptions}
          updateConfig={updateConfig}
        />
      ) : null
    }
  }

  return (
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
          <PieDataFormatSectionProvider value={pieDataFormatValue}>
            <PieDataFormatSection />
          </PieDataFormatSectionProvider>
        )}
        {config.visualizationType !== 'Pie' && (
          <ValueAxisControlsProvider value={controlsValue}>
            <ValueAxisControls />
          </ValueAxisControlsProvider>
        )}
      </AccordionItemPanel>
    </AccordionItem>
  )
}

export default ValueAxisPanel
