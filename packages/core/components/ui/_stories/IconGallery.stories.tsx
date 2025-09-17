import type { Meta } from '@storybook/react'
import React from 'react'

// Import all icons
import AreaChartIcon from '../../../assets/icon-area-chart.svg'
import CaretDownIcon from '../../../assets/icon-caret-down.svg'
import CaretFilledDownIcon from '../../../assets/icon-caret-filled-down.svg'
import CaretFilledUpIcon from '../../../assets/icon-caret-filled-up.svg'
import CaretUpIcon from '../../../assets/icon-caret-up.svg'
import BarPairedIcon from '../../../assets/icon-chart-bar-paired.svg'
import BarStackedIcon from '../../../assets/icon-chart-bar-stacked.svg'
import BarChartIcon from '../../../assets/icon-chart-bar.svg'
import BoxWhiskerIcon from '../../../assets/icon-chart-box-whisker.svg'
import ForecastIcon from '../../../assets/icon-chart-forecast.svg'
import ForestPlotIcon from '../../../assets/icon-chart-forest-plot.svg'
import LineChartIcon from '../../../assets/icon-chart-line.svg'
import PieChartIcon from '../../../assets/icon-chart-pie.svg'
import ScatterplotIcon from '../../../assets/icon-chart-scatterplot.svg'
import StackedAreaIcon from '../../../assets/icon-chart-stacked-area.svg'
import CheckIcon from '../../../assets/icon-check.svg'
import CloseIcon from '../../../assets/icon-close.svg'
import CodeIcon from '../../../assets/icon-code.svg'
import ComboChartIcon from '../../../assets/icon-combo-chart.svg'
import CommandIcon from '../../../assets/icon-command.svg'
import DashboardIcon from '../../../assets/icon-dashboard.svg'
import DataBiteIcon from '../../../assets/icon-databite.svg'
import DeviationBarIcon from '../../../assets/icon-deviation-bar.svg'
import EditIcon from '../../../assets/icon-edit.svg'
import EpiChartIcon from '../../../assets/icon-epi-chart.svg'
import FileUploadIcon from '../../../assets/icon-file-upload.svg'
import FilterBarsIcon from '../../../assets/icon-filter-bars.svg'
import FilterDropdownsIcon from '../../../assets/icon-filter-dropdowns.svg'
import FilteredTextIcon from '../../../assets/icon-filtered-text.svg'
import GearIcon from '../../../assets/icon-gear.svg'
import GearMultiIcon from '../../../assets/icon-gear-multi.svg'
import GridIcon from '../../../assets/icon-grid.svg'
import InfoIcon from '../../../assets/icon-info.svg'
import LinearGaugeIcon from '../../../assets/icon-linear-gauge.svg'
import LinkIcon from '../../../assets/icon-link.svg'
import MapAlabamaIcon from '../../../assets/icon-map-alabama.svg'
import MapUSAIcon from '../../../assets/icon-map-usa.svg'
import MapWorldIcon from '../../../assets/icon-map-world.svg'
import MinusIcon from '../../../assets/icon-minus.svg'
import MoveIcon from '../../../assets/icon-move.svg'
import PlusIcon from '../../../assets/icon-plus.svg'
import QuestionCircleIcon from '../../../assets/icon-question-circle.svg'
import RotateLeftIcon from '../../../assets/icon-rotate-left.svg'
import SankeyIcon from '../../../assets/icon-sankey.svg'
import TableIcon from '../../../assets/icon-table.svg'
import ToolsIcon from '../../../assets/icon-tools.svg'
import UploadIcon from '../../../assets/icon-upload.svg'
import WarningCircleIcon from '../../../assets/icon-warning-circle.svg'
import WarningTriangleIcon from '../../../assets/icon-warning-triangle.svg'
import ExternalLinkIcon from '../../../assets/external-link.svg'
import MapFoldedIcon from '../../../assets/map-folded.svg'
import USARegionGraphicIcon from '../../../assets/usa-region-graphic.svg'

