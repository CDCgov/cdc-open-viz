import React from 'react'
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemPanel, AccordionItemButton } from 'react-accessible-accordion'
import parse from 'html-react-parser'
import { AiOutlineArrowUp, AiOutlineArrowDown, AiOutlineArrowRight } from 'react-icons/ai'
import useDataVizClasses from '@cdc/core/helpers/useDataVizClasses'

const shapeOptions = ['Arrow Up', 'Arrow Down', 'Arrow Right', 'None']

// todo: Move duplicated operators to CORE
export const DATA_OPERATOR_LESS = '<'
export const DATA_OPERATOR_GREATER = '>'
export const DATA_OPERATOR_LESSEQUAL = '<='
export const DATA_OPERATOR_GREATEREQUAL = '>='
export const DATA_OPERATOR_EQUAL = '='
export const DATA_OPERATOR_NOTEQUAL = '≠'

export const DATA_OPERATORS = [DATA_OPERATOR_LESS, DATA_OPERATOR_GREATER, DATA_OPERATOR_LESSEQUAL, DATA_OPERATOR_GREATEREQUAL, DATA_OPERATOR_EQUAL, DATA_OPERATOR_NOTEQUAL]

const HexSettingDisplayShapesOnHex = props => {
  const { state, setState } = props
  if (!state.general.displayAsHex) return <></>
  return (
    <label className='checkbox mt-4'>
      <input
        type='checkbox'
        checked={state.hexMap.type === 'shapes'}
        onChange={event => {
          setState({
            ...state,
            hexMap: {
              ...state.hexMap,
              type: event.target.checked ? 'shapes' : 'standard'
            }
          })
        }}
      />
      <span className='edit-label'>Display Shapes on Hex Map</span>
    </label>
  )
}

const HexSettingDisplayAsHexMap = props => {
  const { state, handleEditorChanges } = props

  return (
    state.general.geoType === 'us' &&
    state.general.type !== ' navigation' &&
    state.general.type !== 'bubble' && (
      <label className='checkbox mt-4'>
        <input
          type='checkbox'
          checked={state.general.displayAsHex}
          onChange={event => {
            handleEditorChanges('displayAsHex', event.target.checked)
          }}
        />
        <span className='edit-label'>Display As Hex Map</span>
      </label>
    )
  )
}

/**
 * Notice: each shape Col has a legend title and description should the title/desc need to be different for different shapes.
 * @param {} props
 * @returns
 */
const HexSettingShapeColumns = props => {
  const { state, setState, columnsOptions } = props

  const handleItemUpdate = (key, value, shapeGroupIndex, itemIndex) => {
    setState({
      ...state,
      hexMap: {
        ...state.hexMap,
        shapeGroups: state.hexMap.shapeGroups.map((group, groupIndex) => {
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
    setState({
      ...state,
      hexMap: {
        ...state.hexMap,
        shapeGroups: state.hexMap.shapeGroups.map((group, groupIndex) => {
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
    state.general.displayAsHex &&
    state.hexMap.type === 'shapes' && (
      <>
        <fieldset className='edit-block'>
          {state.hexMap.shapeGroups && (
            <>
              <Accordion allowZeroExpanded>
                <ul style={{ listStyle: 'none' }}>
                  {state.hexMap.shapeGroups?.map((shapeGroup, shapeGroupIndex) => {
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
                              onChange={e =>
                                setState(prevState => ({
                                  ...prevState,
                                  hexMap: {
                                    ...prevState.hexMap,
                                    shapeGroups: prevState.hexMap.shapeGroups.map((group, groupIndex) => {
                                      if (groupIndex === shapeGroupIndex) {
                                        return {
                                          ...group,
                                          legendTitle: e.target.value
                                        }
                                      } else {
                                        return group
                                      }
                                    })
                                  }
                                }))
                              }
                            />
                          </label>

                          <label>
                            <span className='edit-label column-heading'>Legend Description</span>
                            <input
                              type='text'
                              value={shapeGroup.legendDescription || ''}
                              onChange={e =>
                                setState(prevState => ({
                                  ...prevState,
                                  hexMap: {
                                    ...prevState.hexMap,
                                    shapeGroups: prevState.hexMap.shapeGroups.map((group, groupIndex) => {
                                      if (groupIndex === shapeGroupIndex) {
                                        return {
                                          ...group,
                                          legendDescription: e.target.value
                                        }
                                      } else {
                                        return group
                                      }
                                    })
                                  }
                                }))
                              }
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
                                          value={state.hexMap.shapeGroups[shapeGroupIndex].items[itemIndex].shape ? state.hexMap.shapeGroups[shapeGroupIndex].items[itemIndex].shape : 'select'}
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
                                            <select value={state.hexMap.shapeGroups[shapeGroupIndex].key === '' ? 'Select' : state.hexMap.shapeGroups[shapeGroupIndex].key} className='cove-input' onChange={e => handleItemUpdate('key', e.target.value, shapeGroupIndex, itemIndex)}>
                                              {columnsOptions}
                                            </select>
                                          </div>
                                          <div className='cove-accordion__panel-col cove-input'>
                                            <select value={state.hexMap.shapeGroups[shapeGroupIndex].items[itemIndex].operator || '-SELECT-'} initial='Select' className='cove-input' onChange={e => handleItemUpdate('operator', e.target.value, shapeGroupIndex, itemIndex)}>
                                              {[DATA_OPERATOR_EQUAL].map(option => {
                                                return <option value={option}>{option}</option>
                                              })}
                                            </select>
                                          </div>
                                          <div className='cove-accordion__panel-col cove-input'>
                                            <input type='text' value={state.hexMap.shapeGroups[shapeGroupIndex].items[itemIndex].value || ''} className='cove-input' style={{ height: '100%' }} onChange={e => handleItemUpdate('value', e.target.value, shapeGroupIndex, itemIndex)} />
                                          </div>
                                        </div>
                                      </div>
                                      <button className='cove-button cove-button--warn' style={{ background: 'none', border: '1px solid red', color: 'red', marginTop: '15px' }} onClick={e => handleRemoveShapeCondition(shapeGroupIndex, itemIndex)}>
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
                              onClick={() =>
                                setState({
                                  ...state,
                                  hexMap: {
                                    ...state.hexMap,
                                    shapeGroups: state.hexMap.shapeGroups.map((group, index) => {
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
                                      } else {
                                        return group
                                      }
                                    })
                                  }
                                })
                              }
                            >
                              Add Shape Condition
                            </button>

                            <button
                              className='cove-button cove-button--warn'
                              style={{ background: 'none', border: '1px solid red', color: 'red', marginTop: '15px' }}
                              onClick={(e, itemIndex) => {
                                let newGroups = [...state.hexMap.shapeGroups.slice(0, shapeGroupIndex), ...state.hexMap.shapeGroups.slice(shapeGroupIndex + 1)]

                                setState({
                                  ...state,
                                  hexMap: {
                                    ...state.hexMap,
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
              let copy = state.hexMap.shapeGroups
              copy.push({
                legendTitle: '',
                legendDescription: '',
                items: [{ key: '', shape: 'Arrow Up', column: '', operator: '=', value: '' }]
              })
              copy.legendTitle = ''
              copy.legendDescription = ''
              setState({
                ...state,
                hexMap: {
                  ...state.hexMap,
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

HexSetting.DisplayShapesOnHex = HexSettingDisplayShapesOnHex
HexSetting.DisplayAsHexMap = HexSettingDisplayAsHexMap
HexSetting.ShapeColumns = HexSettingShapeColumns

export default HexSetting
