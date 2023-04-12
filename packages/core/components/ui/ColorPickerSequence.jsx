// import React, { useEffect } from 'react'

// // Hooks
// import { useColorPalette } from '@cdc/chart/src/hooks/useColorPalette'
// import { useVisConfig } from '../../hooks/store/useVisConfig'

// // Data
// import { colorPalettesChart as colorPalettes } from '@cdc/core/data/colorPalettes'

// // Components
// import Label from '../element/Label'

// // Styles
// import '@cdc/core/styles/v2/components/ui/color-picker-sequence.scss'

// const ColorPickerSequenceButton = ({ palette, colorKeys = [ 0, 0, 0 ] }) => {
//   const { config, updateVisConfigField } = useVisConfig()

//   const buttonClasses = () => {
//     let classList = [ 'cove-color-picker-sequence__button' ]
//     if (config.palette === palette) classList.push('cove-color-picker-sequence__button--active')
//     return classList.join(' ')
//   }

//   return (
//     <button
//       className={buttonClasses()}
//       title={palette}
//       onClick={e => {
//         e.preventDefault()
//         updateVisConfigField('palette', palette)
//       }}
//       key={palette}>
//       {colorKeys.map(colorKey => (
//         <span className="cove-color-picker-sequence__button--frame" style={{ backgroundColor: colorPalettes[palette][colorKey] }} key={colorKey}/>
//       ))}
//     </button>
//   )
// }

// const ColorPickerSequence = ({ label, type }) => {
//   const { config, updateVisConfigField } = useVisConfig()
//   const { paletteName, isPaletteReversed, filteredPallets, filteredQualitative, dispatch } = useColorPalette(colorPalettes, config)

//   useEffect(() => {
//     if (paletteName) updateVisConfigField('palette', paletteName)
//   }, [ paletteName ]) // eslint-disable-line

//   useEffect(() => {
//     dispatch({ type: 'GET_PALETTE', payload: colorPalettes, paletteName: config.palette })
//   }, [ dispatch, config.palette ]) // eslint-disable-line

//   return (
//     <div className="cove-color-picker-sequence">
//       {label &&
//         <Label>
//           {label}
//         </Label>
//       }

//       <div className="cove-color-picker-sequence__container">
//         {type === 'sequential' &&
//           filteredPallets.map((palette, index) => (
//             <ColorPickerSequenceButton palette={palette} colorKeys={[ 2, 3, 5 ]} key={index}/>
//           ))
//         }

//         {type === 'nonsequential' &&
//           filteredQualitative.map((palette, index) => (
//             <ColorPickerSequenceButton palette={palette} colorKeys={[ 2, 4, 6 ]} key={index}/>
//           ))
//         }
//       </div>
//     </div>
//   )
// }

// export default ColorPickerSequence
