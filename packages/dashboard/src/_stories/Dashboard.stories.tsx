import type { Meta, StoryObj } from '@storybook/react-vite'
import { faker } from '@faker-js/faker'
import {
  waitForOptionsToPopulate,
  performAndAssert,
  assertVisualizationRendered,
  waitForPresence
} from '@cdc/core/helpers/testing'
import APIFiltersMapData from './_mock/api-filter-map.json'
import APIFiltersChartData from './_mock/api-filter-chart.json'
import APIFilterErrorConfig from './_mock/api-filter-error.json'
import ExampleConfig_1 from './_mock/dashboard-gallery.json'
import ExampleConfig_2 from './_mock/dashboard-2.json'
import ExampleConfig_3 from './_mock/dashboard_no_filter.json'
import SingleStateDashboardFilters from './_mock/single-state-dashboard-filters.json'
import Dashboard_Filter from './_mock/dashboard-filter.json'
import MultiVizConfig from './_mock/multi-viz.json'
import MultiDashboardConfig from './_mock/multi-dashboards.json'
import Dashboard from '../CdcDashboard'
import StandaloneTable from './_mock/standalone-table.json'
import GroupPivotConfig from './_mock/group-pivot-filter.json'
import PivotFitlerConfig from './_mock/pivot-filter.json'
import { type DashboardConfig as Config } from '../types/DashboardConfig'
import { userEvent, within, expect } from 'storybook/test'
import ToggleExampleConfig from './_mock/toggle-example.json'
import cloneDeep from 'lodash/cloneDeep'
import times from 'lodash/times'
import { footnotesSymbols } from '@cdc/core/helpers/footnoteSymbols'
import FootnotesConfig from '@cdc/core/types/Footnotes'
import { ConfigRow } from '../types/ConfigRow'
import BumpChartConfig from './_mock/bump-chart.json'
import MethodologyConfig from './_mock/methodology.json'
import methodologyAPI from './_mock/methodologyAPI'
import TopSpacing_1 from './_mock/data-bite-dash-test.json'
import TopSpacing_2 from './_mock/data-bite-dash-test_1.json'
import TopSpacing_3 from './_mock/data-bite-dash-test_1_1.json'
import TopSpacing_4 from './_mock/data-bite-dash-test_1_1_1.json'
import CustomOrderNewValues from './_mock/custom-order-new-values.json'
import APIFilterResetConfig from '../../examples/test-api-filter-reset.json'
import CascadingDataFilters from './_mock/filter-cascade.json'
import ParentChildFilters from './_mock/parent-child-filters.json'
import NestedParentChildFilters from './_mock/nested-parent-child-filters.json'
import GalleryDataBiteDashboard from './_mock/gallery-data-bite-dashboard.json'
import TP5TestConfig from './_mock/tp5-test.json'
import LineChartAnglesConfig from './_mock/dashboard-line-chart-angles.json'
import TabSimpleFilterConfig from './_mock/tab-simple-filter.json'

// Dashboard Filter Updates for Ascending, Descending, and Custom Order
import DashboardFilterAsc from './_mock/dashboard-filter-asc.json'
const DashboardFilterDesc = cloneDeep(DashboardFilterAsc)
const DashboardFilterCust = cloneDeep(DashboardFilterAsc)
DashboardFilterDesc.dashboard.sharedFilters[0].order = 'desc'
DashboardFilterCust.dashboard.sharedFilters[0].order = 'cust'

// On DashboardFilterCust change the sharedFilters[0].values and orderedValues to be in a custom order
const customOrder = ['American Samoa', 'Alaska', 'Alabama', 'Arizona', 'Arkansas']
DashboardFilterCust.dashboard.sharedFilters[0].orderedValues = customOrder

const meta: Meta<typeof Dashboard> = {
  title: 'Components/Pages/Dashboard',
  component: Dashboard
}

type Story = StoryObj<typeof Dashboard>

export const Dashboard_Filter_Asc: Story = {
  args: {
    config: DashboardFilterAsc,
    isEditor: false
  }
}

export const Dashboard_Filter_Desc: Story = {
  args: {
    config: DashboardFilterDesc,
    isEditor: false
  }
}

export const Dashboard_Filter_Cust: Story = {
  args: {
    config: DashboardFilterCust,
    isEditor: false
  }
}

export const CustomOrder_NewValues_AutoAppend: Story = {
  args: {
    config: CustomOrderNewValues,
    isEditor: false
  }
}

export const Example_1: Story = {
  args: {
    config: ExampleConfig_1,
    isEditor: false
  }
}

export const Example_2: Story = {
  args: {
    config: ExampleConfig_2,
    isEditor: false
  }
}

export const Example_3: Story = {
  args: {
    config: ExampleConfig_3,
    isEditor: false
  }
}

export const TP5_Test_Dashboard: Story = {
  args: {
    config: TP5TestConfig,
    isEditor: false
  }
}

export const Line_Chart_Angles: Story = {
  args: {
    config: LineChartAnglesConfig,
    isEditor: false
  }
}

export const Bump_Chart_Dashboard: Story = {
  args: {
    config: BumpChartConfig,
    isEditor: false
  }
}

export const Dashboard_Filters: Story = {
  args: {
    config: Dashboard_Filter,
    isEditor: false
  }
}

export const API_Filter_Error: Story = {
  args: {
    config: APIFilterErrorConfig,
    isEditor: false
  }
}

export const StandAloneTable: Story = {
  args: {
    config: StandaloneTable,
    isEditor: false
  }
}

export const ToggleExample: Story = {
  args: {
    config: ToggleExampleConfig,
    isEditor: false
  }
}

export const PivotFilter: Story = {
  args: {
    config: PivotFitlerConfig,
    isEditor: false
  }
}

export const GroupPivotFilter: Story = {
  args: {
    config: GroupPivotConfig,
    isEditor: false
  }
}

export const SingleStateDashboardWithFilters: Story = {
  args: {
    config: SingleStateDashboardFilters,
    isEditor: false
  }
}

faker.seed(123)

const countries = times(5, faker.location.country)
const categories = times(3, val => `category-${val + 1}`)

const data = []
countries.forEach((country, i) => {
  categories.forEach((category, j) => {
    if ((i + j) % 3 === 0) return
    data.push({
      Country: country,
      'Sample Categories': category,
      Data: faker.number.int({ min: 5, max: 50 })
    })
  })
})

const footnoteData = countries.map((country, i) => {
  return { Country: country, symbol: footnotesSymbols[i][0], text: faker.lorem.sentence() }
})

const multiVizData = {
  'valid-world-data.json': { data },
  'footnote-data.json': { data: footnoteData }
}

export const MultiDashboard: Story = {
  args: {
    config: MultiDashboardConfig,
    isEditor: false
  }
}

const FNrows: ConfigRow[] = [{ ...MultiVizConfig.rows[0], footnotesId: 'footnote123' }]
const footnoteConfig: Partial<FootnotesConfig> = {
  dataKey: 'footnote-data.json',
  dynamicFootnotes: { symbolColumn: 'symbol', textColumn: 'text' },
  staticFootnotes: [{ symbol: '**', text: 'This is a static Footnote' }]
}
const FNViz = { ...MultiVizConfig.visualizations, footnote123: footnoteConfig }
export const Footnotes: Story = {
  args: {
    config: { ...MultiVizConfig, datasets: multiVizData, rows: FNrows, visualizations: FNViz },
    isEditor: false
  }
}

