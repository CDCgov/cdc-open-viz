import { VizFilter } from './VizFilter'

export type Footnote = {
  symbol?: string
  text: string
}

type Footnotes = {
  filters?: VizFilter[]
  dataKey?: string
  data?: Object[]
  dynamicFootnotes?: {
    symbolColumn?: string
    textColumn: string
    orderColumn?: string
  }
  staticFootnotes?: Footnote[]
}

export default Footnotes
