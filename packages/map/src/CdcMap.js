import React, { useState, useEffect, useRef } from 'react';

// IE11
import 'core-js/stable'
import 'whatwg-fetch'

// Third party
import ReactTooltip from 'react-tooltip';
import chroma from 'chroma-js';
import Papa from 'papaparse';
import { Base64 } from 'js-base64';
import parse from 'html-react-parser';
import ResizeObserver from 'resize-observer-polyfill';
import html2pdf from 'html2pdf.js'
import html2canvas from 'html2canvas';
import Canvg from 'canvg';

// Data
import ExternalIcon from './images/external-link.svg';
import { supportedStates, supportedTerritories, supportedCountries, supportedCities } from './data/supported-geos';
import colorPalettes from './data/color-palettes';
import initialState from './data/initial-state';
import usaDefaultConfig from './examples/default-usa.json'; // Future: Lazy

// Sass
import './scss/main.scss';
import './scss/btn.scss'

// Images
import DownloadImg from './images/icon-download-img.svg'
import DownloadPdf from './images/icon-download-pdf.svg'

// Open Viz
import Loading from '@cdc/core/components/Loading';

// Components
import Sidebar from './components/Sidebar';
import Modal from './components/Modal';
import EditorPanel from './components/EditorPanel'; // Future: Lazy
import UsaMap from './components/UsaMap'; // Future: Lazy
import HexMap from './components/HexMap'; // Future: Lazy
import DataTable from './components/DataTable'; // Future: Lazy
import NavigationMenu from './components/NavigationMenu'; // Future: Lazy
import WorldMap from './components/WorldMap'; // Future: Lazy

