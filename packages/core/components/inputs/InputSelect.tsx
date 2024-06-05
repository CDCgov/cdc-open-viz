import '../../styles/v2/components/input/index.scss'

interface InputProps {
  label?
  value?
  options: string[] | Record<string, any> | [any, string][]
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
    optionsJsx = options.map(option => {
      if (typeof option === 'string') {
        return (
          <option value={option} key={option}>
            {option}
          </option>
        )
      } else {
        const [value, name] = option
        return (
          <option value={value} key={name}>
            {name}
          </option>
        )
      }
    })
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
