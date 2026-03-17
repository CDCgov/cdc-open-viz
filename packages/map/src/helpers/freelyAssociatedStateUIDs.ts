export const FREELY_ASSOCIATED_STATE_UIDS = ['US-FM', 'US-MH', 'US-PW'] as const

export type FreelyAssociatedStateUid = (typeof FREELY_ASSOCIATED_STATE_UIDS)[number]

const freelyAssociatedStateUidSet = new Set<string>(FREELY_ASSOCIATED_STATE_UIDS)

export const isFreelyAssociatedStateUid = (value?: string): value is FreelyAssociatedStateUid => {
  if (!value) return false
  return freelyAssociatedStateUidSet.has(value)
}
