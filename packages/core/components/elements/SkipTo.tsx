type SkipToProps = {
  // id to skip to
  skipId: string
  // focusable text output, screen reader message
  skipMessage: string
}

const SkipTo: React.FC<SkipToProps> = ({ skipId, skipMessage }) => (
  <a id='skip-nav' className='cdcdataviz-sr-only-focusable' href={`#${skipId}`}>
    {skipMessage}
  </a>
)

export default SkipTo
