import { getApiFilterKey } from '../helpers/getApiFilterKey'
import { SharedFilter } from '../types/SharedFilter'

export type DropdownOptions = Record<'value' | 'text', string>[]

export type APIFilterDropdowns = {
  // null means still loading
  [filtername: string]: null | DropdownOptions
}

const Filters: React.FC<{ hide?: number[]; filters: SharedFilter[]; apiFilterDropdowns: APIFilterDropdowns; handleOnChange: Function }> = ({ hide, filters, apiFilterDropdowns, handleOnChange }) => {
  return (
    <>
      {filters.map((singleFilter, filterIndex) => {
        if ((singleFilter.type !== 'urlfilter' && !singleFilter.showDropdown) || (hide && hide.indexOf(filterIndex) !== -1)) return <></>
        const values: JSX.Element[] = []
        if (singleFilter.resetLabel) {
          values.push(
            <option key={`${singleFilter.resetLabel}-option`} value={singleFilter.resetLabel}>
              {singleFilter.resetLabel}
            </option>
          )
        }
        const _key = singleFilter.apiFilter ? getApiFilterKey(singleFilter.apiFilter) : undefined
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
