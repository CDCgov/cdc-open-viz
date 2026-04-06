import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import VisualizationContainer from './VisualizationContainer'

describe('VisualizationContainer', () => {
  it('renders the shared outer shell contract for dashboard wrappers', () => {
    const { container } = render(
      <VisualizationContainer
        config={{ type: 'dashboard', theme: 'theme-blue' }}
        currentViewport='md'
        imageId='dashboard-image'
        isEditor={false}
        renderResponsive={false}
      >
        <div>Dashboard body</div>
      </VisualizationContainer>
    )

    const shell = container.querySelector('.cove-visualization')

    expect(shell).toHaveClass('cdc-open-viz-module', 'type-dashboard', 'md', 'theme-blue')
    expect(shell).toHaveAttribute('data-download-id', 'dashboard-image')
    expect(shell?.querySelector('.cove-visualization__outer')).toBeNull()
  })

  it('renders the editor panel and responsive wrapper when enabled', () => {
    const { container } = render(
      <VisualizationContainer
        config={{ type: 'chart', showEditorPanel: true }}
        currentViewport='lg'
        editorPanel={<div data-testid='editor-panel'>Editor Panel</div>}
        isEditor={true}
      >
        <div>Chart body</div>
      </VisualizationContainer>
    )

    expect(screen.getByTestId('editor-panel')).toBeInTheDocument()
    expect(container.querySelector('.cove-visualization')).toHaveClass('type-chart', 'is-editor', 'editor-panel--visible')
    expect(container.querySelector('.cove-visualization__outer')).toBeInTheDocument()
  })

  it('hides the editor panel class when editor panels are disabled in config', () => {
    const { container } = render(
      <VisualizationContainer config={{ type: 'map', showEditorPanel: false }} isEditor={true}>
        <div>Map body</div>
      </VisualizationContainer>
    )

    expect(container.querySelector('.cove-visualization')).toHaveClass('editor-panel--hidden')
  })

  it('uses the map header theme on the shared visualization shell', () => {
    const { container } = render(
      <VisualizationContainer
        config={{ type: 'map', general: { headerColor: 'theme-purple' } }}
        currentViewport='lg'
        isEditor={false}
      >
        <div>Map body</div>
      </VisualizationContainer>
    )

    expect(container.querySelector('.cove-visualization')).toHaveClass('type-map', 'theme-purple')
  })
})
