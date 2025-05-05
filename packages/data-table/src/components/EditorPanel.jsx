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
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import Layout from '@cdc/core/components/Layout'

const EditorPanel = ({ config, columnsState, showEditorPanelState, data, tableState }) => {
  /* STATES */
  const [table, setTable] = tableState
  const [showEditorPanel, setShowEditorPanel] = showEditorPanelState
  const [columns, setColumns] = columnsState

  const onBackClick = () => {
    setShowEditorPanel(cur => !cur)
  }

  // Creates a function that updates a field in a specified state
  const createFieldUpdater = (curValue, setter) => (_section, subsection, fieldName, newValue) => {
    // Both table and column editors have a field that replaces the entire columns object
    if (fieldName === 'columns') {
      setColumns(newValue)
      return
    }

    // Find/assign the value to be updated
    const valueCopy = _.cloneDeep(curValue)
    if (!subsection) valueCopy[fieldName] = newValue
    else {
      if (!valueCopy[subsection]) valueCopy[subsection] = {}
      valueCopy[subsection][fieldName] = newValue
    }
    setter(valueCopy)
  }

  const removeAdditionalColumn = columnName => {
    const newColumns = _.cloneDeep(columns)

    delete newColumns[columnName]

    setColumns(newColumns)
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
                    updateField={createFieldUpdater(columns, setColumns)}
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
                  <DataTableEditor
                    config={config}
                    columns={Object.keys(data[0] || {})}
                    updateField={createFieldUpdater(table, setTable)}
                  />
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
