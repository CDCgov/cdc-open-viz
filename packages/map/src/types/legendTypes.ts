export type LegendItem = {
    special?: boolean
    value: string | number
    label?: string
    color?: string
    min?: number
    max?: number
    bin?: number
}

export type GeneratedLegend = {
    fromHash: number
    runtimeDataHash: number
    items: LegendItem[] | []
}

export interface LegendState {
    newLegendMemo: Map<string, number>
    newLegendSpecialClassLastMemo: Map<string, number>
    dataSet: any[]
    result: GeneratedLegend
    legendNumber: number
    specialClasses: number
    specialClassesHash: Record<string, boolean>
}

export interface LegendConfig {
    legend: {
        unified?: boolean
        numberOfItems: number
        separateZero?: boolean
        type: 'category' | 'equalnumber' | 'equalinterval'
        specialClasses: Array<{ key: string; value: string; label: string }> | []
        additionalCategories?: any[]
        categoryValuesOrder?: any[]
    }
    columns: {
        primary: { name: string; roundToPlace?: number }
        geo: { name: string }
        categorical?: { name: string }
    }
    general: {
        type: string
        equalNumberOptIn?: boolean
        geoType?: string
    }
    color: string
    data: any[]
    runtime?: any
}

export interface ValidationInputs {
    configObj: LegendConfig
    runtimeData: object[]
    hash: string
    legendMemo: React.MutableRefObject<Map<string, number>>
    legendSpecialClassLastMemo: React.MutableRefObject<Map<string, number>>
}