import fetchRemoteData from '@cdc/core/helpers/fetchRemoteData'
import DataTransform from '@cdc/core/helpers/DataTransform'
import Button from '@cdc/core/components/elements/Button'
import Loader from '@cdc/core/components/Loader'
import Modal from '@cdc/core/components/ui/Modal'
import MultiSelect from '@cdc/core/components/MultiSelect'
import { Select } from '@cdc/core/components/EditorPanel/Inputs'
import { useGlobalContext } from '@cdc/core/components/GlobalContext'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import Icon from '@cdc/core/components/ui/Icon'
import { useContext, useEffect, useMemo, useState } from 'react'
import { DashboardContext, DashboardDispatchContext } from '../DashboardContext'
import { hasConditionalWidgets, normalizeConditionalColumn } from '../helpers/dashboardColumnWidgets'
import { createDashboardConditionId } from '../helpers/dashboardConditions'
import { dashboardConditionsSupportedForRow } from '../helpers/dashboardFilterTargets'
import { DashboardCondition } from '../types/ConfigRow'

import './dashboard-condition-modal.css'

type DashboardConditionModalProps = {
  rowIndex: number
  columnIndex?: number
  entryIndex?: number
}

type ConditionTypeOption = DashboardCondition['operator'] | ''

type DashboardConditionFormState = {
  datasetKey: string
  operator: ConditionTypeOption
  columnName: string
  values: string[]
}

const getDashboardConditionFormState = (dashboardCondition?: DashboardCondition): DashboardConditionFormState => ({
  datasetKey: dashboardCondition?.datasetKey || '',
  operator: dashboardCondition?.operator || '',
  columnName: dashboardCondition?.columnName || '',
  values: dashboardCondition?.values || []
})

const tooltipIcon = (label: string) => (
  <Tooltip style={{ textTransform: 'none' }}>
    <Tooltip.Target>
      <Icon display='question' style={{ marginLeft: '0.5rem' }} alt={label} />
    </Tooltip.Target>
    <Tooltip.Content>
      <p className='dashboard-condition-modal__tooltip-text'>{label}</p>
    </Tooltip.Content>
  </Tooltip>
)

