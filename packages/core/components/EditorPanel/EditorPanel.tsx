import { useState, useEffect, useCallback, useRef, ReactNode } from 'react'
import { cloneConfig } from '../../helpers/cloneConfig'
import ErrorBoundary from '../ErrorBoundary'
import Layout from '../Layout'
import './EditorPanel.styles.css'

export interface BaseEditorPanelProps<TConfig = any> {
  config: TConfig
  updateConfig: (config: TConfig) => void
  loading?: boolean
  setParentConfig?: (config: TConfig) => void
  isDashboard?: boolean
  title: string
  children: (props: EditorPanelChildProps<TConfig>) => ReactNode
  initialDisplayPanel?: boolean
}

export interface EditorPanelChildProps<TConfig = any> {
  config: TConfig
  updateConfig: (config: TConfig) => void
  displayPanel: boolean
  convertStateToConfig: () => TConfig
}

/**
 * Base EditorPanel component that provides shared functionality for all COVE visualization editors.
 * Handles common patterns like panel display state, parent config syncing, and layout structure.
 *
 * @example
 * ```tsx
 * <EditorPanel
 *   config={config}
 *   updateConfig={updateConfig}
 *   loading={loading}
 *   setParentConfig={setParentConfig}
 *   isDashboard={isDashboard}
 *   title="Configure My Visualization"
 * >
 *   {() => (
 *     <Accordion>
 *       <Accordion.Section title="General">
 *         // Your configuration UI here
 *       </Accordion.Section>
 *     </Accordion>
 *   )}
 * </EditorPanel>
 * ```
 */
export function EditorPanel<TConfig = any>({
  config,
  updateConfig,
  loading = false,
  setParentConfig,
  isDashboard,
  title,
  children,
  initialDisplayPanel = true
}: BaseEditorPanelProps<TConfig>) {
  const [displayPanel, setDisplayPanel] = useState(initialDisplayPanel)
  const prevConfigRef = useRef<string>()

  /**
   * Converts current config to a clean state suitable for parent consumption.
   * Removes runtime-only properties like 'newViz' and 'runtime'.
   * In dashboard context, preserve 'editing' as it's managed by the dashboard.
   */
  const convertStateToConfig = useCallback((): TConfig => {
    const strippedState = cloneConfig(config)
    delete strippedState.newViz
    delete strippedState.runtime
    // Only delete editing flag if NOT in a dashboard context
    if (!isDashboard) {
      delete strippedState.editing
    }
    return strippedState
  }, [config, isDashboard])

  /**
   * Sync config changes up to parent component when setParentConfig is provided.
   * This is typically used in dashboard/editor contexts where the parent needs to track changes.
   * Uses ref to prevent infinite loops by only syncing when config content actually changes.
   */
  useEffect(() => {
    if (setParentConfig) {
      const strippedState = cloneConfig(config)
      delete strippedState.newViz
      delete strippedState.runtime
      // Only delete editing flag if NOT in a dashboard context
      if (!isDashboard) {
        delete strippedState.editing
      }

      // Only call setParentConfig if the config content actually changed
      const configString = JSON.stringify(strippedState)
      if (prevConfigRef.current !== configString) {
        prevConfigRef.current = configString
        setParentConfig(strippedState)
      }
    }
  }, [config, setParentConfig, isDashboard])

  /**
   * Toggle the editor panel visibility and update config to reflect the change.
   * In dashboard context, also sets editing to false to return to dashboard editor.
   */
  const onBackClick = () => {
    const newDisplayPanel = !displayPanel
    setDisplayPanel(newDisplayPanel)
    const newConfig: TConfig = {
      ...config,
      showEditorPanel: newDisplayPanel
    }
    // If in dashboard mode, set editing to false to return to dashboard editor
    if (isDashboard) {
      (newConfig as any).editing = false
    }

    // Update local config - the useEffect will handle syncing to parent
    updateConfig(newConfig)
  }

  // Don't render if loading and panel should be hidden
  if (loading && !(config as any)?.showEditorPanel) return null

  return (
    <ErrorBoundary component='EditorPanel'>
      <Layout.Sidebar
        displayPanel={displayPanel}
        isDashboard={isDashboard || false}
        title={title}
        onBackClick={onBackClick}
      >
        {children({
          config,
          updateConfig,
          displayPanel,
          convertStateToConfig
        })}
      </Layout.Sidebar>
    </ErrorBoundary>
  )
}

export default EditorPanel