const EqualHeightMixedVizConfig = {
  dashboard: {
    theme: 'theme-blue',
    sharedFilters: [
      {
        key: 'Year',
        type: 'datafilter',
        columnName: 'Year',
        showDropdown: true,
        setBy: 'chart1699383531543',
        usedBy: ['map1699383540561'],
        resetLabel: 'Reset',
        values: ['2019', '2020', '2021'],
        tier: 1,
        orderedValues: ['2019', '2020', '2021']
      }
    ],
    titleStyle: 'small'
  },
  rows: [
    {
      columns: [
        {
          width: 12,
          widget: 'legacySharedFilters'
        }
      ]
    },
    {
      equalHeight: true,
      columns: [
        {
          width: 4,
          widget: 'chart1699383531543'
        },
        {
          width: 4,
          widget: 'map1699383540561'
        },
        {
          width: 4,
          widget: 'equal-height-data-bite-story'
        }
      ]
    }
  ],
  visualizations: {
    chart1699383531543: {
      annotations: [],
      allowLineToBarGraph: '__​undefined__',
      type: 'chart',
      debugSvg: false,
      chartMessage: {
        noData: 'No Data Available'
      },
      title: '',
      titleStyle: 'small',
      showTitle: true,
      showDownloadMediaButton: false,
      theme: 'theme-blue',
      animate: false,
      lineDatapointStyle: 'hover',
      lineDatapointColor: 'Same as Line',
      barHasBorder: 'false',
      isLollipopChart: false,
      lollipopShape: 'circle',
      lollipopColorStyle: 'two-tone',
      visualizationSubType: 'regular',
      barStyle: '',
      roundingStyle: 'standard',
      tipRounding: 'top',
      isResponsiveTicks: false,
      general: {
        annotationDropdownText: 'Annotations',
        showMissingDataLabel: true,
        showSuppressedSymbol: true,
        showZeroValueData: true,
        hideNullValue: true,
        palette: {
          name: 'qualitative_bold',
          version: '1.0'
        },
        useIntelligentLineChartLabels: false
      },
      padding: {
        left: 5,
        right: 5
      },
      preliminaryData: [],
      yAxis: {
        hideAxis: false,
        displayNumbersOnBar: false,
        hideLabel: false,
        hideTicks: false,
        size: 50,
        gridLines: false,
        enablePadding: false,
        min: '',
        max: '',
        labelColor: '#1c1d1f',
        tickLabelColor: '#1c1d1f',
        tickColor: '#1c1d1f',
        rightHideAxis: true,
        rightAxisSize: 0,
        rightLabel: '',
        rightLabelOffsetSize: 0,
        rightAxisLabelColor: '#1c1d1f',
        rightAxisTickLabelColor: '#1c1d1f',
        rightAxisTickColor: '#1c1d1f',
        numTicks: '',
        axisPadding: 0,
        scalePadding: 10,
        tickRotation: 0,
        anchors: [],
        shoMissingDataLabel: true,
        showMissingDataLine: true,
        categories: []
      },
      boxplot: {
        plots: [],
        borders: 'true',
        plotOutlierValues: false,
        plotNonOutlierValues: true,
        labels: {
          q1: 'Lower Quartile',
          q2: 'q2',
          q3: 'Upper Quartile',
          q4: 'q4',
          minimum: 'Minimum',
          maximum: 'Maximum',
          mean: 'Mean',
          median: 'Median',
          sd: 'Standard Deviation',
          iqr: 'Interquartile Range',
          total: 'Total',
          outliers: 'Outliers',
          values: 'Values',
          lowerBounds: 'Lower Bounds',
          upperBounds: 'Upper Bounds'
        },
        firstQuartilePercentage: 25,
        thirdQuartilePercentage: 75,
        boxWidthPercentage: 40,
        legend: {
          showHowToReadText: false,
          howToReadText: ''
        }
      },
      topAxis: {
        hasLine: false
      },
      isLegendValue: false,
      barThickness: 0.35,
      barHeight: 25,
      barSpace: 15,
      heights: {
        vertical: 300,
        horizontal: 750
      },
      xAxis: {
        sortDates: false,
        anchors: [],
        type: 'categorical',
        showTargetLabel: true,
        targetLabel: 'Target',
        hideAxis: false,
        hideLabel: false,
        hideTicks: false,
        size: 75,
        tickRotation: 0,
        min: '',
        max: '',
        labelColor: '#1c1d1f',
        tickLabelColor: '#1c1d1f',
        tickColor: '#1c1d1f',
        numTicks: '',
        labelOffset: 65,
        axisPadding: 0,
        target: 0,
        maxTickRotation: 0,
        padding: 5,
        showYearsOnce: false,
        sortByRecentDate: false,
        brushActive: false,
        brushDefaultRecentDateCount: '__​undefined__',
        dataKey: 'Year',
        axisBBox: 29.360000610351562,
        tickWidthMax: 39
      },
      table: {
        label: 'Data Table',
        expanded: true,
        limitHeight: false,
        height: '',
        caption: '',
        showDownloadUrl: false,
        showDataTableLink: true,
        showDownloadLinkBelow: true,
        indexLabel: '',
        download: false,
        showVertical: true,
        dateDisplayFormat: '',
        showMissingDataLabel: true,
        showSuppressedSymbol: true,
        collapsible: true,
        show: false,
        sharedFilterColumns: []
      },
      orientation: 'vertical',
      color: 'qualitative-bold',
      columns: {},
      legend: {
        hide: false,
        behavior: 'isolate',
        axisAlign: true,
        singleRow: false,
        colorCode: '',
        reverseLabelOrder: false,
        description: '',
        dynamicLegend: false,
        dynamicLegendDefaultText: 'Show All',
        dynamicLegendItemLimit: 5,
        dynamicLegendItemLimitMessage: 'Dynamic Legend Item Limit Hit.',
        dynamicLegendChartMessage: 'Select Options from the Legend',
        label: '',
        lineMode: false,
        verticalSorted: false,
        highlightOnHover: false,
        hideSuppressedLabels: false,
        hideSuppressionLink: false,
        seriesHighlight: [],
        style: 'circles',
        subStyle: 'linear blocks',
        groupBy: '',
        shape: 'circle',
        tickRotation: '',
        order: 'dataColumn',
        hideBorder: {
          side: false,
          topBottom: true
        },
        position: 'right',
        orderedValues: [],
        patterns: {},
        patternField: '',
        unified: true
      },
      smallMultiples: {
        mode: '',
        tileColumn: '',
        tilesPerRowDesktop: 3,
        tilesPerRowMobile: 1,
        tileOrder: [],
        tileOrderType: 'asc',
        tileTitles: {},
        independentYAxis: false,
        colorMode: 'same',
        synchronizedTooltips: true,
        showAreaUnderLine: true
      },
      exclusions: {
        active: false,
        keys: []
      },
      twoColor: {
        palette: 'monochrome-1',
        isPaletteReversed: false
      },
      labels: false,
      dataFormat: {
        commas: false,
        prefix: '',
        suffix: '',
        abbreviated: false,
        bottomSuffix: '',
        bottomPrefix: '',
        bottomAbbreviated: false
      },
      filters: [
        {
          filterStyle: 'dropdown',
          columnName: 'Location',
          label: 'Location',
          order: 'asc',
          id: 1772475767610
        },
        {
          filterStyle: 'dropdown',
          columnName: 'Type',
          label: 'Type',
          order: 'asc',
          id: 1772475767611
        }
      ],
      confidenceKeys: {},
      visual: {
        border: false,
        borderColorTheme: false,
        accent: false,
        background: false,
        hideBackgroundColor: false,
        verticalHoverLine: false,
        horizontalHoverLine: false,
        lineDatapointSymbol: 'none',
        maximumShapeAmount: 7
      },
      useLogScale: false,
      filterBehavior: 'Filter Change',
      highlightedBarValues: [],
      series: [
        {
          dataKey: 'Amount',
          type: 'Bar',
          axis: 'Left',
          tooltip: true
        }
      ],
      tooltips: {
        opacity: 90,
        singleSeries: false,
        dateDisplayFormat: ''
      },
      forestPlot: {
        startAt: 0,
        colors: {
          line: '',
          shape: ''
        },
        lineOfNoEffect: {
          show: true
        },
        type: '',
        pooledResult: {
          diamondHeight: 5,
          column: ''
        },
        estimateField: '',
        estimateRadius: '',
        shape: '',
        rowHeight: 20,
        description: {
          show: true,
          text: 'description',
          location: 0
        },
        result: {
          show: true,
          text: 'result',
          location: 100
        },
        radius: {
          min: 1,
          max: 8,
          scalingColumn: ''
        },
        regression: {
          lower: 0,
          upper: 0,
          estimateField: 0
        },
        leftWidthOffset: 0,
        rightWidthOffset: 0,
        showZeroLine: false,
        leftLabel: '',
        rightLabel: '',
        width: 'auto',
        lowerCiField: '',
        upperCiField: ''
      },
      area: {
        isStacked: false
      },
      radar: {
        gridRings: 5,
        showGridRings: true,
        gridRingStyle: 'polygons',
        scaleMin: 0,
        scaleMax: '',
        fillOpacity: 0.3,
        showPoints: true,
        pointRadius: 4,
        strokeWidth: 2,
        axisLabelOffset: 15
      },
      sankey: {
        title: {
          defaultColor: 'black'
        },
        iterations: 1,
        rxValue: 0.9,
        overallSize: {
          width: 900,
          height: 700
        },
        margin: {
          margin_y: 25,
          margin_x: 0
        },
        nodeSize: {
          nodeWidth: 26,
          nodeHeight: 40
        },
        nodePadding: 55,
        nodeFontColor: 'black',
        nodeColor: {
          default: '#ff8500',
          inactive: '#808080'
        },
        linkColor: {
          default: '#ffc900',
          inactive: '#D3D3D3'
        },
        opacity: {
          nodeOpacityDefault: 1,
          nodeOpacityInactive: 0.1,
          LinkOpacityDefault: 1,
          LinkOpacityInactive: 0.1
        },
        storyNodeFontColor: '#006778',
        storyNodeText: [],
        nodeValueStyle: {
          textBefore: '(',
          textAfter: ')'
        },
        data: []
      },
      markupVariables: [],
      enableMarkupVariables: false,
      showChartBrush: false,
      fontSize: 'medium',
      isPaletteReversed: false,
      openModal: false,
      uid: 'chart1699383531543',
      visualizationType: 'Bar',
      dataKey: 'dashboard_aggregate_example_state_type (1).csv',
      dataDescription: {
        horizontal: false,
        series: false
      },
      validated: 4.23,
      dynamicMarginTop: 0,
      locale: 'en-US',
      showEditorPanel: false,
      dashboardFilters: [
        {
          columnName: 'Year',
          active: '2021',
          values: ['2019', '2020', '2021']
        }
      ]
    },
    map1699383540561: {
      general: {
        geoType: 'us',
        geoBorderColor: 'darkGray',
        headerColor: 'theme-blue',
        title: '',
        showTitle: true,
        showSidebar: true,
        showDownloadMediaButton: false,
        displayAsHex: false,
        displayStateLabels: false,
        territoriesLabel: 'Territories',
        territoriesAlwaysShow: false,
        language: 'en',
        geoLabelOverride: '',
        hasRegions: false,
        fullBorder: false,
        type: 'data',
        convertFipsCodes: true,
        palette: {
          isReversed: false,
          name: 'sequential_pink_purple',
          version: '1.0'
        },
        allowMapZoom: true,
        hideGeoColumnInTooltip: false,
        hidePrimaryColumnInTooltip: false,
        statesPicked: [
          {
            fipsCode: '01',
            stateName: 'Alabama'
          }
        ],
        noDataMessage: '__​undefined__',
        titleStyle: 'small'
      },
      type: 'map',
      columns: {
        geo: {
          name: 'Location',
          label: 'Location',
          tooltip: false,
          dataTable: true
        },
        primary: {
          dataTable: true,
          tooltip: true,
          prefix: '',
          suffix: '',
          name: 'Amount',
          label: ''
        },
        navigate: {
          name: ''
        },
        latitude: {
          name: ''
        },
        longitude: {
          name: ''
        }
      },
      legend: {
        descriptions: {},
        specialClasses: [],
        unified: false,
        singleColumn: false,
        singleRow: false,
        verticalSorted: false,
        showSpecialClassesLast: false,
        dynamicDescription: false,
        type: 'equalnumber',
        numberOfItems: 3,
        position: 'side',
        title: 'Legend'
      },
      filters: [
        {
          label: 'Type',
          columnName: 'Type',
          id: 1772475767610
        }
      ],
      table: {
        label: 'Data Table',
        expanded: false,
        limitHeight: false,
        height: '',
        caption: '',
        showDownloadUrl: false,
        showDataTableLink: true,
        showFullGeoNameInCSV: false,
        forceDisplay: true,
        download: false,
        indexLabel: ''
      },
      tooltips: {
        appearanceType: 'hover',
        linkLabel: 'Learn More',
        capitalizeLabels: true,
        opacity: 90
      },
      visual: {
        minBubbleSize: 1,
        maxBubbleSize: 20,
        extraBubbleBorder: false,
        cityStyle: 'circle',
        geoCodeCircleSize: 2,
        showBubbleZeros: false
      },
      mapPosition: {
        coordinates: [0, 30],
        zoom: 1
      },
      map: {
        layers: []
      },
      hexMap: {
        type: '',
        shapeGroups: [
          {
            legendTitle: '',
            legendDescription: '',
            items: [
              {
                key: '',
                shape: 'Arrow up',
                column: '',
                operator: '=',
                value: ''
              }
            ]
          }
        ]
      },
      filterBehavior: 'Filter Change',
      openModal: false,
      uid: 'map1699383540561',
      dataKey: 'dashboard_aggregate_example_state_type (1).csv',
      dataDescription: {
        horizontal: false,
        series: false
      },
      validated: 4.23,
      locale: 'en-US'
    },
    runtime: {
      editorErrorMessage: ['No data'],
      locale: 'en-US'
    },
    'equal-height-data-bite-story': {
      type: 'data-bite',
      dataBite: '',
      dataFunction: 'Mean (Average)',
      dataColumn: 'Amount',
      bitePosition: 'Top',
      biteFontSize: 24,
      fontSize: 'medium',
      imageUrl: '',
      biteBody:
        '<span style="font-size: 20px;">Long-form data bite content for equal-height validation.</span><br>This intentionally verbose text creates a taller card so the row can demonstrate that chart, map, and data bite containers normalize to the same height when equal height is enabled.',
      prefix: '',
      suffix: '',
      dataFormat: {
        roundToPlace: 0,
        commas: true,
        prefix: '',
        suffix: ''
      },
      biteStyle: 'title',
      filters: [],
      subtext: 'Citation for Source ',
      title: '',
      theme: 'theme-blue',
      shadow: true,
      uid: 'equal-height-data-bite-story',
      visualizationType: 'data-bite',
      locale: 'en-US',
      showEditorPanel: false
    },
    legacySharedFilters: {
      type: 'dashboardFilters',
      visualizationType: 'dashboardFilters',
      sharedFilterIndexes: [0],
      filterBehavior: 'Filter Change',
      titleStyle: 'small',
      locale: 'en-US',
      uid: 'legacySharedFilters'
    }
  },
  table: {
    label: 'Data Table',
    show: true,
    showDownloadUrl: false,
    showVertical: true
  },
  type: 'dashboard',
  uuid: 1699383537668,
  runtime: {},
  version: '4.26.3',
  migrations: {
    addColorMigration: true
  },
  general: {
    palette: {
      version: '1.0',
      backups: [
        {
          name: '__​undefined__',
          version: '1.0',
          isReversed: '__​undefined__'
        }
      ]
    }
  },
  locale: 'en-US',
  datasets: {
    'dashboard_aggregate_example_state_type (1).csv': {
      data: [
        {
          Location: 'Alaska',
          Year: '2019',
          Type: 'Federal',
          Amount: 1377
        },
        {
          Location: 'Alaska',
          Year: '2019',
          Type: 'Local',
          Amount: 1613
        },
        {
          Location: 'Alaska',
          Year: '2019',
          Type: 'State',
          Amount: 1495
        },
        {
          Location: 'Alaska',
          Year: '2020',
          Type: 'Federal',
          Amount: 1377
        },
        {
          Location: 'Alaska',
          Year: '2020',
          Type: 'Local',
          Amount: 1613
        },
        {
          Location: 'Alaska',
          Year: '2020',
          Type: 'State',
          Amount: 1495
        },
        {
          Location: 'Alaska',
          Year: '2021',
          Type: 'Federal',
          Amount: 1436
        },
        {
          Location: 'Alaska',
          Year: '2021',
          Type: 'Local',
          Amount: 1672
        },
        {
          Location: 'Alaska',
          Year: '2021',
          Type: 'State',
          Amount: 1554
        },
        {
          Location: 'Alabama',
          Year: '2019',
          Type: 'Federal',
          Amount: 1375
        },
        {
          Location: 'Alabama',
          Year: '2019',
          Type: 'Local',
          Amount: 1611
        },
        {
          Location: 'Alabama',
          Year: '2019',
          Type: 'State',
          Amount: 1493
        },
        {
          Location: 'Alabama',
          Year: '2020',
          Type: 'Federal',
          Amount: 1375
        },
        {
          Location: 'Alabama',
          Year: '2020',
          Type: 'Local',
          Amount: 1611
        },
        {
          Location: 'Alabama',
          Year: '2020',
          Type: 'State',
          Amount: 1493
        },
        {
          Location: 'Alabama',
          Year: '2021',
          Type: 'Federal',
          Amount: 1434
        },
        {
          Location: 'Alabama',
          Year: '2021',
          Type: 'Local',
          Amount: 1670
        },
        {
          Location: 'Alabama',
          Year: '2021',
          Type: 'State',
          Amount: 1552
        },
        {
          Location: 'Arkansas',
          Year: '2019',
          Type: 'Federal',
          Amount: 1398
        },
        {
          Location: 'Arkansas',
          Year: '2019',
          Type: 'Local',
          Amount: 1634
        },
        {
          Location: 'Arkansas',
          Year: '2019',
          Type: 'State',
          Amount: 1516
        },
        {
          Location: 'Arkansas',
          Year: '2020',
          Type: 'Federal',
          Amount: 1398
        },
        {
          Location: 'Arkansas',
          Year: '2020',
          Type: 'Local',
          Amount: 1634
        },
        {
          Location: 'Arkansas',
          Year: '2020',
          Type: 'State',
          Amount: 1516
        },
        {
          Location: 'Arkansas',
          Year: '2021',
          Type: 'Federal',
          Amount: 1457
        },
        {
          Location: 'Arkansas',
          Year: '2021',
          Type: 'Local',
          Amount: 1693
        },
        {
          Location: 'Arkansas',
          Year: '2021',
          Type: 'State',
          Amount: 1575
        },
        {
          Location: 'American Samoa',
          Year: '2019',
          Type: 'Federal',
          Amount: 1388
        },
        {
          Location: 'American Samoa',
          Year: '2019',
          Type: 'Local',
          Amount: 1624
        },
        {
          Location: 'American Samoa',
          Year: '2019',
          Type: 'State',
          Amount: 1506
        },
        {
          Location: 'American Samoa',
          Year: '2020',
          Type: 'Federal',
          Amount: 1388
        },
        {
          Location: 'American Samoa',
          Year: '2020',
          Type: 'Local',
          Amount: 1624
        },
        {
          Location: 'American Samoa',
          Year: '2020',
          Type: 'State',
          Amount: 1506
        },
        {
          Location: 'American Samoa',
          Year: '2021',
          Type: 'Federal',
          Amount: 1447
        },
        {
          Location: 'American Samoa',
          Year: '2021',
          Type: 'Local',
          Amount: 1683
        },
        {
          Location: 'American Samoa',
          Year: '2021',
          Type: 'State',
          Amount: 1565
        },
        {
          Location: 'Arizona',
          Year: '2019',
          Type: 'Federal',
          Amount: 1401
        },
        {
          Location: 'Arizona',
          Year: '2019',
          Type: 'Local',
          Amount: 1637
        },
        {
          Location: 'Arizona',
          Year: '2019',
          Type: 'State',
          Amount: 1519
        },
        {
          Location: 'Arizona',
          Year: '2020',
          Type: 'Federal',
          Amount: 1401
        },
        {
          Location: 'Arizona',
          Year: '2020',
          Type: 'Local',
          Amount: 1637
        },
        {
          Location: 'Arizona',
          Year: '2020',
          Type: 'State',
          Amount: 1519
        },
        {
          Location: 'Arizona',
          Year: '2021',
          Type: 'Federal',
          Amount: 1460
        },
        {
          Location: 'Arizona',
          Year: '2021',
          Type: 'Local',
          Amount: 1696
        },
        {
          Location: 'Arizona',
          Year: '2021',
          Type: 'State',
          Amount: 1578
        },
        {
          Location: 'California',
          Year: '2019',
          Type: 'Federal',
          Amount: 1381
        },
        {
          Location: 'California',
          Year: '2019',
          Type: 'Local',
          Amount: 1617
        },
        {
          Location: 'California',
          Year: '2019',
          Type: 'State',
          Amount: 1499
        },
        {
          Location: 'California',
          Year: '2020',
          Type: 'Federal',
          Amount: 1381
        },
        {
          Location: 'California',
          Year: '2020',
          Type: 'Local',
          Amount: 1617
        },
        {
          Location: 'California',
          Year: '2020',
          Type: 'State',
          Amount: 1499
        },
        {
          Location: 'California',
          Year: '2021',
          Type: 'Federal',
          Amount: 1440
        },
        {
          Location: 'California',
          Year: '2021',
          Type: 'Local',
          Amount: 1676
        },
        {
          Location: 'California',
          Year: '2021',
          Type: 'State',
          Amount: 1558
        },
        {
          Location: 'Colorado',
          Year: '2019',
          Type: 'Federal',
          Amount: 1369
        },
        {
          Location: 'Colorado',
          Year: '2019',
          Type: 'Local',
          Amount: 1605
        },
        {
          Location: 'Colorado',
          Year: '2019',
          Type: 'State',
          Amount: 1487
        },
        {
          Location: 'Colorado',
          Year: '2020',
          Type: 'Federal',
          Amount: 1369
        },
        {
          Location: 'Colorado',
          Year: '2020',
          Type: 'Local',
          Amount: 1605
        },
        {
          Location: 'Colorado',
          Year: '2020',
          Type: 'State',
          Amount: 1487
        },
        {
          Location: 'Colorado',
          Year: '2021',
          Type: 'Federal',
          Amount: 1428
        },
        {
          Location: 'Colorado',
          Year: '2021',
          Type: 'Local',
          Amount: 1664
        },
        {
          Location: 'Colorado',
          Year: '2021',
          Type: 'State',
          Amount: 1546
        },
        {
          Location: 'Connecticut',
          Year: '2019',
          Type: 'Federal',
          Amount: 1403
        },
        {
          Location: 'Connecticut',
          Year: '2019',
          Type: 'Local',
          Amount: 1639
        },
        {
          Location: 'Connecticut',
          Year: '2019',
          Type: 'State',
          Amount: 1521
        },
        {
          Location: 'Connecticut',
          Year: '2020',
          Type: 'Federal',
          Amount: 1403
        },
        {
          Location: 'Connecticut',
          Year: '2020',
          Type: 'Local',
          Amount: 1639
        },
        {
          Location: 'Connecticut',
          Year: '2020',
          Type: 'State',
          Amount: 1521
        },
        {
          Location: 'Connecticut',
          Year: '2021',
          Type: 'Federal',
          Amount: 1462
        },
        {
          Location: 'Connecticut',
          Year: '2021',
          Type: 'Local',
          Amount: 1698
        },
        {
          Location: 'Connecticut',
          Year: '2021',
          Type: 'State',
          Amount: 1580
        },
        {
          Location: 'District of Columbia',
          Year: '2019',
          Type: 'Federal',
          Amount: 1400
        },
        {
          Location: 'District of Columbia',
          Year: '2019',
          Type: 'Local',
          Amount: 1636
        },
        {
          Location: 'District of Columbia',
          Year: '2019',
          Type: 'State',
          Amount: 1518
        },
        {
          Location: 'District of Columbia',
          Year: '2020',
          Type: 'Federal',
          Amount: 1400
        },
        {
          Location: 'District of Columbia',
          Year: '2020',
          Type: 'Local',
          Amount: 1636
        },
        {
          Location: 'District of Columbia',
          Year: '2020',
          Type: 'State',
          Amount: 1518
        },
        {
          Location: 'District of Columbia',
          Year: '2021',
          Type: 'Federal',
          Amount: 1459
        },
        {
          Location: 'District of Columbia',
          Year: '2021',
          Type: 'Local',
          Amount: 1695
        },
        {
          Location: 'District of Columbia',
          Year: '2021',
          Type: 'State',
          Amount: 1577
        },
        {
          Location: 'Delaware\t',
          Year: '2019',
          Type: 'Federal',
          Amount: '1384'
        },
        {
          Location: 'Delaware\t',
          Year: '2019',
          Type: 'Local',
          Amount: '1620'
        },
        {
          Location: 'Delaware\t',
          Year: '2019',
          Type: 'State',
          Amount: '1502'
        },
        {
          Location: 'Delaware\t',
          Year: '2020',
          Type: 'Federal',
          Amount: '1384'
        },
        {
          Location: 'Delaware\t',
          Year: '2020',
          Type: 'Local',
          Amount: '1620'
        },
        {
          Location: 'Delaware\t',
          Year: '2020',
          Type: 'State',
          Amount: '1502'
        },
        {
          Location: 'Delaware\t',
          Year: '2021',
          Type: 'Federal',
          Amount: '1443'
        },
        {
          Location: 'Delaware\t',
          Year: '2021',
          Type: 'Local',
          Amount: '1679'
        },
        {
          Location: 'Delaware\t',
          Year: '2021',
          Type: 'State',
          Amount: '1561'
        },
        {
          Location: 'Florida\t',
          Year: '2019',
          Type: 'Federal',
          Amount: '1387'
        },
        {
          Location: 'Florida\t',
          Year: '2019',
          Type: 'Local',
          Amount: '1623'
        },
        {
          Location: 'Florida\t',
          Year: '2019',
          Type: 'State',
          Amount: '1505'
        },
        {
          Location: 'Florida\t',
          Year: '2020',
          Type: 'Federal',
          Amount: '1387'
        },
        {
          Location: 'Florida\t',
          Year: '2020',
          Type: 'Local',
          Amount: '1623'
        },
        {
          Location: 'Florida\t',
          Year: '2020',
          Type: 'State',
          Amount: '1505'
        },
        {
          Location: 'Florida\t',
          Year: '2021',
          Type: 'Federal',
          Amount: '1446'
        },
        {
          Location: 'Florida\t',
          Year: '2021',
          Type: 'Local',
          Amount: '1682'
        },
        {
          Location: 'Florida\t',
          Year: '2021',
          Type: 'State',
          Amount: '1564'
        },
        {
          Location: 'Georgia\t',
          Year: '2019',
          Type: 'Federal',
          Amount: '1365'
        },
        {
          Location: 'Georgia\t',
          Year: '2019',
          Type: 'Local',
          Amount: '1601'
        },
        {
          Location: 'Georgia\t',
          Year: '2019',
          Type: 'State',
          Amount: '1483'
        },
        {
          Location: 'Georgia\t',
          Year: '2020',
          Type: 'Federal',
          Amount: '1365'
        },
        {
          Location: 'Georgia\t',
          Year: '2020',
          Type: 'Local',
          Amount: '1601'
        },
        {
          Location: 'Georgia\t',
          Year: '2020',
          Type: 'State',
          Amount: '1483'
        },
        {
          Location: 'Georgia\t',
          Year: '2021',
          Type: 'Federal',
          Amount: '1424'
        },
        {
          Location: 'Georgia\t',
          Year: '2021',
          Type: 'Local',
          Amount: '1660'
        },
        {
          Location: 'Georgia\t',
          Year: '2021',
          Type: 'State',
          Amount: '1542'
        },
        {
          Location: 'Guam',
          Year: '2019',
          Type: 'Federal',
          Amount: 1356
        },
        {
          Location: 'Guam',
          Year: '2019',
          Type: 'Local',
          Amount: 1592
        },
        {
          Location: 'Guam',
          Year: '2019',
          Type: 'State',
          Amount: 1474
        },
        {
          Location: 'Guam',
          Year: '2020',
          Type: 'Federal',
          Amount: 1356
        },
        {
          Location: 'Guam',
          Year: '2020',
          Type: 'Local',
          Amount: 1592
        },
        {
          Location: 'Guam',
          Year: '2020',
          Type: 'State',
          Amount: 1474
        },
        {
          Location: 'Guam',
          Year: '2021',
          Type: 'Federal',
          Amount: 1415
        },
        {
          Location: 'Guam',
          Year: '2021',
          Type: 'Local',
          Amount: 1651
        },
        {
          Location: 'Guam',
          Year: '2021',
          Type: 'State',
          Amount: 1533
        },
        {
          Location: 'Hawaii\t',
          Year: '2019',
          Type: 'Federal',
          Amount: '1362'
        },
        {
          Location: 'Hawaii\t',
          Year: '2019',
          Type: 'Local',
          Amount: '1598'
        },
        {
          Location: 'Hawaii\t',
          Year: '2019',
          Type: 'State',
          Amount: '1480'
        },
        {
          Location: 'Hawaii\t',
          Year: '2020',
          Type: 'Federal',
          Amount: '1362'
        },
        {
          Location: 'Hawaii\t',
          Year: '2020',
          Type: 'Local',
          Amount: '1598'
        },
        {
          Location: 'Hawaii\t',
          Year: '2020',
          Type: 'State',
          Amount: '1480'
        },
        {
          Location: 'Hawaii\t',
          Year: '2021',
          Type: 'Federal',
          Amount: '1421'
        },
        {
          Location: 'Hawaii\t',
          Year: '2021',
          Type: 'Local',
          Amount: '1657'
        },
        {
          Location: 'Hawaii\t',
          Year: '2021',
          Type: 'State',
          Amount: '1539'
        },
        {
          Location: 'Iowa',
          Year: '2019',
          Type: 'Federal',
          Amount: 1394
        },
        {
          Location: 'Iowa',
          Year: '2019',
          Type: 'Local',
          Amount: 1630
        },
        {
          Location: 'Iowa',
          Year: '2019',
          Type: 'State',
          Amount: 1512
        },
        {
          Location: 'Iowa',
          Year: '2020',
          Type: 'Federal',
          Amount: 1394
        },
        {
          Location: 'Iowa',
          Year: '2020',
          Type: 'Local',
          Amount: 1630
        },
        {
          Location: 'Iowa',
          Year: '2020',
          Type: 'State',
          Amount: 1512
        },
        {
          Location: 'Iowa',
          Year: '2021',
          Type: 'Federal',
          Amount: 1453
        },
        {
          Location: 'Iowa',
          Year: '2021',
          Type: 'Local',
          Amount: 1689
        },
        {
          Location: 'Iowa',
          Year: '2021',
          Type: 'State',
          Amount: 1571
        },
        {
          Location: 'Idaho',
          Year: '2019',
          Type: 'Federal',
          Amount: 1374
        },
        {
          Location: 'Idaho',
          Year: '2019',
          Type: 'Local',
          Amount: 1610
        },
        {
          Location: 'Idaho',
          Year: '2019',
          Type: 'State',
          Amount: 1492
        },
        {
          Location: 'Idaho',
          Year: '2020',
          Type: 'Federal',
          Amount: 1374
        },
        {
          Location: 'Idaho',
          Year: '2020',
          Type: 'Local',
          Amount: 1610
        },
        {
          Location: 'Idaho',
          Year: '2020',
          Type: 'State',
          Amount: 1492
        },
        {
          Location: 'Idaho',
          Year: '2021',
          Type: 'Federal',
          Amount: 1433
        },
        {
          Location: 'Idaho',
          Year: '2021',
          Type: 'Local',
          Amount: 1669
        },
        {
          Location: 'Idaho',
          Year: '2021',
          Type: 'State',
          Amount: 1551
        },
        {
          Location: 'Illinois\t',
          Year: '2019',
          Type: 'Federal',
          Amount: '1402'
        },
        {
          Location: 'Illinois\t',
          Year: '2019',
          Type: 'Local',
          Amount: '1638'
        },
        {
          Location: 'Illinois\t',
          Year: '2019',
          Type: 'State',
          Amount: '1520'
        },
        {
          Location: 'Illinois\t',
          Year: '2020',
          Type: 'Federal',
          Amount: '1402'
        },
        {
          Location: 'Illinois\t',
          Year: '2020',
          Type: 'Local',
          Amount: '1638'
        },
        {
          Location: 'Illinois\t',
          Year: '2020',
          Type: 'State',
          Amount: '1520'
        },
        {
          Location: 'Illinois\t',
          Year: '2021',
          Type: 'Federal',
          Amount: '1461'
        },
        {
          Location: 'Illinois\t',
          Year: '2021',
          Type: 'Local',
          Amount: '1697'
        },
        {
          Location: 'Illinois\t',
          Year: '2021',
          Type: 'State',
          Amount: '1579'
        },
        {
          Location: 'Indiana\t',
          Year: '2019',
          Type: 'Federal',
          Amount: '1404'
        },
        {
          Location: 'Indiana\t',
          Year: '2019',
          Type: 'Local',
          Amount: '1640'
        },
        {
          Location: 'Indiana\t',
          Year: '2019',
          Type: 'State',
          Amount: '1522'
        },
        {
          Location: 'Indiana\t',
          Year: '2020',
          Type: 'Federal',
          Amount: '1404'
        },
        {
          Location: 'Indiana\t',
          Year: '2020',
          Type: 'Local',
          Amount: '1640'
        },
        {
          Location: 'Indiana\t',
          Year: '2020',
          Type: 'State',
          Amount: '1522'
        },
        {
          Location: 'Indiana\t',
          Year: '2021',
          Type: 'Federal',
          Amount: '1463'
        },
        {
          Location: 'Indiana\t',
          Year: '2021',
          Type: 'Local',
          Amount: '1699'
        },
        {
          Location: 'Indiana\t',
          Year: '2021',
          Type: 'State',
          Amount: '1581'
        },
        {
          Location: 'Kansas\t',
          Year: '2019',
          Type: 'Federal',
          Amount: '1367'
        },
        {
          Location: 'Kansas\t',
          Year: '2019',
          Type: 'Local',
          Amount: '1603'
        },
        {
          Location: 'Kansas\t',
          Year: '2019',
          Type: 'State',
          Amount: '1485'
        },
        {
          Location: 'Kansas\t',
          Year: '2020',
          Type: 'Federal',
          Amount: '1367'
        },
        {
          Location: 'Kansas\t',
          Year: '2020',
          Type: 'Local',
          Amount: '1603'
        },
        {
          Location: 'Kansas\t',
          Year: '2020',
          Type: 'State',
          Amount: '1485'
        },
        {
          Location: 'Kansas',
          Year: '2021',
          Type: 'Federal',
          Amount: 1426
        },
        {
          Location: 'Kansas',
          Year: '2021',
          Type: 'Local',
          Amount: 1662
        },
        {
          Location: 'Kansas',
          Year: '2021',
          Type: 'State',
          Amount: 1544
        },
        {
          Location: 'Kentucky',
          Year: '2019',
          Type: 'Federal',
          Amount: 1359
        },
        {
          Location: 'Kentucky',
          Year: '2019',
          Type: 'Local',
          Amount: 1595
        },
        {
          Location: 'Kentucky',
          Year: '2019',
          Type: 'State',
          Amount: 1477
        },
        {
          Location: 'Kentucky',
          Year: '2020',
          Type: 'Federal',
          Amount: 1359
        },
        {
          Location: 'Kentucky',
          Year: '2020',
          Type: 'Local',
          Amount: 1595
        },
        {
          Location: 'Kentucky',
          Year: '2020',
          Type: 'State',
          Amount: 1477
        },
        {
          Location: 'Kentucky',
          Year: '2021',
          Type: 'Federal',
          Amount: 1418
        },
        {
          Location: 'Kentucky',
          Year: '2021',
          Type: 'Local',
          Amount: 1654
        },
        {
          Location: 'Kentucky',
          Year: '2021',
          Type: 'State',
          Amount: 1536
        },
        {
          Location: 'Louisiana',
          Year: '2019',
          Type: 'Federal',
          Amount: 1409
        },
        {
          Location: 'Louisiana',
          Year: '2019',
          Type: 'Local',
          Amount: 1645
        },
        {
          Location: 'Louisiana',
          Year: '2019',
          Type: 'State',
          Amount: 1527
        },
        {
          Location: 'Louisiana',
          Year: '2020',
          Type: 'Federal',
          Amount: 1409
        },
        {
          Location: 'Louisiana',
          Year: '2020',
          Type: 'Local',
          Amount: 1645
        },
        {
          Location: 'Louisiana',
          Year: '2020',
          Type: 'State',
          Amount: 1527
        },
        {
          Location: 'Louisiana',
          Year: '2021',
          Type: 'Federal',
          Amount: 1468
        },
        {
          Location: 'Louisiana',
          Year: '2021',
          Type: 'Local',
          Amount: 1704
        },
        {
          Location: 'Louisiana',
          Year: '2021',
          Type: 'State',
          Amount: 1586
        },
        {
          Location: 'Massachusetts',
          Year: '2019',
          Type: 'Federal',
          Amount: 1366
        },
        {
          Location: 'Massachusetts',
          Year: '2019',
          Type: 'Local',
          Amount: 1602
        },
        {
          Location: 'Massachusetts',
          Year: '2019',
          Type: 'State',
          Amount: 1484
        },
        {
          Location: 'Massachusetts',
          Year: '2020',
          Type: 'Federal',
          Amount: 1366
        },
        {
          Location: 'Massachusetts',
          Year: '2020',
          Type: 'Local',
          Amount: 1602
        },
        {
          Location: 'Massachusetts',
          Year: '2020',
          Type: 'State',
          Amount: 1484
        },
        {
          Location: 'Massachusetts',
          Year: '2021',
          Type: 'Federal',
          Amount: 1425
        },
        {
          Location: 'Massachusetts',
          Year: '2021',
          Type: 'Local',
          Amount: 1661
        },
        {
          Location: 'Massachusetts',
          Year: '2021',
          Type: 'State',
          Amount: 1543
        },
        {
          Location: 'Maryland',
          Year: '2019',
          Type: 'Federal',
          Amount: 1386
        },
        {
          Location: 'Maryland',
          Year: '2019',
          Type: 'Local',
          Amount: 1622
        },
        {
          Location: 'Maryland',
          Year: '2019',
          Type: 'State',
          Amount: 1504
        },
        {
          Location: 'Maryland',
          Year: '2020',
          Type: 'Federal',
          Amount: 1386
        },
        {
          Location: 'Maryland',
          Year: '2020',
          Type: 'Local',
          Amount: 1622
        },
        {
          Location: 'Maryland',
          Year: '2020',
          Type: 'State',
          Amount: 1504
        },
        {
          Location: 'Maryland',
          Year: '2021',
          Type: 'Federal',
          Amount: 1445
        },
        {
          Location: 'Maryland',
          Year: '2021',
          Type: 'Local',
          Amount: 1681
        },
        {
          Location: 'Maryland',
          Year: '2021',
          Type: 'State',
          Amount: 1563
        },
        {
          Location: 'Maine\t',
          Year: '2019',
          Type: 'Federal',
          Amount: '1385'
        },
        {
          Location: 'Maine\t',
          Year: '2019',
          Type: 'Local',
          Amount: '1621'
        },
        {
          Location: 'Maine\t',
          Year: '2019',
          Type: 'State',
          Amount: '1503'
        },
        {
          Location: 'Maine\t',
          Year: '2020',
          Type: 'Federal',
          Amount: '1385'
        },
        {
          Location: 'Maine\t',
          Year: '2020',
          Type: 'Local',
          Amount: '1621'
        },
        {
          Location: 'Maine\t',
          Year: '2020',
          Type: 'State',
          Amount: '1503'
        },
        {
          Location: 'Maine\t',
          Year: '2021',
          Type: 'Federal',
          Amount: '1444'
        },
        {
          Location: 'Maine\t',
          Year: '2021',
          Type: 'Local',
          Amount: '1680'
        },
        {
          Location: 'Maine\t',
          Year: '2021',
          Type: 'State',
          Amount: '1562'
        },
        {
          Location: 'Marshall Islands',
          Year: '2019',
          Type: 'Federal',
          Amount: 1408
        },
        {
          Location: 'Marshall Islands',
          Year: '2019',
          Type: 'Local',
          Amount: 1644
        },
        {
          Location: 'Marshall Islands',
          Year: '2019',
          Type: 'State',
          Amount: 1526
        },
        {
          Location: 'Marshall Islands',
          Year: '2020',
          Type: 'Federal',
          Amount: 1408
        },
        {
          Location: 'Marshall Islands',
          Year: '2020',
          Type: 'Local',
          Amount: 1644
        },
        {
          Location: 'Marshall Islands',
          Year: '2020',
          Type: 'State',
          Amount: 1526
        },
        {
          Location: 'Marshall Islands',
          Year: '2021',
          Type: 'Federal',
          Amount: 1467
        },
        {
          Location: 'Marshall Islands',
          Year: '2021',
          Type: 'Local',
          Amount: 1703
        },
        {
          Location: 'Marshall Islands',
          Year: '2021',
          Type: 'State',
          Amount: 1585
        },
        {
          Location: 'Michigan',
          Year: '2019',
          Type: 'Federal',
          Amount: 1390
        },
        {
          Location: 'Michigan',
          Year: '2019',
          Type: 'Local',
          Amount: 4011
        },
        {
          Location: 'Michigan',
          Year: '2019',
          Type: 'State',
          Amount: 1508
        },
        {
          Location: 'Michigan',
          Year: '2020',
          Type: 'Federal',
          Amount: 1390
        },
        {
          Location: 'Michigan',
          Year: '2020',
          Type: 'Local',
          Amount: 4111
        },
        {
          Location: 'Michigan',
          Year: '2020',
          Type: 'State',
          Amount: 1508
        },
        {
          Location: 'Michigan',
          Year: '2021',
          Type: 'Federal',
          Amount: 1449
        },
        {
          Location: 'Michigan',
          Year: '2021',
          Type: 'Local',
          Amount: 1685
        },
        {
          Location: 'Michigan',
          Year: '2021',
          Type: 'State',
          Amount: 1567
        },
        {
          Location: 'Minnesota',
          Year: '2019',
          Type: 'Federal',
          Amount: 1392
        },
        {
          Location: 'Minnesota',
          Year: '2019',
          Type: 'Local',
          Amount: 1628
        },
        {
          Location: 'Minnesota',
          Year: '2019',
          Type: 'State',
          Amount: 1510
        },
        {
          Location: 'Minnesota',
          Year: '2020',
          Type: 'Federal',
          Amount: 1392
        },
        {
          Location: 'Minnesota',
          Year: '2020',
          Type: 'Local',
          Amount: 1628
        },
        {
          Location: 'Minnesota',
          Year: '2020',
          Type: 'State',
          Amount: 1510
        },
        {
          Location: 'Minnesota',
          Year: '2021',
          Type: 'Federal',
          Amount: 1451
        },
        {
          Location: 'Minnesota',
          Year: '2021',
          Type: 'Local',
          Amount: 1687
        },
        {
          Location: 'Minnesota',
          Year: '2021',
          Type: 'State',
          Amount: 1569
        },
        {
          Location: 'Missouri',
          Year: '2019',
          Type: 'Federal',
          Amount: 1378
        },
        {
          Location: 'Missouri',
          Year: '2019',
          Type: 'Local',
          Amount: 1614
        },
        {
          Location: 'Missouri',
          Year: '2019',
          Type: 'State',
          Amount: 1496
        },
        {
          Location: 'Missouri',
          Year: '2020',
          Type: 'Federal',
          Amount: 1378
        },
        {
          Location: 'Missouri',
          Year: '2020',
          Type: 'Local',
          Amount: 1614
        },
        {
          Location: 'Missouri',
          Year: '2020',
          Type: 'State',
          Amount: 1496
        },
        {
          Location: 'Missouri',
          Year: '2021',
          Type: 'Federal',
          Amount: 1437
        },
        {
          Location: 'Missouri',
          Year: '2021',
          Type: 'Local',
          Amount: 1673
        },
        {
          Location: 'Missouri',
          Year: '2021',
          Type: 'State',
          Amount: 1555
        },
        {
          Location: 'Northern Mariana Islands',
          Year: '2019',
          Type: 'Federal',
          Amount: '1368'
        },
        {
          Location: 'Northern Mariana Islands',
          Year: '2019',
          Type: 'Local',
          Amount: '1604'
        },
        {
          Location: 'Northern Mariana Islands',
          Year: '2019',
          Type: 'State',
          Amount: '1486'
        },
        {
          Location: 'Northern Mariana Islands',
          Year: '2020',
          Type: 'Federal',
          Amount: '1368'
        },
        {
          Location: 'Northern Mariana Islands',
          Year: '2020',
          Type: 'Local',
          Amount: '1604'
        },
        {
          Location: 'Northern Mariana Islands',
          Year: '2020',
          Type: 'State',
          Amount: '1486'
        },
        {
          Location: 'Northern Mariana Islands',
          Year: '2021',
          Type: 'Federal',
          Amount: 1427
        },
        {
          Location: 'Northern Mariana Islands',
          Year: '2021',
          Type: 'Local',
          Amount: 1663
        },
        {
          Location: 'Northern Mariana Islands',
          Year: '2021',
          Type: 'State',
          Amount: 1545
        },
        {
          Location: 'Mississippi',
          Year: '2019',
          Type: 'Federal',
          Amount: 1406
        },
        {
          Location: 'Mississippi',
          Year: '2019',
          Type: 'Local',
          Amount: 1642
        },
        {
          Location: 'Mississippi',
          Year: '2019',
          Type: 'State',
          Amount: 1524
        },
        {
          Location: 'Mississippi',
          Year: '2020',
          Type: 'Federal',
          Amount: 1406
        },
        {
          Location: 'Mississippi',
          Year: '2020',
          Type: 'Local',
          Amount: 1642
        },
        {
          Location: 'Mississippi',
          Year: '2020',
          Type: 'State',
          Amount: 1524
        },
        {
          Location: 'Mississippi',
          Year: '2021',
          Type: 'Federal',
          Amount: 1465
        },
        {
          Location: 'Mississippi',
          Year: '2021',
          Type: 'Local',
          Amount: 1701
        },
        {
          Location: 'Mississippi',
          Year: '2021',
          Type: 'State',
          Amount: 1583
        },
        {
          Location: 'Montana',
          Year: '2019',
          Type: 'Federal',
          Amount: 1364
        },
        {
          Location: 'Montana',
          Year: '2019',
          Type: 'Local',
          Amount: 1600
        },
        {
          Location: 'Montana',
          Year: '2019',
          Type: 'State',
          Amount: 1482
        },
        {
          Location: 'Montana',
          Year: '2020',
          Type: 'Federal',
          Amount: 1364
        },
        {
          Location: 'Montana',
          Year: '2020',
          Type: 'Local',
          Amount: 1600
        },
        {
          Location: 'Montana',
          Year: '2020',
          Type: 'State',
          Amount: 1482
        },
        {
          Location: 'Montana',
          Year: '2021',
          Type: 'Federal',
          Amount: 1423
        },
        {
          Location: 'Montana',
          Year: '2021',
          Type: 'Local',
          Amount: 1659
        },
        {
          Location: 'Montana',
          Year: '2021',
          Type: 'State',
          Amount: 1541
        },
        {
          Location: 'North Carolina',
          Year: '2019',
          Type: 'Federal',
          Amount: 1358
        },
        {
          Location: 'North Carolina',
          Year: '2019',
          Type: 'Local',
          Amount: 1594
        },
        {
          Location: 'North Carolina',
          Year: '2019',
          Type: 'State',
          Amount: 1476
        },
        {
          Location: 'North Carolina',
          Year: '2020',
          Type: 'Federal',
          Amount: 1358
        },
        {
          Location: 'North Carolina',
          Year: '2020',
          Type: 'Local',
          Amount: 1594
        },
        {
          Location: 'North Carolina',
          Year: '2020',
          Type: 'State',
          Amount: 1476
        },
        {
          Location: 'North Carolina',
          Year: '2021',
          Type: 'Federal',
          Amount: 1417
        },
        {
          Location: 'North Carolina',
          Year: '2021',
          Type: 'Local',
          Amount: 1653
        },
        {
          Location: 'North Carolina',
          Year: '2021',
          Type: 'State',
          Amount: 1535
        },
        {
          Location: 'North Dakota',
          Year: '2019',
          Type: 'Federal',
          Amount: 1355
        },
        {
          Location: 'North Dakota',
          Year: '2019',
          Type: 'Local',
          Amount: 1591
        },
        {
          Location: 'North Dakota',
          Year: '2019',
          Type: 'State',
          Amount: 1473
        },
        {
          Location: 'North Dakota',
          Year: '2020',
          Type: 'Federal',
          Amount: 1355
        },
        {
          Location: 'North Dakota',
          Year: '2020',
          Type: 'Local',
          Amount: 1591
        },
        {
          Location: 'North Dakota',
          Year: '2020',
          Type: 'State',
          Amount: 1473
        },
        {
          Location: 'North Dakota',
          Year: '2021',
          Type: 'Federal',
          Amount: 1414
        },
        {
          Location: 'North Dakota',
          Year: '2021',
          Type: 'Local',
          Amount: 1650
        },
        {
          Location: 'North Dakota',
          Year: '2021',
          Type: 'State',
          Amount: 1532
        },
        {
          Location: 'Nebraska',
          Year: '2019',
          Type: 'Federal',
          Amount: 1391
        },
        {
          Location: 'Nebraska',
          Year: '2019',
          Type: 'Local',
          Amount: 1627
        },
        {
          Location: 'Nebraska',
          Year: '2019',
          Type: 'State',
          Amount: 1509
        },
        {
          Location: 'Nebraska',
          Year: '2020',
          Type: 'Federal',
          Amount: 1391
        },
        {
          Location: 'Nebraska',
          Year: '2020',
          Type: 'Local',
          Amount: 1627
        },
        {
          Location: 'Nebraska',
          Year: '2020',
          Type: 'State',
          Amount: 1509
        },
        {
          Location: 'Nebraska',
          Year: '2021',
          Type: 'Federal',
          Amount: 1450
        },
        {
          Location: 'Nebraska',
          Year: '2021',
          Type: 'Local',
          Amount: 1686
        },
        {
          Location: 'Nebraska',
          Year: '2021',
          Type: 'State',
          Amount: 1568
        },
        {
          Location: 'New Hampshire',
          Year: '2019',
          Type: 'Federal',
          Amount: 1405
        },
        {
          Location: 'New Hampshire',
          Year: '2019',
          Type: 'Local',
          Amount: 1641
        },
        {
          Location: 'New Hampshire',
          Year: '2019',
          Type: 'State',
          Amount: 1523
        },
        {
          Location: 'New Hampshire',
          Year: '2020',
          Type: 'Federal',
          Amount: 1405
        },
        {
          Location: 'New Hampshire',
          Year: '2020',
          Type: 'Local',
          Amount: 1641
        },
        {
          Location: 'New Hampshire',
          Year: '2020',
          Type: 'State',
          Amount: 1523
        },
        {
          Location: 'New Hampshire',
          Year: '2021',
          Type: 'Federal',
          Amount: 1464
        },
        {
          Location: 'New Hampshire',
          Year: '2021',
          Type: 'Local',
          Amount: 1700
        },
        {
          Location: 'New Hampshire',
          Year: '2021',
          Type: 'State',
          Amount: 1582
        },
        {
          Location: 'New Jersey',
          Year: '2019',
          Type: 'Federal',
          Amount: 1410
        },
        {
          Location: 'New Jersey',
          Year: '2019',
          Type: 'Local',
          Amount: 1646
        },
        {
          Location: 'New Jersey',
          Year: '2019',
          Type: 'State',
          Amount: 1528
        },
        {
          Location: 'New Jersey',
          Year: '2020',
          Type: 'Federal',
          Amount: 1410
        },
        {
          Location: 'New Jersey',
          Year: '2020',
          Type: 'Local',
          Amount: 1646
        },
        {
          Location: 'New Jersey',
          Year: '2020',
          Type: 'State',
          Amount: 1528
        },
        {
          Location: 'New Jersey',
          Year: '2021',
          Type: 'Federal',
          Amount: 1469
        },
        {
          Location: 'New Jersey',
          Year: '2021',
          Type: 'Local',
          Amount: 1705
        },
        {
          Location: 'New Jersey',
          Year: '2021',
          Type: 'State',
          Amount: 1587
        },
        {
          Location: 'New Mexico',
          Year: '2019',
          Type: 'Federal',
          Amount: 1399
        },
        {
          Location: 'New Mexico',
          Year: '2019',
          Type: 'Local',
          Amount: 1635
        },
        {
          Location: 'New Mexico',
          Year: '2019',
          Type: 'State',
          Amount: 1517
        },
        {
          Location: 'New Mexico',
          Year: '2020',
          Type: 'Federal',
          Amount: 1399
        },
        {
          Location: 'New Mexico',
          Year: '2020',
          Type: 'Local',
          Amount: 1635
        },
        {
          Location: 'New Mexico',
          Year: '2020',
          Type: 'State',
          Amount: 1517
        },
        {
          Location: 'New Mexico',
          Year: '2021',
          Type: 'Federal',
          Amount: 1458
        },
        {
          Location: 'New Mexico',
          Year: '2021',
          Type: 'Local',
          Amount: 1694
        },
        {
          Location: 'New Mexico',
          Year: '2021',
          Type: 'State',
          Amount: 1576
        },
        {
          Location: 'Nevada',
          Year: '2019',
          Type: 'Federal',
          Amount: 1357
        },
        {
          Location: 'Nevada',
          Year: '2019',
          Type: 'Local',
          Amount: 1593
        },
        {
          Location: 'Nevada',
          Year: '2019',
          Type: 'State',
          Amount: 1475
        },
        {
          Location: 'Nevada',
          Year: '2020',
          Type: 'Federal',
          Amount: 1357
        },
        {
          Location: 'Nevada',
          Year: '2020',
          Type: 'Local',
          Amount: 1593
        },
        {
          Location: 'Nevada',
          Year: '2020',
          Type: 'State',
          Amount: 1475
        },
        {
          Location: 'Nevada',
          Year: '2021',
          Type: 'Federal',
          Amount: 1416
        },
        {
          Location: 'Nevada',
          Year: '2021',
          Type: 'Local',
          Amount: 1652
        },
        {
          Location: 'Nevada',
          Year: '2021',
          Type: 'State',
          Amount: 1534
        },
        {
          Location: 'New York',
          Year: '2019',
          Type: 'Federal',
          Amount: 1360
        },
        {
          Location: 'New York',
          Year: '2019',
          Type: 'Local',
          Amount: 1596
        },
        {
          Location: 'New York',
          Year: '2019',
          Type: 'State',
          Amount: 1478
        },
        {
          Location: 'New York',
          Year: '2020',
          Type: 'Federal',
          Amount: 1360
        },
        {
          Location: 'New York',
          Year: '2020',
          Type: 'Local',
          Amount: 1596
        },
        {
          Location: 'New York',
          Year: '2020',
          Type: 'State',
          Amount: 1478
        },
        {
          Location: 'New York',
          Year: '2021',
          Type: 'Federal',
          Amount: 1419
        },
        {
          Location: 'New York',
          Year: '2021',
          Type: 'Local',
          Amount: 1655
        },
        {
          Location: 'New York',
          Year: '2021',
          Type: 'State',
          Amount: 1537
        },
        {
          Location: 'Ohio',
          Year: '2019',
          Type: 'Federal',
          Amount: 1407
        },
        {
          Location: 'Ohio',
          Year: '2019',
          Type: 'Local',
          Amount: 1643
        },
        {
          Location: 'Ohio',
          Year: '2019',
          Type: 'State',
          Amount: 1525
        },
        {
          Location: 'Ohio',
          Year: '2020',
          Type: 'Federal',
          Amount: 1407
        },
        {
          Location: 'Ohio',
          Year: '2020',
          Type: 'Local',
          Amount: 1643
        },
        {
          Location: 'Ohio',
          Year: '2020',
          Type: 'State',
          Amount: 1525
        },
        {
          Location: 'Ohio',
          Year: '2021',
          Type: 'Federal',
          Amount: 1466
        },
        {
          Location: 'Ohio',
          Year: '2021',
          Type: 'Local',
          Amount: 1702
        },
        {
          Location: 'Ohio',
          Year: '2021',
          Type: 'State',
          Amount: 1584
        },
        {
          Location: 'Oklahoma',
          Year: '2019',
          Type: 'Federal',
          Amount: 1372
        },
        {
          Location: 'Oklahoma',
          Year: '2019',
          Type: 'Local',
          Amount: 1608
        },
        {
          Location: 'Oklahoma',
          Year: '2019',
          Type: 'State',
          Amount: 1490
        },
        {
          Location: 'Oklahoma',
          Year: '2020',
          Type: 'Federal',
          Amount: 1372
        },
        {
          Location: 'Oklahoma',
          Year: '2020',
          Type: 'Local',
          Amount: 1608
        },
        {
          Location: 'Oklahoma',
          Year: '2020',
          Type: 'State',
          Amount: 1490
        },
        {
          Location: 'Oklahoma',
          Year: '2021',
          Type: 'Federal',
          Amount: 1431
        },
        {
          Location: 'Oklahoma',
          Year: '2021',
          Type: 'Local',
          Amount: 1667
        },
        {
          Location: 'Oklahoma',
          Year: '2021',
          Type: 'State',
          Amount: 1549
        },
        {
          Location: 'Oregon',
          Year: '2019',
          Type: 'Federal',
          Amount: 1379
        },
        {
          Location: 'Oregon',
          Year: '2019',
          Type: 'Local',
          Amount: 1615
        },
        {
          Location: 'Oregon',
          Year: '2019',
          Type: 'State',
          Amount: 1497
        },
        {
          Location: 'Oregon',
          Year: '2020',
          Type: 'Federal',
          Amount: 1379
        },
        {
          Location: 'Oregon',
          Year: '2020',
          Type: 'Local',
          Amount: 1615
        },
        {
          Location: 'Oregon',
          Year: '2020',
          Type: 'State',
          Amount: 1497
        },
        {
          Location: 'Oregon',
          Year: '2021',
          Type: 'Federal',
          Amount: 1438
        },
        {
          Location: 'Oregon',
          Year: '2021',
          Type: 'Local',
          Amount: 1674
        },
        {
          Location: 'Oregon',
          Year: '2021',
          Type: 'State',
          Amount: 1556
        },
        {
          Location: 'Pennsylvania',
          Year: '2019',
          Type: 'Federal',
          Amount: 1354
        },
        {
          Location: 'Pennsylvania',
          Year: '2019',
          Type: 'Local',
          Amount: 1590
        },
        {
          Location: 'Pennsylvania',
          Year: '2019',
          Type: 'State',
          Amount: 1472
        },
        {
          Location: 'Pennsylvania',
          Year: '2020',
          Type: 'Federal',
          Amount: 1354
        },
        {
          Location: 'Pennsylvania',
          Year: '2020',
          Type: 'Local',
          Amount: 1590
        },
        {
          Location: 'Pennsylvania',
          Year: '2020',
          Type: 'State',
          Amount: 1472
        },
        {
          Location: 'Pennsylvania',
          Year: '2021',
          Type: 'Federal',
          Amount: 1413
        },
        {
          Location: 'Pennsylvania',
          Year: '2021',
          Type: 'Local',
          Amount: 1649
        },
        {
          Location: 'Pennsylvania',
          Year: '2021',
          Type: 'State',
          Amount: 1531
        },
        {
          Location: 'Puerto Rico',
          Year: '2019',
          Type: 'Federal',
          Amount: 1363
        },
        {
          Location: 'Puerto Rico',
          Year: '2019',
          Type: 'Local',
          Amount: 1599
        },
        {
          Location: 'Puerto Rico',
          Year: '2019',
          Type: 'State',
          Amount: 1481
        },
        {
          Location: 'Puerto Rico',
          Year: '2020',
          Type: 'Federal',
          Amount: 1363
        },
        {
          Location: 'Puerto Rico',
          Year: '2020',
          Type: 'Local',
          Amount: 1599
        },
        {
          Location: 'Puerto Rico',
          Year: '2020',
          Type: 'State',
          Amount: 1481
        },
        {
          Location: 'Puerto Rico',
          Year: '2021',
          Type: 'Federal',
          Amount: 1422
        },
        {
          Location: 'Puerto Rico',
          Year: '2021',
          Type: 'Local',
          Amount: 1658
        },
        {
          Location: 'Puerto Rico',
          Year: '2021',
          Type: 'State',
          Amount: 1540
        },
        {
          Location: 'Rhode Island',
          Year: '2019',
          Type: 'Federal',
          Amount: 1411
        },
        {
          Location: 'Rhode Island',
          Year: '2019',
          Type: 'Local',
          Amount: 1647
        },
        {
          Location: 'Rhode Island',
          Year: '2019',
          Type: 'State',
          Amount: 1529
        },
        {
          Location: 'Rhode Island',
          Year: '2020',
          Type: 'Federal',
          Amount: 1411
        },
        {
          Location: 'Rhode Island',
          Year: '2020',
          Type: 'Local',
          Amount: 1647
        },
        {
          Location: 'Rhode Island',
          Year: '2020',
          Type: 'State',
          Amount: 1529
        },
        {
          Location: 'Rhode Island',
          Year: '2021',
          Type: 'Federal',
          Amount: 1470
        },
        {
          Location: 'Rhode Island',
          Year: '2021',
          Type: 'Local',
          Amount: 1706
        },
        {
          Location: 'Rhode Island',
          Year: '2021',
          Type: 'State',
          Amount: 1588
        },
        {
          Location: 'Republic of Palau',
          Year: '2019',
          Type: 'Federal',
          Amount: '1412'
        },
        {
          Location: 'Republic of Palau',
          Year: '2019',
          Type: 'Local',
          Amount: '1648'
        },
        {
          Location: 'Republic of Palau',
          Year: '2019',
          Type: 'State',
          Amount: '1530'
        },
        {
          Location: 'Republic of Palau',
          Year: '2020',
          Type: 'Federal',
          Amount: '1412'
        },
        {
          Location: 'Republic of Palau',
          Year: '2020',
          Type: 'Local',
          Amount: '1648'
        },
        {
          Location: 'Republic of Palau',
          Year: '2020',
          Type: 'State',
          Amount: '1530'
        },
        {
          Location: 'Republic of Palau',
          Year: '2021',
          Type: 'Federal',
          Amount: '1471'
        },
        {
          Location: 'Republic of Palau',
          Year: '2021',
          Type: 'Local',
          Amount: '1707'
        },
        {
          Location: 'Republic of Palau',
          Year: '2021',
          Type: 'State',
          Amount: '1589'
        },
        {
          Location: 'South Carolina',
          Year: '2019',
          Type: 'Federal',
          Amount: 1389
        },
        {
          Location: 'South Carolina',
          Year: '2019',
          Type: 'Local',
          Amount: 1625
        },
        {
          Location: 'South Carolina',
          Year: '2019',
          Type: 'State',
          Amount: 1507
        },
        {
          Location: 'South Carolina',
          Year: '2020',
          Type: 'Federal',
          Amount: 1389
        },
        {
          Location: 'South Carolina',
          Year: '2020',
          Type: 'Local',
          Amount: 1625
        },
        {
          Location: 'South Carolina',
          Year: '2020',
          Type: 'State',
          Amount: 1507
        },
        {
          Location: 'South Carolina',
          Year: '2021',
          Type: 'Federal',
          Amount: 1448
        },
        {
          Location: 'South Carolina',
          Year: '2021',
          Type: 'Local',
          Amount: 1684
        },
        {
          Location: 'South Carolina',
          Year: '2021',
          Type: 'State',
          Amount: 1566
        },
        {
          Location: 'South Dakota',
          Year: '2019',
          Type: 'Federal',
          Amount: 1373
        },
        {
          Location: 'South Dakota',
          Year: '2019',
          Type: 'Local',
          Amount: 1609
        },
        {
          Location: 'South Dakota',
          Year: '2019',
          Type: 'State',
          Amount: 1491
        },
        {
          Location: 'South Dakota',
          Year: '2020',
          Type: 'Federal',
          Amount: 1373
        },
        {
          Location: 'South Dakota',
          Year: '2020',
          Type: 'Local',
          Amount: 1609
        },
        {
          Location: 'South Dakota',
          Year: '2020',
          Type: 'State',
          Amount: 1491
        },
        {
          Location: 'South Dakota',
          Year: '2021',
          Type: 'Federal',
          Amount: 1432
        },
        {
          Location: 'South Dakota',
          Year: '2021',
          Type: 'Local',
          Amount: 1668
        },
        {
          Location: 'South Dakota',
          Year: '2021',
          Type: 'State',
          Amount: 1550
        },
        {
          Location: 'Tennessee',
          Year: '2019',
          Type: 'Federal',
          Amount: 1376
        },
        {
          Location: 'Tennessee',
          Year: '2019',
          Type: 'Local',
          Amount: 1612
        },
        {
          Location: 'Tennessee',
          Year: '2019',
          Type: 'State',
          Amount: 1494
        },
        {
          Location: 'Tennessee',
          Year: '2020',
          Type: 'Federal',
          Amount: 1376
        },
        {
          Location: 'Tennessee',
          Year: '2020',
          Type: 'Local',
          Amount: 1612
        },
        {
          Location: 'Tennessee',
          Year: '2020',
          Type: 'State',
          Amount: 1494
        },
        {
          Location: 'Tennessee',
          Year: '2021',
          Type: 'Federal',
          Amount: 1435
        },
        {
          Location: 'Tennessee',
          Year: '2021',
          Type: 'Local',
          Amount: 1671
        },
        {
          Location: 'Tennessee',
          Year: '2021',
          Type: 'State',
          Amount: 1553
        },
        {
          Location: 'Texas',
          Year: '2019',
          Type: 'Federal',
          Amount: 1361
        },
        {
          Location: 'Texas',
          Year: '2019',
          Type: 'Local',
          Amount: 1597
        },
        {
          Location: 'Texas',
          Year: '2019',
          Type: 'State',
          Amount: 1479
        },
        {
          Location: 'Texas',
          Year: '2020',
          Type: 'Federal',
          Amount: 1361
        },
        {
          Location: 'Texas',
          Year: '2020',
          Type: 'Local',
          Amount: 1597
        },
        {
          Location: 'Texas',
          Year: '2020',
          Type: 'State',
          Amount: 1479
        },
        {
          Location: 'Texas',
          Year: '2021',
          Type: 'Federal',
          Amount: 1420
        },
        {
          Location: 'Texas',
          Year: '2021',
          Type: 'Local',
          Amount: 1656
        },
        {
          Location: 'Texas',
          Year: '2021',
          Type: 'State',
          Amount: 1538
        },
        {
          Location: 'Utah',
          Year: '2019',
          Type: 'Federal',
          Amount: 1380
        },
        {
          Location: 'Utah',
          Year: '2019',
          Type: 'Local',
          Amount: 1616
        },
        {
          Location: 'Utah',
          Year: '2019',
          Type: 'State',
          Amount: 1498
        },
        {
          Location: 'Utah',
          Year: '2020',
          Type: 'Federal',
          Amount: 1380
        },
        {
          Location: 'Utah',
          Year: '2020',
          Type: 'Local',
          Amount: 1616
        },
        {
          Location: 'Utah',
          Year: '2020',
          Type: 'State',
          Amount: 1498
        },
        {
          Location: 'Utah',
          Year: '2021',
          Type: 'Federal',
          Amount: 1439
        },
        {
          Location: 'Utah',
          Year: '2021',
          Type: 'Local',
          Amount: 1675
        },
        {
          Location: 'Utah',
          Year: '2021',
          Type: 'State',
          Amount: 1557
        },
        {
          Location: 'Virginia',
          Year: '2019',
          Type: 'Federal',
          Amount: 1382
        },
        {
          Location: 'Virginia',
          Year: '2019',
          Type: 'Local',
          Amount: 1618
        },
        {
          Location: 'Virginia',
          Year: '2019',
          Type: 'State',
          Amount: 1500
        },
        {
          Location: 'Virginia',
          Year: '2020',
          Type: 'Federal',
          Amount: 1382
        },
        {
          Location: 'Virginia',
          Year: '2020',
          Type: 'Local',
          Amount: 1618
        },
        {
          Location: 'Virginia',
          Year: '2020',
          Type: 'State',
          Amount: 1500
        },
        {
          Location: 'Virginia',
          Year: '2021',
          Type: 'Federal',
          Amount: 1441
        },
        {
          Location: 'Virginia',
          Year: '2021',
          Type: 'Local',
          Amount: 1677
        },
        {
          Location: 'Virginia',
          Year: '2021',
          Type: 'State',
          Amount: 1559
        },
        {
          Location: 'U.S. Virgin Islands',
          Year: '2019',
          Type: 'Federal',
          Amount: '1383'
        },
        {
          Location: 'U.S. Virgin Islands',
          Year: '2019',
          Type: 'Local',
          Amount: '1619'
        },
        {
          Location: 'U.S. Virgin Islands',
          Year: '2019',
          Type: 'State',
          Amount: '1501'
        },
        {
          Location: 'U.S. Virgin Islands',
          Year: '2020',
          Type: 'Federal',
          Amount: '1383'
        },
        {
          Location: 'U.S. Virgin Islands',
          Year: '2020',
          Type: 'Local',
          Amount: '1619'
        },
        {
          Location: 'U.S. Virgin Islands',
          Year: '2020',
          Type: 'State',
          Amount: '1501'
        },
        {
          Location: 'U.S. Virgin Islands',
          Year: '2021',
          Type: 'Federal',
          Amount: 1442
        },
        {
          Location: 'U.S. Virgin Islands',
          Year: '2021',
          Type: 'Local',
          Amount: 1678
        },
        {
          Location: 'U.S. Virgin Islands',
          Year: '2021',
          Type: 'State',
          Amount: 1560
        },
        {
          Location: 'Vermont',
          Year: '2019',
          Type: 'Federal',
          Amount: 1370
        },
        {
          Location: 'Vermont',
          Year: '2019',
          Type: 'Local',
          Amount: 1606
        },
        {
          Location: 'Vermont',
          Year: '2019',
          Type: 'State',
          Amount: 1488
        },
        {
          Location: 'Vermont',
          Year: '2020',
          Type: 'Federal',
          Amount: 1370
        },
        {
          Location: 'Vermont',
          Year: '2020',
          Type: 'Local',
          Amount: 1606
        },
        {
          Location: 'Vermont',
          Year: '2020',
          Type: 'State',
          Amount: 1488
        },
        {
          Location: 'Vermont',
          Year: '2021',
          Type: 'Federal',
          Amount: 1429
        },
        {
          Location: 'Vermont',
          Year: '2021',
          Type: 'Local',
          Amount: 1665
        },
        {
          Location: 'Vermont',
          Year: '2021',
          Type: 'State',
          Amount: 1547
        },
        {
          Location: 'Washington',
          Year: '2019',
          Type: 'Federal',
          Amount: 1393
        },
        {
          Location: 'Washington',
          Year: '2019',
          Type: 'Local',
          Amount: 1629
        },
        {
          Location: 'Washington',
          Year: '2019',
          Type: 'State',
          Amount: 1511
        },
        {
          Location: 'Washington',
          Year: '2020',
          Type: 'Federal',
          Amount: 1393
        },
        {
          Location: 'Washington',
          Year: '2020',
          Type: 'Local',
          Amount: 1629
        },
        {
          Location: 'Washington',
          Year: '2020',
          Type: 'State',
          Amount: 1511
        },
        {
          Location: 'Washington',
          Year: '2021',
          Type: 'Federal',
          Amount: 1452
        },
        {
          Location: 'Washington',
          Year: '2021',
          Type: 'Local',
          Amount: 1688
        },
        {
          Location: 'Washington',
          Year: '2021',
          Type: 'State',
          Amount: 1570
        },
        {
          Location: 'Wisconsin',
          Year: '2019',
          Type: 'Federal',
          Amount: 1371
        },
        {
          Location: 'Wisconsin',
          Year: '2019',
          Type: 'Local',
          Amount: 1607
        },
        {
          Location: 'Wisconsin',
          Year: '2019',
          Type: 'State',
          Amount: 1489
        },
        {
          Location: 'Wisconsin',
          Year: '2020',
          Type: 'Federal',
          Amount: 1371
        },
        {
          Location: 'Wisconsin',
          Year: '2020',
          Type: 'Local',
          Amount: 1607
        },
        {
          Location: 'Wisconsin',
          Year: '2020',
          Type: 'State',
          Amount: 1489
        },
        {
          Location: 'Wisconsin',
          Year: '2021',
          Type: 'Federal',
          Amount: 1430
        },
        {
          Location: 'Wisconsin',
          Year: '2021',
          Type: 'Local',
          Amount: 1666
        },
        {
          Location: 'Wisconsin',
          Year: '2021',
          Type: 'State',
          Amount: 1548
        },
        {
          Location: 'West Virginia',
          Year: '2019',
          Type: 'Federal',
          Amount: 1397
        },
        {
          Location: 'West Virginia',
          Year: '2019',
          Type: 'Local',
          Amount: 1633
        },
        {
          Location: 'West Virginia',
          Year: '2019',
          Type: 'State',
          Amount: 1515
        },
        {
          Location: 'West Virginia',
          Year: '2020',
          Type: 'Federal',
          Amount: 1397
        },
        {
          Location: 'West Virginia',
          Year: '2020',
          Type: 'Local',
          Amount: 1633
        },
        {
          Location: 'West Virginia',
          Year: '2020',
          Type: 'State',
          Amount: 1515
        },
        {
          Location: 'West Virginia',
          Year: '2021',
          Type: 'Federal',
          Amount: 1456
        },
        {
          Location: 'West Virginia',
          Year: '2021',
          Type: 'Local',
          Amount: 1692
        },
        {
          Location: 'West Virginia',
          Year: '2021',
          Type: 'State',
          Amount: 1574
        },
        {
          Location: 'Wyoming',
          Year: '2019',
          Type: 'Federal',
          Amount: 1395
        },
        {
          Location: 'Wyoming',
          Year: '2019',
          Type: 'Local',
          Amount: 1631
        },
        {
          Location: 'Wyoming',
          Year: '2019',
          Type: 'State',
          Amount: 1513
        },
        {
          Location: 'Wyoming',
          Year: '2020',
          Type: 'Federal',
          Amount: 1395
        },
        {
          Location: 'Wyoming',
          Year: '2020',
          Type: 'Local',
          Amount: 1631
        },
        {
          Location: 'Wyoming',
          Year: '2020',
          Type: 'State',
          Amount: 1513
        },
        {
          Location: 'Wyoming',
          Year: '2021',
          Type: 'Federal',
          Amount: 1454
        },
        {
          Location: 'Wyoming',
          Year: '2021',
          Type: 'Local',
          Amount: 1690
        },
        {
          Location: 'Wyoming',
          Year: '2021',
          Type: 'State',
          Amount: 1572
        }
      ],
      dataFileSize: 14901,
      dataFileName: 'dashboard_aggregate_example_state_type (1).csv',
      dataFileSourceType: 'file',
      dataFileFormat: 'CSV',
      preview: true
    }
  }
}
const equalHeightDataBiteKey = 'equal-height-data-bite-story'
const equalHeightDataBiteTemplate = Object.values(ExampleConfig_1.visualizations).find(v => v?.type === 'data-bite')

