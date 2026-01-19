import { VizFilter } from './VizFilter'

export type Footnote = {
  symbol?: string
  text: string
}

import { DataRow } from './DataRow'

type Footnotes = {
  filters?: VizFilter[]
  dataKey?: string
  data?: DataRow[]
  dynamicFootnotes?: {
    symbolColumn?: string
    textColumn: string
    orderColumn?: string
  }
  staticFootnotes?: Footnote[]
}

export default Footnotes
