import fetchRemoteData from '@cdc/core/helpers/fetchRemoteData'
import DataTransform from '@cdc/core/helpers/DataTransform'
import Button from '@cdc/core/components/elements/Button'
import Loader from '@cdc/core/components/Loader'
import Modal from '@cdc/core/components/ui/Modal'
import MultiSelect from '@cdc/core/components/MultiSelect'
import { Select } from '@cdc/core/components/EditorPanel/Inputs'
import { useGlobalContext } from '@cdc/core/components/GlobalContext'
import { useContext, useEffect, useMemo, useState } from 'react'
import { DashboardContext, DashboardDispatchContext } from '../DashboardContext'
import { createDashboardConditionId } from '../helpers/dashboardConditions'
import { dashboardConditionsSupportedForRow } from '../helpers/dashboardFilterTargets'
import { DashboardCondition } from '../types/ConfigRow'

type DashboardConditionModalProps = {
  rowIndex: number
  columnIndex?: number
}

type DashboardConditionFormState = {
  datasetKey: string
  operator: DashboardCondition['operator']
  columnName: string
  values: string[]
}

const getDashboardConditionFormState = (dashboardCondition?: DashboardCondition): DashboardConditionFormState => ({
  datasetKey: dashboardCondition?.datasetKey || '',
  operator: dashboardCondition?.operator || 'hasRows',
  columnName: dashboardCondition?.columnName || '',
  values: dashboardCondition?.values || []
})

export const DashboardConditionModal: React.FC<DashboardConditionModalProps> = ({ rowIndex, columnIndex }) => {
  const { config } = useContext(DashboardContext)
  const dispatch = useContext(DashboardDispatchContext)
  const { overlay } = useGlobalContext()
  const transform = new DataTransform()

  const row = config.rows[rowIndex]
  const existingDashboardCondition =
    columnIndex === undefined ? row.dashboardCondition : row.columns[columnIndex]?.dashboardCondition
  const [enabled, setEnabled] = useState(!!existingDashboardCondition)
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
      : `Row ${rowIndex + 1} Column ${columnIndex + 1} Dashboard Condition`

  const availableDatasets = Object.keys(config.datasets || {})
  const needsValueMatch = formState.operator === 'columnHasAnyValue'

  const canSave = useMemo(() => {
    if (!enabled) return true
    if (!formState.datasetKey || !formState.operator) return false
    if (!needsValueMatch) return true

    return !!formState.columnName && formState.values.length > 0
  }, [enabled, formState, needsValueMatch])

  const updateDashboardCondition = (dashboardCondition?: DashboardCondition) => {
    if (columnIndex === undefined) {
      dispatch({ type: 'UPDATE_ROW', payload: { rowIndex, rowData: { dashboardCondition } } })
      return
    }

    const columns = row.columns.map((column, currentColumnIndex) =>
      currentColumnIndex === columnIndex ? { ...column, dashboardCondition } : column
    )
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
        <h3>{title}</h3>
        <label className='d-block mb-3'>
          <input
            checked={enabled}
            onChange={event => setEnabled(event.target.checked)}
            style={{ marginRight: '0.5rem' }}
            type='checkbox'
          />
          Enable this dashboard condition
        </label>

        {enabled && (
          <>
            <Select
              label='Dashboard Condition Dataset'
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

            <Select
              label='Operator'
              options={[
                { value: 'hasRows', label: 'Has Rows' },
                { value: 'hasNoRows', label: 'Has No Rows' },
                { value: 'columnHasAnyValue', label: 'Column Has Any Value' }
              ]}
              value={formState.operator}
              onChange={event => {
                const operator = event.target.value as DashboardCondition['operator']
                setFormState(currentState => ({
                  ...currentState,
                  operator,
                  columnName: operator === 'columnHasAnyValue' ? currentState.columnName : '',
                  values: operator === 'columnHasAnyValue' ? currentState.values : []
                }))
              }}
            />

            {needsValueMatch && (
              <>
                <Select
                  label='Column'
                  options={[
                    { value: '', label: '- Select Option -' },
                    ...columns.map(columnName => ({ value: columnName, label: columnName }))
                  ]}
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

                <MultiSelect
                  fieldName='values'
                  label='Values'
                  options={selectedColumnValues.map(value => ({ value, label: value }))}
                  selected={formState.values}
                  updateField={(_section, _subSection, _fieldName, values) => {
                    setFormState(currentState => ({
                      ...currentState,
                      values
                    }))
                  }}
                />
              </>
            )}
          </>
        )}

        {errorMessage && <p className='text-danger'>{errorMessage}</p>}

        <div className='d-flex gap-2 mt-3'>
          <Button
            disabled={!canSave}
            onClick={() => {
              if (!enabled) {
                updateDashboardCondition(undefined)
                closeModal()
                return
              }

              const nextCondition: DashboardCondition = {
                id: existingDashboardCondition?.id || createDashboardConditionId(),
                datasetKey: formState.datasetKey,
                operator: formState.operator
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

          {!!existingDashboardCondition && (
            <Button
              onClick={() => {
                updateDashboardCondition(undefined)
                closeModal()
              }}
              variant='secondary'
            >
              Remove
            </Button>
          )}

          <Button onClick={closeModal} variant='secondary'>
            Cancel
          </Button>
        </div>
      </Modal.Content>
    </Modal>
  )
}
