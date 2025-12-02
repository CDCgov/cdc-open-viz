import { Meta, StoryObj } from '@storybook/react-vite'
import Footnotes from '../Footnotes'
import FootnotesStandAlone from '../Footnotes/FootnotesStandAlone'
import Chart from '@cdc/chart'
import CdcMap from '@cdc/map'

const meta: Meta<typeof Footnotes> = {
  title: 'Components/Organisms/Footnotes',
  component: Footnotes,
  parameters: {
    docs: {
      description: {
        component: 'Renders footnotes with support for symbols, HTML tags, and newlines. See "CSV Features" stories for dynamic footnotes from CSV data.'
      }
    }
  }
}

export default meta

type Story = StoryObj<typeof FootnotesStandAlone>

export const Primary: Story = {
  render: args => <FootnotesStandAlone {...args} />,
  args: {
    config: {
      staticFootnotes: [
        { symbol: '*', text: 'This is a footnote' },
        { symbol: '†', text: 'This is another footnote' },
        { text: 'This is a third footnote' }
      ]
    },
    data: [],
    markupVariables: [],
    enableMarkupVariables: false,
    filters: []
  }
}

export const WithHTMLTags: Story = {
  render: args => <FootnotesStandAlone {...args} />,
  args: {
    config: {
      staticFootnotes: [
        { symbol: '*', text: 'This footnote has a <br> tag for line break' },
        { symbol: '†', text: 'This has <strong>bold text</strong> and <em>italic text</em>' },
        { symbol: '**', text: 'Multiple tags: <strong>bold</strong>, <em>italic</em>, and <br>line break' }
      ]
    },
    data: [],
    markupVariables: [],
    enableMarkupVariables: false,
    filters: []
  }
}

export const WithNewlines: Story = {
  render: args => <FootnotesStandAlone {...args} />,
  args: {
    config: {
      staticFootnotes: [
        { symbol: '*', text: 'This footnote has a newline\nbetween these two lines' },
        { symbol: '†', text: 'This footnote has multiple\nnewlines\ncreating three lines' },
        { symbol: '**', text: 'This footnote has a newline\nand continues on the next line' }
      ]
    },
    data: [],
    markupVariables: [],
    enableMarkupVariables: false,
    filters: []
  }
}

export const WithNewlinesAndHTML: Story = {
  render: args => <FootnotesStandAlone {...args} />,
  args: {
    config: {
      staticFootnotes: [
        { symbol: '*', text: 'Line 1\nLine 2 with <strong>bold</strong> text' },
        { symbol: '†', text: 'First line\nSecond line with <em>italic</em>\nThird line with <br>HTML tag' },
        { symbol: '**', text: 'Start\nMiddle with <strong>bold</strong>\nEnd' }
      ]
    },
    data: [],
    markupVariables: [],
    enableMarkupVariables: false,
    filters: []
  }
}

// Chart example with footnotes editor
type ChartStory = StoryObj<typeof Chart>

