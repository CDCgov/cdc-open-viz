import type { Meta, StoryObj } from '@storybook/react'
import DataBite from '../CdcDataBite'
import { Config } from '../types/Config'

const meta: Meta<typeof DataBite> = {
  title: 'Components/Templates/Data Bite',
  component: DataBite
}

type Story = StoryObj<typeof DataBite>

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

export default meta