const iconList = [
  { name: 'Area Chart', component: AreaChartIcon, category: 'Charts' },
  { name: 'Bar Chart', component: BarChartIcon, category: 'Charts' },
  { name: 'Bar Chart Paired', component: BarPairedIcon, category: 'Charts' },
  { name: 'Bar Chart Stacked', component: BarStackedIcon, category: 'Charts' },
  { name: 'Box & Whisker', component: BoxWhiskerIcon, category: 'Charts' },
  { name: 'Combo Chart', component: ComboChartIcon, category: 'Charts' },
  { name: 'Deviation Bar', component: DeviationBarIcon, category: 'Charts' },
  { name: 'Epi Chart', component: EpiChartIcon, category: 'Charts' },
  { name: 'Forecast', component: ForecastIcon, category: 'Charts' },
  { name: 'Forest Plot', component: ForestPlotIcon, category: 'Charts' },
  { name: 'Line Chart', component: LineChartIcon, category: 'Charts' },
  { name: 'Linear Gauge', component: LinearGaugeIcon, category: 'Charts' },
  { name: 'Pie Chart', component: PieChartIcon, category: 'Charts' },
  { name: 'Sankey', component: SankeyIcon, category: 'Charts' },
  { name: 'Scatterplot', component: ScatterplotIcon, category: 'Charts' },
  { name: 'Stacked Area', component: StackedAreaIcon, category: 'Charts' },

  { name: 'Map Alabama', component: MapAlabamaIcon, category: 'Maps' },
  { name: 'Map USA', component: MapUSAIcon, category: 'Maps' },
  { name: 'Map World', component: MapWorldIcon, category: 'Maps' },
  { name: 'Map Folded', component: MapFoldedIcon, category: 'Maps' },
  { name: 'USA Region Graphic', component: USARegionGraphicIcon, category: 'Maps' },

  { name: 'Dashboard', component: DashboardIcon, category: 'Components' },
  { name: 'Data Bite', component: DataBiteIcon, category: 'Components' },
  { name: 'Filtered Text', component: FilteredTextIcon, category: 'Components' },
  { name: 'Table', component: TableIcon, category: 'Components' },

  { name: 'Filter Bars', component: FilterBarsIcon, category: 'Filters' },
  { name: 'Filter Dropdowns', component: FilterDropdownsIcon, category: 'Filters' },

  { name: 'Caret Down', component: CaretDownIcon, category: 'Navigation' },
  { name: 'Caret Filled Down', component: CaretFilledDownIcon, category: 'Navigation' },
  { name: 'Caret Filled Up', component: CaretFilledUpIcon, category: 'Navigation' },
  { name: 'Caret Up', component: CaretUpIcon, category: 'Navigation' },

  { name: 'Check', component: CheckIcon, category: 'Actions' },
  { name: 'Close', component: CloseIcon, category: 'Actions' },
  { name: 'Edit', component: EditIcon, category: 'Actions' },
  { name: 'File Upload', component: FileUploadIcon, category: 'Actions' },
  { name: 'Minus', component: MinusIcon, category: 'Actions' },
  { name: 'Move', component: MoveIcon, category: 'Actions' },
  { name: 'Plus', component: PlusIcon, category: 'Actions' },
  { name: 'Rotate Left', component: RotateLeftIcon, category: 'Actions' },
  { name: 'Upload', component: UploadIcon, category: 'Actions' },

  { name: 'Code', component: CodeIcon, category: 'Interface' },
  { name: 'Command', component: CommandIcon, category: 'Interface' },
  { name: 'External Link', component: ExternalLinkIcon, category: 'Interface' },
  { name: 'Gear', component: GearIcon, category: 'Interface' },
  { name: 'Gear Multi', component: GearMultiIcon, category: 'Interface' },
  { name: 'Grid', component: GridIcon, category: 'Interface' },
  { name: 'Info', component: InfoIcon, category: 'Interface' },
  { name: 'Link', component: LinkIcon, category: 'Interface' },
  { name: 'Question Circle', component: QuestionCircleIcon, category: 'Interface' },
  { name: 'Tools', component: ToolsIcon, category: 'Interface' },
  { name: 'Warning Circle', component: WarningCircleIcon, category: 'Interface' },
  { name: 'Warning Triangle', component: WarningTriangleIcon, category: 'Interface' },
]

const categories = [...new Set(iconList.map(icon => icon.category))]