if (equalHeightDataBiteTemplate) {
  EqualHeightMixedVizConfig.visualizations[equalHeightDataBiteKey] = {
    ...cloneDeep(equalHeightDataBiteTemplate),
    uid: equalHeightDataBiteKey,
    theme: 'theme-blue',
    bitePosition: 'Top',
    biteStyle: 'title',
    biteBody:
      '<span style="font-size: 20px;">Long-form data bite content for equal-height validation.</span><br>This intentionally verbose text creates a taller card so the row can demonstrate that chart, map, and data bite containers normalize to the same height when equal height is enabled.',
    visualizationType: 'data-bite',
    type: 'data-bite'
  }
}

EqualHeightMixedVizConfig.rows = [
  {
    equalHeight: true,
    columns: [
      { width: 4, widget: 'chart1699383531543' },
      { width: 4, widget: 'map1699383540561' },
      { width: 4, widget: equalHeightDataBiteKey }
    ]
  }
]

export const Equal_Height_Mixed_Viz_Row: Story = {
  args: {
    config: EqualHeightMixedVizConfig,
    isEditor: false
  },
  parameters: {
    docs: {
      description: {
        story:
          'Demonstrates equal-height row normalization across different visualization types (chart, map, and data-bite) with intentionally uneven content lengths.'
      }
    }
  }
}

