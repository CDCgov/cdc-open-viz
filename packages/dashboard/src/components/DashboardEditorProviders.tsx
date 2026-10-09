import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DashboardCopyPasteProvider } from '../DashboardCopyPasteContext'

const DashboardEditorProviders = ({ children }: { children: React.ReactNode }) => (
  <DashboardCopyPasteProvider>
    <DndProvider backend={HTML5Backend}>{children}</DndProvider>
  </DashboardCopyPasteProvider>
)

export default DashboardEditorProviders
