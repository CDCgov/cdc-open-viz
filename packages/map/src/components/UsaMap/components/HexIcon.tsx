import { AiOutlineArrowUp, AiOutlineArrowDown, AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import { Group } from '@visx/group'

type HexIconProps = {
  item: {
    operator: '=' | '≠' | '<' | '>' | '<=' | '>='
    shape: 'Arrow Up' | 'Arrow Down' | 'Arrow Right' | 'Arrow Left'
    key: string
    value: string
  }
  index: number
  centroid: [number, number]
  iconSize: number
  textColor: string
  isTerritory: boolean
}

const HexIcon: React.FC<HexIconProps> = props => {
  const { item, index, centroid, iconSize, textColor = '#000', isTerritory } = props
  if (!centroid) return

  if (isTerritory) {
    return (
      <Group style={{ transform: `translate(36%, 50%)` }} key={`territory-hex--${index}`}
      >
        {item.shape === 'Arrow Down' && <AiOutlineArrowDown size={12} stroke='none' fontWeight={100} />}
        {item.shape === 'Arrow Up' && <AiOutlineArrowUp size={12} stroke='none' fontWeight={100} />}
        {item.shape === 'Arrow Right' && <AiOutlineArrowRight size={12} stroke='none' fontWeight={100} />}
        {item.shape === 'Arrow Left' && <AiOutlineArrowLeft size={12} stroke='none' fontWeight={100} />}
      </Group>
    )
  }
  return (
    <Group
      top={centroid[1] - 5}
      left={centroid[0] - iconSize}
      color={textColor}
      textAnchor='start'
      key={`hex--${item.key}-${item.value}-${index}`}
    >
      {item.shape === 'Arrow Down' && <AiOutlineArrowDown />}
      {item.shape === 'Arrow Up' && <AiOutlineArrowUp />}
      {item.shape === 'Arrow Right' && <AiOutlineArrowRight />}
      {item.shape === 'Arrow Left' && <AiOutlineArrowLeft />}
    </Group>
  )
}
export default HexIcon
