/** @jsx jsx */
import { jsx } from '@emotion/core'

export default (props => {

  const { label, toolTip, styles, geoClickHandler, territoryData, fullName } = props

  let Territory = (
    <li
      css={styles}
      key={label}
    >
      {label}
    </li>
  )

  // If it has a value, apply it
  if (`#E6E6E6` !== styles.backgroundColor) {
    Territory = (
      <li
        css={styles}
        key={label}
        data-tip={toolTip}
        data-for="tooltip"
        onClick={() => geoClickHandler(fullName, territoryData)}
      >
        {label}
      </li>
    )

  }

  return Territory
})