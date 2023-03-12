import React from 'react'

// Hooks
import { useVisConfig } from '@cdc/core/hooks/store/useVisConfig'

// Components - Core
import Button from '@cdc/core/components/element/Button'
import InputSelect from '@cdc/core/components/input/InputSelect'
import InputText from '@cdc/core/components/input/InputText'
import Label from '@cdc/core/components/element/Label'
import SectionBlock from '@cdc/core/components/ui/SectionBlock'

// Data
import { DATA_OPERATORS } from '../data/consts'

const PanelDynamicImages = () => {
  // Store Selectors
  const { config, updateVisConfig } = useVisConfig()

  const createDynamicImage = () => {
    let imageOptions = config.imageData.options ? [ ...config.imageData.options ] : []
    imageOptions.push({ source: '', arguments: [ { operator: '', threshold: '' } ], alt: '', secondArgument: false })

    let payload = { ...config.imageData, options: imageOptions }
    updateVisConfig({ imageData: payload })
  }

  const updateDynamicImageOptions = (name, index, value) => {
    let imageOptions = [ ...config.imageData.options ]

    imageOptions[index] = {
      ...imageOptions[index],
      [name]: value
    }

    let payload = { ...config.imageData, options: imageOptions }
    updateVisConfig({ imageData: payload })
  }

  const deleteDynamicImage = (index) => {
    let imageOptions = [ ...config.imageData.options ]
    imageOptions.splice(index, 1)

    let payload = { ...config.imageData, options: imageOptions }
    updateVisConfig({ imageData: payload })
  }

  const updateOptionArgument = (name, optionIndex, argumentIndex, value) => {
    let imageArguments = [ ...config.imageData.options[optionIndex].arguments ]
    imageArguments[argumentIndex] = { ...imageArguments[argumentIndex], [name]: value }

    let argumentsPayload = { ...config.imageData.options[optionIndex], arguments: imageArguments }
    let optionsPayload = [ ...config.imageData.options ]
    optionsPayload[optionIndex] = argumentsPayload

    let payload = { ...config.imageData, options: optionsPayload }
    updateVisConfig({ imageData: payload })
  }

  const deleteOptionArgument = (index) => {
    let imageOptions = [ ...config.imageData.options ]

    imageOptions[index] = {
      ...imageOptions[index],
      ...Object.assign([], imageOptions[index], {
        arguments: config.imageData.options[index].arguments.length > 1
          ? [ ...imageOptions[index].arguments.slice(0, -1) ]
          : [ ...imageOptions[index].arguments ],
        secondArgument: false
      })
    }

    let payload = { ...config.imageData, options: imageOptions }
    updateVisConfig({ imageData: payload })
  }

  return (
    <>
      <InputText label="Image URL (default)" configField={[ 'imageData', 'url' ]}/>
      <InputText label="Alt Text (default)" configField={[ 'imageData', 'alt' ]}/>

      <hr className="cove-editor__divider"/>

      {(!config.imageData.options || config.imageData.options.length === 0) &&
        <p className="mb-2" style={{ textAlign: 'center' }}>
          There are currently no dynamic images.
        </p>
      }

      {config.imageData.options && config.imageData.options.length > 0 &&
        <>
          {config.imageData.options.map((option, index) => (
            <SectionBlock key={index}>
              <Button className="cove-button--remove" onClick={() => {
                deleteDynamicImage(index)
              }}>Remove</Button>

              <Label>{'Image #' + (index + 1)}</Label>

              <div className="cove-grid cove-grid--gap--2 cove-ternary">
                <div className="cove-grid__col--4">
                  <span className="cove-ternary__label">If Value...</span>
                </div>
                <div className="cove-grid__col--4">
                  <InputSelect className="mb-0" label="" options={DATA_OPERATORS} onChange={(e) =>
                    updateOptionArgument('operator', index, 0, e.target.value)
                  } initialDisabled/>
                </div>
                <div className="cove-grid__col--4">
                  <InputText className="mb-0" onChange={(e) =>
                    updateOptionArgument('threshold', index, 0, e.target.value)
                  }/>
                </div>
              </div>

              <div className={`cove-ternary__condition` + (!option.secondArgument ? ` cove-ternary__condition--final` : ``)}>
                <InputSelect className="mb-0" value={option.secondArgument ? 'and' : 'then'} options={[ 'then', 'and' ]} onChange={(e) => {
                  if ('then' === e.target.value) deleteOptionArgument(index)
                  if ('and' === e.target.value) updateDynamicImageOptions('secondArgument', index, true)
                }}/>
              </div>

              {option.secondArgument && option.secondArgument === true &&
                <>
                  <div className="cove-grid cove-grid--gap--2 cove-ternary">
                    <div className="cove-grid__col--4">
                      <span className="cove-ternary__label">If Value...</span>
                    </div>
                    <div className="cove-grid__col--4">
                      <InputSelect className="mb-0" options={DATA_OPERATORS} onChange={(e) =>
                        updateOptionArgument('operator', index, 1, e.target.value)
                      } initialDisabled/>
                    </div>
                    <div className="cove-grid__col--4">
                      <InputText className="mb-0" type="number" onChange={(e) =>
                        updateOptionArgument('threshold', index, 1, e.target.value)
                      }/>
                    </div>
                  </div>
                  <div className="cove-ternary__condition--final">Then</div>
                </>
              }

              <InputText label="Image URL" onChange={(e) =>
                updateDynamicImageOptions('source', index, e.target.value)
              }/>

              <InputText label="Image Alt Text" onChange={(e) =>
                updateDynamicImageOptions('alt', index, e.target.value)
              }/>
            </SectionBlock>
          ))}
        </>
      }
      <Button className="mb-2" onClick={() => createDynamicImage()} fluid>Add Dynamic Image</Button>
    </>
  )
}

export default PanelDynamicImages
