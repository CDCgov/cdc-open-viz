import React from 'react'
import _ from 'lodash'
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel
} from 'react-accessible-accordion'

import ColumnsEditor from '@cdc/core/components/EditorPanel/ColumnsEditor'
import DataTableEditor from '@cdc/core/components/EditorPanel/DataTableEditor'
import VizFilterEditor from '@cdc/core/components/EditorPanel/VizFilterEditor'
import { EditorPanelDispatch } from '@cdc/core/components/EditorPanel/EditorPanelDispatch'
import { Select } from '@cdc/core/components/EditorPanel/Inputs'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import Icon from '@cdc/core/components/ui/Icon'

import { State } from '../store/dataTable.reducer'

const EditorPanel = ({ state, dispatch }) => {
  const { table, columns, filters, data, config } = state as State

  // Creates a function that updates a field in a specified state
  const createFieldUpdater = (curValue, setter) => (section, subsection, fieldName, newValue) => {
    if (!section) return dispatch({ type: setter, payload: newValue })

    // Find/assign the value to be updated
    const valueCopy = _.cloneDeep(curValue)
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
    const newColumns = _.cloneDeep(columns)

    delete newColumns[columnName]

    dispatch({ type: 'SET_COLUMNS', payload: newColumns })
  }

  const updateConfigField = (_section, _subsection, fieldName, newValue) => {
    dispatch({ type: 'SET_CONFIG', payload: { ...config, [fieldName]: newValue } })
  }

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
              {/* COLUMNS */}
              <AccordionItem>
                {/* LABEL */}
                <AccordionItemHeading>
                  <AccordionItemButton>Columns</AccordionItemButton>
                </AccordionItemHeading>

                {/* COLUMNS EDITOR COMPONENT */}
                <AccordionItemPanel>
                  <ColumnsEditor
                    config={config}
                    updateField={createFieldUpdater(columns, 'SET_COLUMNS')}
                    deleteColumn={removeAdditionalColumn}
                  />
                </AccordionItemPanel>
              </AccordionItem>

              {/* DATA TABLE */}
              <AccordionItem>
                {/* LABEL */}
                <AccordionItemHeading>
                  <AccordionItemButton>Data Table</AccordionItemButton>
                </AccordionItemHeading>

                {/* DATA TABLE EDITOR COMPONENT */}
                <AccordionItemPanel>
                  <DataTableEditor config={config} columns={Object.keys(data[0] || {})} updateField={updateDataTable} />
                  <Select
                    value={config.locale}
                    fieldName='locale'
                    label='Language for dates and numbers'
                    updateField={updateConfigField}
                    options={[
                      { value: 'en-US', label: 'English (en-US)' },
                      { value: 'es-MX', label: 'Spanish (es-MX)' }
                    ]}
                    tooltip={
                      <Tooltip style={{ textTransform: 'none' }}>
                        <Tooltip.Target>
                          <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                        </Tooltip.Target>
                        <Tooltip.Content>
                          <p>
                            Change the language (locale) for this visualization to alter the way dates and numbers are
                            formatted.
                          </p>
                        </Tooltip.Content>
                      </Tooltip>
                    }
                  />
                </AccordionItemPanel>
              </AccordionItem>

              {/* FILTERS */}
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>Filters</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <VizFilterEditor config={config} updateField={updateFilters} rawData={data} />
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </form>
        </section>
      )}
    </EditorPanelDispatch>
  )
}

export default EditorPanel
