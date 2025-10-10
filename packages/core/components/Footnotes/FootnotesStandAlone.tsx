import Footnotes from './Footnotes'
import FootnotesConfig from '../../types/Footnotes'
import _ from 'lodash'
import { useMemo } from 'react'
import { filterVizData } from '../../helpers/filterVizData'
import { VizFilter } from '../../types/VizFilter'

type StandAloneProps = {
  config: FootnotesConfig
  filters?: VizFilter[]
}

const FootnotesStandAlone: React.FC<StandAloneProps> = ({ config, filters }) => {
  if (!config) return null
  // get the api footnotes from the config
  const apiFootnotes = useMemo(() => {
    // If filters exist and should filter footnotes, apply them, otherwise use data as-is
    const configData = filters && filters.length > 0 ? filterVizData(filters, config.data) : config.data
    if (configData && config.dataKey && config.dynamicFootnotes) {
      const { symbolColumn, textColumn, orderColumn } = config.dynamicFootnotes
      const _data = configData.map(row => _.pick(row, [symbolColumn, textColumn, orderColumn]))
      _data.sort((a, b) => a[orderColumn] - b[orderColumn])
      return _data.map(row => ({ symbol: row[symbolColumn], text: row[textColumn] }))
    }
    return []
  }, [config.dynamicFootnotes, config.data, filters])

  // get static footnotes from the config.footnotes
  const staticFootnotes = config.staticFootnotes || []

  return <Footnotes footnotes={[...apiFootnotes, ...staticFootnotes]} />
}

export default FootnotesStandAlone
