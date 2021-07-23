import React, { memo, useContext, useState } from 'react'
import Column from './Column'
import Context from '../context'
import CloseIcon from '../images/icon-close.svg'
import RowUp from '../images/icon-up.svg'
import RowDown from '../images/icon-down.svg'
import OneColIcon from '../images/icon-col-12.svg'
import TwoColIcon from '../images/icon-col-6.svg'
import ThreeColIcon from '../images/icon-col-4.svg'
import FourEightColIcon from '../images/icon-col-4-8.svg'
import EightFourColIcon from '../images/icon-col-8-4.svg'

const RowMenu = ({ rowIdx, row }) => {
  const { rows, config, updateConfig } = useContext(Context)

  const getCurr = () => {
    let res = []

    for (let i = 0; i < row.length; i++) {
      if(row[i].width) res.push(row[i].width)
    }

    return res.join('')
  }

  const [curr, setCurr] = useState(getCurr())

  const setRowLayout = (layout) => {
    const newRows = [...rows]
    const r = newRows[rowIdx]

    for (let i = 0; i < r.length; i++) {
      r[i].width = layout[i] ?? null
    }

    updateConfig({ ...config, rows: newRows})
    setCurr(layout.join(''))
  }

  const moveRow = (dir = 'down') => {
    if (rowIdx === rows.length - 1 && dir === 'down') return

    let newIdx = dir === 'down' ? rowIdx + 1 : rowIdx - 1

    // Swap
    const temp = rows[newIdx]

    rows[newIdx] = row
    rows[rowIdx] = temp

    rows[newIdx].uuid = Date.now();
    rows[rowIdx].uuid = Date.now();

    updateConfig({...config, rows})

    // TODO: Migrate this animation to a React animation library once one is selected for COVE. This is pretty minor so can stay for now.
    let calcRowMove = dir === 'down' ? 202 : -202
    let calcRowMove2 = dir === 'down' ? -202 : 202

    let rowEle = document.querySelector('[data-row-id=\'' + rowIdx + '\']')
    let rowNewEle = document.querySelector('[data-row-id=\'' + newIdx + '\']')

    rowEle.style.pointerEvents = 'none'
    rowNewEle.style.pointerEvents = 'none'
    rowEle.style.top = calcRowMove + 'px'
    rowNewEle.style.top = calcRowMove2 + 'px'

    setTimeout(() => {
      rowEle.style.transition = 'top 500ms cubic-bezier(0.16, 1, 0.3, 1)'
      rowNewEle.style.transition = 'top 500ms cubic-bezier(0.16, 1, 0.3, 1)'
      rowEle.style.top = '0'
      rowNewEle.style.top = '0'
    }, 0)

    setTimeout(() => {
      rowEle.style = null
      rowNewEle.style = null
    }, 500)
  }
  
  const deleteRow = () => {
    rows.splice(rowIdx, 1) // Just delete the row. Don't delete the instantiated widgets for now.

    updateConfig({...config, rows})
  }

  const layoutList = [
    <li className={curr === '12' ? `current row-menu__list--item` : `row-menu__list--item`} onClick={() => setRowLayout([ 12 ])} key="12" title="1 Column">
      <OneColIcon />
    </li>,
    <li className={curr === '66' ? `current row-menu__list--item` : `row-menu__list--item`} onClick={() => setRowLayout([ 6, 6 ])} key="66" title="2 Columns">
      <TwoColIcon />
    </li>,
    <li className={curr === '444' ? `current row-menu__list--item` : `row-menu__list--item`} onClick={() => setRowLayout([ 4, 4, 4 ])} key="444" title="3 Columns">
      <ThreeColIcon />
    </li>,
    <li className={curr === '48' ? `current row-menu__list--item` : `row-menu__list--item`} onClick={() => setRowLayout([ 4, 8 ])} key="48" title="2 Columns">
      <FourEightColIcon />
    </li>,
    <li className={curr === '84' ? `current row-menu__list--item` : `row-menu__list--item`} onClick={() => setRowLayout([ 8, 4 ])} key="84" title="2 Columns">
      <EightFourColIcon />
    </li>
  ]

  return (
    <nav className="row-menu">
      <div className="row-menu__btn">
        <ul className="row-menu__flyout">
          {layoutList}
        </ul>
      </div>
      <div className="spacer"></div>
      <button className={rowIdx === 0 ? 'row-menu__btn row-menu__btn-disabled' : 'row-menu__btn'} title="Move Row Up" onClick={() => moveRow('up')}>
        <RowUp />
      </button>
      <button className={rowIdx + 1 === rows.length ? 'row-menu__btn row-menu__btn-disabled' : 'row-menu__btn'} title="Move Row Down" onClick={() => moveRow('down')}>
        <RowDown />
      </button>
      <button className={rowIdx === 0 && rows.length === 1 ? 'row-menu__btn row-menu__btn--remove row-menu__btn-disabled' : 'row-menu__btn row-menu__btn--remove'} title="Delete Row" onClick={deleteRow}>
        <CloseIcon />
      </button>
    </nav>
  )
}

const Row = ({ row, idx: rowIdx, uuid}) => {
  return (
    <div className="builder-row" data-row-id={rowIdx}>
      <RowMenu rowIdx={rowIdx} row={row} />
      <div className="column-container">
        {row.filter(column => column.width).map((column, colIdx) => <Column data={column} key={`row-${uuid}-col-${colIdx}`} rowIdx={rowIdx} colIdx={colIdx} />)}
      </div>
    </div>
  )
}

export default Row
