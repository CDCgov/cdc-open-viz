import { useGlobalContext } from '@cdc/core/components/GlobalContext'
import DataDesigner from '@cdc/core/components/managers/DataDesigner'
import { useContext, useMemo, useState } from 'react'
import { DashboardContext, DashboardDispatchContext } from '../DashboardContext'
import Modal from '@cdc/core/components/ui/Modal'
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

  const configureData = useMemo(() => {
    if (vizKey && !useRow) {
      return config.visualizations[vizKey]
    }
    return config.rows[rowIndex]
  }, [config.visualizations, config.rows, vizKey, rowIndex, useRow])

  const updateConfigureData = (newConfigureData: Partial<ConfigureData>) => {
    if (vizKey && !useRow) {
      dispatch({ type: 'UPDATE_VISUALIZATION', payload: { vizKey, configureData: newConfigureData } })
    } else {
      dispatch({ type: 'UPDATE_ROW', payload: { rowIndex, rowData: newConfigureData } })
    }
  }

  const changeDataset = ({ target: { value } }) => {
    const newConfigureData = { dataDescription: {}, formattedData: undefined, dataKey: value }

    updateConfigureData(newConfigureData)
  }

  const updateDescriptionProp = async (key, value) => {
    const datasetKey = configureData.dataKey
    const { data, dataUrl } = config.datasets[datasetKey]
    let newData = data
    if (!data && dataUrl) {
      newData = await fetchRemoteData(dataUrl)
      newData = transform.autoStandardize(newData)
    }

    const dataDescription = { ...configureData.dataDescription, [key]: value }

    const newConfigureData = { data: newData, dataDescription, formattedData: transform.developerStandardize(newData, dataDescription) }

    updateConfigureData(newConfigureData)
    setCanContinue(true)
  }

  const setMultiVizColumn = (column: string) => {
    if (column !== '') {
      dispatch({ type: 'UPDATE_ROW', payload: { rowIndex, rowData: { multiVizColumn: column } } })
      setCanContinue(true)
    }
  }

  return (
    <Modal>
      <Modal.Content>
        <div className='dataset-selector-container'>
          Select a dataset:&nbsp;
          <select className='dataset-selector' value={configureData.dataKey || ''} onChange={changeDataset}>
            <option value=''>Select a dataset</option>
            {config.datasets && Object.keys(config.datasets).map(datasetKey => <option key={datasetKey}>{datasetKey}</option>)}
          </select>
          {vizKey && (
            <CheckBox
              label='Apply To Row'
              value={useRow}
              updateField={(section, subsection, fieldName, value) => {
                setUseRow(value)
                changeDataset({ target: { value: '' } })
              }}
            />
          )}
        </div>
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
                    <p>You can select a column where for each unique value in the column the configuration for the row will be repeated in to the data preview.</p>
                  </Tooltip.Content>
                </Tooltip>
              }
              updateField={(section, subsection, fieldName, value) => {
                if (canContinue && value === true) setCanContinue(false)
                setMultiViz(value)
              }}
            />
          ) : (
            <InputSelect
              options={Object.keys(config.datasets[configureData.dataKey]?.data[0] || {})}
              value={config.rows[rowIndex].multiVizColumn}
              label='Multi-Visualization Column'
              initial='--Select--'
              fieldName=''
              updateField={(section, subsection, fieldName, value) => setMultiVizColumn(value)}
              required
            />
          )
        ) : (
          <></>
        )}
        {canContinue && (
          <button style={{ margin: '1em', display: 'block' }} className='cove-button' onClick={() => overlay?.actions.toggleOverlay()}>
            Continue
          </button>
        )}
      </Modal.Content>
    </Modal>
  )
}