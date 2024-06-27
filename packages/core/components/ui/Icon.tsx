import PropTypes from 'prop-types'

import iconCaretUp from '../../assets/icon-caret-up.svg?react'
import iconCaretDown from '../../assets/icon-caret-down.svg?react'
import iconCaretFilledUp from '../../assets/icon-caret-filled-up.svg?react'
import iconCaretFilledDown from '../../assets/icon-caret-filled-down.svg?react'
import iconChartBar from '../../assets/icon-chart-bar.svg?react'
import iconChartLine from '../../assets/icon-chart-line.svg?react'
import iconChartPie from '../../assets/icon-chart-pie.svg?react'
import iconClose from '../../assets/icon-close.svg?react'
import iconCode from '../../assets/icon-code.svg?react'
import iconDataBite from '../../assets/icon-databite.svg?react'
import iconEdit from '../../assets/icon-edit.svg?react'
import iconFileUpload from '../../assets/icon-file-upload.svg?react'
import iconFilterBars from '../../assets/icon-filter-bars.svg?react'
import iconGrid from '../../assets/icon-grid.svg?react'
import iconInfo from '../../assets/icon-info.svg?react'
import iconLink from '../../assets/icon-link.svg?react'
import iconMapAl from '../../assets/icon-map-alabama.svg?react'
import iconMapUsa from '../../assets/icon-map-usa.svg?react'
import iconMapWorld from '../../assets/icon-map-world.svg?react'
import iconMove from '../../assets/icon-move.svg?react'
import iconQuestion from '../../assets/icon-question-circle.svg?react'
import iconUpload from '../../assets/icon-upload.svg?react'
import iconWarningCircle from '../../assets/icon-warning-circle.svg?react'
import iconWarningTriangle from '../../assets/icon-warning-triangle.svg?react'
import iconGear from '../../assets/icon-gear.svg?react'
import iconTools from '../../assets/icon-tools.svg?react'
import iconText from '../../assets/icon-filtered-text.svg?react'
import iconDropdowns from '../../assets/icon-filter-dropdowns.svg?react'
import iconPlus from '../../assets/icon-plus.svg?react'
import iconMinus from '../../assets/icon-minus.svg?react'
import iconTable from '../../assets/icon-table.svg?react'
import iconSankey from '../../assets/icon-sankey.svg?react'
import iconRotateLeft from '../../assets/icon-rotate-left.svg?react'
import iconCommand from '../../assets/icon-command.svg?react'

import '../../styles/v2/components/icon.scss'

const iconHash = {
  caretUp: iconCaretUp,
  caretDown: iconCaretDown,
  caretFilledUp: iconCaretFilledUp,
  caretFilledDown: iconCaretFilledDown,
  chartBar: iconChartBar,
  chartLine: iconChartLine,
  chartPie: iconChartPie,
  close: iconClose,
  code: iconCode,
  databite: iconDataBite,
  edit: iconEdit,
  fileUpload: iconFileUpload,
  filterBars: iconFilterBars,
  grid: iconGrid,
  info: iconInfo,
  link: iconLink,
  mapAl: iconMapAl,
  mapUsa: iconMapUsa,
  mapWorld: iconMapWorld,
  move: iconMove,
  question: iconQuestion,
  upload: iconUpload,
  warningCircle: iconWarningCircle,
  warningTriangle: iconWarningTriangle,
  gear: iconGear,
  tools: iconTools,
  plus: iconPlus,
  minus: iconMinus,
  'filtered-text': iconText,
  'filter-dropdowns': iconDropdowns,
  table: iconTable,
  sankey: iconSankey,
  rotateLeft: iconRotateLeft,
  command: iconCommand
}

export const ICON_TYPES = Object.keys(iconHash)

const Icon = ({ display = '', base = undefined, alt = '', size = undefined, color = undefined, style = undefined, ...attributes }) => {
  const IconObj = iconHash[display] || null

  const filteredAttrs = { ...attributes }
  delete filteredAttrs.className

  const styles = {
    color: color ? color : null,
    width: size ? size + 'px' : null,
    cursor: display === 'move' ? 'move' : 'default',
    ...style
  }

  return (
    <>
      {base ? (
        <IconObj title={alt} />
      ) : (
        <span className={`cove-icon${attributes.className ? ' ' + attributes.className : ''}`} style={styles} {...filteredAttrs}>
          <IconObj title={alt} />
        </span>
      )}
    </>
  )
}

Icon.propTypes = {
  /* Define the icon to display */
  display: PropTypes.oneOf(Object.keys(iconHash)),
  /* Returns icon data as plain svg */
  base: PropTypes.bool,
  /* Sets alt text for the icon */
  alt: PropTypes.string,
  /* Override the width of the icon (scales height proportionally)*/
  size: PropTypes.number,
  /* Override the color of the icon */
  color: PropTypes.string
}

export default Icon
