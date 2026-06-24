import React from 'react'
import MultiSelect from '@cdc/core/components/MultiSelect'
import ComboBox from '@cdc/core/components/ComboBox'
import { SharedFilter } from '../../types/SharedFilter'
import { APIFilterDropdowns, DropdownOptions } from './DashboardFiltersWrapper'
import { FILTER_STYLE } from '../../types/FilterStyles'
import { NestedOptions, ValueTextPair } from '@cdc/core/components/NestedDropdown/nestedDropdownHelpers'
import NestedDropdown from '@cdc/core/components/NestedDropdown'
import { getNestedOptions } from '@cdc/core/components/Filters/helpers/getNestedOptions'
import { MouseEventHandler } from 'react'
import Loader from '@cdc/core/components/Loader'
import Button from '@cdc/core/components/elements/Button'
import _ from 'lodash'
import { getDropdownStyles } from '@cdc/core/components/Filters/components/Dropdown'
import Tabs from '@cdc/core/components/Filters/components/Tabs'
import FilterNote from '@cdc/core/components/Filters/components/FilterNote'
import Title from '@cdc/core/components/ui/Title'
import parse from 'html-react-parser'
import './dashboardfilter.styles.css'
import { isVisibleDashboardFilter } from '../../helpers/filterVisibility'

type DashboardFilterProps = {
  show: number[]
  filters: SharedFilter[]
  apiFilterDropdowns: APIFilterDropdowns
  handleOnChange: (index: number, value: string | string[]) => void
  showSubmit: boolean
  filterSectionTitle?: string
  filterIntro?: string
  applyFilters: MouseEventHandler<HTMLButtonElement>
  applyFiltersButtonText?: string
  handleReset?: MouseEventHandler<HTMLButtonElement>
}

