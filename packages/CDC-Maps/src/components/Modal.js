import React, { useEffect } from 'react';
import closeIcon from '../images/close.svg';

const Modal = (props) => {
  const {
    applyTooltipsToGeo, content, capitalize, applyLegendToValue, state
  } = props;

  const tooltip = applyTooltipsToGeo(content.geoName, content.geoData, 'jsx');

  const legendColors = applyLegendToValue(content.geoData);

  return (
    <section className={capitalize ? 'modal-content tooltip capitalize' : 'modal-content tooltip'} aria-hidden="true">
      <img src={closeIcon} className="modal-close" alt="Close Modal" />
      {state.general.type === 'data' && <span className="legend-color" style={{ backgroundColor: legendColors[0] }} />}
      <div className="content">
        {tooltip}
      </div>
    </section>
  );
};


export default Modal;