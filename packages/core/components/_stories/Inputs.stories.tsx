import { Meta, StoryObj } from '@storybook/react-vite'

import InputSelect from '../inputs/InputSelect'
import { useState } from 'react'

const Inputs: React.FC = ({ config }: any) => {
  const [_config, setConfig] = useState(config)
  const updateField = (section, subsection, fieldName, value) => {
    setConfig({
      ..._config,
      [section]: {
        ..._config[section],
        [fieldName]: value
      }
    })
  }
  return (
    <div>
      <InputSelect label='Select' options={['apple', 'banana', 'orange']} fieldName='inputselect' updateField={updateField} />
    </div>
  )
}

const meta: Meta<typeof Inputs> = {
  title: 'Components/Atoms/Inputs',
  component: Inputs
}

export default meta

type Story = StoryObj<typeof Inputs>

export const Select: Story = {
  args: {
    config: {}
  }
}
