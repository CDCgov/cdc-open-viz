import '../../styles/v2/components/input/index.scss'

interface InputProps {
  label?
  value?
  options: string[] | { [key: string]: string }
  fieldName
  section?
  subsection?
  required?
  updateField
  initial?
}

const InputSelect = ({ label, value, options, fieldName, section = null, subsection = null, required = false, updateField, initial: initialValue, ...attributes }: InputProps) => {
  let optionsJsx = []

  if (Array.isArray(options)) {
    //Handle basic array
    optionsJsx = options.map(optionName => (
      <option value={optionName} key={optionName}>
        {optionName}
      </option>
    ))
  } else {
    //Handle object with value/name pairs
    optionsJsx = []
    for (const [optionValue, optionName] of Object.entries(options)) {
      optionsJsx.push(
        <option value={optionValue} key={optionValue}>
          {optionName}
        </option>
      )
    }
  }

  if (initialValue) {
    optionsJsx.unshift(
      <option value='' key='initial'>
        {initialValue}
      </option>
    )
  }

  return (
    <label style={{ width: '100%', display: 'block' }}>
      {label && <span className='edit-label cove-input__label'>{label}</span>}
      <select
        className={required && !value ? 'warning' : ''}
        name={fieldName}
        value={value}
        onChange={event => {
          updateField(section, subsection, fieldName, event.target.value)
        }}
        {...attributes}
      >
        {optionsJsx}
      </select>
    </label>
  )
}

export default InputSelect
