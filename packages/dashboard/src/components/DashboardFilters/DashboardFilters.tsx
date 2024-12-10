import React from 'react'
import MultiSelect from '@cdc/core/components/MultiSelect'
import { SharedFilter } from '../../types/SharedFilter'
import { APIFilterDropdowns, DropdownOptions } from './DashboardFiltersWrapper'
import { FILTER_STYLE } from '../../types/FilterStyles'
import { NestedOptions, ValueTextPair } from '@cdc/core/components/NestedDropdown/nestedDropdownHelpers'
import NestedDropdown from '@cdc/core/components/NestedDropdown'
import { MouseEventHandler } from 'react'
import Loader from '@cdc/core/components/Loader'

type DashboardFilterProps = {
  show: number[]
  filters: SharedFilter[]
  apiFilterDropdowns: APIFilterDropdowns
  handleOnChange: (index: number, value: string | string[]) => void
  showSubmit: boolean
  applyFilters: MouseEventHandler<HTMLButtonElement>
  applyFiltersButtonText?: string
}

const DashboardFilters: React.FC<DashboardFilterProps> = ({
  show,
  filters: sharedFilters,
  apiFilterDropdowns,
  handleOnChange,
  showSubmit,
  applyFilters,
  applyFiltersButtonText
}) => {
  const nullVal = (filter: SharedFilter) => {
    const val = filter.queuedActive || filter.active
    return val === null || val === undefined || val === ''
  }

  const updateField = (_section, _subsection, fieldName, value) => {
    handleOnChange(fieldName, value) // fieldName is the sharedFilterIndex
  }

  const getNestedDropdownOptions = (options?: DropdownOptions): NestedOptions => {
    if (!options) return []
    const getValueTextTuple = (value: string, text?: string): ValueTextPair => (text ? [value, text] : [value])
    return options.map(({ value, text, subOptions }) => [
      getValueTextTuple(value, text),
      (subOptions || []).map(({ value, text }) => getValueTextTuple(value, text))
    ])
  }

  return (
    <form className='d-flex flex-wrap'>
      {sharedFilters.map((filter, filterIndex) => {
        const urlFilterType = filter.type === 'urlfilter'
        const label = filter.key

        if (
          (!urlFilterType && !filter.showDropdown && filter.filterStyle !== FILTER_STYLE.nestedDropdown) ||
          (show && !show.includes(filterIndex))
        )
          return <React.Fragment key={`${label}-filtersection-${filterIndex}-option`} />
        const values: JSX.Element[] = []

        const _key = filter.apiFilter?.apiEndpoint
        const loading = apiFilterDropdowns[_key] === null

        const multiValues: { value; label }[] = []

        if (_key && apiFilterDropdowns[_key]) {
          // URL Filter
          if (filter.filterStyle !== FILTER_STYLE.nestedDropdown) {
            apiFilterDropdowns[_key].forEach(({ text, value }, index) => {
              values.push(
                <option key={`${value}-option-${index}`} value={value}>
                  {text}
                </option>
              )
              multiValues.push({ value, label: text })
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
            multiValues.push({ value: filterOption, label: labeledOpt || filterOption })
          })
        }

        const isDisabled = !values.length

        if (filter.resetLabel) {
          values.unshift(
            <option key={`${filter.resetLabel}-option`} value={filter.resetLabel}>
              {filter.resetLabel}
            </option>
          )
        }

        const formGroupClass = `form-group mr-3 mb-1${loading ? ' loading-filter' : ''}`

        return (
          <div className={formGroupClass} key={`${label}-filtersection-${filterIndex}`}>
            {label && (
              <label className='font-weight-bold mt-1 mb-0' htmlFor={`filter-${filterIndex}`}>
                {label}
              </label>
            )}
            {filter.filterStyle === FILTER_STYLE.multiSelect ? (
              <MultiSelect
                label={label}
                options={multiValues}
                fieldName={filterIndex}
                updateField={updateField}
                selected={filter.active as string[]}
                limit={filter.selectLimit || 5}
                loading={loading}
              />
            ) : filter.filterStyle === FILTER_STYLE.nestedDropdown ? (
              <NestedDropdown
                activeGroup={filter.active as string}
                activeSubGroup={filter.subGrouping?.active}
                filterIndex={filterIndex}
                options={getNestedDropdownOptions(apiFilterDropdowns[_key])}
                listLabel={label}
                handleSelectedItems={value => updateField(null, null, filterIndex, value)}
                loading={loading}
              />
            ) : (
              <>
                <select
                  id={`filter-${filterIndex}`}
                  className='cove-form-select'
                  data-index='0'
                  value={loading ? 'Loading...' : filter.queuedActive || filter.active}
                  onChange={val => {
                    handleOnChange(filterIndex, val.target.value)
                  }}
                  disabled={loading || isDisabled}
                >
                  {loading && <option value='Loading...'>Loading...</option>}
                  {nullVal(filter) && (
                    <option key={`select`} value=''>
                      {filter.resetLabel || '- Select -'}
                    </option>
                  )}
                  {values}
                </select>
                {loading && <Loader spinnerType={'text-secondary'} />}
              </>
            )}
          </div>
        )
      })}
      {showSubmit && (
        <button className='btn btn-primary mb-1' onClick={applyFilters}>
          {applyFiltersButtonText || 'GO!'}
        </button>
      )}
    </form>
  )
}

export default DashboardFilters
