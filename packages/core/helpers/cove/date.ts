import { timeFormat, timeParse, timeFormatLocale, type TimeLocaleDefinition } from 'd3-time-format'
import { type Axis } from '@cdc/core/types/Axis'

const NBSP = '\u00A0'
const MAX_AUTO_DETECT_DATE_SAMPLES = 50
const AUTO_DETECT_DATE_FORMATS = [
  '%Y-%m-%d',
  '%Y/%m/%d',
  '%m/%d/%Y',
  '%d/%m/%Y',
  '%m-%d-%Y',
  '%d-%m-%Y',
  '%Y',
  '%Y-%m',
  '%Y/%m'
] as const

export type AutoDetectDateFormat = (typeof AUTO_DETECT_DATE_FORMATS)[number]

type DateSampleShape = {
  separator: '' | '/' | '-'
  partCount: number
  parts: string[]
}

type AutoDetectDateFormatDefinition = {
  detectedFormat: AutoDetectDateFormat
  separator: DateSampleShape['separator']
  partCount: number
  parseFormats: readonly string[]
}

const AUTO_DETECT_DATE_FORMAT_DEFINITIONS: readonly AutoDetectDateFormatDefinition[] = [
  {
    detectedFormat: '%Y-%m-%d',
    separator: '-',
    partCount: 3,
    parseFormats: ['%Y-%m-%d', '%Y-%m-%-d', '%Y-%-m-%d', '%Y-%-m-%-d']
  },
  {
    detectedFormat: '%Y/%m/%d',
    separator: '/',
    partCount: 3,
    parseFormats: ['%Y/%m/%d', '%Y/%m/%-d', '%Y/%-m/%d', '%Y/%-m/%-d']
  },
  {
    detectedFormat: '%m/%d/%Y',
    separator: '/',
    partCount: 3,
    parseFormats: ['%m/%d/%Y', '%m/%-d/%Y', '%-m/%d/%Y', '%-m/%-d/%Y']
  },
  {
    detectedFormat: '%d/%m/%Y',
    separator: '/',
    partCount: 3,
    parseFormats: ['%d/%m/%Y', '%d/%-m/%Y', '%-d/%m/%Y', '%-d/%-m/%Y']
  },
  {
    detectedFormat: '%m-%d-%Y',
    separator: '-',
    partCount: 3,
    parseFormats: ['%m-%d-%Y', '%m-%-d-%Y', '%-m-%d-%Y', '%-m-%-d-%Y']
  },
  {
    detectedFormat: '%d-%m-%Y',
    separator: '-',
    partCount: 3,
    parseFormats: ['%d-%m-%Y', '%d-%-m-%Y', '%-d-%m-%Y', '%-d-%-m-%Y']
  },
  {
    detectedFormat: '%Y',
    separator: '',
    partCount: 1,
    parseFormats: ['%Y']
  },
  {
    detectedFormat: '%Y-%m',
    separator: '-',
    partCount: 2,
    parseFormats: ['%Y-%m', '%Y-%-m']
  },
  {
    detectedFormat: '%Y/%m',
    separator: '/',
    partCount: 2,
    parseFormats: ['%Y/%m', '%Y/%-m']
  }
] as const

const AUTO_DETECT_DATE_FORMATTERS = Object.fromEntries(
  AUTO_DETECT_DATE_FORMAT_DEFINITIONS.map(({ detectedFormat, parseFormats }) => [
    detectedFormat,
    parseFormats.map(parseFormat => ({
      parser: timeParse(parseFormat),
      formatter: timeFormat(parseFormat)
    }))
  ])
) as Record<
  AutoDetectDateFormat,
  {
    parser: ReturnType<typeof timeParse>
    formatter: ReturnType<typeof timeFormat>
  }[]
>

export type DateFormatDetectionResult = {
  detectedFormat?: AutoDetectDateFormat
  isReliable: boolean
  sampleSize: number
  ambiguous: boolean
  failureReason?: 'no_non_empty_values' | 'no_matching_format' | 'ambiguous'
}

export function getAutoDetectedDateParseFormat(
  rows: readonly unknown[] | undefined,
  dataKey: string | undefined
): AutoDetectDateFormat | undefined {
  if (!dataKey || !rows?.length) {
    return undefined
  }

  const dateDetectionSamples: unknown[] = []

  for (const row of rows) {
    if (!row || typeof row !== 'object' || !Object.prototype.hasOwnProperty.call(row, dataKey)) {
      continue
    }

    const value = (row as Record<string, unknown>)[dataKey]
    const normalizedValue = typeof value === 'string' ? value.trim() : value

    if (normalizedValue !== null && normalizedValue !== undefined && normalizedValue !== '') {
      dateDetectionSamples.push(value)

      if (dateDetectionSamples.length >= MAX_AUTO_DETECT_DATE_SAMPLES) {
        break
      }
    }
  }

  const detection = detectDateParseFormat(dateDetectionSamples)

  return detection.isReliable ? detection.detectedFormat : undefined
}

/** Locale definitions for d3-time-format. Add new locales here as needed. */
const localeDefinitions: Record<string, TimeLocaleDefinition> = {
  'es-MX': {
    dateTime: '%x, %X',
    date: '%d/%m/%Y',
    time: '%-I:%M:%S %p',
    periods: ['AM', 'PM'],
    days: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
    shortDays: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
    months: [
      'enero',
      'febrero',
      'marzo',
      'abril',
      'mayo',
      'junio',
      'julio',
      'agosto',
      'septiembre',
      'octubre',
      'noviembre',
      'diciembre'
    ],
    shortMonths: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic']
  }
}

