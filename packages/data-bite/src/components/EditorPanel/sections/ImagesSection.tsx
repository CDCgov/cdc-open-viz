import { useContext } from 'react'

import { Select, TextField } from '@cdc/core/components/EditorPanel/Inputs'
import { DATA_OPERATORS } from '@cdc/core/helpers/constants'
import { updateFieldFactory } from '@cdc/core/helpers/updateFieldFactory'
import { useListManagement } from '@cdc/core/hooks/useListManagement'

import { IMAGE_POSITIONS } from '../../../constants'
import Context from '../../../context'

const ImagesSection = () => {
  const { config, updateConfig } = useContext(Context)
  const updateField = updateFieldFactory(config, updateConfig, true)

  const images = useListManagement({
    config,
    updateConfig,
    listPath: 'imageData.options',
    createItem: () => ({
      source: '',
      arguments: [{ operator: '', threshold: '' }],
      alt: '',
      secondArgument: false
    })
  })

  const removeDynamicArgument = (index: number) => {
    const item = images.items[index]
    if (item?.arguments?.length > 1) {
      const updatedArguments = [...item.arguments]
      updatedArguments.pop()
      images.updateField(index, 'arguments', updatedArguments)
    }
  }

  return (
    <>
      <Select
        value={config.imageData.display || ''}
        section='imageData'
        fieldName='display'
        label='Image Display Type'
        updateField={updateField}
        options={['none', 'static', 'dynamic']}
      />
      <Select
        value={config.bitePosition || ''}
        fieldName='bitePosition'
        label='Image/Graphic Position'
        updateField={updateField}
        initial='Select'
        options={IMAGE_POSITIONS}
      />
      {['static'].includes(config.imageData.display) && (
        <>
          <TextField
            value={config.imageData.url}
            section='imageData'
            fieldName='url'
            label='Image URL'
            updateField={updateField}
          />
          <TextField
            value={config.imageData.alt}
            section='imageData'
            fieldName='alt'
            label='Alt Text'
            updateField={updateField}
          />
        </>
      )}

      {['dynamic'].includes(config.imageData.display) && (
        <>
          <TextField
            value={config.imageData.url || ''}
            section='imageData'
            fieldName='url'
            label='Image URL (default)'
            updateField={updateField}
          />
          <TextField
            value={config.imageData.alt}
            section='imageData'
            fieldName='alt'
            label='Alt Text (default)'
            updateField={updateField}
          />

          <hr className='accordion__divider' />

          {(!images.items || images.items.length === 0) && (
            <p style={{ textAlign: 'center' }}>There are currently no dynamic images.</p>
          )}
          {images.items && images.items.length > 0 && (
            <>
              <ul>
                {images.items.map((option: any, index: number) => (
                  <fieldset className='edit-block' key={index}>
                    <button
                      type='button'
                      className='remove-column'
                      onClick={() => {
                        images.remove(index)
                      }}
                    >
                      Remove
                    </button>
                    <label>
                      <span className='edit-label column-heading'>
                        <strong>{'Image #' + (index + 1)}</strong>
                      </span>

                      <div className='accordion__panel-row align-center'>
                        <div className='accordion__panel-col flex-auto'>If Value</div>
                        <div className='accordion__panel-col flex-auto'>
                          <Select
                            label=''
                            value={option.arguments[0]?.operator || ''}
                            options={DATA_OPERATORS}
                            onChange={e => {
                              images.updateNested(index, 'arguments', 0, 'operator', e.target.value)
                            }}
                          />
                        </div>
                        <div className='accordion__panel-col flex-grow flex-shrink'>
                          <input
                            type='number'
                            value={option.arguments[0]?.threshold || ''}
                            onChange={e => {
                              images.updateNested(index, 'arguments', 0, 'threshold', e.target.value)
                            }}
                          />
                        </div>
                      </div>

                      <div className='accordion__panel-row mb-2 align-center'>
                        <div className='accordion__panel-col flex-grow'>
                          <Select
                            label=''
                            value={option.secondArgument ? 'and' : 'then'}
                            options={[
                              { value: 'then', label: 'Then' },
                              { value: 'and', label: 'And' }
                            ]}
                            onChange={e => {
                              if ('then' === e.target.value) {
                                images.updateField(index, 'secondArgument', false)
                                removeDynamicArgument(index)
                              }
                              if ('and' === e.target.value) {
                                images.updateField(index, 'secondArgument', true)
                              }
                            }}
                          />
                        </div>
                      </div>

                      {option.secondArgument && true === option.secondArgument && (
                        <>
                          <div className='accordion__panel-row align-center'>
                            <div className='accordion__panel-col flex-auto'>If Value</div>
                            <div className='accordion__panel-col flex-auto'>
                              <Select
                                label=''
                                value={option.arguments[1]?.operator || ''}
                                options={DATA_OPERATORS}
                                onChange={e => {
                                  images.updateNested(index, 'arguments', 1, 'operator', e.target.value)
                                }}
                              />
                            </div>
                            <div className='accordion__panel-col flex-grow flex-shrink'>
                              <input
                                type='number'
                                value={option.arguments[1]?.threshold || ''}
                                onChange={e => {
                                  images.updateNested(index, 'arguments', 1, 'threshold', e.target.value)
                                }}
                              />
                            </div>
                          </div>
                          <div className='accordion__panel-row mb-2 align-center text-center text-capitalize'>
                            <div className='accordion__panel-col flex-grow'>Then</div>
                          </div>
                        </>
                      )}

                      <div className='accordion__panel-row mb-2 align-center'>
                        <div className='accordion__panel-col flex-auto'>Show</div>
                        <div className='accordion__panel-col flex-grow'>
                          <input
                            type='text'
                            value={option.source || ''}
                            onChange={e => {
                              images.updateField(index, 'source', e.target.value)
                            }}
                          />
                        </div>
                      </div>

                      <div className='accordion__panel-row mb-2 align-center'>
                        <div className='accordion__panel-col flex-auto'>Alt Text</div>
                        <div className='accordion__panel-col flex-grow'>
                          <input
                            type='text'
                            value={option.alt || ''}
                            onChange={e => {
                              images.updateField(index, 'alt', e.target.value)
                            }}
                          />
                        </div>
                      </div>
                    </label>
                  </fieldset>
                ))}
              </ul>
            </>
          )}
          <button type='button' onClick={images.add} className='btn btn-primary full-width'>
            Add Dynamic Image
          </button>
        </>
      )}
    </>
  )
}

export default ImagesSection
