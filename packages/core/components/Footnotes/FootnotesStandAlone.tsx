import Footnotes from './Footnotes'
import FootnotesConfig, { Footnote } from '../../types/Footnotes'
import _ from 'lodash'
import { useMemo } from 'react'
import { filterVizData } from '../../helpers/filterVizData'
import { VizFilter } from '../../types/VizFilter'
import { MarkupVariable } from '../../types/MarkupVariable'
import { processMarkupVariables } from '../../helpers/markupProcessor'

type StandAloneProps = {
  config: FootnotesConfig
  filters?: VizFilter[]
  markupVariables?: MarkupVariable[]
  enableMarkupVariables?: boolean
  data?: Object[]
}

const FootnotesStandAlone: React.FC<StandAloneProps> = ({ config, filters, markupVariables = [], enableMarkupVariables = false, data = [] }) => {
  if (!config) return null

  // Helper function to process markup variables in footnote text
  const processFootnoteText = (text: string): string => {
    if (!enableMarkupVariables || !markupVariables || markupVariables.length === 0) {
      return text
    }

    // Use data from props if available, otherwise use config.data
    const footnoteData = data.length > 0 ? data : config.data || []

    const { processedContent } = processMarkupVariables(
      text,
      footnoteData,
      markupVariables,
      {
        filters,
        isEditor: false
      }
    )

    return processedContent
  }

  // get the api footnotes from the config
  const apiFootnotes = useMemo(() => {
    // If filters exist and should filter footnotes, apply them, otherwise use data as-is
    const configData = filters && filters.length > 0 ? filterVizData(filters, config.data) : config.data
    if (configData && config.dataKey && config.dynamicFootnotes) {
      const { symbolColumn, textColumn, orderColumn } = config.dynamicFootnotes
      const _data = configData.map(row => _.pick(row, [symbolColumn, textColumn, orderColumn]))
      _data.sort((a, b) => a[orderColumn] - b[orderColumn])
      return _data.map(row => ({
        symbol: row[symbolColumn],
        text: processFootnoteText(row[textColumn])
      }))
    }
    return []
  }, [config.dynamicFootnotes, config.data, filters, markupVariables, enableMarkupVariables, data])

  // get static footnotes from the config.footnotes and process their text
  const staticFootnotes: Footnote[] = useMemo(() => {
    return (config.staticFootnotes || []).map(footnote => ({
      ...footnote,
      text: processFootnoteText(footnote.text)
    }))
  }, [config.staticFootnotes, markupVariables, enableMarkupVariables, data, filters])

  return <Footnotes footnotes={[...apiFootnotes, ...staticFootnotes]} />
}

export default FootnotesStandAlone
