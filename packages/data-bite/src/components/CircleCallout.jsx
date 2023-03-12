import React from 'react'

// Third Party
import themes from '@cdc/core/data/componentThemes'
import chroma from 'chroma-js'

const CircleCallout = ({ text, theme = 'blue', biteFontSize }) => {
  const styles = {
    outerRing: {
      fill: themes[theme].primary
    },
    innerRing: {
      fill: chroma(themes[theme].primary).darken(0.5)
    },
    text: {
      fill: '#FFF'
    }
  }

  return (
    <svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg' className='circle-callout callout'>
      <circle cx='50' cy='50' r='45' style={styles.innerRing} strokeWidth='10' stroke={styles.outerRing.fill} />
      <text y='50%' x='50%' fontSize={biteFontSize} style={styles.text} textAnchor='middle' dominantBaseline='central'>
        {text}
      </text>
    </svg>
  )
}

export default CircleCallout
