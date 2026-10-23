import { useContext, useEffect, useState, type MouseEvent } from 'react'

import AlabamaGraphic from '@cdc/core/assets/icon-map-alabama.svg'
import UsaGraphic from '@cdc/core/assets/icon-map-usa.svg'
import UsaRegionGraphic from '@cdc/core/assets/usa-region-graphic.svg'
import WorldGraphic from '@cdc/core/assets/icon-map-world.svg'
import { CheckBox, Select } from '@cdc/core/components/EditorPanel/Inputs'
import MultiSelect from '@cdc/core/components/MultiSelect'
import Icon from '@cdc/core/components/ui/Icon'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import { cloneConfig } from '@cdc/core/helpers/cloneConfig'
import { updateFieldFactory } from '@cdc/core/helpers/updateFieldFactory'

import countyDefaultConfig from '../../../../../examples/default-county.json'
import usaDefaultConfig from '../../../../../examples/default-usa.json'
import worldDefaultConfig from '../../../../../examples/default-world.json'
import ConfigContext, { MapDispatchContext } from '../../../../context'
import { CONTINENT_OPTIONS, computeAreaPosition } from '../../../../data/continent-bounding-boxes'
import { supportedCountries, supportedStatesFipsCodes } from '../../../../data/supported-geos'
import { addUIDs } from '../../../../helpers/addUIDs'
import { getSupportedCountryOptions } from '../../../../helpers/getCountriesPicked'
import generateRuntimeData from '../../../../helpers/generateRuntimeData'
import type { MapConfig } from '../../../../types/MapConfig'
import type { MapContext } from '../../../../types/MapContext'
import HexSetting from '../HexShapeSettings'
import { TimePlaybackEnableControl } from '../TimePlaybackEditorSection'

type TypeSectionProps = {
  columnNames: string[]
}

type GeoType = MapConfig['general']['geoType']

const stateSelectorOptions = Object.entries(supportedStatesFipsCodes)
  .sort((a, b) => a[0].localeCompare(b[0]))
  .map(([, label]) => ({
    value: label,
    label
  }))

const countrySelectorOptions = getSupportedCountryOptions().map(({ label }) => ({
  value: label,
  label
}))

