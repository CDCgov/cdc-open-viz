export const getBridgedData = (stageKey: string, stageColumn: string, data: Record<string, any>[]) => {
  const allStages: string[] = Array.from(new Set(data.map(d => d?.[stageColumn]).filter(Boolean)))

  const stageIndex: number = allStages.indexOf(stageKey)
  if (stageIndex === -1) return []
  const currentStage = data.filter(d => d?.[stageColumn] === stageKey)
  const nextKey = allStages[stageIndex + 1]
  if (nextKey) {
    const nextSlice = data.filter(d => d[stageColumn] === nextKey)
    return [...currentStage, nextSlice[0]]
  }
  return currentStage
}
