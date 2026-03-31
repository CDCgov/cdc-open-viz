import React, { useState, useRef, useEffect } from 'react'
import { SVG_REGISTRY, SvgRegistryId, buildInlineSvg } from '../../../helpers/svgRegistry'

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
          width: 'fit-content',
          minWidth: '4.5rem',
          background: 'white',
          cursor: 'pointer',
          textAlign: 'left'
        }}
        onClick={openDropdown}
        aria-haspopup='listbox'
        aria-expanded={isOpen}
      >
        <SvgIconPreview svgId={selectedOption?.value} />
        {!selectedOption?.value && <span style={{ flex: 1 }}>{selectedOption?.label}</span>}
        <span style={{ paddingLeft: '0.5em' }}>▾</span>
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
            border: '1px solid #ced4da',
            width: 'max-content',
            margin: 0,
            padding: 0,
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
                padding: '0.4em 0.5em',
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
