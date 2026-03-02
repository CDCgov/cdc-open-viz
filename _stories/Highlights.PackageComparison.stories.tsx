import type { Meta, StoryObj } from '@storybook/react-vite'

import CdcChart from '@cdc/chart/src/CdcChart'
import CdcMap from '@cdc/map/src/CdcMap'
import CdcDataBite from '@cdc/data-bite/src/CdcDataBite'
import CdcWaffleChart from '@cdc/waffle-chart/src/CdcWaffleChart'
import CdcDataTable from '@cdc/data-table/src/CdcDataTable'
import CdcMarkupInclude from '@cdc/markup-include/src/CdcMarkupInclude'
import CdcFilteredText from '@cdc/filtered-text/src/CdcFilteredText'

import chartConfig from '../packages/chart/src/_stories/_mock/horizontal_bar.json'
import mapConfig from '../packages/map/src/_stories/_mock/equal-number.json'
import dataBiteConfig from '../packages/data-bite/examples/tp5-style.json'
import waffleConfig from '../packages/waffle-chart/examples/tp5-style.json'
import dataTableConfig from '../packages/data-table/examples/data-table-example.json'
import markupConfig from '../packages/markup-include/src/_stories/_mock/primary.json'
import filteredTextConfig from '../packages/filtered-text/examples/default.json'
import filteredTextData from '../packages/filtered-text/examples/sex-ageGroup-with-values.json'

const sectionStyles = {
  border: '1px solid #d9d9d9',
  borderLeft: '6px solid #005eaa',
  borderRadius: '6px',
  background: '#fff',
  padding: '16px',
  marginBottom: '20px'
} as const

const headerStyles = {
  margin: '0 0 12px 0',
  fontSize: '18px'
} as const

const meta: Meta = {
  title: 'Components/Templates/Package Comparison',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Cross-package comparison view with highlighted sections so visualization types can be reviewed quickly in one place.'
      }
    }
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj

const withStorybookHighlight = (config: any): any => {
  return {
    ...config,
    showEditorPanel: false,
    table: config.table
      ? {
        ...config.table,
        expanded: false
      }
      : config.table,
    visual: {
      ...(config.visual || {}),
      highlightWrappers: true
    }
  }
}

export const Visualization_Types: Story = {
  render: () => {
    const ChartAny = CdcChart as any
    const MapAny = CdcMap as any
    const DataBiteAny = CdcDataBite as any
    const WaffleAny = CdcWaffleChart as any
    const DataTableAny = CdcDataTable as any
    const MarkupAny = CdcMarkupInclude as any
    const FilteredTextAny = CdcFilteredText as any

    const highlightedChartConfig = withStorybookHighlight({
      ...chartConfig,
      visual: {
        ...(chartConfig.visual || {}),
        border: true,
        accent: true,
        background: true
      }
    })

    const highlightedMapConfig = withStorybookHighlight({
      ...mapConfig,
      general: {
        ...(mapConfig.general || {}),
        headerColor: 'theme-blue'
      }
    })

    const highlightedDataBiteConfig = withStorybookHighlight({
      ...dataBiteConfig,
      visual: {
        ...(dataBiteConfig.visual || {}),
        border: true,
        accent: true,
        background: true
      }
    })

    const highlightedWaffleConfig = withStorybookHighlight({
      ...waffleConfig,
      visual: {
        ...(waffleConfig.visual || {}),
        border: true,
        accent: true,
        background: true
      }
    })

    const highlightedTableConfig = withStorybookHighlight({
      ...dataTableConfig,
      visual: {
        ...((dataTableConfig as any).visual || {}),
        border: true,
        accent: true,
        background: true
      }
    })

    const highlightedMarkupConfig = withStorybookHighlight({
      ...markupConfig,
      visual: {
        ...(markupConfig.visual || {}),
        border: true,
        accent: true,
        background: true
      }
    })

    const highlightedFilteredTextConfig = withStorybookHighlight({
      ...filteredTextConfig,
      dataUrl: '',
      data: filteredTextData,
      textColumn: 'Text',
      filters: [],
      visual: {
        ...((filteredTextConfig as any).visual || {}),
        border: true,
        accent: true,
        background: true
      }
    })

    return (
      <div style={{ padding: '24px', background: '#f6f8fa' }}>
        <h2 style={{ marginTop: 0 }}>Visualization Package Comparison</h2>

        <section style={sectionStyles}>
          <h3 style={headerStyles}>Chart (@cdc/chart)</h3>
          <ChartAny config={highlightedChartConfig} isEditor={true} />
        </section>

        <section style={sectionStyles}>
          <h3 style={headerStyles}>Map (@cdc/map)</h3>
          <MapAny config={highlightedMapConfig} isEditor={true} />
        </section>

        <section style={sectionStyles}>
          <h3 style={headerStyles}>Data Bite (@cdc/data-bite)</h3>
          <DataBiteAny config={highlightedDataBiteConfig} isEditor={true} />
        </section>

        <section style={sectionStyles}>
          <h3 style={headerStyles}>Waffle Chart (@cdc/waffle-chart)</h3>
          <WaffleAny config={highlightedWaffleConfig} isEditor={true} />
        </section>

        <section style={sectionStyles}>
          <h3 style={headerStyles}>Data Table (@cdc/data-table)</h3>
          <DataTableAny config={highlightedTableConfig} isEditor={true} />
        </section>

        <section style={sectionStyles}>
          <h3 style={headerStyles}>Filtered Text (@cdc/filtered-text)</h3>
          <FilteredTextAny config={highlightedFilteredTextConfig} configUrl='' setConfig={() => { }} isEditor={true} />
        </section>

        <section style={sectionStyles}>
          <h3 style={headerStyles}>Markup Include (@cdc/markup-include)</h3>
          <MarkupAny config={highlightedMarkupConfig} isEditor={true} />
        </section>
      </div>
    )
  }
}
