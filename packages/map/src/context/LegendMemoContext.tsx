import React, { createContext, useContext } from 'react'

interface LegendMemoContextType {
  legendMemo: React.RefObject<Map<any, any>>
  legendSpecialClassLastMemo: React.RefObject<Map<any, any>>
}

const LegendMemoContext = createContext<LegendMemoContextType | null>(null)

export const LegendMemoProvider: React.FC<{
  children: React.ReactNode
  legendMemo: React.RefObject<Map<any, any>>
  legendSpecialClassLastMemo: React.RefObject<Map<any, any>>
}> = ({ children, legendMemo, legendSpecialClassLastMemo }) => {
  return (
    <LegendMemoContext.Provider value={{ legendMemo, legendSpecialClassLastMemo }}>
      {children}
    </LegendMemoContext.Provider>
  )
}

export const useLegendMemoContext = () => {
  const context = useContext(LegendMemoContext)
  if (!context) {
    throw new Error('useLegendMemoContext must be used within a LegendMemoProvider')
  }
  return context
}

export default LegendMemoContext
