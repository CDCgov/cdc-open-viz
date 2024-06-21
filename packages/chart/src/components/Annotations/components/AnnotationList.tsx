import React, { useContext } from 'react'
import ConfigContext from '../../../ConfigContext'
import './AnnotationList.styles.css'

type AnnotationListProps = {
  useBootstrapVisibilityClasses?: boolean
}

const AnnotationList: React.FC<AnnotationListProps> = ({ useBootstrapVisibilityClasses = true }) => {
  const {
    config: { annotations }
  } = useContext(ConfigContext)

  const ulClasses = () => {
    const classes = ['annotation-list']
    if (useBootstrapVisibilityClasses) {
      classes.push('d-block', 'd-md-none')
    }
    return classes.join(' ')
  }

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

  return <ul className={ulClasses()}>{annotationListItems}</ul>
}

export default AnnotationList
