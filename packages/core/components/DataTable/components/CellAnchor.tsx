import ExternalIcon from '@cdc/core/assets/external-link.svg'
import isDomainExternal from '@cdc/core/helpers/isDomainExternal'

// Optionally wrap cell with anchor if config defines a navigation url
const CellAnchor = ({
  markup,
  row,
  columns,
  navigationHandler,
  mapZoomHandler,
  linksEnabled = true,
  navigationTarget = '_blank'
}) => {
  if (linksEnabled && columns.navigate && row[columns.navigate.name]) {
    return (
      <span
        onClick={() => navigationHandler(navigationTarget, row[columns.navigate.name])}
        className='table-link'
        title={
          navigationTarget === '_blank'
            ? 'Click for more information (Opens in a new window)'
            : 'Click for more information'
        }
        role='link'
        tabIndex={0}
        onKeyDown={e => {
          if (e.key === 'Enter' || e.keyCode === 13) {
            navigationHandler(navigationTarget, row[columns.navigate.name])
          }
        }}
      >
        {markup}
        {isDomainExternal(row[columns.navigate.name]) && <ExternalIcon className='inline-icon' />}
      </span>
    )
  } else if (mapZoomHandler) {
    return (
      <span
        onClick={mapZoomHandler}
        className='table-link'
        title='Click to view on map'
        role='link'
        tabIndex={0}
        onKeyDown={e => {
          if (e.key === 'Enter' || e.keyCode === 13) {
            mapZoomHandler()
          }
        }}
      >
        {markup}
      </span>
    )
  }

  return <>{markup}</>
}

export default CellAnchor