const mixedHeightMarkupIncludeKey = 'mixed-height-markup-include-story'
const Mixed_Height_Content_Row_Config = cloneDeep(TP5TestConfig)

Mixed_Height_Content_Row_Config.dashboard = {
  theme: 'theme-blue',
  sharedFilters: []
}

Mixed_Height_Content_Row_Config.visualizations.bite1 = {
  ...Mixed_Height_Content_Row_Config.visualizations.bite1,
  title: 'Short data bite',
  biteBody: 'Adults met the sample prevention target.',
  subtext: 'Brief note.'
}

Mixed_Height_Content_Row_Config.visualizations.waffle2 = {
  ...Mixed_Height_Content_Row_Config.visualizations.waffle2,
  title: 'Medium waffle chart',
  content: 'completed the sample prevention checklist across the reporting period',
  subtext: 'Adds a second line of explanatory context without matching the markup include height.'
}

Mixed_Height_Content_Row_Config.visualizations[mixedHeightMarkupIncludeKey] = {
  uid: mixedHeightMarkupIncludeKey,
  type: 'markup-include',
  visualizationType: 'markup-include',
  filters: [],
  filterBehavior: 'Filter Change',
  openModal: false,
  showEditorPanel: false,
  theme: 'theme-orange',
  contentEditor: {
    title: 'Long markup include',
    titleStyle: 'small',
    showHeader: true,
    srcUrl: '#example',
    useInlineHTML: true,
    allowHideSection: false,
    showNoDataMessage: false,
    inlineHTML: `
      <p>This markup include is intentionally longer than the neighboring data bite and waffle chart.</p>
      <p>Use it to validate mixed dashboard rows where cards should keep their natural heights instead of being normalized.</p>
      <ul>
        <li>Short card: data bite</li>
        <li>Medium card: waffle chart</li>
        <li>Long card: markup include</li>
      </ul>
    `
  },
  visual: {
    border: true,
    accent: true,
    background: true,
    hideBackgroundColor: false,
    borderColorTheme: true
  }
}

