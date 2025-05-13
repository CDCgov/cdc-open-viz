import { useContext } from 'react'
import ConfigContext from '../../../context'

const Error = () => {

  const { config } = useContext(ConfigContext)
  const errorMessage = config.runtime.editorErrorMessage

  return (
    <section className='waiting'>
      <section className='waiting-container'>
        <h3>Error With Configuration</h3>
        <p>{errorMessage}</p>
      </section>
    </section>
  )
}

export default Error
