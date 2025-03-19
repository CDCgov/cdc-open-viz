import { useContext } from 'react'
import ConfigContext from '../context'
import Icon from '@cdc/core/components/ui/Icon'

const Modal = () => {
  const { applyTooltipsToGeo, content, state, currentViewport: viewport } = useContext(ConfigContext)
  const { capitalizeLabels } = state.tooltips
  const tooltip = applyTooltipsToGeo(content.geoName, content.keyedData, 'jsx')

  return (
    <section
      className={
        capitalizeLabels ? 'modal-content tooltip capitalize ' + viewport : 'modal-content tooltip ' + viewport
      }
      aria-hidden='true'
    >
      <div className='content'>{tooltip}</div>
      <Icon display='close' alt='Close Modal' size={20} color='#000' className='modal-close' />
    </section>
  )
}

export default Modal
