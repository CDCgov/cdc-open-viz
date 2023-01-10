import React from 'react'

// Context
import { useConfigContext } from '../../context/ConfigContext'

// Components
import Label from '../elements/Label'
import Tooltip from './Tooltip'

// Styles
import '../../styles/v2/components/ui/color-picker.scss'

const ColorButton = ({ color }) => {
  const { config, configActions } = useConfigContext()

  return (
    <button className={`cove-color-picker__button${config.theme === color ? ' selected ' : ''}`} onClick={() => {
      configActions.updateConfig({ ...config, theme: color })
    }}>
      <div className={`cove-color-picker__color${' ' + color}`}/>
      <div className={`cove-color-picker__color--ring${' ' + color}`}/>
    </button>
  )
}

/* TODO: COVE Refactor - move config and updateConfig references to global */
const ColorPicker = ({ label, colors, tooltip, colorTooltip }) => {
  return (
    <>
      {label && <Label tooltip={tooltip}>{label}</Label>}
      <div className="cove-color-picker">
        {/* Use two separate maps to resolve key warnings */}
        {colorTooltip ?
          colors.map((color, index) => (
            <Tooltip position="bottom" key={index}>
              <Tooltip.Target>
                <ColorButton color={color}/>
              </Tooltip.Target>
              <Tooltip.Content>{color}</Tooltip.Content>
            </Tooltip>
          )) :
          colors.map((color, index) => (
            <ColorButton color={color} key={index}/>
          ))
        }
      </div>
    </>
  )
}

export default ColorPicker
