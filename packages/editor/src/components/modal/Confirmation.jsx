import React from 'react'

export const ConfirmationModal = props => {
  return (
    <>
      <p className='message'>{props.message}</p>
      <div className='confirmation-buttons'>
        <button type='button' className='btn btn-inline' onClick={props.onCancel}>
          No
        </button>
        <button type='button' className='btn btn-inline' onClick={props.onConfirm}>
          Yes
        </button>
      </div>
    </>
  )
}
