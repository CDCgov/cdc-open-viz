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
  const [table, setTable] = tableState
  const [showEditorPanel, setShowEditorPanel] = showEditorPanelState
  const [columns, setColumns] = columnsState

  const onBackClick = () => {
    setShowEditorPanel(cur => !cur)
  }

  const createFieldUpdater = (curValue, setter) => (_section, subsection, fieldName, newValue) => {
    if (fieldName === 'columns') {
      setColumns(newValue)
      return
    }

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
              {/* Columns */}
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>Columns</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <ColumnsEditor
                    config={config}
                    updateField={createFieldUpdater(columns, setColumns)}
                    deleteColumn={removeAdditionalColumn}
                  />{' '}
                </AccordionItemPanel>
              </AccordionItem>

              {
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>Data Table</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <DataTableEditor
                      config={config}
                      columns={Object.keys(data[0] || {})}
                      updateField={createFieldUpdater(table, setTable)}
                    />
                  </AccordionItemPanel>
                </AccordionItem>
              }
            </Accordion>
          </form>
        </section>
      </Layout.Sidebar>
    </ErrorBoundary>
  )
}

export default EditorPanel