const meta: Meta = {
  title: 'Components/Atoms/Icon Gallery',
  parameters: {
    docs: {
      page: () => (
        <div style={{ padding: '20px' }}>
          <h1>Icon Gallery</h1>
          <p>This gallery showcases all available icons in the CDC Open Viz system, organized by category.</p>

          {categories.map(category => (
            <div key={category} style={{ marginBottom: '40px' }}>
              <h2>{category}</h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                gap: '20px',
                marginBottom: '20px'
              }}>
                {iconList
                  .filter(icon => icon.category === category)
                  .map(icon => (
                    <div
                      key={icon.name}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: '15px',
                        border: '1px solid #e0e0e0',
                        borderRadius: '8px',
                        backgroundColor: '#fafafa'
                      }}
                    >
                      <icon.component
                        width="48"
                        height="48"
                        style={{ marginBottom: '10px' }}
                      />
                      <span style={{
                        fontSize: '12px',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        color: '#333'
                      }}>
                        {icon.name}
                      </span>
                      <code style={{
                        fontSize: '10px',
                        color: '#666',
                        marginTop: '5px',
                        textAlign: 'center',
                        wordBreak: 'break-all'
                      }}>
                        {icon.component.toString().includes('icon-')
                          ? icon.component.toString().match(/icon-[^.]+/)?.[0] || 'icon'
                          : icon.component.toString().match(/[^/]+(?=\.svg)/)?.[0] || 'icon'
                        }.svg
                      </code>
                    </div>
                  ))}
              </div>
            </div>
          ))}

          <h2>Usage</h2>
          <p>Import and use icons as React components:</p>
          <pre><code>{`import WarningIcon from '@cdc/core/assets/icon-warning-circle.svg'

// Basic usage
<WarningIcon width="24" height="24" />

// With styling
<WarningIcon
  width="32"
  height="32"
  className="warning-icon"
  style={{ color: '#ff6b6b' }}
/>`}</code></pre>

          <h2>Guidelines</h2>
          <ul>
            <li><strong>Consistent Sizing</strong>: Use standard sizes (16px, 24px, 32px, 48px) for consistency</li>
            <li><strong>Accessibility</strong>: Always provide meaningful alt text or aria-labels when needed</li>
            <li><strong>Color</strong>: Icons inherit the current text color by default, can be overridden with CSS</li>
            <li><strong>Context</strong>: Choose icons that clearly represent their function or content</li>
            <li><strong>Performance</strong>: SVG icons are optimized for fast loading and scalability</li>
          </ul>

          <h2>File Location</h2>
          <p>All icons are located in <code>packages/core/assets/</code> and follow the naming convention:</p>
          <ul>
            <li><code>icon-[name].svg</code> for interface and action icons</li>
            <li><code>[descriptive-name].svg</code> for specialized graphics</li>
          </ul>
        </div>
      )
    }
  }
}

export default meta

export const Gallery = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <h1>Icon Gallery</h1>
      <p>This gallery showcases all available icons in the CDC Open Viz system, organized by category.</p>

      {categories.map(category => (
        <div key={category} style={{ marginBottom: '40px' }}>
          <h2>{category}</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '20px',
            marginBottom: '20px'
          }}>
            {iconList
              .filter(icon => icon.category === category)
              .map(icon => (
                <div
                  key={icon.name}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '15px',
                    border: '1px solid #e0e0e0',
                    borderRadius: '8px',
                    backgroundColor: '#fafafa'
                  }}
                >
                  <icon.component
                    width="48"
                    height="48"
                    style={{ marginBottom: '10px' }}
                  />
                  <span style={{
                    fontSize: '12px',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    color: '#333'
                  }}>
                    {icon.name}
                  </span>
                  <code style={{
                    fontSize: '10px',
                    color: '#666',
                    marginTop: '5px',
                    textAlign: 'center',
                    wordBreak: 'break-all'
                  }}>
                    {icon.component.toString().includes('icon-')
                      ? icon.component.toString().match(/icon-[^.]+/)?.[0] || 'icon'
                      : icon.component.toString().match(/[^/]+(?=\.svg)/)?.[0] || 'icon'
                    }.svg
                  </code>
                </div>
              ))}
          </div>
        </div>
      ))}

      <h2>Usage</h2>
      <p>Import and use icons as React components:</p>
      <pre><code>{`import WarningIcon from '@cdc/core/assets/icon-warning-circle.svg'

// Basic usage
<WarningIcon width="24" height="24" />

// With styling
<WarningIcon
  width="32"
  height="32"
  className="warning-icon"
  style={{ color: '#ff6b6b' }}
/>`}</code></pre>

      <h2>Guidelines</h2>
      <ul>
        <li><strong>Consistent Sizing</strong>: Use standard sizes (16px, 24px, 32px, 48px) for consistency</li>
        <li><strong>Accessibility</strong>: Always provide meaningful alt text or aria-labels when needed</li>
        <li><strong>Color</strong>: Icons inherit the current text color by default, can be overridden with CSS</li>
        <li><strong>Context</strong>: Choose icons that clearly represent their function or content</li>
        <li><strong>Performance</strong>: SVG icons are optimized for fast loading and scalability</li>
      </ul>

      <h2>File Location</h2>
      <p>All icons are located in <code>packages/core/assets/</code> and follow the naming convention:</p>
      <ul>
        <li><code>icon-[name].svg</code> for interface and action icons</li>
        <li><code>[descriptive-name].svg</code> for specialized graphics</li>
      </ul>
    </div>
  )
}