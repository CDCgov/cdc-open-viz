// Store
import { useConfigStore } from '../../stores/configStore'

// Third Party
import PropTypes from 'prop-types'

// Components
import Label from '../element/Label'
import Tooltip from './Tooltip'

// Data
// -- Theme colors are loaded externally from pre-defined object.
import THEME_COLORS from '../../data/componentThemes'

// Helpers
import { capitalizeFirstLetter } from '../../helpers/coveHelpers'

// Styles
import '../../styles/components/ui/color-picker.scss'

const ColorButton = ({ color }) => {
  const { config, updateConfig } = useConfigStore()

  const customAttrs = color === config.theme && { 'data-selected': true }

  return (
    <button className="cove-color-picker__button" {...customAttrs} onClick={() => {
      updateConfig({ theme: color })
    }}>
      <div className="cove-color-picker__color" style={{ backgroundColor: THEME_COLORS[color].primary }}/>
      <div className="cove-color-picker__color--ring"/>
    </button>
  )
}

const ColorPicker = ({ label, colors = THEME_COLORS, tooltip, colorTooltip }) => {
  const parseColors = (colors) => {
    if (colors.constructor === Object) {
      let arr = []
      Object.entries(THEME_COLORS).forEach(([ theme, colors ]) => arr.push(theme))
      return arr
    } else if (colors.constructor === Array) {
      return colors
    } else {
      console.error('Unable to parse colors. Color data must be provided as either an object or an array.')
      return []
    }
  }

  return (
    <>
      {label && <Label tooltip={tooltip}>{label}</Label>}
      <div className="cove-color-picker">
        {/* Use two separate maps to resolve key warnings */}
        {colorTooltip ?
          parseColors(colors).map((color, index) => (
            <Tooltip position="bottom" key={index}>
              <Tooltip.Target>
                <ColorButton color={color}/>
              </Tooltip.Target>
              <Tooltip.Content>{capitalizeFirstLetter(color)}</Tooltip.Content>
            </Tooltip>
          )) :
          parseColors(colors).map((color, index) => (
            <ColorButton color={color} key={index}/>
          ))
        }
      </div>
    </>
  )
}

ColorPicker.propTypes = {
  label: PropTypes.string,
  colors: PropTypes.array || PropTypes.object,
  tooltip: PropTypes.any,
  colorTooltip: PropTypes.bool
}

export default ColorPicker
