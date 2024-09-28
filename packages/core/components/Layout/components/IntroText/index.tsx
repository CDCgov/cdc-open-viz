import React from 'react'
import parse from 'html-react-parser'

const IntroText = ({ config }) => {
  return (
    config?.introText &&
    config.visualizationType !== 'Spark Line' && (
      <section className={`introText legend_${config.legend.hide ? 'hidden' : 'visible'}_${config.legend.position} `}>
        {parse(config.introText)}
      </section>
    )
  )
}

export default IntroText
