import { ConfigRow } from '../../types/ConfigRow'
import { AnyVisualization } from '@cdc/core/types/Visualization'
import { getIcon } from '../../helpers/iconHash'
import './toggle-style.css'
import _ from 'lodash'

type ToggleProps = {
  active: number
  row: ConfigRow
  visualizations: Record<string, AnyVisualization>
  setToggled: (colIndex: number) => void
}
const Toggle: React.FC<ToggleProps> = ({ active, row, visualizations, setToggled }) => {
  const selectItem = (colIndex, e = null) => {
    if (e?.key && e.key !== 'Enter') return
    setToggled(colIndex)
  }
  return (
    <div className='toggle-component'>
      {row.columns.map((col, colIndex) => {
        if (!col.widget) return null
        const type = visualizations[col.widget].type
        const selected = colIndex === active
        return (
          <div role='radio' className={selected ? 'selected' : ''} key={colIndex} onClick={() => selectItem(colIndex)} onKeyUp={e => selectItem(colIndex, e)} aria-checked={selected} tabIndex={0} aria-label={`Toggle ${type}`}>
            {getIcon(visualizations[col.widget])} <span>{_.capitalize(type)}</span>
          </div>
        )
      })}
    </div>
  )
}

export default Toggle
