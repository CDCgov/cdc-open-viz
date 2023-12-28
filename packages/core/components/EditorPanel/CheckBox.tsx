interface CheckBoxProps {
  label: string
  onCheckChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  fieldName: string
  value: boolean
  tooltip?: React.ReactNode
  className?: string
}

const CheckBox: React.FC<CheckBoxProps> = ({ label, onCheckChange, fieldName, value, tooltip = null, ...attributes }) => (
  <label className='checkbox column-heading'>
    <input type='checkbox' name={fieldName} checked={value} onChange={onCheckChange} {...attributes} />
    <span className='edit-label'>
      {label}
      {tooltip}
    </span>
  </label>
)

export default CheckBox
