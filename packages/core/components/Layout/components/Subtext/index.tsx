import parse from 'html-react-parser'
import { Visualization } from '../../../../types/Visualization'
import './SubText.styles.css'

type SubTextProps = {
  // text to be displayed
  text: string
  // Visualization Config
  config: Visualization
}
const SubText: React.FC<SubTextProps> = ({ text, config }) => {
  if (!text) return
  if (config.type === 'data-bite' && !config.general.isCompactStyle) return
  return <p className='cove-component__subtext'>{parse(text)}</p>
}

export default SubText
