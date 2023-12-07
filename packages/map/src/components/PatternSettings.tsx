import { useContext } from 'react'
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemPanel, AccordionItemButton } from 'react-accessible-accordion'
import ConfigContext from '../context'
import { type MapContext } from './../types/MapContext'

type PatternSettingProps = {}

const PatternSettings = (props: PatternSettingProps) => {
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
    patterns.push({ geoKey: '', pattern: defaultPattern })
    setState({
      ...state,
      map: {
        ...state.map,
        patterns
      }
    })
  }

  /** Updates the map pattern at a given index */
  const handleUpdateGeoPattern = (value: string, index: number, keyToUpdate: 'geoKey' | 'pattern') => {
    const updatedPatterns = [...state.map.patterns]

    if (keyToUpdate === 'geoKey') {
      updatedPatterns[index] = { ...updatedPatterns[index], geoKey: value }
    }

    if (keyToUpdate === 'pattern') {
      updatedPatterns[index] = { ...updatedPatterns[index], pattern: value }
    }

    setState({
      ...state,
      map: {
        ...state.map,
        patterns: updatedPatterns
      }
    })
  }

  return (
    <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemButton>Geo Pattern Settings</AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        {patterns &&
          patterns.map((pattern, patternIndex) => {
            return (
              <Accordion>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>{pattern.geoKey || 'Select State'}</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <>
                      <label htmlFor={`pattern-geoKey--${patternIndex}`}>Choose Geography:</label>
                      <select id={`pattern-geoKey--${patternIndex}`} value={patterns[patternIndex].geoKey} onChange={e => handleUpdateGeoPattern(e.target.value, patternIndex, 'geoKey')}>
                        {/* TODO: sort these? */}
                        {data &&
                          data.map((d, index) => (
                            <option value={d[state.columns.geo.name]} key={index}>
                              {d[state.columns.geo.name]}
                            </option>
                          ))}
                      </select>

                      <label htmlFor={`pattern-type--${patternIndex}`}>Choose Pattern:</label>
                      <select id={`pattern-type--${patternIndex}`} value={patterns[patternIndex].pattern} onChange={e => handleUpdateGeoPattern(e.target.value, patternIndex, 'pattern')}>
                        {patternTypes.map((patternName, index) => (
                          <option value={patternName} key={index}>
                            {patternName}
                          </option>
                        ))}
                      </select>
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
