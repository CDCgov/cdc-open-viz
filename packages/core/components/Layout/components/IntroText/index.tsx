import React from 'react'
import parse from 'html-react-parser'
import { Visualization } from '../../../../types/Visualization'
import './IntroText.styles.css'

type IntroTextProps = {
  // the intro text to be displayed
  text: string
  // the configuration object for the visualization
  config: Visualization
}

const IntroText: React.FC<IntroTextProps> = ({ text, config }) => {
  return (
    text &&
    config.visualizationType !== 'Spark Line' && <section className='cove-component__intro-text'>{parse(text)}</section>
  )
}

export default IntroText
