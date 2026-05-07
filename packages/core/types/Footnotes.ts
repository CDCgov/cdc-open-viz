import { VizFilter } from './VizFilter'
import { DataRows } from './Data'

export type Footnote = {
  symbol?: string
  text: string
}

type Footnotes = {
  filters?: VizFilter[]
  dataKey?: string
  data?: DataRows
  dynamicFootnotes?: {
    symbolColumn?: string
    textColumn: string
    orderColumn?: string
  }
  staticFootnotes?: Footnote[]
}

export default Footnotes
