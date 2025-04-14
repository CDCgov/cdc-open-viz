import EditorWrapper from '../EditorWrapper'
import Footnotes from './Footnotes'
import FootnotesEditor from '../EditorPanel/FootnotesEditor'
import { ViewPort } from '../../types/ViewPort'
import FootnotesConfig, { Footnote } from '../../types/Footnotes'
import _ from 'lodash'
import { useMemo } from 'react'
import { updateFieldFactory } from '../../helpers/updateFieldFactory'
import { filterVizData } from '../../helpers/filterVizData'
import { VizFilter } from '../../types/VizFilter'

type StandAloneProps = {
  isEditor?: boolean
  visualizationKey?: string
  config: FootnotesConfig
  filters?: VizFilter[]
  updateConfig?: (config: FootnotesConfig) => void
  viewport?: ViewPort
}

const FootnotesStandAlone: React.FC<StandAloneProps> = ({
  visualizationKey,
  config,
  filters,
  viewport,
  isEditor,
  updateConfig
}) => {
  const updateField = updateFieldFactory<Footnote[]>(config, updateConfig)
  if (isEditor)
    return (
      <EditorWrapper
        component={FootnotesStandAlone}
        visualizationKey={visualizationKey}
        visualizationConfig={config}
        updateConfig={updateConfig}
        type={'Footnotes'}
        viewport={viewport}
      >
        <FootnotesEditor key={visualizationKey} config={config} updateField={updateField} />
      </EditorWrapper>
    )

  if (!config) return null
  // get the api footnotes from the config
  const apiFootnotes = useMemo(() => {
    const configData = filterVizData(filters, config.formattedData || config.data)
    if (configData && config.dataKey && config.dynamicFootnotes) {
      const { symbolColumn, textColumn, orderColumn } = config.dynamicFootnotes
      const _data = configData.map(row => _.pick(row, [symbolColumn, textColumn, orderColumn]))
      _data.sort((a, b) => a[orderColumn] - b[orderColumn])
      return _data.map(row => ({ symbol: row[symbolColumn], text: row[textColumn] }))
    }
    return []
  }, [config.dynamicFootnotes, config.formattedData, config.data, filters])

  // get static footnotes from the config.footnotes
  const staticFootnotes = config.staticFootnotes || []

  return <Footnotes footnotes={[...apiFootnotes, ...staticFootnotes]} />
}

export default FootnotesStandAlone
