import _ from 'lodash'

export default function methodologyAPI(select: string, where?: [string, string | number]): Object[] {
  const data = [
    {
      year: 1999,
      methodology: 'a',
      state: 'alabama',
      value: '1'
    },
    {
      year: 1999,
      methodology: 'a',
      state: 'alaska',
      value: '2'
    },
    {
      year: 1999,
      methodology: 'a',
      state: 'arizona',
      value: '3'
    },
    {
      year: 2012,
      methodology: 'b',
      state: 'new york',
      value: '5'
    },
    {
      year: 2012,
      methodology: 'b',
      state: 'new jersey',
      value: '1'
    },
    {
      year: 2012,
      methodology: 'b',
      state: 'new mexico',
      value: '2'
    },
    {
      year: 2000,
      methodology: 'a',
      state: 'alabama',
      value: '4'
    },
    {
      year: 2000,
      methodology: 'a',
      state: 'alaska',
      value: '5'
    },
    {
      year: 2000,
      methodology: 'a',
      state: 'arizona',
      value: '6'
    },
    {
      year: 2013,
      methodology: 'b',
      state: 'new york',
      value: '6'
    },
    {
      year: 2013,
      methodology: 'b',
      state: 'new jersey',
      value: '7'
    },
    {
      year: 2013,
      methodology: 'b',
      state: 'new mexico',
      value: '8'
    }
  ]
  const selectStatement = select.split(' ')
  const distinct = selectStatement[0] === 'distinct'
  const selectCol = selectStatement.length === 2 ? selectStatement[1] : selectStatement[0]
  const rows = data
    .filter(row => {
      if (!where) return true
      const [whereCol, whereVal] = where
      return row[whereCol] === whereVal
    })
    .map(row => (selectCol === '*' ? row : { [selectCol]: row[selectCol] }))

  return distinct ? _.uniqBy(rows, selectCol) : rows
}