const CdcMap = ({className, config, navigationHandler:customNavigationHandler, isEditor, configUrl, logo = null, setConfig}) => {
    // State
    const [state, setState] = useState( JSON.parse(JSON.stringify(initialState)) )
    const [loading, setLoading] = useState(true)
    const [viewport, setViewport] = useState('lg')
    const [processedData, setProcessedData] = useState( [{}] )
    const [processedLegend, setProcessedLegend] = useState({data: [], categoryValuesOrder: []})
    const [modal, setModal] = useState(null)
    const [accessibleStatus, setAccessibleStatus] = useState('')

    const outerContainerRef = useRef(null);
    const mapSvg = useRef(null);

    // Data props
    const stateValues = Object.values(supportedStates).flat()
    const stateKeys = Object.keys(supportedStates)

    const territoryValues = Object.values(supportedTerritories).flat()
    const territoryKeys = Object.keys(supportedTerritories)

    const countryValues = Object.values(supportedCountries).flat()
    const countryKeys = Object.keys(supportedCountries)

    const cityNames = Object.keys(supportedCities)

    const closeModal = ({target}) => {
        if('string' === typeof target.className && (target.className.includes('modal-close') || target.className.includes('modal-background') ) && null !== modal) {
            setModal(null)
        }
    }

    const saveImageAs = (uri, filename) => {
        const ie = navigator.userAgent.match(/MSIE\s([\d.]+)/)
        const ie11 = navigator.userAgent.match(/Trident\/7.0/) && navigator.userAgent.match(/rv:11/)
        const ieEdge = navigator.userAgent.match(/Edge/g)
        const ieVer=(ie ? ie[1] : (ie11 ? 11 : (ieEdge ? 12 : -1)));

        if (ie && ieVer<10) {
            console.log("IE10+ required");
            return;
        }

        if (ieVer>-1) {
            const fileAsBlob = new Blob([uri], {
                type: 'image/png'
            });
            window.navigator.msSaveBlob(fileAsBlob, filename);
        } else {
            const link = document.createElement('a')
            if (typeof link.download === 'string') {
                link.href = uri
                link.download = filename
                link.onclick = (e) => document.body.removeChild(e.target);
                document.body.appendChild(link)
                link.click()
            } else {
                window.open(uri)
            }
        }
    }

    const generateMedia = (target, type) => {
        // Convert SVG to canvas
        const baseSvg = mapSvg.current.querySelector('.rsm-svg')

        const ratio = baseSvg.getBoundingClientRect().height / baseSvg.getBoundingClientRect().width
        const calcHeight = ratio * 1440
        const xmlSerializer = new XMLSerializer()
        const svgStr = xmlSerializer.serializeToString(baseSvg)
        const options = { log: false, ignoreMouse: true }
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        ctx.canvas.width = 1440
        ctx.canvas.height = calcHeight
        const canvg = Canvg.fromString(ctx, svgStr, options)
        canvg.start()

        // Generate DOM <img> from svg data
        const generatedImage = document.createElement('img')
        generatedImage.src = canvas.toDataURL('image/png')
        generatedImage.style.width = '100%'
        generatedImage.style.height = 'auto'

        baseSvg.style.display = 'none' // Hide default SVG during media generation
        baseSvg.parentNode.insertBefore(generatedImage, baseSvg.nextSibling) // Insert png generated from canvas of svg

        // Construct filename with timestamp
        const date = new Date()
        const filename = state.general.title.replace(/\s+/g, '-').toLowerCase() + '-' + date.getDate() + date.getMonth() + date.getFullYear()

        switch (type) {
            case 'image':
                return html2canvas(target, {
                    allowTaint: true,
                    backgroundColor: '#ffffff',
                    width: 1440,
                    windowWidth: 1440,
                    scale: 1,
                    logging: false
                }).then(canvas => {
                    saveImageAs(canvas.toDataURL(), filename + '.png')
                }).then(() => {
                    generatedImage.remove() // Remove generated png
                    baseSvg.style.display = null // Re-display initial svg map
                })
            case 'pdf':
                let opt = {
                    margin:       0.2,
                    filename:     filename + '.pdf',
                    image:        { type: 'png' },
                    html2canvas:  { scale: 2, logging: false },
                    jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
                };

                html2pdf().set(opt).from(target).save().then(() => {
                    generatedImage.remove() // Remove generated png
                    baseSvg.style.display = null // Re-display initial svg map
                })
                break
            default:
                console.log('generateMedia param 2 type must be \'image\' or \'pdf\'')
                break
        }
    }

    const changeFilterActive = async (num, activeValue) => {
        const parsedActiveValue = numberFromString(activeValue)

        // Reset all active legend toggles - needed await/async because setState is asynchronous and was causing issues.
        await resetLegendToggles()

        let currentFilters = state.filters

        currentFilters[num].active = parsedActiveValue

        setState({
            ...state,
            filters: currentFilters
        })

        // Regenerate data excluding non active filters.
        setProcessedData( processData() )
    }

    // This is only used when building a legend that has the unified option checked.
    // Returns an array of the entire data set that still performs some of the same validity checks as the regular processData method
    const processUnifiedData = () => {
        // All the data to be mapped
        let rawData = state.data

        const parsedData = []

        const geoColumnName = state.columns.geo.name

        const supportedUsGeos = stateValues.concat(territoryValues, cityNames)

        const supportedWorldGeos = countryValues.concat(cityNames)

        rawData.forEach((row, i) => {
            let addRow = true

            // Empty row check - Just checks for value of geo column
            if(!row[state.columns.geo.name]) {
                addRow = false
            }

            // Geo matching
            let geoName = row[geoColumnName]

            // Don't add data that can't display on the map, so check based on map type
            if(addRow && "us" === state.general.geoType && false === state.general.hasRegions) {
                // If this doesn't match a supported US geo, don't add it.
                if( false === supportedUsGeos.includes(geoName) ) {
                    addRow = false
                }
            }

            if(addRow && "world" === state.general.geoType && false === supportedWorldGeos.includes(geoName) && false === state.general.hasRegions) {
                addRow = false
            }

            // Passed all of our checks, add to processedData
            if(true === addRow) {
                parsedData.push(row)
            }
        })

        return parsedData
    }

    const displayDataAsText = (value, columnName, returnJsx) => {
        if(value === null) {
            return ""
        }

        let formattedValue = value

        let columnObj = state.columns[columnName]

        if (columnObj) {
            // If value is a number, apply specific formattings
            if (Number(value)) {

                // Rounding
                if(columnObj.hasOwnProperty('roundToPlace') && columnObj.roundToPlace !== "None") {

                    const decimalPoint = columnObj.roundToPlace

                    formattedValue = Number(value).toFixed(decimalPoint)

                }

                if(columnObj.hasOwnProperty('useCommas') && columnObj.useCommas === true) {

                    formattedValue = Number(value).toLocaleString('en-US', { style: 'decimal'})

                }
            }

            // Check if it's a special value. If it is not, apply the designated prefix and suffix
            if (isSpecialClassValue(value) === false) {
                formattedValue = columnObj.prefix + formattedValue + columnObj.suffix
            }
        }

        if(true === returnJsx) {
            return (formattedValue)
        }

        return formattedValue
    }

    const isSpecialClassValue = (value, compareArr) => {
        // For instances where the special values have changed but aren't reflected in state yet, we check the array that is passed in to compare.
        if(compareArr) {
            if (compareArr.includes(value)) {
                return true
            }
        } else {
            if (state.legend.hasOwnProperty('specialClasses') &&
                false !== state.legend.specialClasses &&
                state.legend.specialClasses.includes(value)) {
                return true
            }
        }

        return false
    }

    const applyColorToLegend = (legend) => {
        // Filter out special classes, they don't count.
        let regularLegendItems = processedLegend.data.filter((legendItem) => !legendItem.special).length

        // Default to "bluegreen" color scheme if the passed color isn't valid
        let mapColorPalette = colorPalettes[state.color] ||
            colorPalettes['bluegreen']

        const numberOfSpecialClasses = processedLegend.data.length - regularLegendItems

        let legendItemIndex = processedLegend.data.indexOf(legend) - numberOfSpecialClasses

        let legendValue = legend.value || legend.category

        // Special Classes (No Data)
        if (state.legend.specialClasses !== false && true === legend.special) {

            const specialClassColors = chroma.scale(['#D4D4D4', '#939393'])
                .colors(state.legend.specialClasses.length)

            return specialClassColors[state.legend.specialClasses.indexOf(
                legendValue)]

        }

        let specificColor

	    if ( state.color.includes( 'qualitative' ) ) {
        	specificColor = legendItemIndex
	    } else {
            const colorDistributions = {
                1: [ 1 ],
                2: [ 1, 3 ],
                3: [ 1, 3, 5 ],
                4: [ 0, 2, 4, 6 ],
                5: [ 0, 2, 4, 6, 7 ],
                6: [ 0, 2, 3, 4, 5, 7 ],
                7: [ 0, 2, 3, 4, 5, 6, 7 ],
                8: [ 0, 2, 3, 4, 5, 6, 7, 8 ],
                9: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ]
            }


            let distributionArray = colorDistributions[ regularLegendItems ]

            specificColor = distributionArray[ legendItemIndex ]
        }

      return mapColorPalette[specificColor]

    }

    const applyLegendToValue = (rowObj, type = state.legend.type) => {
        let color = ''

        const generateColorsArray = (color) => {
            return [
                color,
                chroma(color).saturate(1.5).hex(),
                chroma(color).darken(0.5).hex()
            ]
        }

        // If we've got a nav map, simply give them all the same color and be done with it.
        if("navigation" === state.general.type) {
          let mapColorPalette = colorPalettes[ state.color ]

          if(!mapColorPalette) {
            mapColorPalette = colorPalettes[ 'bluegreenreverse' ]
          }

          return generateColorsArray( mapColorPalette[ 3 ] )
        }

        let value = rowObj[state.columns.primary.name]

        // First, check if it's a special class
        let hasSpecialClasses = false

        if(Array.isArray( state.legend.specialClasses ) && state.legend.specialClasses.length > 0) {
            hasSpecialClasses = true
        }

        if (hasSpecialClasses &&
            state.legend.specialClasses.includes(value)) {
            for (let i = 0; i < processedLegend.data.length; i++) {

                const legend = processedLegend.data[i]
                const legendValue = legend.value || legend.category

                if (true === legend.special && value === legendValue) {
                    color = applyColorToLegend(legend)

                    if (legend && legend.disabled === true) {
                        return false
                    }

                    return [color, color, color]

                }

            }

        }

        // If the value is a string that can become a number, convert it.
        value = numberFromString(value)

        // Check if it's a zero that needs to be separated
        if ( true === state.legend.separateZero && 0 === value && 0 < processedLegend.data.length ) {
            // Grab the 0 legend item
            let legend = processedLegend.data.filter((legendItem) => legendItem.max === 0 && legendItem.min === 0)[0]

            if (legend) {
                if (legend.disabled === true) {
                    return false
                }

                color = applyColorToLegend(legend)
            }
        }

        switch (type) {
            case 'equalnumber':
                let hash = hashRow(rowObj)

                for (var i = 0; i < processedLegend.data.length; i++) {

                    var legend = processedLegend.data[i]

                    if ( 'geos' in legend && legend.geos.includes(hash) ) {

                        if(legend.disabled === true) {
                            return false
                        }

                        color = applyColorToLegend(legend)
                    }

                }

                break
            case 'equalinterval':
                // Because equal intervals will have the same "max" for one legend item as the "min" for the next, we must only add if the value is less than (and not equal to) the MAXIMUM of the legend.
                // The one edge case is if this is the last legend item.
                for (let i = 0; i < processedLegend.data.length; i++) {

                    const legend = processedLegend.data[i]

                    if (i === processedLegend.data.length - 1) {
                        if (value >= legend.min && value <= legend.max) {
                            color = applyColorToLegend(legend)

                            if (legend.disabled === true) {
                                return false
                            }

                        }
                    } else {
                        if (value >= legend.min && value < legend.max) {
                            color = applyColorToLegend(legend)

                            if (legend.disabled === true) {
                                return false
                            }

                        }
                    }

                }
                break
            case 'category':
                for (let i = 0; i < processedLegend.data.length; i++) {

                    const legend = processedLegend.data[i]

                    if (legend.category == value) { // eslint-disable-line
                        color = applyColorToLegend(legend)

                        if (legend.disabled === true) {
                            return false
                        }

                    }

                }
                break
            default:
                console.warn(`Error: Legend type not recognized. Should either be equalnumber, equalinterval or category.`)
            break;
        }

        // If at the end we aren't able to assign a color, give it black to signify a fail state. If a geo is black, this function isn't able to assign a legend to the value.
        if(0 === color.length) {
            if(true === loading) {
                return false;
            }

            color = '#000000'
        }

        // Return array with the color, and a lighter and darker version for hover and pressed states
        return generateColorsArray( color )
    }

    const applyTooltipsToGeo = (geoName, data, returnType = 'string') => {
        let toolTipText = `<strong>${displayGeoName(geoName)}</strong>`

        if('data' === state.general.type) {
            toolTipText += `<dl>`

            Object.keys(state.columns).forEach((columnKey) => {
                const column = state.columns[columnKey]

                if (true === column.tooltip) {

                    let label = column.label.length > 0 ? column.label : '';

                    let value = displayDataAsText(data[column.name], columnKey);

                    if(0 < value.length) { // Only spit out the tooltip if there's a value there
                        toolTipText += `<div><dt>${label}</dt><dd>${value}</dd></div>`
                    }

                }
            })

            toolTipText += `</dl>`
        }

        // We convert the markup into JSX and add a navigation link if it's going into a modal.
        if('jsx' === returnType) {
            toolTipText = [(<div key="modal-content">{parse(toolTipText)}</div>)]

            if(state.columns.hasOwnProperty('navigate') && data[state.columns.navigate.name]) {
                toolTipText.push( (<span className="navigation-link" key="modal-navigation-link" onClick={() => navigationHandler(data[state.columns.navigate.name])}>{state.tooltips.linkLabel}<ExternalIcon className="inline-icon ml-1" /></span>) )
            }
        }

        return toolTipText

    }

    // TODO: This needs a larger refactor at a later date to remove hashing and streamline the way it's doing a lot of things.
    // This is working right now but is very messy and poorly commented.
    const processLegend = () => {
        const
            legendObj = state.legend,
            type = legendObj.type,
            number = legendObj.numberOfItems,
            datacol = state.columns.primary.name,
            statecol = state.columns.geo.name,
            legendData = [],
            specialClassesUsed = [];

        let dataObj = Object.values(processedData);

        // Replace dataObj with full data set if we're using unified
        if(true === state.legend.unified) {
            dataObj = processUnifiedData()
        }

        const allGeoList = Object.keys(dataObj)

        const dataSet = Object.values(dataObj)

        const processedDataObj = {
            ...processedLegend,
            disabledAmt: processedLegend.disabledAmt || 0
        }

        // Category
        if('category' === type) {
            const usedAlready = []
            let categoryValues = []

            // Find unique values
            allGeoList.forEach((obj, i) => {
                const data = dataSet[i][datacol]

                if (usedAlready.includes(data) === false && usedAlready.length < 9 && undefined !== data) {
                    usedAlready.push(data)
                }

                // TODO: This is a special case for JIC only. Remove this at a later date when we hopefully have a better solution to legend caps.
                if(usedAlready.includes(data) === false && state.color === 'qualitative1' && true === state.general.hasRegions && usedAlready.length >= 9) {
                    usedAlready.push(data)
                }
            })

            // Sort the category by number/alphabetical so it doesn't just apply them in the order it found them in the file. DOES NOT INCLUDE SPECIAL CLASSES. Those always have to be at the beginning.
            usedAlready.sort()

            if(state.legend && state.legend.categoryValuesOrder) {
                usedAlready.sort( (a, b) => {
                    return state.legend.categoryValuesOrder.indexOf(a) - state.legend.categoryValuesOrder.indexOf(b);
                })
            }

            usedAlready.forEach((val) => {
                const newLegendItem = {
                    category: val
                }

                // Push as an object with one property: a string with the category in it.
                if( isSpecialClassValue(val, legendObj.specialClasses) && false === specialClassesUsed.includes(val) ) {
                    newLegendItem.special = true
                    specialClassesUsed.push(val)
                    legendData.unshift(newLegendItem) // Always at the start
                } else {
                    categoryValues.push(val)
                    legendData.push(newLegendItem)
                }
            })

            // Add our generated legends to the state
            if(categoryValues.length > 0) {
                processedDataObj.categoryValuesOrder = categoryValues
            }

            processedDataObj.data = legendData

            return processedDataObj
        }

        let realNumber = number

        // Add special classes to legend if they're defined - Just store as a string instead of an object.
        if (legendObj.specialClasses !== false) {
            const deleteGeos = []

            allGeoList.forEach((geo) => {
                if (legendObj.specialClasses.includes(dataObj[geo][datacol])) {

                    let valToCheck = dataObj[geo][datacol]
                    if ( ! specialClassesUsed.includes( valToCheck ) ) {
                        specialClassesUsed.push( valToCheck )
                    }
                    deleteGeos.push(geo)
                }
            })

            deleteGeos.forEach((geo) => {
                let i = allGeoList.indexOf(geo)

                allGeoList.splice(i, 1)
            })

            legendObj.specialClasses.forEach((specialClass) => {
                if (specialClassesUsed.includes(specialClass)) {
                    legendData.push({ special: true, value: specialClass })
                }
            })
        }

        const getIntervalAmt = () => {

            let allNums = new Map();
            let allGeos = [];

            allGeoList.forEach((obj, i) => {
                if( false === Number.isNaN( parseFloat(dataObj[obj][datacol]) ) ) {
                    allNums.set(allGeoList[i], parseFloat(dataObj[obj][datacol]))

                    if( false === allGeos.includes(dataObj[obj][statecol]) ) {
                        allGeos.push(dataObj[obj][statecol])
                    }
                }

            })

            allNums = new Map([...allNums.entries()].sort((a, b) => a[1] - b[1]));


            let interval = (Math.max(...allNums.values()) - Math.min(...allNums.values())) / realNumber

            interval = Math.round(interval * 10) / 10

            // Returns min value, max value and the calculated interval between them
            return [interval, allNums]
        }

        let intervalAmt
        let dataMinValue
        let dataMaxValue

        intervalAmt = getIntervalAmt()

        // Find all occurrences of a value in an array
        const getAllIndexes = (arr, val) => {
            let indexes = []

            for(let i = 0; i < arr.length; i++) {
                if (arr[i] === val) {
                    indexes.push(i);
                }
            }

            return indexes
        }

        let fullDataValues, fullDataKeys

        // Get all indexes of the number.
        fullDataValues = Array.from( intervalAmt[1].values() )
        fullDataKeys = Array.from( intervalAmt[1].keys() )

        if(true === legendObj.separateZero) {
            const zeroInData = getAllIndexes(fullDataValues, 0)

            // Splice them out of the array before the algorithms do their work on them.
            if(zeroInData.length > 0) {
                let i = zeroInData.length

                while (i--) {
                    if(fullDataValues.length > 0) {
                        fullDataValues.splice(i, 1)
                        fullDataKeys.splice(i, 1)
                    }
                }

                // Push zero at the beginning of returned legend object
                let range = {
                    min: 0,
                    max: 0,
                }

                legendData.push(range)
                realNumber -= 1 // This zero takes up one legend item. Account for that.
            }
        }

        dataMinValue = Math.min(...fullDataValues)
        dataMaxValue = Math.max(...fullDataValues)

        // Build the data for the legend
        switch (type) {
            case 'equalnumber':
                let numberOfRows = fullDataValues.length

                let remainder
                let changingNumber = realNumber

                let chunkAmt

                // Declaring variable 'chunked' as an empty array
                let chunked = []

                // Looping through the array until it has been split into our subarrays
                while ( numberOfRows > 0 ) {
                    remainder = numberOfRows % changingNumber

                    chunkAmt = Math.floor(numberOfRows / changingNumber)

                    if (remainder > 0) {
                        chunkAmt += 1
                    }

                    let selectedGeos = fullDataKeys.splice(0, chunkAmt);
                    let selectedData = fullDataValues.splice(0, chunkAmt);

                    chunked.push( {
                        selectedGeos,
                        selectedData
                    })

                    changingNumber -= 1
                    numberOfRows -= chunkAmt

                }

                chunked.forEach((allData) => {
                    const hashedGeos = allData.selectedGeos.map( (row, i) => {
                        let fullRow = dataObj[row]

                        let hashedString = Base64.encode( JSON.stringify( fullRow ) )

                        return hashedString

                    })

                    let range = {
                        min: allData.selectedData[0],
                        max: allData.selectedData[allData.selectedData.length - 1],
                        chunkAmount: chunkAmt,
                        geos: hashedGeos,
                    }

                    legendData.push(range)

                })

                break
            case 'equalinterval':
                for (let i = 0; i < realNumber; i++) {

                    let interval = intervalAmt[0]

                    let min = dataMinValue + (interval * i)

                    let max = min + interval

                    // If this is the last loop, assign actual max of data as the end point
                    if (i === realNumber - 1) {
                        max = dataMaxValue
                    }

                    let range = {
                        min: Math.round(min * 100) / 100,
                        max: Math.round(max * 100) / 100,
                    }

                    legendData.push(range)

                }
                break
            default:
                console.warn('No valid data classification type.')
        }

        processedDataObj.data = legendData

        return processedDataObj
    }

    // Checks if the string is a number and returns it as a number if it is
    const numberFromString = (value) => {
        // Only do this to values that are ONLY numbers - without this parseFloat strips all the other text
        let nonNumeric = /[^\d.]/g

        if( false === Number.isNaN( parseFloat(value) ) && null === String(value).match(nonNumeric) ) {
            return parseFloat(value)
        }

        return value

    }

    // This resets all active legend toggles. Should always be called with "await" to make sure it's done processing before you continue. See usage example in changeFilterActive.
    const resetLegendToggles = async () => {
        let data = [...processedLegend.data]

        for(let i of data) {
            if(i.disabled) {
                delete i.disabled 
            }
        }

        setProcessedLegend({...processedLegend, data, disabledAmt: 0})
    }

    // Supports JSON or CSV
    const fetchRemoteData = async (url) => {
        try {
            const urlObj = new URL(url);

            const regex = /(?:\.([^.]+))?$/

            let data = []

            if ('csv' === regex.exec(urlObj.pathname)[1]) {

                data = await fetch(url)
                    .then(response => response.text())
                    .then(responseText =>{
                        const parsedCsv = Papa.parse(responseText, {
                            header: true,
                            dynamicTyping: true
                        })

                        return parsedCsv.data
                    })
                    .then(result => {
                        return result
                    })

                return data
            }

            if ('json' === regex.exec(url)[1]) {
                data = await fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        return data
                    })

                return data
            }
        } catch {
            console.error(`Cannot parse URL: ${url}`);
        }
    }

    // Attempts to find the corresponding value
    const displayGeoName = (key) => {
        let value = key

        // Map to first item in values array which is the preferred label
        if(stateKeys.includes(value)) {
            value = supportedStates[key][0]
        }

        if(territoryKeys.includes(value)) {
            value = supportedTerritories[key][0]
        }

        if(countryKeys.includes(value)) {
            value = supportedCountries[key][0]
        }

        const dict = {
            "District of Columbia" : "Washington D.C."
        }

        if(true === Object.keys(dict).includes(value)) {
            value = dict[value]
        }

        return value
    }

    // This calculates what is actually going to be seen and displayed by the map and data table at render. It accounts for things like toggling legend items as well as filters.
    const processData = () => {

        let dataObj = state.data

        const parsedData = {}

        const geoColumnName = state.columns.geo.name

        const supportedUsGeos = stateKeys.concat(territoryKeys, cityNames)

        const supportedWorldGeos = countryKeys.concat(cityNames)

        dataObj.forEach((row, i) => {
            let addRow = true

            // Empty row check - Just checks for value of geo column
            if(!row[state.columns.geo.name]) {
                addRow = false
            }

            // Filters
            if (addRow && state.filters.length > 0) {
                state.filters.forEach((filter) => {
                    // Non strict comparison to allow for strings that are numbers in the raw data
                    if (row[filter.columnName] != filter.active) { // eslint-disable-line
                        addRow = false
                    }
                })
            }

            // If this is a navigation only map, skip if it doesn't have a URL
            if(addRow && "navigation" === state.general.type ) {
                let navigateUrl = row[state.columns.navigate.name] || "";
                if ( undefined !== navigateUrl ) {
                    // Strip hidden characters before we check length
                    navigateUrl = navigateUrl.replace( /(\r\n|\n|\r)/gm, '' );
                }
                if ( 0 === navigateUrl.length ) {
                    addRow = false
                }
            }

            // Geo matching
            let geoName = row[geoColumnName]

            // US State & Territory Check
            if(addRow && "us" === state.general.geoType && false === state.general.hasRegions) {
                // Map abbreviations to full names first for states and territories
                let stateName = stateKeys.find( (key) => supportedStates[key].includes(geoName) )

                if(stateName) {
                    geoName = stateName
                }

                let territoryName = territoryKeys.find( (key) => supportedTerritories[key].includes(geoName) )

                if(territoryName) {
                    geoName = territoryName
                }

                // If this doesn't match a supported geo
                if( false === supportedUsGeos.includes(geoName) ) {
                    addRow = false
                }
            }

            // World Check
            if(addRow && "world" === state.general.geoType && false === state.general.hasRegions) {
                geoName = countryKeys.find( (key) => supportedCountries[key].includes(geoName) )

                if(false === supportedWorldGeos.includes(geoName)) {
                    addRow = false
                }
            }

            // Passed all of our checks, add to processedData
            if(true === addRow && undefined === parsedData[geoName]) {
                parsedData[geoName] = row
            }
        })

        return parsedData
    }

    const navigationHandler = (urlString) => {
        // Call custom navigation method if there is one
        if(customNavigationHandler) {
            customNavigationHandler(urlString);
            return;
        }

        // Abort if value is blank
        if(0 === urlString.length) {
            throw Error("Blank string passed as URL. Navigation aborted.");
        }

        const urlObj = new URL(urlString);

        // Open constructed link in new tab/window
        window.open(urlObj.toString(), '_blank');
    }

    const loadConfig = async (configObj) => {
        // Set loading flag
        if(!loading) setLoading(true)

        // Create new config object the same way each time no matter when this method is called.
        let newState = {
            ...initialState,
            ...configObj
        }

        // If a dataUrl property exists, always pull from that.
        if (newState.dataUrl) {
            if(newState.dataUrl[0] === '/') {
                newState.dataUrl = `https://${props.hostname}${newState.dataUrl}`
            }

            let newData = await fetchRemoteData(newState.dataUrl)

            if(newData) {
                newState.data = newData
            }
        }

        if( Array.isArray(newState.data) ) {
            // Process all the data and trim whitespace/returns/etc...
            newState.data = cleanCsvData(newState.data)
        }

        // This code goes through and adds the defaults for every property declaring in the initial state at the top.
        // This allows you to easily add new properties to the config without having to worry about accounting for backwards compatibility.
        // Right now this does not work recursively -- only on first and second level properties. So state -> prop1 -> childprop1
        Object.keys(newState).forEach( (key) => {
            if("object" === typeof newState[key] && false === Array.isArray(newState[key])) {
                if(initialState[key] ) {

                    Object.keys(initialState[key]).forEach( (property) => {
                        if(undefined === newState[key][property]) {
                            newState[key][property] = initialState[key][property]
                        }
                    })

                }
            }
        })

        // After data is grabbed, loop through and generate filter column values if there are any
        if (newState.filters) {

            const filterList = []

            newState.filters.forEach((filter) => {

                filterList.push(filter.columnName)

            })

            filterList.forEach((filter, index) => {
                const filterValues = generateValuesForFilter(filter, newState.data)

                newState.filters[index].values = filterValues

                // Initial filter should be active
                newState.filters[index].active = filterValues[0]
            })

        }

        // Set properties that can be passed directly and require no additional computation
        setState(newState)

        // Done loading
        setLoading(false)
    }

    const getViewport = size => {
        let result = 'lg'

        const viewports = {
            "lg": 1200,
            "md": 992,
            "sm": 768,
            "xs": 576,
            "xxs": 350
        }

        for(let v of Object.keys( viewports )) {
            if(size <= viewports[v]) {
                result = v
            }
        }

        return result
    }

    const generateValuesForFilter = (columnName, data = state.data) => {

        const values = []

        data.forEach( (row) => {

            const value = row[columnName]

            if(value && false === values.includes(value)) {
                values.push(value)
            }

        })

        return values

    }

    const cleanCsvData = (data)  => {
        return data.map( (row) => {

            let deleteKeys = []

            for(let property in row) {

                if(0 === property.length) {
                    deleteKeys.push(property)
                }

                if ( 'string' === typeof row[property] ) {
                    row[ property ] = row[ property ].trim()
                }
            }

            deleteKeys.forEach( (key) => delete row[key] )

            return row
        } )
    }

    const hashRow = (rowObj)  => {
        return Base64.encode( JSON.stringify( rowObj ) )
    }

    const announceChange = (value) => {
        setAccessibleStatus(value)
    }

    const geoClickHandler = (key, value) => {
        // If modals are set or we are on a mobile viewport, display modal
        if ('xs' === viewport || 'xxs' === viewport || 'click' === state.tooltips.appearanceType) {
            setModal({
                geoName: key,
                geoData: value
            })

            return;
        }

        // Otherwise if this item has a link specified for it, do regular navigation.
        if (state.columns.navigate && value[state.columns.navigate.name]) {
            navigationHandler(value[state.columns.navigate.name])
        }
    }

    useEffect(() => {
        let configData

        // Load the configuration data passed to this component if it exists
        if(config) {
            configData = config
        }

        // If the config passed is a string, try to load it as an ajax
        if(configUrl) {
            (async () => {
                configData = await fetchRemoteData(configData)
            })();
        }

        // Finally, dynamically import the default configuration if nothing else was found.
        if(!configData) {
            configData = usaDefaultConfig
        }

        // Once we have a config verify that it is an object and load it
        if('object' === typeof configData) {
            (async () => {
                await loadConfig(configData)
            })();
        }

        const resizeObserver = new ResizeObserver(entries => {
            for (let entry of entries) {
                let newViewport = getViewport(entry.contentRect.width)

                if( newViewport !== viewport ) {
                    setViewport(newViewport)
                }
            }
        });

        resizeObserver.observe(outerContainerRef.current);
    }, [])

    useEffect(() => {
        if(processedData.length !== state.data.length || state.filters.length)
        setProcessedData( processData() )
    }, [state.data, state.filters])

    useEffect(() => {
        let newProcessedLegend = processLegend()

        if(newProcessedLegend) {
            setProcessedLegend(newProcessedLegend)
        }
    }, [processedData])
