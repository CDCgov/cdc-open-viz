import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import Button from '../Button'
import './button-audit.scss'

const classNames = ['', 'cove-button--success', 'cove-button--warn', 'cove-button--muted']

const meta: Meta<typeof Button> = {
  title: 'Components/Atoms/Button',
  component: Button,
  decorators: [
    Story => (
      <div className='cove-visualization theme-blue'>
        <Story />
      </div>
    )
  ]
}

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  render: args => (
    <div className='button-audit'>
      <div className='button-audit__section'>
        <h3 className='button-audit__title'>Shared `Button` Component</h3>
        <p className='button-audit__copy'>Current shared component variants used across the monorepo.</p>
        <div className='cove-visualization button-audit__row'>
          <Button {...args} className={classNames[0]}>
            Button
          </Button>
          <Button {...args} secondary>
            Secondary
          </Button>
          <Button {...args} className={classNames[1]}>
            Success
          </Button>
          <Button {...args} className='cove-button--warn'>
            Warn
          </Button>
          <Button {...args} className='cove-button--muted'>
            Muted
          </Button>
          <Button {...args} className='btn-danger'>
            Legacy Danger Alias
          </Button>
        </div>
      </div>

      <div className='button-audit__section'>
        <h3 className='button-audit__title'>Filter Action Buttons</h3>
        <p className='button-audit__copy'>
          The shared filter Apply control uses the shared Button component with theme and apply classes layered on top.
        </p>
        <div className='cove-visualization type-map theme-blue button-audit__row'>
          <Button {...args} className='theme-blue apply'>
            Apply
          </Button>
          <button className='btn btn-link'>Clear Filters</button>
        </div>
      </div>

      <div className='button-audit__section'>
        <h3 className='button-audit__title'>Legacy `.btn` Variants</h3>
        <p className='button-audit__copy'>Bootstrap-style and repo-specific legacy classes still used in editors and panels.</p>
        <div className='cove-visualization button-audit__row'>
          <button className='btn btn-primary'>btn-primary</button>
          <button className='btn btn-secondary'>btn-secondary</button>
          <button className='btn btn-danger'>btn-danger</button>
          <button className='btn btn-warning'>btn-warning</button>
          <button className='btn btn-light'>btn-light</button>
          <button className='btn btn-link'>btn-link</button>
          <button className='btn secondary'>secondary</button>
          <button className='btn danger'>danger</button>
          <button className='btn btn-sm btn-primary'>btn-sm</button>
        </div>
      </div>

      <div className='button-audit__section'>
        <h3 className='button-audit__title'>Editor Modal Buttons</h3>
        <p className='button-audit__copy'>Buttons styled by editor modal rules rather than the shared button component.</p>
        <div className='cove-visualization cdc-editor'>
          <div className='modal-wrapper' style={{ position: 'static', inset: 'auto', transform: 'none', width: 'auto' }}>
            <div className='modal' style={{ maxWidth: '420px' }}>
              <p style={{ margin: 0 }}>Confirmation modal actions</p>
              <div className='confirmation-buttons'>
                <button type='button' className='btn btn-inline button-audit__modal-button'>
                  Cancel
                </button>
                <button type='button' className='btn btn-inline button-audit__modal-button'>
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='button-audit__section'>
        <h3 className='button-audit__title'>Dashboard Builder Buttons</h3>
        <p className='button-audit__copy'>Dashboard-specific controls that currently diverge from generic action buttons.</p>
        <div className='cove-visualization cdc-dashboard button-audit__grid'>
          <div className='button-audit__row'>
            <button className='btn expand-collapse-buttons button-audit__expand-collapse'>
              - Collapse All
            </button>
            <button className='btn expand-collapse-buttons me-2 button-audit__expand-collapse'>
              + Expand All
            </button>
            <button className='shared-filter-button button-audit__shared-filter-pill'>
              Shared Filter Pill
            </button>
          </div>
          <div className='builder-row button-audit__builder-row'>
            <button className='btn btn-configure-row button-audit__configure-row'>
              Configure Row
            </button>
            <div className='button-audit__row' style={{ marginTop: '1rem' }}>
              <button className='btn btn-primary row-menu__btn border-0'>Edit</button>
              <button className='btn btn-primary row-menu__btn border-0'>Copy</button>
              <button className='btn btn-danger row-menu__btn row-menu__btn--remove border-0'>Delete</button>
            </div>
          </div>
          <div className='widget-card button-audit__widget-card'>
            <div className='widget-menu button-audit__widget-menu'>
              <button title='Configure Visualization' className='btn btn-configure button-audit__widget-configure'>
                *
              </button>
              <button title='More Options' className='btn btn-configure button-audit__widget-configure'>
                *
              </button>
            </div>
            <div className='widget__content'>Widget menu buttons</div>
          </div>
        </div>
      </div>

      <div className='button-audit__section'>
        <h3 className='button-audit__title'>Map Controls</h3>
        <p className='button-audit__copy'>Map editor tiles and zoom controls use their own visual language today.</p>
        <div className='cove-visualization button-audit__grid'>
          <div>
            <p className='button-audit__copy'>Themed map navigation submit control with the bottom accent border.</p>
            <div className='button-audit__row'>
              <input type='submit' value='Go' className='btn theme-blue button-audit__map-nav-submit' />
              <input type='submit' value='Go' className='btn theme-cyan button-audit__map-nav-submit' />
              <input type='submit' value='Go' className='btn theme-green button-audit__map-nav-submit' />
            </div>
          </div>
          <ul className='geo-buttons d-grid button-audit__geo-grid'>
            <li>
              <button type='button' className='button-audit__geo-button'>
                <span>Geo Tile</span>
              </button>
            </li>
            <li>
              <button type='button' className='active button-audit__geo-button button-audit__geo-button--active'>
                <span>Active Tile</span>
              </button>
            </li>
          </ul>
          <div className='button-audit__zoom-frame'>
            <div className='zoom-controls button-audit__zoom-controls'>
              <button aria-label='Zoom In' className='button-audit__zoom-button'>
                +
              </button>
              <button aria-label='Zoom Out' className='button-audit__zoom-button'>
                -
              </button>
              <button className='reset button-audit__zoom-reset' aria-label='Reset Zoom'>
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default meta
