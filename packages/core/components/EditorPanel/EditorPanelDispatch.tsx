import { ReactNode } from 'react'
import ErrorBoundary from '../ErrorBoundary'
import Layout from '../Layout'

export interface EditorPanelDispatchProps<TState = any, TAction = any> {
  state: TState
  dispatch: React.Dispatch<TAction>
  title: string
  children: (props: EditorPanelDispatchChildProps<TState, TAction>) => ReactNode
  showEditorPanelKey?: keyof TState
  toggleActionType?: string
  isDashboard?: boolean
}

export interface EditorPanelDispatchChildProps<TState = any, TAction = any> {
  state: TState
  dispatch: React.Dispatch<TAction>
}

/**
 * Base EditorPanel component for packages using dispatch/reducer pattern (e.g., data-table)
 *
 * Provides common wrapper functionality including:
 * - ErrorBoundary for error handling
 * - Layout.Sidebar for consistent panel display
 * - State management for panel visibility
 *
 * @example
 * ```tsx
 * <EditorPanelDispatch
 *   state={state}
 *   dispatch={dispatch}
 *   title='Configure Data Table'
 *   showEditorPanelKey='showEditorPanel'
 *   toggleActionType='SET_SHOW_EDITOR_PANEL'
 * >
 *   {({ state, dispatch }) => (
 *     <Accordion>
 *       // Your editor content here
 *     </Accordion>
 *   )}
 * </EditorPanelDispatch>
 * ```
 */
export function EditorPanelDispatch<TState = any, TAction = any>({
  state,
  dispatch,
  title,
  children,
  showEditorPanelKey = 'showEditorPanel' as keyof TState,
  toggleActionType = 'SET_SHOW_EDITOR_PANEL',
  isDashboard = false
}: EditorPanelDispatchProps<TState, TAction>) {
  const showEditorPanel = state[showEditorPanelKey] as boolean

  const onBackClick = () => {
    dispatch({
      type: toggleActionType,
      payload: !showEditorPanel
    } as TAction)
  }

  return (
    <ErrorBoundary component='EditorPanel'>
      <Layout.Sidebar
        title={title}
        onBackClick={onBackClick}
        displayPanel={showEditorPanel}
        isDashboard={isDashboard}
      >
        {children({ state, dispatch })}
      </Layout.Sidebar>
    </ErrorBoundary>
  )
}