export const ChartWithFootnotes: ChartStory = {
  name: 'Chart with Footnotes Editor',
  render: (args: any) => <Chart {...args} />,
  args: {
    config: {
      type: 'chart',
      visualizationType: 'Bar',
      title: 'Planets in Our Solar System',
      showTitle: true,
      theme: 'theme-blue',
      fontSize: 'medium',
      orientation: 'vertical',
      xAxis: {
        dataKey: 'Planet',
        label: 'Planet',
        type: 'categorical'
      },
      yAxis: {
        dataKey: 'Diameter',
        label: 'Diameter (km)',
        type: 'linear'
      },
      series: [
        {
          dataKey: 'Diameter',
          type: 'Bar',
          name: 'Diameter'
        }
      ],
      data: [
        { Planet: 'Mercury', Diameter: 4879, Type: 'Terrestrial', Year: 2023, HasRings: 'No' },
        { Planet: 'Venus', Diameter: 12104, Type: 'Terrestrial', Year: 2023, HasRings: 'No' },
        { Planet: 'Earth', Diameter: 12742, Type: 'Terrestrial', Year: 2023, HasRings: 'No' },
        { Planet: 'Mars', Diameter: 6779, Type: 'Terrestrial', Year: 2023, HasRings: 'No' },
        { Planet: 'Jupiter', Diameter: 139820, Type: 'Gas Giant', Year: 2024, HasRings: 'Yes' },
        { Planet: 'Saturn', Diameter: 116460, Type: 'Gas Giant', Year: 2024, HasRings: 'Yes' },
        { Planet: 'Uranus', Diameter: 50724, Type: 'Ice Giant', Year: 2024, HasRings: 'Yes' },
        { Planet: 'Neptune', Diameter: 49244, Type: 'Ice Giant', Year: 2024, HasRings: 'Yes' }
      ],
      filters: [
        {
          columnName: 'Year',
          label: 'Data Year',
          active: true,
          values: [2023, 2024],
          setBy: 'url',
          filterBy: [2023],
          filterFootnotes: true
        }
      ],
      enableMarkupVariables: true,
      markupVariables: [
        {
          name: 'planet_types',
          columnName: 'Type',
          tag: '{{planet_types}}',
          conditions: [],
          addCommas: false
        },
        {
          name: 'terrestrial_planets',
          columnName: 'Planet',
          tag: '{{terrestrial_planets}}',
          conditions: [
            {
              columnName: 'Type',
              isOrIsNotEqualTo: 'is',
              value: 'Terrestrial'
            }
          ],
          addCommas: false
        },
        {
          name: 'planets_with_rings',
          columnName: 'Planet',
          tag: '{{planets_with_rings}}',
          conditions: [
            {
              columnName: 'HasRings',
              isOrIsNotEqualTo: 'is',
              value: 'Yes'
            }
          ],
          addCommas: false
        },
        {
          name: 'data_year',
          columnName: 'Year',
          tag: '{{data_year}}',
          conditions: [],
          addCommas: false
        }
      ],
      footnotes: {
        staticFootnotes: [
          { symbol: '*', text: 'Planet types shown: {{planet_types}}' },
          { symbol: '†', text: 'Terrestrial planets: {{terrestrial_planets}}' },
          { text: 'Planets with rings: {{planets_with_rings}}. Data year: {{data_year}}' }
        ]
      }
    },
    isEditor: true
  }
}

// Map example with footnotes editor
type MapStory = StoryObj<typeof CdcMap>

