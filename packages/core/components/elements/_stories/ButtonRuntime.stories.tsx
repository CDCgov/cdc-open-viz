import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import Button from '../Button'
import './button-runtime.scss'

const noop = () => undefined

const meta: Meta<typeof Button> = {
  title: 'Components/Atoms/Button/Runtime Inventory',
  component: Button,
  decorators: [
    Story => (
      <div className='cove cove-visualization button-runtime theme-blue'>
        <Story />
      </div>
    )
  ]
}

type Story = StoryObj<typeof Button>

const RuntimeExample = ({
  title,
  implementation,
  reference,
  children
}: {
  title: string
  implementation: 'Shared Button' | 'Native button'
  reference: string
  children: React.ReactNode
}) => (
  <div className='button-runtime__example'>
    <div className='button-runtime__sample'>{children}</div>
    <div>
      <h4 className='button-runtime__label'>{title}</h4>
      <p className='button-runtime__implementation'>{implementation}</p>
      <p className='button-runtime__meta'>{reference}</p>
    </div>
  </div>
)

const PlusIcon = () => (
  <svg viewBox='0 0 24 24' stroke='currentColor' strokeWidth='3' aria-hidden='true'>
    <line x1='12' y1='5' x2='12' y2='19' />
    <line x1='5' y1='12' x2='19' y2='12' />
  </svg>
)

const MinusIcon = () => (
  <svg viewBox='0 0 24 24' stroke='currentColor' strokeWidth='3' aria-hidden='true'>
    <line x1='5' y1='12' x2='19' y2='12' />
  </svg>
)

