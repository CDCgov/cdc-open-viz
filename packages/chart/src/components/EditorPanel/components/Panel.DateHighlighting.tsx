import React, { useState, useEffect } from 'react'
import { AccordionItem, AccordionItemHeading, AccordionItemPanel, AccordionItemButton } from 'react-accessible-accordion'
import { type PanelProps } from './PanelProps'

const days = [
  { day: 'Sunday', abbr: 'S', status: 'inactive' },
  { day: 'Monday', abbr: 'M', status: 'inactive' },
  { day: 'Tuesday', abbr: 'T', status: 'inactive' },
  { day: 'Wednesday', abbr: 'W', status: 'inactive' },
  { day: 'Thursday', abbr: 'T', status: 'inactive' },
  { day: 'Friday', abbr: 'F', status: 'inactive' },
  { day: 'Saturday', abbr: 'S', status: 'inactive' }
]

const DateHighlighting = ({ name }: PanelProps) => {
  const [interval, setInterval] = useState(0)
  const [isPlural, setIsPlural] = useState(false)
  const [recurrance, setRecurrance] = useState('Days')
  const [firstRecurranceUpdate, setFirstRecurranceUpdate] = useState(false)
  const [daySelections, setDaySelections] = useState(days)

  const handleDaySelections = e => {
    const incomingDay = e.target.value
    const prev = [...daySelections]

    const updatedDays = prev.map(day => {
      if (day.day === incomingDay) {
        return { ...day, status: day.status === 'active' ? 'inactive' : 'active' }
      }
      return day
    })

    setDaySelections(updatedDays)
  }

  useEffect(() => {
    if (interval > 7 && !firstRecurranceUpdate) {
      setRecurrance('Weeks')
    }
  }, [interval])

  useEffect(() => {
    if (interval > 1) {
      setIsPlural(true)
    } else {
      setIsPlural(false)
    }
  }, [interval])

  return (
    <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemButton>{name}</AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <ul className='date-highlight'>
          <div className='date-highlight__occurance'>
            <label htmlFor=''>Repeat Every</label>
            <input type='number' value={interval} onChange={e => setInterval(Number(e.target.value))} />
            <select value={recurrance} onChange={e => setRecurrance(e.target.value)}>
              <option value='Day'>{isPlural ? 'Days' : 'Day'}</option>
              <option value='Week'>{isPlural ? 'Weeks' : 'Week'}</option>
              <option value='Month'>{isPlural ? 'Months' : 'Month'}</option>
              <option value='Year'>{isPlural ? 'Years' : 'Year'}</option>
            </select>
          </div>
          {recurrance !== 'Days' && (
            <div className='date-highlight__day-selection'>
              <label htmlFor='' style={{ display: 'block', width: '100%' }}>
                Repeat On
              </label>
              {daySelections.map(d => (
                <button className={`week-button week-button--${d.status} ${d.day}`} value={d.day} onClick={handleDaySelections}>
                  {d.abbr}
                </button>
              ))}
            </div>
          )}
          <div className='date-highlight__end-date'>
            <label htmlFor=''>Ends</label>
            <div className='radio-group'>
              <div className='group'>
                <input type='radio' name='ending' value='Never' id='Never' />
                <label for='Never'>Never</label>
              </div>
            </div>
            <div className='radio-group'>
              <div className='group'>
                <input type='radio' name='ending' value='After' id='After' />
                <label for='After'>After</label>
              </div>
              <input type='number' className='date-highlight__end-date--on' />
              <p>occurances</p>
            </div>
            <div className='radio-group'>
              <div className='group'>
                <input type='radio' name='ending' value='On' id='On' />
                <label for='On'>On</label>
              </div>
              <input type='date' className='date-highlight__end-date--after' />
            </div>
          </div>
        </ul>
      </AccordionItemPanel>
    </AccordionItem>
  )
}

export default DateHighlighting