Mixed_Height_Content_Row_Config.rows = [
  {
    equalHeight: false,
    columns: [
      { width: 4, widget: 'bite1' },
      { width: 4, widget: 'waffle2' },
      { width: 4, widget: mixedHeightMarkupIncludeKey }
    ]
  }
]

export const Mixed_Viz_Different_Heights_Row: Story = {
  args: {
    config: Mixed_Height_Content_Row_Config,
    isEditor: false
  },
  parameters: {
    docs: {
      description: {
        story:
          'Demonstrates a dashboard row with intentionally uneven data-bite, waffle-chart, and markup-include content heights.'
      }
    }
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    await waitForPresence('.cove-markup-include', canvasElement)
    await waitForPresence('.cove-waffle-chart, .cove-gauge-chart', canvasElement)
    await waitForPresence('.bite, .cdc-callout', canvasElement)
  }
}

const sleep = ms => {
  return new Promise(r => setTimeout(r, ms))
}

const fetchMock = {
  debug: true,
  mocks: [
    {
      matcher: {
        name: 'topicsFilter',
        url: 'path:/api/poc/topics'
      },
      response: {
        status: 200,
        body: [{ TopicID: 'topicId', Topic: 'Some Topic' }]
      }
    },
    {
      matcher: {
        name: 'indicatorsFilter',
        url: 'path:/api/poc/indicators'
      },
      response: {
        status: 200,
        body: [{ IndicatorID: 'indicatorID', Indicator: 'Some Indicator' }]
      }
    },
    ...['Year', 'DataValueType', 'StratificationCategory', 'Stratification'].map(filter => {
      return {
        matcher: {
          name: 'filters' + filter,
          url: 'path:/api/POC/Filters/' + filter
        },
        response: {
          status: 200,
          body: times(5, i => ({ [filter]: `Some ${filter} ${i}` }))
        }
      }
    }),
    {
      matcher: {
        name: 'locations',
        url: 'path:/api/poc/locations'
      },
      response: {
        status: 200,
        body: [
          {
            LocationAbbr: 'MS',
            LocationDesc: 'Mississippi'
          }
        ]
      }
    },
    {
      matcher: {
        name: 'tableData',
        url: 'path:/api/POC/TableData'
      },
      response: {
        status: 200,
        body: [
          {
            LocationAbbr: 'MS',
            LocationDesc: 'Mississippi',
            Indicator: 'Some Indicator',
            IndicatorID: 'ALC04',
            Topic: 'Some Topic',
            TopicID: 'ALC',
            DataSource: null,
            StratificationCategory: 'Overall',
            Stratification: 'Overall',
            StratificationId1: 'OVR',
            StratificationCategoryId: 'OVERALL',
            YearStart: null,
            YearEnd: 2019,
            DataValue: 2,
            DataValueUnit: 'Number',
            LowConfidenceLimit: 1.6,
            HighConfidenceLimit: 2.9,
            DataValueType: null,
            DataValueTypeID: 'CRDMEDN'
          }
        ]
      }
    },
    {
      matcher: {
        name: 'methodologyYear',
        url: 'path:/methodology',
        query: {
          $select: 'distinct year'
        }
      },
      response: {
        status: 200,
        body: methodologyAPI('distinct year')
      }
    },
    ...['a', 'b'].map(methodology => {
      return {
        matcher: {
          name: 'methodology' + methodology,
          url: 'path:/methodology',
          query: {
            methodology: `"${methodology}"`
          }
        },
        response: {
          status: 200,
          body: methodologyAPI('*', ['methodology', methodology])
        }
      }
    }),
    ...[1999, 2000, 2012, 2013].map(year => {
      return {
        matcher: {
          name: 'methodology' + year,
          url: 'path:/methodology',
          query: {
            $select: 'distinct methodology',
            year
          }
        },
        response: {
          status: 200,
          body: methodologyAPI('distinct methodology', ['year', year])
        }
      }
    })
  ]
}

