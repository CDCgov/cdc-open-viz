import Icon from '../ui/Icon'

type OpenControls = [Record<string, boolean>, Function] // useState type

type FieldSetProps = {
  fieldName: string
  fieldKey: string | number
  fieldType: string
  controls: OpenControls
  deleteField: Function
  children: React.ReactNode
}

const FieldSet: React.FC<FieldSetProps> = ({ fieldName, fieldKey, fieldType, controls, deleteField, children }) => {
  const [openControls, setOpenControls] = controls
  const show = openControls[fieldKey]
  const setShow = (key, value) => {
    setOpenControls({ ...openControls, [key]: value })
  }

  if (!show)
    return (
      <div className='mb-1'>
        <button onClick={() => setShow(fieldKey, true)}>
          <Icon display='caretDown' />
        </button>
        <span> {fieldName ? `${fieldName}` : 'New ' + fieldType}</span>
      </div>
    )
  return (
    <fieldset className='edit-block mb-1' key={fieldKey}>
      <div className='d-flex justify-content-between'>
        <button onClick={() => setShow(fieldKey, false)}>
          <Icon display='caretUp' />
        </button>
        <button
          className='btn btn-danger btn-sm'
          onClick={event => {
            event.preventDefault()
            deleteField()
          }}
        >
          Remove
        </button>
      </div>
      {children}
    </fieldset>
  )
}

export default FieldSet
