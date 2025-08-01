import Icon from '../../ui/Icon'
import parse from 'html-react-parser'

const ExpandCollapse = ({ expanded, setExpanded, tableTitle, fontSize, viewport }) => {
  return (
    <div
      role='button'
      className={expanded ? 'data-table-heading p-3' : 'collapsed data-table-heading p-3'}
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
      {parse(tableTitle)}
    </div>
  )
}

export default ExpandCollapse
