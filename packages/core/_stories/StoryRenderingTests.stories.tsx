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
const testIframeVisualization = async (iframeUrl: string): Promise<{ success: boolean; error?: string }> => {
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
          const isDataTable = !!iframeDoc.querySelector('.data-table')

          return { svgCount, hasCoveModule, isDataBite, isDataTable, error: null }
        } catch (error: any) {
          return { svgCount: 0, hasCoveModule: false, isDataBite: false, isDataTable: false, error: error.message }
        }
      },
      async () => {},
      (before, after) => {
        if (iframeUrl.includes('templates-datatable')) {
          return after.isDataTable
        }
        return (after.svgCount > 0 && after.hasCoveModule) || after.isDataBite
      }
    )

    return { success: true }
  } catch (error: any) {
    return { success: false, error: error.message }
  } finally {
    if (iframe.parentNode) {
      document.body.removeChild(iframe)
    }
  }
}

/**
 * Process stories using a worker pool
 * @param storyUrls - Array of story URLs to test
 * @param concurrency - Number of concurrent workers to run
 * @returns Promise that resolves to test results
 */
const processStoriesWithWorkerPool = async (
  storyUrls: string[],
  concurrency: number = 4
): Promise<{ iframeUrl: string; storyUrl: string; success: boolean; error?: string }[]> => {
  const results: { iframeUrl: string; storyUrl: string; success: boolean; error?: string }[] = []

  const queue: Array<{ url: string; index: number }> = storyUrls.map((url, index) => ({ url, index }))
  let completed = 0

  const totalStories = storyUrls.length
  let lastLoggedProgress = 0

  const logProgress = () => {
    const currentProgress = Math.floor((completed / totalStories) * 100)
    if (currentProgress >= lastLoggedProgress + 10 || completed === totalStories) {
      console.log(`Progress: ${completed}/${totalStories} stories tested (${currentProgress}%)`) // eslint-disable-line no-console
      lastLoggedProgress = currentProgress
    }
  }

  /**
   * A single worker that continuously processes stories from the queue
   */
  const worker = async (workerId: number): Promise<void> => {
    while (true) {
      const queueItem = queue.shift()
      if (!queueItem) break

      const { url: iframeUrl, index: storyIndex } = queueItem

      const storyUrl = iframeUrlToStoryUrl(iframeUrl)

      try {
        const result = await testIframeVisualization(iframeUrl)
        results.push({
          iframeUrl,
          storyUrl,
          success: result.success,
          error: result.error
        })
      } catch (error: any) {
        results.push({
          iframeUrl,
          storyUrl,
          success: false,
          error: error.message
        })
      }

      completed++
      logProgress()
    }
  }

  console.log(`Starting worker pool with ${concurrency} workers for ${totalStories} stories...`) // eslint-disable-line no-console
  const workers = Array.from({ length: concurrency }, (_, i) => worker(i))
  await Promise.all(workers)

  return results
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

    console.log(`Starting parallel testing of ${storyUrls.length} visualization stories...`) // eslint-disable-line no-console
    const startTime = Date.now()

    const results = await processStoriesWithWorkerPool(storyUrls, 4)

    const endTime = Date.now()
    const duration = ((endTime - startTime) / 1000).toFixed(2)
    console.log(`Completed testing ${results.length} stories in ${duration} seconds`) // eslint-disable-line no-console

    const failed = results.filter(r => !r.success).length

    if (failed > 0) {
      const failedStories = results.filter(r => !r.success)
      console.error('*************** Failed stories: ***************')
      failedStories.forEach(story => {
        console.error(`- ${story.storyUrl}`)
      })

      throw new Error(`${failed} out of ${storyUrls.length} visualization stories failed to render`)
    }

    console.log(`✅ All ${results.length} visualization stories rendered successfully`) // eslint-disable-line no-console
  }
}
