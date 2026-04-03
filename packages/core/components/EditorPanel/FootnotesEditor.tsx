import React, { useState } from 'react'
import { Draggable } from '@hello-pangea/dnd'
import { UpdateFieldFunc } from '../../types/UpdateFieldFunc'
import _ from 'lodash'
import Footnotes, { Footnote } from '../../types/Footnotes'
import { footnotesSymbols } from '../../helpers/footnoteSymbols'
import GroupedList from './GroupedList'
import { TextField, Select } from './Inputs'
import Icon from '../ui/Icon'
import { Datasets } from '@cdc/core/types/DataSet'
import DataTransform from '../../helpers/DataTransform'
import fetchRemoteData from '../../helpers/fetchRemoteData'
import Loader from '../Loader'
import { AnyVisualization } from '../../types/Visualization'
import Button from '../elements/Button'
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel
} from 'react-accessible-accordion'
interface FootnotesEditorProps {
  config: AnyVisualization
  updateField: UpdateFieldFunc<Footnote[] | Object>
  datasets: Datasets
}

const FootnotesEditor: React.FC<FootnotesEditorProps> = ({ config, updateField, datasets }) => {
  const footnotesConfig = config.footnotes || {}
  const [errorMessage, setErrorMessage] = useState('')
  const [loadingAPIData, setLoadingAPIData] = useState(false)
  const [datasetsCache, setDatasetsCache] = useState(datasets || {})
  const transform = new DataTransform()

  const fetchData = async datasetKey => {
    const { data, dataUrl } = datasetsCache[datasetKey]
    if (!dataUrl) return data
    let newData = data
    const noCachedData = dataUrl && !data
    const dataSetChanged = datasetKey !== footnotesConfig.dataKey
    setErrorMessage('')
    if (dataSetChanged || noCachedData) {
      setLoadingAPIData(true)
      try {
        const result = await fetchRemoteData(dataUrl)
        newData = transform.autoStandardize(result.data)
      } catch (e) {
        setErrorMessage('There was an issue loading the data source. Please check the datasource URL and try again.')
      }

      setLoadingAPIData(false)
    }
    return newData
  }

  const addStaticFootnote = () => {
    const newStaticNotes = [...(footnotesConfig.staticFootnotes || []), { text: 'Add Footnote Text' }]
    updateField('footnotes', null, 'staticFootnotes', newStaticNotes)
  }

  const updateStaticFootnote = (footnoteIndex, footnoteUpdate: Footnote) => {
    const footnoteCopy = _.cloneDeep(footnotesConfig.staticFootnotes)
    footnoteCopy[footnoteIndex] = footnoteUpdate
    updateField('footnotes', null, 'staticFootnotes', footnoteCopy)
  }

  const deleteStaticFootnote = footnoteIndex => {
    const footnoteCopy = _.cloneDeep(footnotesConfig.staticFootnotes)
    footnoteCopy.splice(footnoteIndex, 1)
    updateField('footnotes', null, 'staticFootnotes', footnoteCopy)
  }

  const moveStaticFootnote = (sourceIndex, destinationIndex) => {
    const footnoteCopy = _.cloneDeep(footnotesConfig.staticFootnotes || [])
    const [movedFootnote] = footnoteCopy.splice(sourceIndex, 1)
    footnoteCopy.splice(destinationIndex, 0, movedFootnote)
    updateField('footnotes', null, 'staticFootnotes', footnoteCopy)
  }

  const getSelectOptions = (opts: string[]) => {
    return [{ value: '', label: '--Select--' }].concat(opts.map(key => ({ value: key, label: key })))
  }

  const dataColumns = footnotesConfig.dataKey
    ? getSelectOptions(Object.keys(datasetsCache[footnotesConfig.dataKey]?.data?.[0] || {}))
    : []
  const dataSetOptions = getSelectOptions(Object.keys(datasetsCache))

  const changeFootnoteDataKey = async value => {
    if (value) {
      if (!datasetsCache[value]) {
        const newData = await fetchData(value)
        setDatasetsCache({ ...datasetsCache, [value]: { ...datasetsCache[value], data: newData } })
      }
    } else {
      updateField('footnotes', null, 'dynamicFootnotes', {})
    }

    updateField('footnotes', null, 'dataKey', value)
  }
  return (
    <>
      {loadingAPIData && <Loader fullScreen />}
      <em>Dynamic Footnotes</em>
      <div className='row border p-2'>
        <Select
          label='Select a Footnote Dataset'
          value={footnotesConfig.dataKey}
          options={dataSetOptions}
          fieldName='dataKey'
          updateField={(section, subsection, fieldname, dataKey) => {
            changeFootnoteDataKey(dataKey)
          }}
        />
        {errorMessage && <p className='text-danger'>{errorMessage}</p>}

        {footnotesConfig.dataKey && (
          <div className='p-3'>
            <Select
              label='Footnote Symbol Column'
              value={footnotesConfig.dynamicFootnotes?.symbolColumn}
              options={dataColumns}
              section='footnotes'
              subsection='dynamicFootnotes'
              fieldName='symbolColumn'
              updateField={updateField}
            />
            <Select
              label='Footnote Text Column'
              value={footnotesConfig.dynamicFootnotes?.textColumn}
              options={dataColumns}
              section='footnotes'
              subsection='dynamicFootnotes'
              fieldName='textColumn'
              updateField={updateField}
            />
            <Select
              label='Footnote Order Column'
              value={footnotesConfig.dynamicFootnotes?.orderColumn}
              options={dataColumns}
              section='footnotes'
              subsection='dynamicFootnotes'
              fieldName='orderColumn'
              updateField={updateField}
            />
          </div>
        )}
      </div>

      <hr />

      <GroupedList
        items={footnotesConfig.staticFootnotes}
        label='Static Footnotes'
        droppableId='static-footnotes-order'
        onDragEnd={({ source, destination }) => {
          if (!destination || source.index === destination.index) return
          moveStaticFootnote(source.index, destination.index)
        }}
        renderItem={(note, index) => {
          const symbolOptions = [
            { value: '', label: '--Select--' },
            ...footnotesSymbols.map(([value, label]) => ({ value, label }))
          ]

          return (
            <Draggable key={`static-footnote-${index}`} draggableId={`static-footnote-${index}`} index={index}>
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  className={snapshot.isDragging ? 'currently-dragging' : ''}
                  style={provided.draggableProps.style}
                >
                  <Accordion allowZeroExpanded>
                    <AccordionItem className='series-item series-item--chart'>
                      <AccordionItemHeading className='series-item__title'>
                        <AccordionItemButton className='accordion__button'>
                          <Icon display='move' size={15} style={{ cursor: 'default' }} />
                          {note.symbol ? `Footnote ${note.symbol}` : `Footnote ${index + 1}`}
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <div className='series-item__panel-actions'>
                          <Button
                            type='button'
                            variant='danger'
                            size='sm'
                            className='grouped-list__remove'
                            onClick={event => {
                              event.preventDefault()
                              deleteStaticFootnote(index)
                            }}
                          >
                            Delete
                          </Button>
                        </div>
                        <Select
                          label='Symbol'
                          value={note.symbol}
                          options={symbolOptions}
                          fieldName='symbol'
                          updateField={(section, subsection, fieldName, value) =>
                            updateStaticFootnote(index, { ...note, symbol: value })
                          }
                        />
                        <TextField
                          label='Text'
                          value={note.text}
                          fieldName='text'
                          updateField={(section, subsection, fieldName, value) =>
                            updateStaticFootnote(index, { ...note, text: value })
                          }
                        />
                      </AccordionItemPanel>
                    </AccordionItem>
                  </Accordion>
                </div>
              )}
            </Draggable>
          )
        }}
      />
      <Button variant='editor-primary' onClick={addStaticFootnote}>
        Add Static Footnote
      </Button>
    </>
  )
}

export default FootnotesEditor
