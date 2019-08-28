import React from 'react'
import Radium from 'radium'
import chroma from 'chroma-js'

const SquareGeo = ((props) => {

  const list = []

  props.list.forEach((val, i) => {

    let element

    // We force the abbreviated version no matter how other geo values are formatted
    let abbreviation = props.supportedGeos[val]

    // If it has a value, apply it
    if (Object.keys(props.data).includes(val)) {

      const toolTip = props.applyTooltipsToGeo(val, props.data[val])

      const legendColors = props.applyLegendToValue(
        props.data[val][props.state.columns.primary.name], props.data[val][props.state.columns.geo.name])

      let textColor = '#FFF'

      // Use white text if the background is dark, and dark grey if it's light
      if (chroma.contrast(textColor, legendColors[0]) < 4.5) {
        textColor = '#202020'
      }

      const styles = {
        base: {
          color: textColor,
          backgroundColor: legendColors[0],
          borderColor: props.state.general.geoBorderColor,
          borderWidth: 1,
          borderStyle: "solid",
          ':hover': {
            backgroundColor: legendColors[1],
          },
          ':active': {
            backgroundColor: legendColors[2],
          },
        },
        inactive: {
          backgroundColor: '#CCC'
        },
      }

      let wrappedValue = abbreviation

      if(props.state.columns.navigate && props.data[val][props.state.columns.navigate.name]) {
        wrappedValue = (<a href={props.data[val][props.state.columns.navigate.name]}>{abbreviation}</a>)
      }

      element = (
        <li
          style={styles.base}
          key={val}
          data-tip={toolTip}
          data-for="tooltip"
        >
          {wrappedValue}
        </li>
      )

    } else {

      // Inactive state
      element = (
        <li
          style={{ 
            backgroundColor: '#E6E6E6',
            color: '#202020',
            borderColor: props.state.general.geoBorderColor,
            borderWidth: 1,
            borderStyle: "solid"
          }}
          key={val}
        >
          {abbreviation}
        </li>
      )

    }

    list.push(element)

  })

  return (
    <ul>
      <li>
        {props.type}
      </li>
      {list}
    </ul>
  )
})

export default Radium(SquareGeo)