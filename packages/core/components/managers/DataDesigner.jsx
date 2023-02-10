import React from 'react'

import Button from '../elements/Button'
import Card from '../elements/Card'

import { DATA_TABLE_VERTICAL, DATA_TABLE_HORIZONTAL, DATA_TABLE_SINGLE_ROW, DATA_TABLE_MULTI_ROW } from '../../templates/dataDesignerTables'
import '../../styles/v2/components/data-designer.scss'

const DataDesigner = props => {
  const { configureData, updateDescriptionProp, visualizationKey, dataKey } = props


  return (
    <div className='cove-data-designer__container'>
      <div className='mb-2'>
        <div className='cove-heading--3 fw-bold mb-1'>Describe Data</div>
        <div className='cove-heading--3 fw-normal mb-1'>Data Orientation</div>
        <div className='grid grid-gap-2 mb-4'>
          <div className='column'>
            <button
              className={'cove-data-designer__button' + (configureData.dataDescription && configureData.dataDescription.horizontal === false ? ' active' : '')}
              onClick={() => {
                updateDescriptionProp(visualizationKey, dataKey, 'horizontal', false)
              }}
            >
              <Card>
                <strong className='cove-heading--3'>Vertical</strong>
                <p className='mb-1'>
                  Values for map geography or chart date/category axis are contained in a single <em>column</em>.
                </p>
                {DATA_TABLE_VERTICAL}
              </Card>
            </button>
          </div>
          <div className='column'>
            <button
              className={'cove-data-designer__button' + (configureData.dataDescription && configureData.dataDescription.horizontal === true ? ' active' : '')}
              onClick={() => {
                updateDescriptionProp(visualizationKey, dataKey, 'horizontal', true)
              }}
            >
              <Card>
                <strong className='cove-heading--3'>Horizontal</strong>
                <p className='mb-1'>
                  Values for map geography or chart date/category axis are contained in a single <em>row</em>
                </p>
                {DATA_TABLE_HORIZONTAL}
              </Card>
            </button>
          </div>
        </div>
      </div>
      {configureData.dataDescription && (
        <>
          <div className='mb-2'>
            <div className='mb-1'>Are there multiple series represented in your data?</div>
            <div>
              <Button
                style={{ backgroundColor: '#00345d' }}
                hoverStyle={{ backgroundColor: '#015daa' }}
                className='mr-1'
                onClick={() => {
                  updateDescriptionProp(visualizationKey, dataKey, 'series', true)
                }}
                active={configureData.dataDescription.series === true}
              >
                Yes
              </Button>
              <Button
                style={{ backgroundColor: '#00345d' }}
                hoverStyle={{ backgroundColor: '#015daa' }}
                onClick={() => {
                  updateDescriptionProp(visualizationKey, dataKey, 'series', false)
                }}
                active={configureData.dataDescription.series === false}
              >
                No
              </Button>
            </div>
          </div>
          {configureData.dataDescription.horizontal === true && configureData.dataDescription.series === true && (
            <div className='mb-2'>
              <div className='mb-1'>Which property in the dataset represents which series the row is describing?</div>
              <select
                onChange={e => {
                  updateDescriptionProp(visualizationKey, dataKey, 'seriesKey', e.target.value)
                }}
                defaultValue={configureData.dataDescription.seriesKey}
              >
                <option value=''>Choose an option</option>
                {Object.keys(configureData.data[0]).map((value, index) => (
                  <option value={value} key={index}>
                    {value}
                  </option>
                ))}
              </select>
            </div>
          )}
          {configureData.dataDescription.horizontal === false && configureData.dataDescription.series === true && (
            <>
              <div className='mb-2'>
                <div className='mb-1'>Are the series values in your data represented in a single row, or across multiple rows?</div>
                <div className='grid grid-gap-2 mb-4'>
                  <div className='column'>
                    <button
                      className={'cove-data-designer__button' + (configureData.dataDescription.singleRow === true ? ' active' : '')}
                      onClick={() => {
                        updateDescriptionProp(visualizationKey, dataKey, 'singleRow', true)
                      }}
                    >
                      <Card>
                        <strong className='cove-heading--3'>Single Row</strong>
                        <p className='mb-1'>Each row contains the data for an individual series in itself.</p>
                        {DATA_TABLE_SINGLE_ROW}
                      </Card>
                    </button>
                  </div>
                  <div className='column'>
                    <button
                      className={'cove-data-designer__button' + (configureData.dataDescription.singleRow === false ? ' active' : '')}
                      onClick={() => {
                        updateDescriptionProp(visualizationKey, dataKey, 'singleRow', false)
                      }}
                    >
                      <Card>
                        <strong className='cove-heading--3'>Multiple Rows</strong>
                        <p className='mb-1'>Each series data is broken out into multiple rows.</p>
                        {DATA_TABLE_MULTI_ROW}
                      </Card>
                    </button>
                  </div>
                </div>
              </div>
              {configureData.dataDescription.singleRow === false && (
                <>
                  <div className='mb-2'>
                    <div className='mb-1'>Which property in the dataset represents which series the row is describing?</div>
                    <select
                      onChange={e => {
                        updateDescriptionProp(visualizationKey, dataKey, 'seriesKey', e.target.value)
                      }}
                      defaultValue={configureData.dataDescription.seriesKey}
                    >
                      <option value=''>Choose an option</option>
                      {Object.keys(configureData.data[0]).map((value, index) => (
                        <option value={value} key={index}>
                          {value}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className='mb-2'>
                    <div className='mb-1'>Which property in the dataset represents the values for the category/date axis or map geography?</div>
                    <select
                      onChange={e => {
                        updateDescriptionProp(visualizationKey, dataKey, 'xKey', e.target.value)
                      }}
                      defaultValue={configureData.dataDescription.xKey}
                    >
                      <option value=''>Choose an option</option>
                      {Object.keys(configureData.data[0]).map((value, index) => (
                        <option value={value} key={index}>
                          {value}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className='mb-2'>
                    <div className='mb-1'>Which properties in the dataset represent the numeric value?  (all remaining properties will be treated as filters)</div>
                    {configureData.dataDescription.valueKeys && configureData.dataDescription.valueKeys.length > 0 && (
                      <ul className="value-list">
                        {configureData.dataDescription.valueKeys.map((valueKey, index) => (
                          <li key={`value-keys-list-${index}`}>{valueKey}<button onClick={() => {
                            let newValueKeys = configureData.dataDescription.valueKeys;
                            newValueKeys.splice(index, 1);
                            updateDescriptionProp(visualizationKey, dataKey, 'valueKeys', newValueKeys)
                          }}>X</button></li>
                        ))}
                      </ul>
                    )}
                    <select
                      onChange={e => {
                        if(e.target.value && (!configureData.dataDescription.valueKeys || configureData.dataDescription.valueKeys.indexOf(e.target.value) === -1)){
                          updateDescriptionProp(visualizationKey, dataKey, 'valueKeys', [...(configureData.dataDescription.valueKeys || []), e.target.value])
                        }
                      }}
                    >
                      <option value=''>Choose an option</option>
                      {Object.keys(configureData.data[0]).filter(value => !configureData.dataDescription.valueKeys || configureData.dataDescription.valueKeys.indexOf(value) === -1).map((value, index) => (
                        <option value={value} key={`value-keys-option-${index}`}>
                          {value}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className='mb-2'>
                    <div className='mb-1'>(Optional) Which properties in the dataset should be ignored?  (will not be used or treated as filters)</div>
                    {configureData.dataDescription.ignoredKeys && configureData.dataDescription.ignoredKeys.length > 0 && (
                      <ul className="value-list">
                        {configureData.dataDescription.ignoredKeys.map((ignoredKey, index) => (
                          <li key={`value-keys-list-${index}`}>{ignoredKey}<button onClick={() => {
                            let newIgnoredKeys = configureData.dataDescription.ignoredKeys;
                            newIgnoredKeys.splice(index, 1);
                            updateDescriptionProp(visualizationKey, dataKey, 'ignoredKeys', newIgnoredKeys)
                          }}>X</button></li>
                        ))}
                      </ul>
                    )}
                    <select
                      onChange={e => {
                        if(e.target.value){
                          updateDescriptionProp(visualizationKey, dataKey, 'ignoredKeys', [...(configureData.dataDescription.ignoredKeys || []), e.target.value])
                        }
                        e.target.value = '';
                      }}
                    >
                      <option value=''>Choose an option</option>
                      {Object.keys(configureData.data[0]).filter(value => !configureData.dataDescription.ignoredKeys || configureData.dataDescription.ignoredKeys.indexOf(value) === -1).map((value, index) => (
                        <option value={value} key={`ignored-keys-option-${index}`}>
                          {value}
                        </option>
                      ))}
                    </select>
                  </div>
                </>
              )}
            </>
          )}
        </>
      )}
      {configureData.dataDescription && configureData.formattedData && <div>Data configured successfully</div>}
    </div>
  )
}

export default DataDesigner
