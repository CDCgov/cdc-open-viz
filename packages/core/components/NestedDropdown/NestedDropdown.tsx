import { useState, useEffect, useRef, useMemo, useId } from 'react'
import './nesteddropdown.styles.css'
import Icon from '@cdc/core/components/ui/Icon'
import { filterSearchTerm, NestedOptions, ValueTextPair } from './nestedDropdownHelpers'

const Options: React.FC<{
  subOptions: ValueTextPair[]
  label: string
  handleSubGroupSelect: Function
  userSelectedLabel: string
  userSearchTerm: string
}> = ({ subOptions, label, handleSubGroupSelect, userSelectedLabel, userSearchTerm }) => {
  const [isTierOneExpanded, setIsTierOneExpanded] = useState(true)
  const checkMark = <>&#10004;</>

  useEffect(() => {
    setIsTierOneExpanded(userSearchTerm.length > 0 ? true : isTierOneExpanded)
  }, [userSearchTerm])

  const handleGroupClick = e => {
    const leaveExpanded = e.target.className === 'selectable-item' ? true : !isTierOneExpanded
    setIsTierOneExpanded(leaveExpanded)
  }

  const handleKeyUp = e => {
    const currentItem = e.target
    if (e.key === 'ArrowRight') setIsTierOneExpanded(true)
    else if (e.key === 'ArrowLeft') {
      if (currentItem.className === 'selectable-item') currentItem.parentNode.parentNode.focus()
      setIsTierOneExpanded(false)
    } else if (e.key === 'Enter') {
      currentItem.className === 'selectable-item'
        ? handleSubGroupSelect(currentItem.dataset.value)
        : setIsTierOneExpanded(!isTierOneExpanded)
    }
  }

  return (
    <>
      <li
        role='treeitem'
        key={label}
        tabIndex={0}
        aria-label={label}
        onClick={handleGroupClick}
        onKeyUp={handleKeyUp}
        className='nested-dropdown-group'
      >
        <span className={'font-weight-bold'}>{label} </span>
        {
          <span className='list-arrow' aria-hidden='true'>
            {isTierOneExpanded ? (
              <Icon display='caretFilledUp' alt='arrow pointing up' />
            ) : (
              <Icon display='caretFilledDown' alt='arrow pointing down' />
            )}
          </span>
        }
        <ul
          aria-expanded={isTierOneExpanded}
          role='group'
          tabIndex={-1}
          aria-labelledby={label}
          className={isTierOneExpanded ? '' : 'hide'}
        >
          {subOptions.map(subGroup => {
            const [value, text] = subGroup
            const subGroupText = text || value

            const regionID = label + value
            const isSelected = regionID === userSelectedLabel

            return (
              <li
                key={regionID}
                className='selectable-item'
                tabIndex={0}
                role='treeitem'
                aria-label={regionID}
                aria-selected={isSelected}
                data-value={value}
                onClick={e => {
                  handleSubGroupSelect(value)
                }}
              >
                {isSelected ? (
                  <span className='check-mark' aria-hidden='true'>
                    {checkMark}
                  </span>
                ) : (
                  ''
                )}

                {subGroupText}
              </li>
            )
          })}
        </ul>
      </li>
    </>
  )
}

type NestedDropdownProps = {
  activeGroup: string
  activeSubGroup?: string
  isEditor?: boolean
  isUrlFilter?: boolean
  listLabel: string
  handleSelectedItems: ([group, subgroup]: [string, string]) => void
  options: NestedOptions
  subGroupingActive?: string
}

