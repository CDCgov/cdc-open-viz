import PropTypes from 'prop-types'

import iconHash from '../../data/iconHash'

// Styles
import '../../styles/v2/components/ui/icon.scss'

const Icon = ({ display = null, base, alt = '', size, color, style, className, ...attributes }) => {
  const IconObj = iconHash[display] || null

  const classNameList = 'cove-icon' + (className ? ' ' + className : '')

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
          ? <IconObj className={classNameList} title={alt} style={styles} {...attributes}/>
          : (
            <span className={classNameList} style={styles} {...attributes}>
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
