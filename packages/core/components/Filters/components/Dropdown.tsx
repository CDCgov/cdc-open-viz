import { VizFilter } from '../../../types/VizFilter'

export const getDropdownStyles = (hasNote?: boolean) =>
  ['py-2', 'ps-2', 'd-block', 'w-100', hasNote ? 'filters-section__select--with-note' : '']
    .filter(Boolean)
    .join(' ')

type DropdownProps = {
  index: number
  label: string
  filter: VizFilter
  changeFilterActive: (index: number, value: string) => void
}

const Dropdown: React.FC<DropdownProps> = ({ index: outerIndex, label, filter, changeFilterActive }) => {
  const { active, queuedActive, resetLabel } = filter
  const dropdownStyles = getDropdownStyles(Boolean(filter.note?.trim()))

  return (
    <select
      id={`filter-${outerIndex}`}
      name={label}
      aria-label={`Filter by ${label}`}
      className={`cove-form-select ${dropdownStyles}`}
      style={{ backgroundColor: 'white' }}
      data-index='0'
      value={queuedActive || active}
      onChange={e => {
        changeFilterActive(outerIndex, e.target.value)
      }}
    >
      {resetLabel && (
        <option key='reset-option' value={resetLabel} aria-label={resetLabel}>
          {resetLabel}
        </option>
      )}
      {filter.values?.map((value, index) => {
        return (
          <option key={index} value={value} aria-label={value}>
            {filter.labels && filter.labels[value] ? filter.labels[value] : value}
          </option>
        )
      })}
    </select>
  )
}

export default Dropdown
