import React, { useState } from 'react'
import { UpdateFieldFunc } from '../../types/UpdateFieldFunc'
import _ from 'lodash'
import Footnotes, { Footnote } from '../../types/Footnotes'
import { footnotesSymbols } from '../../helpers/footnoteSymbols'
import InputSelect from '../inputs/InputSelect'
import { TextField } from './Inputs'
import { Datasets } from '@cdc/core/types/DataSet'
import DataTransform from '../../helpers/DataTransform'
import fetchRemoteData from '../../helpers/fetchRemoteData'
import Loader from '../Loader'
import { AnyVisualization } from '../../types/Visualization'
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
        newData = await fetchRemoteData(dataUrl)
        newData = transform.autoStandardize(newData)
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

  const getOptions = (opts: string[]) => {
    return [['', '--Select--']].concat(opts.map(key => [key, key]))
  }

  const dataColumns = footnotesConfig.dataKey
    ? getOptions(Object.keys(datasetsCache[footnotesConfig.dataKey]?.data?.[0] || {}))
    : []
  const dataSetOptions = getOptions(Object.keys(datasetsCache))

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
        <InputSelect
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
            <InputSelect
              label='Footnote Symbol Column'
              value={footnotesConfig.dynamicFootnotes?.symbolColumn}
              options={dataColumns}
              section='footnotes'
              subsection='dynamicFootnotes'
              fieldName='symbolColumn'
              updateField={updateField}
            />
            <InputSelect
              label='Footnote Text Column'
              value={footnotesConfig.dynamicFootnotes?.textColumn}
              options={dataColumns}
              section='footnotes'
              subsection='dynamicFootnotes'
              fieldName='textColumn'
              updateField={updateField}
            />
            <InputSelect
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

      <em>Static Footnotes</em>

      {footnotesConfig.staticFootnotes?.map((note, index) => (
        <div key={index} className='row border p-2'>
          <div className='col-8'>
            <InputSelect
              label='Symbol'
              value={note.symbol}
              options={[['', '--Select--'], ...footnotesSymbols]}
              fieldName='symbol'
              updateField={(section, subsection, fieldName, value) =>
                updateStaticFootnote(index, { ...note, symbol: value })
              }
            />{' '}
            <TextField
              label='Text'
              value={note.text}
              fieldName='text'
              updateField={(section, subsection, fieldName, value) =>
                updateStaticFootnote(index, { ...note, text: value })
              }
            />
          </div>
          <div className='col-2 ms-4'>
            <button className='btn btn-danger p-1' onClick={() => deleteStaticFootnote(index)}>
              Delete
            </button>
          </div>
        </div>
      ))}
      <button className='btn btn-primary' onClick={addStaticFootnote}>
        Add Static Footnote
      </button>
    </>
  )
}

export default FootnotesEditor
