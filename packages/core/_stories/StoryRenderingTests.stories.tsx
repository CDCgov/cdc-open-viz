import type { Meta, StoryObj } from '@storybook/react-vite'
import { within, expect } from 'storybook/test'
import { performAndAssert } from '@cdc/core/helpers/testing'

const ChartRenderingValidator = () => (
  <div data-testid='chart-rendering-validator'>
    <h2>Simple COVE Visualization Tests</h2>
    <p>This test validates all stories load and render.</p>
  </div>
)

const meta: Meta<typeof ChartRenderingValidator> = {
  title: 'Testing/Story Rendering Tests',
  component: ChartRenderingValidator,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['!dev', '!autodocs']
}

export default meta
type Story = StoryObj<typeof ChartRenderingValidator>

/**
 * Fetch all stories from Storybook's JSON API and filter for visualization stories
 * @returns Promise that resolves to an array of story URLs to test
 */
const getVisualizationStoryUrls = async (): Promise<string[]> => {
  let response
  try {
    response = await fetch('http://localhost:6006/index.json')
  } catch (error) {
    console.error('Error fetching visualization story URLs:', error)
    return []
  }

  const data = await response.json()

  const storyUrls: string[] = []

  Object.values(data.entries).forEach((story: any) => {
    if (story.type === 'story') {
      const isVisualizationStory =
        story.title.includes('Components/Templates/') &&
        !story.name.toLowerCase().includes('test') &&
        !story.title.includes('Guide')

      if (isVisualizationStory) {
        const iframeUrl = `http://localhost:6006/iframe.html?id=${story.id}`
        storyUrls.push(iframeUrl)
      }
    }
  })
  return storyUrls
}

/**
 * Convert iframe URL to Storybook story URL for better debugging
 * @param iframeUrl - The iframe URL (e.g., 'http://localhost:6006/iframe.html?id=components-templates-chart--multiple-lines')
 * @returns The Storybook story URL (e.g., 'http://localhost:6006/?path=/story/components-templates-chart--multiple-lines')
 */
const iframeUrlToStoryUrl = (iframeUrl: string): string => {
  const url = new URL(iframeUrl)
  const storyId = url.searchParams.get('id')
  return `http://localhost:6006/?path=/story/${storyId}`
}

/**
 * Test a single Storybook iframe URL for successful visualization rendering
 * @param iframeUrl - The complete iframe URL to test (e.g., 'http://localhost:6006/iframe.html?id=...')
 * @returns Promise that resolves with test results
 */
const testIframeVisualization = async (iframeUrl: string) => {
  iframeUrl = iframeUrl
  console.log(`Testing story: ${iframeUrlToStoryUrl(iframeUrl)}`)

  const iframe = document.createElement('iframe')
  iframe.style.width = '1200px'
  iframe.style.height = '800px'
  iframe.src = iframeUrl
  document.body.appendChild(iframe)

  try {
    await performAndAssert(
      'Wait for iframe to load',
      () => {
        try {
          const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document
          return {
            loaded: !!iframeDoc && iframeDoc.readyState !== 'loading',
            readyState: iframeDoc?.readyState || 'unknown'
          }
        } catch (error: any) {
          console.log('Error loading iframe:', error.message)
          return { loaded: false, readyState: 'error', error: error.message }
        }
      },
      async () => {},
      (before, after) => {
        return after.loaded
      }
    )

    await performAndAssert(
      'Wait for SVG elements to render in iframe',
      () => {
        try {
          const iframeDoc = iframe?.contentDocument || iframe?.contentWindow?.document
          if (!iframeDoc) return { svgCount: 0, hasCoveModule: false, error: 'No document access' }

          const svgCount = iframeDoc.querySelectorAll('svg').length
          const hasCoveModule = !!iframeDoc.querySelector('.cdc-open-viz-module')
          const isDataBite = !!iframeDoc.querySelector('.bite-content')

          return { svgCount, hasCoveModule, isDataBite, error: null }
        } catch (error: any) {
          console.log('Error waiting for SVG elements to render in iframe:', error.message)
          return { svgCount: 0, hasCoveModule: false, isDataBite: false, error: error.message }
        }
      },
      async () => {},
      (before, after) => {
        return (after.svgCount > 0 && after.hasCoveModule) || after.isDataBite
      }
    )
  } finally {
    if (iframe.parentNode) {
      document.body.removeChild(iframe)
    }
  }
}

export const StoryRenderingTests: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByTestId('chart-rendering-validator')).toBeInTheDocument()

    const storyUrls = await getVisualizationStoryUrls()

    if (storyUrls.length === 0) {
      console.warn('No visualization stories found to test')
      return
    }

    const results: { iframeUrl: string; storyUrl: string; success: boolean; error?: string }[] = []

    for (const [i, iframeUrl] of storyUrls.entries()) {
      const storyUrl = iframeUrlToStoryUrl(iframeUrl)

      try {
        await testIframeVisualization(iframeUrl)
        results.push({ iframeUrl, storyUrl, success: true })
      } catch (error: any) {
        if (i > 0) {
          results.push({ iframeUrl, storyUrl, success: false, error: error.message })
          console.log(`❌ FAILED: ${storyUrl}`)
        }
      }
    }

    const failed = results.filter(r => !r.success).length

    if (failed > 0) {
      throw new Error(`${failed} out of ${storyUrls.length} visualization stories failed to render`)
    }
  }
}
