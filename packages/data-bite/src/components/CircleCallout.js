import React, { useState, useEffect, memo, useContext } from 'react'
import themes from '@cdc/core/data/themes';
import chroma from 'chroma-js';

const CircleCallout = ({text, theme = 'theme-blue'}) => {
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
      <circle cx="50" cy="50" r="50" style={styles.outerRing} />
      <circle cx="42" cy="42" r="42" style={styles.innerRing} transform="translate(8, 8)"/>
      <text y="50%" x="50%" style={styles.text} textAnchor="middle" dominantBaseline="central">{text}</text>
    </svg>
  )
}

export default CircleCallout