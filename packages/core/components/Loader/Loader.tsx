import React, { useEffect, useRef } from 'react'
import './loader.styles.css'

// these coorespond to bootstrap classes
// https://getbootstrap.com/docs/4.2/components/spinners/
type SpinnerType = 'text-primary' | 'text-secondary'

type LoaderProps = {
  fullScreen?: boolean
  spinnerType?: SpinnerType
}

const Spinner = ({ spinnerType }: { spinnerType: SpinnerType }) => (
  <div className={`spinner-border ${spinnerType}`} role='status'>
    <span className='sr-only'>Loading...</span>
  </div>
)

const Loader: React.FC<LoaderProps> = ({ fullScreen = false, spinnerType }) => {
  const backgroundRef = useRef(null)

  useEffect(() => {
    if (backgroundRef?.current) {
      const backgroundHeight = backgroundRef.current.parentElement.clientHeight
      backgroundRef.current.style.height = `${backgroundHeight}px`
    }
  }, [])

  return fullScreen ? (
    <div ref={backgroundRef} className='cove-loader fullscreen'>
      <Spinner spinnerType={spinnerType || 'text-primary'} />
    </div>
  ) : (
    <Spinner spinnerType={spinnerType || 'text-primary'} />
  )
}

export default Loader
