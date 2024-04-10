import { useId } from 'react'
type SkipToProps = {
  // id to skip to
  skipId: string
  // focusable text output, screen reader message
  skipMessage: string
}

const SkipTo: React.FC<SkipToProps> = ({ skipId, skipMessage }) => {
  const accessibleId = useId()
  return (
    <a id={`skip-nav--${accessibleId}`} className='cdcdataviz-sr-only-focusable' href={`#${skipId}`}>
      {skipMessage}
    </a>
  )
}
export default SkipTo
