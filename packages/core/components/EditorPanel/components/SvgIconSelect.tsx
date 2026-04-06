import React, { useMemo, useState, useRef, useEffect } from 'react'
import { SVG_REGISTRY, SvgRegistryId, buildInlineSvg } from '../../../helpers/svgRegistry'
import Icon from '../../ui/Icon'

type Option = { value: string; label: string }

type SvgIconSelectProps = {
  value: string
  options: Option[]
  onChange: (value: string) => void
}

const OPTION_HEIGHT = 41
const MAX_VISIBLE_OPTIONS = 5
const LIST_VERTICAL_PADDING = 8

const labelCollator = new Intl.Collator(undefined, { sensitivity: 'base' })

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
  const [hoveredValue, setHoveredValue] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const sortedOptions = useMemo(() => {
    const pinnedOptions = options.filter(option => !option.value)
    const iconOptions = options
      .filter(option => option.value)
      .slice()
      .sort((a, b) => labelCollator.compare(a.label, b.label))

    return [...pinnedOptions, ...iconOptions]
  }, [options])

  const shouldScroll = sortedOptions.length > MAX_VISIBLE_OPTIONS

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const selectedOption = options.find(o => o.value === value) ?? options[0]

  return (
    <div ref={containerRef} style={{ position: 'relative', display: 'inline-block' }}>
      <button
        type='button'
        className='cove-form-select py-2 ps-2 d-block'
        style={{
          position: 'relative',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '0.5rem',
          width: '5rem',
          minWidth: '5rem',
          height: '41px',
          paddingRight: '2rem',
          background: 'white',
          border: '1px solid #d9dce1',
          borderRadius: '0.25rem',
          cursor: 'pointer',
          textAlign: 'left'
        }}
        onClick={() => setIsOpen(open => !open)}
        aria-haspopup='listbox'
        aria-expanded={isOpen}
      >
        <span style={{ display: 'inline-flex', alignItems: 'center', minWidth: 0 }}>
          {selectedOption?.value && (
            <span style={{ position: 'relative', top: '-2px', display: 'inline-flex', alignItems: 'center' }}>
              <SvgIconPreview svgId={selectedOption.value} />
            </span>
          )}
          {!selectedOption?.value && <span style={{ flex: 1 }}>{selectedOption?.label}</span>}
        </span>
        <span
          aria-hidden='true'
          style={{
            position: 'absolute',
            right: '8px',
            top: 'calc(50% + 2px)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
            transform: 'translateY(-50%)'
          }}
        >
          <Icon display='caretDown' size={16} color='#5c6670' />
        </span>
      </button>
      {isOpen && (
        <ul
          role='listbox'
          aria-label='Select an icon'
          style={{
            position: 'absolute',
            top: 'calc(100% + 0.25rem)',
            left: 0,
            zIndex: 99999,
            background: 'white',
            border: '1px solid #d9dce1',
            borderRadius: '0.25rem',
            boxShadow: '0 4px 12px rgba(28, 29, 31, 0.08)',
            width: 'max-content',
            minWidth: '100%',
            margin: 0,
            padding: '0.25rem 0',
            listStyle: 'none',
            maxHeight: shouldScroll ? `${OPTION_HEIGHT * MAX_VISIBLE_OPTIONS + LIST_VERTICAL_PADDING}px` : undefined,
            overflowY: shouldScroll ? 'auto' : undefined
          }}
        >
          {sortedOptions.map(option => (
            <li
              key={option.value}
              role='option'
              aria-selected={option.value === value}
              tabIndex={0}
              style={{
                boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                height: `${OPTION_HEIGHT}px`,
                padding: '0 0.75rem',
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
