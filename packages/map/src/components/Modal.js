import React from 'react';
import closeIcon from '../images/close.svg?inline';

const Modal = (props) => {
  const {
    applyTooltipsToGeo,
    content,
    capitalize,
    applyLegendToValue,
    viewport,
    type
  } = props;

  const tooltip = applyTooltipsToGeo(content.geoName, content.geoData, 'jsx');

  const legendColors = applyLegendToValue(content.geoData);

  return (
    <section className={capitalize ? 'modal-content tooltip capitalize ' + viewport : 'modal-content tooltip ' + viewport} aria-hidden="true">
      <img src={closeIcon} className="modal-close" alt="Close Modal" />
      {type === 'data' && <span className="legend-color" style={{ backgroundColor: legendColors[0] }} />}
      <div className="content">
        {tooltip}
      </div>
    </section>
  );
};


export default Modal;