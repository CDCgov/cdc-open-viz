import React, { useState } from 'react'

// Store
import useGlobalStore from '@cdc/core/stores/globalStore'
import useConfigStore from '@cdc/core/stores/configStore'

// Components - Core
import Modal from '@cdc/core/components/ui/Modal'
import InputToggle from '@cdc/core/components/input/InputToggle'
import Icon from '@cdc/core/components/ui/Icon'

// Components - Local
import BuilderColumn from './Builder.Column'

const RowMenu = ({ rowIdx, row }) => {
  // Store Selectors
  const openOverlay = useGlobalStore(state => state.openOverlay)

  const { config, updateConfig, updateConfigField } = useConfigStore(state => ({
    config: state.config,
    updateConfig: state.updateConfig,
    updateConfigField: state.updateConfigField
  }))

  const getCurr = () => {
    let res = []

    for (let i = 0; i < row.length; i++) {
      if (row[i].width) res.push(row[i].width)
    }

    return res.join('')
  }

  const [ curr, setCurr ] = useState(getCurr())
  const [ equalHeight, setEqualHeight ] = useState(false)

  const setRowLayout = (layout) => {
    let rows = [ ...config.rows[rowIdx] ]

    let newRow = []

    for (let i = 0; i < rows.length; i++) {
      newRow.push({ ...rows[i], width: layout[i] ?? null })
    }

    updateConfigField(['rows', rowIdx], newRow)
    setCurr(layout.join(''))
  }

  const moveRow = (dir = 'down') => {
    const processImmutableRowArr = (rowData) => {
      let arr = []
      for (let i = 0; i < rowData.length; i++) {
        arr.push({ ...rowData[i] })
      }
      return arr
    }

    if (rowIdx === config.rows.length - 1 && dir === 'down') return

    let newIdx = dir === 'down' ? rowIdx + 1 : rowIdx - 1

    let rows = [...config.rows]
    rows[newIdx] = processImmutableRowArr(row)
    rows[rowIdx] = processImmutableRowArr(config.rows[newIdx])

    updateConfig({ rows: rows })

    //Animate Row Movement
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
    let rows = [ ...config.rows ]
    rows.splice(rowIdx, 1) // Just delete the row. Don't delete the instantiated widgets for now.

    updateConfig({ rows: rows })
  }

  const rowItemsHeight = () => {
    setEqualHeight(!equalHeight)

    row.equalHeight = !equalHeight
  }

  const layoutList = [
    <li className="cove-dashboard__builder__row-layout-utils--item"
        title="1 Column"
        data-selected={curr === '12'}
        onClick={() => setRowLayout([ 12 ])}
        key="12"
    >
      <Icon display="col-12" base/>
    </li>,
    <li className="cove-dashboard__builder__row-layout-utils--item"
        title="2 Columns"
        data-selected={curr === '66'}
        onClick={() => setRowLayout([ 6, 6 ])}
        key="66"
    >
      <Icon display="col-6" base/>
    </li>,
    <li className="cove-dashboard__builder__row-layout-utils--item"
        title="3 Columns"
        data-selected={curr === '444'}
        onClick={() => setRowLayout([ 4, 4, 4 ])}
        key="444"
    >
      <Icon display="col-4" base/>
    </li>,
    <li className="cove-dashboard__builder__row-layout-utils--item"
        title="2 Columns"
        data-selected={curr === '48'}
        onClick={() => setRowLayout([ 4, 8 ])}
        key="48"
    >
      <Icon display="col-4-8" base/>
    </li>,
    <li className="cove-dashboard__builder__row-layout-utils--item"
        title="2 Columns"
        data-selected={curr === '84'}
        onClick={() => setRowLayout([ 8, 4 ])}
        key="84"
    >
      <Icon display="col-8-4" base/>
    </li>
  ]

  const rowSettings = (
    <Modal>
      <Modal.Header>Row Settings</Modal.Header>
      <Modal.Content>
        <InputToggle label="Visualizations in this row should be equal height" fieldName={`toggleEqualHeight${rowIdx}`} value={row.equalHeight ? row.equalHeight : false} updateField={rowItemsHeight}></InputToggle>
      </Modal.Content>
    </Modal>
  )

  return (
    <nav className="cove-dashboard__builder__row-menu">
      <div className="cove-dashboard__builder__row-menu__button">
        <ul className="cove-dashboard__builder__row-layout-utils">{layoutList}</ul>
      </div>
      <div className="spacer"></div>
      {/*<button className={'row-menu__btn'} title="Row Settings"*/}
      {/*        onClick={() => openOverlay(rowSettings)}>*/}
      {/*  <Icon display="edit" color="#fff" size={25}/>*/}
      {/*</button>*/}
      <button className="cove-dashboard__builder__row-menu__button" data-disabled={rowIdx === 0} title="Move Row Up" onClick={() => moveRow('up')}>
        <Icon display="caretUp" color="#fff" size={25} base/>
      </button>
      <button className="cove-dashboard__builder__row-menu__button" data-disabled={rowIdx + 1 === config.rows.length} title="Move Row Down" onClick={() => moveRow('down')}>
        <Icon display="caretDown" color="#fff" size={25} base/>
      </button>
      <button className="cove-dashboard__builder__row-menu__button cove-dashboard__builder__row-menu__button--remove" data-disabled={rowIdx === 0 && config.rows.length === 1} title="Delete Row" onClick={deleteRow}>
        <Icon display="close" color="#fff" size={25} base/>
      </button>
    </nav>
  )
}

const BuilderRow = ({ row, idx: rowIdx, uuid }) => {
  return (
    <div className="cove-dashboard__builder__row" data-row-id={rowIdx}>
      <RowMenu rowIdx={rowIdx} row={row}/>
      <div className="cove-dashboard__builder__row-content">
        {row
          .filter(column => column.width)
          .map((column, colIdx) => (
            <BuilderColumn data={column} key={`row-${uuid}-col-${colIdx}`} rowIdx={rowIdx} colIdx={colIdx}/>
          ))}
      </div>
    </div>
  )
}

export default BuilderRow
