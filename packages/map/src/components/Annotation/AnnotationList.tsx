import React, { useContext } from 'react'
import ConfigContext from './../../context'
import './AnnotationList.styles.css'
import DOMPurify from 'dompurify'

type AnnotationListProps = {
  useBootstrapVisibilityClasses?: boolean
}

const AnnotationList: React.FC<AnnotationListProps> = ({ useBootstrapVisibilityClasses = true }) => {
  const { state: config } = useContext(ConfigContext)
  const annotations = config.annotations || []

  const ulClasses = () => {
    const classes = ['annotation-list']
    if (useBootstrapVisibilityClasses) {
      classes.push('d-block', 'd-md-none')
    }
    return classes.join(' ')
  }

  const annotationListItems = annotations.map((annotation, annotationIndex) => {
    const text = annotation.text || ''

    // sanitize the text for setting dangerouslySetInnerHTML
    const sanitizedData = () => ({
      __html: DOMPurify.sanitize(text)
    })
    return (
      <li key={`annotation-li-item__annotationIndex`}>
        <div className='annotation__title-wrapper'>
          <div className='annotation__title-circle'>{annotationIndex + 1}</div>
          <p className='annotation__subtext' dangerouslySetInnerHTML={sanitizedData()} />
        </div>
      </li>
    )
  })

  return <ul className={ulClasses()}>{annotationListItems}</ul>
}

export default AnnotationList
