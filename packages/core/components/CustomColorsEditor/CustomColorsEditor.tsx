import React, { useEffect, useRef, useState } from 'react'
import { sanitizePaletteColor } from '../../helpers/palettes/colorValidation'
import './CustomColorsEditor.css'

const COLOR_COMMIT_DELAY_MS = 300

interface CustomColorsEditorProps {
  colors: string[]
  onChange: (colors: string[]) => void
  label?: string
  minColors?: number
}

const colorsAreEqual = (firstColors: string[], secondColors: string[]) =>
  firstColors.length === secondColors.length && firstColors.every((color, index) => color === secondColors[index])

const CustomColorsEditor: React.FC<CustomColorsEditorProps> = ({
  colors = [],
  onChange,
  label = 'Custom Colors',
  minColors = 1
}) => {
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null)
  const [draftColors, setDraftColors] = useState<string[]>(colors)
  const activeInputIndex = useRef<number | null>(null)
  const colorsRef = useRef(colors)
  const commitTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const ownCommittedColors = useRef<string[] | null>(null)

  useEffect(() => {
    colorsRef.current = colors

    setDraftColors(previousDrafts => {
      const activeIndex = activeInputIndex.current
      const isAlreadySynced = colorsAreEqual(colors, previousDrafts)
      const isOwnCommit = ownCommittedColors.current ? colorsAreEqual(colors, ownCommittedColors.current) : false

      ownCommittedColors.current = null

      if (isAlreadySynced) {
        return previousDrafts
      }

      if (isOwnCommit && activeIndex !== null && previousDrafts.length === colors.length) {
        return colors.map((color, index) => (index === activeIndex ? previousDrafts[index] ?? color : color))
      }

      return colors
    })
  }, [colors])

  useEffect(() => {
    return () => {
      if (commitTimer.current) {
        clearTimeout(commitTimer.current)
      }
    }
  }, [])

  const clearScheduledCommit = () => {
    if (commitTimer.current) {
      clearTimeout(commitTimer.current)
      commitTimer.current = null
    }
  }

  const updateColor = (index: number, sanitizedColor: string) => {
    const newColors = [...colorsRef.current]
    newColors[index] = sanitizedColor
    ownCommittedColors.current = newColors
    onChange(newColors)
  }

  const scheduleColorCommit = (index: number, sanitizedColor: string) => {
    clearScheduledCommit()

    commitTimer.current = setTimeout(() => {
      commitTimer.current = null

      if (colorsRef.current[index] !== sanitizedColor) {
        updateColor(index, sanitizedColor)
      }
    }, COLOR_COMMIT_DELAY_MS)
  }

  const updateDraftColor = (index: number, newColor: string) => {
    setDraftColors(previousDrafts => {
      const newDrafts = [...previousDrafts]
      newDrafts[index] = newColor
      return newDrafts
    })
  }

  const handleColorInputChange = (index: number, newColor: string) => {
    updateDraftColor(index, newColor)

    const sanitizedColor = sanitizePaletteColor(newColor)
    const shouldCommit = newColor === '' || (sanitizedColor !== '' && sanitizedColor === newColor)

    if (shouldCommit && sanitizedColor !== colorsRef.current[index]) {
      scheduleColorCommit(index, sanitizedColor)
    } else {
      clearScheduledCommit()
    }
  }

  const handleColorInputBlur = (index: number, newColor: string) => {
    activeInputIndex.current = null
    clearScheduledCommit()

    const sanitizedColor = sanitizePaletteColor(newColor)
    updateDraftColor(index, sanitizedColor)

    if (sanitizedColor !== colorsRef.current[index]) {
      updateColor(index, sanitizedColor)
    }
  }

  const handleAddColor = () => {
    activeInputIndex.current = null
    clearScheduledCommit()
    const defaultColor = colors.length > 0 ? colors[colors.length - 1] : '#3366cc'
    onChange([...colors, defaultColor])
  }

  const handleRemoveColor = (index: number) => {
    if (colors.length > minColors) {
      activeInputIndex.current = null
      clearScheduledCommit()
      const newColors = colors.filter((_, i) => i !== index)
      onChange(newColors)
    }
  }

  const handleMoveUp = (index: number) => {
    if (index > 0) {
      activeInputIndex.current = null
      clearScheduledCommit()
      const newColors = [...colors]
      ;[newColors[index - 1], newColors[index]] = [newColors[index], newColors[index - 1]]
      onChange(newColors)
    }
  }

  const handleMoveDown = (index: number) => {
    if (index < colors.length - 1) {
      activeInputIndex.current = null
      clearScheduledCommit()
      const newColors = [...colors]
      ;[newColors[index], newColors[index + 1]] = [newColors[index + 1], newColors[index]]
      onChange(newColors)
    }
  }

  const handleDragStart = (e: React.DragEvent, index: number) => {
    const dragItem = e.currentTarget.closest('.custom-color-item') as HTMLElement | null

    if (dragItem && typeof e.dataTransfer.setDragImage === 'function') {
      const dragItemRect = dragItem.getBoundingClientRect()
      e.dataTransfer.setDragImage(dragItem, e.clientX - dragItemRect.left, e.clientY - dragItemRect.top)
    }

    e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.setData('text/plain', String(index))
    activeInputIndex.current = null
    clearScheduledCommit()
    setDraggedIndex(index)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const handleDrop = (e: React.DragEvent, dropIndex: number) => {
    e.preventDefault()

    if (draggedIndex === null || draggedIndex === dropIndex) {
      setDraggedIndex(null)
      return
    }

    activeInputIndex.current = null
    clearScheduledCommit()

    const newColors = [...colors]
    const draggedColor = newColors[draggedIndex]
    newColors.splice(draggedIndex, 1)
    newColors.splice(dropIndex, 0, draggedColor)

    onChange(newColors)
    setDraggedIndex(null)
  }

  const stopInputMouseEvent = (e: React.MouseEvent<HTMLInputElement>) => {
    e.stopPropagation()
  }

  return (
    <div className="custom-colors-editor">
      <label className="custom-colors-label">{label}</label>

      <div className="custom-colors-notice">
        <svg className="notice-icon" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
          <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
        </svg>
        <span>
          <strong>Accessibility Notice:</strong> When using custom colors, conduct a{' '}
            Section 508 review to ensure adequate color contrast and accessibility compliance.{' '}
        </span>
      </div>

      <div className="custom-colors-preview">
        {colors.map((color, index) => (
          <div
            key={index}
            className="preview-swatch"
            style={{ backgroundColor: color }}
            title={`Color ${index + 1}: ${color}`}
          />
        ))}
      </div>

      <div className="custom-colors-list">
        {colors.map((color, index) => (
          <div
            key={index}
            className={`custom-color-item ${draggedIndex === index ? 'dragging' : ''}`}
            onDragOver={(e) => handleDragOver(e)}
            onDrop={(e) => handleDrop(e, index)}
          >
            <div className="color-item-controls">
              <button
                type="button"
                className="color-item-drag-handle"
                title="Drag to reorder"
                draggable
                aria-label={`Drag color ${index + 1} to reorder`}
                onDragStart={(e) => handleDragStart(e, index)}
                onDragEnd={() => setDraggedIndex(null)}
              >
                ⋮⋮
              </button>
              {/* <span className="color-item-number">{index + 1}.</span> */}

              {/* <input
                type="color"
                value={color}
                onChange={(e) => handleColorChange(index, e.target.value)}
                className="color-picker"
                title="Click to change color"
                aria-label={`Color picker for color ${index + 1}`}
              /> */}

              <div className="color-input-wrapper">
                <input
                  type="text"
                  value={draftColors[index] ?? color}
                  onFocus={() => {
                    activeInputIndex.current = index
                  }}
                  onChange={(e) => handleColorInputChange(index, e.target.value)}
                  onBlur={(e) => handleColorInputBlur(index, e.target.value)}
                  onMouseDown={stopInputMouseEvent}
                  onClick={stopInputMouseEvent}
                  id={`input-colors-none-color-${index}`}
                  name={`colors-null-color-${index}`}
                  placeholder="#000000"
                  maxLength={15}
                  className="color-text-input"
                  aria-label={`Color value for color ${index + 1}`}
                />
              </div>

              <div className="color-item-buttons">
                <button
                  type="button"
                  onClick={() => handleMoveUp(index)}
                  disabled={index === 0}
                  className="btn-move"
                  title="Move up"
                  aria-label="Move color up"
                >
                  ↑
                </button>

                <button
                  type="button"
                  onClick={() => handleMoveDown(index)}
                  disabled={index === colors.length - 1}
                  className="btn-move"
                  title="Move down"
                  aria-label="Move color down"
                >
                  ↓
                </button>

                <button
                  type="button"
                  onClick={() => handleRemoveColor(index)}
                  disabled={colors.length <= minColors}
                  className="btn-remove"
                  title="Remove color"
                  aria-label="Remove color"
                >
                  ×
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={handleAddColor}
        className="btn-add-color"
      >
        + Add Color
      </button>

      <div className="custom-colors-info">
        {colors.length} color{colors.length !== 1 ? 's' : ''}
        {colors.length < minColors && ` (minimum ${minColors} required)`}
      </div>
    </div>
  )
}

export default CustomColorsEditor
