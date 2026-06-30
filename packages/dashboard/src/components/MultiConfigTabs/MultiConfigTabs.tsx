import { useContext, useEffect, useMemo, useRef, useState } from 'react'
import { DashboardContext, DashboardDispatchContext } from '../../DashboardContext'
import Modal from '@cdc/core/components/ui/Modal'
import { useGlobalContext } from '@cdc/core/components/GlobalContext'
import Button from '@cdc/core/components/elements/Button'
import './multiconfigtabs.styles.css'

const AreYouSure = (deleteCallback, isLastMultiDashboardTab: boolean) => {
  const message = isLastMultiDashboardTab
    ? 'Are you sure you want to convert this multidashboard back into a normal dashboard?'
    : 'Are you sure you want to delete this multidashboard tab?'
  const buttonLabel = isLastMultiDashboardTab ? 'CONVERT' : 'DELETE'

  return (
    <Modal>
      <Modal.Content>
        <p>{message}</p>
        <Button variant='danger' onClick={deleteCallback}>
          {buttonLabel}
        </Button>
      </Modal.Content>
    </Modal>
  )
}

const Tab = ({ name, handleClick, tabs, index, active }) => {
  const [editing, setEditing] = useState(false)
  const dispatch = useContext(DashboardDispatchContext)
  const { overlay } = useGlobalContext()
  const editRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const saveName = () => {
    const newVal = inputRef.current?.value ?? ''
    const sameName = newVal === name
    const blankName = !newVal
    const duplicateName = tabs.includes(newVal)
    if (!sameName && !blankName && !duplicateName) {
      dispatch({ type: 'RENAME_DASHBOARD_TAB', payload: { current: name, new: newVal } })
    }
    setEditing(false)
  }

  useEffect(() => {
    if (!editing) return

    inputRef.current?.focus()
    inputRef.current?.select()

    const handleClickOutside = (event: MouseEvent) => {
      if (editRef.current?.contains(event.target as Node)) return
      saveName()
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [editing])

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
    overlay?.actions.openOverlay(AreYouSure(deleteCallback, tabs.length === 1))
  }

  const handleReorder = (moveTo: -1 | 1, e) => {
    e.stopPropagation()
    const newIndex = index + moveTo
    const inbounds = newIndex > -1 && newIndex <= tabs.length - 1
    if (inbounds) {
      dispatch({ type: 'REORDER_MULTIDASHBOARDS', payload: { currentIndex: index, newIndex } })
    }
  }

  const keepEditing = e => {
    e.preventDefault()
    e.stopPropagation()
  }

  const canMoveLeft = index !== 0
  const canMoveRight = index <= tabs.length - 2

  return (
    <li className='nav-item d-flex mt-0'>
      <div
        className={`edit nav-link${active ? ' active' : ''}${editing ? ' is-editing' : ''}`}
        aria-current={active ? 'page' : null}
        onClick={onClick}
      >
        {editing ? (
          <div className='multi-config-tabs__edit' ref={editRef}>
            {canMoveLeft && (
              <button
                aria-label='Move dashboard tab left'
                className='multi-config-tabs__reorder'
                onClick={e => handleReorder(-1, e)}
                onMouseDown={keepEditing}
                type='button'
              >
                {'←'}
              </button>
            )}
            <input
              type='text'
              defaultValue={name}
              onBlur={e => {
                e.stopPropagation()
                saveName()
              }}
              ref={inputRef}
            />
            {canMoveRight && (
              <button
                aria-label='Move dashboard tab right'
                className='multi-config-tabs__reorder'
                onClick={e => handleReorder(1, e)}
                onMouseDown={keepEditing}
                type='button'
              >
                {'→'}
              </button>
            )}
          </div>
        ) : (
          <>
            {name}
            <Button variant='danger' className='multi-config-tabs__remove border-0' onClick={handleRemove}>
              X
            </Button>
          </>
        )}
      </div>
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
    <ul className='nav nav-tabs multi-config-tabs multi-config-tabs--editor'>
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
