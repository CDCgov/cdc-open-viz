import React, { useContext } from 'react'
import ConfigContext from '../../../ConfigContext'
import './AnnotationList.styles.css'

const AnnotationList = () => {
  const {
    config: { annotations }
  } = useContext(ConfigContext)

  return annotations.map((annotation, annotationIndex) => {
    return (
      <ul className='annotation-list'>
        <li>
          <div className='annotation__title-wrapper'>
            <div className='annotation__title-circle'>{annotationIndex + 1}</div>
            <p className='annotation__title-text'>{annotation.title}</p>
          </div>
          <p className='annotation__subtext'>{annotation.text}</p>
        </li>
      </ul>
    )
  })
}

export default AnnotationList
