import React from 'react'
import './HeaderThemeSelector.css'

// Default header theme colors used across all CDC Open Viz packages
const DEFAULT_HEADER_COLORS = [
  'theme-blue',
  'theme-purple',
  'theme-brown',
  'theme-teal',
  'theme-pink',
  'theme-orange',
  'theme-slate',
  'theme-indigo',
  'theme-cyan',
  'theme-green',
  'theme-amber'
]

interface HeaderThemeSelectorProps {
  /** Array of theme color names to display. Defaults to standard CDC theme colors */
  headerColors?: string[]
  /** Currently selected theme */
  selectedTheme?: string
  /** Callback when a theme is selected */
  onThemeSelect: (theme: string) => void
  /** Optional label for the selector */
  label?: string
  /** Optional CSS class name */
  className?: string
}

const HeaderThemeSelector: React.FC<HeaderThemeSelectorProps> = ({
  headerColors = DEFAULT_HEADER_COLORS,
  selectedTheme,
  onThemeSelect,
  label = 'Header Theme',
  className = 'color-palette'
}) => {
  const handleThemeSelection = (theme: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    onThemeSelect(theme)
  }

  return (
    <label className='header'>
      <span className='edit-label'>{label}</span>
      <ul className={className}>
        {headerColors.map(theme => (
          <button
            title={theme}
            key={theme}
            onClick={handleThemeSelection(theme)}
            className={selectedTheme === theme ? `selected ${theme}` : theme}
          />
        ))}
      </ul>
    </label>
  )
}

export default HeaderThemeSelector
