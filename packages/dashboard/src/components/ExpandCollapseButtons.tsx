import Button from '@cdc/core/components/elements/Button'

type ExpandCollapseButtonsProps = {
  setAllExpanded: Function
}

const ExpandCollapseButtons: React.FC<ExpandCollapseButtonsProps> = ({ setAllExpanded }) => {
  return (
    <div className='d-block '>
      <div className='d-flex flex-row-reverse mb-2'>
        <Button className='btn expand-collapse-buttons' onClick={() => setAllExpanded(false)}>
          - Collapse All
        </Button>
        <Button className='btn expand-collapse-buttons me-2' onClick={() => setAllExpanded(true)}>
          + Expand All
        </Button>
      </div>
    </div>
  )
}

export default ExpandCollapseButtons
