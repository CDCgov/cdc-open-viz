import cloneDeep from 'lodash/cloneDeep'

import { type DataTableEditorPanelProps } from './types'

const useDataTableEditorPanel = ({ state, dispatch }: DataTableEditorPanelProps) => {
  const { table, columns, filters, data, config } = state

  const createFieldUpdater = (curValue, setter) => (section, subsection, fieldName, newValue) => {
    if (!section) return dispatch({ type: setter, payload: newValue })

    const valueCopy = cloneDeep(curValue)
    if (subsection === null || subsection === undefined) valueCopy[fieldName] = newValue
    else {
      if (!valueCopy[subsection]) valueCopy[subsection] = {}
      valueCopy[subsection][fieldName] = newValue
    }
    dispatch({ type: setter, payload: valueCopy })
  }

  const updateDataTable = (section, subsection, fieldName, newValue) => {
    if (fieldName === 'columns') return dispatch({ type: 'SET_COLUMNS', payload: newValue })

    createFieldUpdater(table, 'SET_TABLE')(section, subsection, fieldName, newValue)
  }

  const updateFilters = (section, subsection, fieldName, newValue) => {
    if (fieldName === 'filterIntro') return dispatch({ type: 'SET_FILTER_INTRO', payload: newValue })
    if (fieldName === 'filterBehavior') return dispatch({ type: 'SET_FILTER_BEHAVIOR', payload: newValue })

    createFieldUpdater(filters, 'SET_FILTERS')(section, subsection, fieldName, newValue)
  }

  const removeAdditionalColumn = columnName => {
    const newColumns = cloneDeep(columns)

    delete newColumns[columnName]

    dispatch({ type: 'SET_COLUMNS', payload: newColumns })
  }

  const updateConfigField = (_section, _subsection, fieldName, newValue) => {
    dispatch({ type: 'SET_CONFIG', payload: { ...config, [fieldName]: newValue } })
  }

  const updateConfig = nextConfig => {
    dispatch({ type: 'SET_CONFIG', payload: nextConfig })
    dispatch({ type: 'SET_TABLE', payload: nextConfig.table })
    dispatch({ type: 'SET_COLUMNS', payload: nextConfig.columns || {} })
    dispatch({ type: 'SET_FILTERS', payload: nextConfig.filters || [] })
    dispatch({ type: 'SET_FILTER_BEHAVIOR', payload: nextConfig.filterBehavior })
    dispatch({ type: 'SET_FILTER_INTRO', payload: nextConfig.filterIntro })
  }

  return {
    config,
    columns,
    data,
    createFieldUpdater,
    updateDataTable,
    updateFilters,
    removeAdditionalColumn,
    updateConfigField,
    updateConfig,
    convertStateToConfig: () => config
  }
}

export default useDataTableEditorPanel