export const MapWithFootnotes: MapStory = {
  name: 'Map with Footnotes Editor',
  render: (args: any) => <CdcMap {...args} />,
  args: {
    config: {
      "annotations": [],
      "general": {
        "navigationTarget": "_self",
        "noDataMessage": "No State Selected",
        "annotationDropdownText": "Annotations",
        "geoBorderColor": "darkGray",
        "headerColor": "theme-blue",
        "title": "",
        "showTitle": true,
        "showSidebar": true,
        "showDownloadMediaButton": false,
        "displayAsHex": false,
        "displayStateLabels": false,
        "territoriesAlwaysShow": false,
        "language": "en",
        "geoType": "us",
        "geoLabelOverride": "",
        "hasRegions": false,
        "fullBorder": false,
        "type": "data",
        "convertFipsCodes": true,
        "palette": {
          "isReversed": true,
          "name": "sequential_bluereverse",
          "version": "2.0"
        },
        "allowMapZoom": true,
        "hideGeoColumnInTooltip": false,
        "hidePrimaryColumnInTooltip": false,
        "statesPicked": [],
        "expandDataTable": false
      },
      "type": "map",
      "columns": {
        "geo": {
          "name": "State",
          "label": "Location",
          "tooltip": false,
          "dataTable": true
        },
        "primary": {
          "dataTable": true,
          "tooltip": true,
          "prefix": "",
          "suffix": "%",
          "name": "Coverage",
          "label": "Coverage Rate (%)",
          "roundToPlace": 0
        },
        "navigate": {
          "name": "State",
          "tooltip": false,
          "dataTable": false
        },
        "latitude": {
          "name": ""
        },
        "longitude": {
          "name": ""
        }
      },
      "legend": {
        "descriptions": {
          "High": "Coverage ≥ 80%",
          "Medium": "Coverage 60-79%",
          "Low": "Coverage < 60%"
        },
        "specialClasses": [],
        "unified": false,
        "singleColumn": false,
        "singleRow": false,
        "verticalSorted": false,
        "showSpecialClassesLast": false,
        "dynamicDescription": false,
        "type": "equalnumber",
        "numberOfItems": 3,
        "position": "side",
        "title": "",
        "style": "circles",
        "subStyle": "linear blocks",
        "tickRotation": "",
        "singleColumnLegend": false,
        "hideBorder": false,
        "groupBy": "",
        "hide": false
      },
      "filters": [
        {
          "columnName": "Year",
          "label": "Reporting Year",
          "active": 2023,
          "values": [
            2023,
            2024
          ],
          "setBy": "url",
          "filterBy": [
            2023
          ],
          "filterFootnotes": true,
          "id": 1762985265975,
          "filterStyle": "dropdown"
        }
      ],
      "table": {
        "wrapColumns": false,
        "label": "Data Table",
        "expanded": false,
        "limitHeight": false,
        "height": "",
        "caption": "",
        "showDownloadUrl": false,
        "showDataTableLink": true,
        "showDownloadLinkBelow": true,
        "showFullGeoNameInCSV": false,
        "forceDisplay": true,
        "download": true,
        "indexLabel": "",
        "cellMinWidth": "0",
        "collapsible": true
      },
      "tooltips": {
        "appearanceType": "hover",
        "linkLabel": "Learn More",
        "opacity": 90
      },
      "runtime": {
        "editorErrorMessage": []
      },
      "visual": {
        "minBubbleSize": 1,
        "maxBubbleSize": 20,
        "extraBubbleBorder": false,
        "cityStyle": "circle",
        "cityStyleLabel": "",
        "showBubbleZeros": false,
        "additionalCityStyles": [],
        "geoCodeCircleSize": 8
      },
      "mapPosition": {
        "coordinates": [
          0,
          30
        ],
        "zoom": 1
      },
      "map": {
        "layers": [],
        "patterns": []
      },
      "hexMap": {
        "type": "",
        "shapeGroups": [
          {
            "legendTitle": "",
            "legendDescription": "",
            "items": [
              {
                "key": "",
                "shape": "Arrow Up",
                "column": "",
                "operator": "=",
                "value": ""
              }
            ]
          }
        ]
      },
      "filterBehavior": "Filter Change",
      "filterIntro": "",
      "smallMultiples": {
        "mode": "",
        "tileColumn": "",
        "tilesPerRowDesktop": 3,
        "tilesPerRowMobile": 1,
        "tileOrderType": "asc",
        "tileOrder": [],
        "tileTitles": {}
      },
      "markupVariables": [
        {
          "name": "all_categories",
          "columnName": "Category",
          "tag": "{{all_categories}}",
          "conditions": [],
          "addCommas": false
        },
        {
          "name": "high_coverage_states",
          "columnName": "State",
          "tag": "{{high_coverage_states}}",
          "conditions": [
            {
              "columnName": "Category",
              "isOrIsNotEqualTo": "is",
              "value": "High"
            }
          ],
          "addCommas": false
        },
        {
          "name": "medium_coverage_states",
          "columnName": "State",
          "tag": "{{medium_coverage_states}}",
          "conditions": [
            {
              "columnName": "Category",
              "isOrIsNotEqualTo": "is",
              "value": "Medium"
            }
          ],
          "addCommas": false
        },
        {
          "name": "reporting_years",
          "columnName": "Year",
          "tag": "{{reporting_years}}",
          "conditions": [],
          "addCommas": false
        },
        {
          "name": "vaccine_program",
          "columnName": "Program",
          "tag": "{{vaccine_program}}",
          "conditions": [],
          "addCommas": false
        }
      ],
      "enableMarkupVariables": true,
      "title": "Vaccination Coverage Rate by State",
      "showTitle": true,
      "theme": "theme-blue",
      "fontSize": "medium",
      "dataClassification": {
        "numberOfItems": 3,
        "method": "equalnumber"
      },
      "footnotes": {
        "staticFootnotes": [
          {
            "symbol": "*",
            "text": "Coverage categories shown: {{all_categories}}. High coverage states: {{high_coverage_states}}"
          },
          {
            "symbol": "†",
            "text": "Reporting year(s): {{reporting_years}}"
          },
          {
            "text": "Program: {{vaccine_program}}. Medium coverage states: {{medium_coverage_states}}"
          }
        ]
      },
      "version": "4.25.10",
      "migrations": {
        "addColorMigration": true
      },
      "data": [
        {
          "geo": "AL",
          "State": "Alabama",
          "Coverage": 72.5,
          "Year": 2023,
          "Category": "Medium",
          "Program": "Flu Vaccine"
        },
        {
          "geo": "AK",
          "State": "Alaska",
          "Coverage": 68.3,
          "Year": 2023,
          "Category": "Medium",
          "Program": "Flu Vaccine"
        },
        {
          "geo": "AZ",
          "State": "Arizona",
          "Coverage": 75.8,
          "Year": 2023,
          "Category": "Medium",
          "Program": "Flu Vaccine"
        },
        {
          "geo": "CA",
          "State": "California",
          "Coverage": 82.4,
          "Year": 2023,
          "Category": "High",
          "Program": "Flu Vaccine"
        },
        {
          "geo": "CO",
          "State": "Colorado",
          "Coverage": 79.1,
          "Year": 2023,
          "Category": "Medium",
          "Program": "Flu Vaccine"
        },
        {
          "geo": "CT",
          "State": "Connecticut",
          "Coverage": 85.6,
          "Year": 2023,
          "Category": "High",
          "Program": "Flu Vaccine"
        },
        {
          "geo": "FL",
          "State": "Florida",
          "Coverage": 74.2,
          "Year": 2023,
          "Category": "Medium",
          "Program": "Flu Vaccine"
        },
        {
          "geo": "GA",
          "State": "Georgia",
          "Coverage": 70.9,
          "Year": 2023,
          "Category": "Medium",
          "Program": "Flu Vaccine"
        },
        {
          "geo": "IL",
          "State": "Illinois",
          "Coverage": 77.5,
          "Year": 2023,
          "Category": "Medium",
          "Program": "Flu Vaccine"
        },
        {
          "geo": "MA",
          "State": "Massachusetts",
          "Coverage": 87.3,
          "Year": 2023,
          "Category": "High",
          "Program": "Flu Vaccine"
        },
        {
          "geo": "NY",
          "State": "New York",
          "Coverage": 81.2,
          "Year": 2023,
          "Category": "High",
          "Program": "Flu Vaccine"
        },
        {
          "geo": "TX",
          "State": "Texas",
          "Coverage": 69.8,
          "Year": 2023,
          "Category": "Medium",
          "Program": "Flu Vaccine"
        },
        {
          "geo": "WA",
          "State": "Washington",
          "Coverage": 80.5,
          "Year": 2023,
          "Category": "High",
          "Program": "Flu Vaccine"
        },
        {
          "geo": "AL",
          "State": "Alabama",
          "Coverage": 74.8,
          "Year": 2024,
          "Category": "Medium",
          "Program": "Flu Vaccine"
        },
        {
          "geo": "AK",
          "State": "Alaska",
          "Coverage": 70.1,
          "Year": 2024,
          "Category": "Medium",
          "Program": "Flu Vaccine"
        },
        {
          "geo": "AZ",
          "State": "Arizona",
          "Coverage": 78.2,
          "Year": 2024,
          "Category": "Medium",
          "Program": "Flu Vaccine"
        },
        {
          "geo": "CA",
          "State": "California",
          "Coverage": 84.1,
          "Year": 2024,
          "Category": "High",
          "Program": "Flu Vaccine"
        },
        {
          "geo": "CO",
          "State": "Colorado",
          "Coverage": 81.3,
          "Year": 2024,
          "Category": "High",
          "Program": "Flu Vaccine"
        },
        {
          "geo": "CT",
          "State": "Connecticut",
          "Coverage": 87.9,
          "Year": 2024,
          "Category": "High",
          "Program": "Flu Vaccine"
        },
        {
          "geo": "FL",
          "State": "Florida",
          "Coverage": 76.5,
          "Year": 2024,
          "Category": "Medium",
          "Program": "Flu Vaccine"
        },
        {
          "geo": "GA",
          "State": "Georgia",
          "Coverage": 73.2,
          "Year": 2024,
          "Category": "Medium",
          "Program": "Flu Vaccine"
        },
        {
          "geo": "IL",
          "State": "Illinois",
          "Coverage": 79.8,
          "Year": 2024,
          "Category": "Medium",
          "Program": "Flu Vaccine"
        },
        {
          "geo": "MA",
          "State": "Massachusetts",
          "Coverage": 88.6,
          "Year": 2024,
          "Category": "High",
          "Program": "Flu Vaccine"
        },
        {
          "geo": "NY",
          "State": "New York",
          "Coverage": 83.4,
          "Year": 2024,
          "Category": "High",
          "Program": "Flu Vaccine"
        },
        {
          "geo": "TX",
          "State": "Texas",
          "Coverage": 72.1,
          "Year": 2024,
          "Category": "Medium",
          "Program": "Flu Vaccine"
        },
        {
          "geo": "WA",
          "State": "Washington",
          "Coverage": 82.7,
          "Year": 2024,
          "Category": "High",
          "Program": "Flu Vaccine"
        }
      ]
    },
    isEditor: true
  }
}

