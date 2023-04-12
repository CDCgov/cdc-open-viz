import React, { useState, useEffect } from 'react'
import Button from '@cdc/core/components/elements/Button'

// Third Party
import PropTypes from 'prop-types'

const useFilters = props => {
  const [showApplyButton, setShowApplyButton] = useState(false)
  const { config, setConfig, filteredData, setFilteredData, excludedData, filterData } = props
  const { filterStyle } = config

  // Editor Panel > Filters > Filter Behavior
  useEffect(() => {
    if (filterStyle === 'dropdown') setShowApplyButton(false)
    if (filterStyle === 'button') setShowApplyButton(true)
  }, [filterStyle])

  const sortAsc = (a, b) => {
    return a.toString().localeCompare(b.toString(), 'en', { numeric: true })
  }

  const sortDesc = (a, b) => {
    return b.toString().localeCompare(a.toString(), 'en', { numeric: true })
  }

  const announceChange = text => {}

  const changeFilterActive = (index, value) => {
    let newFilters = config.type === 'map' ? [...filteredData] : [...config.filters]
    let filterStyle = newFilters[index].filterStyle
    newFilters[index].active = value

    console.log('newFilters', newFilters)

    // If this is a button filter type show the button.
    if (config.filterBehavior === 'Apply Button') {
      setShowApplyButton(true)
    }

    // If we're not using the apply button we can set the filters right away.
    if (filterStyle !== 'button') {
      setConfig({
        ...config,
        filters: newFilters
      })
    }

    // Used for setting active filter, fromHash breaks the filteredData functionality.
    if (config.type === 'map' && config.filterBehavior !== 'Apply Button') {
      delete newFilters.fromHash
      setFilteredData(newFilters)
    }

    // If we're on a chart and not using the apply button
    if (config.type === 'chart' && config.filterBehavior !== 'Apply Button') {
      setFilteredData(filterData(newFilters, excludedData))
    }
  }

  const handleApplyButton = newFilters => {
    setConfig({ ...config, filters: newFilters })

    if (config.type === 'map') {
      setFilteredData(newFilters, excludedData)
    }

    if (config.type === 'chart') {
      setFilteredData(filterData(newFilters, excludedData))
    }

    setShowApplyButton(false)
  }

  const handleReset = e => {
    let newFilters = config.filters
    e.preventDefault()

    // reset to first item in values array.
    newFilters.map(filter => {
      filter.active = filter.values[0]
      return null
    })

    if (config.type === 'map') {
      setFilteredData(newFilters, excludedData)
    } else {
      setFilteredData(filterData(newFilters, excludedData))
    }

    setConfig({ ...config, filters: newFilters })
  }

  const filterConstants = {
    buttonText: 'Apply Filters',
    resetText: 'Reset All',
    introText: `Using the filters below, make a selection to filter the visualization(s)`,
    applyText: 'Placeholder text describing that apply button is needed.'
  }

  // prettier-ignore
  return {
    handleApplyButton,
    changeFilterActive,
    announceChange,
    sortAsc,
    sortDesc,
    showApplyButton,
    handleReset,
    filterConstants,
  }
}

