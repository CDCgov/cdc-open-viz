import { useMemo, useState } from 'react'
import Conditions from './Conditions'
import { Variable } from '../types/Variable'
import { Condition } from '../types/Condition'
import _ from 'lodash'
import Icon from '@cdc/core/components/ui/Icon'

type OpenControls = [boolean[], Function] // useState type

type VariableSectionProps = {
  controls: OpenControls
  data: Object[]
  deleteVariable: Function
  updateVariableArray: Function
  variableConfig: Variable
  variableIndex: number
}

const VariableSection: React.FC<VariableSectionProps> = ({ controls, data, deleteVariable, updateVariableArray, variableConfig, variableIndex }) => {
  const [openVariableControls, setOpenVariableControls] = controls
  const show = openVariableControls[variableIndex]
  const setShow = (key, value) => {
    setOpenVariableControls({ openVariableControls, [key]: value })
  }

  const openConditionControls = useState([])

  const columnNames = Object.keys(data?.[0] || {})
  const [selectedColumn, setNewVariableColumnName] = useState(variableConfig.columnName)
  const [conditionsList, setConditionsList] = useState(variableConfig.conditions)
  const [variableName, setVariableName] = useState(variableConfig.name)

  const conditionLookup: Record<string, string[] | number[]> = useMemo(() => {
    return columnNames.reduce((acc, column) => {
      acc[column] = _.uniq(data.map(row => row[column]))
      return acc
    }, {})
  }, [columnNames])

  const handleVariableColumnChange = (columnName: string) => {
    setNewVariableColumnName(columnName)
    setConditionsList([])
  }

  const updateConditionsList = (conditionSettings: Condition, conditionIndex: number) => {
    const { columnName, isOrIsNotEqualTo, value } = conditionSettings
    const newConditionsList = _.cloneDeep(conditionsList)
    newConditionsList[conditionIndex] = {
      columnName: columnName,
      isOrIsNotEqualTo: isOrIsNotEqualTo,
      value: value
    }
    setConditionsList(newConditionsList)
  }

  const removeCondition = (conditionIndex: number) => {
    const updatedConditionsList = _.cloneDeep(conditionsList)
    updatedConditionsList.splice(conditionIndex, 1)
    setConditionsList(updatedConditionsList)
  }

  const handleAddConditionClick = () => {
    setConditionsList([
      ...conditionsList,
      {
        columnName: '',
        isOrIsNotEqualTo: 'is',
        value: ''
      }
    ])

    const [conditionControls, setConditionControls] = openConditionControls

    const newConditionsControls = [...conditionControls]
    newConditionsControls[conditionsList.length + 1] = true
    setConditionControls(newConditionsControls)
  }

  const handleVariableDoneClick = () => {
    const filteredConditionsList = conditionsList.filter(condition => condition.columnName !== '' && condition.value !== '')
    const newVariable = {
      columnName: selectedColumn,
      conditions: filteredConditionsList,
      name: variableName,
      tag: `{{${variableName}}}`
    }
    updateVariableArray(newVariable, variableIndex)
    setShow(variableIndex, false)
  }

  const columnSelectDisabled = variableName === ''
  const addConditionDisabled = columnSelectDisabled || selectedColumn === ''

  return (
    <>
      {!show ? (
        <>
          <div className='mb-2'>
            <button onClick={() => setShow(variableIndex, true)}>
              <Icon display='caretDown' />
            </button>
            <span> {variableName ? `${variableName}` : 'New Variable'}</span>
          </div>
        </>
      ) : (
        <fieldset className='edit-block mb-1' key={variableIndex}>
          <div className='d-flex justify-content-between'>
            <button onClick={handleVariableDoneClick} disabled={addConditionDisabled}>
              <Icon display='caretUp' />
            </button>
            <button
              className='btn btn-danger btn-sm mt-0 ml-2'
              onClick={event => {
                event.preventDefault()
                deleteVariable(variableIndex)
              }}
            >
              Delete
            </button>
          </div>
          <label className='d-block'>
            <span className='edit-label column-heading'>Variable Name:</span>
            <input className={`variable-${variableIndex} ml-1`} type='text' value={variableName} onChange={e => setVariableName(e.target.value)} />
          </label>
          <div className='pt-2'>
            <label className='d-block'>
              <span className='edit-label column-heading'>Column:</span>
              <select className={`variable-${variableIndex} ml-1`} onChange={e => handleVariableColumnChange(e.target.value)} value={selectedColumn} disabled={columnSelectDisabled}>
                <option value=''>Select</option>
                {columnNames.map(columnName => (
                  <option key={columnName} value={columnName}>
                    {columnName}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <label className='d-block py-2'>
            <span className='edit-label column-heading'>Conditions:</span>
            {conditionsList.map((condition, index) => {
              return (
                <div className='condition-section mt-2'>
                  <Conditions
                    key={variableName + '-condition-' + index}
                    conditionControls={openConditionControls}
                    conditionLookup={conditionLookup}
                    conditionSettings={condition}
                    conditionIndex={index}
                    removeCondition={removeCondition}
                    selectedColumn={selectedColumn}
                    updateConditionsList={updateConditionsList}
                  />
                </div>
              )
            })}
          </label>
          <div className='mt-1'>
            <button onClick={handleAddConditionClick} disabled={addConditionDisabled}>
              Add Condition
            </button>
            <button className='ml-2' onClick={handleVariableDoneClick} disabled={addConditionDisabled}>
              Done
            </button>
          </div>
        </fieldset>
      )}
    </>
  )
}

export default VariableSection
