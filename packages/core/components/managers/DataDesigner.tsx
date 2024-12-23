import { useEffect } from 'react'

import Button from '../elements/Button'
import Card from '../elements/Card'

import {
  DATA_TABLE_VERTICAL,
  DATA_TABLE_HORIZONTAL,
  DATA_TABLE_SINGLE_ROW,
  DATA_TABLE_MULTI_ROW
} from '../../templates/dataDesignerTables'
import '../../styles/v2/components/data-designer.scss'
import { ConfigureData } from '../../types/ConfigureData'

type DataDesignerProps = {
  configureData?: ConfigureData
  updateDescriptionProp: (propName: string, value: any) => void // used to update data description fields
  visualizationKey: string
  config?: any // can be one of many different types of chart configs that aren't fully established yet
  setConfig?: (newConfig: any) => void
}

const DataDesigner = (props: DataDesignerProps) => {
  const { configureData, updateDescriptionProp, config, setConfig } = props
  const hasDataOrientation = config?.visualizationType !== 'Forest Plot'
  const hasMultipleSeries = config?.visualizationType !== 'Forest Plot'
  const hasRowSelection = config?.visualizationType !== 'Forest Plot'

  useEffect(() => {
    if (config?.visualizationType === 'Forest Plot') {
      // needed to properly set data up?
      setConfig({
        ...config,
        dataDescription: {
          series: true,
          horizontal: false,
          singleRow: true
        }
      })
    }
  }, [])

  return (
    <div className='cove-data-designer__container'>
      <div className='mb-2'>
        <div className='cove-heading--3 fw-bold mb-1'>Describe Data</div>
        {hasDataOrientation && (
          <>
            <div className='cove-heading--3 fw-normal mb-1'>Data Orientation</div>
            <div className='grid grid-gap-2 mb-4'>
              <div className='column'>
                <button
                  className={
                    'cove-data-designer__button' +
                    (configureData.dataDescription && configureData.dataDescription.horizontal === false
                      ? ' active'
                      : '')
                  }
                  onClick={() => {
                    updateDescriptionProp('horizontal', false)
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
                  className={
                    'cove-data-designer__button' +
                    (configureData.dataDescription && configureData.dataDescription.horizontal === true
                      ? ' active'
                      : '')
                  }
                  onClick={() => {
                    updateDescriptionProp('horizontal', true)
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
          </>
        )}
      </div>
      {configureData.dataDescription && (
        <>
          {hasMultipleSeries && (
            <div className='mb-2'>
              <div className='mb-1'>Are there multiple series represented in your data?</div>
              <div>
                <Button
                  style={{ backgroundColor: '#00345d' }}
                  hoverStyle={{ backgroundColor: '#015daa' }}
                  className='me-1'
                  onClick={() => {
                    updateDescriptionProp('series', true)
                  }}
                  active={configureData.dataDescription.series === true}
                >
                  Yes
                </Button>
                <Button
                  style={{ backgroundColor: '#00345d' }}
                  hoverStyle={{ backgroundColor: '#015daa' }}
                  onClick={() => {
                    updateDescriptionProp('series', false)
                  }}
                  active={configureData.dataDescription.series === false}
                >
                  No
                </Button>
              </div>
            </div>
          )}
          {configureData.dataDescription.horizontal === true && configureData.dataDescription.series === true && (
            <div className='mb-2'>
              <div className='mb-1'>Which property in the dataset represents which series the row is describing?</div>
              <select
                onChange={e => {
                  updateDescriptionProp('seriesKey', e.target.value)
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
          {configureData.dataDescription.horizontal === false &&
            configureData.dataDescription.series === true &&
            hasRowSelection && (
              <>
                <div className='mb-2'>
                  <div className='mb-1'>
                    Are the series values in your data represented in a single row, or across multiple rows?
                  </div>
                  <div className='grid grid-gap-2 mb-4'>
                    <div className='column'>
                      <button
                        className={
                          'cove-data-designer__button' +
                          (configureData.dataDescription.singleRow === true ? ' active' : '')
                        }
                        onClick={() => {
                          updateDescriptionProp('singleRow', true)
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
                        className={
                          'cove-data-designer__button' +
                          (configureData.dataDescription.singleRow === false ? ' active' : '')
                        }
                        onClick={() => {
                          updateDescriptionProp('singleRow', false)
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
                      <div className='mb-1'>
                        Which property in the dataset represents which series the row is describing?
                      </div>
                      <select
                        onChange={e => {
                          updateDescriptionProp('seriesKey', e.target.value)
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
                      <div className='mb-1'>
                        Which property in the dataset represents the values for the category/date axis or map geography?
                      </div>
                      <select
                        onChange={e => {
                          updateDescriptionProp('xKey', e.target.value)
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
                      <div className='mb-1'>
                        Which properties in the dataset represent the numeric value? (all remaining properties will be
                        treated as filters)
                      </div>
                      {configureData.dataDescription.valueKeysTallSupport &&
                        configureData.dataDescription.valueKeysTallSupport.length > 0 && (
                          <ul className='value-list'>
                            {configureData.dataDescription.valueKeysTallSupport.map((valueKey, index) => (
                              <li key={`value-keys-list-${index}`}>
                                {valueKey}
                                <button
                                  onClick={() => {
                                    let newValueKeys = configureData.dataDescription.valueKeysTallSupport
                                    newValueKeys.splice(index, 1)
                                    updateDescriptionProp('valueKeysTallSupport', newValueKeys)
                                  }}
                                >
                                  X
                                </button>
                              </li>
                            ))}
                          </ul>
                        )}
                      <select
                        onChange={e => {
                          if (
                            e.target.value &&
                            (!configureData.dataDescription.valueKeysTallSupport ||
                              configureData.dataDescription.valueKeysTallSupport.indexOf(e.target.value) === -1)
                          ) {
                            updateDescriptionProp('valueKeysTallSupport', [
                              ...(configureData.dataDescription.valueKeysTallSupport || []),
                              e.target.value
                            ])
                          }
                        }}
                      >
                        <option value=''>Choose an option</option>
                        {Object.keys(configureData.data[0])
                          .filter(
                            value =>
                              !configureData.dataDescription.valueKeysTallSupport ||
                              configureData.dataDescription.valueKeysTallSupport.indexOf(value) === -1
                          )
                          .map((value, index) => (
                            <option value={value} key={`value-keys-option-${index}`}>
                              {value}
                            </option>
                          ))}
                      </select>
                    </div>
                    <div className='mb-2'>
                      <div className='mb-1'>
                        (Optional) Which properties in the dataset should be ignored? (will not be used or treated as
                        filters)
                      </div>
                      {configureData.dataDescription.ignoredKeys &&
                        configureData.dataDescription.ignoredKeys.length > 0 && (
                          <ul className='value-list'>
                            {configureData.dataDescription.ignoredKeys.map((ignoredKey, index) => (
                              <li key={`value-keys-list-${index}`}>
                                {ignoredKey}
                                <button
                                  onClick={() => {
                                    let newIgnoredKeys = configureData.dataDescription.ignoredKeys
                                    newIgnoredKeys.splice(index, 1)
                                    updateDescriptionProp('ignoredKeys', newIgnoredKeys)
                                  }}
                                >
                                  X
                                </button>
                              </li>
                            ))}
                          </ul>
                        )}
                      <select
                        onChange={e => {
                          if (e.target.value) {
                            updateDescriptionProp('ignoredKeys', [
                              ...(configureData.dataDescription.ignoredKeys || []),
                              e.target.value
                            ])
                          }
                          e.target.value = ''
                        }}
                      >
                        <option value=''>Choose an option</option>
                        {Object.keys(configureData.data[0])
                          .filter(
                            value =>
                              !configureData.dataDescription.ignoredKeys ||
                              configureData.dataDescription.ignoredKeys.indexOf(value) === -1
                          )
                          .map((value, index) => (
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

          {config?.visualizationType === 'Forest Plot' && (
            <>
              <div className='mb-2'>
                <div className='mb-1'>Which column represents the Study ID?</div>
                <select
                  onChange={e => {
                    setConfig({
                      ...config,
                      xAxis: {
                        ...config.xAxis,
                        dataKey: e.target.value
                      }
                    })
                  }}
                  defaultValue={'Select'}
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
                <div className='mb-1'>Which column represents your estimate field?</div>
                <select
                  onChange={e => {
                    setConfig({
                      ...config,
                      forestPlot: {
                        ...config.forestPlot,
                        estimateField: e.target.value
                      }
                    })
                  }}
                  defaultValue={'Select'}
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
                <div className='mb-1'>Which column represents the low confidence interval?</div>
                <select
                  onChange={e => {
                    setConfig({
                      ...config,
                      forestPlot: {
                        ...config.forestPlot,
                        lower: e.target.value
                      }
                    })
                  }}
                  defaultValue={'Select'}
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
                <div className='mb-1'>Which column represents the high confidence interval?</div>
                <select
                  onChange={e => {
                    setConfig({
                      ...config,
                      forestPlot: {
                        ...config.forestPlot,
                        upper: e.target.value
                      }
                    })
                  }}
                  defaultValue={'Select'}
                >
                  <option value=''>Choose an option</option>
                  {Object.keys(configureData.data[0]).map((value, index) => (
                    <option value={value} key={index}>
                      {value}
                    </option>
                  ))}
                </select>
              </div>
            </>
          )}
        </>
      )}
      {configureData.dataDescription && configureData.formattedData && <div>Data configured successfully</div>}
    </div>
  )
}

export default DataDesigner
