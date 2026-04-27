export type AltTextEntry = {
  type?: 'static' | 'metadata'
  value?: string
  metadataKey?: string
}

export type AltTextConfig = {
  title?: AltTextEntry
  description?: AltTextEntry
}