const NestedDropdown: React.FC<NestedDropdownProps> = ({
  options,
  activeGroup,
  activeSubGroup,
  listLabel,
  handleSelectedItems
}) => {
  const dropdownId = useId()
  const groupFilterActive = activeGroup
  const subGroupFilterActive = activeSubGroup || ''

  const [userSearchTerm, setUserSearchTerm] = useState('')
  const [inputValue, setInputValue] = useState(
    subGroupFilterActive !== '' ? `${groupFilterActive} - ${subGroupFilterActive}` : ''
  )
  const [inputHasFocus, setInputHasFocus] = useState(false)
  const [isListOpened, setIsListOpened] = useState(false)

  const searchInput = useRef(null)
  const searchDropdown = useRef(null)

  const chooseSelectedSubGroup = (tierOne: string | number, tierTwo: string | number) => {
    searchInput.current.focus()
    const selectedItemValue = `${tierOne} - ${tierTwo}`
    setUserSearchTerm('')
    setIsListOpened(false)
    setInputValue(selectedItemValue)
    handleSelectedItems([String(tierOne), String(tierTwo)])
  }

  const handleKeyUp = e => {
    const { nodeName, className, parentNode, nextSibling, lastChild, previousSibling } = e.target
    const Dropdown = searchDropdown.current
    switch (e.key) {
      case 'ArrowDown': {
        if (nodeName === 'INPUT') {
          setIsListOpened(true)
          // Move focus from Input to top of dropdown
          Dropdown.firstChild.focus()
        } else if (className === 'selectable-item') {
          // Move focus to next item on list: next Tier Two item or the next Tier One or SearchInput
          const itemToFocusOnAfterKeyUp = nextSibling ?? parentNode.parentNode.nextSibling ?? searchInput.current
          itemToFocusOnAfterKeyUp.focus()
        } else if (lastChild.className === 'hide') {
          // If Tier One is collapsed, move to next Tier One or move focus back to the top Input
          const itemToFocusOnAfterKeyUp = nextSibling ?? searchInput.current
          itemToFocusOnAfterKeyUp.focus()
        } else {
          // If Tier One is open, move focus to Tier Two
          lastChild?.firstChild?.focus()
        }
        break
      }

      case 'ArrowUp': {
        if (nodeName === 'INPUT') {
          setIsListOpened(true)
          if (Dropdown.lastChild.lastChild.className === 'hide') {
            // Move focus from Input textbox to the last collapsed Tier Two in dropdown
            Dropdown.lastChild.focus()
          } else {
            // Move focus to last item of the last collapsed Tier Two in dropdown
            Dropdown.lastChild.lastChild.lastChild.focus()
          }
        } else if (className === 'selectable-item') {
          // Move focus to previous Tier Two or Move focus to current Tier One
          const itemToFocusOnAfterKeyUp = previousSibling ?? parentNode.parentNode
          itemToFocusOnAfterKeyUp.focus()
        } else if (previousSibling) {
          // Move focus to previous collapsed Tier One or Move focus from Tier One to the last of the previous Tier Two's items
          const itemToFocusOnAfterKeyUp =
            previousSibling.lastChild.className === 'hide' ? previousSibling : previousSibling.lastChild.lastChild
          itemToFocusOnAfterKeyUp.focus()
        } else {
          // Move focus from top of the dropdown to Input
          searchInput?.current.focus()
        }
        break
      }

      case 'ArrowLeft': {
        if (nodeName === 'INPUT') {
          setIsListOpened(false)
        }
        break
      }

      case 'ArrowRight': {
        if (nodeName === 'INPUT') {
          setIsListOpened(true)
        }
        break
      }

      case 'Escape':
        {
          setIsListOpened(false)
          searchInput.current.focus()
        }
        break
    }
  }

  const filterOptions = useMemo(() => {
    return filterSearchTerm(userSearchTerm, options)
  }, [userSearchTerm, options])

  const handleSearchTermChange = e => {
    const newSearchTerm = e.target.value
    setIsListOpened(true)
    setUserSearchTerm(newSearchTerm)
    setInputValue(newSearchTerm)
  }

  return (
    <>
      {listLabel && (
        <label className='text-capitalize font-weight-bold' htmlFor={dropdownId}>
          {listLabel}
        </label>
      )}
      <div id={dropdownId} className={`nested-dropdown ${isListOpened ? 'open-filter' : ''}`} onKeyUp={handleKeyUp}>
        <div className='nested-dropdown-input-container form-control' aria-label='searchInput' role='textbox'>
          <input
            className='search-input'
            ref={searchInput}
            aria-label='searchInput'
            aria-haspopup='true'
            aria-hidden='false'
            tabIndex={0}
            value={inputValue}
            onChange={handleSearchTermChange}
            placeholder={'- Select -'}
            onClick={() => {
              if (inputHasFocus) setIsListOpened(!isListOpened)
            }}
            onFocus={() => setInputHasFocus(true)}
            onBlur={() => setInputHasFocus(false)}
          />
          <span className='list-arrow' aria-hidden={true}>
            <Icon display='caretDown' />
          </span>
        </div>
        <ul
          role='tree'
          key={listLabel}
          tabIndex={-1}
          aria-labelledby='main-nested-dropdown'
          aria-expanded={isListOpened}
          ref={searchDropdown}
          className={`main-nested-dropdown-container ${isListOpened ? '' : 'hide'}`}
        >
          {filterOptions.length
            ? filterOptions.map(([group, subgroup], index) => {
                const [groupValue, groupText] = group
                const groupTextValue = String(groupText || groupValue)
                return (
                  <Options
                    key={groupTextValue + '_' + index}
                    subOptions={subgroup}
                    label={groupTextValue}
                    handleSubGroupSelect={subGroupValue => {
                      chooseSelectedSubGroup(groupValue, subGroupValue)
                    }}
                    userSelectedLabel={groupFilterActive + subGroupFilterActive}
                    userSearchTerm={userSearchTerm}
                  />
                )
              })
            : 'There are no matching items'}
        </ul>
      </div>
    </>
  )
}

export default NestedDropdown
