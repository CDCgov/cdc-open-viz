import Icon from '../../ui/Icon'

interface ExpandCollapseProps {
  expanded: boolean
  setExpanded: (expanded: boolean) => void
  tableTitle: string
  end?: boolean
}

const ExpandCollapse = ({ expanded, setExpanded, tableTitle, end }: ExpandCollapseProps) => {
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
      {`${tableTitle}${end ? ` (end)` : ''}`}
    </div>
  )
}

export default ExpandCollapse
