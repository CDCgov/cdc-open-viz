import React, { useState, useEffect, useRef, memo, useCallback } from 'react';

// IE11
import 'core-js/stable'
import 'whatwg-fetch'
import ResizeObserver from 'resize-observer-polyfill';

// Third party
import ReactTooltip from 'react-tooltip';
import chroma from 'chroma-js';
import Papa from 'papaparse';
import parse from 'html-react-parser';
import html2pdf from 'html2pdf.js'
import html2canvas from 'html2canvas';
import Canvg from 'canvg';

// Data
import colorPalettes from '../../core/data/colorPalettes';
import ExternalIcon from './images/external-link.svg';
import { supportedStates, supportedTerritories, supportedCountries, supportedCounties, supportedCities, supportedStatesFipsCodes, stateFipsToTwoDigit } from './data/supported-geos';
import initialState from './data/initial-state';

// Sass
import './scss/main.scss';
import './scss/btn.scss'

// Images
import DownloadImg from './images/icon-download-img.svg'
import DownloadPdf from './images/icon-download-pdf.svg'

// Core
import Loading from '@cdc/core/components/Loading';
import DataTransform from '@cdc/core/components/DataTransform';
import getViewport from '@cdc/core/helpers/getViewport';
import numberFromString from '@cdc/core/helpers/numberFromString'
import validateFipsCodeLength from '@cdc/core/helpers/validateFipsCodeLength'


// Child Components
import Sidebar from './components/Sidebar';
import Modal from './components/Modal';
import EditorPanel from './components/EditorPanel'; // Future: Lazy
import UsaMap from './components/UsaMap'; // Future: Lazy
import CountyMap from './components/CountyMap'; // Future: Lazy
import DataTable from './components/DataTable'; // Future: Lazy
import NavigationMenu from './components/NavigationMenu'; // Future: Lazy
import WorldMap from './components/WorldMap'; // Future: Lazy
import SingleStateMap from './components/SingleStateMap'; // Future: Lazy

// Data props
const stateKeys = Object.keys(supportedStates)
const territoryKeys = Object.keys(supportedTerritories)
const countryKeys = Object.keys(supportedCountries)
const countyKeys = Object.keys(supportedCounties)
const cityKeys = Object.keys(supportedCities)

const generateColorsArray = (color = '#000000', special = false) => {
    let colorObj = chroma(color)

    let hoverColor = special ? colorObj.brighten(0.5).hex() : colorObj.saturate(1.3).hex()

    return [
        color,
        hoverColor,
        colorObj.darken(0.3).hex()
    ]
}

const hashObj = (row) => {
    let str = JSON.stringify(row)

	let hash = 0;
	if (str.length === 0) return hash;
	for (let i = 0; i < str.length; i++) {
		let char = str.charCodeAt(i);
		hash = ((hash<<5)-hash) + char;
		hash = hash & hash;
	}

    return hash;
}

// returns string[]
const getUniqueValues = (data, columnName) => {
    let result = {};

    for(let i = 0; i < data.length; i++) {
        let val = data[i][columnName]

        if(undefined === val) continue

        if(undefined === result[val]) {
            result[val] = true
        }
    }

    return Object.keys(result)
}

