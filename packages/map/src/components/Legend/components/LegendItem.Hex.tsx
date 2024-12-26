import useDataVizClasses from '@cdc/core/helpers/useDataVizClasses'
import { AiOutlineArrowUp, AiOutlineArrowDown, AiOutlineArrowRight } from 'react-icons/ai'
import parse from 'html-react-parser'
import useResizeObserver from '../../../hooks/useResizeObserver'

const LegendItemHex = props => {
  const { state } = props
  const { currentViewport: viewport } = useResizeObserver(false)

  const getItemShape = shape => {
    switch (shape) {
      case 'Arrow Down':
        return <AiOutlineArrowDown />
      case 'Arrow Up':
        return <AiOutlineArrowUp />
      case 'Arrow Right':
        return <AiOutlineArrowRight />
      default:
        return
    }
  }

  const { legendClasses } = useDataVizClasses(state, viewport)

  // TODO: create core legend for reusability
  return (
    state.hexMap.type === 'shapes' &&
    state.hexMap.shapeGroups.map((shapeGroup, shapeGroupIndex) => {
      return (
        <aside id='legend' className={legendClasses.aside.join(' ')} role='region' aria-label='Legend' tabIndex={0}>
          <section className={legendClasses.section.join(' ')} aria-label='Map Legend'>
            {shapeGroup.legendTitle && (
              <h3 className={legendClasses.title.join(' ')}>{parse(shapeGroup.legendTitle)}</h3>
            )}
            {shapeGroup.legendDescription && (
              <p className={legendClasses.description.join(' ')}>{parse(shapeGroup.legendDescription)}</p>
            )}

            <ul className={legendClasses.ul.join(' ')} aria-label='Legend items' style={{ listStyle: 'none' }}>
              {shapeGroup.items.map((item, itemIndex) => {
                return (
                  <li className={legendClasses.li.join(' ')} key={`hex-legend-item-${itemIndex}`}>
                    {getItemShape(item.shape)} {item.value}
                  </li>
                )
              })}
            </ul>
          </section>
        </aside>
      )
    })
  )
}

export default LegendItemHex