const DashboardFilters: React.FC<DashboardFilterProps> = ({
  show,
  filters: sharedFilters,
  apiFilterDropdowns,
  handleOnChange,
  showSubmit,
  filterSectionTitle,
  filterIntro,
  applyFilters,
  applyFiltersButtonText,
  handleReset
}) => {
  const nullVal = (filter: SharedFilter) => {
    const val = filter.queuedActive || filter.active
    return val === null || val === undefined || val === ''
  }

  const updateField = (_section, _subsection, fieldName, value) => {
    handleOnChange(fieldName, value) // fieldName is the sharedFilterIndex
  }

  const stripDuplicateLabelIncrement = (label: string): string => {
    // converts 'Label (1)' to 'Label'
    return label.replace(/\s\(\d+\)$/, '')
  }

  const getNestedDropdownOptions = (options?: DropdownOptions): NestedOptions => {
    if (!options) return []
    const getValueTextTuple = (value: string, text?: string): ValueTextPair => (text ? [value, text] : [value])
    return options.map(({ value, text, subOptions }) => [
      getValueTextTuple(value, text),
      (subOptions || []).map(({ value, text }) => getValueTextTuple(value, text))
    ])
  }

  const visibleFilterIndexes = show.filter(filterIndex => isVisibleDashboardFilter(sharedFilters[filterIndex]))
  const formClasses = [
    'dashboard-filters__form',
    'filters-section__wrapper',
    visibleFilterIndexes.length > 1 ? 'filters-section__wrapper--multiple' : 'filters-section__wrapper--single'
  ]

  return (
    <div className='w-100'>
      {filterSectionTitle?.trim() && (
        <div className='dashboard-filters__section-title'>
          <Title title={filterSectionTitle} titleStyle='small' />
        </div>
      )}
      {filterIntro && <p className='filters-section__intro-text cove-prose mb-3 w-100'>{parse(filterIntro)}</p>}
      <form className={formClasses.join(' ')}>
        {show.map(filterIndex => {
          const filter = sharedFilters[filterIndex]

          if (!isVisibleDashboardFilter(filter))
            return <React.Fragment key={`${filter?.key || 'missing'}-filtersection-${filterIndex}-option`} />

          const label = stripDuplicateLabelIncrement(filter.key || '')
          const values: JSX.Element[] = []

          const _key = filter.apiFilter?.apiEndpoint
          const loading = apiFilterDropdowns[_key] === null

          const multiValues: { value; label }[] = []
          const nestedOptions: NestedOptions = getNestedOptions({
            orderedValues: filter.orderedValues,
            values: filter.values,
            subGrouping: filter.subGrouping
          })

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
            const orderedFilterValues = filter.orderedValues || filter.values
            orderedFilterValues?.forEach((filterOption, index) => {
              const labeledOpt = filter.labels && filter.labels[filterOption]
              const resetLabelHasMatch = (filterOption || labeledOpt) === filter.resetLabel

              if (!resetLabelHasMatch) {
                values.push(
                  <option key={`${filter.key}-option-${index}`} value={filterOption}>
                    {labeledOpt || filterOption}
                  </option>
                )
              } else {
                // add label to the front of list if it matches with reset label
                values.unshift(
                  <option key={`${filter.key}-option-${index}`} value={filterOption}>
                    {labeledOpt || filterOption}
                  </option>
                )
              }

              multiValues.push({ value: filterOption, label: labeledOpt || filterOption })
            })
          }

          const isDisabled = !values.length
          // push reset label only if it does not includes in filter values options
          if (filter.resetLabel && !filter.values.includes(filter.resetLabel) && !_key) {
            values.unshift(
              <option key={`${filter.resetLabel}-option`} value={filter.resetLabel}>
                {filter.resetLabel}
              </option>
            )
          }

          const isTabSimple = filter.filterStyle === FILTER_STYLE.tabSimple
          const dropdownStyles = getDropdownStyles(Boolean(filter.note?.trim()))
          const formGroupClass = [
            'dashboard-filters__field',
            'form-group',
            loading ? 'loading-filter' : '',
            isTabSimple ? 'w-100' : ''
          ]
            .filter(Boolean)
            .join(' ')
          return (
            <div className={formGroupClass} key={`${filter.key}-filtersection-${filterIndex}`}>
              {label && (
                <label className='font-weight-bold mb-2' htmlFor={`filter-${filterIndex}`}>
                  {label}
                </label>
              )}
              <FilterNote note={filter.note} hasLabel={Boolean(label?.trim())} />
              {filter.filterStyle === FILTER_STYLE.tabSimple ? (
                <Tabs
                  filter={filter}
                  index={filterIndex}
                  changeFilterActive={(index, value) => handleOnChange(index, value)}
                  loading={loading}
                />
              ) : filter.filterStyle === FILTER_STYLE.multiSelect ? (
                <MultiSelect
                  label={label}
                  options={multiValues}
                  fieldName={filterIndex}
                  updateField={updateField}
                  selected={filter.active as string[]}
                  limit={filter.selectLimit || 5}
                  loading={loading}
                  placeholder={filter.resetLabel || '- Select -'}
                />
              ) : filter.filterStyle === FILTER_STYLE.nestedDropdown ? (
                <NestedDropdown
                  activeGroup={(filter.queuedActive?.[0] || filter.active) as string}
                  activeSubGroup={(filter.queuedActive?.[1] || filter.subGrouping?.active) as string}
                  displaySubgroupingOnly={filter.displaySubgroupingOnly}
                  filterIndex={filterIndex}
                  options={_key ? getNestedDropdownOptions(apiFilterDropdowns[_key]) : nestedOptions}
                  listLabel={label}
                  handleSelectedItems={value => updateField(null, null, filterIndex, value)}
                  loading={loading}
                  placeholder={filter.resetLabel || '- Select -'}
                />
              ) : filter.filterStyle === FILTER_STYLE.combobox ? (
                <ComboBox
                  options={multiValues}
                  fieldName={filterIndex}
                  updateField={updateField}
                  selected={(filter.queuedActive || filter.active) as string}
                  label={label}
                  loading={loading}
                  placeholder={filter.resetLabel || '- Select -'}
                />
              ) : (
                <>
                  <select
                    id={`filter-${filterIndex}`}
                    className={`cove-form-select ${dropdownStyles}`}
                    data-index='0'
                    value={loading ? 'Loading...' : filter.queuedActive || filter.active}
                    onChange={val => {
                      handleOnChange(filterIndex, val.target.value)
                    }}
                    disabled={loading || isDisabled}
                  >
                    {loading && <option value='Loading...'>Loading...</option>}
                    {/* For API filters, show placeholder when no value is selected */}
                    {_key && nullVal(filter) && (
                      <option key={`reset-label`} value=''>
                        {filter.resetLabel || '- Select One -'}
                      </option>
                    )}
                    {/* For non-API filters or when no value is selected, show empty option */}
                    {!_key && nullVal(filter) && (
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
          <div className='dashboard-filters__actions'>
            <Button
              variant='primary'
              className='mb-1 me-2'
              onClick={applyFilters}
              disabled={visibleFilterIndexes.some(filterIndex => {
                const emptyFilterValues = [undefined, '', '- Select -']
                return (
                  emptyFilterValues.includes(sharedFilters[filterIndex]?.queuedActive) &&
                  emptyFilterValues.includes(sharedFilters[filterIndex]?.active)
                )
              })}
            >
              {applyFiltersButtonText || 'GO!'}
            </Button>
            {handleReset && (
              <Button variant='link' className='mb-1' onClick={handleReset}>
                Clear Filters
              </Button>
            )}
          </div>
        )}
      </form>
    </div>
  )
}

export default DashboardFilters
