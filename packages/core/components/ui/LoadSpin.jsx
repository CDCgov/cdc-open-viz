import PropTypes from 'prop-types'

// Styles
import '../../styles/v2/components/ui/loadspin.scss'

const LoadSpin = ({ color = '#fff', opacity = 100, size = 100, className }) => {
  const n = 8
  return (
    <>
      <div className={`cove-loadspin${className ? ' ' + className : ''}`} style={{ width: size, height: size }}>
        <div className="cove-loadspin__roller" style={{ opacity: opacity / 100, transform: `scale(${size / 80})` }}>
          {
            [ ...Array(n) ].map((elem, index) => <div key={index} style={{ backgroundColor: color }}/>)
          }
        </div>
      </div>
    </>
  )
}

LoadSpin.propTypes = {
  /** Set the spinner color */
  color: PropTypes.string,
  /** Set the spinner opacity `[0-100]` */
  opacity: PropTypes.number,
  /** Set the size of the displayed spinner in px */
  size: PropTypes.number
}

export default LoadSpin
