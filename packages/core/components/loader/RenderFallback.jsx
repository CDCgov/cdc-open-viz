import PropTypes from 'prop-types'

// Components
import LoadSpin from '../ui/LoadSpin'

// Styles
import '../../styles/v2/components/ui/render.scss'

const RenderFallback = (
  {
    fadeEffect = true,
    text = 'Rendering visualization...',
    loadSpinColor = '#005eaa',
    loadSpinOpacity = 30,
    loadSpinSize = 85,
    style
  }
) => {
  return (
    <div className="cove-render" style={style}>
      <div className="cove-render__content">
        <div className={`cove-render__text${fadeEffect ? ' cove-render__text--animate' : ''}`}>
          {text}
        </div>
        <LoadSpin size={loadSpinSize} color={loadSpinColor} opacity={loadSpinOpacity}/>
      </div>
    </div>
  )
}

RenderFallback.propTypes = {
  /** Enable a pulse fade effect for text in the fallback */
  fadeEffect: PropTypes.bool,
  /** Set the text to display in the fallback */
  text: PropTypes.string,
  /** Set the spinner color */
  loadSpinColor: PropTypes.string,
  /** Set the spinner opacity `[0-100]` */
  loadSpinOpacity: PropTypes.number,
  /** Set the size of the displayed spinner in px */
  loadSpinSize: PropTypes.number
}

export default RenderFallback
