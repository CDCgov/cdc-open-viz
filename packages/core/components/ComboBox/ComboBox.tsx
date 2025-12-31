import React, { useEffect, useRef, useState, useId } from 'react'
import './combobox.styles.css'
import { UpdateFieldFunc } from '../../types/UpdateFieldFunc'

interface Option {
  value: string | number
  label: string
}

interface ComboBoxProps {
  section?: string
  subsection?: string
  fieldName: string | number
  options: Option[]
  updateField: UpdateFieldFunc<string>
  label?: string
  selected?: string | number
  placeholder?: string
  loading?: boolean
}

const ComboBox: React.FC<ComboBoxProps> = ({
  section = null,
  subsection = null,
  fieldName,
  options,
  updateField,
  label,
  selected = '',
  placeholder = '- Select -',
  loading = false
}) => {
  const [query, setQuery] = useState('')
  const [focused, setFocused] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)

  const inputRef = useRef<HTMLInputElement>(null)
  const listboxRef = useRef<HTMLUListElement>(null)
  const comboboxId = useId()

  // Get selected option
  const selectedOption = options.find(opt => opt.value === selected)

  // Filter options based on query
  const filteredOptions = query ? options.filter(opt => opt.label.toLowerCase().includes(query.toLowerCase())) : options

  const noResults = !filteredOptions.length
  const isListOpen = focused && !noResults && !loading

  const listboxId = `${comboboxId}-listbox`
  const labelId = label ? `${comboboxId}-label` : undefined

  // Handle option selection
  const handleSelect = (option: Option) => {
    updateField(section, subsection, fieldName, String(option.value))
    setQuery('')
    setFocused(false)
    setActiveIndex(-1)
    inputRef.current?.blur()
  }

  // Handle input change (typing)
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setQuery(value)
    setActiveIndex(-1)
  }

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (loading) return

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        if (!focused) {
          setFocused(true)
          setActiveIndex(0)
        } else {
          setActiveIndex(prev => (prev < filteredOptions.length - 1 ? prev + 1 : prev))
        }
        break

      case 'ArrowUp':
        e.preventDefault()
        if (focused) {
          setActiveIndex(prev => (prev > 0 ? prev - 1 : -1))
        }
        break

      case 'Home':
        if (focused && filteredOptions.length > 0) {
          e.preventDefault()
          setActiveIndex(0)
        }
        break

      case 'End':
        if (focused && filteredOptions.length > 0) {
          e.preventDefault()
          setActiveIndex(filteredOptions.length - 1)
        }
        break

      case 'Enter':
        e.preventDefault()
        if (focused && activeIndex >= 0 && filteredOptions[activeIndex]) {
          handleSelect(filteredOptions[activeIndex])
        } else if (!focused) {
          setFocused(true)
        }
        break

      case 'Escape':
        e.preventDefault()
        setQuery('')
        setFocused(false)
        setActiveIndex(-1)
        inputRef.current?.blur()
        break

      case 'Tab':
        setQuery('')
        setFocused(false)
        setActiveIndex(-1)
        break

      default:
        // Any other key opens the dropdown
        if (!focused && e.key.length === 1) {
          setFocused(true)
        }
        break
    }
  }

  // Handle input focus
  const handleFocus = () => {
    if (loading) return
    inputRef.current?.select()
    setFocused(true)
  }

  // Handle input blur
  const handleBlur = (e: React.FocusEvent) => {
    const relatedTarget = e.relatedTarget as Node
    const clickedInListbox = listboxRef.current && listboxRef.current.contains(relatedTarget)

    if (!clickedInListbox) {
      setQuery('')
      setFocused(false)
      setActiveIndex(-1)
    }
  }

  // Handle button toggle
  const handleButtonClick = (e: React.MouseEvent) => {
    if (loading) return

    e.preventDefault()
    if (focused) {
      inputRef.current?.blur()
      setFocused(false)
    } else {
      inputRef.current?.focus()
      setFocused(true)
    }
  }

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node
      if (
        inputRef.current &&
        !inputRef.current.contains(target) &&
        listboxRef.current &&
        !listboxRef.current.contains(target)
      ) {
        setQuery('')
        setFocused(false)
        setActiveIndex(-1)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const activeDescendantId = activeIndex >= 0 ? `${comboboxId}-option-${activeIndex}` : undefined
  const displayValue = focused ? query : selectedOption?.label || ''
  const displayPlaceholder = loading ? 'Loading...' : selectedOption?.label || placeholder

  return (
    <div className='cove-combobox'>
      {/* SR-only instructions */}
      <span className='sr-only'>Use ↑ or ↓ to navigate options, Enter to select, Escape to close</span>

      <div className='cove-combobox-wrapper'>
        <input
          ref={inputRef}
          id={`${comboboxId}-input`}
          type='text'
          role='combobox'
          aria-autocomplete='list'
          aria-expanded={isListOpen}
          aria-controls={isListOpen ? listboxId : undefined}
          aria-activedescendant={activeDescendantId}
          aria-labelledby={labelId}
          aria-label={label ? undefined : 'Filter selection'}
          aria-disabled={loading}
          autoComplete='off'
          className='cove-combobox-input'
          value={displayValue}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          placeholder={displayPlaceholder}
          disabled={loading}
        />

        <button
          type='button'
          tabIndex={-1}
          aria-label={isListOpen ? 'Close dropdown' : 'Open dropdown'}
          aria-controls={listboxId}
          aria-expanded={isListOpen}
          className='cove-combobox-button'
          onMouseDown={handleButtonClick}
          disabled={loading}
        >
          <i className='cdc-fa-magnifying-glass' aria-hidden='true'></i>
        </button>
      </div>

      {isListOpen && (
        <ul
          ref={listboxRef}
          id={listboxId}
          role='listbox'
          aria-labelledby={labelId}
          aria-label={label ? undefined : 'Filter options'}
          className='cove-combobox-listbox'
          tabIndex={-1}
        >
          {noResults ? (
            <li role='option' className='cove-combobox-option no-results' aria-disabled='true'>
              No matching options
            </li>
          ) : (
            filteredOptions.map((option, index) => {
              const isSelected = option.value === selected
              const isActive = index === activeIndex

              return (
                <li
                  key={option.value}
                  id={`${comboboxId}-option-${index}`}
                  role='option'
                  aria-selected={isSelected}
                  className={`cove-combobox-option${isSelected ? ' selected' : ''}${isActive ? ' active' : ''}`}
                  onMouseDown={e => {
                    e.preventDefault()
                    handleSelect(option)
                  }}
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  {option.label}
                </li>
              )
            })
          )}
        </ul>
      )}
    </div>
  )
}

export default ComboBox
