export const sortByOrderedValues = (values: any[], orderedValues: any[]): void => {
  if(orderedValues){
    values.sort((a,b) => {
      const indexOfA = orderedValues.indexOf(a)
      const indexOfB = orderedValues.indexOf(b)
      if(indexOfA === indexOfB) return 0
      if(indexOfA === -1) return 1
      if(indexOfB === -1) return -1
      return (indexOfA < indexOfB ? -1 : 1)
    })
  }
}
