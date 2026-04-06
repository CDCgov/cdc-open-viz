import Button from '@cdc/core/components/elements/Button'

type ExpandCollapseButtonsProps = {
  setAllExpanded: Function
}

const ExpandCollapseButtons: React.FC<ExpandCollapseButtonsProps> = ({ setAllExpanded }) => {
  return (
    <div className='d-block '>
      <div className='d-flex flex-row-reverse mb-2'>
        <Button variant='light' onClick={() => setAllExpanded(false)}>
          - Collapse All
        </Button>
        <Button variant='light' className='me-2' onClick={() => setAllExpanded(true)}>
          + Expand All
        </Button>
      </div>
    </div>
  )
}

export default ExpandCollapseButtons
