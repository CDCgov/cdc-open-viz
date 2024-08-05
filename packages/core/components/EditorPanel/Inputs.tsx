import { memo, useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'

export type Input = {
  label: string
  tooltip?: any
  section?: any
  placeholder?: string
  subsection?: any
  updateField?: Function
  fieldName?: string
  display?: boolean
}

export type TextFieldProps = {
  className?: string
  value: string | number
  type?: 'text' | 'number' | 'textarea' | 'date'
  min?: number
  max?: number
  i?: number
  id?: string
} & Input

export type CheckboxProps = {
  value?: boolean
  min?: number
  i?: number
  className?: string
} & Input

export type SelectProps = {
  value?: string
  options?: string[]
  required?: boolean
  initial?: string

  // all other props
  [x: string]: any
} & Input

const TextField = memo((props: TextFieldProps) => {
  const { display = true, label, tooltip, section = null, subsection = null, fieldName, updateField, value: stateValue, type = 'text', i = null, min = null, ...attributes } = props
  const [value, setValue] = useState(stateValue)
  const [debouncedValue] = useDebounce(value, 500)

  useEffect(() => {
    if ('string' === typeof debouncedValue && stateValue !== debouncedValue) {
      updateField(section, subsection, fieldName, debouncedValue, i)
    }
  }, [debouncedValue])

  let name = subsection ? `${section}-${subsection}-${fieldName}` : `${section}-${subsection}-${fieldName}`

  const onChange = e => {
    if ('number' !== type || min === null) {
      setValue(e.target.value)
    } else {
      if (!e.target.value || min <= parseFloat(e.target.value)) {
        setValue(e.target.value)
      } else {
        setValue(min.toString())
      }
    }
  }

  let formElement = <input type='text' name={name} onChange={onChange} {...attributes} value={value} />

  if ('textarea' === type) {
    formElement = <textarea name={name} onChange={onChange} {...attributes} value={value}></textarea>
  }

  if ('number' === type) {
    formElement = <input type='number' name={name} onChange={onChange} {...attributes} value={value} />
  }

  if ('date' === type) {
    formElement = <input type='date' name={name} onChange={onChange} {...attributes} value={value} />
  }
  if (!display) {
    return <></>
  }

  return (
    <label>
      <span className='edit-label column-heading'>
        {label}
        {tooltip}
      </span>
      {formElement}
    </label>
  )
})

const CheckBox = memo((props: CheckboxProps) => {
  const { display = true, label, value, fieldName, section = null, subsection = null, tooltip, updateField, ...attributes } = props
  if (!display) {
    return <></>
  }
  return (
    <label className='checkbox column-heading'>
      <input
        type='checkbox'
        name={fieldName}
        checked={value}
        onChange={e => {
          updateField(section, subsection, fieldName, !value)
        }}
        {...attributes}
      />
      <span className='edit-label'>
        {label}
        {tooltip}
      </span>
    </label>
  )
})

const Select = memo((props: SelectProps) => {
  const { display = true, label, value, options, fieldName, section = null, subsection = null, required = false, tooltip, updateField, initial: initialValue, ...attributes } = props
  let optionsJsx = options.map((optionName, index) => (
    <option value={optionName} key={index}>
      {optionName}
    </option>
  ))

  if (initialValue) {
    optionsJsx.unshift(
      <option value='' key='initial'>
        {initialValue}
      </option>
    )
  }
  if (!display) {
    return <></>
  }

  return (
    <label>
      <span className='edit-label'>
        {label}
        {tooltip}
      </span>
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
})

export { Select, CheckBox, TextField }
