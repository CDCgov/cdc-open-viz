import Icon from '../../ui/Icon'

const ExpandCollapse = ({ expanded, setExpanded, tableTitle }) => (
  <div
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

export default ExpandCollapse
