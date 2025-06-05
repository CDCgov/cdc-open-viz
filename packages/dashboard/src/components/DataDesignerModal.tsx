import { useGlobalContext } from '@cdc/core/components/GlobalContext'
import DataDesigner from '@cdc/core/components/managers/DataDesigner'
import { useContext, useMemo, useState } from 'react'
import { DashboardContext, DashboardDispatchContext } from '../DashboardContext'
import Modal from '@cdc/core/components/ui/Modal'
import Loader from '@cdc/core/components/Loader'
import { CheckBox } from '@cdc/core/components/EditorPanel/Inputs'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import _ from 'lodash'
import fetchRemoteData from '@cdc/core/helpers/fetchRemoteData'
import DataTransform from '@cdc/core/helpers/DataTransform'
import { ConfigureData } from '@cdc/core/types/ConfigureData'
import Icon from '@cdc/core/components/ui/Icon'
import InputSelect from '@cdc/core/components/inputs/InputSelect'

type DataDesignerModalProps = {
  rowIndex: number
  vizKey?: string
}

export const DataDesignerModal: React.FC<DataDesignerModalProps> = ({ vizKey, rowIndex }) => {
  const { config } = useContext(DashboardContext)
  const { overlay } = useGlobalContext()
  const transform = new DataTransform()
  const dispatch = useContext(DashboardDispatchContext)
  const [canContinue, setCanContinue] = useState(false)
  const [useRow, setUseRow] = useState(!vizKey)
  const [multiViz, setMultiViz] = useState(!!config.rows[rowIndex].multiVizColumn)
  const [errorMessage, setErrorMessage] = useState('')
  const [loadingAPIData, setLoadingAPIData] = useState(false)

  const isUpdatingVisualization = useMemo(() => {
    return !!vizKey && !useRow
  }, [vizKey, useRow])

  const configureData = useMemo(() => {
    if (isUpdatingVisualization) {
      return config.visualizations[vizKey]
    }
    return config.rows[rowIndex]
  }, [config.visualizations, config.rows, rowIndex, isUpdatingVisualization])

  const fetchData = async datasetKey => {
    const { data, dataUrl } = config.datasets[datasetKey]
    if (!dataUrl) return data
    let newData = data
    const noCachedData = dataUrl && !data
    const dataSetChanged = datasetKey !== configureData.dataKey
    setErrorMessage('')
    if (dataSetChanged || noCachedData) {
      setLoadingAPIData(true)
      try {
        newData = await fetchRemoteData(dataUrl)
        newData = transform.autoStandardize(newData)
      } catch (e) {
        setErrorMessage('There was an issue loading the data source. Please check the datasource URL and try again.')
      }

      setLoadingAPIData(false)
    }
    return newData
  }

  const updateConfigureData = (newConfigureData: Partial<ConfigureData>) => {
    if (isUpdatingVisualization) {
      dispatch({ type: 'UPDATE_VISUALIZATION', payload: { vizKey, configureData: newConfigureData } })
    } else {
      dispatch({ type: 'UPDATE_ROW', payload: { rowIndex, rowData: newConfigureData } })
    }
  }

  const removeDatasetsFromVisualizations = () => {
    const columnVisualizations = config.rows[rowIndex].columns.map(column => column.widget).filter(Boolean)
    columnVisualizations.forEach(currentVisualizationKey => {
      dispatch({ type: 'RESET_VISUALIZATION', payload: { vizKey: currentVisualizationKey } })
    })
  }

  const changeDataset = async ({ target: { value } }) => {
    if (!isUpdatingVisualization) removeDatasetsFromVisualizations()
    const newData = value === '' ? {} : await fetchData(value)
    const newConfigureData = {
      dataDescription: {
        horizontal: false
      },
      formattedData: undefined,
      dataKey: value,
      data: newData
    } as ConfigureData
    updateConfigureData(newConfigureData)
  }

  const updateDescriptionProp = async (key, value) => {
    const datasetKey = configureData.dataKey
    const newData = configureData.data || (await fetchData(datasetKey))

    const dataDescription = { ...configureData.dataDescription, [key]: value }

    const newConfigureData = {
      data: newData,
      dataDescription,
      formattedData: transform.developerStandardize(newData, dataDescription)
    }

    updateConfigureData(newConfigureData)
    setCanContinue(true)
  }

  const setMultiVizColumn = (column: string) => {
    if (column !== '') {
      dispatch({ type: 'UPDATE_ROW', payload: { rowIndex, rowData: { multiVizColumn: column } } })
      setCanContinue(true)
    }
  }

  const setExpandCollapseAllButtons = (selection: boolean) => {
    dispatch({ type: 'UPDATE_ROW', payload: { rowIndex, rowData: { expandCollapseAllButtons: selection } } })
    setCanContinue(true)
  }

  return (
    <Modal>
      <Modal.Content>
        {loadingAPIData && <Loader fullScreen />}
        <div className='dataset-selector-container'>
          Select a dataset:&nbsp;
          <select className='dataset-selector' value={configureData.dataKey || ''} onChange={changeDataset}>
            <option value=''>Select a dataset</option>
            {config.datasets &&
              Object.keys(config.datasets).map(datasetKey => <option key={datasetKey}>{datasetKey}</option>)}
          </select>
          {vizKey && (
            // only shows for visualizations
            <CheckBox
              label='Apply To Row'
              value={useRow}
              updateField={(section, subsection, fieldName, value) => {
                setUseRow(value)
                changeDataset({ target: { value: configureData.dataKey } })
              }}
            />
          )}
        </div>
        {errorMessage && <p className='text-danger'>{errorMessage}</p>}
        {configureData.dataKey && (
          <DataDesigner
            {...{
              configureData,
              visualizationKey: vizKey,
              updateDescriptionProp
            }}
          />
        )}
        {useRow && !!configureData.dataKey ? (
          !multiViz ? (
            <CheckBox
              label='Configure Multiple Visualizations'
              value={multiViz}
              tooltip={
                <Tooltip style={{ textTransform: 'none' }}>
                  <Tooltip.Target>
                    <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                  </Tooltip.Target>
                  <Tooltip.Content>
                    <p>
                      You can select a column where for each unique value in the column the configuration for the row
                      will be repeated in to the data preview.
                    </p>
                  </Tooltip.Content>
                </Tooltip>
              }
              updateField={(section, subsection, fieldName, value) => {
                if (canContinue && value === true) setCanContinue(false)
                setMultiViz(value)
              }}
            />
          ) : (
            <>
              <InputSelect
                options={Object.keys(config.datasets[configureData.dataKey]?.data[0] || {})}
                value={config.rows[rowIndex].multiVizColumn}
                label='Multi-Visualization Column'
                initial='--Select--'
                updateField={(section, subsection, fieldName, value) => setMultiVizColumn(value)}
                required
              />
              <CheckBox
                value={config.rows[rowIndex].expandCollapseAllButtons}
                label=' Add Expand/Collapse All buttons'
                fieldName=''
                updateField={(section, subsection, fieldName, value) => setExpandCollapseAllButtons(value)}
              />
            </>
          )
        ) : (
          <></>
        )}
        {canContinue && (
          <button
            style={{ margin: '1em', display: 'block' }}
            className='cove-button'
            onClick={() => overlay?.actions.toggleOverlay()}
          >
            Continue
          </button>
        )}
      </Modal.Content>
    </Modal>
  )
}
