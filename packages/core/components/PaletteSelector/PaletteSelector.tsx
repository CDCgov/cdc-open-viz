import React from 'react'
import { getPaletteAccessor } from '../../helpers/getPaletteAccessor'
import './PaletteSelector.css'

interface PaletteSelectorProps {
  palettes: string[]
  colorPalettes: any
  config: any
  onPaletteSelect: (palette: string) => void
  selectedPalette?: string
  colorIndices?: [number, number, number]
  className?: string
  element?: 'button' | 'li'
  minColorsForFilter?: (palette: string, paletteAccessor: any, config: any) => boolean
  getItemClassName?: (palette: string) => string
}

const PaletteSelector: React.FC<PaletteSelectorProps> = ({
  palettes,
  colorPalettes,
  config,
  onPaletteSelect,
  selectedPalette,
  colorIndices = [2, 3, 5],
  className = 'color-palette',
  element = 'button',
  minColorsForFilter,
  getItemClassName
}) => {

  const handlePaletteSelection = (palette: string) => (e: React.MouseEvent) => {
    if (element === 'button') {
      e.preventDefault()
    }
    onPaletteSelect(palette)
  }

  const getSelectedClass = (palette: string) => {
    if (getItemClassName) {
      return getItemClassName(palette)
    }
    return selectedPalette === palette ? 'selected' : ''
  }

  const renderPaletteColors = (palette: string) => {
    const [colorOneIndex, colorTwoIndex, colorThreeIndex] = colorIndices

    // Use the enhanced getPaletteAccessor to get the specific palette colors
    const paletteColors = getPaletteAccessor(colorPalettes, config, palette)

    if (!paletteColors || !Array.isArray(paletteColors)) {
      return (
        <>
          <span style={{ backgroundColor: '#ccc' }}></span>
          <span style={{ backgroundColor: '#ccc' }}></span>
          <span style={{ backgroundColor: '#ccc' }}></span>
        </>
      )
    }

    const colorOne = {
      backgroundColor: paletteColors[colorOneIndex] || '#ccc'
    }

    const colorTwo = {
      backgroundColor: paletteColors[colorTwoIndex] || '#ccc'
    }

    const colorThree = {
      backgroundColor: paletteColors[colorThreeIndex] || '#ccc'
    }

    return (
      <>
        <span style={colorOne}></span>
        <span style={colorTwo}></span>
        <span style={colorThree}></span>
      </>
    )
  }

  const Container = element === 'li' ? 'ul' : 'div'

  return (
    <Container className={className}>
      {palettes.map(palette => {
        // Apply custom filter if provided
        if (minColorsForFilter) {
          const paletteColors = getPaletteAccessor(colorPalettes, config, palette)
          if (!minColorsForFilter(palette, paletteColors, config)) {
            return null
          }
        }

        const Element = element

        return (
          <Element
            key={palette}
            title={palette}
            onClick={handlePaletteSelection(palette)}
            className={getSelectedClass(palette)}
          >
            {renderPaletteColors(palette)}
          </Element>
        )
      })}
    </Container>
  )
}

export default PaletteSelector