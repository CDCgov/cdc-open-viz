type ScopedKeyPart = string | number | boolean | null | undefined

const DEFAULT_SCOPE = 'map'

const stringifyKeyPart = (part: ScopedKeyPart) => String(part ?? '')

export const createScopedKey = (scope: ScopedKeyPart, ...parts: ScopedKeyPart[]) =>
  [scope || DEFAULT_SCOPE, ...parts].map(stringifyKeyPart).join('--')
