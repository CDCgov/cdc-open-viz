import { useState, useEffect, useRef, useMemo, useId } from 'react'
import './nesteddropdown.styles.css'
import Icon from '@cdc/core/components/ui/Icon'
import { filterSearchTerm, NestedOptions, ValueTextPair } from './nestedDropdownHelpers'
import Loader from '../Loader'

const Options: React.FC<{
  subOptions: ValueTextPair[]
  handleBlur: React.FocusEventHandler<HTMLLIElement>
  filterIndex: number
  label: string
  handleSubGroupSelect: Function
  userSelectedLabel: string
  userSearchTerm: string
}> = ({ subOptions, handleBlur, filterIndex, label, handleSubGroupSelect, userSelectedLabel, userSearchTerm }) => {
  const [isTierOneExpanded, setIsTierOneExpanded] = useState(true)
  const checkMark = <>&#10004;</>

  useEffect(() => {
    setIsTierOneExpanded(userSearchTerm.length > 0 ? true : isTierOneExpanded)
  }, [userSearchTerm])

  const handleGroupClick = e => {
    const leaveExpanded = e.target.className === `selectable-item-${filterIndex}` ? true : !isTierOneExpanded
    setIsTierOneExpanded(leaveExpanded)
  }

  const handleKeyUp = e => {
    const currentItem = e.target
    if (e.key === 'ArrowRight') setIsTierOneExpanded(true)
    else if (e.key === 'ArrowLeft') {
      if (currentItem.className === `selectable-item-${filterIndex}`) currentItem.parentNode.parentNode.focus()
      setIsTierOneExpanded(false)
    } else if (e.key === 'Enter') {
      currentItem.className === `selectable-item-${filterIndex}`
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
        onBlur={handleBlur}
        onKeyUp={handleKeyUp}
        className={`nested-dropdown-group-${filterIndex}`}
      >
        <span className={'font-weight-bold fw-bold'}>{label} </span>
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
                className={`selectable-item-${filterIndex}`}
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
  filterIndex: number
  listLabel: string
  handleSelectedItems: ([group, subgroup]: [string, string]) => void
  options: NestedOptions
  loading?: boolean
}

const NestedDropdown: React.FC<NestedDropdownProps> = ({
  options,
  activeGroup,
  activeSubGroup,
  filterIndex,
  listLabel,
  handleSelectedItems,
  loading
}) => {
  const dropdownId = useId()

  const [userSearchTerm, setUserSearchTerm] = useState(null)

  const inputValue = useMemo(() => {
    // value from props
    return activeSubGroup ? `${activeGroup} - ${activeSubGroup}` : ''
  }, [activeGroup, activeSubGroup])
  const [inputHasFocus, setInputHasFocus] = useState(false)
  const [isListOpened, setIsListOpened] = useState(false)
  const nestedDropdownRef = useRef(null)
  const searchInput = useRef(null)
  const searchDropdown = useRef(null)

  const chooseSelectedSubGroup = (tierOne: string | number, tierTwo: string | number) => {
    searchInput.current.focus()
    setUserSearchTerm(null)
    setIsListOpened(false)
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
        } else if (className === `selectable-item-${filterIndex}`) {
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
        } else if (className === `selectable-item-${filterIndex}`) {
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
    return filterSearchTerm(userSearchTerm || '', options)
  }, [userSearchTerm, options])

  const handleSearchTermChange = e => {
    const newSearchTerm = e.target.value
    setIsListOpened(true)
    setUserSearchTerm(newSearchTerm)
  }

  const handleOnBlur = (e: React.FocusEvent<HTMLLIElement, Element>): void => {
    if (
      e.relatedTarget === null ||
      ![
        `nested-dropdown-${filterIndex}`,
        `nested-dropdown-group-${filterIndex}`,
        `selectable-item-${filterIndex}`,
        `main-nested-dropdown-container-${filterIndex}`
      ].includes(e.relatedTarget.className)
    ) {
      setInputHasFocus(false)
      setIsListOpened(false)
    } else {
      ; (e.relatedTarget as HTMLElement).focus()
    }
  }

  function handleBlur(nestedDropdown, handleOnBlur) {
    nestedDropdown?.addEventListener('blur', handleOnBlur)
  }
  handleBlur(searchInput.current, e => handleOnBlur(e))
  handleBlur(searchDropdown.current, e => handleOnBlur(e))

  return (
    <>
      <div
        id={dropdownId}
        ref={nestedDropdownRef}
        className={`nested-dropdown nested-dropdown-${filterIndex} ${isListOpened ? 'open-filter' : ''}`}
        onKeyUp={handleKeyUp}
      >
        <div
          className={`nested-dropdown-input-container${loading || !options?.length ? ' disabled' : ''}`}
          aria-label='searchInput'
          aria-disabled={loading}
          role='textbox'
        >
          <input
            id={`nested-dropdown-${filterIndex}`}
            className='search-input'
            ref={searchInput}
            aria-label='searchInput'
            aria-haspopup='true'
            aria-hidden='false'
            tabIndex={0}
            value={userSearchTerm !== null ? userSearchTerm : inputValue}
            onChange={handleSearchTermChange}
            placeholder={loading ? 'Loading...' : '- Select -'}
            disabled={loading || !options?.length}
            onClick={() => {
              if (inputHasFocus) setIsListOpened(!isListOpened)
            }}
            onFocus={() => setInputHasFocus(true)}
          />
          <span className='list-arrow' aria-hidden={true}>
            {isListOpened ? (
              <Icon display='caretUp' alt='arrow pointing up' />
            ) : (
              <Icon display='caretDown' alt='arrow pointing down' />
            )}
          </span>
        </div>
        {loading && <Loader spinnerType={'text-secondary'} />}
        <ul
          role='tree'
          key={listLabel}
          tabIndex={-1}
          aria-labelledby='main-nested-dropdown'
          aria-expanded={isListOpened}
          ref={searchDropdown}
          className={`main-nested-dropdown-container-${filterIndex}${isListOpened ? '' : ' hide'}`}
        >
          {filterOptions.length
            ? filterOptions.map(([group, subgroup], index) => {
              const [groupValue, groupText] = group
              const groupTextValue = String(groupText || groupValue)
              return (
                <Options
                  key={groupTextValue + '_' + index}
                  handleBlur={handleOnBlur}
                  subOptions={subgroup}
                  filterIndex={filterIndex}
                  label={groupTextValue}
                  handleSubGroupSelect={subGroupValue => {
                    chooseSelectedSubGroup(groupValue, subGroupValue)
                  }}
                  userSelectedLabel={activeGroup + activeSubGroup}
                  userSearchTerm={userSearchTerm || ''}
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
