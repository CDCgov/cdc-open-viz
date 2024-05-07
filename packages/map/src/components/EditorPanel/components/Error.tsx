const Error = ({ state }) => {
  return (
    <section className='waiting'>
      <section className='waiting-container'>
        <h3>Error With Configuration</h3>
        <p>{state.runtime.editorErrorMessage}</p>
      </section>
    </section>
  )
}

export default Error
