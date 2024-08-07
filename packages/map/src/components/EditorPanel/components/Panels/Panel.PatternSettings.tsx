import { useContext } from 'react'
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemPanel, AccordionItemButton } from 'react-accessible-accordion'
import ConfigContext from '../../../../context'
import { type MapContext } from '../../../../types/MapContext'
import Button from '@cdc/core/components/elements/Button'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import Icon from '@cdc/core/components/ui/Icon'
import './Panel.PatternSettings-style.css'
import Alert from '@cdc/core/components/Alert'

type PanelProps = {
  name: string
}

const PatternSettings = ({ name }: PanelProps) => {
  const { state, setState } = useContext<MapContext>(ConfigContext)
  const defaultPattern = 'circles'
  const patternTypes = ['circles', 'waves', 'lines']

  const {
    map: { patterns },
    data
  } = state

  /** Updates the map config with a new pattern item */
  const handleAddGeoPattern = () => {
    let patterns = [...state.map.patterns]
    patterns.push({ dataKey: '', pattern: defaultPattern })
    setState({
      ...state,
      map: {
        ...state.map,
        patterns
      }
    })
  }

  /** Updates the map pattern at a given index */
  const handleUpdateGeoPattern = (value: string, index: number, keyToUpdate: 'dataKey' | 'pattern' | 'dataValue' | 'size' | 'label' | 'color') => {
    const updatedPatterns = [...state.map.patterns]
    updatedPatterns[index] = { ...updatedPatterns[index], [keyToUpdate]: value }

    setState({
      ...state,
      map: {
        ...state.map,
        patterns: updatedPatterns
      }
    })
  }

  const handleRemovePattern = index => {
    const updatedPatterns = state.map.patterns.filter((pattern, i) => i !== index)

    setState({
      ...state,
      map: {
        ...state.map,
        patterns: updatedPatterns
      }
    })
  }

  const checkPatternContrasts = () => {
    return state.map.patterns.every(pattern => pattern.contrastCheck !== false)
  }

  return (
    <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemButton>{name}</AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <Alert type={checkPatternContrasts() ? 'success' : 'danger'} message='Pattern colors must comply with <br /> <a href="https://www.w3.org/TR/WCAG21/">WCAG 2.1</a> 3:1 contrast ratio.' />
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
                    <AccordionItemButton>{pattern.dataKey ? `${pattern.dataKey}: ${pattern.dataValue ?? 'No Value'}` : 'Select Column'}</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <>
                      {pattern.contrastCheck ?? true ? <Alert type='success' message='This pattern passes contrast checks' /> : <Alert type='danger' message='Error: <a href="https://webaim.org/resources/contrastchecker/" target="_blank"> Review Color Contrast</a>' />}{' '}
                      <label htmlFor={`pattern-dataKey--${patternIndex}`}>Data Key:</label>
                      <select id={`pattern-dataKey--${patternIndex}`} value={pattern.dataKey !== '' ? pattern.dataKey : 'Select'} onChange={e => handleUpdateGeoPattern(e.target.value, patternIndex, 'dataKey')}>
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
                        <input type='text' onChange={e => handleUpdateGeoPattern(e.target.value, patternIndex, 'dataValue')} id={`pattern-dataValue--${patternIndex}`} value={pattern.dataValue === '' ? '' : pattern.dataValue} />
                      </label>
                      <label htmlFor={`pattern-label--${patternIndex}`}>
                        Label (optional):
                        <input type='text' onChange={e => handleUpdateGeoPattern(e.target.value, patternIndex, 'label')} id={`pattern-dataValue--${patternIndex}`} value={pattern.label === '' ? '' : pattern.label} />
                      </label>
                      <label htmlFor={`pattern-type--${patternIndex}`}>Pattern Type:</label>
                      <select id={`pattern-type--${patternIndex}`} value={pattern?.pattern} onChange={e => handleUpdateGeoPattern(e.target.value, patternIndex, 'pattern')}>
                        {patternTypes.map((patternName, index) => (
                          <option value={patternName} key={index}>
                            {patternName}
                          </option>
                        ))}
                      </select>
                      <label htmlFor={`pattern-size--${patternIndex}`}>Pattern Size:</label>
                      <select id={`pattern-size--${patternIndex}`} value={pattern?.size} onChange={e => handleUpdateGeoPattern(e.target.value, patternIndex, 'size')}>
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
                              <Icon display='question' style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }} />
                            </Tooltip.Target>
                            <Tooltip.Content>
                              <p>{`If this setting is used, it is the reponsibility of the visualization author to verify the visualization colors meet WCAG 3:1 contrast ratios.`}</p>
                            </Tooltip.Content>
                          </Tooltip>
                          <input type='text' value={pattern.color || ''} id='patternColor' name='patternColor' onChange={e => handleUpdateGeoPattern(e.target.value, patternIndex, 'color')} />
                        </label>
                      </div>
                      <Button onClick={e => handleRemovePattern(patternIndex)} className='btn btn--remove warn'>
                        Remove Pattern
                      </Button>
                    </>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            )
          })}
        <button className='btn full-width' onClick={handleAddGeoPattern}>
          Add Geo Pattern
        </button>
      </AccordionItemPanel>
    </AccordionItem>
  )
}

export default PatternSettings
