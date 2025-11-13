import Papa from 'papaparse'

/**
 * Parses CSV text while preserving newlines and commas within quoted fields.
 * 
 * @param responseText - The raw CSV text to parse
 * @param options - Parsing options
 * @param options.delimiter - The delimiter to use after processing (default: '|')
 * @param options.dynamicTyping - Whether to automatically convert types (default: false)
 * @returns Parsed CSV data as an array of objects
 */
export function parseCsvWithQuotes(
  responseText: string,
  options: {
    delimiter?: string
    dynamicTyping?: boolean
  } = {}
): any[] {
  const { delimiter = '|', dynamicTyping = false } = options
  
  const NEWLINE_PLACEHOLDER = '__COVE_NEWLINE__'
  
  // Preserve newlines in quoted fields by replacing with placeholder
  const quotedFields: string[] = []
  let placeholderIndex = 0
  let sanitizedText = responseText.replace(/("(?:[^"\\]|\\.|[\s\S])*?")/g, (match) => {
    const preserved = match.replace(/\n/g, NEWLINE_PLACEHOLDER)
    quotedFields.push(preserved)
    return `__QUOTED_FIELD_${placeholderIndex++}__`
  })
  
  // Replace commas outside quoted fields with pipe delimiter
  sanitizedText = sanitizedText.replace(/(__QUOTED_FIELD_\d+__)|,/g, (...m) => m[1] || delimiter)
  
  // Restore quoted fields without outer quotes
  quotedFields.forEach((field, index) => {
    const unquoted = field.slice(1, -1).replace(new RegExp(NEWLINE_PLACEHOLDER, 'g'), '\n')
    sanitizedText = sanitizedText.replace(`__QUOTED_FIELD_${index}__`, unquoted)
  })
  
  // Parse with Papa.parse
  const parsedCsv = Papa.parse(sanitizedText, {
    header: true,
    skipEmptyLines: true,
    delimiter,
    dynamicTyping
  })
  
  // Restore newlines in parsed data
  const restoredData = parsedCsv.data.map((row: any) => {
    const restoredRow: any = {}
    Object.keys(row).forEach(key => {
      const value = row[key]
      if (typeof value === 'string') {
        restoredRow[key] = value.replace(new RegExp(NEWLINE_PLACEHOLDER, 'g'), '\n')
      } else {
        restoredRow[key] = value
      }
    })
    return restoredRow
  })
  
  return restoredData
}