export const DashboardConditionModal: React.FC<DashboardConditionModalProps> = ({
  rowIndex,
  columnIndex,
  entryIndex
}) => {
  const { config } = useContext(DashboardContext)
  const dispatch = useContext(DashboardDispatchContext)
  const { overlay } = useGlobalContext()
  const transform = new DataTransform()

  const row = config.rows[rowIndex]
  const column = columnIndex === undefined ? undefined : row.columns[columnIndex]
  const isConditionalEntryEditor =
    columnIndex !== undefined && entryIndex !== undefined && hasConditionalWidgets(column)
  const existingDashboardCondition =
    columnIndex === undefined
      ? row.dashboardCondition
      : isConditionalEntryEditor
      ? column?.conditionalWidgets?.[entryIndex]?.dashboardCondition
      : undefined
  const [formState, setFormState] = useState<DashboardConditionFormState>(
    getDashboardConditionFormState(existingDashboardCondition)
  )
  const [datasetRows, setDatasetRows] = useState<Record<string, any>[]>([])
  const [columns, setColumns] = useState<string[]>([])
  const [loadingColumns, setLoadingColumns] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const supportsDashboardConditions = dashboardConditionsSupportedForRow(row)

  const title =
    columnIndex === undefined
      ? `Row ${rowIndex + 1} Dashboard Condition`
      : isConditionalEntryEditor
      ? `Row ${rowIndex + 1} Column ${columnIndex + 1} Component ${entryIndex + 1} Dashboard Condition`
      : `Row ${rowIndex + 1} Column ${columnIndex + 1} Dashboard Condition`
  const targetLabel = columnIndex === undefined ? 'row' : 'component'

  const availableDatasets = Object.keys(config.datasets || {})
  const needsValueMatch = formState.operator === 'columnHasAnyValue'
  const usesDashboardFilterState = formState.operator === 'filtersIncomplete'
  const hasCondition = !!formState.operator
  const shouldShowDatasetSelect = hasCondition && !usesDashboardFilterState
  const shouldShowColumnSelect = shouldShowDatasetSelect && needsValueMatch && !!formState.datasetKey
  const shouldShowValueSelect = shouldShowColumnSelect && !!formState.columnName

  const canSave = useMemo(() => {
    if (!hasCondition) return true
    if (usesDashboardFilterState) return true
    if (!formState.datasetKey || !formState.operator) return false
    if (!needsValueMatch) return true

    return !!formState.columnName && formState.values.length > 0
  }, [formState, hasCondition, needsValueMatch, usesDashboardFilterState])

  const updateDashboardCondition = (dashboardCondition?: DashboardCondition) => {
    if (columnIndex === undefined) {
      dispatch({ type: 'UPDATE_ROW', payload: { rowIndex, rowData: { dashboardCondition } } })
      return
    }

    const columns = row.columns.map((currentColumn, currentColumnIndex) => {
      if (currentColumnIndex !== columnIndex) return currentColumn

      if (isConditionalEntryEditor) {
        const conditionalWidgets = [...(currentColumn.conditionalWidgets || [])]
        conditionalWidgets[entryIndex] = {
          ...conditionalWidgets[entryIndex],
          dashboardCondition
        }

        return normalizeConditionalColumn({
          ...currentColumn,
          conditionalWidgets
        })
      }

      if (!dashboardCondition) {
        return currentColumn
      }

      return normalizeConditionalColumn({
        ...currentColumn,
        widget: undefined,
        conditionalWidgets: [
          {
            widget: currentColumn.widget,
            dashboardCondition
          }
        ]
      })
    })
    dispatch({ type: 'UPDATE_ROW', payload: { rowIndex, rowData: { columns } } })
  }

  const closeModal = () => {
    overlay?.actions.toggleOverlay(false)
  }

  const loadColumns = async (datasetKey: string) => {
    if (!datasetKey) {
      setDatasetRows([])
      setColumns([])
      return
    }

    const dataset = config.datasets[datasetKey]
    if (!dataset) {
      setDatasetRows([])
      setColumns([])
      return
    }

    setLoadingColumns(true)
    setErrorMessage('')

    try {
      let nextData = dataset.data
      if (!nextData && dataset.dataUrl) {
        const response = await fetchRemoteData(dataset.dataUrl)
        nextData = transform.autoStandardize(response.data)
        if (dataset.dataDescription) {
          nextData = transform.developerStandardize(nextData, dataset.dataDescription)
        }
      }

      setDatasetRows(nextData || [])
      setColumns(Object.keys(nextData?.[0] || {}))
    } catch (_error) {
      setDatasetRows([])
      setColumns([])
      setErrorMessage('There was an issue loading the condition dataset. Please try again.')
    } finally {
      setLoadingColumns(false)
    }
  }

  useEffect(() => {
    loadColumns(formState.datasetKey)
  }, [formState.datasetKey])

  const selectedColumnValues = useMemo(() => {
    if (!needsValueMatch || !formState.columnName) return []

    const distinctValues = datasetRows.reduce((acc, row) => {
      const value = row?.[formState.columnName]
      if (value === undefined || value === null) return acc

      const normalizedValue = String(value)
      if (!acc.includes(normalizedValue)) {
        acc.push(normalizedValue)
      }
      return acc
    }, [] as string[])

    return distinctValues
  }, [datasetRows, formState.columnName, needsValueMatch])

  if (!supportsDashboardConditions) {
    return (
      <Modal>
        <Modal.Content>
          <p>{title} editing is not available for toggle or multi-visualization rows in v1.</p>
          <Button variant='primary' onClick={closeModal}>
            Close
          </Button>
        </Modal.Content>
      </Modal>
    )
  }

  return (
    <Modal>
      <Modal.Content>
        {loadingColumns && <Loader fullScreen />}
        <div className='dashboard-condition-modal'>
          <h3>{title}</h3>

          <div className='dashboard-condition-modal__fields'>
            <Select
              className='dashboard-condition-modal__select py-2 ps-2 w-100 d-block'
              fieldName='operator'
              label='Condition Type'
              options={[
                { value: '', label: 'Always show' },
                { value: 'hasData', label: "Show when there's data" },
                { value: 'hasNoData', label: "Show when there's no data" },
                { value: 'columnHasAnyValue', label: 'Show when column has a value' },
                { value: 'filtersIncomplete', label: 'Show when filters are incomplete' }
              ]}
              tooltip={tooltipIcon(
                `Choose whether this ${targetLabel} should appear when the filtered condition dataset has data, has no data, contains one of the selected column values, or when targeted filters are incomplete.`
              )}
              value={formState.operator}
              onChange={event => {
                const operator = event.target.value as ConditionTypeOption
                setFormState(currentState => ({
                  ...currentState,
                  operator,
                  datasetKey: operator && operator !== 'filtersIncomplete' ? currentState.datasetKey : '',
                  columnName: operator === 'columnHasAnyValue' ? currentState.columnName : '',
                  values: operator === 'columnHasAnyValue' ? currentState.values : []
                }))
              }}
            />

            {shouldShowDatasetSelect && (
              <>
                <Select
                  className='dashboard-condition-modal__select py-2 ps-2 w-100 d-block'
                  fieldName='datasetKey'
                  label='Condition Dataset'
                  options={[
                    { value: '', label: '- Select Option -' },
                    ...availableDatasets.map(key => ({ value: key, label: key }))
                  ]}
                  value={formState.datasetKey}
                  onChange={event => {
                    const datasetKey = event.target.value
                    setFormState(currentState => ({
                      ...currentState,
                      datasetKey,
                      columnName: datasetKey === currentState.datasetKey ? currentState.columnName : '',
                      values: datasetKey === currentState.datasetKey ? currentState.values : []
                    }))
                  }}
                />

                {shouldShowColumnSelect && (
                  <>
                    <Select
                      className='dashboard-condition-modal__select py-2 ps-2 w-100 d-block'
                      fieldName='columnName'
                      label='Column'
                      options={[
                        { value: '', label: '- Select Option -' },
                        ...columns.map(columnName => ({ value: columnName, label: columnName }))
                      ]}
                      tooltip={tooltipIcon('Select the dataset column to inspect for this condition.')}
                      value={formState.columnName}
                      onChange={event => {
                        const columnName = event.target.value
                        setFormState(currentState => ({
                          ...currentState,
                          columnName,
                          values: columnName === currentState.columnName ? currentState.values : []
                        }))
                      }}
                    />

                    {shouldShowValueSelect && (
                      <div className='dashboard-condition-modal__multiselect-field'>
                        <span className='edit-label column-heading'>
                          Column Values
                          {tooltipIcon(
                            'Choose one or more matching values from the selected column. This condition passes when the filtered dataset contains at least one row with one of these values.'
                          )}
                        </span>
                        <MultiSelect
                          fieldName='values'
                          options={selectedColumnValues.map(value => ({ value, label: value }))}
                          selected={formState.values}
                          updateField={(_section, _subSection, _fieldName, values) => {
                            setFormState(currentState => ({
                              ...currentState,
                              values
                            }))
                          }}
                        />
                      </div>
                    )}
                  </>
                )}
              </>
            )}
          </div>

          {errorMessage && <p className='text-danger'>{errorMessage}</p>}

          <div className='d-flex gap-2 mt-3'>
            <Button
              disabled={!canSave}
              onClick={() => {
                if (!hasCondition || !formState.operator) {
                  updateDashboardCondition(undefined)
                  closeModal()
                  return
                }

                const nextCondition: DashboardCondition = {
                  id: existingDashboardCondition?.id || createDashboardConditionId(),
                  operator: formState.operator
                }

                if (!usesDashboardFilterState) {
                  nextCondition.datasetKey = formState.datasetKey
                }

                if (needsValueMatch) {
                  nextCondition.columnName = formState.columnName
                  nextCondition.values = formState.values
                }

                updateDashboardCondition(nextCondition)
                closeModal()
              }}
              variant='primary'
            >
              Save
            </Button>

            <Button onClick={closeModal} variant='secondary'>
              Cancel
            </Button>
          </div>
        </div>
      </Modal.Content>
    </Modal>
  )
}
