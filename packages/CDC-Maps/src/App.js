import React, { Component } from 'react'
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'mdn-polyfills/String.prototype.repeat';
import 'mdn-polyfills/CustomEvent';
import 'mdn-polyfills/Element.prototype.classList';
import './App.scss';
import ReactTooltip from 'react-tooltip'
import chroma from 'chroma-js'
import Sidebar from './components/Sidebar'
import Loading from './components/Loading'
import externalIcon from './images/external-link.svg'
import Papa from 'papaparse'
import colorPalettes from './data/color-palettes'
import ReactHtmlParser from 'react-html-parser'
import { Base64 } from 'js-base64';
import { supportedStates, supportedTerritories, supportedCountries, supportedCities } from './data/supported-geos'
import 'array-flat-polyfill'
import usaDefaultConfig from './data/examples/default-usa.json'
import UsaMap from './components/UsaMap'
import WorldMap from './components/WorldMap'
import Modal from './components/Modal'
import DataTable from './components/DataTable'
import NavigationMenu from './components/NavigationMenu'
import cdcHhsLogo from './images/hhs-cdc.svg'

class CdcMap extends Component {

    constructor (props) {
        super(props)

        this.initialState = {
            general: {
                backgroundColor: "#FFF",
                geoBorderColor: "darkGray",
                showTitle: true,
                showSidebar: true,
                showDownloadButton: true,
                territoriesLabel: "Territories",
                modalOpen: false,
                modalContent: null,
                language: "en",
                parentUrl: false,
                hasRegions: false,
                expandDataTable: true,
                fullBorder: false
            },
            columns: {
                primary: {},
                geo: {},
                geosInRegion: {
                    name: ''
                }
            },
            legend: {
                descriptions: {},
                specialClasses: [],
                unified: false,
                singleColumn: false,
                dynamicDescription: false
            },
            data: [
                {},
            ],
            filters: [],
            sharing: {
                enabled: false
            },
            dataTable: {
                title: "Data Table",
                forceDisplay: true // When standalone, this can't be removed. When this component is used in larger composed configurations there will be a different data table.
            },
            tooltips: {
                appearanceType: "hover",
                linkLabel: "Learn More",
                capitalizeLabels: true
            },
            processedData: {},
            processedLegend: {
                data: [],
                categoryValuesOrder: []
            },
            loading: true
        }

        this.state = JSON.parse(JSON.stringify(this.initialState));

        this.stateValues = Object.values(supportedStates).flat()
        this.stateKeys = Object.keys(supportedStates)
        this.territoryValues = Object.values(supportedTerritories).flat()
        this.territoryKeys = Object.keys(supportedTerritories)
        this.countryValues = Object.values(supportedCountries).flat()
        this.countryKeys = Object.keys(supportedCountries)
        this.cityNames = Object.keys(supportedCities)
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
        this.metricsCall = this.metricsCall.bind(this)
        this.navigationHandler = this.navigationHandler.bind(this)
        this.displayDataAsText = this.displayDataAsText.bind(this)
        this.loadConfig = this.loadConfig.bind(this)
        this.setState = this.setState.bind(this)
        this.convertStateToConfigFile = this.convertStateToConfigFile.bind(this)
        this.processUnifiedData = this.processUnifiedData.bind(this)
    }

