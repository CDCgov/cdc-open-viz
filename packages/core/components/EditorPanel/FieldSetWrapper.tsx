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

  return (
    <div className='filter-item'>
      <div className='filter-item__header'>
        <Icon display='move' size={15} style={{ marginRight: '0.5rem' }} />
        <button className='btn btn-light' onClick={() => setShow(fieldKey, !show)}>
          <Icon display={show ? 'caretUp' : 'caretDown'} size={20} />
        </button>
        <span className='filter-item__name'>{fieldName ? `${fieldName}` : 'New ' + fieldType}</span>
      </div>
      {show && (
        <div className='filter-item__content'>
          <div className='filter-item__remove-wrapper'>
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
