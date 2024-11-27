import React, { useEffect, useMemo, useRef, useState } from 'react'
import Tooltip from '../ui/Tooltip'
import Icon from '../ui/Icon'

import './multiselect.styles.css'
import { UpdateFieldFunc } from '../../types/UpdateFieldFunc'
import Loader from '../Loader'

interface Option {
  value: string | number
  label: string
}

interface MultiSelectProps {
  section?: string
  subsection?: string
  fieldName: string | number
  options: Option[]
  updateField: UpdateFieldFunc<string[]>
  label?: string
  selected?: (string | number)[]
  limit?: number
  tooltip?: React.ReactNode
  loading?: boolean
}

const MultiSelect: React.FC<MultiSelectProps> = ({
  section = null,
  subsection = null,
  fieldName,
  label,
  options,
  updateField,
  selected = [],
  limit,
  tooltip,
  loading
}) => {
  const preselectedItems = useMemo(() => options.filter(opt => selected.includes(opt.value)).slice(0, limit), [options])
  const [selectedItems, setSelectedItems] = useState<Option[]>()
  const items = selectedItems || preselectedItems
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
    if (limit && items?.length >= limit) return
    const newItems = [...items, option]
    setSelectedItems(newItems)
    update(newItems)
  }

  const handleItemRemove = (option: Option, e = null) => {
    if (e && e.type === 'keyup' && e.key !== 'Enter') return
    const newItems = items.filter(item => item.value !== option.value)
    setSelectedItems(newItems)
    update(newItems)
  }

  const multiID = 'multiSelect_' + label
  return (
    <div ref={multiSelectRef} className='cove-multiselect'>
      {tooltip && tooltip}

      <div className='wrapper'>
        <div
          id={multiID}
          onClick={() => {
            if (!items.length && !loading) {
              setExpanded(true)
            }
          }}
          className='selected'
          aria-disabled={loading}
        >
          {items.length ? (
            items.map(item => (
              <div key={item.value} aria-labelledby={label ? multiID + label : undefined}>
                {item.label}
                <button
                  aria-label='Remove'
                  onClick={e => {
                    e.preventDefault()
                    handleItemRemove(item)
                  }}
                  onKeyUp={e => {
                    handleItemRemove(item, e)
                  }}
                >
                  x
                </button>
              </div>
            ))
          ) : (
            <span className='pl-1 pt-1'>{loading ? 'Loading...' : '- Select -'}</span>
          )}
          <button
            aria-label={expanded ? 'Collapse' : 'Expand'}
            aria-labelledby={label ? multiID : undefined}
            className='expand'
            onClick={e => {
              e.preventDefault()
              setExpanded(!expanded)
            }}
          >
            <Icon display={'caretDown'} style={{ cursor: 'pointer' }} />
          </button>
        </div>
        {loading && <Loader spinnerType={'text-secondary'} />}
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

      <ul className={'dropdown' + (expanded ? '' : ' d-none')}>
        {options
          .filter(option => !items.find(item => item.value === option.value))
          .map(option => (
            <li
              className='cove-multiselect-li'
              key={option.value}
              role='option'
              tabIndex={0}
              onClick={e => {
                e.preventDefault()
                handleItemSelect(option, e)
              }}
              onKeyUp={e => handleItemSelect(option, e)}
            >
              {option.label}
            </li>
          ))}
      </ul>
    </div>
  )
}

export default MultiSelect
