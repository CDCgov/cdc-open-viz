export type RuntimeLegend = {
    items: { disabled?: boolean; bin?: number; color?: string; special?: boolean; value?: any; label?: string; min?: number; max?: number }[]
    disabledAmt?: number
    fromHash?: number
    runtimeDataHash?: number
}
