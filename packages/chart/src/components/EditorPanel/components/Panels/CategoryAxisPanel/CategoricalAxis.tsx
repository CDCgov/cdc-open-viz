import React from 'react'
import chroma from 'chroma-js'
import { TextField } from '@cdc/core/components/EditorPanel/Inputs'
import Button from '@cdc/core/components/elements/Button'
import Icon from '@cdc/core/components/ui/Icon'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import type { ChartConfig } from '../../../../../types/ChartConfig'

interface CategoricalAxisProps {
  config: ChartConfig
  updateConfig: Function
  display: boolean
}

const CategoricalAxis: React.FC<CategoricalAxisProps> = ({ config, updateConfig, display }) => {
  const dataDrivenCategories = config.yAxis.dataDrivenCategories
  const isDataDriven =
    config.yAxis.categoryMode === 'data-driven' || (config.yAxis.categoryMode === undefined && !!dataDrivenCategories)

  const updateDynamicCategories = (updates: Record<string, any>) => {
    updateConfig({
      ...config,
      yAxis: {
        ...config.yAxis,
        dataDrivenCategories: { ...dataDrivenCategories, ...updates }
      }
    })
  }

  const updateDynamicCategory = (index: number, fieldName: string, value: string) => {
    const categories = [...(dataDrivenCategories?.categories || [])]
    categories[index] = { ...categories[index], [fieldName]: value }
    updateDynamicCategories({ categories })
  }

  const addDynamicCategory = () => {
    const categories = [...(dataDrivenCategories?.categories || [])]
    categories.push({ label: `Category ${categories.length + 1}`, upperBoundKey: '', color: '#c9c9c9' })
    updateDynamicCategories({ categories })
  }

  const removeDynamicCategory = (index: number) => {
    const categories = [...(dataDrivenCategories?.categories || [])]
    categories.splice(index, 1)
    updateDynamicCategories({ categories })
  }

  const maxHeight = config?.yAxis?.maxValue

  const totalEnteredHeight =
    config?.yAxis?.categories?.reduce((sum, obj) => sum + (parseFloat(obj.height) || 0), 0) || 0

  const removeColumn = i => {
    let categories = []

    if (config.yAxis.categories) {
      categories = [...config.yAxis.categories]
    }

    categories.splice(i, 1)

    updateConfig({ ...config, yAxis: { ...config.yAxis, categories } })
  }

  const getDarkerColor = () => {
    const timesDarkened = config.yAxis?.categories?.length
    const darkeningFactor = 0.4
    const baseColor = '#ddd'
    return chroma(baseColor)
      .darken(darkeningFactor * timesDarkened)
      .hex()
  }

  const addColumn = () => {
    const categories = config.yAxis.categories ? [...config.yAxis.categories] : []
    const defaultValues = {
      label: 'Label ' + Number(categories.length + 1),
      height: '',
      color: getDarkerColor()
    }
    categories.push(defaultValues)
    updateConfig({ ...config, yAxis: { ...config.yAxis, categories: categories } })
  }

  const update = (fieldName, value, i) => {
    let categories = []

    if (config.yAxis.categories) {
      categories = [...config.yAxis.categories]
    }

    categories[i][fieldName] = value

    updateConfig({ ...config, yAxis: { ...config.yAxis, categories } })
  }

  if (!display) {
    return <></>
  }

  if (isDataDriven && dataDrivenCategories) {
    return (
      <div className='edit-block'>
        <p>Data-Driven Category Axis</p>
        <p>Thresholds are read from the current filtered data. The last category defines the axis maximum.</p>
        {dataDrivenCategories.categories?.map((category, index) => (
          <div key={category.upperBoundKey || category.label || 'unnamed-category'} className='edit-block'>
            <p>Data-Driven Category {index + 1}</p>
            <Button type='button' className='btn btn-danger' onClick={() => removeDynamicCategory(index)}>
              Remove
            </Button>
            <TextField
              value={category.label}
              fieldName='label'
              label='Category Label'
              updateField={(_, __, fieldName, value) => updateDynamicCategory(index, fieldName, value)}
            />
            <TextField
              value={category.upperBoundKey}
              fieldName='upperBoundKey'
              label='Upper-Bound Column'
              updateField={(_, __, fieldName, value) => updateDynamicCategory(index, fieldName, value)}
            />
            <TextField
              value={category.color}
              fieldName='color'
              label='Color'
              updateField={(_, __, fieldName, value) => updateDynamicCategory(index, fieldName, value)}
            />
          </div>
        ))}
        <Button type='button' variant='editor-primary' onClick={addDynamicCategory}>
          Add Data-Driven Category
        </Button>
      </div>
    )
  }

  return (
    <>
      {config.yAxis.type === 'categorical' &&
        config.yAxis.categories?.map(({ label, color, height }, i) => {
          return (
            <div key={`preliminaryData-${i}`} className='edit-block'>
              <p>Axis Category {i + 1}</p>
              <Button
                type='button'
                className='btn btn-danger'
                onClick={event => {
                  event.preventDefault()
                  removeColumn(i)
                }}
              >
                Remove
              </Button>
              <TextField
                tooltip={
                  <Tooltip style={{ textTransform: 'none' }}>
                    <Tooltip.Target>
                      <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                    </Tooltip.Target>
                    <Tooltip.Content>
                      <p>
                        {' '}
                        Category Height will be ignored for the last category. The last category will fill the rest of
                        the axis height.
                      </p>
                    </Tooltip.Content>
                  </Tooltip>
                }
                type='number'
                value={height}
                fieldName='height'
                label='Category Height'
                updateField={(_, __, fieldName, value) => update(fieldName, value, i)}
              />
              {Number(totalEnteredHeight) > Number(maxHeight) && config.yAxis.categories.length - 1 === i && (
                <span style={{ color: 'red', display: 'block', fontSize: '15px' }}>
                  Update Max value to show all categories
                </span>
              )}

              <div className='two-col-inputs'>
                <TextField
                  value={color}
                  fieldName='color'
                  label='Color'
                  updateField={(_, __, fieldName, value) => update(fieldName, value, i)}
                />
                <TextField
                  value={label}
                  fieldName='label'
                  label='Label'
                  updateField={(_, __, fieldName, value) => update(fieldName, value, i)}
                />
              </div>
            </div>
          )
        })}

      <Button type='button' variant='editor-primary' onClick={addColumn}>
        Add Axis Category
      </Button>
    </>
  )
}

export default CategoricalAxis
