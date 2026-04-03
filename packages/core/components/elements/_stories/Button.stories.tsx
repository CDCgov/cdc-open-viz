import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import Button from '../Button'
import './button-audit.scss'

const classNames = ['', 'cove-button--success', 'cove-button--warn', 'cove-button--muted']

const meta: Meta<typeof Button> = {
  title: 'Components/Atoms/Button',
  component: Button,
  args: {
    children: 'Button',
    variant: 'primary',
    disabled: false,
    loading: false,
    fullWidth: false
  },
  decorators: [
    Story => (
      <div className='cove-visualization theme-blue'>
        <Story />
      </div>
    )
  ]
}

type Story = StoryObj<typeof Button>

export const Playground: Story = {
  argTypes: {
    children: {
      control: 'text'
    },
    variant: {
      control: 'select',
      options: ['primary', 'editor-primary', 'secondary', 'success', 'danger', 'warning', 'light', 'link', 'outline-warning']
    },
    size: {
      control: 'select',
      options: [undefined, 'sm']
    },
    fullWidth: {
      control: 'boolean'
    },
    disabled: {
      control: 'boolean'
    },
    loading: {
      control: 'boolean'
    },
    secondary: {
      control: 'boolean'
    }
  },
  render: args => (
    <div style={{ width: '100%', padding: '1rem' }}>
      <div style={{ maxWidth: '32rem' }}>
        <Button {...args} />
      </div>
    </div>
  )
}