export const RegressionAPIFiltersMap: Story = {
  args: {
    config: APIFiltersMapData as unknown as Config,
    isEditor: false
  },
  parameters: {
    fetchMock
  }
  // TODO: Re-enable play function when fetch-mock is fully compatible with Storybook 9 + Vitest
  // play: async ({ canvasElement }) => {
  //   const canvas = within(canvasElement)
  //   const user = userEvent.setup()
  //   // play is running before full rendering is complete so sleep function
  //   // is needed to delay the execution.
  //   // possible related bug: https://github.com/storybookjs/storybook/issues/18258
  //   await sleep(1000)
  //   const topicsFilter = canvas.getByLabelText('Category', { selector: 'select' })
  //   await user.selectOptions(topicsFilter, ['topicId'])
  //   await sleep(1000)

  //   const indicatorsFilter = canvas.getByLabelText('Indicator', { selector: 'select' })
  //   await user.selectOptions(indicatorsFilter, ['indicatorID'])
  //   const yearsFilter = canvas.getByLabelText('Year', { selector: 'select' })
  //   await user.selectOptions(yearsFilter, ['Some Year 0'])
  //   const stratCategoryFilter = canvas.getByLabelText('View By', { selector: 'select' })
  //   await user.selectOptions(stratCategoryFilter, ['Some StratificationCategory 0'])
  //   const stratFilter = canvas.getByLabelText('Stratification', { selector: 'select' })
  //   await user.selectOptions(stratFilter, ['Some Stratification 0'])
  //   await user.click(canvas.getByText('GO!'))
  // }
}

export const RegressionAPIFiltersChart: Story = {
  args: {
    config: APIFiltersChartData as unknown as Config,
    isEditor: false
  },
  parameters: {
    fetchMock
  }
  // TODO: Re-enable play function when fetch-mock is fully compatible with Storybook 9 + Vitest
  // play: async ({ canvasElement }) => {
  //   const canvas = within(canvasElement)
  //   const user = userEvent.setup()
  //   // play is running before full rendering is complete so sleep function
  //   // is needed to delay the execution.
  //   // possible related bug: https://github.com/storybookjs/storybook/issues/18258
  //   await sleep(1000)
  //   const locationFilter = canvas.getByLabelText('Location', { selector: 'select' })
  //   await user.selectOptions(locationFilter, ['MS'])
  //   const topicsFilter = canvas.getByLabelText('Category', { selector: 'select' })
  //   await user.selectOptions(topicsFilter, ['topicId'])
  //   const indicatorsFilter = canvas.getByLabelText('Indicator', { selector: 'select' })
  //   await user.selectOptions(indicatorsFilter, ['indicatorID'])
  //   await user.click(canvas.getByText('GO!'))
  //   await sleep(1000)
  //   const yearFilter = canvas.getByLabelText('Year', { selector: 'select' })
  //   await user.selectOptions(yearFilter, ['Some Year 1'])
  // }
}

