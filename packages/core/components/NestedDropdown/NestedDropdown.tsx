import { useState, useEffect, useRef, useMemo, useId, type FocusEvent } from 'react'
import './nesteddropdown.styles.css'
import Icon from '@cdc/core/components/ui/Icon'
import { filterSearchTerm, NestedOptions, ValueTextPair } from './nestedDropdownHelpers'
import Loader from '../Loader'
import { prepareSearchQuery, type PreparedSearchQuery } from '@cdc/core/helpers/cove/search'
import { ensureElementVisibleInScrollContainer } from '@cdc/core/helpers/cove/scroll'

const getSelectableItem = (target: EventTarget | null, filterIndex: number) =>
  target instanceof HTMLElement ? target.closest<HTMLElement>(`.selectable-item-${filterIndex}`) : null

const isSelectableItem = (target: EventTarget | null, filterIndex: number) => !!getSelectableItem(target, filterIndex)

const highlightMatches = (text: string | number, search: PreparedSearchQuery): React.ReactNode => {
  const label = String(text)
  const matches = search.getMatchRanges(label)
  if (!matches.length) return label

  const parts: React.ReactNode[] = []
  let lastIndex = 0
  matches.forEach((match, i) => {
    if (match.start > lastIndex) {
      parts.push(label.substring(lastIndex, match.start))
    }
    parts.push(
      <span className='nested-dropdown-option-highlight' key={i}>
        {label.substring(match.start, match.end)}
      </span>
    )
    lastIndex = match.end
  })
  if (lastIndex < label.length) {
    parts.push(label.substring(lastIndex))
  }

  return <>{parts}</>
}

