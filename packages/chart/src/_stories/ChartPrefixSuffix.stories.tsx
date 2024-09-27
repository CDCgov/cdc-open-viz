import type { Meta, StoryObj } from '@storybook/react'
import barConfig from './_mock/line_chart_two_points_new_chart.json'
import annotationConfig from './_mock/annotation_category_mock.json'
import areaPrefix from './_mock/annotation_category_mock.json'
import horizontalBarConfig from './_mock/horizontal_bar.json'

import Chart from '../CdcChart'
import { editConfigKeys } from '../helpers/configHelpers'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Prefix Suffix',
  component: Chart
}

type Story = StoryObj<typeof Chart>

export const Top_Suffix: Story = {
  args: {
    config: editConfigKeys(barConfig, [
      { path: ['dataFormat', 'onlyShowTopPrefixSuffix'], value: true },
      { path: ['dataFormat', 'suffix'], value: ' Somethings per Something' },
      { path: ['yAxis', 'gridLines'], value: true }
    ])
  }
}

export const Top_Suffix_Worst_Case: Story = {
  args: {
    config: editConfigKeys(annotationConfig, [
      { path: ['dataFormat', 'onlyShowTopPrefixSuffix'], value: true },
      { path: ['dataFormat', 'suffix'], value: ' Somethings per Something' }
    ])
  }
}

export const Top_Suffix_With_Options: Story = {
  args: {
    config: editConfigKeys(annotationConfig, [
      { path: ['dataFormat', 'onlyShowTopPrefixSuffix'], value: true },
      { path: ['yAxis', 'tickRotation'], value: 45 },
      { path: ['yAxis', 'tickLabelColor'], value: 'red' }
    ])
  }
}

export const Top_Suffix_One_Char: Story = {
  args: {
    config: editConfigKeys(annotationConfig, [
      { path: ['dataFormat', 'onlyShowTopPrefixSuffix'], value: true },
      { path: ['dataFormat', 'suffix'], value: '%' }
    ])
  }
}

export const Suffix: Story = {
  args: {
    config: annotationConfig
  }
}
export const Top_Prefix: Story = {
  args: {
    config: editConfigKeys(annotationConfig, [
      { path: ['dataFormat', 'onlyShowTopPrefixSuffix'], value: true },
      { path: ['dataFormat', 'prefix'], value: '$' },
      { path: ['dataFormat', 'suffix'], value: '' }
    ])
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

export const Top_Prefix_And_Suffix: Story = {
  args: {
    config: editConfigKeys(annotationConfig, [
      { path: ['dataFormat', 'onlyShowTopPrefixSuffix'], value: true },
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

export const Top_Suffix_On_Line: Story = {
  args: {
    config: editConfigKeys(barConfig, [
      { path: ['dataFormat', 'onlyShowTopPrefixSuffix'], value: true },
      { path: ['dataFormat', 'suffix'], value: ' Somethings per Something' },
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
      { path: ['dataFormat', 'onlyShowTopPrefixSuffix'], value: true },
      { path: ['dataFormat', 'prefix'], value: 'pre' },
      { path: ['dataFormat', 'suffix'], value: ' Somethings per Something' },
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

export default meta
