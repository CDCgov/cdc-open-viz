import Icon from '../../ui/Icon'
import { fontSizes } from '../../../helpers/cove/fontSettings'

const ExpandCollapse = ({ expanded, setExpanded, tableTitle, fontSize, viewport }) => {
  const titleFontSize = ['xs', 'xxs'].includes(viewport) ? '13px' : `${fontSizes[fontSize]}px`
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