const Options: React.FC<{
  subOptions: ValueTextPair[]
  filterIndex: number
  groupValue: string | number
  label: string
  search: PreparedSearchQuery
  handleSubGroupSelect: Function
  userSelectedLabel: string
  userSearchTerm: string
  focusDropdownItem: (element?: HTMLElement | null) => void
}> = ({
  subOptions,
  filterIndex,
  groupValue,
  label,
  search,
  handleSubGroupSelect,
  userSelectedLabel,
  userSearchTerm,
  focusDropdownItem
}) => {
  const [isTierOneExpanded, setIsTierOneExpanded] = useState(true)
  const checkMark = <>&#10004;</>

  useEffect(() => {
    setIsTierOneExpanded(userSearchTerm.length > 0 ? true : isTierOneExpanded)
  }, [userSearchTerm])

  const handleGroupClick = e => {
    const leaveExpanded = isSelectableItem(e.target, filterIndex) ? true : !isTierOneExpanded
    setIsTierOneExpanded(leaveExpanded)
  }

  const handleKeyUp = e => {
    const currentItem = e.target
    const selectableItem = getSelectableItem(currentItem, filterIndex)
    if (e.key === 'ArrowRight') setIsTierOneExpanded(true)
    else if (e.key === 'ArrowLeft') {
      if (selectableItem) focusDropdownItem(selectableItem.parentNode?.parentNode as HTMLElement | null)
      setIsTierOneExpanded(false)
    } else if (e.key === 'Enter') {
      selectableItem ? handleSubGroupSelect(selectableItem.dataset.value) : setIsTierOneExpanded(!isTierOneExpanded)
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
        className={`nested-dropdown-group-${filterIndex}`}
      >
        <span className='nested-dropdown-group-header nested-dropdown-group-header--sticky'>
          <span className='nested-dropdown-group-label'>{highlightMatches(label, search)} </span>
          <span className='list-arrow nested-dropdown-group-arrow' aria-hidden='true'>
            {isTierOneExpanded ? (
              <Icon display='caretFilledDown' alt='arrow pointing down' className='nested-dropdown-group-arrow-icon' />
            ) : (
              <Icon
                display='caretFilledDown'
                alt='arrow pointing right'
                className='nested-dropdown-group-arrow-icon nested-dropdown-group-arrow-icon--collapsed'
              />
            )}
          </span>
        </span>
        <ul
          aria-expanded={isTierOneExpanded}
          role='group'
          tabIndex={-1}
          aria-labelledby={label}
          className={isTierOneExpanded ? '' : 'hide'}
        >
          {subOptions.map(subGroup => {
            const [value, text, description] = subGroup
            const subGroupText = text || value
            const accessibleLabel = [label, subGroupText, description?.trim()].filter(Boolean).join(' ')

            const regionID = label + value
            const selectedID = String(groupValue) + String(value)
            const isSelected = selectedID === userSelectedLabel

            return (
              <li
                key={regionID}
                className={`selectable-item-${filterIndex}${
                  description?.trim() ? ' nested-dropdown-subgroup--with-description' : ''
                }`}
                tabIndex={0}
                role='treeitem'
                aria-label={accessibleLabel}
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

                <span className='nested-dropdown-subgroup-text'>{highlightMatches(subGroupText, search)}</span>
                {description?.trim() && (
                  <span className='nested-dropdown-subgroup-description'>{highlightMatches(description, search)}</span>
                )}
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
  displaySubgroupingOnly?: boolean
  filterIndex: number
  listLabel: string
  handleSelectedItems: ([group, subgroup]: [string, string]) => void
  options: NestedOptions
  loading?: boolean
  placeholder?: string
}

const NestedDropdown: React.FC<NestedDropdownProps> = ({
  options,
  activeGroup,
  activeSubGroup,
  displaySubgroupingOnly = false,
  filterIndex,
  listLabel,
  handleSelectedItems,
  loading,
  placeholder = '- Select -'
}) => {
  const dropdownId = useId()

  const [userSearchTerm, setUserSearchTerm] = useState(null)

  const selectedDisplayValues = useMemo(() => {
    const groupOption = options?.find(([[value]]) => String(value) === String(activeGroup))
    const groupDisplay = groupOption ? String(groupOption[0][1] || groupOption[0][0]) : activeGroup
    const subGroupOption = groupOption?.[1]?.find(([value]) => String(value) === String(activeSubGroup))
    const subGroupDisplay = subGroupOption ? String(subGroupOption[1] || subGroupOption[0]) : activeSubGroup

    return { groupDisplay, subGroupDisplay }
  }, [activeGroup, activeSubGroup, options])

  const inputValue = useMemo(() => {
    // value from props
    if (!activeSubGroup) return ''
    const { groupDisplay, subGroupDisplay } = selectedDisplayValues
    return displaySubgroupingOnly ? subGroupDisplay : `${groupDisplay} - ${subGroupDisplay}`
  }, [activeSubGroup, displaySubgroupingOnly, selectedDisplayValues])
  const inputPlaceholder = useMemo(() => {
    if (loading) return 'Loading...'
    return inputValue || placeholder
  }, [inputValue, loading, placeholder])
  const [isListOpened, setIsListOpened] = useState(false)
  const nestedDropdownRef = useRef<HTMLDivElement>(null)
  const searchInput = useRef<HTMLInputElement>(null)
  const searchDropdown = useRef<HTMLUListElement>(null)

  const getStickyHeaderOffset = (element?: HTMLElement | null) => {
    if (!element || !isSelectableItem(element, filterIndex)) return 0

    const group = element.closest(`.nested-dropdown-group-${filterIndex}`)
    const header = group?.querySelector<HTMLElement>('.nested-dropdown-group-header--sticky')

    return header?.getBoundingClientRect().height || 0
  }

  const getDropdownScrollTarget = (element: HTMLElement) => {
    if (element.classList.contains(`nested-dropdown-group-${filterIndex}`)) {
      return element.querySelector<HTMLElement>('.nested-dropdown-group-header--sticky') || element
    }

    return element
  }

  const scrollDropdownItemIntoView = (element: HTMLElement) => {
    if (!searchDropdown.current?.contains(element)) return

    const scrollTarget = getDropdownScrollTarget(element)
    ensureElementVisibleInScrollContainer(scrollTarget, searchDropdown.current, getStickyHeaderOffset(element))
  }

  const focusDropdownItem = (element?: HTMLElement | null) => {
    element?.focus({ preventScroll: true })

    if (element) {
      scrollDropdownItemIntoView(element)
      requestAnimationFrame(() => scrollDropdownItemIntoView(element))
    }
  }

  const resetDropdownInteraction = () => {
    setIsListOpened(false)
    setUserSearchTerm(null)
  }

  const replayInputInteraction = () => {
    setIsListOpened(true)
    setUserSearchTerm('')

    requestAnimationFrame(() => {
      searchInput.current?.setSelectionRange?.(0, 0)
    })
  }

  const chooseSelectedSubGroup = (tierOne: string | number, tierTwo: string | number) => {
    resetDropdownInteraction()
    handleSelectedItems([String(tierOne), String(tierTwo)])
    searchInput.current?.focus()
  }

  const handleKeyDown = e => {
    if (['ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
      e.preventDefault()
    }
  }

  const handleKeyUp = e => {
    const { nodeName, parentNode, nextSibling, lastChild, previousSibling } = e.target
    const Dropdown = searchDropdown.current
    switch (e.key) {
      case 'ArrowDown': {
        if (!Dropdown) break
        if (nodeName === 'INPUT') {
          setIsListOpened(true)
          // Move focus from Input to top of dropdown
          focusDropdownItem(Dropdown.firstElementChild as HTMLElement | null)
        } else if (isSelectableItem(e.target, filterIndex)) {
          // Move focus to next item on list: next Tier Two item or the next Tier One or SearchInput
          const itemToFocusOnAfterKeyUp = nextSibling ?? parentNode.parentNode.nextSibling ?? searchInput.current
          focusDropdownItem(itemToFocusOnAfterKeyUp as HTMLElement | null)
        } else if (lastChild.className === 'hide') {
          // If Tier One is collapsed, move to next Tier One or move focus back to the top Input
          const itemToFocusOnAfterKeyUp = nextSibling ?? searchInput.current
          focusDropdownItem(itemToFocusOnAfterKeyUp as HTMLElement | null)
        } else {
          // If Tier One is open, move focus to Tier Two
          focusDropdownItem(lastChild?.firstElementChild as HTMLElement | null)
        }
        break
      }

      case 'ArrowUp': {
        if (!Dropdown) break
        if (nodeName === 'INPUT') {
          setIsListOpened(true)
          const lastGroup = Dropdown.lastElementChild as HTMLElement | null
          const lastGroupChildren = lastGroup?.lastElementChild as HTMLElement | null

          if (lastGroupChildren?.className === 'hide') {
            // Move focus from Input textbox to the last collapsed Tier Two in dropdown
            focusDropdownItem(lastGroup)
          } else {
            // Move focus to last item of the last collapsed Tier Two in dropdown
            focusDropdownItem(lastGroupChildren?.lastElementChild as HTMLElement | null)
          }
        } else if (isSelectableItem(e.target, filterIndex)) {
          // Move focus to previous Tier Two or Move focus to current Tier One
          const itemToFocusOnAfterKeyUp = previousSibling ?? parentNode.parentNode
          focusDropdownItem(itemToFocusOnAfterKeyUp as HTMLElement | null)
        } else if (previousSibling) {
          // Move focus to previous collapsed Tier One or Move focus from Tier One to the last of the previous Tier Two's items
          const previousGroup = previousSibling as HTMLElement
          const previousGroupChildren = previousGroup.lastElementChild as HTMLElement | null
          const itemToFocusOnAfterKeyUp =
            previousGroupChildren?.className === 'hide' ? previousGroup : previousGroupChildren?.lastElementChild
          focusDropdownItem(itemToFocusOnAfterKeyUp as HTMLElement | null)
        } else {
          // Move focus from top of the dropdown to Input
          searchInput.current?.focus()
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
          resetDropdownInteraction()
          searchInput.current?.focus()
        }
        break
    }
  }

  const search = useMemo(() => prepareSearchQuery(userSearchTerm || ''), [userSearchTerm])

  const filterOptions = useMemo(() => {
    return filterSearchTerm(userSearchTerm || '', options)
  }, [userSearchTerm, options])

  const handleSearchTermChange = e => {
    const newSearchTerm = e.target.value
    setIsListOpened(true)
    setUserSearchTerm(newSearchTerm)
  }

  const handleInputFocus = () => {
    if (userSearchTerm === null) {
      setUserSearchTerm('')
      requestAnimationFrame(() => {
        searchInput.current?.setSelectionRange?.(0, 0)
      })
    }
  }

  const handleOnBlur = (e: FocusEvent<HTMLDivElement>): void => {
    const relatedTarget = e.relatedTarget as Node | null

    if (!relatedTarget || !nestedDropdownRef.current?.contains(relatedTarget)) {
      resetDropdownInteraction()
    }
  }

  const handleInputClick = () => {
    if (document.activeElement !== searchInput.current || loading || !options?.length) return

    replayInputInteraction()
  }

  return (
    <>
      <div
        id={dropdownId}
        ref={nestedDropdownRef}
        className={`nested-dropdown nested-dropdown-${filterIndex} ${isListOpened ? 'open-filter' : ''}`}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        onBlur={handleOnBlur}
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
            autoComplete='off'
            tabIndex={0}
            value={userSearchTerm !== null ? userSearchTerm : inputValue}
            onChange={handleSearchTermChange}
            placeholder={inputPlaceholder}
            disabled={loading || !options?.length}
            onClick={handleInputClick}
            onFocus={handleInputFocus}
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
                    subOptions={subgroup}
                    filterIndex={filterIndex}
                    groupValue={groupValue}
                    label={groupTextValue}
                    search={search}
                    handleSubGroupSelect={subGroupValue => {
                      chooseSelectedSubGroup(groupValue, subGroupValue)
                    }}
                    userSelectedLabel={activeGroup + activeSubGroup}
                    userSearchTerm={userSearchTerm || ''}
                    focusDropdownItem={focusDropdownItem}
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
