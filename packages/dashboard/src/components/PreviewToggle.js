import React, { useContext, memo } from 'react'

const PreviewToggle = ({preview, setPreview}) => {
  return (
    <div className="editor-heading">
      <div className="toggle-bar">
        <button className={preview ? 'inactive' : 'active'} onClick={() => {setPreview(false)}}>Layout Editor</button>
        <button className={preview ? 'active' : 'inactive'} onClick={() => {setPreview(true)}}>Live Preview</button>
      </div>
    </div>
  )
}

export default PreviewToggle