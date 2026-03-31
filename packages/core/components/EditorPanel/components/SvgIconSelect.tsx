import React, { useState, useRef, useEffect } from 'react'
import { SVG_REGISTRY, SvgRegistryId, buildInlineSvg } from '../../../helpers/svgRegistry'
import Icon from '../../ui/Icon'

type Option = { value: string; label: string }

type SvgIconSelectProps = {
  value: string
  options: Option[]
  onChange: (value: string) => void
}

const SvgIconPreview = ({ svgId }: { svgId: string }) => {
  if (!svgId || !(svgId in SVG_REGISTRY)) return null
  return (
    <span
      dangerouslySetInnerHTML={{ __html: buildInlineSvg(svgId as SvgRegistryId) }}
      style={{ display: 'inline-flex', alignItems: 'center', marginRight: '0.4em', verticalAlign: 'middle' }}
    />
  )
}

const SvgIconSelect = ({ value, options, onChange }: SvgIconSelectProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [listPos, setListPos] = useState<{ top: number; left: number } | null>(null)
  const [hoveredValue, setHoveredValue] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const openDropdown = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect()
      // position: fixed uses viewport coords — do NOT add window.scrollY/X
      setListPos({ top: rect.bottom, left: rect.left })
    }
    setIsOpen(open => !open)
  }

  const selectedOption = options.find(o => o.value === value) ?? options[0]

  return (
    <div ref={containerRef}>
      <button
        ref={buttonRef}
        type='button'
        className='cove-form-select py-2 ps-2 d-block'
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '0.5rem',
          width: '5rem',
          minWidth: '5rem',
          height: '41px',
          paddingRight: '0.75rem',
          background: 'white',
          border: '1px solid #d9dce1',
          borderRadius: '0.25rem',
          cursor: 'pointer',
          textAlign: 'left'
        }}
        onClick={openDropdown}
        aria-haspopup='listbox'
        aria-expanded={isOpen}
      >
        <span style={{ display: 'inline-flex', alignItems: 'center', minWidth: 0 }}>
          <SvgIconPreview svgId={selectedOption?.value} />
          {!selectedOption?.value && <span style={{ flex: 1 }}>{selectedOption?.label}</span>}
        </span>
        <Icon display='caretDown' size={16} color='#5c6670' />
      </button>
      {isOpen && listPos && (
        <ul
          role='listbox'
          aria-label='Select an icon'
          style={{
            position: 'fixed',
            top: listPos.top,
            left: listPos.left,
            zIndex: 99999,
            background: 'white',
            border: '1px solid #d9dce1',
            borderRadius: '0.25rem',
            boxShadow: '0 4px 12px rgba(28, 29, 31, 0.08)',
            width: 'max-content',
            margin: 0,
            padding: '0.25rem 0',
            listStyle: 'none',
            maxHeight: '200px',
            overflowY: 'auto'
          }}
        >
          {options.map(option => (
            <li
              key={option.value}
              role='option'
              aria-selected={option.value === value}
              tabIndex={0}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                minHeight: '41px',
                padding: '0.5rem 0.75rem',
                cursor: 'pointer',
                background: option.value === value || hoveredValue === option.value ? '#e9ecef' : 'white'
              }}
              onMouseEnter={() => setHoveredValue(option.value)}
              onMouseLeave={() => setHoveredValue(null)}
              onClick={() => {
                onChange(option.value)
                setIsOpen(false)
              }}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') {
                  onChange(option.value)
                  setIsOpen(false)
                }
              }}
            >
              <SvgIconPreview svgId={option.value} />
              <span>{option.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SvgIconSelect
