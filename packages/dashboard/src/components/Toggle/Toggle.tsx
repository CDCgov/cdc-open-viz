import { ConfigRow } from '../../types/ConfigRow'
import { AnyVisualization } from '@cdc/core/types/Visualization'
import { getIcon } from '../../helpers/iconHash'
import { labelHash } from '@cdc/core/helpers/labelHash'
import './toggle-style.css'
import _ from 'lodash'

type ToggleProps = {
  active: number
  row: ConfigRow
  visualizations: Record<string, AnyVisualization>
  setToggled: (colIndex: number) => void
}
const Toggle: React.FC<ToggleProps> = ({ active, row, visualizations, setToggled, text }) => {
  const selectItem = (colIndex, e = null) => {
    if (e?.key && e.key !== 'Enter' && e.key !== ' ') return
    if (e?.key === ' ') e.preventDefault() // Prevent page scroll
    setToggled(colIndex)
  }

  return (
    <div className='toggle-component' role='radiogroup' aria-label='Visualization options'>
      {row.columns.map((col, colIndex) => {
        if (!col.widget) return null
        const type = visualizations[col.widget].type
        // Get the column toggele Text or default to the type
        const text = col.toggleName ? col.toggleName : labelHash[type]
        const selected = colIndex === active
        return (
          <div
            role='radio'
            className={selected ? 'selected' : ''}
            key={colIndex}
            onClick={() => selectItem(colIndex)}
            onKeyUp={e => selectItem(colIndex, e)}
            aria-checked={selected}
            tabIndex={0}
            aria-label={`Toggle ${type}`}
          >
            <span aria-hidden='true'>{getIcon(visualizations[col.widget])}</span> <span>{text}</span>
          </div>
        )
      })}
    </div>
  )
}

export default Toggle
