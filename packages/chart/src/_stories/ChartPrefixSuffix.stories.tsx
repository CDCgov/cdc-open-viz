import type { Meta, StoryObj } from '@storybook/react'
import annotationConfig from './_mock/annotation_category_mock.json'
import areaPrefix from './_mock/annotation_category_mock.json'

import Chart from '../CdcChart'
import { editConfigKeys } from '../helpers/configHelpers'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Prefix Suffix',
  component: Chart
}

type Story = StoryObj<typeof Chart>

export const Simplified_Suffix: Story = {
  args: {
    config: editConfigKeys(annotationConfig, [
      { path: ['dataFormat', 'simplifiedPrefixSuffix'], value: true },
      { path: ['dataFormat', 'suffix'], value: ' Somethings per Something' }
    ])
  }
}
export const SuffixSimplifiedWithOptions: Story = {
  args: {
    config: editConfigKeys(annotationConfig, [
      { path: ['dataFormat', 'simplifiedPrefixSuffix'], value: true },
      { path: ['yAxis', 'tickRotation'], value: 45 },
      { path: ['yAxis', 'tickLabelColor'], value: 'red' }
    ])
  }
}

export const SimplifiedSuffixOneChar: Story = {
  args: {
    config: editConfigKeys(annotationConfig, [
      { path: ['dataFormat', 'simplifiedPrefixSuffix'], value: true },
      { path: ['dataFormat', 'suffix'], value: '%' }
    ])
  }
}

export const Suffix: Story = {
  args: {
    config: annotationConfig
  }
}
export const SimplifiedPrefix: Story = {
  args: {
    config: editConfigKeys(annotationConfig, [
      { path: ['dataFormat', 'simplifiedPrefixSuffix'], value: true },
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

export const SimplifiedPrefixAndSuffix: Story = {
  args: {
    config: editConfigKeys(annotationConfig, [
      { path: ['dataFormat', 'simplifiedPrefixSuffix'], value: true },
      { path: ['dataFormat', 'prefix'], value: '$' }
    ])
  }
}

export default meta
