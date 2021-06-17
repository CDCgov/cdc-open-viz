import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';

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

// Core
import Loading from '@cdc/core/components/Loading';

// Child Components
import Sidebar from './components/Sidebar';
import Modal from './components/Modal';
import EditorPanel from './components/EditorPanel'; // Future: Lazy
import UsaMap from './components/UsaMap'; // Future: Lazy
import HexMap from './components/HexMap'; // Future: Lazy
import DataTable from './components/DataTable'; // Future: Lazy
import NavigationMenu from './components/NavigationMenu'; // Future: Lazy
import WorldMap from './components/WorldMap'; // Future: Lazy

// Data props
const stateValues = Object.values(supportedStates).flat()
const stateKeys = Object.keys(supportedStates)

const territoryValues = Object.values(supportedTerritories).flat()
const territoryKeys = Object.keys(supportedTerritories)

const countryValues = Object.values(supportedCountries).flat()
const countryKeys = Object.keys(supportedCountries)

const cityNames = Object.keys(supportedCities)

const supportedUsGeos = stateKeys.concat(territoryKeys, cityNames)

const supportedWorldGeos = countryKeys.concat(cityNames)

const generateColorsArray = (color = '#000000') => {
    return [
        color,
        chroma(color).saturate(1.3).hex(),
        chroma(color).darken(0.3).hex()
    ]
}

let legendMemo = new Map();

