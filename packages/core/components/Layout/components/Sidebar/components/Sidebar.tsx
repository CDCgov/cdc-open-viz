import React from 'react'
import './sidebar.styles.scss'

type SidebarProps = {
  // whether or not the viz is within a dashboard
  isDashboard: boolean
  // show/hide the sidebar
  displayPanel: boolean
  // sidebarTitle
  title: string
  // inner content
  children: React.ReactNode
  // on arrow toggle
  onBackClick: () => void
}

const Sidebar: React.FC<SidebarProps> = props => {
  const { displayPanel = false, isDashboard = false, title = 'Configure Visualization', children, onBackClick } = props

  console.log('display panel?', displayPanel)
  const getSectionClasses = () => {
    const sectionClasses = ['editor-panel', 'cove', 'sidebar']
    if (!displayPanel) sectionClasses.push('hidden')
    if (isDashboard) sectionClasses.push('dashboard')
    return sectionClasses
  }

  const getButtonClasses = () => {
    const buttonClasses = []
    if (displayPanel) buttonClasses.push('editor-panel__toggle')
    if (!displayPanel) buttonClasses.push('collapsed', 'editor-panel__toggle')
    return buttonClasses
  }

  return (
    <>
      <button className={getButtonClasses().join(' ')} title={displayPanel ? `Collapse Editor` : `Expand Editor`} onClick={onBackClick}></button>
      <section className={getSectionClasses().join(' ')}>
        <h2 className='editor-panel__title'>{title}</h2>
        <section className='form-container' data-html2canvas-ignore>
          {children}
        </section>
      </section>
    </>
  )
}

export default Sidebar
