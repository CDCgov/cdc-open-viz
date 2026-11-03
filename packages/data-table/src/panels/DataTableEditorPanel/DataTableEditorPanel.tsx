import React from 'react'
import { Accordion } from 'react-accessible-accordion'

import AdvancedEditor from '@cdc/core/components/AdvancedEditor/AdvancedEditor'
import { EditorPanelDispatch } from '@cdc/core/components/EditorPanel/EditorPanelDispatch'

import ColumnsPanel from '../ColumnsPanel'
import DataTableSettingsPanel from '../DataTableSettingsPanel'
import FiltersPanel from '../FiltersPanel'
import { type DataTableEditorPanelProps } from './types'
import useDataTableEditorPanel from './useDataTableEditorPanel'

const DataTableEditorPanel: React.FC<DataTableEditorPanelProps> = ({ state, dispatch }) => {
  const {
    config,
    columns,
    data,
    createFieldUpdater,
    updateDataTable,
    updateFilters,
    removeAdditionalColumn,
    updateConfigField,
    updateConfig,
    convertStateToConfig
  } = useDataTableEditorPanel({ state, dispatch })

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

export default DataTableEditorPanel
