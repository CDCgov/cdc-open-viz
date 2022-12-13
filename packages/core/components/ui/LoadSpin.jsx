import React from 'react'
import '../../styles/v2/components/loadspin.scss'

const LoadSpin = ({ color = '#fff', opacity = 100, size = 100, className }) => {
  const n = 8
  return (
    <>
      <div className={`cove-loadspin${className ? ' ' + className : ''}`} style={{ width: size, height: size }}>
        <div className='cove-loadspin__roller' style={{ opacity: opacity / 100, transform: `scale(${size / 80})` }}>
          {[...Array(n)].map((elem, index) => (
            <div key={index} style={{ backgroundColor: color }} />
          ))}
        </div>
      </div>
    </>
  )
}

export default LoadSpin
