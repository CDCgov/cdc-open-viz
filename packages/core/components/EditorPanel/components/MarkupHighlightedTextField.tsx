import React, { memo, useEffect, useState, useRef, useMemo } from 'react'
import { useDebounce } from 'use-debounce'
import { EditorPanel_MarkupVariables, MarkupVariable } from '../../../types/EditorPanel_MarkupVariables'

type MarkupHighlightedTextFieldProps = {
  className?: string
  value: string | number
  type?: 'text' | 'textarea'
  label: string
  placeholder?: string
  fieldName?: string
  section?: any
  subsection?: any
  updateField?: (section: any, subsection: any, fieldName: string, value: string) => void
  markupVariables?: MarkupVariable[]
  isEditor?: boolean
}

const MarkupHighlightedTextField: React.FC<MarkupHighlightedTextFieldProps> = memo((props) => {
  const {
    value: stateValue,
    type = 'text',
    label,
    placeholder = '',
    fieldName = '',
    section = null,
    subsection = null,
    updateField,
    markupVariables = [],
    isEditor = false,
    className = '',
    ...attributes
  } = props

  const [value, setValue] = useState(String(stateValue))
  const [debouncedValue] = useDebounce(value, 300) // Reduced debounce for faster response
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null)
  const highlightRef = useRef<HTMLDivElement>(null)

  // Update field when debounced value changes
  useEffect(() => {
    if (stateValue !== debouncedValue && updateField) {
      updateField(section, subsection, fieldName, debouncedValue)
    }
  }, [debouncedValue, section, subsection, fieldName, updateField, stateValue])

  // Update local state when props change
  useEffect(() => {
    setValue(String(stateValue))
  }, [stateValue])

  // Get valid markup variable tags for highlighting (memoized)
  const validTags = useMemo(() =>
    markupVariables.map(variable => variable.tag).filter(Boolean),
    [markupVariables]
  )

  // Memoized highlighting function to reduce recalculations
  const highlightedContent = useMemo(() => {
    if (!isEditor || validTags.length === 0) {
      return value
    }

    // Escape HTML
    const escapedText = value.replace(/[&<>"']/g, (match) => {
      const escapeMap: { [key: string]: string } = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
      }
      return escapeMap[match]
    })

    // Highlight valid markup variables
    return escapedText.replace(/\{\{([^}]+)\}\}/g, (match) => {
      const isValid = validTags.includes(match)
      const cssClass = isValid ? 'markup-variable-valid' : 'markup-variable-invalid'
      return `<span class="${cssClass}">${match}</span>`
    })
  }, [value, validTags, isEditor])

  // Optimized scroll sync
  const handleScroll = useMemo(() => {
    let rafId: number | null = null
    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        if (inputRef.current && highlightRef.current) {
          highlightRef.current.scrollTop = inputRef.current.scrollTop
          highlightRef.current.scrollLeft = inputRef.current.scrollLeft
        }
      })
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.target.value)
  }

  const inputId = `${fieldName}-${section}-${subsection}`
  const shouldShowHighlighting = isEditor && validTags.length > 0

  // Optimized styles
  const containerStyle = useMemo(() => ({
    position: 'relative' as const,
    display: 'block',
    width: '100%',
  }), [])

  const inputStyle = useMemo(() => ({
    width: '100%',
    padding: '8px 12px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontFamily: 'inherit',
    fontSize: '14px',
    lineHeight: '1.4',
    background: shouldShowHighlighting ? 'transparent' : '#fff',
    color: shouldShowHighlighting ? 'transparent' : 'inherit',
    caretColor: shouldShowHighlighting ? '#333' : 'inherit',
    position: 'relative' as const,
    zIndex: 2,
    resize: type === 'textarea' ? 'vertical' as const : 'none' as const,
  }), [shouldShowHighlighting, type])

  const highlightStyle = useMemo(() => ({
    position: 'absolute' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: '8px 12px',
    margin: 0,
    border: '1px solid transparent',
    background: '#fff',
    borderRadius: '4px',
    color: '#333',
    whiteSpace: type === 'textarea' ? 'pre-wrap' as const : 'pre' as const,
    overflow: 'hidden',
    pointerEvents: 'none' as const,
    fontFamily: 'inherit',
    fontSize: '14px',
    lineHeight: '1.4',
    zIndex: 1,
    wordWrap: 'break-word' as const,
  }), [type])

  const focusStyle = useMemo(() => ({
    outline: 'none',
    borderColor: '#0066cc',
    boxShadow: '0 0 0 2px rgba(0, 102, 204, 0.2)',
  }), [])

  return (
    <div className={`form-group ${className}`}>
      <label htmlFor={inputId}>
        <span className='edit-label'>{label}</span>
        <div style={containerStyle}>
          {/* Highlighting overlay */}
          {shouldShowHighlighting && (
            <div
              ref={highlightRef}
              style={highlightStyle}
              dangerouslySetInnerHTML={{ __html: highlightedContent }}
              className="markup-highlight-overlay"
            />
          )}

          {/* Input field */}
          {type === 'textarea' ? (
            <textarea
              ref={inputRef as React.RefObject<HTMLTextAreaElement>}
              id={inputId}
              value={value}
              onChange={handleChange}
              onScroll={handleScroll}
              placeholder={placeholder}
              style={inputStyle}
              onFocus={(e) => Object.assign(e.target.style, focusStyle)}
              onBlur={(e) => Object.assign(e.target.style, inputStyle)}
              {...attributes}
            />
          ) : (
            <input
              ref={inputRef as React.RefObject<HTMLInputElement>}
              type="text"
              id={inputId}
              value={value}
              onChange={handleChange}
              onScroll={handleScroll}
              placeholder={placeholder}
              style={inputStyle}
              onFocus={(e) => Object.assign(e.target.style, focusStyle)}
              onBlur={(e) => Object.assign(e.target.style, inputStyle)}
              {...attributes}
            />
          )}
        </div>
      </label>

      <style jsx>{`
        .markup-highlight-overlay .markup-variable-valid {
          background-color: #e6f3ff;
          color: #0066cc;
          border-radius: 3px;
          padding: 0px 2px;
          font-weight: 500;
        }

        .markup-highlight-overlay .markup-variable-invalid {
          background-color: #ffe6e6;
          color: #cc0000;
          border-radius: 3px;
          padding: 0px 2px;
          font-weight: 500;
          text-decoration: underline wavy #cc0000;
        }
      `}</style>
    </div>
  )
})

MarkupHighlightedTextField.displayName = 'MarkupHighlightedTextField'

export default MarkupHighlightedTextField
