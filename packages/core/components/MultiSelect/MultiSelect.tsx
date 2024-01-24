import React, { useEffect, useRef, useState } from 'react'
import Icon from '../ui/Icon'

import './multiselect.styles.css'
import { UpdateFieldFunc } from '../../types/UpdateFieldFunc'

interface Option {
  value: string
  label: string
}

interface MultiSelectProps {
  section?: string
  subsection?: string
  fieldName: string
  options: Option[]
  updateField: UpdateFieldFunc<string[]>
  label?: string
}

const MultiSelect: React.FC<MultiSelectProps> = ({ section = null, subsection = null, fieldName, label, options, updateField }) => {
  const [selectedItems, setSelectedItems] = useState<Option[]>([])
  const [expanded, setExpanded] = useState(false)
  const multiSelectRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = event => {
      if (multiSelectRef.current && !multiSelectRef.current.contains(event.target)) {
        setExpanded(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const update = newItems =>
    updateField(
      section,
      subsection,
      fieldName,
      newItems.map(item => item.value)
    )

  const handleItemSelect = (option: Option) => {
    const newItems = [...selectedItems, option]
    setSelectedItems(newItems)
    update(newItems)
  }

  const handleItemRemove = (option: Option) => {
    const newItems = selectedItems.filter(item => item.value !== option.value)
    setSelectedItems(newItems)
    update(newItems)
  }

  const multiID = 'multiSelect_' + label
  return (
    <div ref={multiSelectRef} className='cove-multiselect'>
      {label && (
        <span id={multiID} className='edit-label cove-input__label'>
          {label}
        </span>
      )}

      <div aria-labelledby={label ? multiID : undefined} className='selected'>
        {selectedItems.map(item => (
          <div key={item.value} role='button' tabIndex={0} onClick={() => handleItemRemove(item)} onKeyUp={() => handleItemRemove(item)}>
            {item.label}
            <button aria-label='Remove' onClick={() => handleItemRemove(item)}>
              x
            </button>
          </div>
        ))}
        <button aria-label={expanded ? 'Collapse' : 'Expand'} className='expand' onClick={() => setExpanded(!expanded)}>
          <Icon display={expanded ? 'caretDown' : 'caretUp'} style={{ cursor: 'pointer' }} />
        </button>
      </div>
      <ul className={'dropdown' + (expanded ? '' : ' hide')}>
        {options
          .filter(option => !selectedItems.find(item => item.value === option.value))
          .map(option => (
            <li className='cove-multiselect-li' key={option.value} role='option' tabIndex={0} onClick={() => handleItemSelect(option)} onKeyUp={() => handleItemSelect(option)}>
              {option.label}
            </li>
          ))}
      </ul>
    </div>
  )
}

export default MultiSelect
