const VisualizationError = ({ config, isEditor }) => {
  const styles = {
    position: 'absolute',
    background: 'white',
    zIndex: '999',
    height: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gridArea: 'content'
  }
  return (
    undefined === config.newViz &&
    isEditor &&
    config.runtime &&
    config.runtime?.editorErrorMessage && (
      <section className='waiting' style={styles}>
        <section className='waiting-container'>
          <h3>Error With Configuration</h3>
          <p>{config.runtime.editorErrorMessage}</p>
        </section>
      </section>
    )
  )
}

export default VisualizationError
