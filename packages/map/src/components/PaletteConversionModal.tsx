import React from 'react'
import Button from '@cdc/core/components/elements/Button'

interface PaletteConversionModalProps {
  onConfirm: () => void
  onCancel: () => void
  onReturnToV1: () => void
  paletteName?: string
}

const PaletteConversionModal: React.FC<PaletteConversionModalProps> = ({
  onConfirm,
  onCancel,
  onReturnToV1,
  paletteName
}) => {
  return (
    <div className="modal-overlay" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999
    }}>
      <div className="modal-content" style={{
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        maxWidth: '500px',
        margin: '20px'
      }}>
        <div className="modal-header" style={{
          padding: '20px 20px 0 20px',
          borderBottom: '1px solid #e0e0e0'
        }}>
          <h3 style={{ margin: '0 0 20px 0' }}>Color Palette Conversion</h3>
        </div>

        <div className="modal-body" style={{ padding: '20px' }}>
          <p>
            <strong>Your visualization uses an outdated color palette and will be updated to a new, improved palette.</strong>
          </p>
          <br />
          <p>
            These new palettes provide improved accessibility and consistency across visualizations. If your previous colors are important for approvals, do not save your visualizations with the new palette.
          </p>
          <br />
        </div>

        <div className="modal-footer" style={{
          padding: '20px',
          borderTop: '1px solid #e0e0e0',
          display: 'flex',
          gap: '10px',
          justifyContent: 'flex-end'
        }}>
          <Button
            secondary
            onClick={onReturnToV1}
            style={{ marginRight: 'auto' }}
          >
            Cancel
          </Button>
          <Button
            onClick={onConfirm}
          >
            Convert to New Palette
          </Button>
        </div>
      </div>
    </div>
  )
}

export default PaletteConversionModal