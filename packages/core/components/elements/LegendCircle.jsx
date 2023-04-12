import React from 'react'

// Third Party
import PropTypes from 'prop-types'

const LegendCircle = ({ fill }) => {
  const containerStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '1em',
    height: '1.4em',
    marginRight: '5px'
  }

  const circleStyles = {
    borderRadius: '300px',
    display: 'inline-block',
    height: '1em',
    width: '1em',
    border: 'rgba(0,0,0,.3) 1px solid',
    backgroundColor: fill
  }

  return (
    <div className='cove-chart__legend-circle' style={containerStyles}>
      <div className='cove-chart__legend-circle__circle' style={circleStyles} />
    </div>
  )
}

LegendCircle.propTypes = {
  /** Specify the color of the circle */
  fill: PropTypes.string
}

export default LegendCircle
