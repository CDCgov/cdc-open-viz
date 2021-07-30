import React from 'react';

export const ConfirmationModal
 = (props) => {
	return (
		<>
            <p className="message">{props.message}</p>
            <div className="confirmation-buttons">
                <div className="btn btn-inline" onClick={props.onCancel}>No</div>
                <div className="btn btn-inline" onClick={props.onConfirm}>Yes</div>
            </div>
		</>
	);
};