const TypeSection = ({ columnNames }: TypeSectionProps) => {
  const { config, setConfig, loadConfig, runtimeData } = useContext<MapContext>(ConfigContext)
  const dispatch = useContext(MapDispatchContext)
  const [loadedDefault, setLoadedDefault] = useState(false)
  const updateField = updateFieldFactory(config, setConfig)
  const general = config.general

  useEffect(() => {
    setLoadedDefault(config.defaultData)
  }, [config])

  const columnsOptions = [
    <option value='' key='Select Option'>
      - Select Option -
    </option>,
    ...columnNames.map(columnName => (
      <option value={columnName} key={columnName}>
        {columnName}
      </option>
    ))
  ]

  const handleMapTypeChange = (value: string) => {
    switch (value) {
      case 'us-geocode':
      case 'world-geocode':
        setConfig({
          ...config,
          general: {
            ...config.general,
            type: value
          }
        })
        break
      case 'data':
        setConfig({
          ...config,
          general: {
            ...config.general,
            showSidebar: true,
            type: 'data'
          }
        })
        break
      case 'navigation':
        setConfig({
          ...config,
          general: {
            ...config.general,
            showSidebar: false,
            type: 'navigation'
          },
          tooltips: {
            ...config.tooltips,
            appearanceType: 'hover'
          }
        })
        break
      default:
        console.warn('COVE: Map type not set') // eslint-disable-line
        break
    }
  }

  const handleGeoTypeChange = (value: GeoType) => {
    addUIDs(config, config.columns.geo.name)
    dispatch({
      type: 'SET_POSITION',
      payload: {
        coordinates: value === 'world' ? [0, 30] : [0, 0],
        zoom: 1
      }
    })

    if (loadedDefault && value === 'world') {
      loadConfig(worldDefaultConfig as MapConfig)
      return
    }

    if (loadedDefault && value === 'us') {
      loadConfig(usaDefaultConfig as MapConfig)
      return
    }

    if (loadedDefault && value === 'us-county') {
      loadConfig(countyDefaultConfig as MapConfig)
      return
    }

    switch (value) {
      case 'us':
        setConfig({
          ...config,
          general: {
            ...config.general,
            geoType: 'us',
            type: config.type === 'us-geocode' ? 'data' : config.type
          },
          table: {
            ...config.table,
            forceDisplay: true
          }
        })
        break
      case 'us-region':
      case 'world':
        setConfig({
          ...config,
          general: {
            ...config.general,
            geoType: value
          },
          table: {
            ...config.table,
            forceDisplay: true
          }
        })
        break
      case 'us-county':
      case 'single-state':
        setConfig({
          ...config,
          general: {
            ...config.general,
            geoType: value
          },
          table: {
            ...config.table,
            expanded: false,
            forceDisplay: true
          }
        })
        break
      default:
        break
    }
  }

  const handleGeoTypeButtonClick = (event: MouseEvent<HTMLButtonElement>, value: GeoType) => {
    event.preventDefault()

    const isActiveGeoType =
      value === 'us' ? ['us', 'us-county'].includes(config.general.geoType) : config.general.geoType === value

    if (!isActiveGeoType) handleGeoTypeChange(value)
  }

  const handleStateSelection = (selectedStates: string[]) => {
    const statesPicked = selectedStates.map(state => ({
      fipsCode: Object.keys(supportedStatesFipsCodes).find(key => supportedStatesFipsCodes[key] === state),
      stateName: state
    }))

    setConfig({
      ...config,
      general: {
        ...config.general,
        statesPicked
      }
    })

    const nextRuntimeData = generateRuntimeData(config, [], 0, config.legend.type === 'category')
    dispatch({ type: 'SET_RUNTIME_DATA', payload: nextRuntimeData })
  }

  const handleCountrySelection = (selectedCountries: string[]) => {
    const countriesPicked = selectedCountries.map(countryName => ({
      iso: Object.keys(supportedCountries).find(key => supportedCountries[key][0] === countryName),
      name: countryName
    }))

    setConfig({
      ...config,
      general: {
        ...config.general,
        countriesPicked
      }
    })

    const nextRuntimeData = generateRuntimeData(config, [], 0, config.legend.type === 'category')
    dispatch({ type: 'SET_RUNTIME_DATA', payload: nextRuntimeData })
  }

  return (
    <>
      <fieldset className='geo-buttons-fieldset'>
        <legend className='edit-label column-heading'>Geography</legend>
        <div className='geo-buttons d-grid' style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
          <button
            type='button'
            className={`${general.geoType === 'us' || general.geoType === 'us-county' ? 'active' : ''} full-width`}
            onClick={event => handleGeoTypeButtonClick(event, 'us')}
          >
            <UsaGraphic />
            <span>United States</span>
          </button>
          <button
            type='button'
            className={`${general.geoType === 'us-region' ? 'active' : ''} full-width`}
            onClick={event => handleGeoTypeButtonClick(event, 'us-region')}
          >
            <UsaRegionGraphic />
            <span>U.S. Region</span>
          </button>
          <button
            type='button'
            className={`${general.geoType === 'world' ? 'active' : ''} full-width`}
            onClick={event => handleGeoTypeButtonClick(event, 'world')}
          >
            <WorldGraphic />
            <span>World</span>
          </button>
          <button
            type='button'
            className={`${general.geoType === 'single-state' ? 'active' : ''} full-width`}
            onClick={event => handleGeoTypeButtonClick(event, 'single-state')}
          >
            <AlabamaGraphic />
            <span>U.S. State</span>
          </button>
        </div>
      </fieldset>

      {(general.geoType === 'us' || general.geoType === 'us-county') && (
        <Select
          label='Geography Subtype'
          value={general.geoType}
          options={[
            { value: 'us', label: 'US State-Level' },
            { value: 'us-county', label: 'US County-Level' }
          ]}
          onChange={event => handleGeoTypeChange(event.target.value as GeoType)}
        />
      )}

      {general.geoType === 'us-county' && (
        <>
          <CheckBox
            value={general.showNeighboringStates || false}
            fieldName='showNeighboringStates'
            label="Show Neighboring States' Data"
            updateField={updateField}
            section='general'
          />
          <CheckBox
            value={general.showHSABoundaries || false}
            fieldName='showHSABoundaries'
            label='Show HSA Boundaries'
            updateField={updateField}
            section='general'
            tooltip={
              <Tooltip style={{ textTransform: 'none' }}>
                <Tooltip.Target>
                  <Icon
                    display='question'
                    style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }}
                  />
                </Tooltip.Target>
                <Tooltip.Content>
                  <p>
                    Health Service Areas (HSAs) are a county or cluster of contiguous counties which are relatively
                    self-contained with respect to hospital care. Set HSA description in tooltip under the Columns
                    accordion.
                  </p>
                </Tooltip.Content>
              </Tooltip>
            }
          />
        </>
      )}

      {(general.geoType === 'us-county' || general.geoType === 'single-state') && (
        <Select
          label='County Census Year'
          value={general.countyCensusYear || '2019'}
          options={['2022', '2021', '2020', '2019', '2015', '2014', '2013'].map(value => ({ value, label: value }))}
          onChange={event =>
            setConfig({
              ...config,
              general: { ...config.general, countyCensusYear: event.target.value }
            })
          }
        />
      )}

      {(general.geoType === 'us-county' || general.geoType === 'single-state') && (
        <Select
          label='Filter Controlling County Census Year'
          value={general.filterControlsCountyYear || ''}
          options={[
            { value: '', label: 'None' },
            ...(config.filters
              ? config.filters.map(filter => ({ value: filter.columnName, label: filter.columnName }))
              : [])
          ]}
          onChange={event =>
            setConfig({
              ...config,
              general: { ...config.general, filterControlsCountyYear: event.target.value }
            })
          }
        />
      )}

      {general.geoType === 'single-state' && runtimeData && (
        <Select
          label='Filter Controlling State Picked'
          value={general.filterControlsStatesPicked || ''}
          options={[
            { value: '', label: 'None' },
            ...columnNames.map(columnName => ({ value: columnName, label: columnName }))
          ]}
          onChange={event =>
            setConfig({
              ...config,
              general: { ...config.general, filterControlsStatesPicked: event.target.value }
            })
          }
        />
      )}

      {general.geoType === 'single-state' && (
        <>
          <label>
            <span>States Selector</span>
            <MultiSelect
              selected={general.statesPicked.map(state => state.stateName)}
              options={stateSelectorOptions}
              fieldName='statesPicked'
              updateField={(_section, _subsection, _fieldName, selectedOptions) =>
                handleStateSelection(selectedOptions)
              }
            />
          </label>
          {general.statesPicked && general.statesPicked.length > 0 && (
            <CheckBox
              value={general.hideUnselectedStates !== false}
              fieldName='hideUnselectedStates'
              label='Hide Unselected States'
              updateField={updateField}
              section='general'
            />
          )}
        </>
      )}

      {general.geoType === 'world' && (
        <>
          <label>
            <span>Countries Selector</span>
            <MultiSelect
              selected={(general.countriesPicked || []).map(country => country.name)}
              options={countrySelectorOptions}
              fieldName='countriesPicked'
              updateField={(_section, _subsection, _fieldName, selectedOptions) =>
                handleCountrySelection(selectedOptions)
              }
            />
          </label>
          {general.countriesPicked && general.countriesPicked.length > 0 && (
            <CheckBox
              value={general.hideUnselectedCountries || false}
              fieldName='hideUnselectedCountries'
              label='Hide Unselected Countries'
              updateField={updateField}
              section='general'
            />
          )}
        </>
      )}

      {general.geoType === 'world' && (
        <Select
          label='Zoom Focus'
          value={general.zoomFocusArea || 'world'}
          options={CONTINENT_OPTIONS}
          onChange={event => {
            const areaKey = event.target.value
            const nextConfig = cloneConfig(config)
            nextConfig.general.zoomFocusArea = areaKey
            setConfig(nextConfig)
            dispatch({ type: 'SET_POSITION', payload: computeAreaPosition(areaKey) })
          }}
        />
      )}

      <Select
        label={
          <>
            Map Type
            <Tooltip style={{ textTransform: 'none' }}>
              <Tooltip.Target>
                <Icon display='question' style={{ marginLeft: '0.5rem' }} />
              </Tooltip.Target>
              <Tooltip.Content>
                <p>
                  Select "Data" to create a color-coded data map. To create a navigation-only map, select "Navigation."
                </p>
              </Tooltip.Content>
            </Tooltip>
          </>
        }
        value={general.type}
        options={[
          { value: 'data', label: 'Data' },
          ...(general.geoType === 'us-county' ? [{ value: 'us-geocode', label: 'Geocode' }] : []),
          ...(general.geoType === 'world' ? [{ value: 'world-geocode', label: 'Geocode' }] : []),
          ...(general.geoType !== 'us-county' ? [{ value: 'navigation', label: 'Navigation' }] : [])
        ]}
        onChange={event => handleMapTypeChange(event.target.value)}
      />

      {(general.type === 'navigation' || general.type === 'data') && (
        <Select
          label='Navigation Behavior'
          value={general.navigationTarget}
          options={[
            { value: '_self', label: 'Same Window' },
            { value: '_blank', label: 'New Window' }
          ]}
          onChange={event => {
            const nextConfig = cloneConfig(config)
            nextConfig.general.navigationTarget = event.target.value
            setConfig(nextConfig)
          }}
        />
      )}

      <label>
        <span className='edit-label'>Data Classification Type</span>
        <div>
          <label>
            <input
              type='radio'
              name='equalnumber'
              value='equalnumber'
              checked={['equalnumber', 'equalinterval', 'manual'].includes(config.legend.type)}
              onChange={event => setConfig({ ...config, legend: { ...config.legend, type: event.target.value } })}
            />
            Numeric/Quantitative
          </label>
          <label>
            <input
              type='radio'
              name='category'
              value='category'
              checked={config.legend.type === 'category'}
              onChange={event => setConfig({ ...config, legend: { ...config.legend, type: event.target.value } })}
            />
            Categorical
          </label>
        </div>
      </label>

      {general.geoType === 'us' && general.type !== 'navigation' && (
        <CheckBox
          value={general.displayAsHex}
          section='general'
          subsection={null}
          fieldName='displayAsHex'
          label='Display As Hex Map'
          updateField={updateField}
          className=''
        />
      )}

      <CheckBox
        value={config.hexMap.type === 'shapes'}
        section='hexMap'
        subsection={null}
        fieldName='type'
        label='Display Shapes on Hex Map'
        updateField={updateField}
        onChange={event => {
          setConfig({
            ...config,
            hexMap: {
              ...config.hexMap,
              type: event.target.checked ? 'shapes' : 'standard'
            }
          })
        }}
      />
      <HexSetting.ShapeColumns columnsOptions={columnsOptions} />

      {general.geoType === 'us' && !general.displayAsHex && (
        <CheckBox
          label='Show state labels'
          checked={general.displayStateLabels}
          onChange={() =>
            setConfig({
              ...config,
              general: {
                ...config.general,
                displayStateLabels: !config.general.displayStateLabels
              }
            })
          }
          tooltip={
            <Tooltip style={{ textTransform: 'none' }}>
              <Tooltip.Target>
                <Icon display='question' style={{ marginLeft: '0.5rem' }} />
              </Tooltip.Target>
              <Tooltip.Content>
                <p>Recommended set to display for Section 508 compliance.</p>
              </Tooltip.Content>
            </Tooltip>
          }
        />
      )}

      {['us', 'us-county'].includes(general.geoType) && (
        <CheckBox
          value={general.territoriesAlwaysShow ?? true}
          section='general'
          subsection={null}
          fieldName='territoriesAlwaysShow'
          label='Show Available Territories'
          updateField={() => {
            setConfig({
              ...config,
              general: {
                ...config.general,
                territoriesAlwaysShow: !(general.territoriesAlwaysShow ?? true)
              },
              migrations: {
                ...config.migrations,
                showPuertoRico: false
              }
            })
          }}
        />
      )}

      <TimePlaybackEnableControl config={config} updateField={updateField} />
    </>
  )
}

export default TypeSection
