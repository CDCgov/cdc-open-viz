import type { Meta, StoryObj } from '@storybook/react'
import barConfig from './_mock/line_chart_two_points_new_chart.json'
import annotationConfig from './_mock/annotation_category_mock.json'
import areaPrefix from './_mock/annotation_category_mock.json'
import horizontalBarConfig from './_mock/horizontal_bar.json'
import scatterPlotConfig from './_mock/scatterplot_mock.json'

import Chart from '../CdcChartComponent'
import { editConfigKeys } from '@cdc/core/helpers/configHelpers'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Prefix Suffix',
  component: Chart
}

type Story = StoryObj<typeof Chart>

export const Inline_Label: Story = {
  args: {
    config: editConfigKeys(barConfig, [
      { path: ['yAxis', 'inlineLabel'], value: ' Somethings per Something' },
      { path: ['yAxis', 'gridLines'], value: true }
    ])
  }
}
export const Inline_Label_With_Suffix: Story = {
  args: {
    config: editConfigKeys(barConfig, [
      { path: ['yAxis', 'inlineLabel'], value: ' Somethings per Something' },
      { path: ['dataFormat', 'suffix'], value: '%' },
      { path: ['yAxis', 'gridLines'], value: true }
    ])
  }
}

export const Inline_Label_Worst_Case: Story = {
  args: {
    config: editConfigKeys(annotationConfig, [{ path: ['yAxis', 'inlineLabel'], value: ' Somethings per Something' }])
  }
}

export const Inline_Label_With_Options: Story = {
  args: {
    config: editConfigKeys(annotationConfig, [
      { path: ['yAxis', 'inlineLabel'], value: ' units' },
      { path: ['dataFormat', 'suffix'], value: '' },
      { path: ['yAxis', 'tickRotation'], value: 45 },
      { path: ['yAxis', 'tickLabelColor'], value: 'red' }
    ])
  }
}

export const Inline_Label_No_Space: Story = {
  args: {
    config: editConfigKeys(annotationConfig, [
      { path: ['yAxis', 'inlineLabel'], value: 'lbs' },
      { path: ['dataFormat', 'suffix'], value: '' }
    ])
  }
}

export const Inline_Label_With_Space: Story = {
  args: {
    config: editConfigKeys(annotationConfig, [
      { path: ['yAxis', 'inlineLabel'], value: 'lbs of something' },
      { path: ['dataFormat', 'suffix'], value: '' }
    ])
  }
}

export const Suffix: Story = {
  args: {
    config: annotationConfig
  }
}

export const Prefix: Story = {
  args: {
    config: editConfigKeys(areaPrefix, [
      { path: ['dataFormat', 'prefix'], value: '$' },
      { path: ['dataFormat', 'suffix'], value: '' }
    ])
  }
}

export const Prefix_Suffix_And_Inline_Title: Story = {
  args: {
    config: editConfigKeys(annotationConfig, [
      { path: ['yAxis', 'inlineLabel'], value: 'lbs of something' },
      { path: ['dataFormat', 'prefix'], value: '$' }
    ])
  }
}
export const Horizontal_Bar: Story = {
  args: {
    config: editConfigKeys(horizontalBarConfig, [
      { path: ['dataFormat', 'suffix'], value: ' suf' },
      { path: ['dataFormat', 'prefix'], value: 'pre' }
    ])
  }
}

export const Inline_Title_On_Line: Story = {
  args: {
    config: editConfigKeys(barConfig, [
      { path: ['yAxis', 'inlineLabel'], value: 'lbs of something' },
      { path: ['dataFormat', 'suffix'], value: '' },
      { path: ['yAxis', 'gridLines'], value: true },
      { path: ['yAxis', 'labelsAboveGridlines'], value: true },
      { path: ['yAxis', 'hideAxis'], value: true }
    ])
  }
}

export const Values_On_Line_All_Suffix: Story = {
  args: {
    config: editConfigKeys(annotationConfig, [
      { path: ['yAxis', 'labelsAboveGridlines'], value: true },
      { path: ['dataFormat', 'suffix'], value: ' units' },
      { path: ['yAxis', 'gridLines'], value: true },
      { path: ['yAxis', 'hideAxis'], value: true }
    ])
  }
}

export const Values_on_Line_Top_Suffix_Only_Area_Worst_Case: Story = {
  args: {
    config: editConfigKeys(annotationConfig, [
      { path: ['yAxis', 'inlineLabel'], value: ' of something' },
      { path: ['dataFormat', 'prefix'], value: 'pre' },
      { path: ['yAxis', 'labelsAboveGridlines'], value: true },
      { path: ['yAxis', 'gridLines'], value: true }
    ])
  }
}

export const Top_Suffix_Above_Gridlines_With_Options: Story = {
  args: {
    config: editConfigKeys(annotationConfig, [
      { path: ['yAxis', 'tickRotation'], value: 45 },
      { path: ['yAxis', 'tickLabelColor'], value: 'red' },
      { path: ['yAxis', 'labelsAboveGridlines'], value: true },
      { path: ['yAxis', 'gridLines'], value: true },
      { path: ['yAxis', 'hideAxis'], value: true }
    ])
  }
}

export const ScatterPlot_Bottom_Commas: Story = {
  args: {
    config: editConfigKeys(scatterPlotConfig, [{ path: ['dataFormat', 'bottomCommas'], value: true }])
  },
  isEditor: true
}

export default meta
