import { SharedFilter } from '../types/SharedFilter'

export type DropdownOptions = Record<'value' | 'text', string>[]

export type APIFilterDropdowns = {
  // null means still loading
  [filtername: string]: null | DropdownOptions
}

type FilterProps = {
  hide?: number[]
  filters: SharedFilter[]
  apiFilterDropdowns: APIFilterDropdowns
  handleOnChange: Function
}

const Filters: React.FC<FilterProps> = ({ hide, filters, apiFilterDropdowns, handleOnChange }) => {
  const nullVal = (singleFilter: SharedFilter) => {
    const val = singleFilter.queuedActive || singleFilter.active
    return val === null || val === undefined || val === ''
  }
  return (
    <>
      {filters.map((singleFilter, filterIndex) => {
        if ((singleFilter.type !== 'urlfilter' && !singleFilter.showDropdown) || (hide && hide.indexOf(filterIndex) !== -1)) return <></>
        const values: JSX.Element[] = []
        const multiValues = []
        if (singleFilter.resetLabel) {
          values.push(
            <option key={`${singleFilter.resetLabel}-option`} value={singleFilter.resetLabel}>
              {singleFilter.resetLabel}
            </option>
          )
        }
        const _key = singleFilter.apiFilter?.apiEndpoint
        if (_key && apiFilterDropdowns[_key]) {
          // URL Filter
          apiFilterDropdowns[_key].forEach(({ text, value }, index) => {
            values.push(
              <option key={`${value}-option-${index}`} value={value}>
                {text}
              </option>
            )
          })
        } else {
          // Data Filter
          singleFilter.values?.forEach((filterOption, index) => {
            const labeledOpt = singleFilter.labels && singleFilter.labels[filterOption]
            values.push(
              <option key={`${singleFilter.key}-option-${index}`} value={filterOption}>
                {labeledOpt || filterOption}
              </option>
            )
            multiValues.push({ value: filterOption, label: labeledOpt || filterOption })
          })
        }

        return (
          <div className='cove-dashboard-filters' key={`${singleFilter.key}-filtersection-${filterIndex}`}>
            <section className='dashboard-filters-section'>
              <label htmlFor={`filter-${filterIndex}`}>{singleFilter.key}</label>
              <select
                id={`filter-${filterIndex}`}
                className='filter-select'
                data-index='0'
                value={singleFilter.queuedActive || singleFilter.active}
                onChange={val => {
                  handleOnChange(filterIndex, val.target.value)
                }}
              >
                {nullVal(singleFilter) && !singleFilter.resetLabel && (
                  <option value='' key='select'>
                    {'-Select-'}
                  </option>
                )}
                {values}
              </select>
            </section>
          </div>
        )
      })}
    </>
  )
}

export default Filters