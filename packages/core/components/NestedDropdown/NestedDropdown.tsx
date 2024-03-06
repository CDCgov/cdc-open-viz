import { useState, useEffect, useRef, useMemo } from 'react'
import './nesteddropdown.styles.css'
import Icon from '@cdc/core/components/ui/Icon'

const Options: React.FC<{
  currentOptions: (string | number)[]
  label: string
  handleSecondTierSelect: Function
  userSelectedTierTwoLabel: string
  userSearchTerm: string
}> = ({ currentOptions, label, handleSecondTierSelect, userSelectedTierTwoLabel, userSearchTerm }) => {
  const [isTierOneExpanded, setIsTierOneExpanded] = useState(true)

  const checkMark = <>&#10004;</>

  useEffect(() => {
    setIsTierOneExpanded(userSearchTerm.length > 0 ? true : isTierOneExpanded)
  }, [userSearchTerm])

  const handleGroupClick = e => {
    const leaveExpanded = e.target.className === 'selectable-item' ? true : !isTierOneExpanded
    setIsTierOneExpanded(leaveExpanded)
  }

  const handleSecondTierClick = (tierTwo: string | number) => {
    handleSecondTierSelect(tierTwo)
  }

  const handleKeyUp = e => {
    const currentItem = e.target
    if (e.key === 'ArrowRight') setIsTierOneExpanded(true)
    else if (e.key === 'ArrowLeft') {
      if (currentItem.className === 'selectable-item') currentItem.parentNode.parentNode.focus()
      setIsTierOneExpanded(false)
    } else if (e.key === 'Enter') {
      currentItem.className === 'selectable-item' ? handleSecondTierClick(currentItem.dataset.value) : setIsTierOneExpanded(!isTierOneExpanded)
    }
  }

  return (
    <>
      <li role='treeitem' key={label} tabIndex={0} aria-label={label} onClick={handleGroupClick} onKeyUp={handleKeyUp} className={`nested-dropdown-group${isTierOneExpanded ? '' : '-collapsed'}`}>
        <span id={label}>{label} </span>
        {
          <span className='list-arrow' aria-hidden='true'>
            {isTierOneExpanded ? <Icon display='caretFilledUp' /> : <Icon display='caretFilledDown' />}
          </span>
        }
        <ul aria-expanded={isTierOneExpanded} role='group' tabIndex={-1} aria-labelledby={label} className={isTierOneExpanded ? '' : ' hide'}>
          {currentOptions.map(tierTwo => {
            const regionID = label + tierTwo
            let isSelected = regionID === userSelectedTierTwoLabel
            return (
              <li
                key={regionID}
                className='selectable-item'
                tabIndex={0}
                role='treeitem'
                aria-label={regionID}
                aria-selected={isSelected}
                data-value={tierTwo}
                onClick={e => {
                  handleSecondTierClick(tierTwo)
                }}
              >
                {isSelected ? <span aria-hidden='true'>{checkMark}</span> : ''}

                {tierTwo}
              </li>
            )
          })}
        </ul>
      </li>
    </>
  )
}

interface NestedDropdownProps {
  data: Record<string, string | number>[]
  tiers: [string, string] // index 0  is the parent index 1 is the child
  listLabel: string
  handleSelectedItems: Function
}

const NestedDropdown: React.FC<NestedDropdownProps> = ({ data, tiers: [firstTierLabel, secondTierLabel], listLabel, handleSelectedItems }) => {
  const optsMemo: Record<string, (string | number)[]> = {}

  data.forEach(value => {
    const tierOne = value[firstTierLabel]
    const tierTwo = value[secondTierLabel]
    if (optsMemo[tierOne]) {
      optsMemo[tierOne].push(tierTwo)
    } else {
      optsMemo[tierOne] = [tierTwo]
    }
  })

  const [userSelectedTierTwoLabel, setUserSelectedTierTwoLabel] = useState(null)
  const [userSearchTerm, setUserSearchTerm] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [inputHasFocus, setInputHasFocus] = useState(false)
  const [isListOpened, setIsListOpened] = useState(false)

  const searchInput = useRef(null)
  const searchDropdown = useRef(null)

  const chooseSelectedSecondTier = (tierOne: string, tierTwo: string) => {
    searchInput.current.focus()
    const selectedItemValue = tierTwo
    setUserSelectedTierTwoLabel(tierOne + tierTwo)
    setUserSearchTerm('')
    setIsListOpened(false)
    setInputValue(selectedItemValue)
    handleSelectedItems(tierOne, tierTwo)
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
        } else if (className === 'nested-dropdown-group-collapsed') {
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
          if (Dropdown.lastChild.className === 'nested-dropdown-group-collapsed') {
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
          const itemToFocusOnAfterKeyUp = previousSibling.className === 'nested-dropdown-group-collapsed' ? previousSibling : previousSibling.lastChild.lastChild
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

  const filterOptions: Record<string, (string | number)[]> = useMemo(() => {
    if (!userSearchTerm) return optsMemo
    const newOptions: Record<string, (string | number)[]> = {}
    const newRegex = new RegExp(`^${userSearchTerm}`, 'i')
    for (const tierOne in optsMemo) {
      if (tierOne.match(newRegex)) {
        newOptions[tierOne] = [...optsMemo[tierOne]]
      } else {
        const newSecondTierOptions = optsMemo[tierOne].filter(tierTwo => String(tierTwo).match(newRegex))
        if (newSecondTierOptions.length > 0) {
          newOptions[tierOne] = newSecondTierOptions
        }
      }
    }
    return newOptions
  }, [userSearchTerm])

  const filterOptionsKeys = Object.keys(filterOptions)

  const handleSearchTermChange = e => {
    const newSearchTerm = e.target.value
    setIsListOpened(true)
    setUserSearchTerm(newSearchTerm)
    setInputValue(newSearchTerm)
  }

  return (
    <>
      <div id='nested-dropdown-container' className='nested-dropdown' onKeyUp={handleKeyUp}>
        <div className='nested-dropdown-input-container' aria-label='searchInput' role='textbox'>
          <input
            className='search-input'
            ref={searchInput}
            aria-label='searchInput'
            aria-haspopup='true'
            aria-hidden='false'
            tabIndex={0}
            value={inputValue}
            onChange={handleSearchTermChange}
            placeholder={'Select or type to search'}
            onClick={() => {
              if (inputHasFocus) setIsListOpened(!isListOpened)
            }}
            onFocus={() => setInputHasFocus(true)}
            onBlur={() => setInputHasFocus(false)}
          />
          <span className='list-arrow' aria-hidden={true}>
            {isListOpened ? <Icon display='caretFilledUp' /> : <Icon display='caretFilledDown' />}
          </span>
        </div>
        <ul role='tree' key={listLabel} tabIndex={-1} aria-labelledby='main-nested-dropdown' aria-expanded={isListOpened} ref={searchDropdown} className={`main-nested-dropdown-container ${isListOpened ? '' : 'hide'}`}>
          {filterOptions && filterOptionsKeys.length > 0
            ? filterOptionsKeys.map((tierOne: string) => {
                return (
                  <Options
                    currentOptions={filterOptions[tierOne]}
                    label={tierOne}
                    handleSecondTierSelect={(tierTwo: string) => {
                      chooseSelectedSecondTier(tierOne, tierTwo)
                    }}
                    userSelectedTierTwoLabel={userSelectedTierTwoLabel}
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