export const RegressionHiddenFilter: Story = {
  args: {
    config: MethodologyConfig,
    isEditor: false
  },
  parameters: {
    fetchMock
  }
  // TODO: Re-enable play function when fetch-mock is fully compatible with Storybook 9 + Vitest
  // play: async ({ canvasElement }) => {
  //   const canvas = within(canvasElement)
  //   const user = userEvent.setup()
  //   // play is running before full rendering is complete so sleep function
  //   // is needed to delay the execution.
  //   // possible related bug: https://github.com/storybookjs/storybook/issues/18258
  //   await sleep(1000)
  //   const yearFilter = canvas.getByLabelText('Year', { selector: 'select' })
  //   await user.selectOptions(yearFilter, ['1999'])
  //   await user.click(canvas.getByText('GO!'))
  //   await sleep(500)
  //   canvas.getAllByText('alabama')
  //   canvas.getAllByText('alaska')
  //   canvas.getAllByText('arizona')
  //   await user.selectOptions(yearFilter, ['2012'])
  //   await user.click(canvas.getByText('GO!'))
  //   await sleep(500)
  //   canvas.getAllByText('new york')
  //   canvas.getAllByText('new jersey')
  //   canvas.getAllByText('new mexico')
  // }
}

export const RegressionMultiVisualizationTests: Story = {
  args: {
    config: { ...MultiVizConfig, datasets: multiVizData },
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const user = userEvent.setup()
    // play is running before full rendering is complete so sleep function
    // is needed to delay the execution.
    // possible related bug: https://github.com/storybookjs/storybook/issues/18258
    await sleep(1000)
    const categoryFilter = canvas.getByLabelText('Category', { selector: 'select' })
    canvas.getAllByText('Paraguay')
    canvas.getAllByText('Poland')
    canvas.getAllByText('Iraq')
    await user.selectOptions(categoryFilter, ['category-3'])
    canvas.getAllByText('Paraguay')
    canvas.getAllByText('Ethiopia')
    canvas.getAllByText('Iraq')
    await user.selectOptions(categoryFilter, ['category-1'])
    canvas.getAllByText('Poland')
    canvas.getAllByText('Ethiopia')
    canvas.getAllByText('Curacao')
  }
}

export const Top_Spacing_1: Story = {
  args: {
    config: TopSpacing_1,
    isEditor: false
  }
}

export const Top_Spacing_2: Story = {
  args: {
    config: TopSpacing_2,
    isEditor: false
  }
}

export const Top_Spacing_3: Story = {
  args: {
    config: TopSpacing_3,
    isEditor: false
  }
}

export const Top_Spacing_4: Story = {
  args: {
    config: TopSpacing_4,
    isEditor: false
  }
}

export const Gallery_Data_Bite_Dashboard: Story = {
  args: {
    config: GalleryDataBiteDashboard,
    isEditor: false
  }
}

export const Clear_Filters_Button: Story = {
  args: {
    config: APIFilterResetConfig as unknown as Config,
    isEditor: false
  }
}

export const Cascading_Multi_Parent_Data_Filters: Story = {
  args: {
    config: CascadingDataFilters as unknown as Config,
    isEditor: false
  },
  parameters: {
    docs: {
      description: {
        story:
          'Demonstrates cascading data filters with multiple parent relationships. The size filter depends on color, and weight depends on both color and size, creating a multi-tier cascading filter system with deterministic test data.'
      }
    }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const user = userEvent.setup()

    // Get all filter dropdowns (using findBy to wait for them)
    const colorFilter = (await canvas.findByLabelText('color', { selector: 'select' })) as HTMLSelectElement
    const sizeFilter = (await canvas.findByLabelText('size', { selector: 'select' })) as HTMLSelectElement
    const weightFilter = (await canvas.findByLabelText('weight', { selector: 'select' })) as HTMLSelectElement
    const smellFilter = (await canvas.findByLabelText('smell', { selector: 'select' })) as HTMLSelectElement

    // Helper to get non-empty filter options
    const getFilterOptions = (filter: HTMLSelectElement) =>
      Array.from(filter.querySelectorAll('option'))
        .map(opt => opt.value)
        .filter(v => v)

    // Helper to get state of filters and chart
    const getState = () => ({
      colorOptions: getFilterOptions(colorFilter),
      colorSelected: colorFilter.value,
      sizeOptions: getFilterOptions(sizeFilter),
      sizeSelected: sizeFilter.value,
      weightOptions: getFilterOptions(weightFilter),
      weightSelected: weightFilter.value,
      smellOptions: getFilterOptions(smellFilter),
      smellSelected: smellFilter.value,
      chartRendered: !!canvasElement.querySelector('svg'),
      noDataVisible: !!canvas.queryByText('No Data Available')
    })

    // Initial verification - wait for options to populate
    await waitForOptionsToPopulate(colorFilter, 3)
    const initialState = getState()
    expect(initialState.chartRendered).toBe(true)
    expect(initialState.noDataVisible).toBe(false)

    // ============================================================================
    // TEST: Color → Size cascade (single parent)
    // ============================================================================

    // Test 1: Select blue → size should show all 3 sizes
    await performAndAssert(
      'Select color=blue → size shows large, medium, small',
      getState,
      async () => await user.selectOptions(colorFilter, ['blue']),
      (before, after) =>
        after.colorSelected === 'blue' &&
        after.sizeOptions.includes('large') &&
        after.sizeOptions.includes('medium') &&
        after.sizeOptions.includes('small') &&
        after.sizeOptions.length === 3 &&
        after.chartRendered &&
        !after.noDataVisible
    )

    // Test 2: Select red → size should show only small, medium
    await performAndAssert(
      'Select color=red → size shows medium, small (no large)',
      getState,
      async () => await user.selectOptions(colorFilter, ['red']),
      (before, after) =>
        after.colorSelected === 'red' &&
        after.sizeOptions.includes('medium') &&
        after.sizeOptions.includes('small') &&
        !after.sizeOptions.includes('large') &&
        after.sizeOptions.length === 2 &&
        after.chartRendered &&
        !after.noDataVisible
    )

    // Test 3: Select green → size should show only large
    await performAndAssert(
      'Select color=green → size shows only large',
      getState,
      async () => await user.selectOptions(colorFilter, ['green']),
      (before, after) =>
        after.colorSelected === 'green' &&
        after.sizeOptions.length === 1 &&
        after.sizeOptions[0] === 'large' &&
        after.sizeSelected === 'large' &&
        after.chartRendered &&
        !after.noDataVisible
    )

    // ============================================================================
    // TEST: Color + Size → Weight cascade (multiple parents)
    // ============================================================================

    // Test 4: Select blue + small → weight updates based on both parents
    await performAndAssert(
      'Select color=blue → size options repopulate',
      getState,
      async () => await user.selectOptions(colorFilter, ['blue']),
      (before, after) =>
        after.colorSelected === 'blue' && after.sizeSelected === 'large' && after.sizeOptions.length === 3
    )

    await performAndAssert(
      'Select size=small → weight updates based on color+size',
      getState,
      async () => await user.selectOptions(sizeFilter, ['small']),
      (before, after) =>
        after.colorSelected === 'blue' &&
        after.sizeSelected === 'small' &&
        after.weightOptions.length === 3 &&
        after.chartRendered &&
        !after.noDataVisible
    )

    // ============================================================================
    // TEST: Weight → Smell cascade
    // ============================================================================

    // Test 5: Select light → smell shows only neutral and sweet (2 options)
    await performAndAssert(
      'Select weight=light → smell shows neutral, sweet (not bitter)',
      getState,
      async () => await user.selectOptions(weightFilter, ['light']),
      (before, after) =>
        after.colorSelected === 'blue' &&
        after.sizeSelected === 'small' &&
        after.weightSelected === 'light' &&
        after.smellOptions.includes('neutral') &&
        after.smellOptions.includes('sweet') &&
        !after.smellOptions.includes('bitter') &&
        after.smellOptions.length === 2 &&
        after.chartRendered &&
        !after.noDataVisible
    )

    // ============================================================================
    // TEST: Full cascade verification - change parent and verify all children
    // ============================================================================

    // Test 6: Final - select red again and verify entire cascade updates
    await performAndAssert(
      'Select color=red → all filters update; size shows medium, small',
      getState,
      async () => await user.selectOptions(colorFilter, ['red']),
      (before, after) =>
        after.colorSelected === 'red' &&
        after.sizeOptions.length === 2 &&
        after.sizeOptions.includes('medium') &&
        after.sizeOptions.includes('small') &&
        // Size, weight, and smell selected values should be valid in their updated options
        after.sizeOptions.includes(after.sizeSelected) &&
        after.weightOptions.includes(after.weightSelected) &&
        after.smellOptions.includes(after.smellSelected) &&
        after.chartRendered &&
        !after.noDataVisible
    )
  }
}

export const Parent_Child_Filters_With_DefaultValue: Story = {
  args: {
    config: ParentChildFilters as unknown as Config,
    isEditor: false
  },
  parameters: {
    docs: {
      description: {
        story:
          'Demonstrates parent-child filter relationships (State → County → City) with defaultValue support. Shows how child filter options update based on parent selection, and how defaultValue is applied on initial load.'
      }
    }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const user = userEvent.setup()

    // Get filter dropdowns
    const stateFilter = (await canvas.findByLabelText('State', { selector: 'select' })) as HTMLSelectElement
    const countyFilter = (await canvas.findByLabelText('County', { selector: 'select' })) as HTMLSelectElement
    const cityFilter = (await canvas.findByLabelText('City', { selector: 'select' })) as HTMLSelectElement

    const getFilterOptions = (select: HTMLSelectElement) =>
      Array.from(select.options)
        .map(o => o.value)
        .filter(Boolean)

    const getState = () => ({
      stateOptions: getFilterOptions(stateFilter),
      stateSelected: stateFilter.value,
      countyOptions: getFilterOptions(countyFilter),
      countySelected: countyFilter.value,
      cityOptions: getFilterOptions(cityFilter),
      citySelected: cityFilter.value,
      chartRendered: !!canvasElement.querySelector('svg')
    })

    // Wait for initial load
    await waitForOptionsToPopulate(stateFilter, 3)
    const initialState = getState()

    // Verify defaultValue is applied on initial load
    expect(initialState.stateSelected).toBe('California')
    expect(initialState.countySelected).toBe('Los Angeles')
    expect(initialState.citySelected).toBe('Los Angeles')
    expect(initialState.chartRendered).toBe(true)

    // Test 1: Change state to Texas → county and city should update
    await performAndAssert(
      'Select state=Texas → county shows Texas counties',
      getState,
      async () => await user.selectOptions(stateFilter, ['Texas']),
      (before, after) =>
        after.stateSelected === 'Texas' &&
        after.countyOptions.includes('Harris') &&
        after.countyOptions.includes('Dallas') &&
        after.countyOptions.includes('Bexar') &&
        after.countyOptions.includes('Travis') &&
        !after.countyOptions.includes('Los Angeles') &&
        after.chartRendered
    )

    // Test 2: Select county → city options update
    await performAndAssert(
      'Select county=Harris → city shows Houston, Pasadena',
      getState,
      async () => await user.selectOptions(countyFilter, ['Harris']),
      (before, after) =>
        after.countySelected === 'Harris' &&
        after.cityOptions.includes('Houston') &&
        after.cityOptions.includes('Pasadena') &&
        after.cityOptions.length === 2 &&
        after.chartRendered
    )

    // Test 3: Change state back to California → verify cascade updates
    await performAndAssert(
      'Select state=California → filters reset to California data',
      getState,
      async () => await user.selectOptions(stateFilter, ['California']),
      (before, after) =>
        after.stateSelected === 'California' &&
        after.countyOptions.includes('Los Angeles') &&
        after.countyOptions.includes('San Diego') &&
        after.countyOptions.includes('Orange') &&
        after.chartRendered
    )

    // Test 4: Select Orange county → verify city options
    await performAndAssert(
      'Select county=Orange → city shows Anaheim, Santa Ana, Irvine',
      getState,
      async () => await user.selectOptions(countyFilter, ['Orange']),
      (before, after) =>
        after.countySelected === 'Orange' &&
        after.cityOptions.includes('Anaheim') &&
        after.cityOptions.includes('Santa Ana') &&
        after.cityOptions.includes('Irvine') &&
        after.cityOptions.length === 3 &&
        !after.cityOptions.includes('Los Angeles') &&
        after.chartRendered
    )
  }
}

export const Nested_Dropdown_With_Parent_Child: Story = {
  args: {
    config: NestedParentChildFilters as unknown as Config,
    isEditor: false
  },
  parameters: {
    docs: {
      description: {
        story:
          'Demonstrates nested dropdown filters (Year/Quarter subGrouping) with parent-child relationships. The Year/Quarter filter depends on Region selection, and both Year and Quarter defaultValue properties are respected on initial load.'
      }
    }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const user = userEvent.setup()

    // Get filter dropdowns
    const regionFilter = (await canvas.findByLabelText('Region', { selector: 'select' })) as HTMLSelectElement
    const yearQuarterInput = canvasElement.querySelector('.nested-dropdown input') as HTMLInputElement

    const getFilterOptions = (select: HTMLSelectElement) =>
      Array.from(select.options)
        .map(o => o.text)
        .filter(Boolean)

    const getNestedDropdownOptions = () => {
      const container = yearQuarterInput.closest('.nested-dropdown')
      if (!container) return []
      return Array.from(container.querySelectorAll('li[role="treeitem"]'))
        .map(li => li.getAttribute('aria-label') || li.textContent?.trim() || '')
        .filter(Boolean)
    }

    const getState = () => ({
      regionOptions: getFilterOptions(regionFilter),
      regionSelected: regionFilter.value,
      yearQuarterOptions: getNestedDropdownOptions(),
      yearQuarterSelected: yearQuarterInput.value,
      chartRendered: !!canvasElement.querySelector('svg')
    })

    // Wait for initial load
    await waitForOptionsToPopulate(regionFilter, 4)
    const initialState = getState()

    // Verify defaultValue is applied on initial load (North region, 2023 Q2)
    expect(initialState.regionSelected).toBe('North')
    expect(initialState.yearQuarterSelected).toContain('2023')
    expect(initialState.yearQuarterSelected).toContain('Q2')
    expect(initialState.chartRendered).toBe(true)

    // Test 1: Change region to South → year options should update based on available data
    await performAndAssert(
      'Select region=South → year/quarter filter updates',
      getState,
      async () => await user.selectOptions(regionFilter, ['South']),
      (before, after) =>
        after.regionSelected === 'South' &&
        after.yearQuarterOptions.some(opt => opt.includes('2022')) &&
        after.yearQuarterOptions.some(opt => opt.includes('2023')) &&
        after.yearQuarterOptions.some(opt => opt.includes('2024')) &&
        after.chartRendered
    )

    // Test 2: Change region to East → should only show 2023 and 2024 (no 2022 data for East)
    await performAndAssert(
      'Select region=East → year shows only 2023, 2024',
      getState,
      async () => await user.selectOptions(regionFilter, ['East']),
      (before, after) =>
        after.regionSelected === 'East' &&
        after.yearQuarterOptions.some(opt => opt.includes('2023')) &&
        after.yearQuarterOptions.some(opt => opt.includes('2024')) &&
        !after.yearQuarterOptions.some(opt => opt.includes('2022')) &&
        after.chartRendered
    )

    // Test 3: Change region to West → should only show 2023 Q3-Q4 and 2024
    await performAndAssert(
      'Select region=West → limited year/quarter options',
      getState,
      async () => await user.selectOptions(regionFilter, ['West']),
      (before, after) =>
        after.regionSelected === 'West' &&
        (after.yearQuarterOptions.some(opt => opt.includes('2023')) ||
          after.yearQuarterOptions.some(opt => opt.includes('2024'))) &&
        !after.yearQuarterOptions.some(opt => opt.includes('2022')) &&
        after.chartRendered
    )

    // Test 4: Change back to North → verify all years available again
    await performAndAssert(
      'Select region=North → all years (2022-2024) available',
      getState,
      async () => await user.selectOptions(regionFilter, ['North']),
      (before, after) =>
        after.regionSelected === 'North' &&
        after.yearQuarterOptions.some(opt => opt.includes('2022')) &&
        after.yearQuarterOptions.some(opt => opt.includes('2023')) &&
        after.yearQuarterOptions.some(opt => opt.includes('2024')) &&
        after.chartRendered
    )
  }
}

