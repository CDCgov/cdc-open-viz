import Button from './Button.jsx'
import React from 'react'
import { missingRequiredSections } from '../../helpers/missingRequiredSections.js'
const Confirm = props => {
  const { updateConfig, config } = props
  const confirmDone = e => {
    if (e) {
      e.preventDefault()
    }

    let newConfig = { ...config }
    delete newConfig.newViz

    updateConfig(newConfig)
  }

  const styles: React.CSSProperties = {
    position: 'relative',
    height: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gridArea: 'content'
  }

  return (
    <section className='waiting' style={styles}>
      <section className='waiting-container'>
        <h3>Finish Configuring</h3>
        <p>Set all required options to the left and confirm below to display a preview of the chart.</p>
        <Button
          className='btn btn-primary'
          style={{ margin: '1em auto' }}
          disabled={missingRequiredSections(config)}
          onClick={e => confirmDone(e)}
        >
          I'm Done
        </Button>
      </section>
    </section>
  )
}

export default Confirm