const Filters = props => {
  const { config, filteredData } = props

  // prettier-ignore
  const {
    handleApplyButton,
    changeFilterActive,
    announceChange,
    sortAsc,
    sortDesc,
    showApplyButton,
    handleReset,
    filterConstants,
  } = useFilters(props)

  const { filters } = config

  const Filters = props => props.children

  const filterSectionClassList = ['filters-section', config.type === 'map' ? config.general.headerColor : config.theme]

  // Exterior Section Wrapper
  // todo: move styles to scss
  Filters.Section = props => (
    <section className={filterSectionClassList.join(' ')} style={{ display: 'block' }}>
      <p style={{ display: 'block', width: '100%' }}>{filterConstants.introText}</p>
      {config.filterBehavior === 'Apply Button' && <p>{filterConstants.applyText}</p>}
      <div className='filters-section__wrapper' style={{ flexWrap: 'wrap', display: 'flex', gap: '7px 15px', marginTop: '15px', marginBottom: '15px' }}>
        {props.children}
      </div>
    </section>
  )

  // Apply/Reset Buttons
  Filters.Buttons = props => {
    if (config.filterBehavior !== 'Apply Button') return
    return (
      <div className='filter-section__buttons' style={{ width: '100%' }}>
        <Button onClick={() => handleApplyButton(filters)} disabled={!showApplyButton} style={{ marginRight: '10px' }} className={config.theme}>
          {filterConstants.buttonText}
        </Button>
        <a href='#!' role='button' onClick={handleReset}>
          {filterConstants.resetText}
        </a>
      </div>
    )
  }

  // Each Filter Dropdown
  Filters.Group = () => {
    if (config.filters || filteredData) {
      // Here charts is using config.filters where maps is using a runtime value
      let filtersToLoop = config.type === 'map' ? filteredData : config.filters

      // button and dropdown style filters.
      return filtersToLoop.map((singleFilter, outerIndex) => {
        const values = []
        const pillValues = []
        const tabValues = []
        if (!singleFilter.order || singleFilter.order === '') {
          singleFilter.order = 'asc'
        }

        if (singleFilter.order === 'desc') {
          singleFilter.values = singleFilter.values.sort(sortDesc)
        }

        if (singleFilter.order === 'asc') {
          singleFilter.values = singleFilter.values.sort(sortAsc)
        }

        singleFilter.values.forEach((filterOption, index) => {
          const pillClassList = ['pill', singleFilter.active === filterOption ? 'pill--active' : null, config.theme && config.theme]
          const tabClassList = ['tab', singleFilter.active === filterOption && 'tab--active', config.theme && config.theme]

          pillValues.push(
            <div className='pill__wrapper'>
              <button className={pillClassList.join(' ')} onClick={e => changeFilterActive(outerIndex, filterOption)} name={singleFilter.label}>
                {filterOption}
              </button>
            </div>
          )

          values.push(
            <option key={index} value={filterOption}>
              {filterOption}
            </option>
          )

          tabValues.push(
            <button className={tabClassList.join(' ')} onClick={e => changeFilterActive(outerIndex, filterOption)}>
              {filterOption}
            </button>
          )
        })

        return (
          <div className={`single-filters single-filters--${singleFilter.filterStyle}`} key={outerIndex}>
            <>
              {singleFilter.label && <label htmlFor={singleFilter.label}>{singleFilter.label}</label>}
              {singleFilter.filterStyle === 'tab' && tabValues}
              {singleFilter.filterStyle === 'pill' && pillValues}
              {singleFilter.filterStyle === 'dropdown' && (
                <select
                  id={`filter-${outerIndex}`}
                  name={singleFilter.label}
                  className='filter-select'
                  data-index='0'
                  value={singleFilter.active}
                  onChange={e => {
                    changeFilterActive(outerIndex, e.target.value)
                    announceChange(`Filter ${singleFilter.label} value has been changed to ${e.target.value}, please reference the data table to see updated values.`)
                  }}
                >
                  {values}
                </select>
              )}
            </>
          </div>
        )
      })
    }
  }

  // if (config.filters.length === 0 || props.filteredData.length === 0) return
  return (
    <Filters>
      <Filters.Section>
        <Filters.Group />
        <Filters.Buttons />
      </Filters.Section>
    </Filters>
  )
}

Filters.propTypes = {
  // runtimeFilters in place
  filteredData: PropTypes.array,
  // function for updating the runtime filters
  setFilteredData: PropTypes.func,
  // the full apps config
  config: PropTypes.object,
  // updating function for setting fitlerBehavior
  setConfig: PropTypes.func,
  // exclusions
  excludedData: PropTypes.array,
  // function for filtering the data
  filterData: PropTypes.func
}

export default Filters
