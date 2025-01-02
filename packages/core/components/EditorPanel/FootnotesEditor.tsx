import { UpdateFieldFunc } from '../../types/UpdateFieldFunc'
import _ from 'lodash'
import Footnotes, { Footnote } from '../../types/Footnotes'
import { footnotesSymbols } from '../../helpers/footnoteSymbols'
import InputSelect from '../inputs/InputSelect'
import { TextField } from './Inputs'
interface FootnotesEditorProps {
  config: Footnotes
  updateField: UpdateFieldFunc<Footnote[]>
}

const FootnotesEditor: React.FC<FootnotesEditorProps> = ({ config, updateField }) => {
  const addStaticFootnote = () => {
    const newStaticNotes = [...(config.staticFootnotes || []), { text: 'Add Footnote Text' }]
    updateField(null, null, 'staticFootnotes', newStaticNotes)
  }

  const updateStaticFootnote = (footnoteIndex, footnoteUpdate: Footnote) => {
    const footnoteCopy = _.cloneDeep(config.staticFootnotes)
    footnoteCopy[footnoteIndex] = footnoteUpdate
    updateField(null, null, 'staticFootnotes', footnoteCopy)
  }

  const deleteStaticFootnote = footnoteIndex => {
    const footnoteCopy = _.cloneDeep(config.staticFootnotes)
    footnoteCopy.splice(footnoteIndex, 1)
    updateField(null, null, 'staticFootnotes', footnoteCopy)
  }

  const getOptions = (opts: string[]) => {
    return [['', '--Select--']].concat(opts.map(key => [key, key]))
  }

  const datasets = config.datasets || {}

  const dataColumns = config.dataKey ? getOptions(Object.keys(datasets[config.dataKey]?.data?.[0] || {})) : []
  const dataSetOptions = getOptions(Object.keys(datasets))
  return (
    <>
      <em>Dynamic Footnotes</em>
      <div className='row border p-2'>
        <InputSelect
          label='Select a Footnote Dataset'
          value={config.dataKey}
          options={dataSetOptions}
          fieldName='dataKey'
          updateField={updateField}
        />

        {config.dataKey && (
          <div className='p-3'>
            <InputSelect
              label='Footnote Symbol Column'
              value={config.dynamicFootnotes?.symbolColumn}
              options={dataColumns}
              section='dynamicFootnotes'
              fieldName='symbolColumn'
              updateField={updateField}
            />
            <InputSelect
              label='Footnote Text Column'
              value={config.dynamicFootnotes?.textColumn}
              options={dataColumns}
              section='dynamicFootnotes'
              fieldName='textColumn'
              updateField={updateField}
            />
            <InputSelect
              label='Footnote Order Column'
              value={config.dynamicFootnotes?.orderColumn}
              options={dataColumns}
              section='dynamicFootnotes'
              fieldName='orderColumn'
              updateField={updateField}
            />
          </div>
        )}
      </div>

      <hr />

      <em>Static Footnotes</em>

      {config.staticFootnotes?.map((note, index) => (
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
