import parse from 'html-react-parser'
import './filter-note.css'

type FilterNoteProps = {
  note?: string
  hasLabel?: boolean
}

const FilterNote: React.FC<FilterNoteProps> = ({ note, hasLabel = true }) => {
  if (!note?.trim()) return null

  return <div className={`filters-section__note-text cove-prose mb-${hasLabel ? '1' : '2'}`}>{parse(note)}</div>
}

export default FilterNote
