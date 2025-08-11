import { useContext } from 'react'
import ConfigContext, { MapDispatchContext } from '../context'
import Icon from '@cdc/core/components/ui/Icon'
import useApplyTooltipsToGeo from '../hooks/useApplyTooltipsToGeo'
import { MapContext } from '../types/MapContext'

const Modal = () => {
  const { content, config, currentViewport: viewport } = useContext<MapContext>(ConfigContext)
  const { capitalizeLabels } = config.tooltips
  const { applyTooltipsToGeo } = useApplyTooltipsToGeo()
  const tooltip = applyTooltipsToGeo(content.geoName, content.keyedData, 'jsx')
  const dispatch = useContext(MapDispatchContext)

  return (
    <section
      className={capitalizeLabels ? 'modal-content tooltip ' + viewport : 'modal-content tooltip ' + viewport}
      aria-hidden='true'
    >
      <div className='content'>{tooltip}</div>
      <Icon
        display='close'
        alt='Close Modal'
        size={20}
        color='#000'
        className='modal-close'
        onClick={() => {
          dispatch({ type: 'SET_MODAL', payload: null })
        }}
      />
    </section>
  )
}

export default Modal
