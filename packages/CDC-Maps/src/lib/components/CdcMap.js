import React, { Component } from "react";
import {
  ComposableMap,
  Geographies,
  ZoomableGroup,
  Geography
} from "react-simple-maps";
import { geoAlbersUsa } from "d3-geo";
import ReactTooltip from "react-tooltip";
import chroma from "chroma-js";
import ReactTable from "react-table";
import { CSVLink } from "react-csv";
import Papa from "papaparse";
import ReactHtmlParser from "react-html-parser";
import arrayMove from "array-move";

// Local imports
import "../App.scss";
import defaultConfig from "../json/default.json";
import supportedGeos from "../json/supportedGeos";
import topoJsonStates from "../json/usa.json";
import Sidebar from "./Sidebar";
import Editor from "./Editor";
import Loading from "./Loading";
import SquareGeo from "./SquareGeo";

class CdcMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editor: {
        active: false,
        expanded: false
      },
      columns: {
        primary: {},
        geo: {}
      },
      legend: {
        data: [],
        specialClasses: [],
        unified: false,
        singleColumn: false
      },
      data: [{}],
      filters: [],
      general: {
        backgroundColor: "#f5f5f5",
        geoBorderColor: "darkGray",
        showTitle: true,
        showSidebar: true
      },
      jsonConfigString: ""
    };

    this.colorDistributions = {
      1: [1],
      2: [1, 3],
      3: [1, 3, 5],
      4: [0, 2, 4, 6],
      5: [0, 2, 4, 6, 7],
      6: [0, 2, 3, 4, 5, 7],
      7: [0, 2, 3, 4, 5, 6, 7],
      8: [0, 2, 3, 4, 5, 6, 7, 8],
      9: [0, 1, 2, 3, 4, 5, 6, 7, 8]
    };

    this.colorPalettes = {
      yelloworangered: [
        "#ffffcc",
        "#ffeda0",
        "#fed976",
        "#feb24c",
        "#fd8d3c",
        "#fc4e2a",
        "#e31a1c",
        "#bd0026",
        "#800026"
      ],
      yelloworangebrown: [
        "#ffffe5",
        "#fff7bc",
        "#fee391",
        "#fec44f",
        "#fe9929",
        "#ec7014",
        "#cc4c02",
        "#993404",
        "#662506"
      ],
      pinkpurple: [
        "#fff7f3",
        "#fde0dd",
        "#fcc5c0",
        "#fa9fb5",
        "#f768a1",
        "#dd3497",
        "#ae017e",
        "#7a0177",
        "#49006a"
      ],
      bluegreen: [
        "#fff7fb",
        "#ece2f0",
        "#d0d1e6",
        "#a6bddb",
        "#67a9cf",
        "#3690c0",
        "#02818a",
        "#016c59",
        "#014636"
      ],
      orangered: [
        "#fff7ec",
        "#fee8c8",
        "#fdd49e",
        "#fdbb84",
        "#fc8d59",
        "#ef6548",
        "#d7301f",
        "#b30000",
        "#7f0000"
      ],
      red: [
        "#fff5f0",
        "#fee0d2",
        "#fcbba1",
        "#fc9272",
        "#fb6a4a",
        "#ef3b2c",
        "#cb181d",
        "#a50f15",
        "#67000d"
      ],
      greenblue: [
        "#f7fcf0",
        "#e0f3db",
        "#ccebc5",
        "#a8ddb5",
        "#7bccc4",
        "#4eb3d3",
        "#2b8cbe",
        "#0868ac",
        "#084081"
      ],
      yelloworangeredreverse: [
        "#800026",
        "#bd0026",
        "#e31a1c",
        "#fc4e2a",
        "#fd8d3c",
        "#feb24c",
        "#fed976",
        "#ffeda0",
        "#ffffcc"
      ],
      yelloworangebrownreverse: [
        "#662506",
        "#993404",
        "#cc4c02",
        "#ec7014",
        "#fe9929",
        "#fec44f",
        "#fee391",
        "#fff7bc",
        "#ffffe5"
      ],
      pinkpurplereverse: [
        "#49006a",
        "#7a0177",
        "#ae017e",
        "#dd3497",
        "#f768a1",
        "#fa9fb5",
        "#fcc5c0",
        "#fde0dd",
        "#fff7f3"
      ],
      bluegreenreverse: [
        "#014636",
        "#016c59",
        "#02818a",
        "#3690c0",
        "#67a9cf",
        "#a6bddb",
        "#d0d1e6",
        "#ece2f0",
        "#fff7fb"
      ],
      orangeredreverse: [
        "#7f0000",
        "#b30000",
        "#d7301f",
        "#ef6548",
        "#fc8d59",
        "#fdbb84",
        "#fdd49e",
        "#fee8c8",
        "#fff7ec"
      ],
      redreverse: [
        "#67000d",
        "#a50f15",
        "#cb181d",
        "#ef3b2c",
        "#fb6a4a",
        "#fc9272",
        "#fcbba1",
        "#fee0d2",
        "#fff5f0"
      ],
      greenbluereverse: [
        "#084081",
        "#0868ac",
        "#2b8cbe",
        "#4eb3d3",
        "#7bccc4",
        "#a8ddb5",
        "#ccebc5",
        "#e0f3db",
        "#f7fcf0"
      ],
      qualitative1: [
        "#a6cee3",
        "#1f78b4",
        "#b2df8a",
        "#33a02c",
        "#fb9a99",
        "#e31a1c",
        "#6a3d9a",
        "#cab2d6"
      ],
      qualitative2: [
        "#7fc97f",
        "#beaed4",
        "#ff9",
        "#386cb0",
        "#f0027f",
        "#bf5b17",
        "#666",
        "#fedab8"
      ],
      qualitative3: [
        "#1b9e77",
        "#d95f02",
        "#7570b3",
        "#e7298a",
        "#66a61e",
        "#e6ab02",
        "#a6761d",
        "#666"
      ],
      qualitative4: [
        "#e41a1c",
        "#377eb8",
        "#4daf4a",
        "#984ea3",
        "#ff7f00",
        "#ff3",
        "#a65628",
        "#f781bf"
      ],
      legacyNavigation: ["#b1dafb"]
    };

    // We only check this against processed data, so can just check full names
    this.supportedTerritories = [
      "American Samoa",
      "Guam",
      "Micronesia",
      "Northern Marianas",
      "Palau",
      "Puerto Rico",
      "Virgin Islands",
      "Marshall Islands"
    ];

    this.supportedCities = [
      "District of Columbia",
      "Los Angeles County",
      "Mesa",
      "Phoenix",
      "Tucson",
      "Fresno",
      "Long Beach",
      "Los Angeles",
      "Oakland",
      "Sacramento",
      "San Diego",
      "San Francisco",
      "San Jose",
      "Colorado Springs",
      "Denver",
      "Jacksonville",
      "Miami",
      "Atlanta",
      "Chicago",
      "Indianapolis",
      "Wichita",
      "Louisville",
      "New Orleans",
      "Boston",
      "Baltimore",
      "Detroit",
      "Minneapolis",
      "Kansas City",
      "Charlotte",
      "Raleigh",
      "Albuquerque",
      "New York City",
      "Omaha",
      "Las Vegas",
      "Cleveland",
      "Columbus",
      "Oklahoma City",
      "Tulsa",
      "Portland",
      "Philadelphia",
      "Nashville",
      "Memphis",
      "Arlington",
      "Austin",
      "Dallas",
      "El Paso",
      "Fort Worth",
      "Houston",
      "San Antonio",
      "Virginia Beach",
      "Seattle",
      "Milwaukee"
    ];

    this.citiesInData = [];
    this.territoriesInData = [];

    this.geoAbbreviations = Object.values(supportedGeos);

    this.geoNames = Object.keys(supportedGeos);

    this.isLoading = true;
    this.isError = false;
    this.isEditor = false;

    this.createConfig = this.createConfig.bind(this);
    this.handleEditorChanges = this.handleEditorChanges.bind(this);
    this.processData = this.processData.bind(this);
    this.applyLegendToValue = this.applyLegendToValue.bind(this);
    this.applyColorToLegend = this.applyColorToLegend.bind(this);
    this.applyTooltipsToGeo = this.applyTooltipsToGeo.bind(this);
    this.buildLegend = this.buildLegend.bind(this);
    this.resetLegendToggles = this.resetLegendToggles.bind(this);
    this.toggleLegendActive = this.toggleLegendActive.bind(this);
    this.toggleDataTableVisibility = this.toggleDataTableVisibility.bind(this);
    this.buildColumns = this.buildColumns.bind(this);
    this.changeFilterActive = this.changeFilterActive.bind(this);
    this.editColumn = this.editColumn.bind(this);
    this.addAdditionalColumn = this.addAdditionalColumn.bind(this);
    this.removeAdditionalColumn = this.removeAdditionalColumn.bind(this);
    this.changeFilter = this.changeFilter.bind(this);
    this.toggleEditor = this.toggleEditor.bind(this);
    this.editorLoadData = this.editorLoadData.bind(this);
  }

  async changeFilterActive(num, activeValue) {
    const parsedActiveValue = this.numberFromString(activeValue);

    // Reset all active legend toggles - needed await/async because setState is asynchronous and was causing issues.
    await this.resetLegendToggles();

    let currentFilters = this.state.filters;

    currentFilters[num].active = parsedActiveValue;

    this.setState({
      filters: currentFilters
    });

    // Rebuild the legend with the new values.
    this.buildLegend(this.processData(this.state.legend.unified));
  }

  toggleEditor() {
    this.setState(prevState => {
      return {
        editor: {
          ...prevState.editor,
          expanded: !prevState.editor.expanded
        }
      };
    });
  }

  displayDataAsText(value, columnName, returnJsx) {
    let formattedValue = value;

    let column = this.state.columns[columnName];

    if (column) {
      // If value is a number, check for and apply specified rounding
      if (Number(value) && column.hasOwnProperty("roundToPlace")) {
        if (column.roundToPlace !== "None") {
          const decimalPoint = column.roundToPlace;

          formattedValue = Number(value).toFixed(decimalPoint);
        }
      }

      // Check if it's a special value. If it is not, apply the designated prefix and suffix
      if (this.isSpecialClassValue(value) === false) {
        formattedValue = column.prefix + formattedValue + column.suffix;
      }
    }

    if (true === returnJsx) {
      return formattedValue;
    }

    return formattedValue;
  }

  isSpecialClassValue(value, compareArr) {
    // For instances where the special values have changed but aren't reflected in state yet, we check the array that is passed in to compare.
    if (compareArr) {
      if (compareArr.includes(value)) {
        return true;
      }
    } else {
      if (
        this.state.legend.hasOwnProperty("specialClasses") &&
        false !== this.state.legend.specialClasses &&
        this.state.legend.specialClasses.includes(value)
      ) {
        return true;
      }
    }

    return false;
  }

  applyColorToLegend(
    legend,
    type = this.state.legend.type,
    totalLegendItems = this.state.legend.numberOfItems
  ) {
    // Default to "bluegreen" color scheme if the passed color isn't valid
    let mapColorPalette =
      this.colorPalettes[this.state.color] || this.colorPalettes["bluegreen"];

    if ("category" === type) {
      // We don't follow the number of items for category, just check the actual legend length and assign that to number
      totalLegendItems = this.state.legend.data.length;

      if (totalLegendItems > 9) {
        totalLegendItems = 9;
      }
    }

    const numberOfSpecialClasses = this.state.legend.activeSpecialClasses;

    let legendItemIndex =
      this.state.legend.data.indexOf(legend) - numberOfSpecialClasses;

    let legendValue = legend.value || legend.category;

    // Special Classes (No Data)
    if (this.state.legend.specialClasses !== false && true === legend.special) {
      const specialClassColors = chroma
        .scale(["#D4D4D4", "#939393"])
        .colors(this.state.legend.specialClasses.length);

      return specialClassColors[
        this.state.legend.specialClasses.indexOf(legendValue)
      ];
    }

    let distributionArray = this.colorDistributions[totalLegendItems];

    let specificColor = distributionArray[legendItemIndex];

    if (this.state.color.includes("qualitative")) {
      specificColor = legendItemIndex;
    }

    return mapColorPalette[specificColor];
  }

  applyLegendToValue(value, geoName, type = this.state.legend.type) {
    // Start with an informative fail state. If a geo is black, this function isn't able to assign a legend to the value.
    let color = "#000";

    // If we are loading, return false
    if (true === this.isLoading) {
      return false;
    }

    // First, check if it's a special class
    if (
      this.state.legend.specialClasses !== false &&
      this.state.legend.specialClasses.includes(value)
    ) {
      for (let i = 0; i < this.state.legend.data.length; i++) {
        const legend = this.state.legend.data[i];
        const legendValue = legend.value || legend.category;

        if (true === legend.special && value === legendValue) {
          color = this.applyColorToLegend(legend);

          if (legend.disabled === true) {
            return false;
          }

          return [color, color, color];
        }
      }
    }

    switch (type) {
      case "equalnumber":
        for (var i = 0; i < this.state.legend.data.length; i++) {
          var legend = this.state.legend.data[i];

          if ("geos" in legend && legend.geos.includes(geoName)) {
            if (legend.disabled === true) {
              return false;
            }

            color = this.applyColorToLegend(legend);
          }
        }

        break;
      case "equalinterval":
        // Because equal intervals will have the same "max" for one legend item as the "min" for the next, we must only add if the value is less than (and not equal to) the MAXIMUM of the legend.
        // The one edge case is if this is the last legend item.
        for (let i = 0; i < this.state.legend.data.length; i++) {
          const legend = this.state.legend.data[i];

          if (i === this.state.legend.data.length - 1) {
            if (value >= legend.min && value <= legend.max) {
              color = this.applyColorToLegend(legend);

              if (legend.disabled === true) {
                return false;
              }
            }
          } else {
            if (value >= legend.min && value < legend.max) {
              color = this.applyColorToLegend(legend);

              if (legend.disabled === true) {
                return false;
              }
            }
          }
        }
        break;
      case "category":
        for (let i = 0; i < this.state.legend.data.length; i++) {
          const legend = this.state.legend.data[i];

          if (legend.category === value) {
            color = this.applyColorToLegend(legend);

            if (legend.disabled === true) {
              return false;
            }
          }
        }
        break;
      default:
        console.warn(
          `Error: Do not recognize type of legend. Should either be equalnumber, equalinterval or category.`
        );
        break;
    }

    if (undefined === color) {
      return false;
    }

    // Return array with the color, and a lighter and darker version for hover and pressed states
    return [
      color,
      chroma(color)
        .saturate(1.5)
        .hex(),
      chroma(color)
        .darken(0.5)
        .hex()
    ];
  }

  applyTooltipsToGeo(geoName, data) {
    let toolTipText = `<strong>${geoName}</strong>`;

    Object.keys(this.state.columns).forEach(columnKey => {
      const column = this.state.columns[columnKey];

      if (true === column.tooltip)
        toolTipText += `<p>${column.label +
          ": " +
          this.displayDataAsText(data[column.name], columnKey)}</p>`;
    });

    return toolTipText;
  }

  // Toggles if a legend is active and being applied to the map and data table.
  toggleLegendActive(index) {
    this.setState(prevState => {
      const legendData = prevState.legend.data;

      const newValue = !legendData[index].disabled;

      let disabledAmt = prevState.legend.disabledAmt || 0;

      if (true === newValue) {
        disabledAmt++;
      } else {
        disabledAmt--;
      }

      legendData[index].disabled = newValue; // Toggle!

      return {
        legend: {
          ...prevState.legend,
          disabledAmt: disabledAmt,
          data: legendData
        }
      };
    });
  }

  // Simply toggles the visibility of the data table
  toggleDataTableVisibility() {
    this.setState(prevState => {
      const newValue = !this.state.general.expandDataTable;

      return {
        general: {
          ...prevState.general,
          expandDataTable: newValue
        }
      };
    });
  }

  buildLegend(
    newData = this.state.data,
    legendObject = this.state.legend,
    setStateInMethod = true
  ) {
    const type = legendObject.type,
      number = legendObject.numberOfItems,
      datacol = this.state.columns.primary.name,
      statecol = this.state.columns.geo.name,
      legendData = [],
      specialClassesUsed = [];

    const allGeoList = Object.keys(newData);

    const dataSet = Object.values(newData);

    // Add special classes to legend if they're defined - Just store as a string instead of an object.
    if (legendObject.specialClasses !== false && "category" !== type) {
      const deleteGeos = [];

      allGeoList.forEach(geo => {
        if (legendObject.specialClasses.includes(newData[geo][datacol])) {
          let valToCheck = newData[geo][datacol];
          if (!specialClassesUsed.includes(valToCheck)) {
            specialClassesUsed.push(valToCheck);
          }
          deleteGeos.push(geo);
        }
      });

      deleteGeos.forEach(geo => {
        let i = allGeoList.indexOf(geo);

        allGeoList.splice(i, 1);
      });

      legendObject.specialClasses.forEach(specialClass => {
        if (specialClassesUsed.includes(specialClass)) {
          legendData.push({ special: true, value: specialClass });
        }
      });
    }

    const getIntervalAmt = () => {
      let allNums = new Map();

      allGeoList.forEach(obj => {
        if (false === Number.isNaN(parseFloat(newData[obj][datacol]))) {
          allNums.set(
            newData[obj][statecol],
            parseFloat(newData[obj][datacol])
          );
        }
      });

      allNums = new Map([...allNums.entries()].sort((a, b) => a[1] - b[1]));

      let interval =
        (Math.max(...allNums.values()) - Math.min(...allNums.values())) /
        number;

      interval = Math.round(interval * 10) / 10;

      // Returns min value, max value and the calculated interval between them
      return [
        Math.min(...allNums.values()),
        Math.max(...allNums.values()),
        interval,
        allNums
      ];
    };

    let intervalAmt;

    if ("category" !== type) {
      intervalAmt = getIntervalAmt();
    }

    // If category legend, add an additional flat array of the values to the legend state. This is for use in determining order/reordering in the editor
    let categoryValues = [];

    // Build the data for the legend
    switch (type) {
      case "equalnumber":
        const dataMap = intervalAmt[3];
        const geoArr = Array.from(dataMap.keys());
        const dataArr = Array.from(dataMap.values());

        const remainder = geoArr.length % number;

        let chunkAmt = Math.floor(geoArr.length / number);

        if (remainder > 0) {
          chunkAmt += 1;
        }

        // Declaring variable 'chunked' as an empty array
        let chunked = [];

        // Looping through the array until it has been split into our subarrays
        while (geoArr.length > 0) {
          let selectedGeos = geoArr.splice(0, chunkAmt);
          let selectedData = dataArr.splice(0, chunkAmt);

          chunked.push({
            selectedGeos,
            selectedData
          });
        }

        chunked.forEach(allData => {
          let range = {
            min: allData.selectedData[0],
            max: allData.selectedData[allData.selectedData.length - 1],
            chunkAmount: chunkAmt,
            geos: allData.selectedGeos
          };

          legendData.push(range);
        });

        break;
      case "equalinterval":
        for (let i = 0; i < number; i++) {
          let interval = intervalAmt[2];

          let min = intervalAmt[0] + interval * i;

          let max = min + interval;

          // If this is the last loop, assign actual max of data as the end point
          if (i === number - 1) {
            max = intervalAmt[1];
          }

          let range = {
            min: Math.round(min * 100) / 100,
            max: Math.round(max * 100) / 100
          };

          legendData.push(range);
        }

        break;
      case "category":
        // We ignore the number of colors when things are set to categorical and simply generate a new legend item for each one we find, up until 9.
        const usedAlready = [];

        // Find unique values
        allGeoList.forEach((obj, i) => {
          const data = dataSet[i][datacol];

          if (usedAlready.includes(data) === false && legendData.length <= 9) {
            usedAlready.push(data);
          }
        });

        // Sort the category by number/alphabetical so it doesn't just apply them in the order it found them in the file. DOES NOT INCLUDE SPECIAL CLASSES. Those always have to be at the beginning.
        usedAlready.sort();

        // TODO: This is where to add the hook to sort by the order provided - probably?
        if (this.state.legend && this.state.legend.categoryValuesOrder) {
          usedAlready.sort((a, b) => {
            return (
              this.state.legend.categoryValuesOrder.indexOf(a) -
              this.state.legend.categoryValuesOrder.indexOf(b)
            );
          });
        }

        usedAlready.forEach(val => {
          const newLegendItem = {
            category: val
          };

          // Push as an object with one property: a string with the category in it.
          if (
            this.isSpecialClassValue(val, legendObject.specialClasses) &&
            false === specialClassesUsed.includes(val)
          ) {
            newLegendItem.special = true;
            specialClassesUsed.push(val);
            legendData.unshift(newLegendItem);
          } else {
            categoryValues.push(val);
            legendData.push(newLegendItem);
          }
        });

        break;
      default:
        throw new Error("No valid data classification type.");
    }

    const newLegendObject = {
      ...legendObject,
      disabledAmt: 0,
      data: legendData,
      geosPerColor: {},
      activeSpecialClasses: specialClassesUsed.length,
      singleColumn: legendObject.singleColumn || false
    };

    // Add our generated legends to the state
    if (categoryValues.length > 0) {
      newLegendObject.categoryValuesOrder = categoryValues;
    }

    // There are certain instances (in the editor) where this new legend needs to be added to a different setState call and it happens all at once. If the flag is set, return the new legend object instead of calling setState.
    if (false === setStateInMethod) {
      return newLegendObject;
    } else {
      this.setState(prev => {
        return {
          legend: newLegendObject
        };
      });
    }
  }

  // A lot of the boolean values stored in the old format are strings. This helper function is needed to convert them correctly.
  booleanFromString = value => {
    if ("true" === value) {
      return true;
    }

    if ("false" === value) {
      return false;
    }

    return value;
  };

  // Checks if the string is a number and returns it as a number if it is
  numberFromString = value => {
    // Only do this to values that are ONLY numbers - without this parseFloat strips all the other text
    let nonNumeric = /[^\d.]/g;

    if (
      false === Number.isNaN(parseFloat(value)) &&
      null === String(value).match(nonNumeric)
    ) {
      return parseFloat(value);
    }

    return value;
  };

  // This resets all active legend toggles. Should always be called with "await" to make sure it's done processing before you continue. See usage example in changeFilterActive.
  async resetLegendToggles() {
    await this.setState(prevState => {
      const legendData = prevState.legend.data;

      legendData.forEach(item => {
        delete item.disabled;
      });

      return {
        legend: {
          ...prevState.legend,
          disabledAmt: 0,
          data: legendData
        }
      };
    });
  }

  // Supports JSON or CSV
  async fetchRemoteData(url) {
    const regex = /(?:\.([^.]+))?$/;

    let data = [];

    if ("csv" === regex.exec(url)[1]) {
      data = await fetch(url)
        .then(response => response.text())
        .then(responseText => {
          const parsedCsv = Papa.parse(responseText, {
            header: true,
            dynamicTyping: true
          });

          return parsedCsv.data;
        })
        .then(result => {
          return result;
        });

      return data;
    }

    if ("json" === regex.exec(url)[1]) {
      data = await fetch(url)
        .then(response => response.json())
        .then(data => {
          return data;
        });

      return data;
    }
  }

  // This calculates what is actually going to be seen and displayed by the map and data table at render. It accounts for things like toggling legend items as well as filters.
  processData(unifiedLegend = false) {
    // All the data to be mapped
    let rawData = this.state.data;

    const geoColumnName = this.state.columns.geo.name;

    const parsedData = {};

    let checkAgainst = this.geoNames;

    let type = "full";

    // If it's not the full name, switch to abbreviations
    if (
      this.state.data[0][geoColumnName] &&
      this.state.data[0][geoColumnName].length < 3 &&
      this.state.general.geoType === "us"
    ) {
      checkAgainst = this.geoAbbreviations;
      type = "abbreviation";
    }

    // Check for territories/cities
    rawData.forEach(value => {
      let geoName = value[geoColumnName];

      if ("abbreviation" === type) {
        geoName = this.geoNames[this.geoAbbreviations.indexOf(geoName)];
      }

      this.processNonMapGeos(geoName);
    });

    // Cut down rawData according to filters
    if (this.state.filters.length > 0 && false === unifiedLegend) {
      let filteredRawData = [];

      rawData.forEach(row => {
        let addRow = true;

        this.state.filters.forEach(filter => {
          if (row[filter.columnName] !== filter.active) {
            addRow = false;
          }
        });

        if (true === addRow) {
          filteredRawData.push(row);
        }
      });

      rawData = filteredRawData;
    }

    for (let i = 0; i < rawData.length; i++) {
      let item = rawData[i];

      // Find which state we're looking for
      if (checkAgainst.includes(item[geoColumnName])) {
        let geoName = item[geoColumnName];

        if ("abbreviation" === type) {
          geoName = this.geoNames[this.geoAbbreviations.indexOf(geoName)];
        }

        if (
          false ===
          this.applyLegendToValue(
            item[this.state.columns.primary.name],
            item[geoColumnName]
          )
        ) {
          continue;
        }

        // Push to map
        if (parsedData[geoName] === undefined) {
          parsedData[geoName] = item;
        }
      }
    }

    return parsedData;
  }

  // Creates all the columns for the data table based on the React Table API. The only reason this is run on render is to display changes that are made from the editor (ex: hiding/showing a column in the data table)
  processDataTableOnRender() {
    let columns = [];

    Object.keys(this.state.columns).forEach((column, index) => {
      if (
        true === this.state.columns[column].dataTable &&
        "" !== this.state.columns[column].name
      ) {
        const newCol = {
          Header:
            this.state.columns[column].label || this.state.columns[column].name,
          id: this.state.columns[column].name,
          accessor: row => {
            return row[this.state.columns[column].name];
          }
        };

        if (0 === index) {
          // Only do this for the first column, which is the geo column.
          newCol.Cell = row => {
            // Grab color
            let legendColor = this.applyLegendToValue(
              row.original[this.state.columns.primary.name],
              row.original[this.state.columns.geo.name]
            );

            // If the raw data has an abbreviation, map and display the full name
            let labelValue = this.getCellLabelValue(row);

            let cellMarkup = (
              <span>
                <span
                  className="legend-color"
                  style={{ backgroundColor: legendColor[0] }}
                ></span>
                {labelValue}
              </span>
            );

            cellMarkup = this.getCellAnchor(cellMarkup, row);

            return cellMarkup;
          };
        } else {
          newCol.maxWidth = 300;
          newCol.Cell = row => {
            let cellMarkup = this.displayDataAsText(row.value, column, true);

            cellMarkup = this.getCellAnchor(cellMarkup, row);

            return cellMarkup;
          };
        }

        columns.push(newCol);
      }
    });

    return columns;
  }

  getCellLabelValue(row) {
    // If the raw data has an abbreviation, map and display the full name
    let labelValue = row.value;

    if (this.geoAbbreviations.includes(row.value)) {
      labelValue = this.geoNames[this.geoAbbreviations.indexOf(row.value)];
    }

    return labelValue;
  }

  parseLinks(urlString) {
    // This is here for the future if additional requests are made to adjust parsing before sending links
    return urlString;
  }

  geoClickHandler(e, urlString) {
    e.preventDefault();

    window.parent.location = urlString;
  }

  //Optionally wrap cell with anchor if config defines a navigation url
  getCellAnchor(markup, row) {
    if (
      this.state.columns.navigate &&
      row.original[this.state.columns.navigate.name]
    ) {
      markup = (
        <span>
          <a
            href={this.parseLinks(
              row.original[this.state.columns.navigate.name]
            )}
            title={"Click for more information"}
            rel="noopener noreferrer"
            target="_parent"
            onClick={e =>
              this.geoClickHandler(
                e,
                row.original[this.state.columns.navigate.name]
              )
            }
            aria-label={"Click for more information"}
          >
            {" "}
          </a>
          {markup}
          <span className="more-information">Learn More</span>
        </span>
      );
    }

    return markup;
  }

  // Generate columns object from wonky JSON config - Columns used for filters get added as well in a different location
  buildColumns(data) {
    const columnsObj = {};

    // Geography Column
    if (data.statecolumnname) {
      const geoColumn = {
        name: data.statecolumnname,
        label: "Location",
        tooltip: false,
        dataTable: true
      };

      columnsObj["geo"] = geoColumn;
    }

    // Primary second
    columnsObj.primary = {
      name: data.datacolumnname,
      label: data.datacolumnfriendlyname || "Data Label",
      prefix: data.dataprefix,
      suffix: data.datasuffix,
      dataTable: true,
      tooltip: true
    };

    if (data.navigateurlcolumn) {
      const navigateColumn = {
        name: data.navigateurlcolumn,
        tooltip: false,
        dataTable: false
      };

      columnsObj["navigate"] = navigateColumn;
    }

    if (data.additionalcolumns) {
      data.additionalcolumns.forEach(column => {
        const additionalColumn = {
          name: column.datacolumnname,
          label: column.datacolumnfriendlyname || column.datacolumnname,
          prefix: column.dataprefix,
          suffix: column.datasuffix,
          tooltip: this.booleanFromString(column.showinpopup),
          dataTable: this.booleanFromString(column.showindatatable)
        };

        columnsObj[additionalColumn.name] = additionalColumn;
      });
    }

    return columnsObj;
  }

  // Generates a list of all cities and territories that exist in the data set. Because they are not rendered by React Simple Maps's geographic projection, we have to create a list of them to display inactive states
  processNonMapGeos(value) {
    if (
      this.supportedTerritories.includes(value) &&
      false === this.territoriesInData.includes(value)
    ) {
      this.territoriesInData.push(value);
    }

    if (
      this.supportedCities.includes(value) &&
      false === this.citiesInData.includes(value)
    ) {
      this.citiesInData.push(value);
    }
  }

  convertStateToJson() {
    let strippedState = JSON.parse(JSON.stringify(this.state));

    // Strip ref
    delete strippedState["editor"];
    strippedState.legend.data = [];
    delete strippedState.legend.activeSpecialClasses;

    // Strip out computed items
    if (this.state.dataUrl && true === this.state.editor.keepUrl) {
      delete strippedState.data; // If the data is pulled dynamically from a URL, don't store the data locally
    }

    if (this.state.dataUrl && false === this.state.editor.keepUrl) {
      delete strippedState.dataUrl;
    }

    // Return in a string to pass to the input in the WCMS
    return JSON.stringify(strippedState);
  }

  // Every time the component updates, rebuild the tooltips and adjust the height for the widget loader.
  componentDidUpdate(prevProps, prevState) {
    // Rebuild tooltips
    ReactTooltip.rebuild();
  }

  createConfig() {
    var data = this.convertStateToJson();

    this.setState({
      jsonConfigString: data
    });
  }

  async componentDidMount() {

    // Load default JSON
    let data;

    // If passed a URL, use that.
    if (this.props.configUrl) {
        let config = await fetch(this.props.configUrl, { cache: "reload" });
        data = await config.json();
    } else if(this.props.config) {
        data = this.props.config;
    } else {
        data = defaultConfig;
    }

    // Load the state directly from the config file that is passed. This also adds new top level properties that are defined in the first state declaration at the very top.
    let initialState = {
      ...this.state,
      ...data
    };

    if (initialState.general && initialState.general.backgroundColor) {
      document.body.style.backgroundColor =
        initialState.general.backgroundColor;
    }

    // If editor prop is passed, load editor
    if (this.props.editor && true === this.props.editor) {
      initialState.editor = {
        active: true,
        expanded: true
      };
    }

    // If there is no raw data stored, we grab and store the rawdata from the URL provided in the config file
    if (initialState.dataUrl) {
      if (true === this.isEditor || true === this.state.editor.active) {
        // The second part of this is only for debugging
        initialState.editor.dataSource = "url";
        initialState.editor.keepUrl = true;
      }

      initialState.data = await this.fetchRemoteData(initialState.dataUrl);
    }

    // Process all the data and trim whitespace/returns/etc...
    initialState.data = this.cleanCsvData(initialState.data);

    // This code goes through and adds the defaults for every property declaring in the initial state at the top.
    // This allows you to easily add new properties to the config without having to worry about accounting for backwards compatibility.
    // Right now this does not work recursively -- only on first and second level properties.
    Object.keys(initialState).forEach(key => {
      if (
        "object" === typeof initialState[key] &&
        false === Array.isArray(initialState[key])
      ) {
        if (this.state[key]) {
          Object.keys(this.state[key]).forEach(property => {
            if (undefined === initialState[key][property]) {
              initialState[key][property] = this.state[key][property];
            }
          });
        }
      }
    });

    // Drop the loading flag
    this.isLoading = false;

    // After data is grabbed, loop through and generate filter column values if there are any
    if (initialState.filters) {
      const filterList = [];

      initialState.filters.forEach(filter => {
        filterList.push(filter.columnName);
      });

      filterList.forEach((filter, index) => {
        const filterValues = this.generateValuesForFilter(
          filter,
          initialState.data
        );

        initialState.filters[index].values = filterValues;

        // Initial filter should be active
        initialState.filters[index].active = filterValues[0];
      });
    }

    // Set properties that can be passed directly and require no additional computation
    await this.setState(prev => {
      return initialState;
    });

    this.buildLegend(this.processData(this.state.legend.unified));
  }

  generateValuesForFilter(columnName, data = this.state.data) {
    const values = [];

    data.forEach(row => {
      const value = row[columnName];

      if (value && false === values.includes(value)) {
        values.push(value);
      }
    });

    return values;
  }

  // Handles fields that are only used one time in the editor. Groups of related fields that are used multiple times (repeaters) have their own methods (ex: changeFilter)
  async handleEditorChanges(property, value) {
    switch (property) {
      case "title":
        this.setState(prevState => {
          return {
            general: {
              ...prevState.general,
              title: value
            }
          };
        });

        break;
      case "subtext":
        this.setState(prevState => {
          return {
            general: {
              ...prevState.general,
              subtext: value
            }
          };
        });

        break;
      case "showTitle":
        this.setState(prevState => {
          return {
            general: {
              ...prevState.general,
              showTitle: value
            }
          };
        });

        break;
      case "showSidebar":
        this.setState(prevState => {
          return {
            general: {
              ...prevState.general,
              showSidebar: value
            }
          };
        });

        break;
      case "expandDataTable":
        this.setState(prevState => {
          return {
            general: {
              ...prevState.general,
              expandDataTable: value
            }
          };
        });

        break;
      case "color":
        this.setState(prevState => {
          return {
            color: value
          };
        });

        break;
      case "enableSharing":
        this.setState(prevState => {
          return {
            sharing: {
              ...prevState.sharing,
              enabled: value
            }
          };
        });

        break;
      case "socialTitle":
        this.setState(prevState => {
          return {
            sharing: {
              ...prevState.sharing,
              title: value
            }
          };
        });

        break;
      case "socialUrl":
        this.setState(prevState => {
          return {
            sharing: {
              ...prevState.sharing,
              url: value
            }
          };
        });

        break;
      case "socialDescription":
        this.setState(prevState => {
          return {
            sharing: {
              ...prevState.sharing,
              description: value
            }
          };
        });

        break;
      case "sidebarPosition":
        this.setState(prevState => {
          return {
            legend: {
              ...prevState.legend,
              position: value
            }
          };
        });

        break;
      case "backgroundColor":
        // Set body background color
        document.body.style.backgroundColor = value;

        this.setState(prevState => {
          return {
            general: {
              ...prevState.general,
              backgroundColor: value
            }
          };
        });

        break;
      case "geoBorderColor":
        this.setState(prevState => {
          return {
            general: {
              ...prevState.general,
              geoBorderColor: value
            }
          };
        });

        break;
      case "headerColor":
        this.setState(prevState => {
          return {
            general: {
              ...prevState.general,
              headerColor: value
            }
          };
        });

        break;
      case "geoColumn":
        this.setState(prevState => {
          return {
            columns: {
              ...prevState.columns,
              geo: {
                ...prevState.columns.geo,
                name: value
              }
            }
          };
        });

        break;
      case "navigateColumn":
        this.setState(prevState => {
          return {
            columns: {
              ...prevState.columns,
              navigate: {
                ...prevState.columns.navigate,
                name: value
              }
            }
          };
        });

        break;
      case "legendTitle":
        this.setState(prevState => {
          return {
            legend: {
              ...prevState.legend,
              title: value
            }
          };
        });

        break;
      case "legendDescription":
        this.setState(prevState => {
          return {
            legend: {
              ...prevState.legend,
              description: value
            }
          };
        });

        break;
      case "legendType":
        await this.setState(prevState => {
          return {
            legend: this.buildLegend(
              this.processData(this.state.legend.unified),
              { ...this.state.legend, type: value },
              false
            )
          };
        });

        break;
      case "legendNumber":
        await this.setState(prevState => {
          return {
            legend: this.buildLegend(
              this.processData(this.state.legend.unified),
              { ...this.state.legend, numberOfItems: parseInt(value) },
              false
            )
          };
        });

        break;
      case "unifiedLegend":
        await this.setState(prevState => {
          return {
            legend: this.buildLegend(
              this.processData(value),
              { ...this.state.legend, unified: value },
              false
            )
          };
        });
        break;
      case "toggleDataSource":
        this.setState(prevState => {
          return {
            editor: {
              ...prevState.editor,
              dataSource: value
            }
          };
        });
        break;
      case "editorDataUrl":
        this.setState({ dataUrl: value });
        break;
      case "editorKeepUrl":
        this.setState(prevState => {
          return {
            editor: {
              ...prevState.editor,
              keepUrl: value
            }
          };
        });
        break;
      case "loadFileData":
        if ("csv" === value[1]) {
          const parsedCsv = Papa.parse(value[0], {
            header: true,
            dynamicTyping: true
          });

          const uploadedCsvData = this.cleanCsvData(parsedCsv.data);

          this.setState(prevState => {
            return {
              editor: {
                ...prevState.editor,
                localFileData: uploadedCsvData
              }
            };
          });
        } else if ("json" === value[1]) {
          const uploadedJsonData = JSON.parse(value[0]);

          this.setState(prevState => {
            return {
              editor: {
                ...prevState.editor,
                localFileData: uploadedJsonData
              }
            };
          });
        }

        break;
      case "categoryOrder":
        await this.setState(prevState => {
          return {
            legend: {
              ...prevState.legend,
              categoryValuesOrder: arrayMove(
                prevState.legend.categoryValuesOrder,
                value[0],
                value[1]
              )
            }
          };
        });

        this.buildLegend(this.processData(this.state.legend.unified));
        break;
      case "singleColumnLegend":
        await this.setState(prevState => {
          return {
            legend: {
              ...prevState.legend,
              singleColumn: !prevState.legend.singleColumn
            }
          };
        });

        this.buildLegend(this.processData(this.state.legend.unified));
        break;
      default:
        console.warn(`Did not recognize editor property.`);
        break;
    }
  }

  async editorLoadData() {
    const type = this.state.editor.dataSource;

    this.citiesInData = [];
    this.territoriesInData = [];

    // Reset the columns when loading new data so the user doesn't get confused
    let resetObj = {
      geo: {
        dataTable: true,
        label: "",
        name: "",
        tooltip: false
      },
      primary: {
        dataTable: true,
        label: "",
        name: "",
        prefix: "",
        suffix: "",
        tooltip: true
      },
      navigate: {
        dataTable: false,
        name: "",
        tooltip: false
      }
    };

    switch (type) {
      case "local":
        this.setState({
          columns: resetObj,
          data: this.state.editor.localFileData
        });
        break;
      case "url":
        let remoteData = await this.fetchRemoteData(this.state.dataUrl);

        this.setState({ columns: resetObj, data: remoteData });
        break;
      default:
        console.warn(`Editor Load Data type not set`);
        break;
    }
  }

  cleanCsvData(data) {
    return data.map(row => {
      let deleteKeys = [];

      for (let property in row) {
        if (0 === property.length) {
          deleteKeys.push(property);
        }

        if ("string" === typeof row[property]) {
          row[property] = row[property].trim();
        }
      }

      deleteKeys.forEach(key => delete row[key]);

      return row;
    });
  }

  // Handles changes to column section of editor
  async editColumn(columnName, editTarget, value) {
    switch (editTarget) {
      case "specialClassDelete":
        const updatedSpecialClasses = Array.from(
          this.state.legend.specialClasses
        );

        updatedSpecialClasses.splice(value, 1);

        await this.setState(prevState => {
          return {
            legend: this.buildLegend(
              this.processData(value),
              { ...this.state.legend, specialClasses: updatedSpecialClasses },
              false
            )
          };
        });

        // Rebuild the legend with the new values.
        this.buildLegend(this.processData(this.state.legend.unified));

        break;
      case "specialClassAdd":
        let newSpecialClasses = this.state.legend.specialClasses;

        newSpecialClasses.push(value.name);

        this.setState(prevState => {
          return {
            ...prevState,
            legend: {
              ...prevState.legend,
              specialClasses: newSpecialClasses
            }
          };
        });

        // Rebuild the legend with the new values.
        this.buildLegend(this.processData(this.state.legend.unified));
        break;
      default:
        await this.setState(prevState => {
          return {
            columns: {
              ...prevState.columns,
              [columnName]: {
                ...prevState.columns[columnName],
                [editTarget]: value
              }
            }
          };
        });

        this.buildLegend(this.processData(this.state.legend.unified));
        break;
    }
  }

  addAdditionalColumn(number) {
    const columnKey = `additionalColumn${number}`;

    this.setState(prevState => {
      return {
        columns: {
          ...prevState.columns,
          [columnKey]: {
            label: "New Column",
            dataTable: false,
            tooltips: false,
            prefix: "",
            suffix: ""
          }
        }
      };
    });
  }

  removeAdditionalColumn(columnName) {
    const newColumns = this.state.columns;

    delete newColumns[columnName];

    this.setState(prevState => {
      return {
        columns: newColumns
      };
    });
  }

  // Handles changes to filter section of editor
  changeFilter(filterIndex, target, value) {
    let newFilters = Array.from(this.state.filters);

    switch (target) {
      case "addNew":
        newFilters.push({
          values: []
        });
        break;
      case "remove":
        newFilters = newFilters.filter((value, index) => index !== filterIndex);
        break;
      case "columnName":
        newFilters[filterIndex].columnName = value;

        // Regenerate legend values mayhaps here and set one to active to pass to state?
        let values = this.generateValuesForFilter(value);

        newFilters[filterIndex].values = values;

        newFilters[filterIndex].active = values[0];
        break;
      default:
        newFilters[filterIndex][target] = value;

        break;
    }

    this.setState(prevState => {
      return {
        filters: newFilters
      };
    });
  }

  // Render method. This is called again each time the state changes. For more information, refer to React's official documentation.
  render() {
    const processedData = this.processData();

    const numberOfGeos = Object.values(processedData).length;

    let mapContainerClasses = "map-container";

    if (
      "bottom" === this.state.legend.position ||
      this.state.legend.showLegend === false
    ) {
      mapContainerClasses += " legend-below";
    }

    let processedDataTableColumns = this.processDataTableOnRender();

    return (
      <section className="cdc-map">
        <ReactTooltip
            id="tooltip"
            place="right"
            type="light"
            html={true}
            className={"tooltip"}
        />
        {true === this.isLoading && <Loading />}
        {true === this.state.editor.active && (
          <Editor
            state={this.state}
            createConfig={this.createConfig}
            editorLoadData={this.editorLoadData}
            toggleEditor={this.toggleEditor}
            generateValuesForFilter={this.generateValuesForFilter}
            colorPalettes={this.colorPalettes}
            removeAdditionalColumn={this.removeAdditionalColumn}
            addAdditionalColumn={this.addAdditionalColumn}
            editColumn={this.editColumn}
            changeFilter={this.changeFilter}
            handleEditorChanges={this.handleEditorChanges}
          />
        )}
        <section
          className={
            true === this.state.editor.expanded
              ? "editor-active full-container"
              : "full-container"
          }
        >
          {this.state.editor.expanded === false &&
            true === this.state.editor.active &&
            false === this.state.general.showTitle && (
              <button
                className="editor-toggle no-header collapsed"
                title="Expand Editor"
                onClick={() => {
                  this.toggleEditor();
                }}
              ></button>
            )}
          {this.state.general.showTitle === true && (
            <header>
              <h1
                className={"site-title " + this.state.general.headerColor}
                aria-label={this.state.general.title}
              >
                {this.state.editor.expanded === false &&
                  true === this.state.editor.active && (
                    <button
                      className="editor-toggle collapsed"
                      title="Expand Editor"
                      onClick={() => {
                        this.toggleEditor();
                      }}
                    ></button>
                  )}
                {ReactHtmlParser(this.state.general.title)}
              </h1>
            </header>
          )}
          <main className={mapContainerClasses}>
            <section
              className={"geography-container " + this.state.general.geoType}
              aria-hidden="true"
            >
              {/* Have to use these two container divs only for IE11 to force it to give the SVG an aspect ratio. */}
              <div
                style={{
                  position: "relative",
                  height: 0,
                  paddingBottom: "50%"
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0
                  }}
                >
                  <ComposableMap
                    projection={geoAlbersUsa}
                    width={880}
                    height={500}
                    style={{
                      width: "100%",
                      height: "100%",
                      overflow: "hidden"
                    }}
                  >
                    <ZoomableGroup disablePanning>
                      <Geographies
                        disableOptimization
                        geography={topoJsonStates}
                      >
                        {(geos, proj) =>
                          geos.map((geo, i) => {
                            const geoName = geo.properties.NAME_1;

                            let geoData = processedData[geoName];

                            let legendColors;

                            // Once we receive data for this geographic item, setup variables.
                            if (geoData !== undefined) {
                              // This method either returns an array with colors to add to the state or false
                              legendColors = this.applyLegendToValue(
                                processedData[geoName][
                                  this.state.columns.primary.name
                                ],
                                processedData[geoName][
                                  this.state.columns.geo.name
                                ]
                              );
                            }

                            // If a legend applies, return it with appropriate information.
                            if (legendColors) {
                              // const toolTip = this.applyTooltipsToGeo(geoData)
                              const toolTip = this.applyTooltipsToGeo(
                                geoName,
                                geoData
                              );
                              let renderedGeo = (
                                <Geography
                                  data-tip={toolTip}
                                  data-for="tooltip"
                                  id={geoName}
                                  tabIndex={-1}
                                  className={
                                    "rsm-geography " +
                                    this.state.general.geoBorderColor
                                  }
                                  key={geoName}
                                  cacheId={geo.properties.ID_1}
                                  geography={geo}
                                  projection={proj}
                                  style={{
                                    default: {
                                      fill: legendColors[0]
                                    },
                                    hover: {
                                      fill: legendColors[1]
                                    },
                                    pressed: {
                                      fill: legendColors[2]
                                    }
                                  }}
                                ></Geography>
                              );

                              if (
                                this.state.columns.navigate &&
                                geoData[this.state.columns.navigate.name]
                              ) {
                                renderedGeo = (
                                  <a
                                    href={this.parseLinks(
                                      geoData[this.state.columns.navigate.name]
                                    )}
                                    key={i}
                                    onClick={e =>
                                      this.geoClickHandler(
                                        e,
                                        geoData[
                                          this.state.columns.navigate.name
                                        ]
                                      )
                                    }
                                    target="_parent"
                                    tabIndex={-1}
                                    rel="noopener noreferrer"
                                  >
                                    {renderedGeo}
                                  </a>
                                );
                              }

                              return renderedGeo;
                            }

                            // Default return state, just the geo territory with no additional information
                            return (
                              <Geography
                                key={geoName}
                                cacheId={geo.properties.ID_1}
                                className={
                                  "rsm-geography " +
                                  this.state.general.geoBorderColor
                                }
                                tabIndex={-1}
                                geography={geo}
                                projection={proj}
                              ></Geography>
                            );
                          })
                        }
                      </Geographies>
                    </ZoomableGroup>
                  </ComposableMap>
                </div>
              </div>
              <section className="cities-territories">
                {this.territoriesInData.length > 0 && (
                  <SquareGeo
                    type="Territories"
                    state={this.state}
                    data={processedData}
                    supportedGeos={supportedGeos}
                    list={this.territoriesInData}
                    applyTooltipsToGeo={(geoName, data) =>
                      this.applyTooltipsToGeo(geoName, data)
                    }
                    applyLegendToValue={(value, geoName) =>
                      this.applyLegendToValue(value, geoName)
                    }
                  />
                )}
                {this.citiesInData.length > 0 && (
                  <SquareGeo
                    type="Cities"
                    state={this.state}
                    data={processedData}
                    supportedGeos={supportedGeos}
                    list={this.citiesInData}
                    applyTooltipsToGeo={(geoName, data) =>
                      this.applyTooltipsToGeo(geoName, data)
                    }
                    applyLegendToValue={(value, geoName) =>
                      this.applyLegendToValue(value, geoName)
                    }
                  />
                )}
              </section>
            </section>
            {this.state.general.showSidebar === true && (
              <aside>
                <Sidebar
                  legend={this.state.legend}
                  filters={this.state.filters}
                  sharing={this.state.sharing}
                  prefix={this.state.columns.primary.prefix}
                  suffix={this.state.columns.primary.suffix}
                  resetLegendToggles={this.resetLegendToggles}
                  toggleLegendActive={this.toggleLegendActive}
                  applyColorToLegend={this.applyColorToLegend}
                  changeFilterActive={this.changeFilterActive}
                />
              </aside>
            )}
          </main>
          {this.state.general.hideDataTable !== true && (
            <section className={"data-table"}>
              <h3
                className={
                  this.state.general.expandDataTable ? "" : "collapsed"
                }
                onClick={() => {
                  this.toggleDataTableVisibility();
                }}
              >
                Data Table
              </h3>
              <ReactTable
                data={Object.values(processedData)}
                columns={processedDataTableColumns}
                showPagination={false}
                defaultPageSize={1000}
                minRows={numberOfGeos}
              />
              {true === this.state.general.showDownloadButton && (
                <CSVLink
                  data={this.state.data}
                  filename={this.state.general.title + ".csv"}
                  className={
                    this.state.general.headerColor +
                    " btn btn-primary btn-download no-border"
                  }
                >
                  Download Data (CSV)
                </CSVLink>
              )}
            </section>
          )}
          {this.state.general.subtext && (
            <p className="subtext">
              {ReactHtmlParser(this.state.general.subtext)}
            </p>
          )}
        </section>
      </section>
    );
  }
}

export default CdcMap;
