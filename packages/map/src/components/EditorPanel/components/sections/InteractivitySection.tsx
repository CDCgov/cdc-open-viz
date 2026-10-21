import { getLocationLinks, hasLocationLinkColumn, isLocationSelectorEligible } from '../../../../helpers/locationLinks'
import { cloneConfig } from '@cdc/core/helpers/cloneConfig'
import { addUIDs } from '../../../../helpers/addUIDs'
import { useContext } from 'react'
import {
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel
} from 'react-accessible-accordion'

import { CheckBox, Select, TextField } from '@cdc/core/components/EditorPanel/Inputs'
import Icon from '@cdc/core/components/ui/Icon'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import { updateFieldFactory } from '@cdc/core/helpers/updateFieldFactory'

import ConfigContext from '../../../../context'
import type { MapContext } from '../../../../types/MapContext'

const InteractivitySection = ({ columnNames }: { columnNames: string[] }) => {
  const { config, setConfig, isDashboard } = useContext<MapContext>(ConfigContext)
  const { tooltips } = config
  const updateField = updateFieldFactory(config, setConfig)

  const columnsOptions = [
    <option value='' key='Select Option'>
      - Select Option -
    </option>,
    ...columnNames.map(name => (
      <option value={name} key={name}>
        {name}
      </option>
    ))
  ]
  const editColumn = (columnName: string, field: string, value: string) => {
    addUIDs(config, config.columns.geo.name)
    setConfig({
      ...config,
      columns: { ...config.columns, [columnName]: { ...config.columns[columnName], [field]: value } }
    })
  }

  return (
    <AccordionItem>
      {' '}
      {/* Tooltips */}
      <AccordionItemHeading>
        <AccordionItemButton>Interactivity</AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <Select
          label={
            <>
              Detail displays on{' '}
              <Tooltip style={{ textTransform: 'none' }}>
                <Tooltip.Target>
                  <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                </Tooltip.Target>
                <Tooltip.Content>
                  <p>At mobile sizes, information always appears in a popover modal when a user taps on an item.</p>
                </Tooltip.Content>
              </Tooltip>
            </>
          }
          value={tooltips.appearanceType}
          options={[
            { value: 'hover', label: 'Hover - Tooltip' },
            { value: 'click', label: 'Click - Popover Modal' }
          ]}
          section='tooltips'
          fieldName='appearanceType'
          updateField={updateField}
        />
        {'click' === tooltips.appearanceType && (
          <TextField
            value={tooltips.linkLabel}
            section='tooltips'
            fieldName='linkLabel'
            label='Tooltips Link Label'
            updateField={updateField}
          />
        )}
        <TextField
          value={tooltips.noDataLabel}
          section='tooltips'
          fieldName='noDataLabel'
          label='No Data Tooltip Text'
          placeholder='No Data'
          updateField={updateField}
        />
        {config.general.type === 'data' &&
          (() => {
            const links = getLocationLinks(config)
            const hasUrlColumn = hasLocationLinkColumn(config)
            const tableVisible = config.table.forceDisplay ?? !isDashboard
            const changeLinks = (field, value, selector = false) => {
              const next = cloneConfig(config)
              next.locationLinks = selector
                ? { ...links, selector: { ...links.selector, [field]: value } }
                : { ...links, [field]: value }
              setConfig(next)
            }
            const help = (text: string) => (
              <Tooltip style={{ textTransform: 'none' }}>
                <Tooltip.Target>
                  <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                </Tooltip.Target>
                <Tooltip.Content>
                  <p>{text}</p>
                </Tooltip.Content>
              </Tooltip>
            )
            return (
              <>
                <section className='map-location-links-editor' aria-label='Location link settings'>
                  <h4>Location links</h4>
                  <Select
                    fieldName='locationLinksUrl'
                    label='Link URL column'
                    aria-label='Link URL column'
                    value={config.columns.navigate?.name ?? ''}
                    options={columnsOptions.map(c => ({ value: c.props.value, label: c.props.children }))}
                    onChange={event => editColumn('navigate', 'name', event.target.value)}
                    tooltip={help(
                      'Choose the column containing location URLs. Links also appear in the location selector when it is enabled.'
                    )}
                  />
                  {hasUrlColumn && (
                    <>
                      <Select
                        fieldName='locationLinksTarget'
                        label='Open links in'
                        value={config.general.navigationTarget}
                        options={[
                          { value: '_self', label: 'Same Window' },
                          { value: '_blank', label: 'New Window' }
                        ]}
                        onChange={event => {
                          const next = cloneConfig(config)
                          next.general.navigationTarget = event.target.value as '_self' | '_blank'
                          setConfig(next)
                        }}
                      />
                      <CheckBox
                        section='locationLinks'
                        fieldName='enableMapNavigation'
                        label='Clicking a map location opens its link'
                        aria-label='Clicking a map location opens its link'
                        value={links.enableMapNavigation}
                        updateField={(_section, _subsection, field, value) => changeLinks(field, value)}
                      />
                      <CheckBox
                        section='locationLinks'
                        fieldName='enableDataTableLinks'
                        label='Show links in the data table'
                        aria-label='Show links in the data table'
                        value={links.enableDataTableLinks}
                        display={tableVisible}
                        updateField={(_section, _subsection, field, value) => changeLinks(field, value)}
                      />
                    </>
                  )}
                </section>
                {isLocationSelectorEligible(config) && (
                  <section className='map-location-links-editor' aria-label='Location selector settings'>
                    <h4>Location selector</h4>
                    <CheckBox
                      section='locationLinks'
                      subsection='selector'
                      fieldName='enabled'
                      label='Show location selector'
                      value={links.selector.enabled}
                      updateField={(_section, _subsection, field, value) => changeLinks(field, value, true)}
                    />
                    {links.selector.enabled && (
                      <>
                        <Select
                          fieldName='locationLinksPosition'
                          label='Position'
                          value={links.selector.position}
                          options={[
                            { value: 'above', label: 'Above map' },
                            { value: 'below', label: 'Below map' }
                          ]}
                          onChange={event => changeLinks('position', event.target.value, true)}
                        />
                        {(
                          [
                            ['label', 'Selector label'],
                            ['placeholder', 'Placeholder text']
                          ] as const
                        ).map(([field, label]) => (
                          <TextField
                            key={field}
                            section='locationLinks'
                            subsection='selector'
                            fieldName={field}
                            label={label}
                            aria-label={label}
                            value={links.selector[field]}
                            updateField={(_section, _subsection, name, value) => changeLinks(name, value, true)}
                          />
                        ))}
                        <CheckBox
                          section='locationLinks'
                          subsection='selector'
                          fieldName='highlightSelectedLocation'
                          label='Highlight selected location on map'
                          aria-label='Highlight selected location on map'
                          value={links.selector.highlightSelectedLocation}
                          updateField={(_section, _subsection, field, value) => changeLinks(field, value, true)}
                        />
                        <TextField
                          type='textarea'
                          section='locationLinks'
                          subsection='selector'
                          fieldName='information'
                          label='Location information'
                          aria-label='Location information'
                          tooltip={help(
                            'Supporting text shown after a location is selected. Supports HTML and markup variables. {{location}} inserts the selected location’s display name.'
                          )}
                          value={links.selector.information}
                          updateField={(_section, _subsection, field, value) => changeLinks(field, value, true)}
                        />
                        {hasUrlColumn && (
                          <>
                            <TextField
                              section='locationLinks'
                              subsection='selector'
                              fieldName='linkText'
                              label='Link text'
                              aria-label='Link text'
                              value={links.selector.linkText}
                              tooltip={help(
                                'Plain text with markup variables. {{location}} inserts the selected location’s display name.'
                              )}
                              updateField={(_section, _subsection, name, value) => changeLinks(name, value, true)}
                            />
                            <TextField
                              section='locationLinks'
                              subsection='selector'
                              fieldName='noLinkMessage'
                              label='No-link message'
                              aria-label='No-link message'
                              value={links.selector.noLinkMessage}
                              tooltip={help(
                                'Shown when the selected location has no link. Plain text with markup variables. {{location}} inserts the selected location’s display name. Leave blank to hide the message.'
                              )}
                              updateField={(_section, _subsection, name, value) => changeLinks(name, value, true)}
                            />
                          </>
                        )}
                      </>
                    )}
                  </section>
                )}
              </>
            )
          })()}
      </AccordionItemPanel>
    </AccordionItem>
  )
}

export default InteractivitySection
