import { useContext, useRef } from 'react'
import { CheckBox, TextField } from '@cdc/core/components/EditorPanel/Inputs'
import { updateFieldFactory } from '@cdc/core/helpers/updateFieldFactory'
import ConfigContext from '../../../../../ConfigContext'

const ContentEditorPanel = () => {
  const { config, updateConfig } = useContext(ConfigContext)
  const { inlineHTML, srcUrl, useInlineHTML } = config.contentEditor || {}
  const updateField = updateFieldFactory(config, updateConfig, true)
  const textAreaInEditorContainer = useRef(null)

  return (
    <>
      <span className='divider-heading'>Enter Markup</span>
      <CheckBox
        value={useInlineHTML}
        section='contentEditor'
        fieldName='useInlineHTML'
        label='Use Inline HTML'
        updateField={updateField}
      />
      <div className='column-edit'>
        {useInlineHTML ? (
          <div ref={textAreaInEditorContainer}>
            <TextField
              value={inlineHTML}
              section='contentEditor'
              fieldName='inlineHTML'
              label='HTML'
              placeholder='Add HTML here'
              type='textarea'
              updateField={updateField}
            />
          </div>
        ) : (
          <TextField
            value={srcUrl || ''}
            section='contentEditor'
            fieldName='srcUrl'
            label='Source URL;'
            placeholder='https://www.example.com/file.html'
            updateField={updateField}
          />
        )}
      </div>
    </>
  )
}

export default ContentEditorPanel
