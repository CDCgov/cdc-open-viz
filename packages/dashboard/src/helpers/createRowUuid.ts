export const createRowUuid = () => `row-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`
