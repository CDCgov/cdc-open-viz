import AnnotationDraggable from './components/AnnotationDraggable'
import AnnotationList from './components/AnnotationList'
import AnnotationDropdown from './components/AnnotationDropdown'

const Annotation = {
  Draggable: AnnotationDraggable,
  // Mobile auto display
  List: AnnotationList,
  // Desktop Accessible Option
  Dropdown: AnnotationDropdown
}

export default Annotation
