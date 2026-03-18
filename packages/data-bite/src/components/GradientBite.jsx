import React from 'react'
import '../scss/kpi.scss'

export const KPIComponent = ({ label, value, subtext = null }) => {
  return (
    <div className='cove-component__content kpi-container'>
      <div className='kpi-content'>
        <div className='kpi-main'>
          <div className='label-container'>
            <span className='label'>
              <strong>{label}</strong>
            </span>
          </div>
          <div className='value-container'>
            <span className='value'>
              <strong>{value}</strong>
            </span>
          </div>
        </div>
        {subtext ? <div className='kpi-subtext'>{subtext}</div> : null}
      </div>
    </div>
  )
}

export default KPIComponent
