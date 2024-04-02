import { useContext } from 'react'
import { DashboardDispatchContext } from '../../DashboardContext'
import { ConfigRow } from '../../types/ConfigRow'
import { Visualization } from '@cdc/core/types/Visualization'
import { getIcon } from '../../helpers/iconHash'
import './toggle-style.css'
import _ from 'lodash'

type ToggleProps = {
  row: ConfigRow
  rowIndex: number
  visualizations: Record<string, Visualization>
}
const Toggle: React.FC<ToggleProps> = ({ row, rowIndex, visualizations }) => {
  const dispatch = useContext(DashboardDispatchContext)

  const selectItem = (colIndex, e = null) => {
    if (e?.key && e.key !== 'Enter') return
    dispatch({ type: 'TOGGLE_ROW', payload: { rowIndex, colIndex } })
  }
  return (
    <div className='toggle-component'>
      {row.map((col, colIndex) => {
        if (!col.widget) return null
        const type = visualizations[col.widget].type
        const selected = col.hide !== undefined ? col.hide : colIndex === 0
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
