// Third Party
import PropTypes from 'prop-types'

// Components
import AlertBox from '../ui/AlertBox'
import Button from '../element/Button'
import Card from '../element/Card'

// Data
import { DATA_TABLE_VERTICAL, DATA_TABLE_HORIZONTAL, DATA_TABLE_SINGLE_ROW, DATA_TABLE_MULTI_ROW } from '../../templates/dataDesignerTables'

// Components - Core
import Icon from '../ui/Icon'
import InputSelect from '../input/InputSelect'

// Styles
import '../../styles/v2/components/manager/data-designer.scss'

const DataDesigner = ({ configureData, updateDescriptionProp, visualizationKey, dataKey }) => {
  return (
    <div className="cove-data-designer__container">
      <div className="mb-2">
        <div className="cove-heading--3 fw-bold mb-1">Describe Data</div>
        <div className="cove-heading--4 fw-normal mb-1">Data Orientation</div>
        <div className="cove-grid cove-grid--gap--2 mb-4">
          <div className="cove-grid__col--12 cove-grid__col--lg-6">
            <button
              className={'cove-data-designer__button' + (configureData?.dataDescription && configureData?.dataDescription?.horizontal === false ? ' active' : '')}
              onClick={() => {
                updateDescriptionProp(visualizationKey, dataKey, 'horizontal', false)
              }}
            >
              <Card>
                <strong className="cove-heading--3">Vertical</strong>
                <p className="mb-1">
                  Values for map geography or chart date/category axis are contained in a single <em>column</em>.
                </p>
                {DATA_TABLE_VERTICAL}
              </Card>
            </button>
          </div>
          <div className="cove-grid__col--12 cove-grid__col--lg-6">
            <button
              className={'cove-data-designer__button' + (configureData?.dataDescription && configureData?.dataDescription?.horizontal === true ? ' active' : '')}
              onClick={() => {
                updateDescriptionProp(visualizationKey, dataKey, 'horizontal', true)
              }}
            >
              <Card>
                <strong className="cove-heading--3">Horizontal</strong>
                <p className="mb-1">
                  Values for map geography or chart date/category axis are contained in a single <em>row</em>
                </p>
                {DATA_TABLE_HORIZONTAL}
              </Card>
            </button>
          </div>
        </div>
      </div>
      {configureData?.dataDescription && (
        <>
          <div className="mb-2">
            <div className="mb-1">Are there multiple series represented in your data?</div>
            <div>
              <Button
                style={{ backgroundColor: '#00345d' }}
                hoverStyle={{ backgroundColor: '#015daa' }}
                className="mr-1"
                onClick={() => {
                  updateDescriptionProp(visualizationKey, dataKey, 'series', true)
                }}
                active={configureData?.dataDescription?.series === true}
              >
                Yes
              </Button>
              <Button
                style={{ backgroundColor: '#00345d' }}
                hoverStyle={{ backgroundColor: '#015daa' }}
                onClick={() => {
                  updateDescriptionProp(visualizationKey, dataKey, 'series', false)
                }}
                active={configureData?.dataDescription?.series === false}
              >
                No
              </Button>
            </div>
          </div>
          {configureData?.dataDescription?.horizontal === true && configureData?.dataDescription?.series === true && (
            <div className="mb-2">
              <div className="mb-1">Which property in the dataset represents which series the row is describing?</div>
              <InputSelect
                onChange={e => {
                  updateDescriptionProp(visualizationKey, dataKey, 'seriesKey', e.target.value)
                }}
                defaultValue={configureData?.dataDescription?.seriesKey}
                options={Object.keys(configureData?.data[0])}
                initial="Choose an option..."
                initialDisabled
              />
            </div>
          )}
          {configureData?.dataDescription?.horizontal === false && configureData?.dataDescription?.series === true && (
            <>
              <div className="mb-2">
                <div className="mb-1">Are the series values in your data represented in a single row, or across multiple rows?</div>
                <div className="cove-grid cove-grid--gap--2 mb-4">
                  <div className="cove-grid__col--6">
                    <button
                      className={'cove-data-designer__button' + (configureData?.dataDescription?.singleRow === true ? ' active' : '')}
                      onClick={() => {
                        updateDescriptionProp(visualizationKey, dataKey, 'singleRow', true)
                      }}
                    >
                      <Card>
                        <strong className="cove-heading--3">Single Row</strong>
                        <p className="mb-1">Each row contains the data for an individual series in itself.</p>
                        {DATA_TABLE_SINGLE_ROW}
                      </Card>
                    </button>
                  </div>
                  <div className="cove-grid__col--6">
                    <button
                      className={'cove-data-designer__button' + (configureData?.dataDescription?.singleRow === false ? ' active' : '')}
                      onClick={() => {
                        updateDescriptionProp(visualizationKey, dataKey, 'singleRow', false)
                      }}
                    >
                      <Card>
                        <strong className="cove-heading--3">Multiple Rows</strong>
                        <p className="mb-1">Each series data is broken out into multiple rows.</p>
                        {DATA_TABLE_MULTI_ROW}
                      </Card>
                    </button>
                  </div>
                </div>
              </div>

              {configureData?.dataDescription?.singleRow === false && (
                <>
                  <div className="mb-2">
                    <div className="mb-1">Which property in the dataset represents which series the row is describing?</div>
                    <InputSelect
                      onChange={e => {
                        updateDescriptionProp(visualizationKey, dataKey, 'seriesKey', e.target.value)
                      }}
                      defaultValue={configureData?.dataDescription?.seriesKey}
                      options={Object.keys(configureData?.data[0])}
                      initial="Choose an option..."
                      initialDisabled
                    />
                  </div>
                  <div className="mb-2">
                    <div className="mb-1">Which property in the dataset represents the values for the category/date axis or map geography?</div>
                    <InputSelect
                      onChange={e => {
                        updateDescriptionProp(visualizationKey, dataKey, 'xKey', e.target.value)
                      }}
                      defaultValue={configureData?.dataDescription?.xKey}
                      options={Object.keys(configureData?.data[0])}
                      initial="Choose an option..."
                      initialDisabled
                    />
                  </div>
                  <div className="mb-2">
                    <div className="mb-1">Which property in the dataset represents the numeric value?</div>
                    <InputSelect
                      onChange={e => {
                        updateDescriptionProp(visualizationKey, dataKey, 'valueKey', e.target.value)
                      }}
                      defaultValue={configureData?.dataDescription.valueKey}
                      options={Object.keys(configureData?.data[0])}
                      initial="Choose an option..."
                      initialDisabled
                    />
                  </div>
                  <div className="mb-2">
                    <div className="mb-1">(Optional) Which properties in the dataset should be ignored? (will not be used or treated as filters)</div>
                    <InputSelect
                      onChange={e => {
                        if (e.target.value) {
                          updateDescriptionProp(visualizationKey, dataKey, 'ignoredKeys', [ ...(configureData?.dataDescription?.ignoredKeys || []), e.target.value ])
                        }
                        e.target.value = ''
                      }}
                      options={Object.keys(configureData?.data[0]).filter(value => !configureData?.dataDescription?.ignoredKeys || configureData?.dataDescription?.ignoredKeys.indexOf(value) === -1)}
                      initial="Choose an option..."
                      initialSnap
                      initialDisabled
                    />
                    {configureData?.dataDescription?.ignoredKeys && configureData?.dataDescription?.ignoredKeys.length > 0 && (
                      <ul className="cove-data-designer__ignored-keys">
                        {configureData?.dataDescription?.ignoredKeys.map((ignoredKey, index) => (
                          <li key={`value-keys-list-${index}`}>
                            <Button className="cove-data-designer__ignored-keys-tag"
                                    onClick={() => {
                                      let newIgnoredKeys = configureData?.dataDescription?.ignoredKeys
                                      newIgnoredKeys.splice(index, 1)
                                      updateDescriptionProp(visualizationKey, dataKey, 'ignoredKeys', newIgnoredKeys)
                                    }}
                            >
                              <span className="cove-data-designer__ignored-keys-tag--name">{ignoredKey}</span>
                              <Icon className="cove-data-designer__ignored-keys-tag--icon" display="close"/>
                            </Button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </>
              )}
            </>
          )}
        </>
      )}
      {configureData?.dataDescription && configureData?.formattedData && <AlertBox type="success">Data configured successfully!</AlertBox>}
    </div>
  )
}

DataDesigner.propTypes = {
  /** Array list of datapoints to be processed by the DataDesigner */
  configureData: PropTypes.object,
  /** Function used update the data description key, prop-drilled from parent */
  updateDescriptionProp: PropTypes.func,
  /** Specifies the unique visualization key that uses the data */
  visualizationKey: PropTypes.string,
  /** Specifies the key for the dataset */
  dataKey: PropTypes.string
}

export default DataDesigner
