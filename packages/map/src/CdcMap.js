// External
import React, { Component } from 'react';
import html2pdf from 'html2pdf.js'
import html2canvas from 'html2canvas';
import Canvg from 'canvg';
import { createCanvas } from 'canvas'

// Third party
import ReactTooltip from 'react-tooltip';
import chroma from 'chroma-js';
import Papa from 'papaparse';
import { Base64 } from 'js-base64';
import parse from 'html-react-parser';
import ResizeObserver from 'resize-observer-polyfill';

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
import '@cdc/core';
import Loading from '@cdc/core/components/Loading';

// Components
import Sidebar from './components/Sidebar';
import Modal from './components/Modal';
import EditorPanel from './components/EditorPanel'; // Future: Lazy
import UsaMap from './components/UsaMap'; // Future: Lazy
import DataTable from './components/DataTable'; // Future: Lazy
import NavigationMenu from './components/NavigationMenu'; // Future: Lazy
import WorldMap from './components/WorldMap'; // Future: Lazy

class CdcMap extends Component {
    constructor (props) {
        super(props)

        // Initial state property
        this.state = JSON.parse(JSON.stringify(initialState));

        // Data props
        this.outerContainerRef = React.createRef();
        this.mapSvg = React.createRef();
        this.supportedStates = supportedStates;
        this.supportedCountries = supportedCountries;
        this.supportedTerritories = supportedTerritories;
        this.stateValues = Object.values(supportedStates).flat()
        this.stateKeys = Object.keys(supportedStates)
        this.territoryValues = Object.values(supportedTerritories).flat()
        this.territoryKeys = Object.keys(supportedTerritories)
        this.countryValues = Object.values(supportedCountries).flat()
        this.countryKeys = Object.keys(supportedCountries)
        this.cityNames = Object.keys(supportedCities)

        this.viewports = {
            "lg": 1200,
            "md": 992,
            "sm": 768,
            "xs": 576,
            "xxs": 350
        }

        // Binding context
        this.processData = this.processData.bind(this)
        this.applyLegendToValue = this.applyLegendToValue.bind(this)
        this.applyColorToLegend = this.applyColorToLegend.bind(this)
        this.applyTooltipsToGeo = this.applyTooltipsToGeo.bind(this)
        this.processLegend = this.processLegend.bind(this)
        this.resetLegendToggles = this.resetLegendToggles.bind(this)
        this.changeFilterActive = this.changeFilterActive.bind(this)
        this.generateValuesForFilter = this.generateValuesForFilter.bind(this)
        this.displayGeoName = this.displayGeoName.bind(this)
        this.announceChange = this.announceChange.bind(this)
        this.geoClickHandler = this.geoClickHandler.bind(this)
        this.closeModal = this.closeModal.bind(this)
        this.navigationHandler = this.navigationHandler.bind(this)
        this.displayDataAsText = this.displayDataAsText.bind(this)
        this.loadConfig = this.loadConfig.bind(this)
        this.setState = this.setState.bind(this)
        this.processUnifiedData = this.processUnifiedData.bind(this)
        this.getViewport = this.getViewport.bind(this)
        this.saveAs = this.saveAs.bind(this)
    }

    closeModal({target}) {
        if('string' === typeof target.className && (target.className.includes('modal-close') || target.className.includes('modal-background') ) && this.state.general.modalOpen) {
            this.setState( (prevState) => {
                return {
                    general: {
                        ...prevState.general,
                        modalOpen: false
                    }
                }
            })
        }
    }

    saveAs(uri, filename) {
        const link = document.createElement('a')
        if (typeof link.download === 'string') {
            link.href = uri
            link.download = filename

            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
        } else {
            window.open(uri)
        }
    }

