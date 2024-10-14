import './sort-icon.css'

const UpIcon = ({ active }) => (
  <svg className={'up' + (active ? ' active' : '')} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 5'>
    <path d='M0 5l5-5 5 5z' />
  </svg>
)
const DownIcon = ({ active }) => (
  <svg className={'down' + (active ? ' active' : '')} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 5'>
    <path d='M0 0l5 5 5-5z' />
  </svg>
)

type SortIconProps = {
  ascending?: boolean
}

export const SortIcon: React.FC<SortIconProps> = ({ ascending }) => {
  return (
    <span role='button' className={'sort-icon'}>
      <UpIcon active={ascending === true} />
      <DownIcon active={ascending === false} />
    </span>
  )
}
