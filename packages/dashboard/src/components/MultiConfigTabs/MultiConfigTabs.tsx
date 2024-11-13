import { createRef, useContext, useMemo, useState } from 'react'
import { DashboardContext, DashboardDispatchContext } from '../../DashboardContext'
import Modal from '@cdc/core/components/ui/Modal'
import { useGlobalContext } from '@cdc/core/components/GlobalContext'
import './multiconfigtabs.styles.css'

const AreYouSure = deleteCallback => {
  return (
    <Modal>
      <Modal.Content>
        <p>Are you sure you want to delete this dashboard? </p>
        <button className='btn btn-danger' onClick={deleteCallback}>
          DELETE
        </button>
      </Modal.Content>
    </Modal>
  )
}

const Tab = ({ name, handleClick, tabs, index, active }) => {
  const [editing, setEditing] = useState(false)
  const dispatch = useContext(DashboardDispatchContext)
  const { overlay } = useGlobalContext()
  const inputRef = createRef<HTMLInputElement>()

  const saveName = e => {
    e.stopPropagation()
    const newVal = inputRef.current.value
    const sameName = newVal === name
    const blankName = !newVal
    const duplicateName = tabs.includes(newVal)
    if (!sameName && !blankName && !duplicateName) {
      dispatch({ type: 'RENAME_DASHBOARD_TAB', payload: { current: name, new: newVal } })
    }
    setEditing(false)
  }

  const onClick = e => {
    // ignore click on delete button
    if (e.target.className === 'remove') return
    if (active) {
      setEditing(true)
    } else {
      handleClick()
    }
  }

  const handleRemove = () => {
    const deleteCallback = () => {
      dispatch({ type: 'REMOVE_MULTIDASHBOARD_AT_INDEX', payload: index })
      overlay?.actions.toggleOverlay(false)
    }
    overlay?.actions.openOverlay(AreYouSure(deleteCallback))
  }

  const handleReorder = (index: number, moveTo: -1 | 1) => {
    const newIndex = index + moveTo
    const inbounds = newIndex > -1 && newIndex <= tabs.length - 1
    if (inbounds) {
      dispatch({ type: 'REORDER_MULTIDASHBOARDS', payload: { currentIndex: index, newIndex: index + moveTo } })
    }
  }

  const canMoveLeft = index !== 0
  const canMoveRight = index <= tabs.length - 2

  return (
    <li className='nav-item d-flex mt-0'>
      {canMoveLeft && editing && (
        <button className='border-0' onClick={() => handleReorder(index, -1)}>
          {'<'}
        </button>
      )}
      <div
        className={`edit nav-link${active ? ' active' : ''}`}
        aria-current={active ? 'page' : null}
        onClick={onClick}
      >
        {editing ? (
          <div className='d-flex'>
            <input type='text' defaultValue={name} onBlur={saveName} ref={inputRef} />
            <button className='btn btn-link save' onClick={saveName}>
              save
            </button>
          </div>
        ) : (
          <>
            {name}
            <button className='btn btn-danger border-0 ml-1' onClick={handleRemove}>
              X
            </button>
          </>
        )}
      </div>
      {canMoveRight && editing && (
        <button className='border-0' onClick={() => handleReorder(index, 1)}>
          {'>'}
        </button>
      )}
    </li>
  )
}

const MultiConfigTabs = () => {
  const { config } = useContext(DashboardContext)
  const dispatch = useContext(DashboardDispatchContext)
  const tabs = useMemo<string[]>(
    () => (config.multiDashboards || []).map(({ label }) => label),
    [config.multiDashboards]
  )
  const activeTab = useMemo<number>(() => config.activeDashboard, [config.activeDashboard])

  const saveAndLoad = (indexToSwitchTo: number) => {
    dispatch({ type: 'SAVE_CURRENT_CHANGES' })
    dispatch({ type: 'SWITCH_CONFIG', payload: indexToSwitchTo })
  }

  if (!config.multiDashboards) return null
  return (
    <ul className='nav nav-tabs multi-config-tabs'>
      {tabs.map((tab, index) => (
        <Tab
          key={tab + index}
          name={tab}
          tabs={tabs}
          index={index}
          handleClick={() => saveAndLoad(index)}
          active={index === activeTab}
        />
      ))}
      <li className='nav-item'>
        <button className='nav-link add' onClick={() => dispatch({ type: 'ADD_NEW_DASHBOARD' })}>
          +
        </button>
      </li>
    </ul>
  )
}

export default MultiConfigTabs
