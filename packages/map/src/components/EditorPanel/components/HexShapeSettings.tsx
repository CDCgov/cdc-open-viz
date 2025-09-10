import React, { useContext } from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton
} from 'react-accessible-accordion'
import ConfigContext from '../../../context'
import _ from 'lodash'
import { cloneConfig } from '@cdc/core/helpers/cloneConfig'

const shapeOptions = ['Arrow Up', 'Arrow Down', 'Arrow Right', 'Arrow Left', 'None']

// todo: Move duplicated operators to CORE
export const DATA_OPERATOR_LESS = '<'
export const DATA_OPERATOR_GREATER = '>'
export const DATA_OPERATOR_LESSEQUAL = '<='
export const DATA_OPERATOR_GREATEREQUAL = '>='
export const DATA_OPERATOR_EQUAL = '='
export const DATA_OPERATOR_NOTEQUAL = '≠'
export const DATA_OPERATORS = [
  DATA_OPERATOR_LESS,
  DATA_OPERATOR_GREATER,
  DATA_OPERATOR_LESSEQUAL,
  DATA_OPERATOR_GREATEREQUAL,
  DATA_OPERATOR_EQUAL,
  DATA_OPERATOR_NOTEQUAL
]

/**
 * Notice: each shape Col has a legend title and description should the title/desc need to be different for different shapes.
 * @param {} props
 * @returns
 */
