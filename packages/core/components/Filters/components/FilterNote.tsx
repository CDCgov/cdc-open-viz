import parse from 'html-react-parser'
import './filter-note.css'

type FilterNoteProps = {
  note?: string
}

const FilterNote: React.FC<FilterNoteProps> = ({ note }) => {
  if (!note?.trim()) return null

  return <div className='filters-section__note-text cove-prose'>{parse(note)}</div>
}

export default FilterNote