// Story demonstrating markup variables in footnotes
type StandAloneStory = StoryObj<typeof FootnotesStandAlone>

export const WithMarkupVariables: StandAloneStory = {
  name: 'With Markup Variables',
  render: args => <FootnotesStandAlone {...args} />,
  args: {
    config: {
      staticFootnotes: [
        {
          symbol: '*',
          text: 'Data shown for {{state_name}} with values from {{year}}'
        },
        {
          symbol: '†',
          text: 'The highest value recorded was {{max_value}}'
        },
        {
          text: 'Category A states: {{category_a_states}}'
        }
      ]
    },
    data: [
      { state: 'Alabama', value: 100, year: 2023, category: 'A' },
      { state: 'Alaska', value: 200, year: 2023, category: 'B' },
      { state: 'Arizona', value: 150, year: 2023, category: 'A' },
      { state: 'Arkansas', value: 175, year: 2023, category: 'A' }
    ],
    markupVariables: [
      {
        name: 'state_name',
        columnName: 'state',
        tag: '{{state_name}}',
        conditions: [],
        addCommas: false
      },
      {
        name: 'year',
        columnName: 'year',
        tag: '{{year}}',
        conditions: [],
        addCommas: false
      },
      {
        name: 'max_value',
        columnName: 'value',
        tag: '{{max_value}}',
        conditions: [],
        addCommas: true
      },
      {
        name: 'category_a_states',
        columnName: 'state',
        tag: '{{category_a_states}}',
        conditions: [
          {
            columnName: 'category',
            isOrIsNotEqualTo: 'is',
            value: 'A'
          }
        ],
        addCommas: false
      }
    ],
    enableMarkupVariables: true,
    filters: []
  }
}

export const WithMarkupVariablesDisabled: StandAloneStory = {
  name: 'With Markup Variables Disabled',
  render: args => <FootnotesStandAlone {...args} />,
  args: {
    config: {
      staticFootnotes: [
        {
          symbol: '*',
          text: 'Data shown for {{state_name}} with values from {{year}}'
        }
      ]
    },
    data: [
      { state: 'Alabama', value: 100, year: 2023 },
      { state: 'Alaska', value: 200, year: 2023 }
    ],
    markupVariables: [
      {
        name: 'state_name',
        columnName: 'state',
        tag: '{{state_name}}',
        conditions: [],
        addCommas: false
      },
      {
        name: 'year',
        columnName: 'year',
        tag: '{{year}}',
        conditions: [],
        addCommas: false
      }
    ],
    enableMarkupVariables: false,
    filters: []
  },
}
