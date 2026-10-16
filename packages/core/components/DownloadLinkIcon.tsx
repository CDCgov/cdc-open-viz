import React from 'react'

import downloadDataIcon from '../assets/icon-download-data.svg?raw'
import downloadImageIcon from '../assets/icon-download-image.svg?raw'
import linkDatasetIcon from '../assets/icon-link-dataset.svg?raw'

type DownloadLinkIconType = 'data' | 'dataset' | 'image'

type DownloadLinkIconProps = {
  type: DownloadLinkIconType
}

type DownloadLinkContentProps = DownloadLinkIconProps & {
  children: React.ReactNode
}

export const DownloadLinkIcon = ({ type }: DownloadLinkIconProps) => {
  const icons = {
    data: downloadDataIcon,
    dataset: linkDatasetIcon,
    image: downloadImageIcon
  }

  const iconMarkup = icons[type]
    .trim()
    .replace(
      '<svg',
      `<svg aria-hidden="true" focusable="false" class="cove-download-link-icon cove-download-link-icon--${type}"`
    )

  return <span aria-hidden='true' dangerouslySetInnerHTML={{ __html: iconMarkup }} />
}

export const DownloadLinkContent = ({ children, type }: DownloadLinkContentProps) => (
  <span className='cove-download-link-content'>
    <DownloadLinkIcon type={type} />
    <span>{children}</span>
  </span>
)