export const Metadata_In_Dashboard: Story = {
  args: {
    configUrl: '/packages/dashboard/tests/fixtures/dashboard-config-with-metadata.json'
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    const subtext = await waitForPresence('.subtext', canvasElement)
    expect(subtext?.textContent).toContain('January 15, 2026')
    const biteSubtext = await waitForPresence('.bite-subtext', canvasElement)
    expect(biteSubtext?.textContent).toContain('CDC NREVSS')
  }
}

export const Tab_Simple_Filter: Story = {
  args: {
    config: TabSimpleFilterConfig as unknown as Config,
    isEditor: false
  },
  parameters: {
    docs: {
      description: {
        story:
          'Demonstrates the tab-simple filter style on a dashboard. Uses tab buttons instead of a dropdown to switch between filter values.'
      }
    }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await canvas.findByText('Sales by Category')
    const tabContainer = canvasElement.querySelector('.tab-simple-container')
    await expect(tabContainer).toBeTruthy()
  }
}

const EqualHeightThreeRowsConfig = {
  type: 'dashboard',
  data: [
    {
      Category: 'Adults',
      Rate: '68.5',
      Target: '80.0',
      Screened: '72.8',
      Location: 'Alabama',
      Year: '2021',
      Type: 'State',
      Amount: 1454
    },
    {
      Category: 'Seniors',
      Rate: '82.3',
      Target: '90.0',
      Screened: '84.6',
      Location: 'Alaska',
      Year: '2021',
      Type: 'State',
      Amount: 1690
    },
    {
      Category: 'Youth',
      Rate: '54.2',
      Target: '70.0',
      Screened: '65.3',
      Location: 'Arizona',
      Year: '2021',
      Type: 'State',
      Amount: 1572
    }
  ],
  dashboard: { theme: 'theme-blue', sharedFilters: [] },
  rows: [
    {
      equalHeight: true,
      columns: [
        { width: 4, widget: 'row1-bite' },
        { width: 4, widget: 'row1-markup' },
        { width: 4, widget: 'row1-waffle' }
      ]
    },
    {
      equalHeight: true,
      columns: [
        { width: 4, widget: 'row2-waffle' },
        { width: 4, widget: 'row2-bite' },
        { width: 4, widget: 'row2-markup' }
      ]
    },
    {
      equalHeight: true,
      columns: [
        { width: 4, widget: 'row3-markup' },
        { width: 4, widget: 'row3-waffle' },
        { width: 4, widget: 'row3-bite' }
      ]
    },
    {
      equalHeight: true,
      columns: [
        { width: 4, widget: 'row4-chart' },
        { width: 4, widget: 'row4-map' },
        { width: 4, widget: 'row4-bite' }
      ]
    },
    {
      equalHeight: true,
      columns: [
        { width: 4, widget: 'row5-bite' },
        { width: 4, widget: 'row5-waffle' },
        { width: 4, widget: 'row5-markup' }
      ]
    }
  ],
  table: { label: 'Data Table', show: false },
  visualizations: {
    'row1-bite': {
      uid: 'row1-bite',
      type: 'data-bite',
      title: 'Vaccination Coverage',
      biteStyle: 'tp5',
      dataColumn: 'Rate',
      dataFunction: 'Mean (Average)',
      biteBody: 'of adults received the seasonal flu vaccine.',
      subtext: 'Based on 2024 CDC surveillance data.',
      dataFormat: { roundToPlace: 1, commas: true, prefix: '', suffix: '%' },
      theme: 'theme-blue',
      visual: { hideBackgroundColor: false }
    },
    'row1-markup': {
      uid: 'row1-markup',
      type: 'markup-include',
      visualizationType: 'markup-include',
      filters: [],
      filterBehavior: 'Filter Change',
      openModal: false,
      showEditorPanel: false,
      theme: 'theme-blue',
      contentEditor: {
        title: 'About Vaccination Data',
        titleStyle: 'small',
        showHeader: true,
        srcUrl: '#example',
        useInlineHTML: true,
        allowHideSection: false,
        showNoDataMessage: false,
        inlineHTML: `
          <p>This section provides context for the vaccination coverage metrics shown in this row.</p>
          <p>Data is collected annually from a nationally representative household survey. Results are weighted to reflect the U.S. adult population aged 18 and older.</p>
        `
      },
      visual: { border: true, accent: true, background: true, hideBackgroundColor: false, borderColorTheme: false }
    },
    'row1-waffle': {
      uid: 'row1-waffle',
      type: 'waffle-chart',
      title: 'Flu Vaccination Rate',
      visualizationType: 'TP5 Waffle',
      visualizationSubType: 'linear',
      showPercent: true,
      showDenominator: false,
      content: 'of adults vaccinated.',
      subtext: '',
      dataColumn: 'Rate',
      dataFunction: 'Mean (Average)',
      customDenom: false,
      dataDenom: '100',
      suffix: '%',
      roundToPlace: '1',
      theme: 'theme-blue',
      shape: 'square',
      visual: { whiteBackground: false },
      showTitle: true,
      overallFontSize: 'medium'
    },
    'row2-waffle': {
      uid: 'row2-waffle',
      type: 'waffle-chart',
      title: 'Health Insurance Coverage',
      visualizationType: 'TP5 Waffle',
      visualizationSubType: 'linear',
      showPercent: true,
      showDenominator: false,
      content: 'of seniors have health insurance coverage through Medicare, Medicaid, or a private insurer.',
      subtext: 'Includes all government and private plan types reported in the survey.',
      dataColumn: 'Target',
      dataFunction: 'Mean (Average)',
      customDenom: false,
      dataDenom: '100',
      suffix: '%',
      roundToPlace: '1',
      theme: 'theme-teal',
      shape: 'person',
      visual: { whiteBackground: false },
      showTitle: true,
      overallFontSize: 'medium'
    },
    'row2-bite': {
      uid: 'row2-bite',
      type: 'data-bite',
      title: 'Insurance Target Met',
      biteStyle: 'tp5',
      dataColumn: 'Target',
      dataFunction: 'Mean (Average)',
      biteBody:
        'average insurance coverage target across all age groups, exceeding the Healthy People 2030 benchmark of 92.5%. Results reflect multi-year trend data collected from the National Health Interview Survey.',
      subtext: 'Source: NHIS 2024.',
      dataFormat: { roundToPlace: 1, commas: true, prefix: '', suffix: '%' },
      theme: 'theme-teal',
      visual: { hideBackgroundColor: false }
    },
    'row2-markup': {
      uid: 'row2-markup',
      type: 'markup-include',
      visualizationType: 'markup-include',
      filters: [],
      filterBehavior: 'Filter Change',
      openModal: false,
      showEditorPanel: false,
      theme: 'theme-teal',
      contentEditor: {
        title: 'Coverage Notes',
        titleStyle: 'small',
        showHeader: true,
        srcUrl: '#example',
        useInlineHTML: true,
        allowHideSection: false,
        showNoDataMessage: false,
        inlineHTML: `<p>Short note about coverage methodology.</p>`
      },
      visual: { border: true, accent: true, background: true, hideBackgroundColor: false, borderColorTheme: false }
    },
    'row3-markup': {
      uid: 'row3-markup',
      type: 'markup-include',
      visualizationType: 'markup-include',
      filters: [],
      filterBehavior: 'Filter Change',
      openModal: false,
      showEditorPanel: false,
      theme: 'theme-purple',
      contentEditor: {
        title: 'Cancer Screening Background',
        titleStyle: 'small',
        showHeader: true,
        srcUrl: '#example',
        useInlineHTML: true,
        allowHideSection: false,
        showNoDataMessage: false,
        inlineHTML: `
          <p>Cancer screening completion rates reflect the percentage of eligible adults who completed recommended preventive screenings during the reporting period.</p>
          <p>Recommended screenings tracked in this dashboard include:</p>
          <ul>
            <li>Mammography (women aged 40–74)</li>
            <li>Colonoscopy or FOBT (adults aged 45–75)</li>
            <li>Cervical cancer screening via Pap smear or HPV co-test (women aged 21–65)</li>
            <li>Lung cancer low-dose CT (high-risk adults aged 50–80)</li>
          </ul>
          <p>All rates are age-adjusted to the 2000 U.S. standard population.</p>
        `
      },
      visual: { border: true, accent: true, background: true, hideBackgroundColor: false, borderColorTheme: false }
    },
    'row3-waffle': {
      uid: 'row3-waffle',
      type: 'waffle-chart',
      title: 'Cancer Screening Completion',
      visualizationType: 'TP5 Waffle',
      visualizationSubType: 'linear',
      showPercent: true,
      showDenominator: false,
      content: 'completed at least one recommended cancer screening in the past 12 months.',
      subtext: 'Data from NHIS 2024.',
      dataColumn: 'Screened',
      dataFunction: 'Mean (Average)',
      customDenom: false,
      dataDenom: '100',
      suffix: '%',
      roundToPlace: '1',
      theme: 'theme-purple',
      shape: 'circle',
      visual: { whiteBackground: false },
      showTitle: true,
      overallFontSize: 'medium'
    },
    'row3-bite': {
      uid: 'row3-bite',
      type: 'data-bite',
      title: 'Screening Rate',
      biteStyle: 'tp5',
      dataColumn: 'Screened',
      dataFunction: 'Mean (Average)',
      biteBody: '',
      subtext: '',
      dataFormat: { roundToPlace: 1, commas: true, prefix: '', suffix: '%' },
      theme: 'theme-purple',
      visual: { hideBackgroundColor: false }
    },
    'row4-bite': {
      uid: 'row4-bite',
      type: 'data-bite',
      title: 'Average Amount',
      biteStyle: 'tp5',
      dataColumn: 'Amount',
      dataFunction: 'Mean (Average)',
      biteBody:
        'average value across the three-state comparison set used to validate equal-height behavior with chart and map cards in the same row.',
      subtext: 'Synthetic dashboard story data.',
      dataFormat: { roundToPlace: 0, commas: true, prefix: '', suffix: '' },
      theme: 'theme-blue',
      visual: { hideBackgroundColor: false }
    },
    'row5-bite': {
      uid: 'row5-bite',
      type: 'data-bite',
      title: 'Legacy Screening Summary',
      biteStyle: 'title',
      bitePosition: 'Top',
      dataColumn: 'Screened',
      dataFunction: 'Mean (Average)',
      biteBody:
        'of respondents completed at least one recommended screening, with a longer explanatory sentence to make this legacy card taller than its neighbors before equal-height normalization.',
      subtext: 'Legacy data bite layout.',
      dataFormat: { roundToPlace: 1, commas: true, prefix: '', suffix: '%' },
      theme: 'theme-purple',
      visual: {
        border: true,
        accent: true,
        background: true,
        hideBackgroundColor: false,
        borderColorTheme: false
      }
    },
    'row5-waffle': {
      uid: 'row5-waffle',
      type: 'waffle-chart',
      title: 'Legacy Waffle',
      visualizationType: 'Waffle',
      visualizationSubType: 'linear',
      showPercent: true,
      showDenominator: false,
      content: 'of adults completed the standard prevention checklist.',
      subtext: 'Standard waffle layout for equal-height validation.',
      dataColumn: 'Rate',
      dataFunction: 'Mean (Average)',
      customDenom: false,
      dataDenom: '100',
      suffix: '%',
      roundToPlace: '1',
      theme: 'theme-purple',
      shape: 'square',
      visual: {
        border: true,
        accent: true,
        background: true,
        hideBackgroundColor: false,
        borderColorTheme: false
      },
      showTitle: true,
      overallFontSize: 'medium'
    },
    'row5-markup': {
      uid: 'row5-markup',
      type: 'markup-include',
      visualizationType: 'markup-include',
      filters: [],
      filterBehavior: 'Filter Change',
      openModal: false,
      showEditorPanel: false,
      theme: 'theme-purple',
      contentEditor: {
        title: 'Legacy Markup Include',
        titleStyle: 'small',
        showHeader: true,
        srcUrl: '#example',
        useInlineHTML: true,
        allowHideSection: false,
        showNoDataMessage: false,
        inlineHTML: `
          <p>This legacy markup include is paired with a non-TP5 data bite and a standard waffle chart.</p>
          <p>Its content length is intentionally different so the equal-height row has to normalize three legacy card layouts in the same row.</p>
        `
      },
      visual: { border: true, accent: true, background: true, hideBackgroundColor: false, borderColorTheme: false }
    }
  }
}

const equalHeightChartTemplate = cloneDeep(EqualHeightMixedVizConfig.visualizations.chart1699383531543)
const equalHeightMapTemplate = cloneDeep(EqualHeightMixedVizConfig.visualizations.map1699383540561)

if (equalHeightChartTemplate) {
  EqualHeightThreeRowsConfig.visualizations['row4-chart'] = {
    ...equalHeightChartTemplate,
    uid: 'row4-chart',
    title: 'Average Amount by State',
    showTitle: true,
    theme: 'theme-blue',
    filters: [],
    dashboardFilters: [],
    xAxis: {
      ...equalHeightChartTemplate.xAxis,
      dataKey: 'Location'
    },
    series: [
      {
        dataKey: 'Amount',
        type: 'Bar',
        axis: 'Left',
        tooltip: true
      }
    ]
  }
}

if (equalHeightMapTemplate) {
  EqualHeightThreeRowsConfig.visualizations['row4-map'] = {
    ...equalHeightMapTemplate,
    uid: 'row4-map',
    filters: [],
    theme: 'theme-blue',
    general: {
      ...equalHeightMapTemplate.general,
      title: 'State Amount Map',
      showTitle: true
    }
  }
}

export const Equal_Height_Data_Bite_Markup_Waffle: Story = {
  args: {
    config: EqualHeightThreeRowsConfig as unknown as Config,
    isEditor: false
  },
  parameters: {
    docs: {
      description: {
        story:
          'Five equal-height rows mixing TP5 and non-TP5 data-bite, markup-include, waffle-chart, chart, and map. Tests that equal-height normalization works across multiple visualization types with intentionally uneven content lengths.'
      }
    }
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    await waitForPresence('.cove-markup-include', canvasElement)
    await waitForPresence('.cove-waffle-chart, .cove-gauge-chart', canvasElement)
    await waitForPresence('.bite, .cdc-callout', canvasElement)
    await waitForPresence('.cove-chart', canvasElement)
    await waitForPresence('.cdc-open-viz-module.type-map', canvasElement)
  }
}

export default meta
