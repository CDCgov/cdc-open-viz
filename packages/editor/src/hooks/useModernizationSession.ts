import { useMemo, useState } from 'react'

import { cloneConfig } from '@cdc/core/helpers/cloneConfig'
import { type EditorState } from '@cdc/core/contexts/editor.reducer'
import { markConfigTracking } from '@cdc/core/helpers/markConfigTracking'

import {
  getModernizationOptions,
  getModernizationRecipe,
  type ModernizationOption,
  type ModernizationRecipe
} from '../helpers/modernizationRecipes'

type Config = NonNullable<EditorState['config']>
type PreviewView = 'modernized' | 'current'

type ModernizationSession = {
  originalConfig: Config
  recipe: ModernizationRecipe<Config>
  selectedIds: Set<string>
  selectionCustomized: boolean
  previewView: PreviewView
}

type UseModernizationSessionArgs = {
  config: Config
  tempConfig?: Config
  onSave: (config: Config) => void
}

const getActionSubject = (type?: string) => {
  if (type === 'chart' || type === 'map' || type === 'dashboard') return type
  return 'visualization'
}

const useModernizationSession = ({ config, tempConfig, onSave }: UseModernizationSessionArgs) => {
  const [session, setSession] = useState<ModernizationSession | null>(null)

  const availableRecipe = useMemo(() => getModernizationRecipe(cloneConfig(tempConfig || config)), [tempConfig, config])
  const options = useMemo<ModernizationOption<Config>[]>(
    () => (session ? getModernizationOptions(session.recipe) : []),
    [session?.recipe]
  )
  const modernizedConfig = useMemo(() => {
    if (!session) return config

    return options
      .filter(option => session.selectedIds.has(option.id))
      .reduce<Config>((nextConfig, option) => option.apply(nextConfig), cloneConfig(session.originalConfig) as Config)
  }, [session, options, config])

  const effectiveConfig = session?.previewView === 'current' ? session.originalConfig : modernizedConfig

  const start = () => {
    const originalConfig = cloneConfig(tempConfig || config)
    const recipe = getModernizationRecipe(cloneConfig(originalConfig)) as ModernizationRecipe<Config> | undefined
    if (!recipe) return

    setSession({
      originalConfig,
      recipe,
      selectedIds: new Set(getModernizationOptions(recipe).map(option => option.id)),
      selectionCustomized: false,
      previewView: 'modernized'
    })
  }

  const accept = () => {
    if (!session?.selectedIds.size) return
    onSave(markConfigTracking(modernizedConfig, 'modernizationAccepted', true))
    setSession(null)
  }

  const discard = () => {
    if (!session) return
    onSave(markConfigTracking(session.originalConfig, 'modernizationDiscarded', true))
    setSession(null)
  }

  return {
    isActive: Boolean(session),
    effectiveConfig,
    action:
      availableRecipe && !session
        ? {
            label: `Preview a modernized version of this ${getActionSubject(config.type)}`,
            onClick: start
          }
        : undefined,
    workspaceProps: session
      ? {
          subject: getActionSubject(session.originalConfig.type),
          config: effectiveConfig,
          options,
          selectedIds: session.selectedIds,
          previewView: session.previewView,
          selectionCustomized: session.selectionCustomized,
          onPreviewViewChange: (previewView: PreviewView) =>
            setSession(current => (current ? { ...current, previewView } : current)),
          onSelectionChange: (selectedIds: Set<string>) =>
            setSession(current => (current ? { ...current, selectedIds, selectionCustomized: true } : current)),
          onAccept: accept,
          onDiscard: discard
        }
      : undefined
  }
}

export default useModernizationSession
