import React, { useEffect, useRef, useState } from 'react'
import Tooltip from '../ui/Tooltip'
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
  fieldName: string | number
  options: Option[]
  updateField: UpdateFieldFunc<string[]>
  label?: string
  selected?: string[]
  limit?: number
}

const MultiSelect: React.FC<MultiSelectProps> = ({ section = null, subsection = null, fieldName, label, options, updateField, selected, limit }) => {
  const preselectedItems = options.filter(opt => selected?.includes(opt.value)).slice(0, limit)
  const [selectedItems, setSelectedItems] = useState<Option[]>(preselectedItems)
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

  const handleItemSelect = (option: Option, e = null) => {
    if (e && e.type === 'keyup' && e.key !== 'Enter') return
    if (limit && selectedItems.length >= limit) return
    const newItems = [...selectedItems, option]
    setSelectedItems(newItems)
    update(newItems)
  }

  const handleItemRemove = (option: Option, e = null) => {
    if (e && e.type === 'keyup' && e.key !== 'Enter') return
    const newItems = selectedItems.filter(item => item.value !== option.value)
    setSelectedItems(newItems)
    update(newItems)
  }

  const multiID = 'multiSelect_' + label
  return (
    <div ref={multiSelectRef} className='cove-multiselect'>
      {label && (
        <label id={multiID} className='cove-input__label'>
          {label}
        </label>
      )}

      <div className='wrapper'>
        <div className='selected'>
          {selectedItems.map(item => (
            <div key={item.value} aria-labelledby={label ? multiID : undefined} role='button' onClick={() => handleItemRemove(item)} onKeyUp={e => handleItemRemove(item, e)}>
              {item.label}
              <button aria-label='Remove' onClick={() => handleItemRemove(item)}>
                x
              </button>
            </div>
          ))}
          <button aria-label={expanded ? 'Collapse' : 'Expand'} aria-labelledby={label ? multiID : undefined} className='expand' onClick={() => setExpanded(!expanded)}>
            <Icon display={expanded ? 'caretDown' : 'caretUp'} style={{ cursor: 'pointer' }} />
          </button>
        </div>
        {!!limit && (
          <Tooltip style={{ textTransform: 'none' }}>
            <Tooltip.Target>
              <Icon display='question' style={{ marginLeft: '0.5rem' }} />
            </Tooltip.Target>
            <Tooltip.Content>
              <p>Select up to {limit} items</p>
            </Tooltip.Content>
          </Tooltip>
        )}
      </div>
      <ul className={'dropdown' + (expanded ? '' : ' hide')}>
        {options
          .filter(option => !selectedItems.find(item => item.value === option.value))
          .map(option => (
            <li className='cove-multiselect-li' key={option.value} role='option' tabIndex={0} onClick={() => handleItemSelect(option)} onKeyUp={e => handleItemSelect(option, e)}>
              {option.label}
            </li>
          ))}
      </ul>
    </div>
  )
}

export default MultiSelect
