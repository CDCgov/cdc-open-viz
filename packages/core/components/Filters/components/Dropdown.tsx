import { VizFilter } from '../../../types/VizFilter'

export const DROPDOWN_STYLES = 'py-2 ps-2 w-100 d-block'

type DropdownProps = {
  index: number
  label: string
  filter: VizFilter
  changeFilterActive: (index: number, value: string) => void
}

const Dropdown: React.FC<DropdownProps> = ({ index: outerIndex, label, filter, changeFilterActive }) => {
  const { active, queuedActive } = filter

  return (
    <select
      id={`filter-${outerIndex}`}
      name={label}
      aria-label={`Filter by ${label}`}
      className={`cove-form-select ${DROPDOWN_STYLES}`}
      style={{ backgroundColor: 'white' }}
      data-index='0'
      value={queuedActive || active}
      onChange={e => {
        changeFilterActive(outerIndex, e.target.value)
      }}
    >
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
