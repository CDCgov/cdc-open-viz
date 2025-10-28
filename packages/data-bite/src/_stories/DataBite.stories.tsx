import type { Meta, StoryObj } from '@storybook/react-vite'
import DataBite from '../CdcDataBite'

const meta: Meta<typeof DataBite> = {
  title: 'Components/Templates/Data Bite',
  component: DataBite,
  parameters: {
    docs: {
      description: {
        component:
          'Data Bite component for displaying key statistics and metrics. For comprehensive editor testing, see the "Editor Tests" section below.'
      }
    }
  }
}

export default meta
type Story = StoryObj<typeof DataBite>

// Gallery stories for visual documentation
export const Data_Bite_Circle_Average: Story = {
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Data_Bite_Circle_Average.json'
  }
}

export const Data_Bite_Text_Max_Pic: Story = {
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Data_Bite_Text_Max_Pic.json'
  }
}

export const Data_Bite_Circle_Sum: Story = {
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Data_Bite_Circle_Sum.json'
  }
}

export const Data_Bite_Text_Average_Pic: Story = {
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Data_Bite_Text_Average_Pic.json'
  }
}

// Simple editor mode story for basic rendering
export const Editor_Mode_Basic: Story = {
  args: {
    configUrl: '/tests/fixtures/test-config.json',
    isEditor: true
  },
  parameters: {
    docs: {
      description: {
        story:
          'Basic editor mode rendering. For comprehensive editor testing with interactions, see "Data Bite/Editor Tests" stories.'
      }
    }
  }
}
