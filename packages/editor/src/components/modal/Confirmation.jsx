import React from 'react'
import Button from '@cdc/core/components/elements/Button'

export const ConfirmationModal = props => {
  return (
    <>
      <p className='message'>{props.message}</p>
      <div className='confirmation-buttons'>
        <Button type='button' className='btn btn-inline' onClick={props.onCancel}>
          No
        </Button>
        <Button type='button' className='btn btn-inline' onClick={props.onConfirm}>
          Yes
        </Button>
      </div>
    </>
  )
}
