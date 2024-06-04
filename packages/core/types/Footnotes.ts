import { Visualization } from './Visualization'

export type Footnote = {
  symbol?: string
  text: string
}

type Footnotes = Visualization & {
  dynamicFootnotes?: {
    symbolColumn?: string
    textColumn: string
    orderColumn?: string
  }
  staticFootnotes?: Footnote[]
}

export default Footnotes
