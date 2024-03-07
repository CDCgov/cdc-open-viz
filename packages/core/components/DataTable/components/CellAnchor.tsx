import ExternalIcon from '@cdc/core/assets/external-link.svg'

const internalDomains = [
  'cdc.gov',
  'localhost',
  'facebook.com',
  'twitter.com',
  'linkedin.com',
  'pinterest.com',
  'youtube.com',
  'youtube-nocookie.com',
  'plus.google.com',
  'instagram.com',
  'flickr.com',
  'tumblr.com',
  'cdc.sharepoint.com',
  'vaccines.gov',
  'vacunas.gov'
]

// Optionally wrap cell with anchor if config defines a navigation url
const CellAnchor = ({ markup, row, columns, navigationHandler, mapZoomHandler }) => {

  const hostname = (new URL(row[columns.navigate.name], window.location.origin)).hostname;
  let external = true

  internalDomains.forEach(domain => {
    if(hostname.indexOf(domain) !== -1 && hostname.indexOf(domain) === (hostname.length - domain.length)){
      external = false
    }
  })

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
        {external && <ExternalIcon className='inline-icon' />}
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
          if (e.keyCode === 13) {
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
