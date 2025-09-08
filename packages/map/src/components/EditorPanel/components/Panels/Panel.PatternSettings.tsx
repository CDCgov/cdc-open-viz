import { useContext, useEffect, useState } from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton
} from 'react-accessible-accordion'
import ConfigContext from '../../../../context'
import { useLegendMemoContext } from '../../../../context/LegendMemoContext'
import { type MapContext } from '../../../../types/MapContext'
import Button from '@cdc/core/components/elements/Button'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import Icon from '@cdc/core/components/ui/Icon'
import './Panel.PatternSettings-style.css'
import Alert from '@cdc/core/components/Alert'
import _ from 'lodash'

// topojson helpers for checking color contrasts
import { feature } from 'topojson-client'
import { checkColorContrast, getColorContrast } from '@cdc/core/helpers/cove/accessibility'
import { applyLegendToRow } from '../../../../helpers/applyLegendToRow'
import { PatternSelection } from '../../../../types/MapConfig'

type PanelProps = {
  name: string
}

const PatternSettings = ({ name }: PanelProps) => {
  const { config, setConfig, runtimeData, runtimeLegend } = useContext<MapContext>(ConfigContext)
  const { legendMemo, legendSpecialClassLastMemo } = useLegendMemoContext()
  const defaultPattern = 'circles'
  const patternTypes = ['circles', 'waves', 'lines']

  const {
    map: { patterns },
    data
  } = config

  const [unitedStates, setUnitedStates] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      import(/* webpackChunkName: "us-topo" */ '../../../UsaMap/data/us-topo.json').then(topoJSON => {
        setUnitedStates(feature(topoJSON, topoJSON.objects.states).features)
      })
    }
    fetchData()
  }, [])

  if (!unitedStates) {
    return <></>
  }

  /** Updates the map config with a new pattern item */
  const handleAddGeoPattern = () => {
    const patterns = _.cloneDeep(config.map.patterns)
    patterns.push({ dataKey: '', pattern: defaultPattern, contrastCheck: true })
    setConfig({
      ...config,
      map: {
        ...config.map,
        patterns
      }
    })
  }

  // Checks contrast and logs warning if needed
  const checkAndLogContrast = (fill: string, patternColor: string, geoName: string, dataKey: string): boolean => {
    const contrastCheck = checkColorContrast(fill, patternColor)

    if (!contrastCheck) {
      console.error(
        `COVE: pattern contrast check failed on ${geoName} for ${dataKey} with:
      pattern color: ${patternColor}
      contrast: ${getColorContrast(fill, patternColor)}`
      )
    }

    return contrastCheck
  }

  // Gets legend colors for a geo
  const getGeoLegendColors = (geoKey: string, runtimeData: any) => {
    return geoKey && runtimeData?.[geoKey]
      ? applyLegendToRow(runtimeData[geoKey], config, runtimeLegend, legendMemo, legendSpecialClassLastMemo)
      : null
  }

  // Processes contrast check for a single geo
  const processGeoContrast = (
    geo: any,
    pattern: PatternSelection,
    updatedPatterns: PatternSelection[],
    patternIndex: number,
    color: string
  ) => {
    const geoKey = geo.properties.iso
    const legendColors = getGeoLegendColors(geoKey, runtimeData)
    const currentFill = legendColors?.[0]

    if (!currentFill) return

    const hasMatchingValues = pattern.dataValue === runtimeData[geoKey]?.[pattern.dataKey]

    if (hasMatchingValues) {
      const contrastCheck = checkAndLogContrast(
        currentFill,
        color,
        runtimeData[geoKey]?.[config.columns.geo.name],
        pattern.dataKey
      )
      updatedPatterns[patternIndex].contrastCheck = contrastCheck
    }
  }

  const handlePatternFieldUpdate = (field: string, color: string, patternIndex: number) => {
    const _newConfig = _.cloneDeep(config)
    _newConfig.map.patterns[patternIndex][field] = color
    reviewColorContrast(_newConfig, patternIndex)
    setConfig(_newConfig)
  }

  const handleRemovePattern = index => {
    const _newConfig = _.cloneDeep(config)
    const updatedPatterns = config.map.patterns.filter((pattern, i) => i !== index)
    _newConfig.map.patterns = updatedPatterns
    if (checkPatternContrasts()) {
      _newConfig.runtime.editorErrorMessage = ''
    }
    setConfig(_newConfig)
  }

  const checkPatternContrasts = () => {
    return config.map.patterns.every(pattern => pattern.contrastCheck !== false)
  }

  const reviewColorContrast = (_newConfig, patternIndex) => {
    // Process each geo's contrast
    unitedStates.forEach(geo => {
      processGeoContrast(
        geo,
        _newConfig.map.patterns[patternIndex],
        _newConfig.map.patterns,
        patternIndex,
        _newConfig.map.patterns[patternIndex].color
      )
    })

    // Update error message
    _newConfig.runtime.editorErrorMessage = _newConfig.map.patterns.some(p => p.contrastCheck === false)
      ? 'One or more patterns do not pass the WCAG 2.1 contrast ratio of 3:1.'
      : ''
  }

  return (
    <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemButton>{name}</AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        {patterns.length > 0 && (
          <Alert
            type={checkPatternContrasts() ? 'success' : 'danger'}
            message='Pattern colors must comply with <a href="https://www.w3.org/TR/WCAG21/">WCAG 2.1</a> 3:1 contrast ratio.'
          />
        )}
        <br />

        {patterns &&
          patterns.map((pattern, patternIndex) => {
            const dataValueOptions = [...new Set(data?.map(d => d?.[pattern?.dataKey]))]
            const dataKeyOptions = Object.keys(data[0])
            dataValueOptions.unshift('Select')
            dataKeyOptions.unshift('Select')

            dataValueOptions.sort()
            dataKeyOptions.sort()

            return (
              <Accordion allowZeroExpanded key={`accordion-pattern--${patternIndex}`}>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      {pattern.dataKey ? `${pattern.dataKey}: ${pattern.dataValue ?? 'No Value'}` : 'Select Column'}
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <>
                      {pattern.contrastCheck ?? true ? (
                        <Alert type='success' message='This pattern passes contrast checks' />
                      ) : (
                        <Alert
                          type='danger'
                          message='Error: <a href="https://webaim.org/resources/contrastchecker/" target="_blank"> Review Color Contrast</a>'
                        />
                      )}{' '}
                      <label htmlFor={`pattern-dataKey--${patternIndex}`}>Data Key:</label>
                      <select
                        id={`pattern-dataKey--${patternIndex}`}
                        value={pattern.dataKey !== '' ? pattern.dataKey : 'Select'}
                        onChange={e => handlePatternFieldUpdate('dataKey', e.target.value, patternIndex)}
                      >
                        {/* TODO: sort these? */}
                        {dataKeyOptions.map((d, index) => {
                          return (
                            <option value={d} key={index}>
                              {d}
                            </option>
                          )
                        })}
                      </select>
                      <label htmlFor={`pattern-dataValue--${patternIndex}`}>
                        Data Value:
                        <input
                          type='text'
                          onChange={e => handlePatternFieldUpdate('dataValue', e.target.value, patternIndex)}
                          id={`pattern-dataValue--${patternIndex}`}
                          value={pattern.dataValue === '' ? '' : pattern.dataValue}
                        />
                      </label>
                      <label htmlFor={`pattern-label--${patternIndex}`}>
                        Label (optional):
                        <input
                          type='text'
                          onChange={e => handlePatternFieldUpdate('label', e.target.value, patternIndex)}
                          id={`pattern-dataValue--${patternIndex}`}
                          value={pattern.label === '' ? '' : pattern.label}
                        />
                      </label>
                      <label htmlFor={`pattern-type--${patternIndex}`}>Pattern Type:</label>
                      <select
                        id={`pattern-type--${patternIndex}`}
                        value={pattern?.pattern}
                        onChange={e => handlePatternFieldUpdate('pattern', e.target.value, patternIndex)}
                      >
                        {patternTypes.map((patternName, index) => (
                          <option value={patternName} key={index}>
                            {patternName}
                          </option>
                        ))}
                      </select>
                      <label htmlFor={`pattern-size--${patternIndex}`}>Pattern Size:</label>
                      <select
                        id={`pattern-size--${patternIndex}`}
                        value={pattern?.size}
                        onChange={e => handlePatternFieldUpdate('size', e.target.value, patternIndex)}
                      >
                        {['small', 'medium', 'large'].map((size, index) => (
                          <option value={size} key={index}>
                            {size}
                          </option>
                        ))}
                      </select>
                      <div className='pattern-input__color'>
                        <label htmlFor='patternColor'>
                          Pattern Color
                          <Tooltip style={{ textTransform: 'none' }}>
                            <Tooltip.Target>
                              <Icon
                                display='question'
                                style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }}
                              />
                            </Tooltip.Target>
                            <Tooltip.Content>
                              <p>{`If this setting is used, it is the reponsibility of the visualization author to verify the visualization colors meet WCAG 3:1 contrast ratios.`}</p>
                            </Tooltip.Content>
                          </Tooltip>
                          <input
                            type='text'
                            value={pattern.color || ''}
                            id='patternColor'
                            name='patternColor'
                            onChange={e => handlePatternFieldUpdate('color', e.target.value, patternIndex)}
                          />
                        </label>
                      </div>
                      <Button onClick={e => handleRemovePattern(patternIndex)} className='btn btn-danger'>
                        Remove Pattern
                      </Button>
                    </>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            )
          })}
        <button className='btn btn-primary full-width mt-2' onClick={handleAddGeoPattern}>
          Add Geo Pattern
        </button>
      </AccordionItemPanel>
    </AccordionItem>
  )
}

export default PatternSettings
