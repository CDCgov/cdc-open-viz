import React from 'react'

export default function DataImport(props) {

  const { configureData, updateDescriptionProp, visualizationKey, dataKey } = props;

  return (
    <>
      <div className="question">
        <div className="heading-3">Describe Data</div>
        <div className="heading-4 data-question">Data Orientation</div>
        <div className="table-button-container">
          <div
            className={'table-button' + (configureData.dataDescription && configureData.dataDescription.horizontal === false ? ' active' : '')}
            onClick={() => {
              updateDescriptionProp(visualizationKey, dataKey, 'horizontal', false)
            }}>
            <strong>Vertical</strong>
            <p>Values for map geography or chart date/category axis are contained in a single <em>column</em>.</p>
            <table>
              <tbody>
              <tr>
                <th>Date</th>
                <th>Value</th>
                <th>...</th>
              </tr>
              <tr>
                <td>01/01/2020</td>
                <td>150</td>
                <td>...</td>
              </tr>
              <tr>
                <td>02/01/2020</td>
                <td>150</td>
                <td>...</td>
              </tr>
              </tbody>
            </table>
            <table>
              <tbody>
              <tr>
                <th>State</th>
                <th>Value</th>
                <th>...</th>
              </tr>
              <tr>
                <td>Georgia</td>
                <td>150</td>
                <td>...</td>
              </tr>
              <tr>
                <td>Florida</td>
                <td>150</td>
                <td>...</td>
              </tr>
              </tbody>
            </table>
          </div>
          <div
            className={'table-button' + (configureData.dataDescription && configureData.dataDescription.horizontal === true ? ' active' : '')}
            onClick={() => {
              updateDescriptionProp(visualizationKey, dataKey, 'horizontal', true)
            }}>
            <strong>Horizontal</strong>
            <p>Values for map geography or chart date/category axis are contained in a single <em>row</em></p>
            <table>
                <tbody>
                  <tr>
                      <th>Date</th>
                      <td>01/01/2020</td>
                      <td>02/01/2020</td>
                      <td>...</td>
                  </tr>
                  <tr>
                      <th>Value</th>
                      <td>100</td>
                      <td>150</td>
                      <td>...</td>
                  </tr>
                </tbody>
            </table>
            <table>
              <tbody>
              <tr>
                <th>State</th>
                <td>Georgia</td>
                <td>Florida</td>
                <td>...</td>
              </tr>
              <tr>
                <th>Value</th>
                <td>100</td>
                <td>150</td>
                <td>...</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {configureData.dataDescription && (
        <>
          <div className="question">
            <div className="heading-4 data-question">Are there multiple series represented in your data?</div>
            <div>
              <button className={configureData.dataDescription.series === true ? 'btn btn-primary active' : 'btn btn-primary'} style={{ marginRight: '.5em' }} onClick={() => { updateDescriptionProp(visualizationKey, dataKey, 'series', true) }}>Yes</button>
              <button className={configureData.dataDescription.series === false ? 'btn btn-primary active' : 'btn btn-primary'} onClick={() => {updateDescriptionProp(visualizationKey, dataKey, 'series', false)}}>No</button>
            </div>
          </div>
          {configureData.dataDescription.horizontal === true && configureData.dataDescription.series === true && (
            <div className="question">
              <div className="heading-4 data-question">Which property in the dataset represents which series the row is describing?</div>
              <select onChange={(e) => {updateDescriptionProp(visualizationKey, dataKey, 'seriesKey', e.target.value)}} value={configureData.dataDescription.seriesKey}>
                <option value="">Choose an option</option>
                {Object.keys(configureData.data[0]).map((value, index) => <option value={value} key={index}>{value}</option>)}
              </select>
            </div>
          )}
          {configureData.dataDescription.horizontal === false && configureData.dataDescription.series === true && (
            <>
              <div className="question">
                <div className="heading-4 data-question">Are the series values in your data represented in a single row, or across multiple rows?</div>
                <div className="table-button-container">
                  <div className={'table-button' + (configureData.dataDescription.singleRow === true ? ' active' : '')} onClick={() => {configureData.dataFileName, updateDescriptionProp('singleRow', true)}}>
                    <p>Each row contains the data for an individual series in itself.</p>
                    <table>
                      <tbody>
                      <tr>
                        <th>Date</th>
                        <th>Virus 1</th>
                        <th>Virus 2</th>
                        <th>...</th>
                      </tr>
                      <tr>
                        <td>01/01/2020</td>
                        <td>100</td>
                        <td>150</td>
                        <td>...</td>
                      </tr>
                      <tr>
                        <td>02/01/2020</td>
                        <td>15</td>
                        <td>20</td>
                        <td>...</td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className={'table-button' + (configureData.dataDescription.singleRow === false ? ' active' : '')} onClick={() => {updateDescriptionProp(visualizationKey, dataKey, 'singleRow', false)}}>
                    <p>Each series data is broken out into multiple rows.</p>
                    <table>
                      <tbody>
                      <tr>
                        <th>Virus</th>
                        <th>Date</th>
                        <th>Value</th>
                      </tr>
                      <tr>
                        <td>Virus 1</td>
                        <td>01/01/2020</td>
                        <td>100</td>
                      </tr>
                      <tr>
                        <td>Virus 1</td>
                        <td>02/01/2020</td>
                        <td>150</td>
                      </tr>
                      <tr>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                      </tr>
                      <tr>
                        <td>Virus 2</td>
                        <td>01/01/2020</td>
                        <td>15</td>
                      </tr>
                      <tr>
                        <td>Virus 2</td>
                        <td>02/01/2020</td>
                        <td>20</td>
                      </tr>
                      <tr>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              {configureData.dataDescription.singleRow === false && (
                <>
                  <div className="question">
                    <div className="heading-4 data-question">Which property in the dataset represents which series the row is describing?</div>
                    <select onChange={(e) => {updateDescriptionProp(visualizationKey, dataKey, 'seriesKey', e.target.value)}}>
                      <option value="">Choose an option</option>
                      {Object.keys(configureData.data[0]).map((value, index) => <option value={value} key={index}>{value}</option>)}
                    </select>
                  </div>
                  <div className="question">
                    <div className="heading-4 data-question">Which property in the dataset represents the values for the category/date axis or map geography?</div>
                    <select onChange={(e) => {updateDescriptionProp(visualizationKey, dataKey, 'xKey', e.target.value)}}>
                      <option value="">Choose an option</option>
                      {Object.keys(configureData.data[0]).map((value, index) => <option value={value} key={index}>{value}</option>)}
                    </select>
                  </div>
                  <div className="question">
                    <div className="heading-4 data-question">Which property in the dataset represents the numeric value?</div>
                    <select onChange={(e) => {updateDescriptionProp(visualizationKey, dataKey, 'valueKey', e.target.value)}}>
                      <option value="">Choose an option</option>
                      {Object.keys(configureData.data[0]).map((value, index) => <option value={value} key={index}>{value}</option>)}
                    </select>
                  </div>
                </>
              )}
            </>
          )}
        </>
      )}
      {configureData.formattedData && (
        <p>Data configured successfully</p>
      )}
    </>
  )
}