export const Primary: Story = {
  render: args => (
    <div className='button-audit'>
      <div className='button-audit__section'>
        <h3 className='button-audit__title'>Shared `Button` Component</h3>
        <p className='button-audit__copy'>Current shared component variants used across the monorepo.</p>
        <div className='cove-visualization button-audit__row'>
          <div className='button-audit__example'>
            <Button {...args} className={classNames[0]}>
              Button
            </Button>
            <p className='button-audit__meta'>
              Used by shared COVE actions like palette conversion confirm buttons. Ref:
              `packages/core/components/PaletteConversionModal.tsx`
            </p>
          </div>
          <div className='button-audit__example'>
            <Button {...args} secondary>
              Secondary
            </Button>
            <p className='button-audit__meta'>
              Used for secondary actions like “Return to V1” in palette conversion. Ref:
              `packages/core/components/PaletteConversionModal.tsx`
            </p>
          </div>
          <div className='button-audit__example'>
            <Button {...args} className={classNames[1]}>
              Success
            </Button>
            <p className='button-audit__meta'>
              Available shared success variant; uncommon in product UI. Ref:
              `packages/core/components/elements/button.scss`
            </p>
          </div>
          <div className='button-audit__example'>
            <Button {...args} className='cove-button--warn'>
              Warn
            </Button>
            <p className='button-audit__meta'>
              Used in map hex shape settings destructive/confirm actions. Ref:
              `packages/map/src/components/EditorPanel/components/HexShapeSettings.tsx`
            </p>
          </div>
          <div className='button-audit__example'>
            <Button {...args} className='cove-button--muted'>
              Muted
            </Button>
            <p className='button-audit__meta'>
              Available shared muted variant; mostly a utility option. Ref:
              `packages/core/components/elements/button.scss`
            </p>
          </div>
          <div className='button-audit__example'>
            <Button {...args} className='btn-danger'>
              Legacy Danger Alias
            </Button>
            <p className='button-audit__meta'>
              Used where shared Button is called with old `btn-danger` classes. Ref:
              `packages/chart/src/components/EditorPanel/components/Panels/Panel.PatternSettings.tsx`
            </p>
          </div>
        </div>
      </div>

      <div className='button-audit__section'>
        <h3 className='button-audit__title'>Filter Action Buttons</h3>
        <p className='button-audit__copy'>
          The shared filter Apply control uses the shared Button component with theme and apply classes layered on top.
        </p>
        <div className='cove-visualization type-map theme-blue button-audit__row'>
          <div className='button-audit__example'>
            <Button {...args} className='theme-blue apply'>
              Apply
            </Button>
            <p className='button-audit__meta'>Used in shared filters. Ref: `packages/core/components/Filters/Filters.tsx`</p>
          </div>
          <div className='button-audit__example'>
            <button className='btn btn-link'>Clear Filters</button>
            <p className='button-audit__meta'>
              Used next to Apply in shared filters and dashboard filters. Ref:
              `packages/core/components/Filters/Filters.tsx`, `packages/dashboard/src/components/DashboardFilters/DashboardFilters.tsx`
            </p>
          </div>
        </div>
      </div>

      <div className='button-audit__section'>
        <h3 className='button-audit__title'>Legacy `.btn` Variants</h3>
        <p className='button-audit__copy'>Bootstrap-style and repo-specific legacy classes still used in editors and panels.</p>
        <div className='cove-visualization button-audit__row'>
          <div className='button-audit__example'>
            <button className='btn btn-primary'>btn-primary</button>
            <p className='button-audit__meta'>
              Most editor add/save actions across chart, dashboard, map, and data-bite panels. Ref:
              `packages/chart/src/components/EditorPanel/EditorPanel.tsx`, `packages/dashboard/src/components/Grid.tsx`
            </p>
          </div>
          <div className='button-audit__example'>
            <button className='btn btn-secondary'>btn-secondary</button>
            <p className='button-audit__meta'>Used in embed modal secondary actions. Ref: `packages/core/components/AdvancedEditor/EmbedEditor.tsx`</p>
          </div>
          <div className='button-audit__example'>
            <button className='btn btn-danger'>btn-danger</button>
            <p className='button-audit__meta'>
              Used for destructive remove/delete actions across editors. Ref:
              `packages/core/components/EditorPanel/FootnotesEditor.tsx`, `packages/data-bite/src/components/EditorPanel/EditorPanel.tsx`
            </p>
          </div>
          <div className='button-audit__example'>
            <button className='btn btn-warning'>btn-warning</button>
            <p className='button-audit__meta'>
              Used in dashboard filter delete confirmation modals. Ref:
              `packages/dashboard/src/components/DashboardFilters/DashboardFiltersEditor/components/DeleteFilterModal.tsx`
            </p>
          </div>
          <div className='button-audit__example'>
            <button className='btn btn-light'>btn-light</button>
            <p className='button-audit__meta'>
              Used in fieldset show/hide controls and other light utility buttons. Ref:
              `packages/core/components/EditorPanel/FieldSetWrapper.tsx`
            </p>
          </div>
          <div className='button-audit__example'>
            <button className='btn btn-link'>btn-link</button>
            <p className='button-audit__meta'>
              Used for low-emphasis resets and inline utility actions. Ref:
              `packages/core/components/Filters/Filters.tsx`, `packages/editor/src/components/DataImport/components/DataImport.tsx`
            </p>
          </div>
          <div className='button-audit__example'>
            <button className='btn secondary'>secondary</button>
            <p className='button-audit__meta'>Legacy editor modal/utility style variant. Ref: `packages/core/styles/_global.scss`</p>
          </div>
          <div className='button-audit__example'>
            <button className='btn danger'>danger</button>
            <p className='button-audit__meta'>Older editor/data import danger button style. Ref: `packages/editor/src/components/DataImport/components/DataImport.tsx`</p>
          </div>
          <div className='button-audit__example'>
            <button className='btn btn-sm btn-primary'>btn-sm</button>
            <p className='button-audit__meta'>
              Used in markup variables editor and compact destructive controls. Ref:
              `packages/core/components/EditorPanel/components/MarkupVariablesEditor.tsx`
            </p>
          </div>
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
                <div className='button-audit__example'>
                <button type='button' className='btn btn-inline button-audit__modal-button'>
                  Cancel
                </button>
                <p className='button-audit__meta'>Used in editor confirmation modals. Ref: `packages/editor/src/components/modal/Confirmation.jsx`</p>
              </div>
              <div className='button-audit__example'>
                <button type='button' className='btn btn-inline button-audit__modal-button'>
                  Confirm
                </button>
                <p className='button-audit__meta'>Used in editor confirmation modals. Ref: `packages/editor/src/components/modal/Confirmation.jsx`</p>
              </div>
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
            <div className='button-audit__example'>
              <button className='btn expand-collapse-buttons button-audit__expand-collapse'>
                - Collapse All
              </button>
              <p className='button-audit__meta'>Used in dashboard multiviz expand/collapse controls. Ref: `packages/dashboard/src/components/ExpandCollapseButtons.tsx`</p>
            </div>
            <div className='button-audit__example'>
              <button className='btn expand-collapse-buttons me-2 button-audit__expand-collapse'>
                + Expand All
              </button>
              <p className='button-audit__meta'>Used in dashboard multiviz expand/collapse controls. Ref: `packages/dashboard/src/components/ExpandCollapseButtons.tsx`</p>
            </div>
            <div className='button-audit__example'>
              <button className='shared-filter-button button-audit__shared-filter-pill'>
                Shared Filter Pill
              </button>
              <p className='button-audit__meta'>Used for shared filter chips in dashboard editing flows. Ref: `packages/dashboard/src/scss/main.scss`</p>
            </div>
          </div>
          <div className='builder-row button-audit__builder-row'>
            <div className='button-audit__example'>
              <button className='btn btn-configure-row button-audit__configure-row'>
                Configure Row
              </button>
              <p className='button-audit__meta'>Used in dashboard row builder controls. Ref: `packages/dashboard/src/components/Row.tsx`</p>
            </div>
            <div className='button-audit__row' style={{ marginTop: '1rem' }}>
              <div className='button-audit__example'>
                <button className='btn btn-primary row-menu__btn border-0'>Edit</button>
                <p className='button-audit__meta'>Used in dashboard row menus. Ref: `packages/dashboard/src/components/Row.tsx`</p>
              </div>
              <div className='button-audit__example'>
                <button className='btn btn-primary row-menu__btn border-0'>Copy</button>
                <p className='button-audit__meta'>Used in dashboard row menus. Ref: `packages/dashboard/src/components/Row.tsx`</p>
              </div>
              <div className='button-audit__example'>
                <button className='btn btn-danger row-menu__btn row-menu__btn--remove border-0'>Delete</button>
                <p className='button-audit__meta'>Used in dashboard row menus. Ref: `packages/dashboard/src/components/Row.tsx`</p>
              </div>
            </div>
          </div>
          <div className='widget-card button-audit__widget-card'>
            <div className='widget-menu button-audit__widget-menu'>
              <div className='button-audit__example'>
                <button title='Configure Visualization' className='btn btn-configure button-audit__widget-configure'>
                  *
                </button>
                <p className='button-audit__meta'>Used in dashboard widget menus. Ref: `packages/dashboard/src/components/Widget/Widget.tsx`</p>
              </div>
              <div className='button-audit__example'>
                <button title='More Options' className='btn btn-configure button-audit__widget-configure'>
                  *
                </button>
                <p className='button-audit__meta'>Used in dashboard widget menus. Ref: `packages/dashboard/src/components/Widget/Widget.tsx`</p>
              </div>
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
              <div className='button-audit__example'>
                <input type='submit' value='Go' className='btn theme-blue button-audit__map-nav-submit' />
                <p className='button-audit__meta'>Used in map navigation menus. Ref: `packages/map/src/components/NavigationMenu.tsx`</p>
              </div>
              <div className='button-audit__example'>
                <input type='submit' value='Go' className='btn theme-cyan button-audit__map-nav-submit' />
                <p className='button-audit__meta'>Used in map navigation menus with themed headers. Ref: `packages/map/src/components/NavigationMenu.tsx`</p>
              </div>
              <div className='button-audit__example'>
                <input type='submit' value='Go' className='btn theme-green button-audit__map-nav-submit' />
                <p className='button-audit__meta'>Used in map navigation menus with themed headers. Ref: `packages/map/src/components/NavigationMenu.tsx`</p>
              </div>
            </div>
          </div>
          <ul className='geo-buttons d-grid button-audit__geo-grid'>
            <li>
              <div className='button-audit__example'>
                <button type='button' className='button-audit__geo-button'>
                  <span>Geo Tile</span>
                </button>
                <p className='button-audit__meta'>Used in map editor geo option tiles. Ref: `packages/map/src/components/EditorPanel/components/editorPanel.styles.css`</p>
              </div>
            </li>
            <li>
              <div className='button-audit__example'>
                <button type='button' className='active button-audit__geo-button button-audit__geo-button--active'>
                  <span>Active Tile</span>
                </button>
                <p className='button-audit__meta'>Used for the selected state of map editor geo option tiles. Ref: `packages/map/src/components/EditorPanel/components/editorPanel.styles.css`</p>
              </div>
            </li>
          </ul>
          <div className='button-audit__zoom-frame'>
            <div className='zoom-controls button-audit__zoom-controls'>
              <div className='button-audit__example'>
                <button aria-label='Zoom In' className='button-audit__zoom-button'>
                  +
                </button>
                <p className='button-audit__meta'>Used in runtime map zoom controls. Ref: `packages/map/src/components/ZoomControls.tsx`</p>
              </div>
              <div className='button-audit__example'>
                <button aria-label='Zoom Out' className='button-audit__zoom-button'>
                  -
                </button>
                <p className='button-audit__meta'>Used in runtime map zoom controls. Ref: `packages/map/src/components/ZoomControls.tsx`</p>
              </div>
              <div className='button-audit__example'>
                <button className='reset button-audit__zoom-reset' aria-label='Reset Zoom'>
                  Reset
                </button>
                <p className='button-audit__meta'>Used in runtime map zoom reset controls. Ref: `packages/map/src/components/ZoomControls.tsx`</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='button-audit__section'>
        <h3 className='button-audit__title'>Utility And Control Buttons</h3>
        <p className='button-audit__copy'>Remaining button patterns that still use their own control styling.</p>
        <div className='cove-visualization button-audit__utility-grid'>
          <div>
            <p className='button-audit__copy'>Legend and reset-style controls.</p>
            <div className='button-audit__row'>
              <div className='button-audit__example'>
                <button className='button-audit__legend-reset'>Show All</button>
                <p className='button-audit__meta'>Used in core and map legends as reset/show-all actions. Ref: `packages/core/components/Legend/index.tsx`, `packages/map/src/components/Legend/components/Legend.tsx`</p>
              </div>
              <div className='button-audit__example'>
                <button className='button-audit__legend-reset'>Reset Legend</button>
                <p className='button-audit__meta'>Used in legend reset flows. Ref: `packages/core/helpers/useDataVizClasses.ts`</p>
              </div>
            </div>
          </div>

          <div>
            <p className='button-audit__copy'>Accordion and editor toggle controls.</p>
            <div className='button-audit__row'>
              <div className='button-audit__example'>
                <div className='button-audit__accordion' style={{ minWidth: '280px' }}>
                  <button className='button-audit__accordion-button' aria-expanded='true'>
                    Accordion Section
                  </button>
                  <div className='button-audit__accordion-panel'>Accordion content</div>
                </div>
                <p className='button-audit__meta'>Used throughout editor accordions and series panels. Ref: `packages/core/components/ui/Accordion.jsx`</p>
              </div>
              <div className='button-audit__example'>
                <button className='editor-toggle button-audit__editor-toggle' title='Collapse Editor'>
                  {'<'}
                </button>
                <p className='button-audit__meta'>Used to collapse/expand editor sidebars. Ref: `packages/core/components/EditorWrapper/EditorWrapper.tsx`</p>
              </div>
            </div>
          </div>

          <div>
            <p className='button-audit__copy'>Close, icon, and outline utility buttons.</p>
            <div className='button-audit__row'>
              <div className='button-audit__example'>
                <button className='button-audit__close-button cove-modal--close' aria-label='Close'>
                  x
                </button>
                <p className='button-audit__meta'>Used in shared modal and alert close actions. Ref: `packages/core/components/ui/Modal.jsx`, `packages/core/components/Alert/components/Alert.tsx`</p>
              </div>
              <div className='button-audit__example'>
                <button className='button-audit__icon-button' aria-label='Reorder Up'>
                  ^
                </button>
                <p className='button-audit__meta'>Used for reorder and icon-only utility controls. Ref: `packages/dashboard/src/components/MultiConfigTabs/MultiConfigTabs.tsx`</p>
              </div>
              <div className='button-audit__example'>
                <button className='button-audit__icon-button series-list__remove' aria-label='Remove Series'>
                  x
                </button>
                <p className='button-audit__meta'>Used in chart/sidebar series remove controls. Ref: `packages/chart/src/components/EditorPanel/components/Panels/Panel.Series.tsx`</p>
              </div>
              <div className='button-audit__example'>
                <button className='btn btn-outline-warning button-audit__outline-warning'>Rollback</button>
                <p className='button-audit__meta'>Used in developer palette rollback controls. Ref: `packages/core/components/PaletteSelector/DeveloperPaletteRollback.tsx`</p>
              </div>
              <div className='button-audit__example'>
                <button className='nav-link add'>+ Add Tab</button>
                <p className='button-audit__meta'>Used in dashboard multi-config tab creation. Ref: `packages/dashboard/src/components/MultiConfigTabs/MultiConfigTabs.tsx`</p>
              </div>
            </div>
          </div>

          <div>
            <p className='button-audit__copy'>Data designer card buttons and combobox trigger style.</p>
            <div className='button-audit__row'>
              <div className='button-audit__example'>
                <button className='cove-data-designer__button button-audit__data-designer-button active'>
                  <div className='button-audit__data-designer-card'>
                    <strong>Data Designer Card</strong>
                    <p>Selectable card button</p>
                  </div>
                </button>
                <p className='button-audit__meta'>Used in data designer card selection flows. Ref: `packages/core/components/managers/DataDesigner.tsx`</p>
              </div>
              <div className='button-audit__example'>
                <button className='cove-combobox-button btn btn-light'>Combobox Trigger</button>
                <p className='button-audit__meta'>Used in shared combobox dropdown triggers. Ref: `packages/core/components/ComboBox/ComboBox.tsx`</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default meta
