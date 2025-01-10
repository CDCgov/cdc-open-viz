import type { Meta, StoryObj } from '@storybook/react'
import CdcMap from '../CdcMap'
import { MapConfig } from '../types/MapConfig'

async function importAll() {
  const modules = import.meta.glob('./_mock/respiratory-virus/*.json')
  const configs: Record<string, MapConfig> = {}
  for (const path in modules) {
    const mod = await modules[path]()
    configs[path.replace('./', '')] = mod
  }
  return configs
}

const allConfigs = await importAll()

const meta: Meta = {
  title: 'Components/Templates/Map/Respiratory Virus'
} satisfies Meta

export default meta

export const AllConfigs = {
  render: () => (
    <div>
      {Object.entries(allConfigs).map(([filename, config]) => (
        <CdcMap key={filename} config={config} />
      ))}
    </div>
  )
}
