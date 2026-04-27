import React, { useContext, useMemo } from 'react'

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
import Button from '@cdc/core/components/elements/Button'
import { iconHash } from '../helpers/iconHash'
import _ from 'lodash'
import { Visualization } from '@cdc/core/types/Visualization'
import { labelHash } from '@cdc/core/helpers/labelHash'
import { removeDashboardFilter } from '../helpers/removeDashboardFilter'

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

      // Adds placeholder column name that defaults to the visualization type.
      newRows[rowIdx].columns.forEach((col, idx) => {
        col.toggleName = col.toggleName || labelHash[config.visualizations[col.widget]?.type] || undefined
      })

      newRows[rowIdx].columns = layout.map((width, colIndex) => {
        const col = mapRow[colIndex]
        return col ? { ...col, width } : { width }
      })
    }

    updateConfig({ ...config, rows: newRows })
  }

  const toggleEqualHeight = () => {
    const newRows = _.cloneDeep(rows)
    newRows[rowIdx].equalHeight = !newRows[rowIdx].equalHeight
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
    let newVisualizations = { ...config.visualizations }
    let newSharedFilters = _.cloneDeep(config.dashboard.sharedFilters) || []

    if (rows[rowIdx]?.columns?.length && config.visualizations) {
      rows[rowIdx].columns.forEach(column => {
        if (column.widget) {
          delete newVisualizations[column.widget]
          newSharedFilters.forEach(sharedFilter => {
            if (sharedFilter.usedBy) {
              sharedFilter.usedBy = sharedFilter.usedBy.filter(uid => uid !== column.widget)
            }
          })
        }
      })
    }

    rows.splice(rowIdx, 1)

    // Remove shared filters no longer referenced by any remaining dashboardFilters widget,
    // iterating in reverse so removals don't invalidate earlier indices. removeDashboardFilter
    // shifts sharedFilterIndexes in all remaining vizs so indices stay consistent.
    let currentFilters = newSharedFilters
    let currentVizs = newVisualizations
    for (let i = currentFilters.length - 1; i >= 0; i--) {
      const isReferenced = Object.values(currentVizs).some(
        v => v.type === 'dashboardFilters' && (v as any).sharedFilterIndexes?.includes(i)
      )
      if (!isReferenced) {
        ;[currentFilters, currentVizs] = removeDashboardFilter(i, currentFilters, currentVizs as any)
      }
    }

    updateConfig({
      ...config,
      rows,
      visualizations: currentVizs,
      dashboard: { ...config.dashboard, sharedFilters: currentFilters }
    })
  }

  const layoutList = [
    <li
      className={curr === '12' ? `current row-menu__list--item` : `row-menu__list--item`}
      onClick={() => setRowLayout([12])}
      key='12'
      title='1 Column'
    >
      <OneColIcon />
    </li>,
    <li
      className={curr === '66' ? `current row-menu__list--item` : `row-menu__list--item`}
      onClick={() => setRowLayout([6, 6])}
      key='66'
      title='2 Columns'
    >
      <TwoColIcon />
    </li>,
    <li
      className={curr === '444' ? `current row-menu__list--item` : `row-menu__list--item`}
      onClick={() => setRowLayout([4, 4, 4])}
      key='444'
      title='3 Columns'
    >
      <ThreeColIcon />
    </li>,
    <li
      className={curr === '48' ? `current row-menu__list--item` : `row-menu__list--item`}
      onClick={() => setRowLayout([4, 8])}
      key='48'
      title='2 Columns'
    >
      <FourEightColIcon />
    </li>,
    <li
      className={curr === '84' ? `current row-menu__list--item` : `row-menu__list--item`}
      onClick={() => setRowLayout([8, 4])}
      key='84'
      title='2 Columns'
    >
      <EightFourColIcon />
    </li>,
    <li
      className={curr === 'toggle' ? `current row-menu__list--item` : `row-menu__list--item`}
      onClick={() => setRowLayout([12, 12, 12], true)}
      key='toggle'
      title='Toggle between up to three visualizations'
    >
      <ToggleIcon />
    </li>
  ]

  const isMultiColumn = curr !== '12' && curr !== 'toggle'

  return (
    <nav className='row-menu'>
      <ul className='row-menu__flyout'>{layoutList}</ul>
      {isMultiColumn && (
        <Button
          className={`btn row-menu__btn border-0${row.equalHeight ? ' btn-primary' : ''}`}
          title={row.equalHeight ? 'Disable Equal Height Rows' : 'Enable Equal Height Rows'}
          onClick={toggleEqualHeight}
        >
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='25' height='20' fill='#fff'>
            <rect x='1' y='2' width='9' height='14' rx='1' />
            <rect x='14' y='2' width='9' height='14' rx='1' />
            <line x1='0' y1='19' x2='24' y2='19' stroke='#fff' strokeWidth='2' strokeDasharray='3 2' />
          </svg>
        </Button>
      )}
      <div className='spacer'></div>
      <Button
        className={`btn btn-primary row-menu__btn border-0`}
        title='Move Row Up'
        onClick={() => moveRow('up')}
        disabled={rowIdx === 0}
      >
        <Icon display='caretUp' color='#fff' size={25} />
      </Button>
      <Button
        className={'btn btn-primary row-menu__btn border-0'}
        title='Move Row Down'
        onClick={() => moveRow('down')}
        disabled={rowIdx + 1 === rows.length}
      >
        <Icon display='caretDown' color='#fff' size={25} />
      </Button>
      <Button
        className={'btn btn-danger row-menu__btn row-menu__btn--remove border-0'}
        title='Delete Row'
        onClick={deleteRow}
        disabled={rowIdx === 0 && rows.length === 1}
      >
        <Icon display='close' color='#fff' size={25} />
      </Button>
    </nav>
  )
}

type RowProps = { row: ConfigRow; idx: number; uuid: number | string }

const Row: React.FC<RowProps> = ({ row, idx: rowIdx, uuid }) => {
  const { overlay } = useGlobalContext()
  return (
    <>
      <div className='builder-row' data-row-id={rowIdx}>
        <RowMenu rowIdx={rowIdx} />
        <span className='ms-2 mt-n3'>Row - {rowIdx + 1}</span>
        <Button
          title='Configure Data'
          className='btn btn-configure-row'
          onClick={() => {
            overlay?.actions.openOverlay(<DataDesignerModal rowIndex={rowIdx} />)
          }}
        >
          {iconHash['gearMulti']}
        </Button>
        <div className='column-container'>
          {row.columns
            .filter(column => column.width)
            .map((column, colIdx) => (
              <Column
                data={column}
                key={`row-${uuid}-col-${colIdx}`}
                rowIdx={rowIdx}
                colIdx={colIdx}
                toggleRow={row.toggle}
              />
            ))}
        </div>
      </div>
    </>
  )
}

export default Row
