export type CreateCoveIdOptions = {
  suffixLength?: number
  existingIds?: Iterable<string | number>
}

const DEFAULT_SUFFIX_LENGTH = 8
const MAX_CREATE_COVE_ID_ATTEMPTS = 100

export const createCoveId = (prefix: string, options: CreateCoveIdOptions = {}) => {
  const suffixLength = options.suffixLength ?? DEFAULT_SUFFIX_LENGTH

  if (!Number.isInteger(suffixLength) || suffixLength <= 0) {
    throw new Error('createCoveId requires a positive integer suffixLength.')
  }

  const existingIds = new Set(Array.from(options.existingIds || [], id => String(id)))

  for (let attempt = 0; attempt < MAX_CREATE_COVE_ID_ATTEMPTS; attempt++) {
    const randomSuffix = Math.random()
      .toString(36)
      .slice(2, 2 + suffixLength)

    if (randomSuffix.length !== suffixLength) continue

    const id = `${prefix}-${randomSuffix}`
    if (!existingIds.has(id)) return id
  }

  throw new Error(`Unable to create a unique COVE id with prefix "${prefix}" after 100 attempts.`)
}
