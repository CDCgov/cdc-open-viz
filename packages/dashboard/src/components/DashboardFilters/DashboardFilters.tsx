import MultiSelect from '@cdc/core/components/MultiSelect'
import { SharedFilter } from '../../types/SharedFilter'
import { APIFilterDropdowns } from './DashboardFiltersWrapper'
import { sortByOrderedValues } from '@cdc/core/helpers/sortByOrderedValues'
import NestedDropdown from '@cdc/core/components/NestedDropdown'
import { MouseEventHandler } from 'react'

type DashboardFilterProps = {
  show: number[]
  filters: SharedFilter[]
  apiFilterDropdowns: APIFilterDropdowns
  handleOnChange: Function
  showSubmit: boolean
  applyFilters: MouseEventHandler<HTMLButtonElement>
}

const DashboardFilters: React.FC<DashboardFilterProps> = ({
  show,
  filters: sharedFilters,
  apiFilterDropdowns,
  handleOnChange,
  showSubmit,
  applyFilters
}) => {
  const nullVal = (filter: SharedFilter) => {
    const val = filter.queuedActive || filter.active
    return val === null || val === undefined || val === ''
  }

  const updateField = (_section, _subsection, fieldName, value) => {
    handleOnChange(fieldName, value)
  }

  return (
    <form className='d-flex flex-wrap'>
      {sharedFilters.map((filter, filterIndex) => {
        if (
          (filter.type !== 'urlfilter' && filter.showDropdown === false && filter.filterStyle !== 'nested-dropdown') ||
          (show && !show.includes(filterIndex))
        )
          return <></>
        const values: JSX.Element[] = []
        const multiValues = []
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

        return filter.filterStyle === 'multi-select' ? (
          <MultiSelect
            key={`${filter.key}-filtersection-${filterIndex}`}
            label={filter.key}
            options={multiValues}
            fieldName={filterIndex}
            updateField={updateField}
            selected={filter.active as string[]}
            limit={filter.selectLimit || 5}
          />
        ) : filter.filterStyle === 'nested-dropdown' ? (
          <NestedDropdown
            key={`${filter.key}-filtersection-${filterIndex}`}
            currentFilter={filter}
            filterIndex={filterIndex}
            listLabel={filter.key}
            handleSelectedItems={value => updateField(null, null, filterIndex, value)}
          />
        ) : (
          <div className='form-group mr-3' key={`${filter.key}-filtersection-${filterIndex}`}>
            <label className='text-capitalize font-weight-bold' htmlFor={`filter-${filterIndex}`}>
              {filter.key}
            </label>
            <select
              id={`filter-${filterIndex}`}
              className='form-control'
              data-index='0'
              value={filter.queuedActive || filter.active}
              onChange={val => {
                handleOnChange(filterIndex, val.target.value)
              }}
              disabled={values.length === 1 && !nullVal(filter)}
            >
              {nullVal(filter) && (
                <option key={`select`} value=''>
                  {filter.resetLabel || '-Select-'}
                </option>
              )}
              {values}
            </select>
          </div>
        )
      })}
      {showSubmit && (
        <button className='btn btn-primary' onClick={applyFilters}>
          GO!
        </button>
      )}
    </form>
  )
}

export default DashboardFilters