    closeModal() {
        this.setState( (prevState) => {
            return {
                general: {
                    ...prevState.general,
                    modalOpen: false
                }
            }
        })
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
        if (this.state.legend.specialClasses !== false &&
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
                console.warn(`Error: Do not recognize type of legend. Should either be equalnumber, equalinterval or category.`)
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

    applyTooltipsToGeo (geoName, data) {
        let toolTipText = `<strong>${geoName}</strong>`

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

        // We convert the tooltip markup into JSX if it's not going into an actual tooltip. This is so we can use the same navigation method used everywhere else for the navigation link.
        // The only reason we aren't using JSX for both is because the react-tooltip package doesn't support JSX as the content of a tooltip for some reason. That may change in the future, but leaving note explaining this bit of odd code.
        if('click' === this.state.tooltips.appearanceType || 'mobile' === this.state.general.viewportSize) {
            toolTipText = [(<div key="modal-content">{ReactHtmlParser(toolTipText)}</div>)]
            
            if(data[this.state.columns.navigate.name]) {
                toolTipText.push( (<span className="navigation-link" key="modal-navigation-link" onClick={() => this.navigationHandler(data[this.state.columns.navigate.name])}>{this.state.tooltips.linkLabel}<img src={externalIcon} alt="" /></span>) )
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
    numberFromString = (value) => {

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

        const regex = /(?:\.([^.]+))?$/

        let data = []

        if ('csv' === regex.exec(url)[1]) {

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
        // Abort if value is blank
        if(0 === urlString.length) {
            throw Error("Blank string passed as URL. Navigation aborted."); 
        }

        // Determine if link is a hash link
        const isHashLink = urlString[0] === '#' ? true : false;

        if(true === isHashLink) {
            let sameOrigin = this.state.general.parentUrl !== false ? true: false

            if(true === sameOrigin) {
                let hashName = urlString.substr(1);
                let scrollSection = window.parent.document.querySelector(`*[id="${hashName}"]`) || window.parent.document.querySelector(`*[name="${hashName}"]`)

                if(scrollSection) {
                    scrollSection.scrollIntoView({
                        behavior: 'smooth'
                    })
    
                    // End function since navigation is compelted.
                    return true;
                } else {
                    throw Error("Internal hash link detected but unable to find element on page. Navigation aborted.");
                }
            }
        }

        // Metrics Call
        const extension = urlString.substring( urlString.lastIndexOf( '.' ) + 1 )

        const s = window.s || {}

        if ( s.hasOwnProperty('linkDownloadFileTypes') && s.linkDownloadFileTypes.includes(extension) ) {
            this.metricsCall('d', urlString) // Different parameter for downloads
        } else {
            this.metricsCall('e', urlString) // Regular call for opening external link
        }

        let urlObj;

        if(this.state.general.parentUrl.length > 0) {
            // Insert proper base for relative URLs
            const parentUrlObj = new URL(this.state.general.parentUrl)

            // Only insert a dynamic base if this is embedded on a CDC.gov page, regardless of environment.
            // This prevents security concerns where a party could embed a CDC map on their own site and have the relative URLs go to their own content making it look like its endorsed by the CDC.
            let urlBase = parentUrlObj.host.endsWith('cdc.gov') ? parentUrlObj.origin : 'https://www.cdc.gov/';

            urlObj = new URL(urlString, urlBase);
        } else {
            urlObj = new URL(urlString);
        }
        // Open constructed link in new tab/window
        window.open(urlObj.toString(), '_blank');
    }

    metricsCall(type, url) {

        // Don't make metrics call if this map isn't hosted on cdc.gov
        if(false === this.state.general.parentUrl) {
            return true;
        }

        // Don't make metrics call if this link is going to a cdc.gov page and is not a download link
        if( true === url.includes('cdc.gov') && 'e' === type ) {
            return true;
        }

        const s = window.s || {}

        if(true === s.hasOwnProperty('tl')) {
            let newObj = {...s}


            newObj.pageURL = this.state.general.parentUrl
            newObj.linkTrackVars = "pageURL";
            newObj.linkURL = url // URL We are navigating to

            s.tl( true, type, null, newObj )
        }
    }

    convertStateToConfigFile () {
        let strippedState = JSON.parse(JSON.stringify(this.state))

        // Strip ref
        delete strippedState[""]

        // Delete processed data and legend
        delete strippedState.processedData
        delete strippedState.processedLegend

        // Remove the legend
        let strippedLegend = JSON.parse(JSON.stringify(this.state.legend))

        delete strippedLegend.data
        delete strippedLegend.disabledAmt

        strippedState.legend = strippedLegend

        // Remove loading status
        delete strippedState.loading

        // Remove default data marker if the user started this map from default data
        delete strippedState.defaultData
        
        // Remove tooltips if they're active in the editor
        let strippedGeneral = JSON.parse(JSON.stringify(this.state.general))

        delete strippedGeneral.modalOpen;
        delete strippedGeneral.modalContent;
        delete strippedGeneral.parentUrl;

        // Strip out computed items
        delete strippedGeneral.viewportSize;

        strippedState.general = strippedGeneral

        if(this.state.dataUrl && true === this.state.editor.keepUrl) {
            delete strippedState.data // If the data is pulled dynamically from a URL, don't store the data locally
        }

        if(this.state.dataUrl && false === this.state.editor.keepUrl) {
            delete strippedState.dataUrl
        }

        return JSON.stringify( strippedState )
    }

    async loadConfig (newConfig) {
        // Set loading flag
        this.setState(() => { return {loading: true} } )

        // Create new config object the same way each time no matter when this method is called.
        let newState = {
            ...this.initialState,
            ...newConfig
        }

        // If there is no raw data stored, we grab and store the rawdata from the URL provided in the config file
        if (newState.dataUrl) {        
            newState.data = await this.fetchRemoteData(newState.dataUrl)
        }
        
        // Process all the data and trim whitespace/returns/etc...
        newState.data = this.cleanCsvData(newState.data)

        // This code goes through and adds the defaults for every property declaring in the initial state at the top.
        // This allows you to easily add new properties to the config without having to worry about accounting for backwards compatibility.
        // Right now this does not work recursively -- only on first and second level properties. So state -> prop1 -> childprop1
        Object.keys(newState).forEach( (key) => {
            if("object" === typeof newState[key] && false === Array.isArray(newState[key])) {
                if(this.initialState[key] ) {

                    Object.keys(this.initialState[key]).forEach( (property) => {
                        if(undefined === newState[key][property]) {
                            newState[key][property] = this.initialState[key][property]
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

        // Side effects - set background color and browser title
        if(this.state.general.backgroundColor) {
            document.body.style.backgroundColor = newState.general.backgroundColor;
        }

        // Set browser title
        if(this.state.general.backgroundColor) {
            document.title = newState.general.title
        }

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

        // Rebuild tooltips
        ReactTooltip.rebuild()
    }

    async componentDidMount () {
        let configData

        // Load the configuration data passed to this component if it exists
        if(this.props.config) {

            // If the config passed is a string, try to load it as an ajax
            configData = this.props.config
        }

        // Finally, load the default configuration if nothing else was found.
        if(!configData) {
            configData = usaDefaultConfig
        }

        // Once we have a config verify that it is an object and load it
        if('object' === typeof configData) {
            await this.loadConfig(configData)
        }
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
        // If this is a map with hover tooltips and the item has a link specified for it, do regular navigation.
        if (this.state.columns.navigate &&
            value[this.state.columns.navigate.name] &&
            'hover' === this.state.tooltips.appearanceType) {
                this.navigationHandler(value[this.state.columns.navigate.name])
            }

        // If tooltips are showing on click, toggle the modal
        if ('click' === this.state.tooltips.appearanceType) {
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

            // Add event listener to close if detecting a click outside of modal content area
            document.addEventListener("mousedown", (e) => {
                if(e.toElement && 'map-container modal-background' === e.toElement.className) {
                    this.closeModal()
                }
            });
        }
    }

    // Render method. This is called again each time the state changes. For more information, refer to React's official documentation.
    render () {
        let mapContainerClasses = `map-container ${this.state.legend.position} ${this.state.general.type} ${this.state.general.geoType}`

        let displayModal = false

        if( true === this.state.general.modalOpen ) {
            displayModal = true
        }

        if(this.state.general.type === 'navigation' && true === this.state.general.fullBorder) {
            mapContainerClasses += ' full-border'
        }

        if(true === displayModal) {
            mapContainerClasses += ' modal-background'
        }

        let displayMap = (
            <UsaMap
                state={this.state}
                applyTooltipsToGeo={this.applyTooltipsToGeo}
                processedData={this.state.processedData}
                navigationHandler={this.navigationHandler}
                geoClickHandler={this.geoClickHandler}
                applyLegendToValue={this.applyLegendToValue}
                displayGeoName={this.displayGeoName}
                supportedStates={supportedStates}
            />
        )

        if('world' === this.state.general.geoType) {
            displayMap = (
                <WorldMap
                    state={this.state}
                    applyTooltipsToGeo={this.applyTooltipsToGeo}
                    closeModal={this.closeModal}
                    processedData={this.state.processedData}
                    navigationHandler={this.navigationHandler}
                    geoClickHandler={this.geoClickHandler}
                    applyLegendToValue={this.applyLegendToValue}
                    displayGeoName={this.displayGeoName}
                    countryValues={this.countryValues}
                />
            )
        }

        return (
            <>
                {true === this.state.loading && <Loading />}
                <section className="full-container" aria-label={'Map: ' + this.state.general.title}>
                    {'hover' === this.state.tooltips.appearanceType && 'mobile' !== this.state.general.viewportSize && <ReactTooltip
                        id="tooltip"
                        place="right"
                        type="light"
                        html={true}
                        className={this.state.tooltips.capitalizeLabels ? 'capitalize' : 'tooltip'}/>}
                    <section className={mapContainerClasses}>
                        <section className="geography-container" aria-hidden="true">
                            {true === displayModal && <Modal state={this.state} applyTooltipsToGeo={this.applyTooltipsToGeo} applyLegendToValue={this.applyLegendToValue} closeModal={this.closeModal} capitalize={this.state.tooltips.capitalizeLabels} content={this.state.general.modalContent} />}
                            {displayMap}
                            {"data" === this.state.general.type && <img src={cdcHhsLogo} alt="" className="cdc-hhs-logo"/>}
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
                        {this.state.general.showSidebar && 'navigation' !== this.state.general.type && false === this.state.loading &&
                            <Sidebar
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
                        />
                    }
                    {this.state.general.subtext && <p className="subtext">{ ReactHtmlParser(this.state.general.subtext) }</p>}
                </section>
                <div aria-live="assertive" className="sr-only">{ this.state.accessibleStatus }</div>
            </>
        )
    }
}

export default CdcMap
