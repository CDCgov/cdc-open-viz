import React from 'react'
import parse from 'html-react-parser'
import { RecommendationCategory } from '../types/Config'
import { getRecommendationConfig } from '../helpers/getRecommendationConfig'

type ScheduleCellProps = {
  displayText: string
  recommendation: string
  notesUrl?: string
  recommendations: RecommendationCategory[]
  showNotesLinks: boolean
  notesLinkText: string
}

const ScheduleCell: React.FC<ScheduleCellProps> = ({
  displayText,
  recommendation,
  notesUrl,
  recommendations,
  showNotesLinks,
  notesLinkText
}) => {
  const recConfig = getRecommendationConfig(recommendation, recommendations)

  // Check if displayText contains HTML
  const isHtml = typeof displayText === 'string' && /<\/?[a-z][\s\S]*>/i.test(displayText)
  const parsedText = isHtml ? parse(displayText) : displayText

  return (
    <div
      className='schedule-cell'
      style={{
        backgroundColor: recConfig.color,
        textAlign: 'center',
        padding: '8px'
      }}
      aria-label={recConfig.label}
    >
      {parsedText}
      {notesUrl && showNotesLinks && (
        <>
          <br />
          <a
            href={notesUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='schedule-cell__notes-link'
          >
            {notesLinkText}
          </a>
        </>
      )}
    </div>
  )
}

export default ScheduleCell
