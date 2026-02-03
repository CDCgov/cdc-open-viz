import React, { useContext } from 'react'
import ConfigContext from '../../../ConfigContext'
import './AnnotationList.styles.css'
import DOMPurify from 'dompurify'

type AnnotationListProps = {
  useBootstrapVisibilityClasses?: boolean
}

const AnnotationList: React.FC<AnnotationListProps> = ({ useBootstrapVisibilityClasses = true }) => {
  const { config, visibleAnnotations } = useContext(ConfigContext)
  const annotations = config.annotations || []

  const ulClasses = () => {
    const classes = ['annotation-list']
    if (useBootstrapVisibilityClasses) {
      classes.push('d-block', 'd-md-none')
    }
    return classes.join(' ')
  }

  const annotationListItems = visibleAnnotations.map(annotation => {
    const originalIndex = annotations.indexOf(annotation)
    const text = annotation.text || ''

    // sanitize the text for setting dangerouslySetInnerHTML
    const sanitizedData = () => ({
      __html: DOMPurify.sanitize(text)
    })
    return (
      <li key={`annotation-li-item__${originalIndex}`}>
        <div className='annotation__title-wrapper'>
          <div className='annotation__title-circle'>{originalIndex + 1}</div>
          <p className='annotation__subtext' dangerouslySetInnerHTML={sanitizedData()} />
        </div>
      </li>
    )
  })

  return <ul className={ulClasses()}>{annotationListItems}</ul>
}

export default AnnotationList
