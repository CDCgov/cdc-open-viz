import Icon from '../ui/Icon'

type OpenControls = [Record<string, boolean>, Function] // useState type

type FieldSetProps = {
  fieldName: string
  fieldKey: string | number
  fieldType: string
  controls: OpenControls
  deleteField: Function
  children: React.ReactNode
  draggable?: boolean
}

const FieldSet: React.FC<FieldSetProps> = ({
  fieldName,
  fieldKey,
  fieldType,
  controls,
  deleteField,
  children,
  draggable = true
}) => {
  const [openControls, setOpenControls] = controls
  const show = openControls[fieldKey]
  const setShow = (key, value) => {
    setOpenControls({ ...openControls, [key]: value })
  }

  // Markup for non-draggable items
  if (!draggable) {
    if (!show)
      return (
        <div className='mb-1'>
          <button className='btn btn-light' onClick={() => setShow(fieldKey, true)}>
            <Icon display='caretDown' />
          </button>
          <span> {fieldName ? `${fieldName}` : 'New ' + fieldType}</span>
        </div>
      )
    return (
      <fieldset className='edit-block mb-1' key={fieldKey}>
        <div className='d-flex justify-content-between'>
          <button className='btn btn-light' onClick={() => setShow(fieldKey, false)}>
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

  // Draggable fieldset
  return (
    <div className='editor-field-item'>
      <div className='editor-field-item__header'>
        <Icon display='move' size={15} style={{ marginRight: '0.5rem' }} />
        <button className='btn btn-light' onClick={() => setShow(fieldKey, !show)}>
          <Icon display={show ? 'caretUp' : 'caretDown'} size={20} />
        </button>
        <span className='editor-field-item__name'>{fieldName ? `${fieldName}` : 'New ' + fieldType}</span>
      </div>
      {show && (
        <div className='editor-field-item__content'>
          <div className='editor-field-item__remove-wrapper'>
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
        </div>
      )}
    </div>
  )
}

export default FieldSet
