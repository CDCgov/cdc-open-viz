import type { Meta, StoryObj } from '@storybook/react'

import Chart from '../CdcChart'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Wrapper/Chart',
  component: Chart,
  decorators: [
    Story => (
      // fake the outer container for now.
      <Story />
    )
  ]
}

type Story = StoryObj<typeof Chart>

export const Wrapped_Chart: Story = {
  args: {
    config: {
      type: 'chart',
      title: 'Planet Radius (Bar Example)',
      theme: 'theme-blue',
      animate: false,
      fontSize: 'medium',
      lineDatapointStyle: 'hover',
      barHasBorder: 'false',
      isLollipopChart: false,
      lollipopShape: 'circle',
      lollipopColorStyle: 'two-tone',
      visualizationSubType: 'regular',
      barStyle: '',
      roundingStyle: 'standard',
      tipRounding: 'top',
      padding: {
        left: 5,
        right: 5
      },
      yAxis: {
        hideAxis: false,
        displayNumbersOnBar: false,
        hideLabel: false,
        hideTicks: false,
        size: 150,
        gridLines: false,
        min: '',
        max: '',
        labelColor: '#333',
        tickLabelColor: '#333',
        tickColor: '#333',
        rightHideAxis: true,
        rightAxisSize: 50,
        rightLabel: 'testing',
        rightLabelOffsetSize: 0,
        rightAxisLabelColor: '#333',
        rightAxisTickLabelColor: '#333',
        rightAxisTickColor: '#333',
        numTicks: '11',
        axisPadding: 0,
        tickRotation: 0,
        label: 'Measurement (1000km)',
        rightSeries: 'Diameter'
      },
      boxplot: {
        plots: [],
        borders: 'true',
        firstQuartilePercentage: 25,
        thirdQuartilePercentage: 75,
        boxWidthPercentage: 40,
        plotOutlierValues: false,
        plotNonOutlierValues: true,
        legend: {
          showHowToReadText: false,
          howToReadText: '',
          position: 'right'
        },
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
          count: 'Count',
          outliers: 'Outliers',
          values: 'Values'
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
        horizontal: 405
      },
      xAxis: {
        type: 'categorical',
        hideAxis: false,
        hideLabel: false,
        hideTicks: false,
        size: 75,
        tickRotation: '0',
        min: '',
        max: '',
        labelColor: '#333',
        tickLabelColor: '#333',
        tickColor: '#333',
        numTicks: '',
        labelOffset: 65,
        axisPadding: 0,
        label: 'Planet',
        dataKey: 'name'
      },
      table: {
        label: 'Data Table',
        expanded: false,
        limitHeight: false,
        height: '',
        caption: '',
        showDownloadUrl: false,
        show: true
      },
      orientation: 'vertical',
      legend: {
        behavior: 'isolate',
        position: 'right',
        singleRow: false,
        colorCode: '',
        reverseLabelOrder: false,
        description: '',
        dynamicLegend: false,
        dynamicLegendDefaultText: 'Show All',
        dynamicLegendItemLimit: 5,
        dynamicLegendItemLimitMessage: 'Dynamic Legend Item Limit Hit.',
        dynamicLegendChartMessage: 'Select Options from the Legend',
        hide: false
      },
      exclusions: {
        active: false,
        keys: []
      },
      palette: 'qualitative-bold',
      isPaletteReversed: false,
      labels: false,
      dataFormat: {
        commas: false,
        prefix: '',
        suffix: 'km',
        abbreviated: false,
        roundTo: 1
      },
      confidenceKeys: {},
      visual: {
        border: true,
        accent: true,
        background: false
      },
      data: [
        {
          name: 'Jupiter',
          Radius: '1000',
          Diameter: '22',
          distance: '0'
        },
        {
          name: 'Saturn',
          Radius: '900',
          Diameter: '18',
          distance: '0'
        },
        {
          name: 'Uranus',
          Radius: '1000',
          Diameter: '18',
          distance: '40'
        },
        {
          name: 'Neptune',
          Radius: '700',
          Diameter: '18',
          distance: '0'
        },
        {
          name: 'Venus',
          Radius: '500',
          Diameter: '18',
          distance: '0'
        },
        {
          name: 'Mars',
          Radius: '400',
          Diameter: '18',
          distance: '0'
        },
        {
          name: 'Mercury',
          Radius: '300',
          Diameter: '22',
          distance: '0'
        },
        {
          name: 'Pluto',
          Radius: '200',
          Diameter: '22',
          distance: '0'
        }
      ],
      visualizationType: 'Bar',
      series: [
        {
          dataKey: 'Radius',
          type: 'Deviation Bar',
          axis: 'Left'
        }
      ],
      dataCutoff: '0.5'
    }
  }
}

export default meta
