import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

// Components
import Icon from '../ui/Icon'
import InputSelect from '../inputs/InputSelect'
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

const ListGroupItem = (props) => {
  const { textValueKey, listData, canClear, options, optionsSection, optionsSubsection, removeAction, updateField, index } = props
  const [ textWidth, setTextWidth ] = useState(0)

  useEffect(() => {
    //Create ghost object and text nodes for children
    const ghostSpan = document.createElement('span')
    ghostSpan.style.opacity = '0'
    ghostSpan.style.visibility = 'hidden'
    ghostSpan.style.position = 'absolute'

    //Append data to ghost objects
    ghostSpan.appendChild(document.createTextNode(textValueKey))

    //Append objects to document
    document.body.appendChild(ghostSpan)

    //Register ghost width values in state
    setTextWidth(ghostSpan.offsetWidth)

    //Remove ghost objects from document
    document.body.removeChild(ghostSpan)
  }, [])

  const isOverflow = () => options ? textWidth > MAX_TEXT_SELECT_WIDTH : textWidth > MAX_TEXT_WIDTH

  const onChangeHandler = (e) => {
    let listArr = [ ...listData ]
    listArr[index][optionsSubsection] = e.target.value
    updateField(optionsSection, optionsSubsection, { ...listArr })
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

const ListGroup = (props) => {
  const { label, tooltip, items, textValueKey, canClear = true, options, optionsSection, optionsSubsection, removeAction, updateField } = props
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
                             removeAction={removeAction} updateField={updateField}
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
  /* Array of items to populate the list */
  items: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object
    ]
  )
}

export default ListGroup
