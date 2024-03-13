import MultiSelect from '@cdc/core/components/MultiSelect'
import { getApiFilterKey } from '../helpers/getApiFilterKey'
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
  const updateField = (_section, _subsection, fieldName, value) => {
    handleOnChange(fieldName, value)
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
            multiValues.push({ value: filterOption, label: labeledOpt || filterOption })
          })
        }

        return (
          <div className='cove-dashboard-filters' key={`${singleFilter.key}-filtersection-${filterIndex}`}>
            <section className='dashboard-filters-section'>
              {!singleFilter.pivot ? (
                <>
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
                </>
              ) : (
                <MultiSelect label={singleFilter.key} options={multiValues} fieldName={filterIndex} updateField={updateField} selected={singleFilter.active as string[]} limit={singleFilter.selectLimit || 5} />
              )}
            </section>
          </div>
        )
      })}
    </>
  )
}

export default Filters
