import React, { useEffect, useRef } from 'react'
import './loader.styles.css'

type LoaderProps = {
  fullScreen?: boolean
}

const Spinner = () => (
  <div className='spinner-border text-primary' role='status'>
    <span className='sr-only'>Loading...</span>
  </div>
)

const Loader: React.FC<LoaderProps> = ({ fullScreen = false }) => {
  const backgroundRef = useRef(null)

  useEffect(() => {
    if (backgroundRef?.current) {
      const backgroundHeight = backgroundRef.current.parentElement.clientHeight
      backgroundRef.current.style.height = `${backgroundHeight}px`
    }
  }, [])

  return fullScreen ? (
    <div ref={backgroundRef} className='cove-loader fullscreen'>
      <Spinner />
    </div>
  ) : (
    <Spinner />
  )
}

export default Loader
