import React from 'react'
import cloneDeep from 'lodash/cloneDeep'
import { Accordion } from 'react-accessible-accordion'

import AdvancedEditor from '@cdc/core/components/AdvancedEditor/AdvancedEditor'
import { EditorPanelDispatch } from '@cdc/core/components/EditorPanel/EditorPanelDispatch'

import { State } from '../store/dataTable.reducer'
import ColumnsPanel from '../panels/ColumnsPanel'
import DataTableSettingsPanel from '../panels/DataTableSettingsPanel'
import FiltersPanel from '../panels/FiltersPanel'

const EditorPanel = ({ state, dispatch }) => {
  const { table, columns, filters, data, config } = state as State

  // Creates a function that updates a field in a specified state
  const createFieldUpdater = (curValue, setter) => (section, subsection, fieldName, newValue) => {
    if (!section) return dispatch({ type: setter, payload: newValue })

    // Find/assign the value to be updated
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

  const convertStateToConfig = () => config

  return (
    <EditorPanelDispatch
      state={state}
      dispatch={dispatch}
      title='Configure Data Table'
      showEditorPanelKey='showEditorPanel'
      toggleActionType='SET_SHOW_EDITOR_PANEL'
    >
      {({ state: _state, dispatch: _dispatch }) => (
        <section className='form-container'>
          <form>
            <Accordion allowZeroExpanded={true}>
              <ColumnsPanel
                config={config}
                updateField={createFieldUpdater(columns, 'SET_COLUMNS')}
                deleteColumn={removeAdditionalColumn}
              />

              <DataTableSettingsPanel
                config={config}
                columns={Object.keys(data[0] || {})}
                updateDataTable={updateDataTable}
                updateConfigField={updateConfigField}
              />

              <FiltersPanel config={config} data={data} updateFilters={updateFilters} />
            </Accordion>
            <AdvancedEditor loadConfig={updateConfig} config={config} convertStateToConfig={convertStateToConfig} />
          </form>
        </section>
      )}
    </EditorPanelDispatch>
  )
}

export default EditorPanel
