import React from 'react'
import MultiSelect from '@cdc/core/components/MultiSelect'
import { SharedFilter } from '../../types/SharedFilter'
import { APIFilterDropdowns, DropdownOptions } from './DashboardFiltersWrapper'
import NestedDropdown from '../../../../core/components/NestedDropdown/NestedDropdown'
import { FILTER_STYLE } from '../../types/FilterStyles'
import { NestedOptions, ValueTextPair } from '@cdc/core/components/NestedDropdown/nestedDropdownHelpers'

type DashboardFilterProps = {
  show: number[]
  filters: SharedFilter[]
  apiFilterDropdowns: APIFilterDropdowns
  handleOnChange: (index: number, value: string | string[]) => void
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
    <>
      {sharedFilters.map((filter, filterIndex) => {
        const urlFilterType = filter.type === 'urlfilter'

        if (
          (!urlFilterType && !filter.showDropdown && filter.filterStyle !== FILTER_STYLE.nestedDropdown) ||
          (show && !show.includes(filterIndex))
        )
          return <React.Fragment key={`${filter.key}-filtersection-${filterIndex}-option`} />
        const values: JSX.Element[] = []

        if (filter.resetLabel) {
          values.push(
            <option key={`${filter.resetLabel}-option`} value={filter.resetLabel}>
              {filter.resetLabel}
            </option>
          )
        }

        const _key = filter.apiFilter?.apiEndpoint

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

        return filter.filterStyle === FILTER_STYLE.multiSelect ? (
          <MultiSelect
            key={`${filter.key}-filtersection-${filterIndex}`}
            label={filter.key}
            options={multiValues}
            fieldName={filterIndex}
            updateField={updateField}
            selected={filter.active as string[]}
            limit={filter.selectLimit || 5}
          />
        ) : filter.filterStyle === FILTER_STYLE.nestedDropdown ? (
          <NestedDropdown
            key={`${filter.key}-filtersection-${filterIndex}`}
            activeGroup={filter.active as string}
            activeSubGroup={filter.subGrouping?.active}
            options={getNestedDropdownOptions(apiFilterDropdowns[_key])}
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
