import React, { useState, useEffect } from 'react'

// Third Party
import PropTypes from 'prop-types'

// Store
import useConfigStore from '../../store/config/configSlice'

// Components
import Icon from '../ui/Icon'
import InputSelect from '../input/InputSelect'
import Label from './Label'
import Tooltip from '../ui/Tooltip'

// Styles
import '../../styles/v2/components/element/list-group.scss'

const MAX_TEXT_WIDTH = 250
const MAX_TEXT_SELECT_WIDTH = 150

const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1)

const hasKeyValue = (value) => value === Object(value)

const returnObjKeyValue = (key, obj) => {
  let value = Object.keys(obj).map(entry => entry === key ? obj[key] : null)
  return value[0]
}

const ListGroupItem = ({ textValueKey, listData, canClear, options, optionsSection, optionsSubsection, removeAction, index }) => {
  // Store Selectors
  const { updateConfigField } = useConfigStore()

  const [ textWidth, setTextWidth ] = useState(0)

  useEffect(() => {
    //Create shadow object and text nodes for children
    const shadowSpan = document.createElement('span')
    shadowSpan.style.opacity = '0'
    shadowSpan.style.visibility = 'hidden'
    shadowSpan.style.position = 'absolute'

    //Append data to shadow objects
    shadowSpan.appendChild(document.createTextNode(textValueKey))

    //Append objects to document
    document.body.appendChild(shadowSpan)

    //Register ghost width values in state
    setTextWidth(shadowSpan.offsetWidth)

    //Remove ghost objects from document
    document.body.removeChild(shadowSpan)
  }, [])

  const isOverflow = () => options ? textWidth > MAX_TEXT_SELECT_WIDTH : textWidth > MAX_TEXT_WIDTH

  const onChangeHandler = (e) => {
    let listArr = [ ...listData ]
    listArr[index][optionsSubsection] = e.target.value
    updateConfigField([optionsSection, optionsSubsection], { ...listArr })
  }

  return (
    <li className={`cove-list-group__item${options ? ' cove-list-group__item--has-option' : ''}${isOverflow() ? ' cove-list-group__item--truncate' : ''}`}>
      <div className="cove-list-group__item-value">
        {isOverflow()
          ?
            <Tooltip float={true}>
              <Tooltip.Target>
                <div className="cove-list-group__item-value__text">{capitalizeFirstLetter(textValueKey)}</div>
              </Tooltip.Target>
              <Tooltip.Content>{capitalizeFirstLetter(textValueKey)}</Tooltip.Content>
            </Tooltip>
          :
            <div className="cove-list-group__item-value__text">{capitalizeFirstLetter(textValueKey)}</div>
        }
      </div>
      <div className="cove-list-group__item-children">
        {options &&
          <InputSelect className="mr-1" options={options[0]} style={{ width: '100px' }} onChange={e => onChangeHandler(e)}/>
        }
        {removeAction && (canClear || listData.length > 1) &&
          <div className="cove-list-group__item-remove">
            <Icon display="close" size={16} onClick={() => removeAction(textValueKey)}/>
          </div>
        }
      </div>
    </li>
  )
}

const ListGroup = ({ label, tooltip, items, textValueKey, canClear = true, options, optionsSection, optionsSubsection, removeAction }) => {
  const [ listData, setListData ] = useState(items)

  useEffect(() => {
    setListData(items)
  }, [ items ])

  const itemsToJsx = (items) => {
    let itemsJsx = []

    if (items) {
      items.map((itemValue, index) => {
        //Check if item group is an array of strings, or an array of objects

        //Array of Objects -----
        //If item group is an array of objects, grab the object's first key value for the list item value
        if (hasKeyValue(itemValue)) {
          //It's an object, so grab the entry value using the user defined key - this will be used for the text value
          let textValue = returnObjKeyValue(textValueKey, itemValue)
          return (
            itemsJsx.push(
              <ListGroupItem textValueKey={textValue} listData={listData} canClear={canClear}
                             options={options} optionsSection={optionsSection} optionsSubsection={optionsSubsection}
                             removeAction={removeAction}
                             index={index} key={index}
              />
            )
          )
        }

        //Array of Strings -----
        //If item group is an array of strings, just grab the string for the list item value
        return (
          itemsJsx.push(
            <ListGroupItem textValueKey={itemValue} listData={listData} canClear={canClear} removeAction={removeAction} key={index}/>
          )
        )
      })
    }
    return itemsJsx
  }

  return (
    <>
      {label && <Label tooltip={tooltip ? tooltip : null}>{label}</Label>}
      <ul className="cove-list-group">
        {items && itemsToJsx(items)}
      </ul>
    </>
  )
}

ListGroup.propTypes = {
  /** Supply a label for the ListGroup */
  label: PropTypes.string,
  /** Allow all items from the list to be removed. Set `false` to force at least 1 to remain */
  canClear: PropTypes.bool,
  /** Supply the key name containing the value to be used when populating the text value */
  textValueKey: PropTypes.string,
  /** Array list of values for additional dropdown selections on each list item */
  options: PropTypes.array,
  /** First config key value to target when updating the option of the dropdown  */
  optionsSection: PropTypes.string,
  /** Second, nested config key value to target when updating the option of the dropdown  */
  optionsSubsection: PropTypes.string,
  /** Callback function to trigger when removing an item from the ListGroup */
  removeAction: PropTypes.func,
  /** Array of strings, or objects, used to populate the list. If objects are used, each entry's key is set to the text and the value is set to the value of  */
  items: PropTypes.array,
  /** Add a tooltip to describe the ListGroup's usage; JSX markup can also be supplied */
  tooltip: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
}

export default ListGroup
