import { useState, useEffect } from 'react'

/**
 * Minimal config type for generator
 * Only includes properties needed for filter extraction
 */
export type CoveConfig = {
  type?: string
  filters?: any[]
  dashboard?: {
    sharedFilters?: any[]
  }
  [key: string]: any
}

/**
 * State type for config loading
 */
export type ConfigLoadState = {
  loading: boolean
  error: string | null
  config: CoveConfig | null
}

/**
 * Load and parse a COVE configuration file
 */
async function loadConfig(configUrl: string): Promise<CoveConfig> {
  const response = await fetch(configUrl)

  if (!response.ok) {
    throw new Error(`Failed to load config: ${response.status} ${response.statusText}`)
  }

  const config = await response.json()
  return config
}

/**
 * Hook to load and manage COVE config state
 */
export function useConfigLoader(configUrl: string | null): ConfigLoadState {
  const [state, setState] = useState<ConfigLoadState>({
    loading: false,
    error: null,
    config: null
  })

  useEffect(() => {
    if (!configUrl) {
      setState({ loading: false, error: null, config: null })
      return
    }

    let cancelled = false

    setState({ loading: true, error: null, config: null })

    loadConfig(configUrl)
      .then(config => {
        if (!cancelled) {
          setState({ loading: false, error: null, config })
        }
      })
      .catch(error => {
        if (!cancelled) {
          setState({
            loading: false,
            error: error.message || 'Failed to load configuration',
            config: null
          })
        }
      })

    return () => {
      cancelled = true
    }
  }, [configUrl])

  return state
}
