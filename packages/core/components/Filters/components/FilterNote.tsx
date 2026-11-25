import parse from 'html-react-parser'
import './filter-note.css'

type FilterNoteProps = {
  id?: string
  note?: string
  hasLabel?: boolean
}

const FilterNote: React.FC<FilterNoteProps> = ({ id, note, hasLabel = true }) => {
  if (!note?.trim()) return null

  return (
    <div id={id} className={`filters-section__note-text cove-prose mb-${hasLabel ? '1' : '2'}`}>
      {parse(note)}
    </div>
  )
}

export default FilterNote
