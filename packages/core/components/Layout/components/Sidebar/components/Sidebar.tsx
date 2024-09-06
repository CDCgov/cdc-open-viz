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

  const getSectionClasses = () => {
    const sectionClasses = ['editor-panel', 'cove', 'sidebar']
    if (!displayPanel) sectionClasses.push('hidden')
    if (isDashboard) sectionClasses.push('dashboard')
    return sectionClasses.join(' ')
  }

  const getButtonClasses = () => {
    const buttonClasses = []
    if (displayPanel) buttonClasses.push('editor-panel__toggle')
    if (!displayPanel) buttonClasses.push('collapsed', 'editor-panel__toggle')
    return buttonClasses.join(' ')
  }

  const getTitleClasses = () => {
    const titleClasses = ['editor-panel__title']
    if (!displayPanel) titleClasses.push('collapsed')
    return titleClasses.join(' ')
  }

  return (
    <>
      {/* mimic the editor panel title to keep the button visible. */}
      <section className='editor-panel__toggle-wrapper p-absolute' style={{ height: '49.75px', width: '350px' }}>
        <button className={getButtonClasses()} title={displayPanel ? `Collapse Editor` : `Expand Editor`} onClick={onBackClick}></button>
      </section>
      <section className={getSectionClasses()}>
        <h2 className={getTitleClasses()}>{title}</h2>
        <section className='form-container' data-html2canvas-ignore>
          {children}
        </section>
      </section>
    </>
  )
}

export default Sidebar