console.log({state})
    // Map Container Classes
    let mapContainerClasses = [
        'map-container',
        state.legend.position,
        state.general.type,
        state.general.geoType
    ]

    if(null !== modal) {
        mapContainerClasses.push('modal-background')
    }

    if(state.general.type === 'navigation' && true === state.general.fullBorder) {
        mapContainerClasses.push('full-border')
    }

    // Props passed to all map types
    const mapProps = {
        state,
        processedData,
        rebuildTooltips : ReactTooltip.rebuild,
        applyTooltipsToGeo,
        closeModal,
        navigationHandler,
        geoClickHandler,
        applyLegendToValue,
        displayGeoName
    }

    const { title = '', subtext = ''} = state.general

    return (
        <div className={className ? `cdc-open-viz-module cdc-map-outer-container ${className} ${viewport}` : `cdc-open-viz-module cdc-map-outer-container ${viewport}` } ref={outerContainerRef}>
            {true === loading && <Loading />}
            {true === isEditor && <EditorPanel state={state} setState={setState} loadConfig={loadConfig} generateValuesForFilter={generateValuesForFilter} processData={processData} setProcessedData={setProcessedData} processedData={processedData} processLegend={processLegend} setProcessedLegend={setProcessedLegend} processedLegend={processedLegend} setParentConfig={setConfig} loading={loading} />}
            <section className={`cdc-map-inner-container ${viewport}`} aria-label={'Map: ' + title}>
                {'hover' === state.tooltips.appearanceType &&
                    <ReactTooltip
                        id="tooltip"
                        place="right"
                        type="light"
                        html={true}
                        className={state.tooltips.capitalizeLabels ? 'capitalize tooltip' : 'tooltip'}
                    />
                }
                <header className={state.general.showTitle === true ? '' : 'hidden'} aria-hidden="true">
                    <div role="heading" className={'map-title ' + state.general.headerColor}>
                        { parse(title) }
                    </div>
                </header>

                <section className={mapContainerClasses.join(' ')} onClick={(e) => closeModal(e)}>
                    {state.general.showDownloadMediaButton === true &&
                        <div className="map-downloads" data-html2canvas-ignore>
                            <div className="map-downloads__ui btn-group">
                                <button className="btn" title="Download Map as Image"
                                        onClick={() => generateMedia(outerContainerRef.current, 'image')}>
                                    <DownloadImg className="btn__icon" title='Download Map as Image'/>
                                </button>
                                <button className="btn" title="Download Map as PDF"
                                        onClick={() => generateMedia(outerContainerRef.current, 'pdf')}>
                                    <DownloadPdf className="btn__icon" title='Download Map as PDF'/>
                                </button>
                            </div>
                        </div>
                    }

                    <section className="geography-container" aria-hidden="true" ref={mapSvg}>
                        {null !== modal && <Modal type={state.general.type} viewport={viewport} applyTooltipsToGeo={applyTooltipsToGeo} applyLegendToValue={applyLegendToValue} capitalize={state.tooltips.capitalizeLabels} content={modal} />}
                            {'us' === state.general.geoType && !state.general.displayAsHex && <UsaMap supportedStates={supportedStates} supportedTerritories={supportedTerritories} {...mapProps} />}
                            {state.general.displayAsHex && 'data' === state.general.type && <HexMap supportedStates={supportedStates} supportedTerritories={supportedTerritories} {...mapProps} />}
                            {'world' === state.general.geoType && <WorldMap supportedCountries={supportedCountries} countryValues={countryValues} {...mapProps} />}
                            {"data" === state.general.type && logo && <img src={logo} alt="" className="map-logo"/>}
                    </section>
                    {"navigation" === state.general.type &&
                        <NavigationMenu
                            displayGeoName={displayGeoName}
                            processedData={processedData}
                            options={state.general}
                            columns={state.columns}
                            navigationHandler={(val) => navigationHandler(val)}
                        />
                    }
                    {state.general.showSidebar && 'navigation' !== state.general.type && false === loading  && Object.keys(processedData).length > 0 &&
                        <Sidebar
                            viewport={viewport}
                            legend={state.legend}
                            filters={state.filters}
                            columns={state.columns}
                            sharing={state.sharing}
                            prefix={state.columns.primary.prefix}
                            suffix={state.columns.primary.suffix}
                            setProcessedLegend={setProcessedLegend}
                            processedLegend={processedLegend}
                            setState={setState}
                            resetLegendToggles={resetLegendToggles}
                            applyColorToLegend={applyColorToLegend}
                            changeFilterActive={changeFilterActive}
                            announceChange={announceChange}
                        />
                    }
                </section>
                {true === state.dataTable.forceDisplay && state.general.type !== "navigation" && false === loading && Object.keys(processedData).length > 0 &&
                    <DataTable
                        state={state}
                        navigationHandler={navigationHandler}
                        expandDataTable={state.general.expandDataTable}
                        headerColor={state.general.headerColor}
                        columns={state.columns}
                        showDownloadButton={state.general.showDownloadButton}
                        data={state.data}
                        processedData={processedData}
                        processedLegend={processedLegend}
                        displayDataAsText={displayDataAsText}
                        displayGeoName={displayGeoName}
                        applyLegendToValue={applyLegendToValue}
                        tableTitle={state.dataTable.title}
                        mapTitle={state.general.title}
                        viewport={viewport}
                    />
                }
                {subtext.length > 0 && <p className="subtext">{ parse(subtext) }</p>}
            </section>
            <div aria-live="assertive" className="cdcdataviz-sr-only">{ accessibleStatus }</div>
        </div>
    )
}

export default CdcMap;
