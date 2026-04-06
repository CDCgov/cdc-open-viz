import React, { useCallback, useEffect, useRef, useState } from 'react'
import { DATA_COLOR_PRESETS } from '../../helpers/dataColors'
import './DataColorSelector.scss'

interface DataColorSelectorProps {
  value: string
  onChange: (color: string) => void
}

const DataColorSelector: React.FC<DataColorSelectorProps> = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [dropdownPos, setDropdownPos] = useState<{ top: number; left: number }>({ top: 0, left: 0 })
  const triggerRef = useRef<HTMLButtonElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const isPreset = DATA_COLOR_PRESETS.includes(value as any)
  const isCustom = !!value && !isPreset

  const handleSelect = (color: string) => {
    onChange(color)
    setIsOpen(false)
  }

  const updatePosition = useCallback(() => {
    if (!triggerRef.current) return
    const rect = triggerRef.current.getBoundingClientRect()
    setDropdownPos({
      top: rect.bottom + 4,
      left: rect.left
    })
  }, [])

  const handleToggle = () => {
    if (!isOpen) {
      updatePosition()
    }
    setIsOpen(prev => !prev)
  }

  const handleClickOutside = useCallback((e: MouseEvent) => {
    const target = e.target as Node
    if (
      triggerRef.current && !triggerRef.current.contains(target) &&
      dropdownRef.current && !dropdownRef.current.contains(target)
    ) {
      setIsOpen(false)
    }
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      window.addEventListener('scroll', () => setIsOpen(false), true)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
        window.removeEventListener('scroll', () => setIsOpen(false), true)
      }
    }
  }, [isOpen, handleClickOutside])

  return (
    <>
      <button
        ref={triggerRef}
        type='button'
        className='data-color-selector__trigger'
        onClick={handleToggle}
        title={value || 'Select color'}
        aria-expanded={isOpen}
        aria-haspopup='true'
      >
        {value ? (
          <span className='data-color-selector__trigger-swatch' style={{ backgroundColor: value }} />
        ) : (
          <span className='data-color-selector__trigger-empty'>—</span>
        )}
        <span className='data-color-selector__trigger-caret' />
      </button>

      {isOpen && (
        <div
          ref={dropdownRef}
          className='data-color-selector__dropdown'
          role='listbox'
          style={{ top: dropdownPos.top, left: dropdownPos.left }}
        >
          <div className='data-color-selector__presets'>
            <button
              type='button'
              className={`data-color-selector__swatch data-color-selector__swatch--none ${!value ? 'data-color-selector__swatch--active' : ''}`}
              onClick={() => handleSelect('')}
              title='None'
              role='option'
              aria-selected={!value}
            />
            {DATA_COLOR_PRESETS.map(preset => (
              <button
                key={preset}
                type='button'
                className={`data-color-selector__swatch ${value === preset ? 'data-color-selector__swatch--active' : ''}`}
                style={{ backgroundColor: preset }}
                onClick={() => handleSelect(preset)}
                title={preset}
                role='option'
                aria-selected={value === preset}
              />
            ))}
          </div>
          <div className='data-color-selector__custom'>
            <label className='data-color-selector__custom-label'>
              <span>Custom</span>
              <input
                type='color'
                className='data-color-selector__custom-input'
                value={value || '#000000'}
                onChange={e => onChange(e.target.value)}
              />
            </label>
            {isCustom && (
              <span className='data-color-selector__custom-value'>{value}</span>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default DataColorSelector
