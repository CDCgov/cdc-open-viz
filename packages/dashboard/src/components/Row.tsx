import React, { useContext, useMemo, useState } from 'react'

import { DashboardContext, DashboardDispatchContext } from '../DashboardContext'

import Icon from '@cdc/core/components/ui/Icon'

import Column from './Column'

import OneColIcon from '../images/icon-col-12.svg'
import TwoColIcon from '../images/icon-col-6.svg'
import ThreeColIcon from '../images/icon-col-4.svg'
import FourEightColIcon from '../images/icon-col-4-8.svg'
import EightFourColIcon from '../images/icon-col-8-4.svg'
import ToggleIcon from '../images/icon-toggle.svg'
import { ConfigRow } from '../types/ConfigRow'
import { DataDesignerModal } from './DataDesignerModal'
import { useGlobalContext } from '@cdc/core/components/GlobalContext'
import { iconHash } from '../helpers/iconHash'
import _ from 'lodash'
import { Visualization } from '@cdc/core/types/Visualization'

type RowMenuProps = {
  rowIdx: number
}

const RowMenu: React.FC<RowMenuProps> = ({ rowIdx }) => {
  const { config } = useContext(DashboardContext)
  const dispatch = useContext(DashboardDispatchContext)
  const rows = _.cloneDeep(config.rows)
  const row = config.rows[rowIdx]

  const updateConfig = config => dispatch({ type: 'UPDATE_CONFIG', payload: [config] })
  const curr = useMemo(() => {
    if (row.toggle) return 'toggle'
    return row.columns.reduce((acc, curr) => {
      if (curr.width) {
        acc += curr.width
      }
      return acc
    }, '')
  }, [row])

  const setRowLayout = (layout: number[], toggle = undefined) => {
    const newRows = _.cloneDeep(rows)
    newRows[rowIdx].toggle = toggle
    const rowColumns = newRows[rowIdx].columns
    const columnsWithWidgets = rowColumns.filter(c => c.widget)

    const totalWidgets = columnsWithWidgets.length
    if (totalWidgets > layout.length) {
      // don't let them change to a smaller layout and lose viz config work
      return
    } else {
      // a 3 column becoming a 2 column with only a VizConfig in the second column will maintain order
      // a 2 column becoming a 1 column with only a VizConfig in the second column will move the VizConfig to the first column
      const mapRow = rowColumns.length > layout.length ? columnsWithWidgets : rowColumns
      newRows[rowIdx].columns = layout.map((width, colIndex) => {
        const col = mapRow[colIndex]
        return col ? { ...col, width } : { width }
      })
    }

    updateConfig({ ...config, rows: newRows })
  }

  const moveRow = (dir = 'down') => {
    if (rowIdx === rows.length - 1 && dir === 'down') return

    let newIdx = dir === 'down' ? rowIdx + 1 : rowIdx - 1

    // Swap
    const temp = rows[newIdx]

    rows[newIdx] = row
    rows[rowIdx] = temp

    rows[newIdx].uuid = Date.now()
    rows[rowIdx].uuid = Date.now()

    updateConfig({ ...config, rows })

    // TODO: Migrate this animation to a React animation library once one is selected for COVE. This is pretty minor so can stay for now.
    let calcRowMove = dir === 'down' ? 202 : -202
    let calcRowMove2 = dir === 'down' ? -202 : 202

    let rowEle = document.querySelector("[data-row-id='" + rowIdx + "']") as HTMLElement
    let rowNewEle = document.querySelector("[data-row-id='" + newIdx + "']") as HTMLElement

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
      rowEle.setAttribute('style', '')
      rowNewEle.setAttribute('style', '')
    }, 500)
  }

  const deleteRow = () => {
    rows.splice(rowIdx, 1) // Just delete the row. Don't delete the instantiated widgets for now.

    updateConfig({ ...config, rows })
  }

  const layoutList = [
    <li className={curr === '12' ? `current row-menu__list--item` : `row-menu__list--item`} onClick={() => setRowLayout([12])} key='12' title='1 Column'>
      <OneColIcon />
    </li>,
    <li className={curr === '66' ? `current row-menu__list--item` : `row-menu__list--item`} onClick={() => setRowLayout([6, 6])} key='66' title='2 Columns'>
      <TwoColIcon />
    </li>,
    <li className={curr === '444' ? `current row-menu__list--item` : `row-menu__list--item`} onClick={() => setRowLayout([4, 4, 4])} key='444' title='3 Columns'>
      <ThreeColIcon />
    </li>,
    <li className={curr === '48' ? `current row-menu__list--item` : `row-menu__list--item`} onClick={() => setRowLayout([4, 8])} key='48' title='2 Columns'>
      <FourEightColIcon />
    </li>,
    <li className={curr === '84' ? `current row-menu__list--item` : `row-menu__list--item`} onClick={() => setRowLayout([8, 4])} key='84' title='2 Columns'>
      <EightFourColIcon />
    </li>,
    <li className={curr === 'toggle' ? `current row-menu__list--item` : `row-menu__list--item`} onClick={() => setRowLayout([12, 12, 12], true)} key='toggle' title='Toggle between up to three visualizations'>
      <ToggleIcon />
    </li>
  ]

  return (
    <nav className='row-menu'>
      <div className='row-menu__btn'>
        <ul className='row-menu__flyout'>{layoutList}</ul>
      </div>
      <div className='spacer'></div>
      <button className={rowIdx === 0 ? 'row-menu__btn row-menu__btn-disabled' : 'row-menu__btn'} title='Move Row Up' onClick={() => moveRow('up')}>
        <Icon display='caretUp' color='#fff' size={25} />
      </button>
      <button className={rowIdx + 1 === rows.length ? 'row-menu__btn row-menu__btn-disabled' : 'row-menu__btn'} title='Move Row Down' onClick={() => moveRow('down')}>
        <Icon display='caretDown' color='#fff' size={25} />
      </button>
      <button className={rowIdx === 0 && rows.length === 1 ? 'row-menu__btn row-menu__btn--remove row-menu__btn-disabled' : 'row-menu__btn row-menu__btn--remove'} title='Delete Row' onClick={deleteRow}>
        <Icon display='close' color='#fff' size={25} />
      </button>
    </nav>
  )
}

