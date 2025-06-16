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
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import Layout from '@cdc/core/components/Layout'

import { State } from '../store/dataTable.reducer'

const EditorPanel = ({ state, dispatch }) => {
  const { table, showEditorPanel, columns, filters, data, config } = state as State

  const onBackClick = () => {
    dispatch({ type: 'SET_SHOW_EDITOR_PANEL', payload: !showEditorPanel })
  }

  // Creates a function that updates a field in a specified state
  const createFieldUpdater = (curValue, setter) => (section, subsection, fieldName, newValue) => {
    if (!section) return dispatch({ type: setter, payload: newValue })

    // Find/assign the value to be updated
    const valueCopy = _.cloneDeep(curValue)
    if (!subsection) valueCopy[fieldName] = newValue
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

  return (
    <ErrorBoundary component='EditorPanel'>
      <Layout.Sidebar
        isEditor={true}
        config={config}
        title='Configure Data Table'
        onBackClick={onBackClick}
        displayPanel={showEditorPanel}
      >
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
      </Layout.Sidebar>
    </ErrorBoundary>
  )
}

export default EditorPanel
