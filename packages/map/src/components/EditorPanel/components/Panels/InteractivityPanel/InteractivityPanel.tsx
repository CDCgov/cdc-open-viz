import { useContext } from 'react'
import PanelSection from '@cdc/core/components/panels/PanelSection'
import { CheckBox, Select, TextField } from '@cdc/core/components/EditorPanel/Inputs'
import Icon from '@cdc/core/components/ui/Icon'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import { updateFieldFactory } from '@cdc/core/helpers/updateFieldFactory'
import { cloneConfig } from '@cdc/core/helpers/cloneConfig'

import ConfigContext from '../../../../../context'
import { addUIDs } from '../../../../../helpers/addUIDs'
import { getLocationHighlighter, isLocationHighlighterEligible } from '../../../../../helpers/locationHighlighter'
import { getLocationLinks, hasLocationLinkColumn } from '../../../../../helpers/locationLinks'
import type { MapContext } from '../../../../../types/MapContext'

const InteractivityPanel = ({ columnNames }: { columnNames: string[] }) => {
  const { config, setConfig, isDashboard } = useContext<MapContext>(ConfigContext)
  const { tooltips } = config
  const updateField = updateFieldFactory(config, setConfig)
  const columnsOptions = [
    { value: '', label: '- Select Option -' },
    ...columnNames.map(name => ({ value: name, label: name }))
  ]
  const editColumn = (columnName: string, field: string, value: string) => {
    addUIDs(config, config.columns.geo.name)
    setConfig({
      ...config,
      columns: { ...config.columns, [columnName]: { ...config.columns[columnName], [field]: value } }
    })
  }

  return (
    <PanelSection title='Interactivity'>
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
          const highlighterSettings = getLocationHighlighter(config)
          const hasUrlColumn = hasLocationLinkColumn(config)
          const tableVisible = config.table.forceDisplay ?? !isDashboard
          const changeLinks = (field, value, selector = false) => {
            const next = cloneConfig(config)
            if (selector) next.locationHighlighter = { ...highlighterSettings, [field]: value }
            else next.locationLinks = { ...links, [field]: value }
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
                  options={columnsOptions}
                  onChange={event => editColumn('navigate', 'name', event.target.value)}
                  tooltip={help('Choose the column containing URLs for map and data-table navigation.')}
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
              {isLocationHighlighterEligible(config) && (
                <section className='map-location-links-editor' aria-label='Location highlighter settings'>
                  <h4>Location highlighter</h4>
                  <CheckBox
                    section='locationHighlighter'
                    fieldName='enabled'
                    label='Show location highlighter'
                    aria-label='Show location highlighter'
                    tooltip={help(
                      'Let visitors choose a location from a dropdown to highlight it on the map and view information about it.'
                    )}
                    value={highlighterSettings.enabled}
                    updateField={(_section, _subsection, field, value) => changeLinks(field, value, true)}
                  />
                  {highlighterSettings.enabled && (
                    <>
                      <Select
                        fieldName='locationHighlighterPosition'
                        label='Position'
                        value={highlighterSettings.position}
                        options={[
                          { value: 'above', label: 'Above map' },
                          { value: 'below', label: 'Below map' }
                        ]}
                        onChange={event => changeLinks('position', event.target.value, true)}
                      />
                      {(
                        [
                          ['dropdownLabel', 'Dropdown label'],
                          ['placeholder', 'Placeholder text']
                        ] as const
                      ).map(([field, label]) => (
                        <TextField
                          key={field}
                          section='locationHighlighter'
                          fieldName={field}
                          label={label}
                          aria-label={label}
                          value={highlighterSettings[field]}
                          tooltip={
                            field === 'dropdownLabel' ? help('Text displayed above the location dropdown.') : undefined
                          }
                          updateField={(_section, _subsection, name, value) => changeLinks(name, value, true)}
                        />
                      ))}
                      <TextField
                        type='textarea'
                        className='filter-editor__compact-textarea'
                        section='locationHighlighter'
                        fieldName='note'
                        label='Note'
                        value={highlighterSettings.note}
                        updateField={(_section, _subsection, field, value) => changeLinks(field, value, true)}
                      />
                      <CheckBox
                        section='locationHighlighter'
                        fieldName='showResetButton'
                        label='Show reset button'
                        value={highlighterSettings.showResetButton}
                        updateField={(_section, _subsection, field, value) => changeLinks(field, value, true)}
                      />
                      {highlighterSettings.showResetButton && (
                        <TextField
                          section='locationHighlighter'
                          fieldName='resetButtonLabel'
                          label='Reset button label'
                          value={highlighterSettings.resetButtonLabel}
                          updateField={(_section, _subsection, field, value) => changeLinks(field, value, true)}
                        />
                      )}
                      <TextField
                        type='textarea'
                        section='locationHighlighter'
                        fieldName='details'
                        label='Location details'
                        aria-label='Location details'
                        tooltip={help(
                          'Information displayed after a visitor selects a location. Supports HTML and markup variables. Use {{location}} to insert the selected location’s display name.'
                        )}
                        value={highlighterSettings.details}
                        updateField={(_section, _subsection, field, value) => changeLinks(field, value, true)}
                      />
                      <CheckBox
                        section='locationHighlighter'
                        fieldName='highlightSelectedLocation'
                        label='Highlight selected location on map'
                        aria-label='Highlight selected location on map'
                        value={highlighterSettings.highlightSelectedLocation}
                        updateField={(_section, _subsection, field, value) => changeLinks(field, value, true)}
                      />
                      <Select
                        fieldName='locationHighlighterFilterColumn'
                        label='Show locations with a value in'
                        aria-label='Show locations with a value in'
                        value={highlighterSettings.filterColumn}
                        options={[
                          { value: '', label: 'All available locations' },
                          ...columnsOptions.filter(option => option.value)
                        ]}
                        tooltip={help('Choosing a column excludes locations with empty values.')}
                        onChange={event => changeLinks('filterColumn', event.target.value, true)}
                      />
                    </>
                  )}
                </section>
              )}
            </>
          )
        })()}
    </PanelSection>
  )
}

export default InteractivityPanel