type RowProps = { row: ConfigRow; idx: number; uuid: number | string }

const Row: React.FC<RowProps> = ({ row, idx: rowIdx, uuid }) => {
  const { overlay } = useGlobalContext()
  const dispatch = useContext(DashboardDispatchContext)

  const configureFootnotes = () => {
    if (!row.footnotesId) {
      const type = 'footnotes'
      const uid = type + Date.now()
      const newVisualizationConfig = {
        uid,
        type,
        visualizationType: type,
        editing: true
      }
      dispatch({ type: 'ADD_FOOTNOTE', payload: { id: uid, rowIndex: rowIdx, config: newVisualizationConfig as Visualization } })
    } else {
      dispatch({ type: 'UPDATE_VISUALIZATION', payload: { vizKey: row.footnotesId, configureData: { editing: true } } })
    }
  }
  return (
    <>
      <div className='builder-row' data-row-id={rowIdx}>
        <RowMenu rowIdx={rowIdx} />
        <button
          title='Configure Data'
          className='btn btn-configure-row'
          onClick={() => {
            overlay?.actions.openOverlay(<DataDesignerModal rowIndex={rowIdx} />)
          }}
        >
          {iconHash['gear']}
        </button>
        <div className='column-container'>
          {row.columns
            .filter(column => column.width)
            .map((column, colIdx) => (
              <Column data={column} key={`row-${uuid}-col-${colIdx}`} rowIdx={rowIdx} colIdx={colIdx} />
            ))}
        </div>
        <button className='btn btn-primary footnotes' onClick={configureFootnotes}>
          Configure Footnotes
        </button>
      </div>
    </>
  )
}

export default Row
