import type { Meta, StoryObj } from '@storybook/react-vite'
import { within, expect } from 'storybook/test'
import DataBite from '@cdc/data-bite'

// Fallback step function for test descriptions
const step = async (description: string, fn: () => Promise<void> | void) => {
  console.log(`▶ ${description}`)
  await fn()
  console.log(`✓ ${description}`)
}

const meta: Meta = {
  title: 'Gallery/Data Bites',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Data Bite visualization examples from the CDC COVE Gallery'
      }
    }
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof DataBite>

// Helper function to test data bite rendering
const testDataBiteRendering = async (canvasElement: HTMLElement, storyName: string) => {
  const canvas = within(canvasElement)

  await step('Wait for data bite to render', async () => {
    const dataBiteElement = await canvas.findByRole('img', { hidden: true }, { timeout: 10000 })
    expect(dataBiteElement).toBeInTheDocument()
  })

  await step('Verify COVE module wrapper is present', async () => {
    const coveModule = canvasElement.querySelector('.cdc-open-viz-module')
    expect(coveModule).toBeInTheDocument()
  })

  console.log(` ${storyName} data bite rendered successfully`)
}

export const Data_Bite_Circle_Average: Story = {
  render: () => <DataBite configUrl="https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Data_Bite_Circle_Average.json" />,
  play: async ({ canvasElement }) => {
    await testDataBiteRendering(canvasElement, 'Data Bite Circle Average')
  }
}

export const Data_Bite_Text_Max_Pic: Story = {
  render: () => <DataBite configUrl="https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Data_Bite_Text_Max_Pic.json" />,
  play: async ({ canvasElement }) => {
    await testDataBiteRendering(canvasElement, 'Data Bite Text Max Pic')
  }
}

export const Data_Bite_Circle_Sum: Story = {
  render: () => <DataBite configUrl="https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Data_Bite_Circle_Sum.json" />,
  play: async ({ canvasElement }) => {
    await testDataBiteRendering(canvasElement, 'Data Bite Circle Sum')
  }
}

export const Data_Bite_Text_Average_Pic: Story = {
  render: () => <DataBite configUrl="https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Data_Bite_Text_Average_Pic.json" />,
  play: async ({ canvasElement }) => {
    await testDataBiteRendering(canvasElement, 'Data Bite Text Average Pic')
  }
}
