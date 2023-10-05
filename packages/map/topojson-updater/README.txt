TopoJSON Updater

Node script to convert shapefile data from census.gov to topojson, and format/optimize for use in COVE


Usage
1. Run yarn install at root folder
2. Download shapefiles from census.gov (https://www.census.gov/geographies/mapping-files/time-series/geo/cartographic-boundary.html) for the year that needs to be supported to the "shapefiles" folder of the project
    - Always choose the options with the smallest file size
    - Shapefiles for both states and counties should be downloaded for each year being added
    - The downloads from the census site need to be unzipped and left in their original folders after being placed in the "shapefiles" folder of the project
3. Run "node topojson-updater.js"
4. Confirm a new json file for each year has been added to packages/map/src/data
5. Update switch statements in CountyMap.jsx and SingleStateMap.jsx with the corresponding year -> file import mapping
6. Add <option> tag for year in the countyCensusYear selector in packages/map/components/EditorPanel.jsx

Note: List of changes to county lines is provided by the census and can be used to determine if new files are needed for years: https://www.census.gov/programs-surveys/geography/technical-documentation/county-changes.2010.html#list-tab-957819518