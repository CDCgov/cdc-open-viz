import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react'

export type CopiedDashboardWidget = {
  sourceWidgetKey: string
  label: string
}

type DashboardCopyPasteContextValue = {
  copiedWidget?: CopiedDashboardWidget
  copyWidget: (widget: CopiedDashboardWidget) => void
  clearCopiedWidget: () => void
}

const initialContext: DashboardCopyPasteContextValue = {
  copyWidget: () => {},
  clearCopiedWidget: () => {}
}

export const DashboardCopyPasteContext = createContext<DashboardCopyPasteContextValue>(initialContext)

export const DashboardCopyPasteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [copiedWidget, setCopiedWidget] = useState<CopiedDashboardWidget | undefined>()
  const clearCopiedWidget = useCallback(() => setCopiedWidget(undefined), [])

  useEffect(() => {
    if (!copiedWidget) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        clearCopiedWidget()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [clearCopiedWidget, copiedWidget])

  const value = useMemo(
    () => ({
      copiedWidget,
      copyWidget: setCopiedWidget,
      clearCopiedWidget
    }),
    [clearCopiedWidget, copiedWidget]
  )

  return <DashboardCopyPasteContext.Provider value={value}>{children}</DashboardCopyPasteContext.Provider>
}
