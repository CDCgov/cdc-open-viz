import { useContext } from 'react'
import LegendShape from '@cdc/core/components/LegendShape'
import ConfigContext from '../context'
import Icon from '@cdc/core/components/ui/Icon'

const Modal = () => {
  const { applyTooltipsToGeo, capitalize, applyLegendToRow, viewport, type, content } = useContext(ConfigContext)

  const tooltip = applyTooltipsToGeo(content.geoName, content.keyedData, 'jsx')

  const legendColors = applyLegendToRow(content.keyedData)

  return (
    <section
      className={capitalize ? 'modal-content tooltip capitalize ' + viewport : 'modal-content tooltip ' + viewport}
      aria-hidden='true'
    >
      {type === 'data' && <LegendShape fill={legendColors[0]} />}
      <div className='content'>{tooltip}</div>
      <Icon display='close' alt='Close Modal' size={20} color='#000' className='modal-close' />
    </section>
  )
}

export default Modal
