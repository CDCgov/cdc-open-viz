import React, { createContext, useContext } from 'react'

interface LegendMemoContextType {
  legendMemo: React.RefObject<Map<any, any>>
  legendSpecialClassLastMemo: React.RefObject<Map<any, any>>
  bubbleLegendMemo: React.RefObject<Map<any, any>>
  bubbleLegendSpecialClassLastMemo: React.RefObject<Map<any, any>>
  getBubbleLegendMemo: (index?: number) => React.MutableRefObject<Map<any, any>>
  getBubbleLegendSpecialClassLastMemo: (index?: number) => React.MutableRefObject<Map<any, any>>
}

const LegendMemoContext = createContext<LegendMemoContextType | null>(null)

export const LegendMemoProvider: React.FC<{
  children: React.ReactNode
  legendMemo: React.RefObject<Map<any, any>>
  legendSpecialClassLastMemo: React.RefObject<Map<any, any>>
  bubbleLegendMemo: React.RefObject<Map<any, any>>
  bubbleLegendSpecialClassLastMemo: React.RefObject<Map<any, any>>
  getBubbleLegendMemo: (index?: number) => React.MutableRefObject<Map<any, any>>
  getBubbleLegendSpecialClassLastMemo: (index?: number) => React.MutableRefObject<Map<any, any>>
}> = ({
  children,
  legendMemo,
  legendSpecialClassLastMemo,
  bubbleLegendMemo,
  bubbleLegendSpecialClassLastMemo,
  getBubbleLegendMemo,
  getBubbleLegendSpecialClassLastMemo
}) => {
  return (
    <LegendMemoContext.Provider
      value={{
        legendMemo,
        legendSpecialClassLastMemo,
        bubbleLegendMemo,
        bubbleLegendSpecialClassLastMemo,
        getBubbleLegendMemo,
        getBubbleLegendSpecialClassLastMemo
      }}
    >
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
