// Components
import Icon from './Icon'

// Styles
import '../../styles/components/ui/progression.scss'

const SplashError = ({ title = 'Error', message }) => {
  return (
    <section className="cove-splash__waiting">
      <section className="cove-splash__waiting__container">
        {title && <h3 className="cove-heading--2 mb-1">{title}<Icon display="warningTriangle" className="ml-2"/></h3>}
        {message && <p>{message}</p>}
      </section>
    </section>
  )
}

export default SplashError
