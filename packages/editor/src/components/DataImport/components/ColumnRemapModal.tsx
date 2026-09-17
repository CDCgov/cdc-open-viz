import React from 'react'

import Button from '@cdc/core/components/elements/Button'
import { getSafeColumnTargets, type ColumnMapping, type ColumnRemapConflict } from '../helpers/columnRemap'

type Props = {
  isShown: boolean
  status: 'mapping' | 'blocked'
  rawRequiredColumns: string[]
  rawAvailableColumns: string[]
  rawMapping: ColumnMapping
  transformedRequiredColumns: string[]
  transformedAvailableColumns: string[]
  transformedMapping: ColumnMapping
  replacementCount?: number
  canApply: boolean
  conflicts: ColumnRemapConflict[]
  onRawMappingChange: (mapping: ColumnMapping) => void
  onTransformedMappingChange: (mapping: ColumnMapping) => void
  onApply: () => void
  onCancel: () => void
}

type MappingFieldsProps = {
  requiredColumns: string[]
  availableColumns: string[]
  mapping: ColumnMapping
  onChange: (mapping: ColumnMapping) => void
}

const MappingFields = ({ requiredColumns, availableColumns, mapping, onChange }: MappingFieldsProps) => {
  const usedTargets = new Set(Object.values(mapping))
  const safeAvailableColumns = getSafeColumnTargets(availableColumns)
  return requiredColumns.map(source => (
    <label className='column-remap-field' key={source}>
      <span>{source}</span>
      <select
        aria-label={`Replacement for ${source}`}
        value={mapping[source] || ''}
        onChange={event => onChange({ ...mapping, [source]: event.target.value })}
      >
        <option value=''>Select a new column</option>
        {safeAvailableColumns
          .filter(target => target === mapping[source] || !usedTargets.has(target))
          .map(target => (
            <option value={target} key={target}>
              {target}
            </option>
          ))}
      </select>
    </label>
  ))
}

const ColumnRemapModal = ({
  isShown,
  status,
  rawRequiredColumns,
  rawAvailableColumns,
  rawMapping,
  transformedRequiredColumns,
  transformedAvailableColumns,
  transformedMapping,
  replacementCount,
  canApply,
  conflicts,
  onRawMappingChange,
  onTransformedMappingChange,
  onApply,
  onCancel
}: Props) => {
  if (!isShown) return null

  const isBlocked = status === 'blocked'
  const applyLabel = 'Apply & replace data'

  const content = (
    <div className='column-remap-modal'>
      {isBlocked ? (
        <>
          <p>The data could not be replaced because the column changes are ambiguous or unsafe.</p>
          <ul className='column-remap-conflicts'>
            {conflicts.map((conflict, index) => (
              <li key={`${conflict.kind}-${conflict.column || index}`}>{conflict.message}</li>
            ))}
          </ul>
        </>
      ) : (
        <>
          <p>Map each referenced column removed from the replacement data.</p>
          {rawRequiredColumns.length > 0 && (
            <section className='column-remap-section' aria-labelledby='raw-column-remap-heading'>
              <h3 id='raw-column-remap-heading'>Data columns</h3>
              <MappingFields
                requiredColumns={rawRequiredColumns}
                availableColumns={rawAvailableColumns}
                mapping={rawMapping}
                onChange={onRawMappingChange}
              />
            </section>
          )}
          {transformedRequiredColumns.length > 0 && (
            <section className='column-remap-section' aria-labelledby='generated-column-remap-heading'>
              <h3 id='generated-column-remap-heading'>Generated columns</h3>
              <p>The data transformation also changed referenced generated columns.</p>
              <MappingFields
                requiredColumns={transformedRequiredColumns}
                availableColumns={transformedAvailableColumns}
                mapping={transformedMapping}
                onChange={onTransformedMappingChange}
              />
            </section>
          )}
          {conflicts.length > 0 && (
            <ul className='column-remap-conflicts'>
              {conflicts.map((conflict, index) => (
                <li key={`${conflict.kind}-${conflict.column || index}`}>{conflict.message}</li>
              ))}
            </ul>
          )}
          {!canApply && conflicts.length === 0 && (
            <p className='column-remap-guidance'>Select a replacement for every removed column to enable Apply.</p>
          )}
          {replacementCount !== undefined && (
            <p className='column-remap-count'>
              <strong>{replacementCount}</strong> configuration {replacementCount === 1 ? 'reference' : 'references'}{' '}
              will be replaced.
            </p>
          )}
        </>
      )}

      <div className='column-remap-actions'>
        <Button variant='secondary' type='button' onClick={onCancel}>
          Cancel
        </Button>
        {!isBlocked && (
          <Button variant='primary' type='button' disabled={!canApply} onClick={onApply}>
            {applyLabel}
          </Button>
        )}
      </div>
    </div>
  )

  return (
    <>
      <div className='column-remap-backdrop' onClick={onCancel} />
      <div className='column-remap-wrapper' role='dialog' aria-modal='true' aria-labelledby='column-remap-title'>
        <div className='column-remap-dialog'>
          <div className='column-remap-header'>
            <h2 id='column-remap-title'>Remap Changed Columns</h2>
            <button type='button' aria-label='Cancel column remapping' onClick={onCancel}>
              &times;
            </button>
          </div>
          {content}
        </div>
      </div>
    </>
  )
}

export default ColumnRemapModal
