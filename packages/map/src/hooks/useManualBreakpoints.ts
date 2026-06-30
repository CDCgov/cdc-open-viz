import { useState, useEffect, useMemo } from 'react'
import { formatBreakpointInputs, parseBreakpointInputValue } from '../helpers/breakpointHelpers'
import type { DataRow } from '../types/MapConfig'

type UseManualBreakpointsOptions = {
  breakpoints: number[] | undefined
  primaryColumnName: string
  data: DataRow[] | undefined
  onCommit: (value: string) => void
}

export type BreakpointAnalysis = {
  dataMin: number | undefined
  dataMax: number | undefined
  duplicateValues: number[]
  hasEmptyRows: boolean
  hasInvalidRows: boolean
  sortedValues: number[]
}

export const useManualBreakpoints = ({
  breakpoints,
  primaryColumnName,
  data,
  onCommit
}: UseManualBreakpointsOptions) => {
  const [inputs, setInputs] = useState<string[]>(() => formatBreakpointInputs(breakpoints))

  useEffect(() => {
    setInputs(formatBreakpointInputs(breakpoints))
  }, [breakpoints])

  const analysis = useMemo<BreakpointAnalysis>(() => {
    const validValues: number[] = []
    for (const inputValue of inputs) {
      const parsedValue = parseBreakpointInputValue(inputValue)
      if (parsedValue !== null) validValues.push(parsedValue)
    }

    const sortedValues = validValues.toSorted((a, b) => a - b)
    const duplicateValues = sortedValues.filter((value, index) => index > 0 && value === sortedValues[index - 1])
    const hasEmptyRows = inputs.some(value => value.trim() === '')
    const hasInvalidRows = inputs.some(value => value.trim() !== '' && parseBreakpointInputValue(value) === null)

    const numericData: number[] = []
    for (const row of data || []) {
      const value = row?.[primaryColumnName]
      if (typeof value === 'number' && Number.isFinite(value)) numericData.push(value)
    }
    numericData.sort((a, b) => a - b)

    return {
      dataMin: numericData[0],
      dataMax: numericData[numericData.length - 1],
      duplicateValues,
      hasEmptyRows,
      hasInvalidRows,
      sortedValues
    }
  }, [primaryColumnName, data, inputs])

  const items = useMemo(() => inputs.map((value, index) => ({ value, index })), [inputs])

  const commit = (nextInputs: string[]) => {
    const normalizedInputs = nextInputs.length ? nextInputs : ['']
    setInputs(normalizedInputs)
    onCommit(normalizedInputs.join(','))
  }

  const update = (index: number, value: string) => {
    setInputs(current => current.map((item, itemIndex) => (itemIndex === index ? value : item)))
  }

  const add = () => {
    setInputs(current => [...current, ''])
  }

  const remove = (index: number) => {
    commit(inputs.filter((_, itemIndex) => itemIndex !== index))
  }

  const clear = () => {
    commit([''])
  }

  return { inputs, items, analysis, commit, update, add, remove, clear }
}
