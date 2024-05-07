import { Meta, StoryObj } from '@storybook/react'

import DataTableEditor from '../EditorPanel/DataTableEditor'
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion'
import { useState } from 'react'

const EditorPanel = () => {
  const { config, isDashboard } = Primary.args
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
    <Accordion>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>Data Table</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <DataTableEditor config={_config} isDashboard={isDashboard} updateField={updateField} isLoadedFromUrl={false} />
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  )
}

const meta: Meta<typeof DataTableEditor> = {
  title: 'Components/Organisms/EditorPanel',
  component: EditorPanel
}

export default meta

type Story = StoryObj<typeof DataTableEditor>

export const Primary: Story = {
  args: {
    config: {
      table: {
        label: 'Data Table',
        show: true
      },
      columns: {},
      visualizationType: 'Pie'
    },
    isDashboard: true
  }
}
