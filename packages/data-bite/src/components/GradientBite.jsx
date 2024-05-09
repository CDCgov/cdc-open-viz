import React from 'react'
import '../scss/kpi.scss'

export const KPIComponent = ({ label, value }) => {
  return (
    <div className='cove-component__content kpi-container'>
      <div className='kpi-content'>
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
    </div>
  )
}

export default KPIComponent
