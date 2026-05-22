export type SearchMatchRange = { start: number; end: number }
export type PreparedSearchQuery = {
  hasQuery: boolean
  matches: (candidate: unknown) => boolean
  getMatchRanges: (candidate: unknown) => SearchMatchRange[]
}

type SearchIndexMap = Array<{ start: number; end: number }>
type SearchTokens = string[]

const COMBINING_DIACRITICS = /[\u0300-\u036f]/g

export const normalizeSearchText = (value: unknown): string => {
  return String(value ?? '')
    .toLowerCase()
    .normalize('NFD')
    .replace(COMBINING_DIACRITICS, '')
    .trim()
}

const getSearchTokens = (query: unknown): SearchTokens => {
  return normalizeSearchText(query).split(/\s+/).filter(Boolean)
}

const matchesSearchTokens = (candidate: unknown, tokens: SearchTokens): boolean => {
  if (tokens.length === 0) return true

  const normalizedCandidate = normalizeSearchText(candidate)
  return tokens.every(token => normalizedCandidate.includes(token))
}

const normalizeWithIndexMap = (value: unknown): { normalized: string; indexMap: SearchIndexMap } => {
  const raw = String(value ?? '')
  const indexMap: SearchIndexMap = []
  let normalized = ''
  let index = 0

  for (const char of raw) {
    const start = index
    const end = start + char.length
    const folded = char.toLowerCase().normalize('NFD').replace(COMBINING_DIACRITICS, '')

    for (let foldedIndex = 0; foldedIndex < folded.length; foldedIndex++) {
      indexMap.push({ start, end })
    }

    normalized += folded
    index = end
  }

  return { normalized, indexMap }
}

const getSearchMatchRanges = (candidate: unknown, tokens: SearchTokens): SearchMatchRange[] => {
  if (tokens.length === 0) return []

  const { normalized, indexMap } = normalizeWithIndexMap(candidate)
  const matches: SearchMatchRange[] = []

  tokens.forEach(token => {
    let position = 0

    while ((position = normalized.indexOf(token, position)) !== -1) {
      const start = indexMap[position]?.start
      const end = indexMap[position + token.length - 1]?.end

      if (start !== undefined && end !== undefined) {
        matches.push({ start, end })
      }

      position += token.length
    }
  })

  matches.sort((a, b) => a.start - b.start)

  return matches.reduce<SearchMatchRange[]>((merged, match) => {
    const previous = merged[merged.length - 1]

    if (!previous || match.start > previous.end) {
      merged.push(match)
    } else {
      previous.end = Math.max(previous.end, match.end)
    }

    return merged
  }, [])
}

export const prepareSearchQuery = (query: unknown): PreparedSearchQuery => {
  const tokens = getSearchTokens(query)

  return {
    hasQuery: tokens.length > 0,
    matches: (candidate: unknown) => matchesSearchTokens(candidate, tokens),
    getMatchRanges: (candidate: unknown) => getSearchMatchRanges(candidate, tokens)
  }
}
