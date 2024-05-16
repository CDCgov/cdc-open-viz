import _ from 'lodash'
import { Condition } from '../types/Condition'
import Icon from '@cdc/core/components/ui/Icon'

type OpenControls = [boolean[], Function] // useState type

type CondtionsProps = {
  conditionControls: OpenControls
  conditionLookup: Record<string, string[] | number[]>
  conditionSettings: Condition
  conditionIndex: number
  removeCondition: Function
  selectedColumn: string
  updateConditionsList: Function
}

const Conditions: React.FC<CondtionsProps> = ({ conditionControls, conditionLookup, conditionSettings, conditionIndex, removeCondition, selectedColumn, updateConditionsList }) => {
  const [openConditionControls, setOpenConditionControls] = conditionControls
  const showCondition = openConditionControls[conditionIndex]
  const setShowCondition = (index, value) => {
    const newOpenConditionsControls = [...openConditionControls]
    newOpenConditionsControls[index] = value
    setOpenConditionControls(newOpenConditionsControls)
  }

  const columnNames = Object.keys(conditionLookup)
  const columnNameConditionOptions = columnNames.filter(optionName => optionName !== selectedColumn)

  const { columnName, isOrIsNotEqualTo, value } = conditionSettings

  const handleConditionChange = (selectionValue: string | number, conditionSetting: string) => {
    const conditionSettingUpdate = _.cloneDeep(conditionSettings)
    if (conditionSetting === 'columnName') {
      conditionSettingUpdate['value'] = ''
    }
    conditionSettingUpdate[conditionSetting] = selectionValue
    updateConditionsList(conditionSettingUpdate, conditionIndex)
  }

  return !showCondition ? (
    <>
      <div className='mb-1'>
        <button onClick={() => setShowCondition(conditionIndex, true)}>
          <Icon display='caretDown' />
        </button>
        <span> {value ? `${columnName} ${isOrIsNotEqualTo === 'is' ? 'is' : 'is not'} ${value}` : 'New Condition'}</span>
      </div>
    </>
  ) : (
    <>
      <div className='d-flex justify-content-between'>
        <button
          onClick={() => {
            const newOpenConditionsControls = [...openConditionControls]
            newOpenConditionsControls[conditionIndex] = false
            setOpenConditionControls(newOpenConditionsControls)
          }}
        >
          <Icon display='caretDown' />
        </button>
        <button className='btn btn-danger btn-sm mt-0 ml-2' onClick={() => removeCondition(conditionIndex)}>
          Remove
        </button>
      </div>
      <div id={`condition_${conditionIndex}`}>
        <label className='d-block'>
          <span>Condition : </span>
          <div className='pt-1'>
            <select className='ml-1' value={columnName} onChange={e => handleConditionChange(e.target.value, 'columnName')}>
              <option value=''>Select</option>
              {columnNameConditionOptions?.map(columnName => (
                <option key={columnName} value={columnName}>
                  {columnName}
                </option>
              ))}
            </select>
            <select className='ml-1' value={isOrIsNotEqualTo} onChange={e => handleConditionChange(e.target.value, 'isOrIsNotEqualTo')}>
              <option value='is'>is</option>
              <option value='isNot'>is not</option>
            </select>
            <select className='ml-1' value={value} onChange={e => handleConditionChange(e.target.value, 'value')}>
              <option value=''>Select</option>

              {conditionLookup[columnName]?.map(valueItem => {
                return (
                  <option key={valueItem} value={valueItem}>
                    {valueItem}
                  </option>
                )
              })}
            </select>
          </div>
        </label>
      </div>
    </>
  )
}

export default Conditions
