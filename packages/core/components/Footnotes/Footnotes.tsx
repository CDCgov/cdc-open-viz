import { Footnote } from '../../types/Footnotes'
import { MarkupVariable } from '../../types/MarkupVariable'
import { VizFilter } from '../../types/VizFilter'
import { processMarkupVariables } from '../../helpers/markupProcessor'
import parse from 'html-react-parser'
import './footnotes.css'

type FootnotesProps = {
  footnotes: Footnote[]
  data?: Object[]
  markupVariables?: MarkupVariable[]
  filters?: VizFilter[]
  isEditor?: boolean
}

const Footnotes: React.FC<FootnotesProps> = ({ footnotes, data, markupVariables, filters, isEditor = false }) => {
  const processFootnoteText = (text: string) => {
    if (!markupVariables || markupVariables.length === 0 || !data) {
      return text
    }

    const { processedContent } = processMarkupVariables(text, data, markupVariables, {
      isEditor,
      filters: filters || []
    })

    return parse(processedContent)
  }

  return (
    <footer className='col-12 m-3 mt-1 mb-0'>
      <ul className='cove-footnotes'>
        {footnotes.map((note, i) => {
          return (
            <li key={`${note.symbol || 'footnote-'}${i}`} className='mb-1'>
              {note.symbol && <span className='me-1'>{note.symbol}</span>}
              {processFootnoteText(note.text)}
            </li>
          )
        })}
      </ul>
    </footer>
  )
}

export default Footnotes
