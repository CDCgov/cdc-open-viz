// export const getFileExtensionx = (path: string): string => {
//   const regex = /(?:\.([^.]+))?$/
//   const outCome: RegExpExecArray | null = regex.exec(path)
//   return outCome ? outCome[1] : ''
// }

export const getFileExtension = (url: string): string => {
  const regexForExtension = /(?:\.([^.]+))$/
  const regexForQueryParam = /[?&]wt=(csv|json)(?:&|$)/ // Regular expression for 'wt' query parameter

  const urlObject = new URL(url, window.location.origin)
  const pathname = urlObject.pathname
  const searchParams = urlObject.search

  // First, try to get the extension from the pathname
  const pathnameMatch = regexForExtension.exec(pathname)
  if (pathnameMatch && pathnameMatch[1]) {
    return pathnameMatch[1]
  }

  // Then, try to get it from the query parameter 'wt'
  const queryParamsMatch = regexForQueryParam.exec(searchParams)
  if (queryParamsMatch && queryParamsMatch[1]) {
    return queryParamsMatch[1]
  }

  return ''
}
