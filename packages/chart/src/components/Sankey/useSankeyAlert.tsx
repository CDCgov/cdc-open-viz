import { useState, useEffect, useContext } from 'react'
import { ChartContext } from '../../types/ChartContext'
import ConfigContext from '../../ConfigContext'

const useSankeyAlert = () => {
  const { config, handleChartTabbing, legendId } = useContext<ChartContext>(ConfigContext)

  //Mobile Pop Up
  const [showAlert, setShowAlert] = useState(false)
  const alertMessage = (
    <>
      For best viewing we recommend portrait mode. If you are unable to put your device in portrait mode, please review
      the <a href={`#${handleChartTabbing(config, legendId)}`}>data table</a> below.{' '}
      <a onClick={() => setShowAlert(false)} href={'#!'}>
        Close this alert
      </a>{' '}
      to continue viewing the chart.
    </>
  )

  const handleCloseModal = () => {
    setShowAlert(false)
  }

  const alert = showAlert ? (
    <div className='alert alert-warning alert-dismissible' role='alert'>
      <p style={{ padding: '35px' }}>{alertMessage}</p>
      <button type='button' className='close' data-dismiss='alert' aria-label='Close' onClick={handleCloseModal}>
        <span aria-hidden='true'>&times;</span>
      </button>
    </div>
  ) : null

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768 && window.innerHeight > window.innerWidth) {
        setShowAlert(true)
      } else {
        setShowAlert(false)
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize() // Call the function initially to set the state based on the initial window size

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return {
    setShowAlert,
    showAlert,
    handleCloseModal,
    alertMessage,
    alert
  }
}

export default useSankeyAlert
