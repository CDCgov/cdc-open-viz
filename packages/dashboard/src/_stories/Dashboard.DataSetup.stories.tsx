import type { Meta, StoryObj } from '@storybook/react-vite'
import { within, expect, waitFor, userEvent } from 'storybook/test'
import CdcEditor from '@cdc/editor/src/CdcEditor'

const meta: Meta<typeof CdcEditor> = {
  title: 'Components/Pages/Dashboard/Data Setup Integration Tests',
  component: CdcEditor
}

export default meta

type Story = StoryObj<typeof CdcEditor>

// Helper function to wait
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

// ============================================================================
// Multi-Visualization Configuration Workflow
// ============================================================================
// This test matches the Playwright codegen test exactly

export const MultiVizConfigurationWorkflow: Story = {
  args: {
    config: {}
  },
  parameters: {
    docs: {
      description: {
        story:
          'Tests multi-visualization configuration workflow (matches Playwright codegen):\n' +
          '1. Click "Choose Visualization Type"\n' +
          '2. Click "Dashboard" button\n' +
          '3. Click "Load from URL"\n' +
          '4. Enter "Demo" in dataset name textbox\n' +
          '5. Fill "/custom-order-demo-data.csv" in URL textbox\n' +
          '6. Click "Always load from URL"\n' +
          '7. Click "Save & Load" button\n' +
          '8. Click "Configure your visualization" button\n' +
          '9. Click "gearMulti" button\n' +
          '10. Select "Demo" from combobox\n' +
          '11. Click "Vertical Values for map" button\n' +
          '12. Click "No" button\n' +
          '13. Click "Configure Multiple"\n' +
          '14. Select "Location" from Multi-Visualization Column dropdown\n' +
          '15. Click "Continue" button'
      }
    }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const user = userEvent.setup()

    // ========================================================================
    // STEP 1: Click "Choose Visualization Type" (verify it's visible)
    // ========================================================================
    console.log('🔄 Step 1: Verifying "Choose Visualization Type"...')
    await waitFor(
      async () => {
        const chooseVizText = canvas.queryByText(/choose visualization type/i)
        expect(chooseVizText).toBeTruthy()
      },
      { timeout: 5000 }
    )

    const chooseVizText = canvas.getByText(/choose visualization type/i)
    await user.click(chooseVizText)
    await sleep(500)
    console.log('✅ Step 1 passed: "Choose Visualization Type" clicked')

    // ========================================================================
    // STEP 2: Click "Dashboard" button
    // ========================================================================
    console.log('🔄 Step 2: Clicking "Dashboard" button...')
    const dashboardButton = canvas.getByRole('button', { name: /dashboard/i })
    await user.click(dashboardButton)
    await sleep(1500)
    console.log('✅ Step 2 passed: Dashboard button clicked')

    // ========================================================================
    // STEP 3: Click "Load from URL"
    // ========================================================================
    console.log('🔄 Step 3: Clicking "Load from URL"...')
    await sleep(500)

    const loadFromUrlButton = canvas.queryAllByText(/load from url/i)[0] ||
      canvas.queryByRole('button', { name: /url/i }) ||
      canvas.queryByRole('tab', { name: /url/i })

    if (loadFromUrlButton) {
      await user.click(loadFromUrlButton)
      await sleep(500)
      console.log('✅ Step 3 passed: "Load from URL" clicked')
    } else {
      console.log('ℹ️ "Load from URL" button not found - may already be selected')
    }

    // ========================================================================
    // STEP 4: Enter "Demo" in dataset name textbox
    // ========================================================================
    console.log('🔄 Step 4: Entering dataset name "Demo"...')
    await sleep(500)

    const datasetNameInput = canvas.getByRole('textbox', { name: /enter dataset name/i })
    await user.click(datasetNameInput)
    await user.clear(datasetNameInput)
    await user.type(datasetNameInput, 'Demo')
    await sleep(300)
    console.log('✅ Step 4 passed: Dataset name "Demo" entered')

    // ========================================================================
    // STEP 5: Fill "/custom-order-demo-data.csv" in URL textbox
    // ========================================================================
    console.log('🔄 Step 5: Entering URL "/custom-order-demo-data.csv"...')

    // Press Tab to move to URL field
    await user.tab()

    const urlInput = canvas.getByRole('textbox', { name: /load data from external url/i })
    await user.clear(urlInput)
    await user.type(urlInput, '/custom-order-demo-data.csv')
    await sleep(300)
    console.log('✅ Step 5 passed: URL "/custom-order-demo-data.csv" entered')

    // ========================================================================
    // STEP 6: Click "Always load from URL"
    // ========================================================================
    console.log('🔄 Step 6: Clicking "Always load from URL"...')
    await sleep(500)

    const alwaysLoadText = canvas.getByText(/always load from url/i)
    await user.click(alwaysLoadText)
    await sleep(300)
    console.log('✅ Step 6 passed: "Always load from URL" clicked')

    // ========================================================================
    // STEP 7: Click "Save & Load" button
    // ========================================================================
    console.log('🔄 Step 7: Clicking "Save & Load" button...')
    await sleep(500)

    const saveLoadButton = canvas.getByRole('button', { name: /save & load/i })
    await user.click(saveLoadButton)
    await sleep(2000) // Wait for data to load
    console.log('✅ Step 7 passed: "Save & Load" button clicked')

    // ========================================================================
    // STEP 8: Click "Configure your visualization" button
    // ========================================================================
    console.log('🔄 Step 8: Clicking "Configure your visualization"...')
    await sleep(1000)

    const configureButton = canvas.getByRole('button', { name: /configure your visualization/i })
    await user.click(configureButton)
    await sleep(500)
    console.log('✅ Step 8 passed: "Configure your visualization" clicked')

    // ========================================================================
    // STEP 9: Click "gearMulti" button
    // ========================================================================
    console.log('🔄 Step 9: Clicking "gearMulti" button...')
    await sleep(500)

    const gearMultiButton = canvas.getByRole('button', { name: /gearMulti/i })
    await user.click(gearMultiButton)
    await sleep(500)
    console.log('✅ Step 9 passed: "gearMulti" button clicked')

    // ========================================================================
    // STEP 10: Select "Demo" from combobox
    // ========================================================================
    console.log('🔄 Step 10: Selecting "Demo" from combobox...')
    await sleep(500)

    const dataSourceSelect = canvas.getByRole('combobox')
    await user.selectOptions(dataSourceSelect, 'Demo')
    await sleep(500)
    console.log('✅ Step 10 passed: "Demo" selected from combobox')

    // ========================================================================
    // STEP 11: Click "Vertical Values for map" button
    // ========================================================================
    console.log('🔄 Step 11: Clicking "Vertical Values for map"...')
    await sleep(500)

    const verticalValuesButton = canvas.getByRole('button', { name: /vertical values for map/i })
    await user.click(verticalValuesButton)
    await sleep(500)
    console.log('✅ Step 11 passed: "Vertical Values for map" clicked')

    // ========================================================================
    // STEP 12: Click "No" button
    // ========================================================================
    console.log('🔄 Step 12: Clicking "No" button...')
    await sleep(500)

    const noButton = canvas.getByRole('button', { name: /^no$/i })
    await user.click(noButton)
    await sleep(500)
    console.log('✅ Step 12 passed: "No" button clicked')

    // ========================================================================
    // STEP 13: Click "Configure Multiple"
    // ========================================================================
    console.log('🔄 Step 13: Clicking "Configure Multiple"...')
    await sleep(500)

    const configureMultipleText = canvas.getByText(/configure multiple/i)
    await user.click(configureMultipleText)
    await sleep(500)
    console.log('✅ Step 13 passed: "Configure Multiple" clicked')

    // ========================================================================
    // STEP 14: Select "Location" from Multi-Visualization Column dropdown
    // ========================================================================
    console.log('🔄 Step 14: Selecting "Location" from Multi-Visualization Column...')
    await sleep(500)

    const multiVizColumnSelect = canvas.getByLabelText(/multi-visualization column/i)
    await user.selectOptions(multiVizColumnSelect, 'Location')
    await sleep(500)
    console.log('✅ Step 14 passed: "Location" selected from Multi-Visualization Column')

    // ========================================================================
    // STEP 15: Click "Continue" button
    // ========================================================================
    console.log('🔄 Step 15: Clicking "Continue" button...')
    await sleep(500)

    const continueButton = canvas.getByRole('button', { name: /continue/i })
    await user.click(continueButton)
    await sleep(500)
    console.log('✅ Step 15 passed: "Continue" button clicked')

    console.log('🎉 Multi-viz configuration workflow completed successfully!')
  }
}
