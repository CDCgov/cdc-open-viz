import React, { useState, useEffect, memo, useContext } from 'react'
import themes from '@cdc/core/data/themes';
import chroma from 'chroma-js';

const CircleCallout = ({text, theme = 'theme-blue', biteFontSize = '16'}) => {
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
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="circle-callout">
      <circle cx="40" cy="40" r="40" style={styles.innerRing} transform="translate(10, 10)" strokeWidth="10" stroke={styles.outerRing.fill} />
      <text y="50%" x="50%" fontSize={biteFontSize} style={styles.text} textAnchor="middle" dominantBaseline="central">{text}</text>
    </svg>
  )
}

export default CircleCallout