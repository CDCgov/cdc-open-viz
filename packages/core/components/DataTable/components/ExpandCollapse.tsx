import Icon from '../../ui/Icon'

const ExpandCollapse = ({ expanded, setExpanded, tableTitle, fontSize, viewport }) => {
  const fontSizes = { small: 16, medium: 18, large: 20 }
  const titleFontSize = ['sm', 'xs', 'xxs'].includes(viewport) ? '13px' : `${fontSizes[fontSize]}px`
  return (
    <div
      style={{ fontSize: titleFontSize }}
      role='button'
      className={expanded ? 'data-table-heading' : 'collapsed data-table-heading'}
      onClick={() => {
        setExpanded(!expanded)
      }}
      tabIndex={0}
      onKeyDown={e => {
        if (e.keyCode === 13) {
          setExpanded(!expanded)
        }
      }}
    >
      <Icon display={expanded ? 'minus' : 'plus'} base />
      {tableTitle}
    </div>
  )
}

export default ExpandCollapse
