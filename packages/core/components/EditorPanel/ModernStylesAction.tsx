import { useContext } from 'react'

import EditorContext from '@cdc/core/contexts/EditorContext'

type ModernStylesActionProps = {
  variant?: 'dashboard'
}

const ModernStylesAction = ({ variant }: ModernStylesActionProps) => {
  const { modernStylesAction } = useContext(EditorContext)
  if (!modernStylesAction) return null

  const className = `modern-styles-sidebar-action${variant ? ` modern-styles-sidebar-action--${variant}` : ''}`

  return (
    <div className={className}>
      <button className='modern-styles-sidebar-action__button' type='button' onClick={modernStylesAction.onClick}>
        <span className='modern-styles-sidebar-action__label'>{modernStylesAction.label}</span>
        <span className='modern-styles-sidebar-action__icon' aria-hidden='true'>
          &rarr;
        </span>
      </button>
    </div>
  )
}

export default ModernStylesAction