const hashRow = (row) => {
    let str = JSON.stringify(row)

	let hash = 0;
	if (str.length == 0) return hash;
	for (let i = 0; i < str.length; i++) {
		let char = str.charCodeAt(i);
		hash = ((hash<<5)-hash) + char;
		hash = hash & hash; // Convert to 32bit integer
	}

    return hash;
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

const getViewport = size => {
    let result = 'lg'

    const viewports = {
        "lg": 1200,
        "md": 992,
        "sm": 768,
        "xs": 576,
        "xxs": 350
    }

    if(size > 1200) return result

    for(let viewport in viewports) {
        if(size <= viewports[viewport]) {
            result = viewport
        }
    }

    return result
}

const getUniqueValues = (data, columnName) => {
    if(!data) return []
    
    let hash = {}

    for(let i = 0; i < data.length; i++) {
        if(undefined === hash[data[i][columnName]]) {
            hash[data[i][columnName]] = true
        }
    }

    return Object.keys(hash)
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

const generateRuntime = (obj, setRuntime) => {   
    const generateRuntimeFilters = () => {
        if(undefined === obj.filters || obj.filters.length === 0) return null

        let filters = [...obj.filters]

        filters.forEach(({columnName}, idx) => {
            filters[idx].values = getUniqueValues(obj.data, columnName)

            // If no filter is active right now, set the first one
            if(undefined === filters[idx].active) {
                filters[idx].active = filters[idx].values[0]
            }
        })

        return filters
    }

    const filters = generateRuntimeFilters()

    // Creates a copy of the data keyed either to ISO code if it's a city, state, or country.
    // Keyed to a hash in the case of points and regions.
    let keyedData = {}

    obj.data.forEach(row => {
        // United States check
        if("us" === obj.general.geoType) {
            const geoName = row[obj.columns.geo.name]

            // States
            let key = stateKeys.find( (key) => supportedStates[key].includes(geoName) )

            // Territories
            if(!key) {
                key = territoryKeys.find( (key) => supportedTerritories[key].includes(geoName) )
            }

            // Cities
            if(!key) {
                key = cityNames.find( (key) => key === geoName) 
            }

            if(key) {
                if(undefined === keyedData[key]) keyedData[key] = row; // Only add first instance
                return;
            }
        }

        // World Check
        if("world" === obj.general.geoType) {
            const geoName = row[obj.columns.geo.name]

            let key = countryKeys.find( (key) => supportedCountries[key].includes(geoName) )

            if(key) {
                if(undefined === keyedData[key]) keyedData[key] = row; // Only add first instance
                return;
            }
        }

        // Doesn't match to a specific geo
        let key = hashRow(row)

        if(undefined === keyedData[key]) {
            keyedData[key] = row
        }
    })

    // Calculates what's going to be displayed on the map and data table at render.
    const generateRuntimeData = () => {
        const result = {}

        for(let key in keyedData) {
            let row = keyedData[key]

            // Filters
            if(filters) {
                filters.forEach((filter) => {
                    // Non strict comparison to allow for strings that are numbers in the raw data
                    if (row[filter.columnName] != filter.active) { // eslint-disable-line
                        return false
                    }
                })
            }

            // If this is a navigation only map, skip if it doesn't have a URL
            if("navigation" === obj.general.type ) {
                let navigateUrl = row[obj.columns.navigate.name] || "";
                if ( undefined !== navigateUrl ) {
                    // Strip hidden characters before we check length
                    navigateUrl = navigateUrl.replace( /(\r\n|\n|\r)/gm, '' );
                }
                if ( 0 === navigateUrl.length ) {
                    return false
                }
            }

            // Data that wasn't key'd to a geo (Regions, custom points.) Disabling for now.
            // TODO: When adding regions/custom points, turn this back on.
            if(Number.parseInt(key)) {
                continue
            } 

            if(undefined === result[key]) {
                result[key] = row
            }
        }

        return result
    }

    const data = generateRuntimeData()

    const generateRuntimeLegend = () => {
        legendMemo = new Map(); // Reset memoization

        const
            primaryCol = obj.columns.primary.name,
            type = obj.legend.type,
            number = obj.legend.numberOfItems,
            result = [];
    
        // Unified will based the legend off ALL of the data maps received. Otherwise, it will use 
        let dataSet = obj.legend.unified ? obj.data : Object.values(data);

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
            let mapColorPalette = colorPalettes[obj.color] || colorPalettes['bluegreen']
        
            let colorIdx = legendIdx - specialClasses
        
            if ( obj.color.includes( 'qualitative' ) ) return mapColorPalette[colorIdx]
        
            let distributionArray = colorDistributions[ result.length - specialClasses ]
        
            const specificColor = distributionArray[ colorIdx ]
        
            // Special Classes (No Data)
            if (result[legendIdx].special) {
                const specialClassColors = chroma.scale(['#D4D4D4', '#939393']).colors(specialClasses)
        
                return specialClassColors[ legendIdx ]
            }
        
            return mapColorPalette[specificColor]
        }

        // dataSet = rows.map(row => numberFromString(row[primaryCol])).sort((a, b) => a - b) // IMPORTANT

        let specialClasses = 0

        // Special classes
        if (obj.legend.specialClasses.length) {
            dataSet = dataSet.filter((row, idx) => {
                const val = numberFromString(row[primaryCol])

                if( obj.legend.specialClasses.includes(val) ) {
                    result.push({
                        special: true,
                        value: val
                    })

                    result[result.length - 1].color = applyColorToLegend(result.length - 1)

                    specialClasses += 1

                    legendMemo.set( hashRow(row), result.length - 1)

                    return false
                }
    
                return true
            })
        }

        // Category
        if('category' === type) {
            let uniqueValues = {}
        
            for(let i = 0; i < dataSet.length; i++) {
                let row = dataSet[i]
                let value = row[primaryCol]

                if(undefined === uniqueValues[value]) {
                    uniqueValues[value] = []
                }

                uniqueValues[value].push(hashRow(row))
            }

            // for(let key in uniqueValues) {}

            // Sort the category so it doesn't just apply them in the order it found them in the file.
            
            uniqueValues.sort((a, b) => a - b);
        
            let configuredOrder = obj.legend.categoryValuesOrder
        
            if(configuredOrder.length) {
                uniqueValues.sort( (a, b) => {
                    return configuredOrder.indexOf(a) - configuredOrder.indexOf(b);
                })
            }
        
            uniqueValues.forEach((val) => {
                categoryValues.push(val)
                result.push({value: val})
            })
        
            // Add our generated legends to the obj
            if(categoryValues.length ) {
                result['categoryValuesOrder'] = categoryValues
            }
    
            return result
        }
    
        let legendNumber = number
    
        // Separate zero
        if(true === obj.legend.separateZero) {   
            let addLegendItem = false; 
       
            for(let i = 0; i < dataSet.length; i++) {
                if (numberFromString(dataSet[i][primaryCol]) === 0) {
                    addLegendItem = true

                    let row = dataSet.splice(i, 1)[0]

                    legendMemo.set( hashRow(row), result.length)
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
        dataSet.sort((a, b) => {
            let aNum = numberFromString(a[primaryCol])
            let bNum = numberFromString(b[primaryCol])

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
                    legendMemo.set( hashRow(row), result.length )
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
        if(type === 'equalinterval') {
            for (let i = 0; i < legendNumber; i++) {
                let interval = intervalAmt[0]
    
                let min = dataMinValue + (interval * i)
    
                let max = min + interval
    
                // If this is the last loop, assign actual max of data as the end point
                if (i === legendNumber - 1) {
                    max = dataMaxValue
                }
    
                let range = {
                    min: Math.round(min * 100) / 100,
                    max: Math.round(max * 100) / 100,
                }
    
                result.push(range)
            }
        }
    
        result.forEach((legendItem, idx) => {
            legendItem.color = applyColorToLegend(idx, specialClasses, result)
        })
    
        return result
    }

    const legend = generateRuntimeLegend()

    setRuntime({
        filters,
        data,
        legend
    })
}

const CdcMap = ({className, config, navigationHandler: customNavigationHandler, isEditor = false, configUrl, logo = null, setConfig}) => {
    const [state, setState] = useState( JSON.parse(JSON.stringify(initialState)) )
    const [loading, setLoading] = useState(true)
    const [viewport, setViewport] = useState('lg')
    const [runtime, setRuntime] = useState(null)
    const [modal, setModal] = useState(null)
    const [accessibleStatus, setAccessibleStatus] = useState('')

    const resizeObserver = new ResizeObserver(entries => {
        for (let entry of entries) {
            let newViewport = getViewport(entry.contentRect.width)
    
            setViewport(newViewport)
        }
    });

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

        // Reset all active legend toggles TODO - Still needed?
        await resetLegendToggles()

        let currentFilters = state.filters

        currentFilters[num].active = parsedActiveValue

        const newState = {
            ...state,
            filters: currentFilters
        }

        setState(newState)

        // This is a very heavy function that we only want to call when we need to. That's why it isn't in a useEffect.
        generateRuntime(newState, setRuntime)
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
            if (false === state.legend.specialClasses.includes(value)) {
                formattedValue = columnObj.prefix + formattedValue + columnObj.suffix
            }
        }

        if(true === returnJsx) {
            return (formattedValue)
        }

        return formattedValue
    }

    const applyLegendToValue = (rowObj) => {
        // Navigation map
        if("navigation" === state.general.type) {
          let mapColorPalette = colorPalettes[ state.color ] || colorPalettes[ 'bluegreenreverse' ]

          return generateColorsArray( mapColorPalette[ 3 ] )
        }

        let hash = hashRow(rowObj)

        if( legendMemo.has(hash) ) {
            let idx = legendMemo.get(hash)

            if(runtime.legend[idx].disabled) return false

            return generateColorsArray( runtime.legend[idx].color )
        }

        // Fail state
        return generateColorsArray()
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

    // This resets all active legend toggles. Should always be called with "await" to make sure it's done processing before you continue. See usage example in changeFilterActive.
    const resetLegendToggles = async () => {
        let data = [...runtime.legend]

        data.forEach(legendItem => {
            delete legendItem.disabled
        })

        setRuntime({
            ...runtime,
            legend: data
        })
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
        if ('xs' === viewport || 'xxs' === viewport || 'click' === state.tooltips.appearanceType) {
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

        setState(newState)
        generateRuntime(newState, setRuntime)

        // Done loading
        setLoading(false)
    }

    // Initial load
    useEffect(() => {
        let configData = null

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
        if(null === configData) {
            configData = usaDefaultConfig
        }

        // Once we have a config verify that it is an object and load it
        if('object' === typeof configData) {
            (async () => {
                await loadConfig(configData)
            })();
        }
    }, [])

    // Destructuring for more readable JSX
    const { general, tooltips, dataTable } = state
    const { title = '', subtext = ''} = general

    // Outer container classes
    let outerContainerClasses = [
        'cdc-open-viz-module',
        'cdc-map-outer-container',
        viewport
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

    if(loading || null === runtime) return <Loading />

    // Props passed to all map types
    const mapProps = {
        state,
        runtime,
        data: runtime.data,
        rebuildTooltips : ReactTooltip.rebuild,
        applyTooltipsToGeo,
        closeModal,
        navigationHandler,
        geoClickHandler,
        applyLegendToValue,
        displayGeoName
    }

    return (
        <div className={outerContainerClasses.join(' ')} ref={outerContainerRef}>
            {isEditor && <EditorPanel state={state} setState={setState} loadConfig={loadConfig} setParentConfig={setConfig} loading={loading} runtime={runtime} setRuntime={setRuntime} generateRuntime={generateRuntime} getUniqueValues={getUniqueValues} data={runtime.data} />}
            <section className={`cdc-map-inner-container ${viewport}`} aria-label={'Map: ' + title}>
                {'hover' === tooltips.appearanceType &&
                    <ReactTooltip
                        id="tooltip"
                        place="right"
                        type="light"
                        html={true}
                        className={tooltips.capitalizeLabels ? 'capitalize tooltip' : 'tooltip'}
                    />
                }
                <header className={general.showTitle === true ? '' : 'hidden'} aria-hidden="true">
                    <div role="heading" className={'map-title ' + general.headerColor}>
                        { parse(title) }
                    </div>
                </header>
                <section className={mapContainerClasses.join(' ')} onClick={(e) => closeModal(e)}>
                    {general.showDownloadMediaButton === true &&
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
                        {modal && <Modal type={general.type} viewport={viewport} applyTooltipsToGeo={applyTooltipsToGeo} applyLegendToValue={applyLegendToValue} capitalize={state.tooltips.capitalizeLabels} content={modal} />}
                            {'us' === general.geoType && !general.displayAsHex && <UsaMap supportedStates={supportedStates} supportedTerritories={supportedTerritories} {...mapProps} />}
                            {general.displayAsHex && 'data' === general.type && <HexMap supportedStates={supportedStates} supportedTerritories={supportedTerritories} {...mapProps} />}
                            {'world' === general.geoType && <WorldMap supportedCountries={supportedCountries} countryValues={countryValues} {...mapProps} />}
                            {"data" === general.type && logo && <img src={logo} alt="" className="map-logo"/>}
                    </section>
                    {"navigation" === general.type &&
                        <NavigationMenu
                            displayGeoName={displayGeoName}
                            data={runtime.data}
                            options={general}
                            columns={state.columns}
                            navigationHandler={(val) => navigationHandler(val)}
                        />
                    }
                    {general.showSidebar && 'navigation' !== general.type && false === loading  &&
                        <Sidebar
                            viewport={viewport}
                            legend={state.legend}
                            runtime={runtime}
                            setRuntime={setRuntime}
                            filters={state.filters}
                            columns={state.columns}
                            sharing={state.sharing}
                            prefix={state.columns.primary.prefix}
                            suffix={state.columns.primary.suffix}
                            setState={setState}
                            resetLegendToggles={resetLegendToggles}
                            changeFilterActive={changeFilterActive}
                            setAccessibleStatus={setAccessibleStatus}
                        />
                    }
                </section>
                {true === dataTable.forceDisplay && general.type !== "navigation" && false === loading &&
                    <DataTable
                        state={state}
                        rawData={state.data}
                        navigationHandler={navigationHandler}
                        expandDataTable={general.expandDataTable}
                        headerColor={general.headerColor}
                        columns={state.columns}
                        showDownloadButton={general.showDownloadButton}
                        legend={runtime.legend}
                        runtimeData={runtime.data}
                        displayDataAsText={displayDataAsText}
                        displayGeoName={displayGeoName}
                        applyLegendToValue={applyLegendToValue}
                        tableTitle={dataTable.title}
                        mapTitle={general.title}
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
