import { CheckBox, TextField } from '@cdc/core/components/EditorPanel/Inputs'
import PanelHeader from '@cdc/core/components/panels/PanelHeader'
import Icon from '@cdc/core/components/ui/Icon'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import {
  type ValueAxisDataFormatField,
  type ValueAxisInputUpdate,
  useValueAxisControlsContext
} from './ValueAxisControlsContext'

const ValueAxisNumberFormatting = () => {
  const { model, onDataFormatChange } = useValueAxisControlsContext()
  const updateDataFormat: ValueAxisInputUpdate<ValueAxisDataFormatField> = (_section, _subsection, field, value) =>
    onDataFormatChange(field, value)
  const format = model.dataFormat

  return (
    <>
      <PanelHeader>Number Formatting</PanelHeader>
      <CheckBox
        value={format.commas as boolean}
        section='dataFormat'
        fieldName='commas'
        label='Add commas'
        updateField={updateDataFormat}
        tooltip={
          <Tooltip style={{ textTransform: 'none' }}>
            <Tooltip.Target>
              <Icon
                display='question'
                style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }}
              />
            </Tooltip.Target>
            <Tooltip.Content>
              <p>{`Selecting this option will add commas to the left value axis, tooltip hover, and data table.`}</p>
            </Tooltip.Content>
          </Tooltip>
        }
      />
      <CheckBox
        display={!model.isBarRace && !model.hasCategoricalAxis}
        value={format.abbreviated as boolean}
        section='dataFormat'
        fieldName='abbreviated'
        label='Abbreviate Axis Values'
        updateField={updateDataFormat}
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
      <TextField
        value={format.roundTo ? (format.roundTo as string | number) : 0}
        type='number'
        section='dataFormat'
        fieldName='roundTo'
        label='Round to decimal point'
        className='number-narrow'
        updateField={updateDataFormat}
        min={0}
      />{' '}
      <CheckBox
        value={format.preserveOriginalDecimals as boolean}
        section='dataFormat'
        fieldName='preserveOriginalDecimals'
        label='Preserve Original Decimal Places'
        updateField={updateDataFormat}
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
                When enabled, numbers will display with their original decimal places from the data source, bypassing
                the "Round to decimal point" setting above. This is useful when you have mixed data (e.g., whole numbers
                in one column and percentages with decimals in another).
              </p>
            </Tooltip.Content>
          </Tooltip>
        }
      />
      <div className='two-col-inputs'>
        <TextField
          value={format.prefix as string}
          section='dataFormat'
          fieldName='prefix'
          label='Prefix'
          updateField={updateDataFormat}
          tooltip={
            <Tooltip style={{ textTransform: 'none' }}>
              <Tooltip.Target>
                <Icon display='question' style={{ marginLeft: '0.5rem' }} />
              </Tooltip.Target>
              <Tooltip.Content>
                <p>Enter a data prefix (such as "$"), if applicable.</p>
              </Tooltip.Content>
            </Tooltip>
          }
        />
        <TextField
          value={format.suffix as string}
          section='dataFormat'
          fieldName='suffix'
          label='Suffix'
          updateField={updateDataFormat}
          tooltip={
            <Tooltip style={{ textTransform: 'none' }}>
              <Tooltip.Target>
                <Icon display='question' style={{ marginLeft: '0.5rem' }} />
              </Tooltip.Target>
              <Tooltip.Content>
                <p>Enter a data suffix (such as "%"), if applicable.</p>
              </Tooltip.Content>
            </Tooltip>
          }
        />
      </div>
    </>
  )
}

export default ValueAxisNumberFormatting
