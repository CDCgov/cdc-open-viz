import useDataVizClasses from '@cdc/core/helpers/useDataVizClasses'
import { AiOutlineArrowUp, AiOutlineArrowDown, AiOutlineArrowRight } from 'react-icons/ai'
import parse from 'html-react-parser'

const LegendItemHex = props => {
  const { state, runtimeLegend, viewport } = props
  const { legend } = state
  const { title } = state.general

  const columnLogic = legend.position === 'side' && legend.singleColumn ? 'single-column' : legend.position === 'bottom' && legend.singleRow ? 'single-row' : ''

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
        <aside id='legend' className={legendClasses.aside.join(' ')} role='region' aria-label='Legend' tabIndex='0'>
          <section className={legendClasses.section.join(' ')} aria-label='Map Legend'>
            {legend.title && <span className={legendClasses.title.join(' ')}>{parse(shapeGroup.legendTitle)}</span>}
            {legend.dynamicDescription === false && legend.description && <p className={legendClasses.description.join(' ')}>{parse(shapeGroup.legendDescription)}</p>}

            <ul className={legendClasses.ul.join(' ')} aria-label='Legend items' style={{ listStyle: 'none' }}>
              {shapeGroup.items.map((item, itemIndex) => {
                return (
                  <li className={legendClasses.li.join(' ')}>
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
