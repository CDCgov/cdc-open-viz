import PropTypes from 'prop-types'

import iconHash from '../../data/iconHash'

// Styles
import '../../styles/v2/components/ui/icon.scss'

const Icon = ({ display = null, base, alt = '', size, color, style, ...attributes }) => {
  const IconObj = iconHash[display] || null

  const filteredAttrs = { ...attributes }
  delete filteredAttrs.className

  const styles = {
    ...style,
    color: color ? color : null,
    fill: (base && color) ? color : null,
    width: size ? size + 'px' : null
  }

  return (
    <>
      {IconObj && <>
        {base
          ? <IconObj title={alt} style={styles} {...filteredAttrs}/>
          : (
            <span className={`cove-icon${attributes.className ? ' ' + attributes.className : ''}`} style={styles} {...filteredAttrs}>
            <IconObj title={alt}/>
          </span>
          )
        }
      </>
      }
    </>
  )
}

Icon.propTypes = {
  /** Define the icon to display */
  display: PropTypes.oneOf(Object.keys(iconHash)),
  /** Returns icon data as plain svg */
  base: PropTypes.bool,
  /** Sets alt text for the icon */
  alt: PropTypes.string,
  /** Override the width of the icon (scales height proportionally) */
  size: PropTypes.number,
  /** Override the color of the icon */
  color: PropTypes.string,
  /** Add inline styles to the icon */
  style: PropTypes.object
}

export default Icon
