import React, { useContext } from 'react'
import closeIcon from '../images/close.svg?inline'
import LegendShape from '@cdc/core/components/LegendShape'
import ConfigContext from '../context'

const Modal = props => {
  const { applyTooltipsToGeo, capitalize, applyLegendToRow, viewport, type, content } = useContext(ConfigContext)

  const tooltip = applyTooltipsToGeo(content.geoName, content.keyedData, 'jsx')

  const legendColors = applyLegendToRow(content.keyedData)

  return (
    <section className={capitalize ? 'modal-content tooltip capitalize ' + viewport : 'modal-content tooltip ' + viewport} aria-hidden='true'>
      <img src={closeIcon} className='modal-close' alt='Close Modal' />
      {type === 'data' && <LegendShape fill={legendColors[0]} />}
      <div className='content'>{tooltip}</div>
    </section>
  )
}

export default Modal
