import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import ReactHtmlParser from 'react-html-parser'

const Sidebar = ((props) => {

  const legendList = props.legend.data.map((entry, index) => {

    let formattedText = `${props.prefix + entry.min + props.suffix} — ${props.prefix + entry.max + props.suffix}`

    if (props.legend.type === 'equalinterval' && index !==
      props.legend.data.length - 1) {

      formattedText = `${props.prefix + entry.min + props.suffix} — < ${props.prefix + entry.max + props.suffix}`

    }

    let disabled = entry.disabled

    if (entry.category) {
      formattedText = props.prefix + entry.category + props.suffix
    }

    let legendLabel = formattedText

    if (entry.hasOwnProperty('special')) {
      legendLabel = entry.value || entry.category
    }

    return (<li key={index} title="Click to disable"
                onClick={() => { props.toggleLegendActive(index) }}
                className={disabled ? 'disabled single-legend' : 'single-legend'}><span className="color"
                                                             style={{
                                                               backgroundColor: props.applyColorToLegend(
                                                                 entry),
                                                             }}></span> {legendLabel}
    </li>)

  })

  const filtersList = props.filters.map((singleFilter, index) => {

    let values = []

    singleFilter.values.forEach((filterOption, index) => {
      values.push(<option key={index}
                          value={filterOption}>{filterOption}</option>)
    })

    return (
      <section className={`filter-${index}`} key={index}>
        <label htmlFor={index}>{singleFilter.label}</label>
        <select id={index} className="filter-select" data-index="0"
                value={singleFilter.active}
                onChange={(val) => props.changeFilterActive(index,
                  val.target.value)}>
          {values}
        </select>
      </section>
    )
  })

  return (
    <section className={'container'}>
      <section className="legend-section">
        <ReactCSSTransitionGroup
            transitionName="fade"
            transitionAppear={false}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}>
          {props.legend.disabledAmt > 0 &&
          <button onClick={(e) => { e.preventDefault(); props.resetLegendToggles() }}
                  className="clear">Clear</button>
          }
        </ReactCSSTransitionGroup>
        {props.legend.title && <h2>{ ReactHtmlParser(props.legend.title) }</h2>}
        {props.legend.description &&
          <p>{ ReactHtmlParser(props.legend.description) }</p>
        }
        <ul className={props.legend.singleColumn ? "single-column" : ""}>
          {legendList}
        </ul>
      </section>
      {filtersList.length > 0 &&
      <section className="filters-section">
        <h3>Filters</h3>
        <form>
          <section>
            {filtersList}
          </section>
        </form>
      </section>
      }
    </section>
  )
})

export default Sidebar
