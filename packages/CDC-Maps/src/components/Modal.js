import React, { useEffect } from 'react';
import closeIcon from '../images/close.svg';

const Modal = (props) => {
  const {
    applyTooltipsToGeo, content, closeModal, capitalize, applyLegendToValue, state
  } = props;

  if(!content) {
    return null;
  }

  const tooltip = applyTooltipsToGeo(content.geoName, content.geoData);

  const legendColors = applyLegendToValue(content.geoData);

  return (
    <section className={capitalize ? 'modal-content capitalize' : 'modal-content'} id="tooltip" aria-hidden="true">
      <img src={closeIcon} className="modal-close" onClick={() => closeModal()} alt="Close Modal" />
      {state.general.type === 'data' && <span className="legend-color" style={{ backgroundColor: legendColors[0] }} />}
      <div className="content">
        {tooltip}
      </div>
    </section>
  );
};


export default Modal;