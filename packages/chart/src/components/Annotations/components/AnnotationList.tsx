import React, { useContext } from 'react'
import ConfigContext from '../../../ConfigContext'
import './AnnotationList.styles.css'

const AnnotationList = () => {
  const {
    config: { annotations }
  } = useContext(ConfigContext)

  const annotationListItems = annotations.map((annotation, annotationIndex) => {
    return (
      <li key={`annotation-li-item__annotationIndex`}>
        <div className='annotation__title-wrapper'>
          <div className='annotation__title-circle'>{annotationIndex + 1}</div>
        </div>
        <p className='annotation__subtext'>{annotation.text}</p>
      </li>
    )
  })

  return <ul className='annotation-list d-block d-md-none'>{annotationListItems}</ul>
}

export default AnnotationList
