import { sanitizeToSvgId } from '@cdc/core/helpers/cove/string'

export const getChartPatternId = (patternKey: string): string => `chart-pattern-${sanitizeToSvgId(patternKey)}`