/**
 * Converts a date display format string for rendering:
 *
 * 1. NBSP insertion — When a regular space sits between a month directive
 *    (%b, %b., %B, %m, etc.) and a day directive (%d, %-d, %e, %-e),
 *    it is replaced with a non-breaking space so the month and day always
 *    stay on the same line. Users can type a normal space in the editor;
 *    the NBSP is only injected at render time.
 *
 *    Regex breakdown:  (%[bBm]\.?) (%-?[de]|%[de])
 *      (%[bBm]\.?)   — capture group 1: a month directive (%b, %B, or %m)
 *                       optionally followed by a literal period
 *      (space)       — the single regular space we want to replace
 *      (%-?[de]|%[de]) — capture group 2: a day directive (%d, %-d, %e, %-e)
 *
 * 2. "May." correction — When the format uses %b. (abbreviated month + period),
 *    "May" is already the full name at 3 letters and should not get a trailing
 *    period. We strip "May." → "May" from the *formatted output*.
 */
export function getDateRenderFormat(format: string | undefined): string | undefined {
  if (!format || typeof format !== 'string') return format
  return format.replace(/(%[bBm]\.?) (%-?[de]|%[de])/g, `$1${NBSP}$2`)
}

export function formatDate(format = undefined, date, locale?: string) {
  const renderFormat = getDateRenderFormat(format)
  const localeDef = locale && localeDefinitions[locale]
  const formatter = localeDef ? timeFormatLocale(localeDef).format : timeFormat
  let result = formatter(renderFormat)(date)
  // "May" is already 3 letters — strip the trailing period added by %b.
  if (renderFormat?.includes('%b.') && result.includes('May.')) {
    result = result.replace(/May\./g, 'May')
  }
  return result
}

export function parseDate(format = undefined, dateString) {
  return timeParse(format)(dateString) || new Date()
}

const normalizeDateSample = (value: unknown) => {
  if (value === null || value === undefined) return ''
  return String(value).trim()
}

const detectDateSampleShape = (value: string): DateSampleShape | undefined => {
  const separatorMatches = value.match(/[/-]/g) || []
  const uniqueSeparators = [...new Set(separatorMatches)]

  if (uniqueSeparators.length > 1) {
    return undefined
  }

  const separator = (uniqueSeparators[0] || '') as DateSampleShape['separator']
  const parts = separator ? value.split(separator) : [value]

  if (!parts.every(part => /^\d+$/.test(part))) {
    return undefined
  }

  return {
    separator,
    partCount: parts.length,
    parts
  }
}

const sampleMatchesFormatShape = (sample: string, detectedFormat: AutoDetectDateFormat) => {
  const shape = detectDateSampleShape(sample)

  if (!shape) {
    return false
  }

  const formatDefinition = AUTO_DETECT_DATE_FORMAT_DEFINITIONS.find(
    definition => definition.detectedFormat === detectedFormat
  )

  if (!formatDefinition) {
    return false
  }

  if (shape.separator !== formatDefinition.separator || shape.partCount !== formatDefinition.partCount) {
    return false
  }

  if (detectedFormat === '%Y') {
    return shape.parts[0].length === 4
  }

  if (detectedFormat === '%Y-%m' || detectedFormat === '%Y/%m') {
    return shape.parts[0].length === 4
  }

  if (detectedFormat === '%Y-%m-%d' || detectedFormat === '%Y/%m/%d') {
    return shape.parts[0].length === 4
  }

  if (
    detectedFormat === '%m/%d/%Y' ||
    detectedFormat === '%d/%m/%Y' ||
    detectedFormat === '%m-%d-%Y' ||
    detectedFormat === '%d-%m-%Y'
  ) {
    return shape.parts[2].length === 4
  }

  return true
}

const matchesDateFormatExactly = (format: AutoDetectDateFormat, value: string) => {
  if (!sampleMatchesFormatShape(value, format)) {
    return false
  }

  return AUTO_DETECT_DATE_FORMATTERS[format].some(({ parser, formatter }) => {
    const parsedValue = parser(value)

    if (!parsedValue) return false

    return formatter(parsedValue) === value
  })
}

export function detectDateParseFormat(values: unknown[]): DateFormatDetectionResult {
  const samples: string[] = []

  for (const value of values || []) {
    const normalizedValue = normalizeDateSample(value)
    if (!normalizedValue) continue

    samples.push(normalizedValue)

    if (samples.length >= MAX_AUTO_DETECT_DATE_SAMPLES) {
      break
    }
  }

  if (!samples.length) {
    return {
      isReliable: false,
      sampleSize: 0,
      ambiguous: false,
      failureReason: 'no_non_empty_values'
    }
  }

  let candidateFormats = AUTO_DETECT_DATE_FORMATS.filter(format => sampleMatchesFormatShape(samples[0], format))

  for (const sample of samples.slice(1)) {
    candidateFormats = candidateFormats.filter(format => sampleMatchesFormatShape(sample, format))
  }

  const matchingFormats = candidateFormats.filter(format => samples.every(sample => matchesDateFormatExactly(format, sample)))

  if (matchingFormats.length === 1) {
    return {
      detectedFormat: matchingFormats[0],
      isReliable: true,
      sampleSize: samples.length,
      ambiguous: false
    }
  }

  if (matchingFormats.length > 1) {
    return {
      isReliable: false,
      sampleSize: samples.length,
      ambiguous: true,
      failureReason: 'ambiguous'
    }
  }

  return {
    isReliable: false,
    sampleSize: samples.length,
    ambiguous: false,
    failureReason: 'no_matching_format'
  }
}

export const isDateScale = (axis: Axis) => {
  try {
    if (!axis) throw new Error('COVE: No axis passed to isDateScale')
    return ['date', 'date-time'].includes(axis.type)
  } catch ({ message }) {
    console.warn(message) // eslint-disable-line
  }
}
