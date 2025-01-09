import type { Meta, StoryObj } from '@storybook/react'

import Chart from '../CdcChart'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Respiratory Virus',
  component: Chart
}

type Story = StoryObj<typeof Chart>

import test_in_percent_test_positivity_in_usa_json from './_mock/respiratory-virus/test-in-percent-test-positivity-in-usa.json'
export const test_in_percent_test_positivity_in_usa: Story = {
  args: {
    config: test_in_percent_test_positivity_in_usa_json
  }
}

import trends_nhsn_json from './_mock/respiratory-virus/trends-nhsn.json'
export const trends_nhsn: Story = {
  args: {
    config: trends_nhsn_json
  }
}

import trends_rsv_json from './_mock/respiratory-virus/trends-rsv.json'
export const trends_rsv: Story = {
  args: {
    config: trends_rsv_json
  }
}

import trends_viral_deaths_2_json from './_mock/respiratory-virus/trends-viral-deaths-2.json'
export const trends_viral_deaths_2: Story = {
  args: {
    config: trends_viral_deaths_2_json
  }
}

import Respiratory_Virus_Activity_Age_relative_json from './_mock/respiratory-virus/Respiratory-Virus-Activity-Age_relative.json'
export const Respiratory_Virus_Activity_Age_relative: Story = {
  args: {
    config: Respiratory_Virus_Activity_Age_relative_json
  }
}

import Viral_Hospitalization_Age_Group_json from './_mock/respiratory-virus/Viral-Hospitalization-Age-Group.json'
export const Viral_Hospitalization_Age_Group: Story = {
  args: {
    config: Viral_Hospitalization_Age_Group_json
  }
}

import Viral_Respiratory_Deaths_Age_json from './_mock/respiratory-virus/Viral-Respiratory-Deaths-Age.json'
export const Viral_Respiratory_Deaths_Age: Story = {
  args: {
    config: Viral_Respiratory_Deaths_Age_json
  }
}

import Respiratory_Virus_Activity_rasc_ethnicity_json from './_mock/respiratory-virus/Respiratory-Virus-Activity-rasc-ethnicity.json'
export const Respiratory_Virus_Activity_rasc_ethnicity: Story = {
  args: {
    config: Respiratory_Virus_Activity_rasc_ethnicity_json
  }
}

import Viral_Hospitalization_race_ethnicity_json from './_mock/respiratory-virus/Viral-Hospitalization-race-ethnicity.json'
export const Viral_Hospitalization_race_ethnicity: Story = {
  args: {
    config: Viral_Hospitalization_race_ethnicity_json
  }
}

import Viral_Respiratory_Deaths_race_ethnicity_v2_json from './_mock/respiratory-virus/Viral-Respiratory-Deaths-race-ethnicity-v2.json'
export const Viral_Respiratory_Deaths_race_ethnicity_v2: Story = {
  args: {
    config: Viral_Respiratory_Deaths_race_ethnicity_v2_json
  }
}

import Respiratory_Virus_Activity_sex_json from './_mock/respiratory-virus/Respiratory-Virus-Activity-sex.json'
export const Respiratory_Virus_Activity_sex: Story = {
  args: {
    config: Respiratory_Virus_Activity_sex_json
  }
}

import Viral_Hospitalization_sex_json from './_mock/respiratory-virus/Viral-Hospitalization-sex.json'
export const Viral_Hospitalization_sex: Story = {
  args: {
    config: Viral_Hospitalization_sex_json
  }
}

import Viral_Respiratory_Deaths_sex_json from './_mock/respiratory-virus/Viral-Respiratory-Deaths-sex.json'
export const Viral_Respiratory_Deaths_sex: Story = {
  args: {
    config: Viral_Respiratory_Deaths_sex_json
  }
}

import covid_vaccination_trends_viz_json from './_mock/respiratory-virus/covid-vaccination-trends-viz.json'
export const covid_vaccination_trends_viz: Story = {
  args: {
    config: covid_vaccination_trends_viz_json
  }
}

import covid_vaccination_intent_viz_json from './_mock/respiratory-virus/covid-vaccination-intent-viz.json'
export const covid_vaccination_intent_viz: Story = {
  args: {
    config: covid_vaccination_intent_viz_json
  }
}

import flu_vaccination_trends_viz_json from './_mock/respiratory-virus/flu-vaccination-trends-viz.json'
export const flu_vaccination_trends_viz: Story = {
  args: {
    config: flu_vaccination_trends_viz_json
  }
}

import flu_vaccination_intent_viz_json from './_mock/respiratory-virus/flu-vaccination-intent-viz.json'
export const flu_vaccination_intent_viz: Story = {
  args: {
    config: flu_vaccination_intent_viz_json
  }
}

import rsv_vaccination_trends_viz_json from './_mock/respiratory-virus/rsv-vaccination-trends-viz.json'
export const rsv_vaccination_trends_viz: Story = {
  args: {
    config: rsv_vaccination_trends_viz_json
  }
}

import rsv_vaccination_intent_viz_json from './_mock/respiratory-virus/rsv-vaccination-intent-viz.json'
export const rsv_vaccination_intent_viz: Story = {
  args: {
    config: rsv_vaccination_intent_viz_json
  }
}

export default meta
