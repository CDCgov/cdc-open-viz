import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel
} from 'react-accessible-accordion'
import GroupedList from '@cdc/core/components/EditorPanel/GroupedList'
import Button from '@cdc/core/components/elements/Button'
import { TextField } from '@cdc/core/components/EditorPanel/Inputs'
import type { BreakpointAnalysis } from '../../../hooks/useManualBreakpoints'

type ManualBreakpointsEditorProps = {
  inputs: string[]
  items: { value: string; index: number }[]
  analysis: BreakpointAnalysis
  onAdd: () => void
  onRemove: (index: number) => void
  onClear: () => void
  onUpdate: (index: number, value: string) => void
  onCommit: (inputs: string[]) => void
}

const ManualBreakpointsEditor: React.FC<ManualBreakpointsEditorProps> = ({
  inputs,
  items,
  analysis,
  onAdd,
  onRemove,
  onClear,
  onUpdate,
  onCommit
}) => (
  <div className='manual-breakpoints-editor'>
    <span className='subtext'>
      Add numeric upper bounds. COVE sorts them automatically and uses the dataset minimum and maximum as the outer
      range edges.
    </span>
    <GroupedList
      items={items}
      label='Manual Breakpoints'
      droppableId='map-manual-breakpoints'
      draggable={false}
      listClassName='manual-breakpoints-editor__list'
      renderItem={({ value: breakpoint, index }) => (
        <Accordion allowZeroExpanded key={`manual-breakpoint-${index}`}>
          <AccordionItem className='series-item series-item--chart'>
            <AccordionItemHeading className='series-item__title'>
              <AccordionItemButton className='accordion__button'>
                {breakpoint ? `Breakpoint ${index + 1}: ${breakpoint}` : `Breakpoint ${index + 1}`}
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className='series-item__panel-actions'>
                <Button
                  type='button'
                  variant='danger'
                  size='sm'
                  className='grouped-list__remove'
                  onClick={() => onRemove(index)}
                  disabled={inputs.length === 1}
                >
                  Remove
                </Button>
              </div>
              <TextField
                type='number'
                label='Upper Bound'
                className='manual-breakpoints-editor__input'
                value={breakpoint}
                placeholder={`Breakpoint ${index + 1}`}
                updateField={(_section, _subsection, _fieldName, value) => {
                  onUpdate(index, String(value))
                }}
                onBlur={event => {
                  onCommit(inputs.map((item, itemIndex) => (itemIndex === index ? event.target.value : item)))
                }}
              />
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      )}
    />
    <div className='manual-breakpoints-editor__actions'>
      <Button type='button' variant='editor-primary' size='sm' onClick={onAdd}>
        Add Breakpoint
      </Button>
      <Button type='button' variant='secondary' size='sm' onClick={onClear}>
        Clear
      </Button>
    </div>
    {(analysis.hasEmptyRows || analysis.hasInvalidRows || analysis.duplicateValues.length > 0) && (
      <div className='manual-breakpoints-editor__warning'>
        {analysis.hasEmptyRows && <div>Empty rows are ignored until filled.</div>}
        {analysis.hasInvalidRows && <div>Invalid numeric values are ignored.</div>}
        {analysis.duplicateValues.length > 0 && (
          <div>Duplicate values are collapsed automatically: {' ' + analysis.duplicateValues.join(', ')}</div>
        )}
      </div>
    )}
  </div>
)

export default ManualBreakpointsEditor
