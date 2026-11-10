import cloneDeep from 'lodash/cloneDeep'

import type DataTableActions from '../../store/dataTable.actions'
import { type Config } from '../../types/Config'
import { type PanelUpdateField } from '../types'
import { type DataTableEditorPanelProps } from './types'

const useDataTableEditorPanel = ({ state, dispatch }: DataTableEditorPanelProps) => {
  const { table, columns, filters, data } = state
  const config = state.config as Config

  const createFieldUpdater =
    (curValue: unknown, setter: 'SET_COLUMNS' | 'SET_TABLE' | 'SET_FILTERS'): PanelUpdateField =>
    (section, subsection, fieldName, newValue) => {
      if (!section) return dispatch({ type: setter, payload: newValue } as DataTableActions)

      const valueCopy: any = cloneDeep(curValue)
      if (subsection === null || subsection === undefined) valueCopy[fieldName] = newValue
      else {
        if (!valueCopy[subsection]) valueCopy[subsection] = {}
        valueCopy[subsection][fieldName] = newValue
      }
      dispatch({ type: setter, payload: valueCopy } as DataTableActions)
    }

  const updateDataTable: PanelUpdateField = (section, subsection, fieldName, newValue) => {
    if (fieldName === 'columns') {
      return dispatch({ type: 'SET_COLUMNS', payload: newValue } as DataTableActions)
    }

    createFieldUpdater(table, 'SET_TABLE')(section, subsection, fieldName, newValue)
  }

  const updateFilters: PanelUpdateField = (section, subsection, fieldName, newValue) => {
    if (fieldName === 'filterIntro') {
      return dispatch({ type: 'SET_FILTER_INTRO', payload: newValue } as DataTableActions)
    }
    if (fieldName === 'filterBehavior') {
      return dispatch({ type: 'SET_FILTER_BEHAVIOR', payload: newValue } as DataTableActions)
    }

    createFieldUpdater(filters, 'SET_FILTERS')(section, subsection, fieldName, newValue)
  }

  const removeAdditionalColumn = (columnName: string) => {
    const newColumns = cloneDeep(columns)

    delete newColumns[columnName]

    dispatch({ type: 'SET_COLUMNS', payload: newColumns })
  }

  const updateConfigField: PanelUpdateField = (_section, _subsection, fieldName, newValue) => {
    dispatch({ type: 'SET_CONFIG', payload: { ...config, [fieldName]: newValue } as Config })
  }

  const updateConfig = (nextConfig: Config) => {
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