export const RuntimeButtons: Story = {
  render: () => (
    <div className='button-runtime__content'>
      <section className='button-runtime__section'>
        <h3 className='button-runtime__title'>Shared Runtime Actions</h3>
        <div className='button-runtime__grid'>
          <RuntimeExample
            title='Chart Legend Show All'
            implementation='Shared Button'
            reference='packages/chart/src/components/Legend/Legend.Component.tsx'
          >
            <Button size='sm' onClick={noop}>
              Show All
            </Button>
          </RuntimeExample>

          <RuntimeExample
            title='Map Legend Show All'
            implementation='Shared Button'
            reference='packages/map/src/components/Legend/components/Legend.tsx'
          >
            <Button size='sm' className='legend-container__reset-button' onClick={noop}>
              Show All
            </Button>
          </RuntimeExample>

          <RuntimeExample
            title='Visualization Filter Apply'
            implementation='Shared Button'
            reference='packages/core/components/Filters/Filters.tsx'
          >
            <Button variant='primary' className='me-2' onClick={noop}>
              Apply
            </Button>
          </RuntimeExample>

          <RuntimeExample
            title='Visualization Filter Clear'
            implementation='Shared Button'
            reference='packages/core/components/Filters/Filters.tsx'
          >
            <Button variant='link' onClick={noop}>
              Clear Filters
            </Button>
          </RuntimeExample>

          <RuntimeExample
            title='Dashboard Filter Submit'
            implementation='Shared Button'
            reference='packages/dashboard/src/components/DashboardFilters/DashboardFilters.tsx'
          >
            <Button variant='primary' className='mb-1 me-2' onClick={noop}>
              GO!
            </Button>
          </RuntimeExample>

          <RuntimeExample
            title='Dashboard Filter Reset'
            implementation='Shared Button'
            reference='packages/dashboard/src/components/DashboardFilters/DashboardFilters.tsx'
          >
            <Button variant='link' className='mb-1' onClick={noop}>
              Clear Filters
            </Button>
          </RuntimeExample>

          <RuntimeExample
            title='Map Clear Selection'
            implementation='Native button'
            reference='packages/map/src/components/FilterControls.tsx'
          >
            <button type='button' className='cove-button' onClick={noop}>
              Clear Selection
            </button>
          </RuntimeExample>
        </div>
      </section>

      <section className='button-runtime__section'>
        <h3 className='button-runtime__title'>Downloads And Tables</h3>
        <div className='button-runtime__grid'>
          <RuntimeExample
            title='Media Download Button'
            implementation='Native button'
            reference='packages/core/components/MediaControls.tsx'
          >
            <button type='button' className='btn btn-primary' style={{ lineHeight: '1.4em' }} onClick={noop}>
              Download Data
            </button>
          </RuntimeExample>

          <RuntimeExample
            title='Media Download Link Button'
            implementation='Native button'
            reference='packages/core/components/MediaControls.tsx'
          >
            <button type='button' className='download-button-link no-border' style={{ lineHeight: '1.4em' }} onClick={noop}>
              Download Image
            </button>
          </RuntimeExample>

          <RuntimeExample
            title='Data Table Collapse'
            implementation='Native button'
            reference='packages/core/components/DataTable/DataTable.tsx'
          >
            <button type='button' className='button-runtime__table-collapse' onClick={noop}>
              - Collapse table
            </button>
          </RuntimeExample>
        </div>
      </section>

      <section className='button-runtime__section'>
        <h3 className='button-runtime__title'>Filter Choice Buttons</h3>
        <div className='button-runtime__grid'>
          <RuntimeExample
            title='Filter Tab'
            implementation='Native button'
            reference='packages/core/components/Filters/components/Tabs.tsx'
          >
            <div className='button-runtime__tab-row'>
              <button type='button' className='tab tab--active' onClick={noop}>
                Weekly
              </button>
              <button type='button' className='tab' onClick={noop}>
                Monthly
              </button>
            </div>
          </RuntimeExample>

          <RuntimeExample
            title='Simple Filter Tab'
            implementation='Native button'
            reference='packages/core/components/Filters/components/Tabs.tsx'
          >
            <div className='button-runtime__tab-row'>
              <button type='button' className='tab tab--active tab-simple' onClick={noop}>
                Cases
              </button>
              <button type='button' className='tab tab-simple' onClick={noop}>
                Deaths
              </button>
            </div>
          </RuntimeExample>
        </div>
      </section>

      <section className='button-runtime__section'>
        <h3 className='button-runtime__title'>Legend Item Controls</h3>
        <div className='button-runtime__grid'>
          <RuntimeExample
            title='Map Legend Item Button'
            implementation='Native button'
            reference='packages/map/src/components/Legend/components/Legend.tsx'
          >
            <button type='button' className='legend-container__li-btn button-runtime__legend-item' onClick={noop}>
              <span className='button-runtime__legend-swatch' />
              <span>Region A</span>
            </button>
          </RuntimeExample>

          <RuntimeExample
            title='Map Pattern Legend Item Button'
            implementation='Native button'
            reference='packages/map/src/components/Legend/components/Legend.tsx'
          >
            <button
              type='button'
              className='legend-container__li-btn legend-container__li-btn--pattern button-runtime__legend-item'
              onClick={noop}
            >
              <span className='button-runtime__legend-swatch button-runtime__legend-swatch--pattern' />
              <span>Patterned area</span>
            </button>
          </RuntimeExample>

          <RuntimeExample
            title='Bubble Layer Legend Item Button'
            implementation='Native button'
            reference='packages/map/src/components/Legend/components/BubbleLayerLegend.tsx'
          >
            <button type='button' className='legend-container__li-btn button-runtime__legend-item' onClick={noop}>
              <span className='button-runtime__legend-bubble' />
              <span>50 cases</span>
            </button>
          </RuntimeExample>
        </div>
      </section>

      <section className='button-runtime__section'>
        <h3 className='button-runtime__title'>Map Zoom Controls</h3>
        <div className='button-runtime__grid'>
          <RuntimeExample
            title='Zoom In And Out'
            implementation='Native button'
            reference='packages/map/src/components/ZoomControls.tsx'
          >
            <div className='zoom-controls button-runtime__zoom-controls'>
              <button type='button' onClick={noop} aria-label='Zoom In'>
                <PlusIcon />
              </button>
              <button type='button' onClick={noop} aria-label='Zoom Out'>
                <MinusIcon />
              </button>
            </div>
          </RuntimeExample>

          <RuntimeExample
            title='Reset Zoom'
            implementation='Native button'
            reference='packages/map/src/components/ZoomControls.tsx'
          >
            <div className='zoom-controls button-runtime__zoom-controls'>
              <button type='button' className='reset' onClick={noop}>
                Reset Zoom
              </button>
            </div>
          </RuntimeExample>
        </div>
      </section>

      <section className='button-runtime__section'>
        <h3 className='button-runtime__title'>Specialized Runtime Controls</h3>
        <div className='button-runtime__grid'>
          <RuntimeExample
            title='Alert Close Button'
            implementation='Native button'
            reference='packages/chart/src/components/Sankey/useSankeyAlert.tsx'
          >
            <div className='alert alert-warning alert-dismissible button-runtime__alert' role='alert'>
              <span>Sankey warning</span>
              <button type='button' className='close' aria-label='Close' onClick={noop}>
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
          </RuntimeExample>

          <RuntimeExample
            title='Brush Keyboard Handle'
            implementation='Native button'
            reference='packages/chart/src/components/Brush/BrushSelector.tsx'
          >
            <button type='button' className='button-runtime__brush-handle' onClick={noop}>
              Left handle
            </button>
          </RuntimeExample>
        </div>
      </section>
    </div>
  )
}

export default meta
