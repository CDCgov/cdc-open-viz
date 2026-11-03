import Icon from '@cdc/core/components/ui/Icon'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import { CheckBox, Select, TextField } from '@cdc/core/components/EditorPanel/Inputs'
import { usePieDataFormatSectionContext } from './PieDataFormatSectionContext'

const PieDataFormatSection = () => {
  const { model, onYAxisChange, onDataFormatChange } = usePieDataFormatSectionContext()
  const updateYAxis = (_section, _subsection, fieldName, value) => onYAxisChange(fieldName, value)
  const updateDataFormat = (_section, _subsection, fieldName, value) => onDataFormatChange(fieldName, value)

  return (
    <>
      <Select
        value={model.dataKey || ''}
        section='yAxis'
        fieldName='dataKey'
        label='Data Column'
        data-required-field-control='pie-data-column'
        initial='Select'
        required={true}
        updateField={updateYAxis}
        options={model.columnOptions}
        tooltip={
          <Tooltip style={{ textTransform: 'none' }}>
            <Tooltip.Target>
              <Icon display='question' style={{ marginLeft: '0.5rem' }} />
            </Tooltip.Target>
            <Tooltip.Content>
              <p>Select the source data to be visually represented.</p>
            </Tooltip.Content>
          </Tooltip>
        }
      />
      <TextField
        value={model.label}
        section='yAxis'
        fieldName='label'
        label='Data Label'
        updateField={updateYAxis}
        maxLength={35}
        tooltip={
          <Tooltip style={{ textTransform: 'none' }}>
            <Tooltip.Target>
              <Icon display='question' style={{ marginLeft: '0.5rem' }} />
            </Tooltip.Target>
            <Tooltip.Content>
              <p>Override the data column name shown in tooltips and data table (35 character limit)</p>
            </Tooltip.Content>
          </Tooltip>
        }
      />
      <span className='divider-heading'>Number Formatting</span>
      <CheckBox
        value={model.commas}
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
        value={model.abbreviated}
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
      <CheckBox
        value={model.showPiePercent}
        section='dataFormat'
        fieldName='showPiePercent'
        label='Display Value From Data'
        updateField={updateDataFormat}
        tooltip={
          <Tooltip style={{ textTransform: 'none' }}>
            <Tooltip.Target>
              <Icon
                display='question'
                style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }}
              />
            </Tooltip.Target>
            <Tooltip.Content className='text-start'>
              <p className='mb-2'>
                When enabled, pie slices are drawn using the exact values from your data as percentages. For example, 25
                means 25%. If the sum of values below 100 will be supplemented to complete the pie. Feature is disabled
                if the sum of values is above 100
              </p>
            </Tooltip.Content>
          </Tooltip>
        }
      />
      <TextField
        value={model.roundTo ? model.roundTo : 0}
        type='number'
        section='dataFormat'
        fieldName='roundTo'
        label='Round to decimal point'
        className='number-narrow'
        updateField={updateDataFormat}
        min={0}
      />{' '}
      <CheckBox
        value={model.preserveOriginalDecimals}
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
          value={model.prefix}
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
                <p>Enter a data prefix to display in the data table and chart tooltips, if applicable.</p>
              </Tooltip.Content>
            </Tooltip>
          }
        />
        <TextField
          value={model.suffix}
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
                <p>Enter a data suffix to display in the data table and tooltips, if applicable.</p>
              </Tooltip.Content>
            </Tooltip>
          }
        />
      </div>
    </>
  )
}

export default PieDataFormatSection
