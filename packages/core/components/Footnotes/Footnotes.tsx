import { Footnote } from '../../types/Footnotes'
import parse from 'html-react-parser'
import './footnotes.css'

type FootnotesProps = {
  footnotes: Footnote[]
}

const Footnotes: React.FC<FootnotesProps> = ({ footnotes }) => {
  // Convert newlines to <br> tags and parse HTML
  const processFootnoteText = (text: string) => {
    if (!text) return ''
    // Convert newline characters to <br> tags
    const textWithBreaks = text.replace(/\n/g, '<br>')
    // Parse HTML (html-react-parser handles sanitization)
    return parse(textWithBreaks)
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
