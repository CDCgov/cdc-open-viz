type SkipToProps = {
  // id to skip to
  skipId: string
  // focusable text output, screen reader message
  skipMessage: string
}

const SkipTo: React.FC<SkipToProps> = ({ skipId, skipMessage }) => {
  const handleOnClick = () => {
    // Navigate to the specific part of the page
    const targetElement = document.getElementById(skipId)
    if (targetElement) {
      targetElement.scrollIntoView()
      targetElement.setAttribute('tabIndex', '-1')
      targetElement.focus()

      // Setup to remove tabIndex on blur to maintain document flow
      const blurListener = () => {
        targetElement.removeAttribute('tabIndex')
        targetElement.removeEventListener('blur', blurListener)
      }
      targetElement.addEventListener('blur', blurListener)
    }
  }
  return (
    <div
      tabIndex={0}
      id='skip-nav'
      className='cdcdataviz-sr-only-focusable'
      onClick={handleOnClick}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleOnClick()
        }
      }}
      role='link'
      aria-label={skipMessage}
    >
      {skipMessage}
    </div>
  )
}

export default SkipTo