const HexSettingShapeColumns = props => {
  const { columnsOptions } = props
  const { config, setConfig } = useContext(ConfigContext)

  const handleItemUpdate = (key, value, shapeGroupIndex, itemIndex) => {
    setConfig({
      ...config,
      hexMap: {
        ...config.hexMap,
        shapeGroups: config.hexMap.shapeGroups.map((group, groupIndex) => {
          if (groupIndex === shapeGroupIndex) {
            return {
              ...group,
              items: group.items.map((item, index) => {
                if (itemIndex === index) {
                  return {
                    ...item,
                    [key]: value
                  }
                } else {
                  return item
                }
              })
            }
          } else {
            return group
          }
        })
      }
    })
  }

  const handleRemoveShapeCondition = (shapeGroupIndex, itemIndex) => {
    setConfig({
      ...config,
      hexMap: {
        ...config.hexMap,
        shapeGroups: config.hexMap.shapeGroups.map((group, groupIndex) => {
          if (groupIndex === shapeGroupIndex) {
            return {
              ...group,
              items: group.items.filter((item, index) => index !== itemIndex)
            }
          } else {
            return group
          }
        })
      }
    })
  }

  return (
    config.general.displayAsHex &&
    config.hexMap.type === 'shapes' && (
      <>
        <fieldset className='edit-block'>
          {config.hexMap.shapeGroups && (
            <>
              <Accordion allowZeroExpanded>
                <ul style={{ listStyle: 'none' }}>
                  {config.hexMap.shapeGroups?.map((shapeGroup, shapeGroupIndex) => {
                    return (
                      <AccordionItem>
                        <AccordionItemHeading>
                          <AccordionItemButton>{`Legend Shape Group ${shapeGroupIndex + 1}`}</AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <label>
                            <span className='edit-label column-heading'>Legend Title</span>
                            <input
                              type='text'
                              value={shapeGroup.legendTitle || ''}
                              onChange={e => {
                                const newConfig = cloneConfig(config)
                                newConfig.hexMap.shapeGroups[shapeGroupIndex].legendTitle = e.target.value
                                setConfig(newConfig)
                              }}
                            />
                          </label>

                          <label>
                            <span className='edit-label column-heading'>Legend Description</span>
                            <input
                              type='text'
                              value={shapeGroup.legendDescription || ''}
                              onChange={e => {
                                const newConfig = _.clone(config)
                                newConfig.hexMap.shapeGroups[shapeGroupIndex].legendDescription = e.target.value
                                setConfig(newConfig)
                              }}
                            />
                          </label>

                          {shapeGroup.items.map((item, itemIndex) => {
                            return (
                              <Accordion allowZeroExpanded style={{ marginTop: itemIndex === 0 ? '15px' : 'initial' }}>
                                <AccordionItem>
                                  <AccordionItemHeading>
                                    <AccordionItemButton>{`Shape Condition ${itemIndex + 1}`}</AccordionItemButton>
                                  </AccordionItemHeading>
                                  <AccordionItemPanel>
                                    <>
                                      <label>
                                        <span className='edit-label column-heading'>Shape Column</span>
                                        <select
                                          value={
                                            config.hexMap.shapeGroups[shapeGroupIndex].items[itemIndex].shape
                                              ? config.hexMap.shapeGroups[shapeGroupIndex].items[itemIndex].shape
                                              : 'select'
                                          }
                                          onChange={e => {
                                            handleItemUpdate('shape', e.target.value, shapeGroupIndex, itemIndex)
                                          }}
                                        >
                                          {shapeOptions.map(shape => (
                                            <option value={shape}>{shape}</option>
                                          ))}
                                        </select>
                                      </label>

                                      <div className='cove-input-group'>
                                        <label className=''>
                                          <span className='edit-label cove-input__label'>Column Conditional</span>
                                        </label>
                                        <div className='cove-accordion__panel-row cove-accordion__small-inputs'>
                                          <div className='cove-accordion__panel-col cove-input'>
                                            <select
                                              value={
                                                config.hexMap.shapeGroups[shapeGroupIndex].key === ''
                                                  ? 'Select'
                                                  : config.hexMap.shapeGroups[shapeGroupIndex].key
                                              }
                                              className='cove-input'
                                              onChange={e =>
                                                handleItemUpdate('key', e.target.value, shapeGroupIndex, itemIndex)
                                              }
                                            >
                                              {columnsOptions}
                                            </select>
                                          </div>
                                          <div className='cove-accordion__panel-col cove-input'>
                                            <select
                                              value={
                                                config.hexMap.shapeGroups[shapeGroupIndex].items[itemIndex].operator ||
                                                '-SELECT-'
                                              }
                                              initial='Select'
                                              className='cove-input'
                                              onChange={e =>
                                                handleItemUpdate('operator', e.target.value, shapeGroupIndex, itemIndex)
                                              }
                                            >
                                              {[DATA_OPERATOR_EQUAL].map(option => {
                                                return <option value={option}>{option}</option>
                                              })}
                                              {[DATA_OPERATOR_NOTEQUAL].map(option => {
                                                return <option value={option}>{option}</option>
                                              })}
                                              {[DATA_OPERATOR_LESS].map(option => {
                                                return <option value={option}>{option}</option>
                                              })}
                                              {[DATA_OPERATOR_GREATER].map(option => {
                                                return <option value={option}>{option}</option>
                                              })}
                                              {[DATA_OPERATOR_LESSEQUAL].map(option => {
                                                return <option value={option}>{option}</option>
                                              })}
                                              {[DATA_OPERATOR_GREATEREQUAL].map(option => {
                                                return <option value={option}>{option}</option>
                                              })}
                                            </select>
                                          </div>
                                          <div className='cove-accordion__panel-col cove-input'>
                                            <input
                                              type='text'
                                              value={
                                                config.hexMap.shapeGroups[shapeGroupIndex].items[itemIndex].value || ''
                                              }
                                              className='cove-input'
                                              style={{ height: '100%' }}
                                              onChange={e =>
                                                handleItemUpdate('value', e.target.value, shapeGroupIndex, itemIndex)
                                              }
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <button
                                        className='cove-button cove-button--warn'
                                        style={{
                                          background: 'none',
                                          border: '1px solid red',
                                          color: 'red',
                                          marginTop: '15px'
                                        }}
                                        onClick={e => handleRemoveShapeCondition(shapeGroupIndex, itemIndex)}
                                      >
                                        Remove Shape Conditional
                                      </button>
                                    </>
                                  </AccordionItemPanel>
                                </AccordionItem>
                              </Accordion>
                            )
                          })}

                          <div style={{ display: 'flex', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
                            <button
                              className='cove-button'
                              style={{ marginTop: '15px' }}
                              onClick={() => {
                                const newConfig = cloneConfig(config)
                                _.set(
                                  newConfig,
                                  'hexMap.shapeGroups',
                                  _.map(newConfig.hexMap.shapeGroups, (group, index) => {
                                    if (index === shapeGroupIndex) {
                                      return {
                                        ...group,
                                        items: [
                                          ...group.items,
                                          {
                                            key: '',
                                            shape: 'Arrow Up',
                                            column: '',
                                            operator: '=',
                                            value: ''
                                          }
                                        ]
                                      }
                                    }
                                    return group
                                  })
                                )

                                setConfig(newConfig)
                              }}
                            >
                              Add Shape Condition
                            </button>

                            <button
                              className='cove-button cove-button--warn'
                              style={{ background: 'none', border: '1px solid red', color: 'red', marginTop: '15px' }}
                              onClick={(e, itemIndex) => {
                                let newGroups = [
                                  ...config.hexMap.shapeGroups.slice(0, shapeGroupIndex),
                                  ...config.hexMap.shapeGroups.slice(shapeGroupIndex + 1)
                                ]

                                setConfig({
                                  ...config,
                                  hexMap: {
                                    ...config.hexMap,
                                    shapeGroups: newGroups
                                  }
                                })
                              }}
                            >
                              Remove Shape Group
                            </button>
                          </div>
                        </AccordionItemPanel>
                      </AccordionItem>
                    )
                  })}
                </ul>
              </Accordion>
            </>
          )}
        </fieldset>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button
            className='cove-button'
            style={{ marginTop: '15px' }}
            onClick={index => {
              let copy = config.hexMap.shapeGroups
              copy.push({
                legendTitle: '',
                legendDescription: '',
                items: [{ key: '', shape: 'Arrow Up', column: '', operator: '=', value: '' }]
              })
              copy.legendTitle = ''
              copy.legendDescription = ''
              setConfig({
                ...config,
                hexMap: {
                  ...config.hexMap,
                  shapeGroups: copy
                }
              })
            }}
          >
            Add Shape Group
          </button>
        </div>
      </>
    )
  )
}

const HexSetting = () => props.children

HexSetting.ShapeColumns = HexSettingShapeColumns

export default HexSetting
