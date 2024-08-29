import MultiSelect from '@cdc/core/components/MultiSelect'
import { SharedFilter } from '../../types/SharedFilter'
import { APIFilterDropdowns } from './DashboardFiltersWrapper'
import { sortByOrderedValues } from '@cdc/core/helpers/sortByOrderedValues'

type DashboardFilterProps = {
  show: number[]
  filters: SharedFilter[]
  apiFilterDropdowns: APIFilterDropdowns
  handleOnChange: Function
}

const DashboardFilters: React.FC<DashboardFilterProps> = ({
  show,
  filters: sharedFilters,
  apiFilterDropdowns,
  handleOnChange
}) => {
  const nullVal = (filter: SharedFilter) => {
    const val = filter.queuedActive || filter.active
    return val === null || val === undefined || val === ''
  }

  const updateField = (_section, _subsection, fieldName, value) => {
    handleOnChange(fieldName, value)
  }

  return (
    <>
      {sharedFilters.map((filter, filterIndex) => {
        if (filter.showDropdown === false || (show && !show.includes(filterIndex))) return <></>
        const values: JSX.Element[] = []
        const multiValues = []
        if (filter.resetLabel) {
          values.push(
            <option key={`${filter.resetLabel}-option`} value={filter.resetLabel}>
              {filter.resetLabel}
            </option>
          )
        }
        const _key = filter.apiFilter?.apiEndpoint
        if (_key && apiFilterDropdowns[_key]) {
          // URL Filter
          apiFilterDropdowns[_key].forEach(({ text, value }, index) => {
            values.push(
              <option key={`${value}-option-${index}`} value={value}>
                {text}
              </option>
            )
            multiValues.push({ value, label: text })
          })
        } else {
          // Data Filter
          const orderedValues = filter.values || []
          sortByOrderedValues(orderedValues, filter)
          orderedValues.forEach((filterOption, index) => {
            const labeledOpt = filter.labels && filter.labels[filterOption]
            values.push(
              <option key={`${filter.key}-option-${index}`} value={filterOption}>
                {labeledOpt || filterOption}
              </option>
            )
            multiValues.push({ value: filterOption, label: labeledOpt || filterOption })
          })
        }

        return filter.multiSelect ? (
          <MultiSelect
            key={`${filter.key}-filtersection-${filterIndex}`}
            label={filter.key}
            options={multiValues}
            fieldName={filterIndex}
            updateField={updateField}
            selected={filter.active as string[]}
            limit={filter.selectLimit || 5}
          />
        ) : (
          <div className='cove-dashboard-filters' key={`${filter.key}-filtersection-${filterIndex}`}>
            <section className='dashboard-filters-section'>
              <label htmlFor={`filter-${filterIndex}`}>{filter.key}</label>
              <select
                id={`filter-${filterIndex}`}
                className='filter-select'
                data-index='0'
                value={filter.queuedActive || filter.active}
                onChange={val => {
                  handleOnChange(filterIndex, val.target.value)
                }}
              >
                {nullVal(filter) && !filter.resetLabel && (
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

export default DashboardFilters
