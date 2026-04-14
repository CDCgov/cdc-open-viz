import React from 'react'
import { CheckBox, TextField } from './Inputs'
import { UpdateFieldFunc } from '../../types/UpdateFieldFunc'
import { Column } from '../../types/Column'

type DownloadUrlControlsProps = {
  hasUrlBackedDataSource: boolean
  showDownloadUrl?: boolean
  downloadUrlLabel?: string
  updateField: UpdateFieldFunc<string | boolean | string[] | number | Record<string, Partial<Column>>>
}

const DownloadUrlControls: React.FC<DownloadUrlControlsProps> = ({
  hasUrlBackedDataSource,
  showDownloadUrl,
  downloadUrlLabel,
  updateField
}) => {
  if (!hasUrlBackedDataSource) return null

  return (
    <>
      <CheckBox
        value={showDownloadUrl}
        fieldName='showDownloadUrl'
        label='Show URL to Automatically Updated Data'
        section='table'
        updateField={updateField}
      />
      {showDownloadUrl && (
        <div className='ms-4 mt-2' style={{ maxWidth: 'calc(100% - 1.5rem)' }}>
          <TextField
            value={downloadUrlLabel}
            section='table'
            fieldName='downloadUrlLabel'
            label='Dataset Link Text'
            placeholder='Link to Dataset'
            updateField={updateField}
          />
        </div>
      )}
    </>
  )
}

export default DownloadUrlControls
