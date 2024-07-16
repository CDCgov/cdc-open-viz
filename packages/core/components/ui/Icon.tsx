import PropTypes from 'prop-types'

import iconCaretUp from '../../assets/icon-caret-up.svg'
import iconCaretDown from '../../assets/icon-caret-down.svg'
import iconCaretFilledUp from '../../assets/icon-caret-filled-up.svg'
import iconCaretFilledDown from '../../assets/icon-caret-filled-down.svg'
import iconChartBar from '../../assets/icon-chart-bar.svg'
import iconChartLine from '../../assets/icon-chart-line.svg'
import iconChartPie from '../../assets/icon-chart-pie.svg'
import iconClose from '../../assets/icon-close.svg'
import iconCode from '../../assets/icon-code.svg'
import iconDataBite from '../../assets/icon-databite.svg'
import iconEdit from '../../assets/icon-edit.svg'
import iconFileUpload from '../../assets/icon-file-upload.svg'
import iconFilterBars from '../../assets/icon-filter-bars.svg'
import iconGrid from '../../assets/icon-grid.svg'
import iconInfo from '../../assets/icon-info.svg'
import iconLink from '../../assets/icon-link.svg'
import iconMapAl from '../../assets/icon-map-alabama.svg'
import iconMapUsa from '../../assets/icon-map-usa.svg'
import iconMapWorld from '../../assets/icon-map-world.svg'
import iconMove from '../../assets/icon-move.svg'
import iconQuestion from '../../assets/icon-question-circle.svg'
import iconUpload from '../../assets/icon-upload.svg'
import iconWarningCircle from '../../assets/icon-warning-circle.svg'
import iconWarningTriangle from '../../assets/icon-warning-triangle.svg'
import iconGear from '../../assets/icon-gear.svg'
import iconTools from '../../assets/icon-tools.svg'
import iconText from '../../assets/icon-filtered-text.svg'
import iconDropdowns from '../../assets/icon-filter-dropdowns.svg'
import iconPlus from '../../assets/icon-plus.svg'
import iconMinus from '../../assets/icon-minus.svg'
import iconTable from '../../assets/icon-table.svg'
import iconSankey from '../../assets/icon-sankey.svg'
import iconRotateLeft from '../../assets/icon-rotate-left.svg'
import iconCommand from '../../assets/icon-command.svg'

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
  dashboardFilters: iconDropdowns,
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
