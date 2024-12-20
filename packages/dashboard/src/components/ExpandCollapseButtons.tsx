type ExpandCollapseButtonsProps = {
  setAllExpanded: Function
}

const ExpandCollapseButtons: React.FC<ExpandCollapseButtonsProps> = ({ setAllExpanded }) => {
  return (
    <div className='d-block '>
      <div className='d-flex flex-row-reverse mb-2'>
        <button className='btn expand-collapse-buttons' onClick={() => setAllExpanded(false)}>
          - Collapse All
        </button>
        <button className='btn expand-collapse-buttons me-2' onClick={() => setAllExpanded(true)}>
          + Expand All
        </button>
      </div>
    </div>
  )
}

export default ExpandCollapseButtons
