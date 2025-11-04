import React, { useState } from 'react'
import { TextField } from '../EditorPanel/Inputs'
import './CustomColorsEditor.css'

interface CustomColorsEditorProps {
  colors: string[]
  onChange: (colors: string[]) => void
  label?: string
  minColors?: number
  maxColors?: number
}

const CustomColorsEditor: React.FC<CustomColorsEditorProps> = ({
  colors = [],
  onChange,
  label = 'Custom Colors',
  minColors = 1,
  maxColors = 20
}) => {
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null)

  const handleColorChange = (index: number, newColor: string) => {
    const newColors = [...colors]
    newColors[index] = newColor
    onChange(newColors)
  }

  const handleAddColor = () => {
    if (colors.length < maxColors) {
      // Add a new color (default to the last color or a neutral color)
      const defaultColor = colors.length > 0 ? colors[colors.length - 1] : '#3366cc'
      onChange([...colors, defaultColor])
    }
  }

  const handleRemoveColor = (index: number) => {
    if (colors.length > minColors) {
      const newColors = colors.filter((_, i) => i !== index)
      onChange(newColors)
    }
  }

  const handleMoveUp = (index: number) => {
    if (index > 0) {
      const newColors = [...colors]
      ;[newColors[index - 1], newColors[index]] = [newColors[index], newColors[index - 1]]
      onChange(newColors)
    }
  }

  const handleMoveDown = (index: number) => {
    if (index < colors.length - 1) {
      const newColors = [...colors]
      ;[newColors[index], newColors[index + 1]] = [newColors[index + 1], newColors[index]]
      onChange(newColors)
    }
  }

  const handleDragStart = (index: number) => {
    setDraggedIndex(index)
  }

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault()
  }

  const handleDrop = (e: React.DragEvent, dropIndex: number) => {
    e.preventDefault()

    if (draggedIndex === null || draggedIndex === dropIndex) {
      setDraggedIndex(null)
      return
    }

    const newColors = [...colors]
    const draggedColor = newColors[draggedIndex]
    newColors.splice(draggedIndex, 1)
    newColors.splice(dropIndex, 0, draggedColor)

    onChange(newColors)
    setDraggedIndex(null)
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
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={(e) => handleDragOver(e, index)}
            onDrop={(e) => handleDrop(e, index)}
          >
            <div className="color-item-controls">
              <span className="color-item-drag-handle" title="Drag to reorder">
                ⋮⋮
              </span>
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
                <TextField
                  type="text"
                  value={color}
                  label=""
                  section="colors"
                  subsection={null}
                  fieldName={`color-${index}`}
                  updateField={(section, subsection, fieldName, value) => {
                    handleColorChange(index, value)
                  }}
                  placeholder="#000000"
                  maxLength={7}
                  className="color-text-input"
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
        disabled={colors.length >= maxColors}
        className="btn-add-color"
      >
        + Add Color
      </button>

      <div className="custom-colors-info">
        {colors.length} color{colors.length !== 1 ? 's' : ''}
        {colors.length < minColors && ` (minimum ${minColors} required)`}
        {colors.length >= maxColors && ` (maximum reached)`}
      </div>
    </div>
  )
}

export default CustomColorsEditor
