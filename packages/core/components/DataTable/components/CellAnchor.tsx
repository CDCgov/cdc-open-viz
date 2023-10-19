import ExternalIcon from '@cdc/core/assets/external-link.svg'
// Optionally wrap cell with anchor if config defines a navigation url
const CellAnchor = ({ markup, row, columns, navigationHandler }) => {
  if (columns.navigate && row[columns.navigate.name]) {
    return (
      <span
        onClick={() => navigationHandler(row[columns.navigate.name])}
        className='table-link'
        title='Click for more information (Opens in a new window)'
        role='link'
        tabIndex={0}
        onKeyDown={e => {
          if (e.keyCode === 13) {
            navigationHandler(row[columns.navigate.name])
          }
        }}
      >
        {markup}
        <ExternalIcon className='inline-icon' />
      </span>
    )
  }

  return <></>
}

export default CellAnchor
