import MultiSelect from '@cdc/core/components/MultiSelect'
import { SharedFilter } from '../../types/SharedFilter'
import { APIFilterDropdowns } from './DashboardFiltersWrapper'
import NestedDropdown from '../../../../core/components/NestedDropdown/NestedDropdown'
import { FILTER_STYLE } from '../../types/FilterStyles'

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
        const urlFilterType = filter.type === 'urlfilter'

        if (
          (!urlFilterType && !filter.showDropdown && filter.filterStyle !== FILTER_STYLE.nestedDropdown) ||
          (show && !show.includes(filterIndex))
        )
          return <></>
        const values: JSX.Element[] = []

        type FilterValues = { value: string; label: string | number; subGroupValues? }[]
        const filterValues: {
          values: FilterValues
          subGroupValues?: FilterValues
        } = { values: [] }

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
          if (filter.filterStyle !== FILTER_STYLE.nestedDropdown) {
            apiFilterDropdowns[_key].forEach(({ text, value }, index) => {
              values.push(
                <option key={`${value}-option-${index}`} value={value}>
                  {text}
                </option>
              )
              filterValues.values.push({ value, label: text })
            })
          } else {
            filterValues.values = Object.keys(apiFilterDropdowns[_key]).map(key => {
              return apiFilterDropdowns[_key][key]
            })
          }
        } else {
          // Data Filter
          filter.values?.forEach((filterOption, index) => {
            const labeledOpt = filter.labels && filter.labels[filterOption]
            values.push(
              <option key={`${filter.key}-option-${index}`} value={filterOption}>
                {labeledOpt || filterOption}
              </option>
            )
            filterValues.values.push({ value: filterOption, label: labeledOpt || filterOption })
          })
        }

        return filter.filterStyle === FILTER_STYLE.multiSelect ? (
          <MultiSelect
            key={`${filter.key}-filtersection-${filterIndex}`}
            label={filter.key}
            options={filterValues.values}
            fieldName={filterIndex}
            updateField={updateField}
            selected={filter.active as string[]}
            limit={filter.selectLimit || 5}
          />
        ) : filter.filterStyle === FILTER_STYLE.nestedDropdown ? (
          <NestedDropdown
            key={`${filter.key}-filtersection-${filterIndex}`}
            currentFilter={
              urlFilterType
                ? {
                    ...filter,
                    values: filterValues.values,
                    subGrouping: {
                      active: ''
                    }
                  }
                : { ...filter }
            }
            isUrlFilter={urlFilterType}
            listLabel={filter.key}
            handleSelectedItems={value => updateField(null, null, filterIndex, value)}
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
