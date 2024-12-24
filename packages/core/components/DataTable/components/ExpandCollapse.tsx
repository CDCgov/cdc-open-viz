import Icon from '../../ui/Icon'
import { fontSize } from '@cdc/core/helpers/cove/fontSettings'

const ExpandCollapse = ({ expanded, setExpanded, tableTitle, fontSize, viewport }) => {
  return (
    <div
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
