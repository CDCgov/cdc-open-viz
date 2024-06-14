import { Footnote } from '../../types/Footnotes'
import './footnotes.css'

type FootnotesProps = {
  footnotes: Footnote[]
}

const Footnotes: React.FC<FootnotesProps> = ({ footnotes }) => {
  return (
    <footer className='col-12 m-3 mt-1 mb-0'>
      <ul className='cove-footnotes'>
        {footnotes.map((note, i) => {
          return (
            <li key={note.symbol + i} className='mb-1'>
              {note.symbol && <span className='mr-1'>{note.symbol}</span>}
              {note.text}
            </li>
          )
        })}
      </ul>
    </footer>
  )
}

export default Footnotes
