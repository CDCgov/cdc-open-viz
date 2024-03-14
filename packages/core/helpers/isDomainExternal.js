export default function isDomainExternal(domain) {
  const internalDomains = ['cdc.gov', 'localhost', 'facebook.com', 'twitter.com', 'linkedin.com', 'pinterest.com', 'youtube.com', 'youtube-nocookie.com', 'plus.google.com', 'instagram.com', 'flickr.com', 'tumblr.com', 'cdc.sharepoint.com', 'vaccines.gov', 'vacunas.gov']

  const hostname = new URL(domain, window.location.origin).hostname
  let external = true

  internalDomains.forEach(internalDomain => {
    if (hostname.indexOf(internalDomain) !== -1 && hostname.indexOf(internalDomain) === hostname.length - internalDomain.length) {
      external = false
    }
  })

  return external
}
