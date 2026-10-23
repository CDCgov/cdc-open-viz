import { useContext } from 'react'
import {
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel
} from 'react-accessible-accordion'

import CustomSortOrder from '@cdc/core/components/EditorPanel/CustomSortOrder'
import DownloadUrlControls from '@cdc/core/components/EditorPanel/DownloadUrlControls'
import { CheckBox, Select, TextField } from '@cdc/core/components/EditorPanel/Inputs'
import Icon from '@cdc/core/components/ui/Icon'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import { updateFieldFactory } from '@cdc/core/helpers/updateFieldFactory'

import ConfigContext from '../../../../context'
import { displayGeoName } from '../../../../helpers/displayGeoName'
import type { MapContext } from '../../../../types/MapContext'

const DataTableSection = () => {
  const { config, setConfig, isDashboard } = useContext<MapContext>(ConfigContext)
  const { table } = config
  const updateField = updateFieldFactory(config, setConfig)

  const handleEditorChanges = (property, value) => {
    switch (property) {
      case 'expandDataTable':
        setConfig({
          ...config,
          table: {
            ...config.table,
            expanded: value
          }
        })
        break
      case 'toggleShowFullGeoNameInCSV':
        setConfig({
          ...config,
          table: {
            // setting both bc DataTable new core needs it here
            ...config.table,
            showFullGeoNameInCSV: !config.table.showFullGeoNameInCSV
          }
        })
        break
      case 'toggleDownloadImgButton':
        setConfig({
          ...config,
          general: {
            ...config.general,
            showDownloadImgButton: !config.general.showDownloadImgButton
          }
        })
        break
      case 'toggleDownloadLinkBelow':
        setConfig({
          ...config,
          table: {
            ...config.table,
            showDownloadLinkBelow: !config.table.showDownloadLinkBelow
          }
        })
        break
      case 'toggleDownloadPdfButton':
        setConfig({
          ...config,
          general: {
            ...config.general,
            showDownloadPdfButton: !config.general.showDownloadPdfButton
          }
        })
        break
      case 'showDataTable':
        setConfig({
          ...config,
          table: {
            ...config.table,
            forceDisplay: value
          }
        })
        break
      case 'limitDataTableHeight':
        setConfig({
          ...config,
          table: {
            ...config.table,
            limitHeight: value
          }
        })
        break
      default:
        console.warn(`COVE: Did not recognize editor property.`) // eslint-disable-line
        break
    }
  }

  const isLoadedFromUrl =
    config?.dataFileSourceType === 'url' ||
    Boolean(config?.runtimeDataUrl || config?.dataUrl || config?.dataFileName) ||
    config?.dataKey?.includes('http://') ||
    config?.dataKey?.includes('https://')

  if (config.general.type === 'navigation') return null

  return (
    <AccordionItem>
      {' '}
      {/* Data Table */}
      <AccordionItemHeading>
        <AccordionItemButton>Data Table</AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <TextField
          value={table.label}
          updateField={updateField}
          section='table'
          fieldName='label'
          id='dataTableTitle'
          label='Data Table Title'
          placeholder='Data Table'
          tooltip={
            <Tooltip style={{ textTransform: 'none' }}>
              <Tooltip.Target>
                <Icon display='question' style={{ marginLeft: '0.5rem' }} />
              </Tooltip.Target>
              <Tooltip.Content>
                <p>Label is required for Data Table for 508 Compliance</p>
              </Tooltip.Content>
            </Tooltip>
          }
        />
        <CheckBox
          value={config.table.wrapColumns}
          section='table'
          subsection={null}
          fieldName='wrapColumns'
          label='WRAP DATA TABLE COLUMNS'
          updateField={updateField}
          className='column-heading'
        />
        <CheckBox
          value={config.table.forceDisplay !== undefined ? config.table.forceDisplay : !isDashboard}
          section='table'
          subsection={null}
          fieldName='forceDisplay'
          label='Show Data Table'
          updateField={updateField}
          onChange={event => {
            handleEditorChanges('showDataTable', event.target.checked)
          }}
          tooltip={
            <Tooltip style={{ textTransform: 'none' }}>
              <Tooltip.Target>
                <Icon
                  display='question'
                  style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }}
                />
              </Tooltip.Target>
              <Tooltip.Content>
                <p>
                  Data tables are required for 508 compliance. When choosing to hide this data table, replace with your
                  own version.
                </p>
              </Tooltip.Content>
            </Tooltip>
          }
        />

        <CheckBox
          value={config.table.showNonGeoData}
          section='table'
          subsection={null}
          fieldName='showNonGeoData'
          label='Show Non Geographic Data'
          updateField={updateField}
          tooltip={
            <Tooltip style={{ textTransform: 'none' }}>
              <Tooltip.Target>
                <Icon
                  display='question'
                  style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }}
                />
              </Tooltip.Target>
              <Tooltip.Content>
                <p>Show any data not associated with a geographic location</p>
              </Tooltip.Content>
            </Tooltip>
          }
        />

        <TextField
          value={table.indexLabel || ''}
          updateField={updateField}
          section='table'
          fieldName='indexLabel'
          label='Index Column Header'
          placeholder='Location'
          tooltip={
            <Tooltip style={{ textTransform: 'none' }}>
              <Tooltip.Target>
                <Icon display='question' style={{ marginLeft: '0.5rem' }} />
              </Tooltip.Target>
              <Tooltip.Content>
                <p>
                  To comply with 508 standards, if the first column in the data table has no header, enter a brief one
                  here.
                </p>
              </Tooltip.Content>
            </Tooltip>
          }
        />
        <TextField
          value={config.table.caption}
          updateField={updateField}
          section='table'
          fieldName='caption'
          label='Screen Reader Description'
          placeholder='Data Table'
          tooltip={
            <Tooltip style={{ textTransform: 'none' }}>
              <Tooltip.Target>
                <Icon display='question' style={{ marginLeft: '0.5rem' }} />
              </Tooltip.Target>
              <Tooltip.Content>
                <p>Enter a description of the data table to be read by screen readers.</p>
              </Tooltip.Content>
            </Tooltip>
          }
          type='textarea'
        />
        <CheckBox
          value={config.table.limitHeight}
          section='table'
          subsection={null}
          fieldName='limitHeight'
          label='Limit Table Height'
          updateField={updateField}
          onChange={event => {
            handleEditorChanges('limitDataTableHeight', event.target.checked)
          }}
        />
        {config.table.limitHeight && (
          <TextField
            value={table.height}
            updateField={updateField}
            section='table'
            fieldName='height'
            label='Data Table Height'
            placeholder='Height(px)'
            type='number'
            min='0'
            max='500'
          />
        )}

        <TextField
          value={table.cellMinWidth}
          updateField={updateField}
          section='table'
          fieldName='cellMinWidth'
          label='Table Cell Min Width'
          type='number'
          min='0'
          max='500'
        />

        <CheckBox
          value={config.table.stickyFirstColumn ?? false}
          section='table'
          subsection={null}
          fieldName='stickyFirstColumn'
          label='Fix First Column'
          updateField={updateField}
          tooltip={
            <Tooltip style={{ textTransform: 'none' }}>
              <Tooltip.Target>
                <Icon display='question' style={{ marginLeft: '0.5rem' }} />
              </Tooltip.Target>
              <Tooltip.Content>
                <p>Keeps the first column visible while scrolling the table horizontally.</p>
              </Tooltip.Content>
            </Tooltip>
          }
        />

        <CheckBox
          value={config.table.expanded || false}
          section='table'
          subsection={null}
          fieldName='expanded'
          label='Map loads with data table expanded'
          updateField={updateField}
          onChange={event => {
            handleEditorChanges('expandDataTable', event.target.checked)
          }}
        />
        <CheckBox
          value={config.table.showBottomCollapse}
          section='table'
          subsection={null}
          fieldName='showBottomCollapse'
          label='Show collapse below table'
          updateField={updateField}
        />
        <CheckBox
          value={config.table.search ?? false}
          section='table'
          subsection={null}
          fieldName='search'
          label='Enable Search'
          updateField={updateField}
        />
        {config.table.search && (
          <div className='ms-4 mt-2' style={{ maxWidth: 'calc(100% - 1.5rem)' }}>
            <TextField
              value={config.table.searchPlaceholder || ''}
              section='table'
              fieldName='searchPlaceholder'
              label='Search Placeholder Text'
              placeholder='Filter...'
              updateField={updateField}
            />
          </div>
        )}
        <Select
          value={config.table.defaultSort?.column || ''}
          fieldName='column'
          section='table'
          subsection='defaultSort'
          label='Default Sort Column'
          initial='-Select-'
          options={Object.keys(config.columns)
            .filter(key => config.columns[key].dataTable !== false && config.columns[key].name)
            .map(key => ({
              label: config.columns[key].label || config.columns[key].name || key,
              value: key
            }))}
          updateField={(_section, _subSection, _fieldName, value) => {
            if (value === '' || value === '-Select-') {
              updateField('table', null, 'defaultSort', {})
            } else {
              updateField('table', null, 'defaultSort', { column: value, sortDirection: 'asc' })
            }
          }}
          tooltip={
            <Tooltip style={{ textTransform: 'none' }}>
              <Tooltip.Target>
                <Icon display='question' style={{ marginLeft: '0.5rem' }} />
              </Tooltip.Target>
              <Tooltip.Content>
                <p>Choose a column to sort the data table by when it first loads.</p>
              </Tooltip.Content>
            </Tooltip>
          }
        />
        {config.table.defaultSort?.column && (
          <Select
            value={config.table.defaultSort?.sortDirection || 'asc'}
            fieldName='sortDirection'
            section='table'
            subsection='defaultSort'
            label='Sort Direction'
            options={[
              { label: 'Ascending', value: 'asc' },
              { label: 'Descending', value: 'desc' },
              { label: 'Custom', value: 'custom' }
            ]}
            updateField={(_section, _subSection, _fieldName, value) => {
              const newDefaultSort = { ...config.table.defaultSort, sortDirection: value }
              if (value !== 'custom') {
                delete newDefaultSort.customOrder
              } else if (!newDefaultSort.customOrder?.length) {
                // Auto-populate customOrder with unique values so the table updates immediately
                const col = newDefaultSort.column
                const dataCol = config.columns?.[col]?.name || col
                if (dataCol && config.data?.length) {
                  newDefaultSort.customOrder = Array.from(
                    new Set(config.data.map(row => String(row[dataCol] ?? '')).filter(v => v !== ''))
                  )
                }
              }
              updateField('table', null, 'defaultSort', newDefaultSort)
            }}
          />
        )}
        {config.table.defaultSort?.column && config.table.defaultSort?.sortDirection === 'custom' && (
          <CustomSortOrder
            column={config.columns[config.table.defaultSort.column]?.name || config.table.defaultSort.column}
            data={config.data}
            customOrder={config.table.defaultSort.customOrder}
            updateField={updateField}
            displayTransform={config.table.defaultSort.column === 'geo' ? displayGeoName : undefined}
          />
        )}
        <CheckBox
          value={config.table.download}
          fieldName='download'
          label='Show Download CSV Link'
          section='table'
          updateField={updateField}
        />
        {config.table.download && (
          <>
            <CheckBox
              value={config.table.showDownloadLinkBelow}
              section='table'
              subsection={null}
              fieldName='showDownloadLinkBelow'
              label='Show Link Below Table'
              updateField={updateField}
              className='ms-4'
              onChange={event => {
                handleEditorChanges('toggleDownloadLinkBelow', event.target.checked)
              }}
            />
            <CheckBox
              value={config.table.downloadVisibleDataOnly}
              fieldName='downloadVisibleDataOnly'
              className='ms-4'
              label='Download only visible data'
              section='table'
              updateField={updateField}
            />
            <div className='ms-4 mt-2' style={{ maxWidth: 'calc(100% - 1.5rem)' }}>
              <TextField
                value={config.table.downloadDataLabel}
                section='table'
                fieldName='downloadDataLabel'
                label='Download Data Link Text'
                placeholder='Download Data (CSV)'
                updateField={updateField}
              />
            </div>
          </>
        )}
        {isDashboard && (
          <CheckBox
            value={config.table.showDataTableLink}
            section='table'
            subsection={null}
            fieldName='showDataTableLink'
            label='Show Data Table Name & Link'
            updateField={updateField}
          />
        )}
        <DownloadUrlControls
          hasUrlBackedDataSource={Boolean(isLoadedFromUrl)}
          showDownloadUrl={config.table.showDownloadUrl}
          downloadUrlLabel={config.table.downloadUrlLabel}
          updateField={updateField}
        />
        <CheckBox
          value={config.table.showFullGeoNameInCSV}
          section='table'
          subsection={null}
          fieldName='showFullGeoNameInCSV'
          label='Include Full Geo Name in CSV Download'
          updateField={updateField}
          onChange={event => {
            handleEditorChanges('toggleShowFullGeoNameInCSV', event.target.checked)
          }}
        />
        <CheckBox
          value={config.general.showDownloadImgButton}
          section='general'
          subsection={null}
          fieldName='showDownloadImgButton'
          label='Enable Image Download'
          updateField={updateField}
          onChange={event => {
            handleEditorChanges('toggleDownloadImgButton', event.target.checked)
          }}
        />
        {config.general.showDownloadImgButton && (
          <>
            {!config.general.showTitle && Boolean(config.general.title?.trim()) && (
              <CheckBox
                value={config.general.includeTitleInDownload || false}
                section='general'
                subsection={null}
                fieldName='includeTitleInDownload'
                label='Include Hidden Map Title in Download'
                updateField={updateField}
                className='ms-4'
                tooltip={
                  <Tooltip style={{ textTransform: 'none' }}>
                    <Tooltip.Target>
                      <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                    </Tooltip.Target>
                    <Tooltip.Content>
                      <p>Adds the configured map title to the downloaded PNG without displaying it on the webpage.</p>
                    </Tooltip.Content>
                  </Tooltip>
                }
              />
            )}
            <CheckBox
              value={config.general.includeContextInDownload}
              section='general'
              subsection={null}
              className='ms-4'
              fieldName='includeContextInDownload'
              label='Include Heading & Context'
              updateField={updateField}
              tooltip={
                <Tooltip style={{ textTransform: 'none' }}>
                  <Tooltip.Target>
                    <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                  </Tooltip.Target>
                  <Tooltip.Content>
                    <p>
                      When enabled, the image download will include the section heading (H2 or H3) and any explanatory
                      paragraphs that appear before the visualization
                    </p>
                  </Tooltip.Content>
                </Tooltip>
              }
            />
            <div className='ms-4 mt-2' style={{ maxWidth: 'calc(100% - 1.5rem)' }}>
              <TextField
                value={config.table.downloadImageLabel}
                section='table'
                fieldName='downloadImageLabel'
                label='Download Image Link Text'
                placeholder='Download Map (PNG)'
                updateField={updateField}
              />
            </div>
          </>
        )}
        {(config.table.download || config.general.showDownloadImgButton) && (
          <div className='ms-4 mt-2' style={{ maxWidth: 'calc(100% - 1.5rem)' }}>
            <TextField
              value={config.table.downloadFileName || ''}
              section='table'
              fieldName='downloadFileName'
              label='Download Filename'
              placeholder='Derived from dataset or title'
              updateField={updateField}
              tooltip={
                <Tooltip style={{ textTransform: 'none' }}>
                  <Tooltip.Target>
                    <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                  </Tooltip.Target>
                  <Tooltip.Content>
                    <p>Sets the CSV filename and the image filename when the map does not have a title.</p>
                  </Tooltip.Content>
                </Tooltip>
              }
            />
          </div>
        )}

        {/* <label className='checkbox'>
        <input
          type='checkbox'
          checked={state.general.showDownloadPdfButton}
          onChange={event => {
            handleEditorChanges('toggleDownloadPdfButton', event.target.checked)
          }}
        />
        <span className='edit-label'>Enable Pdf Download</span>
      </label> */}
      </AccordionItemPanel>
    </AccordionItem>
  )
}

export default DataTableSection
