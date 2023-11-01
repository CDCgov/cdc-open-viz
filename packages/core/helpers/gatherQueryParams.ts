export const gatherQueryParams = (params: {key: string, value: string}[]) => {
    return params.map(({key, value}, i) => {
        const leadingCharacter = i === 0 ? '?' : '&'
        return leadingCharacter + key + '=' + value
      })
      .join('')
  }