const CdcMap = ({className, config, navigationHandler: customNavigationHandler, isDashboard = false, isEditor = false, configUrl, logo = null, setConfig, hostname}) => {
     
    const [showLoadingMessage, setShowLoadingMessage] = useState(false)
    const transform = new DataTransform()
    const [state, setState] = useState( {...initialState} )
    const [loading, setLoading] = useState(true)
    const [currentViewport, setCurrentViewport] = useState()
    const [runtimeFilters, setRuntimeFilters] = useState([])
    const [runtimeLegend, setRuntimeLegend] = useState([])
    const [runtimeData, setRuntimeData] = useState({init: true})
    const [modal, setModal] = useState(null)
    const [accessibleStatus, setAccessibleStatus] = useState('')
    let legendMemo = useRef(new Map())



    const resizeObserver = new ResizeObserver(entries => {
        for (let entry of entries) {
            let newViewport = getViewport(entry.contentRect.width)
            
            setCurrentViewport(newViewport)
        }
    });

    // *******START SCREEN READER DEBUG*******
    // const focusedElement = useActiveElement();

    // useEffect(() => {
    //     if (focusedElement) {
    //         focusedElement.value && console.log(focusedElement.value);
    //     }
    //     console.log(focusedElement);
    // }, [focusedElement])
    // *******END SCREEN READER DEBUG*******

    // Tag each row with a UID. Helps with filtering/placing geos. Not enumerable so doesn't show up in loops/console logs except when directly addressed ex row.uid
    // We are mutating state in place here (depending on where called) - but it's okay, this isn't used for rerender
    const addUIDs = useCallback((obj, fromColumn) => {

        obj.data.forEach(row => {
            let uid = null

            if(row.uid) row.uid = null // Wipe existing UIDs

            // United States check
            if("us" === obj.general.geoType && obj.columns.geo.name) {

                // const geoName = row[obj.columns.geo.name] && typeof row[obj.columns.geo.name] === "string" ? row[obj.columns.geo.name].toUpperCase() : '';

                let geoName = '';
                if (row[obj.columns.geo.name] !== undefined && row[obj.columns.geo.name] !== null) {

                    geoName = String(row[obj.columns.geo.name])
                    geoName = geoName.toUpperCase()
                }

                // States
                uid = stateKeys.find( (key) => supportedStates[key].includes(geoName) )

                // Territories
                if(!uid) {
                    uid = territoryKeys.find( (key) => supportedTerritories[key].includes(geoName) )
                }

                // Cities
                if(!uid) {
                    uid = cityKeys.find( (key) => key === geoName)
                }
            }

            // World Check
            if("world" === obj.general.geoType) {
                const geoName = row[obj.columns.geo.name]

                uid = countryKeys.find( (key) => supportedCountries[key].includes(geoName) )
            }

            // County Check
            if("us-county" === obj.general.geoType || "single-state" === obj.general.geoType) {
                const fips = row[obj.columns.geo.name]
                uid = countyKeys.find( (key) => key === fips )
            }

            // TODO: Points
            if(uid) {
                Object.defineProperty(row, 'uid', {
                    value: uid,
                    writable: true
                });
            }
        })

        obj.data.fromColumn = fromColumn
    })

    const generateRuntimeLegend = useCallback((obj, runtimeData, hash) => {

        const newLegendMemo = new Map(); // Reset memoization

        const
            primaryCol = obj.columns.primary.name,
            type = obj.legend.type,
            number = obj.legend.numberOfItems,
            result = [];

        // Add a hash for what we're working from if passed
        if(hash) {
            result.fromHash = hash
        }

        // Unified will based the legend off ALL of the data maps received. Otherwise, it will use
        let dataSet = obj.legend.unified ? obj.data : Object.values(runtimeData);

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

        const applyColorToLegend = (legendIdx) => {
            // Default to "bluegreen" color scheme if the passed color isn't valid
            let mapColorPalette = obj.customColors || colorPalettes[obj.color] || colorPalettes['bluegreen']

            let colorIdx = legendIdx - specialClasses

            // Special Classes (No Data)
            if (result[legendIdx].special) {
                const specialClassColors = chroma.scale(['#D4D4D4', '#939393']).colors(specialClasses)

                return specialClassColors[ legendIdx ]
            }

            if ( obj.color.includes( 'qualitative' ) ) return mapColorPalette[colorIdx]

            let amt = Math.max( result.length - specialClasses, 1 )
            let distributionArray = colorDistributions[ amt ]

            const specificColor = distributionArray[ colorIdx ]

            return mapColorPalette[specificColor]
        }

        let specialClasses = 0
        let specialClassesHash = {}

        // Special classes
        if (obj.legend.specialClasses.length) {
            if(typeof obj.legend.specialClasses[0] === 'object'){
                obj.legend.specialClasses.forEach(specialClass => {
                    dataSet = dataSet.filter(row => {
                        const val = String(row[specialClass.key]);

                        if(specialClass.value === val){
                            if(undefined === specialClassesHash[val]) {
                                specialClassesHash[val] = true;

                                result.push({
                                    special: true,
                                    value: val,
                                    label: specialClass.label
                                });

                                result[result.length - 1].color = applyColorToLegend(result.length - 1);

                                specialClasses += 1;
                            }

                            let specialColor = '';
                            
                            // color the state if val is in row 
                            specialColor = result.findIndex(p => p.value === val)

                            newLegendMemo.set( hashObj(row), specialColor)

                            return false;
                        }

                        return true;
                    });
                });
            } else {
                dataSet = dataSet.filter(row => {
                    const val = row[primaryCol]

                    if( obj.legend.specialClasses.includes(val) ) {

                        // apply the special color to the legend
                        if(undefined === specialClassesHash[val]) {
                            specialClassesHash[val] = true;

                            result.push({
                                special: true,
                                value: val
                            });

                            result[result.length - 1].color = applyColorToLegend(result.length - 1);

                            specialClasses += 1;
                        }
                    
                        let specialColor = '';
                        
                        // color the state if val is in row 
                        if ( Object.values(row).includes(val) ) {
                            specialColor = result.findIndex(p => p.value === val)
                        }
                        newLegendMemo.set( hashObj(row), specialColor)

                        return false
                    }

                    return true
                })
            }
        }

        // Category
        if('category' === type) {
            let uniqueValues = new Map()
            let count = 0

            for(let i = 0; i < dataSet.length; i++) {
                let row = dataSet[i]
                let value = row[primaryCol]

                if(undefined === value) continue

                if(false === uniqueValues.has(value)) {
                    uniqueValues.set(value, [hashObj(row)]);
                    count++
                } else {
                    uniqueValues.get(value).push(hashObj(row))
                }

                if(count === 9) break // Can only have 9 categorical items for now
            }

            let sorted = [...uniqueValues.keys()]

            // Apply custom sorting or regular sorting
            let configuredOrder = obj.legend.categoryValuesOrder ?? []

            // Coerce strings to numbers inside configuredOrder property
            for(let i = 0; i < configuredOrder.length; i++) {
                configuredOrder[i] = numberFromString(configuredOrder[i])
            }

            if(configuredOrder.length) {
                sorted.sort( (a, b) => {
                    return configuredOrder.indexOf(a) - configuredOrder.indexOf(b);
                })
            } else {
                sorted.sort((a, b) => a - b)
            }

            // Add legend item for each
            sorted.forEach((val) => {
                result.push({
                    value: val,
                })

                let lastIdx = result.length - 1
                let arr = uniqueValues.get(val)

                if(arr) {
                    arr.forEach(hashedRow => newLegendMemo.set(hashedRow, lastIdx))
                }
            })


            // Add color to new legend item
            for(let i = 0; i < result.length; i++) {
                result[i].color = applyColorToLegend(i)
            }
            legendMemo.current = newLegendMemo
            return result
        }

        let uniqueValues = {};
        dataSet.forEach(datum => {
            uniqueValues[datum[primaryCol]] = true;
        });

        let legendNumber = Math.min(number, Object.keys(uniqueValues).length);

        // Separate zero
        if(true === obj.legend.separateZero) {
            let addLegendItem = false;

            for(let i = 0; i < dataSet.length; i++) {
                if (dataSet[i][primaryCol] === 0) {
                    addLegendItem = true

                    let row = dataSet.splice(i, 1)[0]

                    newLegendMemo.set( hashObj(row), result.length)
                    i--
                }
            }

            if(addLegendItem) {
                legendNumber -= 1 // This zero takes up one legend item

                // Add new legend item
                result.push({
                    min: 0,
                    max: 0
                })

                let lastIdx = result.length - 1

                // Add color to new legend item
                result[lastIdx].color = applyColorToLegend(lastIdx)
            }
        }

        // Sort data for use in equalnumber or equalinterval
        dataSet = dataSet.filter(row => typeof row[primaryCol] === 'number').sort((a, b) => {
            let aNum = a[primaryCol]
            let bNum = b[primaryCol]

            return aNum - bNum
        })

        // Equal Number
        if(type === 'equalnumber') {
            let numberOfRows = dataSet.length

            let remainder
            let changingNumber = legendNumber

            let chunkAmt

            // Loop through the array until it has been split into equal subarrays
            while ( numberOfRows > 0 ) {
                remainder = numberOfRows % changingNumber

                chunkAmt = Math.floor(numberOfRows / changingNumber)

                if (remainder > 0) {
                    chunkAmt += 1
                }

                let removedRows = dataSet.splice(0, chunkAmt);

                let min = removedRows[0][primaryCol],
                    max = removedRows[removedRows.length - 1][primaryCol]

                removedRows.forEach(row => {
                    newLegendMemo.set( hashObj(row), result.length )
                })

                result.push({
                    min,
                    max
                })

                result[result.length - 1].color = applyColorToLegend(result.length - 1)

                changingNumber -= 1
                numberOfRows -= chunkAmt
            }
        }

        // Equal Interval
        
        if(type === 'equalinterval' && dataSet?.length !== 0) {
            if(!dataSet || dataSet.length === 0) {
                setState({
                    ...state,
                    runtime: {
                        ...state.runtime,
                        editorErrorMessage: 'Error setting equal interval legend type'
                    }
                })
                return;
            }
            dataSet = dataSet.filter(row => row[primaryCol] !== undefined)
            let dataMin = dataSet[0][primaryCol]
            let dataMax = dataSet[dataSet.length - 1][primaryCol]

            let pointer = 0 // Start at beginning of dataSet

            for (let i = 0; i < legendNumber; i++) {
                let interval = Math.abs(dataMax - dataMin) / legendNumber

                let min = dataMin + (interval * i)
                let max = min + interval

                // If this is the last loop, assign actual max of data as the end point
                if (i === legendNumber - 1) max = dataMax

                // Add rows in dataSet that belong to this new legend item since we've got the data sorted
                while(pointer < dataSet.length && dataSet[pointer][primaryCol] <= max) {
                    newLegendMemo.set(hashObj(dataSet[pointer]), result.length )
                    pointer += 1
                }

                let range = {
                    min: Math.round(min * 100) / 100,
                    max: Math.round(max * 100) / 100,
                }

                result.push(range)

                result[result.length - 1].color = applyColorToLegend(result.length - 1)
            }
        }

        result.forEach((legendItem, idx) => {
            legendItem.color = applyColorToLegend(idx, specialClasses, result)
        })

        legendMemo.current = newLegendMemo
        return result
    })

    const generateRuntimeFilters = useCallback((obj, hash, runtimeFilters) => {
        if(undefined === obj.filters || obj.filters.length === 0) return []

        let filters = []

        if(hash) filters.fromHash = hash

        obj?.filters.forEach(({columnName, label, active, values}, idx) => {
            if(undefined === columnName) return

            let newFilter = runtimeFilters[idx]

            const sortAsc = (a, b) => {
                return a.toString().localeCompare(b.toString(), 'en', { numeric: true })
            };

            const sortDesc = (a, b) => {
                return b.toString().localeCompare(a.toString(), 'en', { numeric: true })
            };

            values = getUniqueValues(state.data, columnName)

            if(obj.filters[idx].order === 'asc') {
                values = values.sort(sortAsc)
            }

            if(obj.filters[idx].order === 'desc') {
                values = values.sort(sortDesc)
            }

            if(obj.filters[idx].order === 'cust') {
                if(obj.filters[idx]?.values.length > 0) {
                    values = obj.filters[idx].values
                }
            }

            if(undefined === newFilter) {
                newFilter = {}
            }

            newFilter.label = label ?? ''
            newFilter.columnName = columnName
            newFilter.values = values
            newFilter.active = active || values[0] // Default to first found value

            filters.push(newFilter)
        })

        return filters
    })

    // Calculates what's going to be displayed on the map and data table at render.
    const generateRuntimeData = useCallback((obj, filters, hash) => {
        const result = {}

        if(hash) {
            // Adding property this way prevents it from being enumerated
            Object.defineProperty(result, 'fromHash', {
                value : hash
            });
        }
        

        obj.data.forEach(row => {
            if(undefined === row.uid) return false // No UID for this row, we can't use for mapping

            // When on a single state map filter runtime data by state
            if (
                !(String(row[obj.columns.geo.name]).substring(0, 2) === obj.general?.statePicked?.fipsCode) &&
                obj.general.geoType === 'single-state'
            ) {
                return false;
            }


            if(row[obj.columns.primary.name]) {
                row[obj.columns.primary.name] = numberFromString(row[obj.columns.primary.name])
            }

            // If this is a navigation only map, skip if it doesn't have a URL
            if("navigation" === obj.general.type ) {
                let navigateUrl = row[obj.columns.navigate.name] || "";
                
                if ( undefined !== navigateUrl && typeof navigateUrl === "string" ) {
                    // Strip hidden characters before we check length
                    navigateUrl = navigateUrl.replace( /(\r\n|\n|\r)/gm, '' );
                }
                if ( 0 === navigateUrl.length ) {
                    return false
                }
            }

            // Filters
            if(filters?.length) {
                for(let i = 0; i < filters.length; i++) {
                    const {columnName, active} = filters[i]

                    if (String(row[columnName]) !== String(active)) return false // Bail out, not part of filter
                }
            }

            // Don't add additional rows with same UID
            if(undefined === result[row.uid]) {
                result[row.uid] = row
            }
        })

        return result
    })

    const outerContainerRef = useCallback(node => {
        if (node !== null) {
            resizeObserver.observe(node);
        }
    },[]);

    const mapSvg = useRef(null);

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
                console.warn('generateMedia param 2 type must be \'image\' or \'pdf\'')
                break
        }
    }

    const changeFilterActive = async (idx, activeValue) => {
        // Reset active legend toggles
        resetLegendToggles()

        try {

            const isEmpty = (obj) => {
                return Object.keys(obj).length === 0;
            }

            let filters = [...runtimeFilters]

            filters[idx] = { ...filters[idx] }

            filters[idx].active = activeValue
            const newData = generateRuntimeData(state, filters)
            
            // throw an error if newData is empty
            if (isEmpty(newData)) throw new Error('Cove Filter Error: No runtime data to set for this filter')

            // set the runtime filters and data
            setRuntimeData(newData)
            setRuntimeFilters(filters)
        } catch(e) {
            console.error(e.message)
        }

    }

    const displayDataAsText = (value, columnName) => {
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
            if (false === state.legend.specialClasses.includes(String(value))) {
                formattedValue = columnObj.prefix + formattedValue + columnObj.suffix
            }
        }

        return formattedValue
    }

    const applyLegendToRow = (rowObj) => {
        // Navigation map
        if("navigation" === state.general.type) {
          let mapColorPalette = colorPalettes[ state.color ] || colorPalettes[ 'bluegreenreverse' ]

          return generateColorsArray( mapColorPalette[ 3 ] )
        }

        let hash = hashObj(rowObj)

        if( legendMemo.current.has(hash) ) {
            let idx = legendMemo.current.get(hash)

            if(runtimeLegend[idx]?.disabled) return false

            return generateColorsArray(runtimeLegend[idx]?.color, runtimeLegend[idx]?.special)
        }

        // Fail state
        return generateColorsArray()
    }

    const applyTooltipsToGeo = (geoName, row, returnType = 'string') => {
        let toolTipText = '';
        
        // Adds geo label, ie State: Georgia
        let stateOrCounty = 
            state.general.geoType === 'us' ? 'State: ' : 
            (state.general.geoType === 'us-county' || state.general.geoType === 'single-state') ? 'County: ':
            '';

        if (state.general.geoType === 'us-county') {
            let stateFipsCode = row[state.columns.geo.name].substring(0,2)
            const stateName = supportedStatesFipsCodes[stateFipsCode];
            
            toolTipText +=  !state.general.hideGeoColumnInTooltip ? `<strong>State:  ${stateName}</strong><br/>` : `<strong>${stateName}</strong><br/>` ;
        }
        
        toolTipText += !state.general.hideGeoColumnInTooltip ? `<strong>${stateOrCounty}${displayGeoName(geoName)}</strong>` : `<strong>${displayGeoName(geoName)}</strong>`

        if('data' === state.general.type && undefined !== row) {
            toolTipText += `<dl>`

            Object.keys(state.columns).forEach((columnKey) => {
                const column = state.columns[columnKey]

                if (true === column.tooltip) {

                    let label = column.label.length > 0 ? column.label : '';

                    let value;

                    if(state.legend.specialClasses && state.legend.specialClasses.length && typeof state.legend.specialClasses[0] === 'object'){
                        for(let i = 0; i < state.legend.specialClasses.length; i++){
                            if(String(row[state.legend.specialClasses[i].key]) === state.legend.specialClasses[i].value){
                                value = displayDataAsText(state.legend.specialClasses[i].label, columnKey);
                                break;
                            }
                        }
                    }

                    if(!value){
                        value = displayDataAsText(row[column.name], columnKey);
                    }

                    if(0 < value.length) { // Only spit out the tooltip if there's a value there
                        toolTipText += state.general.hidePrimaryColumnInTooltip ? `<div><dd>${value}</dd></div>` : `<div><dt>${label}</dt><dd>${value}</dd></div>`
                    }

                }
            })

            toolTipText += `</dl>`
        }

        // We convert the markup into JSX and add a navigation link if it's going into a modal.
        if('jsx' === returnType) {
            toolTipText = [(<div key="modal-content">{parse(toolTipText)}</div>)]

            if(state.columns.hasOwnProperty('navigate') && row[state.columns.navigate.name]) {
                toolTipText.push( (<span className="navigation-link" key="modal-navigation-link" onClick={() => navigationHandler(row[state.columns.navigate.name])}>{state.tooltips.linkLabel}<ExternalIcon className="inline-icon ml-1" /></span>) )
            }
        }

        return toolTipText

    }

    const titleCase = (string) => {
        return string.split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()).join(' ');
    }

    // This resets all active legend toggles.
    const resetLegendToggles = async () => {
        let newLegend = [...runtimeLegend]

        newLegend.forEach(legendItem => {
            delete legendItem.disabled
        })

        setRuntimeLegend(newLegend)
    }

    // Supports JSON or CSV
    const fetchRemoteData = async (url) => {
        try {
            const urlObj = new URL(url);
            const regex = /(?:\.([^.]+))?$/

            let data = []

            const ext = (regex.exec(urlObj.pathname)[1])
            if ('csv' === ext) {
                data = await fetch(url)
                    .then(response => response.text())
                    .then(responseText => {
                        const parsedCsv = Papa.parse(responseText, {
                            header: true,
                            dynamicTyping: true,
                            skipEmptyLines: true
                        })
                        return parsedCsv.data
                    })
            }

            if ('json' === ext) {
                data = await fetch(url)
                    .then(response => response.json())
            }

            return data;
        } catch {
            // If we can't parse it, still attempt to fetch it
            try {
                let response = await (await fetch(configUrl)).json()
                return response
            } catch {
                console.error(`Cannot parse URL: ${url}`);
            }
        }
    }

    const formatLegendLocation = (key) => {
        let value = key;
        var formattedName = '';
        let stateName = stateFipsToTwoDigit[key.substring(0, 2)]

        if(stateName) {
            formattedName += stateName
        }

        if (countyKeys.includes(value)) {
            formattedName += ', ' + titleCase(supportedCounties[key])
        }

        return formattedName;
    }

    // Attempts to find the corresponding value
    const displayGeoName = (key) => {
        let value = key

        // Map to first item in values array which is the preferred label
        if(stateKeys.includes(value)) {
            value = titleCase(supportedStates[key][0])
        }

        if(territoryKeys.includes(value)) {
            value = titleCase(supportedTerritories[key][0])
        }

        if(countryKeys.includes(value)) {
            value = titleCase(supportedCountries[key][0])
        }

        if(countyKeys.includes(value)) {
            value = titleCase(supportedCounties[key])
        }

        const dict = {
            "District of Columbia" : "Washington D.C."
        }

        if(true === Object.keys(dict).includes(value)) {
            value = dict[value]
        }

        return titleCase(value);
    }

    const navigationHandler = (urlString) => {
        // Call custom navigation method if passed
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

    const geoClickHandler = (key, value) => {
        // If modals are set or we are on a mobile viewport, display modal
        if ('xs' === currentViewport || 'xxs' === currentViewport || 'click' === state.tooltips.appearanceType) {
            setModal({
                geoName: key,
                keyedData: value
            })

            return;
        }

        // Otherwise if this item has a link specified for it, do regular navigation.
        if (state.columns.navigate && value[state.columns.navigate.name]) {
            navigationHandler(value[state.columns.navigate.name])
        }
    }

    const validateFipsCodeLength = (newState) => {
        if(newState.general.geoType === 'us-county' || newState.general.geoType === 'single-state' || newState.general.geoType === 'us' && newState?.data) {

            newState?.data.forEach(dataPiece => {
                if(dataPiece[newState.columns.geo.name]) {

                    if(!isNaN(parseInt(dataPiece[newState.columns.geo.name])) && dataPiece[newState.columns.geo.name].length === 4) {
                        dataPiece[newState.columns.geo.name] = 0 + dataPiece[newState.columns.geo.name]
                    }
                    dataPiece[newState.columns.geo.name] = dataPiece[newState.columns.geo.name].toString()
                }
            })
        }
        return newState;
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
                newState.dataUrl = 'https://' + hostname + newState.dataUrl
            }

            let newData = await fetchRemoteData(newState.dataUrl)

            if(newData && newState.dataDescription) {
                newData = transform.autoStandardize(newData);
                newData = transform.developerStandardize(newData, newState.dataDescription);
            }

            if(newData) {
                newState.data = newData
            }
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

        // If there's a name for the geo, add UIDs
        if(newState.columns.geo.name || newState.columns.geo.fips) {
            addUIDs(newState, newState.columns.geo.name || newState.columns.geo.fips)
        }

        if(newState.dataTable.forceDisplay === undefined){
            newState.dataTable.forceDisplay = !isDashboard;
        }

        validateFipsCodeLength(newState);
        setState(newState)
        setLoading(false)
    }

    const init = async () => {
        let configData = null

        // Load the configuration data passed to this component if it exists
        if(config) {
            configData = config
        }

        // If the config passed is a string, try to load it as an ajax
        if(configUrl) {
            configData = await fetchRemoteData(configUrl)
        }

        // Once we have a config verify that it is an object and load it
        if('object' === typeof configData) {
            loadConfig(configData)
        }
    }

    // Initial load
    useEffect(() => {
        init()
    }, [])

    useEffect(() => {
        if (state.data) {
            let newData = generateRuntimeData(state);
            setRuntimeData(newData);
        }
    }, [state.general.statePicked]);


    // When geotype changes
    useEffect(() => {
        // UID
        if(state.data && state.columns.geo.name) {
            addUIDs(state, state.columns.geo.name)
        }

    }, [state]);

    useEffect(() => {
        // UID
        if(state.data && state.columns.geo.name && state.columns.geo.name !== state.data.fromColumn) {
            addUIDs(state, state.columns.geo.name)
        }

        // Filters
        const hashFilters = hashObj(state.filters)
        let filters;

        if(state.filters && hashFilters !== runtimeFilters.fromHash) {
            filters = generateRuntimeFilters(state, hashFilters, runtimeFilters)

            if(filters) {
                setRuntimeFilters(filters)
            }
         }

        const hashLegend = hashObj({
            color: state.color,
            customColors: state.customColors,
            numberOfItems: state.legend.numberOfItems,
            type: state.legend.type,
            separateZero: state.legend.separateZero ?? false,
            categoryValuesOrder: state.legend.categoryValuesOrder,
            specialClasses: state.legend.specialClasses,
            geoType: state.general.geoType,
            data: state.data,
             ...runtimeLegend
        })

        const hashData = hashObj({
            columns: state.columns,
            geoType: state.general.geoType,
            type: state.general.type,
            geo: state.columns.geo.name,
            primary: state.columns.primary.name,
            data: state.data,
            ...runtimeFilters
        })

        // Data
        let newRuntimeData;
        if(hashData !== runtimeData.fromHash && state.data?.fromColumn) {
            const data = generateRuntimeData(state, filters || runtimeFilters, hashData)
            setRuntimeData(data) 
        }

        // Legend
        if (hashLegend !== runtimeLegend.fromHash && (undefined === runtimeData.init || newRuntimeData)) {
            const legend = generateRuntimeLegend(state, newRuntimeData || runtimeData, hashLegend)
            setRuntimeLegend(legend)
        }
        
    }, [state])

    useEffect(() => {
        const hashLegend = hashObj({
            color: state.color,
            customColors: state.customColors,
            numberOfItems: state.legend.numberOfItems,
            type: state.legend.type,
            separateZero: state.legend.separateZero ?? false,
            categoryValuesOrder: state.legend.categoryValuesOrder,
            specialClasses: state.legend.specialClasses,
            geoType: state.general.geoType,
            data: state.data
        })
        
        // Legend - Update when runtimeData does
        if(hashLegend !== runtimeLegend.fromHash && undefined === runtimeData.init) {
            const legend = generateRuntimeLegend(state, runtimeData)
            setRuntimeLegend(legend)
        }
    }, [runtimeData])

    if(config) {
        useEffect(() => {
            loadConfig(config)
        }, [config.data])
    }

    // Destructuring for more readable JSX
    const { general, tooltips, dataTable } = state
    const { title = '', subtext = ''} = general

    // Outer container classes
    let outerContainerClasses = [
        'cdc-open-viz-module',
        'cdc-map-outer-container',
        currentViewport
    ]

    if(className) {
        outerContainerClasses.push(className)
    }

    // Map container classes
    let mapContainerClasses = [
        'map-container',
        state.legend.position,
        state.general.type,
        state.general.geoType
    ]

    if(modal) {
        mapContainerClasses.push('modal-background')
    }

    if(general.type === 'navigation' && true === general.fullBorder) {
        mapContainerClasses.push('full-border')
    }

    // Props passed to all map types
    const mapProps = {
        state,
        data: runtimeData,
        rebuildTooltips : ReactTooltip.rebuild,
        applyTooltipsToGeo,
        closeModal,
        navigationHandler,
        geoClickHandler,
        applyLegendToRow,
        displayGeoName,
        runtimeLegend,
        generateColorsArray,
        titleCase,
        setState,
    }

    if (!mapProps.data || !state.data) return <Loading />;

    const hasDataTable = state.runtime.editorErrorMessage.length === 0 && true === dataTable.forceDisplay && general.type !== 'navigation' && false === loading;

    const handleMapTabbing = () => {
        let tabbingID;

        // 1) skip to legend
        if (general.showSidebar) {
            tabbingID = '#legend'
        }
        
        // 2) skip to data table if it exists and not a navigation map
        if (hasDataTable && !general.showSidebar) {
            tabbingID = `#dataTableSection__${Date.now()}`;
        }
        
        // 3) if its a navigation map skip to the dropdown.
        if (state.general.type === 'navigation') {
            tabbingID = `#dropdown-${Date.now()}`;
        }

        // 4) handle other options
        return tabbingID || '#!';

    }

    const tabId = handleMapTabbing()

    
    return (
		<div className={outerContainerClasses.join(' ')} ref={outerContainerRef}>
			{isEditor && (
				<EditorPanel
					isDashboard={isDashboard}
					state={state}
					setState={setState}
					loadConfig={loadConfig}
					setParentConfig={setConfig}
                    setRuntimeFilters={setRuntimeFilters}
					runtimeFilters={runtimeFilters}
					runtimeLegend={runtimeLegend}
					columnsInData={Object.keys(state.data[0])}
				/>
			)}
			{!runtimeData.init && (general.type === 'navigation' || runtimeLegend) && <section className={`cdc-map-inner-container ${currentViewport}`} aria-label={'Map: ' + title}>
                {['lg', 'md'].includes(currentViewport) && 'hover' === tooltips.appearanceType && (
					<ReactTooltip
						id='tooltip'
						place='right'
						type='light'
						html={true}
						className={tooltips.capitalizeLabels ? 'capitalize tooltip' : 'tooltip'}
					/>
				)}
				<header className={general.showTitle === true ? '' : 'hidden'} aria-hidden='true'>
					<div role='heading' className={'map-title ' + general.headerColor} tabIndex="0">
						{parse(title)}
					</div>
				</header>
				<section className={mapContainerClasses.join(' ')} onClick={(e) => closeModal(e)}>
					{general.showDownloadMediaButton === true && (
						<div className='map-downloads' data-html2canvas-ignore>
							<div className='map-downloads__ui btn-group'>
								<button
									className='btn'
									title='Download Map as Image'
									onClick={() => generateMedia(outerContainerRef.current, 'image')}
								>
									<DownloadImg className='btn__icon' title='Download Map as Image' />
								</button>
								<button
									className='btn'
									title='Download Map as PDF'
									onClick={() => generateMedia(outerContainerRef.current, 'pdf')}
								>
									<DownloadPdf className='btn__icon' title='Download Map as PDF' />
								</button>
							</div>
						</div>
					)}

                    <a id='skip-geo-container' className='cdcdataviz-sr-only-focusable' href={tabId}>
                        Skip Over Map Container
                    </a>
					<section className='geography-container' aria-hidden='true' ref={mapSvg}>
                        {currentViewport && (
                            <section className='geography-container' aria-hidden='true' ref={mapSvg}>
                                {modal && (
                                    <Modal
                                        type={general.type}
                                        viewport={currentViewport}
                                        applyTooltipsToGeo={applyTooltipsToGeo}
                                        applyLegendToRow={applyLegendToRow}
                                        capitalize={state.tooltips.capitalizeLabels}
                                        content={modal}
                                    />
                                )}
                                {'single-state' === general.geoType && (
                                    <SingleStateMap supportedTerritories={supportedTerritories} {...mapProps} />
                                )}
                                {'us' === general.geoType && (
                                    <UsaMap supportedTerritories={supportedTerritories} {...mapProps} />
                                )}
                                {'world' === general.geoType && (
                                    <WorldMap supportedCountries={supportedCountries} {...mapProps} />
                                )}
                                {'us-county' === general.geoType && (
                                    <CountyMap
                                        supportedCountries={supportedCountries}
                                        {...mapProps}
                                    />
                                )}
                                {'data' === general.type && logo && <img src={logo} alt='' className='map-logo' />}
                            </section>
                        
                        )}
                        </section>

					{general.showSidebar && 'navigation' !== general.type && (
						<Sidebar
							viewport={currentViewport}
							legend={state.legend}
							runtimeLegend={runtimeLegend}
							setRuntimeLegend={setRuntimeLegend}
							runtimeFilters={runtimeFilters}
							columns={state.columns}
							sharing={state.sharing}
							prefix={state.columns.primary.prefix}
							suffix={state.columns.primary.suffix}
							setState={setState}
							resetLegendToggles={resetLegendToggles}
							changeFilterActive={changeFilterActive}
							setAccessibleStatus={setAccessibleStatus}
						/>
					)}
				</section>
				{'navigation' === general.type && (
                    <NavigationMenu
                        mapTabbingID={tabId}
						displayGeoName={displayGeoName}
						data={runtimeData}
						options={general}
						columns={state.columns}
						navigationHandler={(val) => navigationHandler(val)}
					/>
				)}
				{state.runtime.editorErrorMessage.length === 0 && true === dataTable.forceDisplay && general.type !== 'navigation' && false === loading && (
					<DataTable
						state={state}
						rawData={state.data}
						navigationHandler={navigationHandler}
						expandDataTable={general.expandDataTable}
						headerColor={general.headerColor}
						columns={state.columns}
						showDownloadButton={general.showDownloadButton}
						runtimeLegend={runtimeLegend}
						runtimeData={runtimeData}
						displayDataAsText={displayDataAsText}
						displayGeoName={displayGeoName}
						applyLegendToRow={applyLegendToRow}
						tableTitle={dataTable.title}
						indexTitle={dataTable.indexTitle}
						mapTitle={general.title}
						viewport={currentViewport}
                        formatLegendLocation={formatLegendLocation}
                        tabbingId={tabId}
					/>
				)}
				{subtext.length > 0 && <p className='subtext'>{parse(subtext)}</p>}
			</section>}
			<div aria-live='assertive' className='cdcdataviz-sr-only'>
				{accessibleStatus}
			</div>
		</div>
	);
}

export default memo(CdcMap)