    generateMedia(target, type) {
        // Convert SVG to canvas
        const baseSvg = this.mapSvg.current.querySelector('.rsm-svg')

        const ratio = baseSvg.getBoundingClientRect().height / baseSvg.getBoundingClientRect().width
        const calcHeight = ratio * 1440
        const xmlSerializer = new XMLSerializer()
        const svgStr = xmlSerializer.serializeToString(baseSvg)
        const options = { log: false, ignoreMouse: true }
        const canvas = createCanvas(1440, calcHeight)
        const ctx = canvas.getContext('2d')
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
        const filename = this.state.general.title.replace(/\s+/g, '-').toLowerCase() + '-' + date.getDate() + date.getMonth() + date.getFullYear()

        switch (type) {
            case 'image':
                return html2canvas(target, {
                    allowTaint: true,
                    backgroundColor: '#ffffff',
                    width: 1440,
                    windowWidth: 1440,
                    scale: 1
                }).then(canvas => {
                    this.saveAs(canvas.toDataURL(), filename + '.png')
                }).then(() => {
                    generatedImage.remove() // Remove generated png
                    baseSvg.style.display = null // Re-display initial svg map
                })
            case 'pdf':
                let opt = {
                    margin:       0.2,
                    filename:     filename + '.pdf',
                    image:        { type: 'png' },
                    html2canvas:  { scale: 2 },
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

    async changeFilterActive (num, activeValue) {

        const parsedActiveValue = this.numberFromString(activeValue)

        // Reset all active legend toggles - needed await/async because setState is asynchronous and was causing issues.
        await this.resetLegendToggles()

        let currentFilters = this.state.filters

        currentFilters[num].active = parsedActiveValue

        this.setState({
            filters: currentFilters
        })

        // Regenerate data excluding non active filters.
        const processedData = this.processData()

        this.setState(() => { return {processedData} })

        // Rebuild the legend with the new values.
        const processedLegend = this.processLegend()

        this.setState(() => { return {processedLegend} })
    }

    // This is only used when building a legend that has the unified option checked.
    // Returns an array of the entire data set that still performs some of the same validity checks as the regular processData method
    processUnifiedData () {
        // All the data to be mapped
        let dataObj = this.state.data

        let rawData = dataObj

        const parsedData = []

        const geoColumnName = this.state.columns.geo.name

        const supportedUsGeos = this.stateValues.concat(this.territoryValues, this.cityNames)

        const supportedWorldGeos = this.countryValues.concat(this.cityNames)

        rawData.forEach((row, i) => {
            let addRow = true

            // Empty row check - Just checks for value of geo column
            if(!row[this.state.columns.geo.name]) {
                addRow = false
            }

            // Geo matching
            let geoName = row[geoColumnName]

            // Don't add data that can't display on the map, so check based on map type
            if(addRow && "us" === this.state.general.geoType && false === this.state.general.hasRegions) {
                // If this doesn't match a supported US geo, don't add it.
                if( false === supportedUsGeos.includes(geoName) ) {
                    addRow = false
                }
            }

            if(addRow && "world" === this.state.general.geoType && false === supportedWorldGeos.includes(geoName) && false === this.state.general.hasRegions) {
                addRow = false
            }

            // Passed all of our checks, add to processedData
            if(true === addRow) {
                parsedData.push(row)
            }
        })

        return parsedData
    }

    displayDataAsText (value, columnName, returnJsx) {
        if(value === null) {
            return ""
        }

        let formattedValue = value

        let columnObj = this.state.columns[columnName]

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
            if (this.isSpecialClassValue(value) === false) {
                formattedValue = columnObj.prefix + formattedValue + columnObj.suffix
            }
        }

        if(true === returnJsx) {
            return (formattedValue)
        }

        return formattedValue
    }

    isSpecialClassValue (value, compareArr) {
        // For instances where the special values have changed but aren't reflected in state yet, we check the array that is passed in to compare.
        if(compareArr) {
            if (compareArr.includes(value)) {
                return true
            }
        } else {
            if (this.state.legend.hasOwnProperty('specialClasses') &&
                false !== this.state.legend.specialClasses &&
                this.state.legend.specialClasses.includes(value)) {
                return true
            }
        }

        return false
    }

    applyColorToLegend (legend) {
        // Filter out special classes, they don't count.
        let regularLegendItems = this.state.processedLegend.data.filter((legendItem) => !legendItem.special).length

        // Default to "bluegreen" color scheme if the passed color isn't valid
        let mapColorPalette = colorPalettes[this.state.color] ||
            colorPalettes['bluegreen']

        const numberOfSpecialClasses = this.state.processedLegend.data.length - regularLegendItems

        let legendItemIndex = this.state.processedLegend.data.indexOf(legend) - numberOfSpecialClasses

        let legendValue = legend.value || legend.category

        // Special Classes (No Data)
        if (this.state.legend.specialClasses !== false && true === legend.special) {

            const specialClassColors = chroma.scale(['#D4D4D4', '#939393'])
                .colors(this.state.legend.specialClasses.length)

            return specialClassColors[this.state.legend.specialClasses.indexOf(
                legendValue)]

        }

        let specificColor

	    if ( this.state.color.includes( 'qualitative' ) ) {
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

    applyLegendToValue (rowObj, type = this.state.legend.type) {
        let color = ''

        const generateColorsArray = (color) => {
            return [
                color,
                chroma(color).saturate(1.5).hex(),
                chroma(color).darken(0.5).hex()
            ]
        }

        // If we've got a nav map, simply give them all the same color and be done with it.
        if("navigation" === this.state.general.type) {
          let mapColorPalette = colorPalettes[ this.state.color ]

          if(!mapColorPalette) {
            mapColorPalette = colorPalettes[ 'bluegreenreverse' ]
          }

          return generateColorsArray( mapColorPalette[ 3 ] )
        }

        let value = rowObj[this.state.columns.primary.name]

        // First, check if it's a special class
        let hasSpecialClasses = false

        if(Array.isArray( this.state.legend.specialClasses ) && this.state.legend.specialClasses.length > 0) {
            hasSpecialClasses = true
        }

        if (hasSpecialClasses &&
            this.state.legend.specialClasses.includes(value)) {
            for (let i = 0; i < this.state.processedLegend.data.length; i++) {

                const legend = this.state.processedLegend.data[i]
                const legendValue = legend.value || legend.category

                if (true === legend.special && value === legendValue) {
                    color = this.applyColorToLegend(legend)

                    if (legend && legend.disabled === true) {
                        return false
                    }

                    return [color, color, color]

                }

            }

        }

        // If the value is a string that can become a number, convert it.
        value = this.numberFromString(value)

        // Check if it's a zero that needs to be separated
        if ( true === this.state.legend.separateZero && 0 === value && 0 < this.state.processedLegend.data.length ) {
            // Grab the 0 legend item
            let legend = this.state.processedLegend.data.filter((legendItem) => legendItem.max === 0 && legendItem.min === 0)[0]

            if (legend) {
                if (legend.disabled === true) {
                    return false
                }

                color = this.applyColorToLegend(legend)
            }
        }

        switch (type) {
            case 'equalnumber':
                let hash = this.hashRow(rowObj)

                for (var i = 0; i < this.state.processedLegend.data.length; i++) {

                    var legend = this.state.processedLegend.data[i]

                    if ( 'geos' in legend && legend.geos.includes(hash) ) {

                        if(legend.disabled === true) {
                            return false
                        }

                        color = this.applyColorToLegend(legend)
                    }

                }

                break
            case 'equalinterval':
                // Because equal intervals will have the same "max" for one legend item as the "min" for the next, we must only add if the value is less than (and not equal to) the MAXIMUM of the legend.
                // The one edge case is if this is the last legend item.
                for (let i = 0; i < this.state.processedLegend.data.length; i++) {

                    const legend = this.state.processedLegend.data[i]

                    if (i === this.state.processedLegend.data.length - 1) {
                        if (value >= legend.min && value <= legend.max) {
                            color = this.applyColorToLegend(legend)

                            if (legend.disabled === true) {
                                return false
                            }

                        }
                    } else {
                        if (value >= legend.min && value < legend.max) {
                            color = this.applyColorToLegend(legend)

                            if (legend.disabled === true) {
                                return false
                            }

                        }
                    }

                }
                break
            case 'category':
                for (let i = 0; i < this.state.processedLegend.data.length; i++) {

                    const legend = this.state.processedLegend.data[i]

                    if (legend.category == value) { // eslint-disable-line
                        color = this.applyColorToLegend(legend)

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
            if(true === this.state.loading) {
                return false;
            }

            color = '#000000'
        }

        // Return array with the color, and a lighter and darker version for hover and pressed states
        return generateColorsArray( color )
    }

    applyTooltipsToGeo (geoName, data, returnType = 'string') {
        let toolTipText = `<strong>${this.displayGeoName(geoName)}</strong>`

        if('data' === this.state.general.type) {
            toolTipText += `<dl>`

            Object.keys(this.state.columns).forEach((columnKey) => {
                const column = this.state.columns[columnKey]

                if (true === column.tooltip) {

                    let label = column.label.length > 0 ? column.label : '';

                    let value = this.displayDataAsText(data[column.name], columnKey);

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

            if(this.state.columns.hasOwnProperty('navigate') && data[this.state.columns.navigate.name]) {
                toolTipText.push( (<span className="navigation-link" key="modal-navigation-link" onClick={() => this.navigationHandler(data[this.state.columns.navigate.name])}>{this.state.tooltips.linkLabel}<ExternalIcon className="inline-icon ml-1" /></span>) )
            }
        }

        return toolTipText

    }

    // TODO: This needs a larger refactor at a later date to remove hashing and streamline the way it's doing a lot of things.
    // This is working right now but is very messy and poorly commented.
    processLegend () {
        const
            legendObj = this.state.legend,
            type = legendObj.type,
            number = legendObj.numberOfItems,
            datacol = this.state.columns.primary.name,
            statecol = this.state.columns.geo.name,
            legendData = [],
            specialClassesUsed = [];

        let dataObj = Object.values(this.state.processedData);

        // Replace dataObj with full data set if we're using unified
        if(true === this.state.legend.unified) {
            dataObj = this.processUnifiedData()
        }

        const allGeoList = Object.keys(dataObj)

        const dataSet = Object.values(dataObj)

        const processedDataObj = {
            ...this.state.processedLegend,
            disabledAmt: this.state.processedLegend.disabledAmt || 0
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
                if(usedAlready.includes(data) === false && this.state.color === 'qualitative1' && true === this.state.general.hasRegions && usedAlready.length >= 9) {
                    usedAlready.push(data)
                }
            })

            // Sort the category by number/alphabetical so it doesn't just apply them in the order it found them in the file. DOES NOT INCLUDE SPECIAL CLASSES. Those always have to be at the beginning.
            usedAlready.sort()

            if(this.state.legend && this.state.legend.categoryValuesOrder) {
                usedAlready.sort( (a, b) => {
                    return this.state.legend.categoryValuesOrder.indexOf(a) - this.state.legend.categoryValuesOrder.indexOf(b);
                })
            }

            usedAlready.forEach((val) => {
                const newLegendItem = {
                    category: val
                }

                // Push as an object with one property: a string with the category in it.
                if( this.isSpecialClassValue(val, legendObj.specialClasses) && false === specialClassesUsed.includes(val) ) {
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
    numberFromString (value) {
        // Only do this to values that are ONLY numbers - without this parseFloat strips all the other text
        let nonNumeric = /[^\d.]/g

        if( false === Number.isNaN( parseFloat(value) ) && null === String(value).match(nonNumeric) ) {
            return parseFloat(value)
        }

        return value

    }

    // This resets all active legend toggles. Should always be called with "await" to make sure it's done processing before you continue. See usage example in changeFilterActive.
    async resetLegendToggles () {
        this.setState((prevState) => {

            const legendData = prevState.processedLegend.data

            legendData.forEach((item) => {
                delete item.disabled
            })

            return {
                processedLegend: {
                    ...prevState.processedLegend,
                    disabledAmt: 0,
                    data: legendData,
                },
            }
        })
    }

    // Supports JSON or CSV
    async fetchRemoteData (url) {
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
    displayGeoName (key) {
        let value = key

        // Map to first item in values array which is the preferred label
        if(this.stateKeys.includes(value)) {
            value = supportedStates[key][0]
        }

        if(this.territoryKeys.includes(value)) {
            value = supportedTerritories[key][0]
        }

        if(this.countryKeys.includes(value)) {
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
    processData () {

        let dataObj = this.state.data

        const parsedData = {}

        const geoColumnName = this.state.columns.geo.name

        const supportedUsGeos = this.stateKeys.concat(this.territoryKeys, this.cityNames)

        const supportedWorldGeos = this.countryKeys.concat(this.cityNames)

        dataObj.forEach((row, i) => {
            let addRow = true

            // Empty row check - Just checks for value of geo column
            if(!row[this.state.columns.geo.name]) {
                addRow = false
            }

            // Filters
            if (addRow && this.state.filters.length > 0) {
                this.state.filters.forEach((filter) => {
                    // Non strict comparison to allow for strings that are numbers in the raw data
                    if (row[filter.columnName] != filter.active) { // eslint-disable-line
                        addRow = false
                    }
                })
            }

            // If this is a navigation only map, skip if it doesn't have a URL
            if(addRow && "navigation" === this.state.general.type ) {
                let navigateUrl = row[this.state.columns.navigate.name] || "";
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
            if(addRow && "us" === this.state.general.geoType && false === this.state.general.hasRegions) {
                // Map abbreviations to full names first for states and territories
                let stateName = this.stateKeys.find( (key) => supportedStates[key].includes(geoName) )

                if(stateName) {
                    geoName = stateName
                }

                let territoryName = this.territoryKeys.find( (key) => supportedTerritories[key].includes(geoName) )

                if(territoryName) {
                    geoName = territoryName
                }

                // If this doesn't match a supported geo
                if( false === supportedUsGeos.includes(geoName) ) {
                    addRow = false
                }
            }

            // World Check
            if(addRow && "world" === this.state.general.geoType && false === this.state.general.hasRegions) {
                geoName = this.countryKeys.find( (key) => supportedCountries[key].includes(geoName) )

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

    parseLinks(urlString) {
        // This is here for the future if additional requests are made to adjust parsing before sending links
        return urlString
    }

    navigationHandler(urlString) {
        // Call custom navigation method if there is one
        if(this.props.navigationHandler) {
            this.props.navigationHandler(urlString);

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

    async loadConfig (configObj) {
        // Set loading flag
        const loadingObj = {
            loading: true
        }

        this.setState(() => loadingObj)

        // Create new config object the same way each time no matter when this method is called.
        let newState = {
            ...initialState,
            ...configObj
        }

        // If a dataUrl property exists, always pull from that.
        if (newState.dataUrl) {
            if(newState.dataUrl[0] === '/') {
                newState.dataUrl = `https://${this.props.hostname}${newState.dataUrl}`
            }

            let newData = await this.fetchRemoteData(newState.dataUrl)

            if(newData) {
                newState.data = newData
            }
        }

        if( Array.isArray(newState.data) ) {
            // Process all the data and trim whitespace/returns/etc...
            newState.data = this.cleanCsvData(newState.data)
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
                const filterValues = this.generateValuesForFilter(filter, newState.data)

                newState.filters[index].values = filterValues

                // Initial filter should be active
                newState.filters[index].active = filterValues[0]
            })

        }

        // Set properties that can be passed directly and require no additional computation
        this.setState(() => newState)

        // Done loading
        this.setState(() => { return {loading: false} } )
    }

    // Every time the state updates, rebuild the tooltips and see if we need to reprocess any data
    componentDidUpdate (prevProps, prevState) {
        if(prevState.data.length !== this.state.data.length) {
            // After setting all of our initial information, create our processed data for use on map and data table and set it.
            const processedData = this.processData()

            if(processedData) {
                this.setState(() => { return {processedData} })
            }
        }

        if(Object.keys(prevState.processedData).length !== Object.keys(this.state.processedData).length && 'data' === this.state.general.type) {
            const processedLegend = this.processLegend()

            if(processedLegend) {
                this.setState(() => { return {processedLegend} })
            }
        }
    }

    getViewport(size) {
        let result = this.state.viewport
        let viewports = Object.keys( this.viewports )

        for(let viewport of viewports) {
            if(size <= this.viewports[viewport]) {
                result = viewport
            }
        }

        return result
    }

    async componentDidMount () {
        let configData

        // Load the configuration data passed to this component if it exists
        if(this.props.config) {
            configData = this.props.config
        }

        // If the config passed is a string, try to load it as an ajax
        if(this.props.configUrl) {
            configData = await this.fetchRemoteData(configData)
        }

        // Finally, dynamically import the default configuration if nothing else was found.
        if(!configData) {
            configData = usaDefaultConfig
        }

        // Once we have a config verify that it is an object and load it
        if('object' === typeof configData) {
            await this.loadConfig(configData)
        }

        const resizeObserver = new ResizeObserver(entries => {
            for (let entry of entries) {
                let newViewport = this.getViewport(entry.contentRect.width)

                if( newViewport !== this.state.viewport ) {
                    this.setState({
                        ...this.state,
                        viewport: newViewport
                    })
                }
            }
        });

        resizeObserver.observe(this.outerContainerRef.current);
    }

    generateValuesForFilter(columnName, data = this.state.data) {

        const values = []

        data.forEach( (row) => {

            const value = row[columnName]

            if(value && false === values.includes(value)) {
                values.push(value)
            }

        })

        return values

    }

    cleanCsvData(data) {
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

    hashRow (rowObj) {
        return Base64.encode( JSON.stringify( rowObj ) )
    }

    announceChange (value) {
        this.setState( (prevState) => {
            return {
                ...prevState,
                accessibleStatus: value
            }
        })
    }

    geoClickHandler (key, value) {
        // If modals are set or we are on a mobile viewport, display modal
        if ('xs' === this.state.viewport || 'xxs' === this.state.viewport || 'click' === this.state.tooltips.appearanceType) {
            this.setState( (prevState) => {
                return {
                    ...prevState,
                    general: {
                        ...prevState.general,
                        modalOpen: true,
                        modalContent: {
                            geoName: key,
                            geoData: value
                        },
                    }
                }
            })

            return;
        }

        // Otherwise if this item has a link specified for it, do regular navigation.
        if (this.state.columns.navigate && value[this.state.columns.navigate.name]) {
            this.navigationHandler(value[this.state.columns.navigate.name])
        }
    }

    render () {
        let showDownloadMediaButton = this.state.general.showDownloadMediaButton

        // Map Container Classes
        let mapContainerClasses = [
            'map-container',
            this.state.legend.position,
            this.state.general.type,
            this.state.general.geoType
        ]

        if(true === this.state.general.modalOpen) {
            mapContainerClasses.push('modal-background')
        }

        if(this.state.general.type === 'navigation' && true === this.state.general.fullBorder) {
            mapContainerClasses.push('full-border')
        }

        const mapProps = {
            state : this.state,
            applyTooltipsToGeo : this.applyTooltipsToGeo,
            rebuildTooltips : ReactTooltip.rebuild,
            closeModal : this.closeModal,
            processedData : this.state.processedData,
            navigationHandler : this.navigationHandler,
            geoClickHandler : this.geoClickHandler,
            applyLegendToValue : this.applyLegendToValue,
            displayGeoName : this.displayGeoName
        }

        const { title = '', subtext = ''} = this.state.general

        const headerColor = this.state.general.headerColor || 'theme-blue'

        return (
            <div className={this.props.className ? `cdc-open-viz-module cdc-map-outer-container ${this.props.className} ${this.state.viewport}` : `cdc-open-viz-module cdc-map-outer-container ${this.state.viewport}` } ref={this.outerContainerRef}>
                {true === this.state.loading && <Loading />}
                {true === this.props.isEditor && <EditorPanel state={this.state} setState={this.setState} loadConfig={this.loadConfig} generateValuesForFilter={this.generateValuesForFilter} processData={this.processData} processLegend={this.processLegend} />}
                <section className={`cdc-map-inner-container ${this.state.viewport}`} aria-label={'Map: ' + title}>
                    {'hover' === this.state.tooltips.appearanceType &&
                        <ReactTooltip
                            id="tooltip"
                            place="right"
                            type="light"
                            html={true}
                            className={this.state.tooltips.capitalizeLabels ? 'capitalize tooltip' : 'tooltip'}
                        />
                    }
                    <header className={this.state.general.showTitle === true ? '' : 'hidden'} aria-hidden="true">
                        <h1 className={'map-title ' + headerColor}>
                            { parse(title) }
                        </h1>
                    </header>

                    <section className={mapContainerClasses.join(' ')} onClick={(e) => this.closeModal(e)}>

                        {showDownloadMediaButton === true &&
                            <div className="map-downloads" data-html2canvas-ignore>
                                <div className="map-downloads__ui btn-group">
                                    <button className="btn" title="Download Map as Image"
                                            onClick={() => this.generateMedia(this.outerContainerRef.current, 'image')}>
                                        <DownloadImg className="btn__icon" title='Download Map as Image'/>
                                    </button>
                                    <button className="btn" title="Download Map as PDF"
                                            onClick={() => this.generateMedia(this.outerContainerRef.current, 'pdf')}>
                                        <DownloadPdf className="btn__icon" title='Download Map as PDF'/>
                                    </button>
                                </div>
                            </div>
                        }

                        <section className="geography-container" aria-hidden="true" ref={this.mapSvg}>
                            {true === this.state.general.modalOpen && <Modal state={this.state} applyTooltipsToGeo={this.applyTooltipsToGeo} applyLegendToValue={this.applyLegendToValue}  capitalize={this.state.tooltips.capitalizeLabels} content={this.state.general.modalContent} />}
                                {'us' === this.state.general.geoType && <UsaMap supportedStates={this.supportedStates} supportedTerritories={this.supportedTerritories} {...mapProps} />}
                                {'world' === this.state.general.geoType && <WorldMap supportedCountries={this.supportedCountries} countryValues={this.countryValues} {...mapProps} />}
                                {"data" === this.state.general.type && this.state.general.logoImage && <img src={this.state.general.logoImage} alt="" className="map-logo"/>}

                        </section>
                        {"navigation" === this.state.general.type &&
                            <NavigationMenu
                                displayGeoName={this.displayGeoName}
                                processedData={this.state.processedData}
                                options={this.state.general}
                                columns={this.state.columns}
                                navigationHandler={(val) => this.navigationHandler(val)}
                            />
                        }
                        {this.state.general.showSidebar && 'navigation' !== this.state.general.type && false === this.state.loading  && Object.keys(this.state.processedData).length > 0 &&
                            <Sidebar
                                viewport={this.state.viewport}
                                legend={this.state.legend}
                                filters={this.state.filters}
                                columns={this.state.columns}
                                sharing={this.state.sharing}
                                prefix={this.state.columns.primary.prefix}
                                suffix={this.state.columns.primary.suffix}
                                processedLegend={this.state.processedLegend}
                                setState={this.setState}
                                resetLegendToggles={this.resetLegendToggles}
                                applyColorToLegend={this.applyColorToLegend}
                                changeFilterActive={this.changeFilterActive}
                                announceChange={this.announceChange}
                            />
                        }
                    </section>
                    {true === this.state.dataTable.forceDisplay && this.state.general.type !== "navigation" && false === this.state.loading && Object.keys(this.state.processedData).length > 0 &&
                        <DataTable
                            state={this.state}
                            navigationHandler={this.navigationHandler}
                            expandDataTable={this.state.general.expandDataTable}
                            headerColor={this.state.general.headerColor}
                            columns={this.state.columns}
                            showDownloadButton={this.state.general.showDownloadButton}
                            data={this.state.data}
                            processedData={this.state.processedData}
                            processedLegend={this.state.processedLegend}
                            displayDataAsText={this.displayDataAsText}
                            displayGeoName={this.displayGeoName}
                            applyLegendToValue={this.applyLegendToValue}
                            geoNames={this.geoNames}
                            tableTitle={this.state.dataTable.title}
                            mapTitle={this.state.general.title}
                            viewport={this.state.viewport}
                        />
                    }
                    {subtext.length > 0 && <p className="subtext">{ parse(subtext) }</p>}
                </section>
                <div aria-live="assertive" className="cdcdataviz-sr-only">{ this.state.accessibleStatus }</div>
            </div>
        )
    }
}

export default CdcMap;
