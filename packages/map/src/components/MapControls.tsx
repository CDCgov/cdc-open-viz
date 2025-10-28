import React from 'react'
import MediaControls from '@cdc/core/components/MediaControls'
import { MapConfig } from '../types/MapConfig'

interface MapControlsProps {
  config: MapConfig
  imageId: string
  interactionLabel: string
}

const MapControls: React.FC<MapControlsProps> = ({ config, imageId, interactionLabel }) => {
  const { showDownloadImgButton, showDownloadPdfButton } = config.general

  if (!showDownloadImgButton && !showDownloadPdfButton) {
    return null
  }

  return (
    <MediaControls.Section classes={['download-buttons']}>
      {showDownloadImgButton && (
        <MediaControls.Button
          text='Download Image'
          title='Download Chart as Image'
          type='image'
          state={config}
          elementToCapture={imageId}
          interactionLabel={interactionLabel}
        />
      )}
      {showDownloadPdfButton && (
        <MediaControls.Button
          text='Download PDF'
          title='Download Chart as PDF'
          type='pdf'
          state={config}
          interactionLabel={interactionLabel}
          elementToCapture={imageId}
        />
      )}
    </MediaControls.Section>
  )
}

export default MapControls
