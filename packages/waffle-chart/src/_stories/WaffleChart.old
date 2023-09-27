import WaffleChart from '../components/WaffleChart'

// export const Text = {
//   args: {...},
// };

export default {
  title: 'Visualizations/Waffle Chart',
  component: WaffleChart
}

WaffleChart.defaultProps = {
  orientation: 'horizontal',
  overallFontSize: 'medium',
  invalidComparate: false,
  customDenom: false,
  dataDenom: 100,
  suffix: '%',
  roundToPlace: 0,
  shape: 'circle',
  nodeWidth: 10,
  nodeSpacer: 2,
  theme: 'blue'
}

const Template = (args) => <WaffleChart configObj={{ ...args }} />

export const Primary = Template.bind({})
Primary.args = {
  shape: 'square',
  title: 'Overdose Mortality Rates',
  content: 'of overdoses resulted in death.',
  subtext: 'This data is an example and does not reflect actual averages',
  orientation: 'horizontal',
  data: [
    {
      'Resulted in Death': 250,
      'Number of Overdoses': 600,
      'state': 'Alabama',
      'Year': '2010'
    },
    {
      'Resulted in Death': 16,
      'Number of Overdoses': 80,
      'state': 'Alaska',
      'Year': '2008'
    },
    {
      'Resulted in Death': 19,
      'Number of Overdoses': 100,
      'state': 'Alaska',
      'Year': '2010'
    },
    {
      'Resulted in Death': 93,
      'Number of Overdoses': 400,
      'state': 'Alaska',
      'Year': '2012'
    },
    {
      'Resulted in Death': 82,
      'Number of Overdoses': 400,
      'state': 'Arizona',
      'Year': '2010'
    }
  ],
  filters: [],
  fontSize: null,
  overallFontSize: 'medium',
  dataColumn: 'Resulted in Death',
  dataFunction: 'Sum',
  dataConditionalColumn: '',
  dataConditionalOperator: null,
  dataConditionalComparate: '',
  customDenom: true,
  dataDenom: null,
  dataDenomColumn: 'Number of Overdoses',
  dataDenomFunction: 'Sum',
  prefix: '',
  suffix: '%',
  roundToPlace: 0,
  nodeWidth: 10,
  nodeSpacer: 2,
  theme: 'blue'
}

export const Circle = Template.bind({})
Circle.args = {
  shape: 'circle',
  title: '5 Day Pollen Count Average',
  content: 'Oak, Cedar/Juniper and Hackberry',
  subtext: 'This data is an example and does not reflect actual averages',
  data: [
    {
      'Pollen Count': 6.3
    },
    {
      'Pollen Count': 8.1
    },
    {
      'Pollen Count': 7.4
    },
    {
      'Pollen Count': 5.1
    },
    {
      'Pollen Count': 6.9
    }
  ],
  dataColumn: 'Pollen Count',
  dataFunction: 'Mean (Average)',
  customDenom: true,
  dataDenom: 10,
  suffix: ' - Medium-high',
  nodeWidth: 15,
  theme: 'orange'
}

export const Person = Template.bind({})
Person.args = {
  shape: 'person',
  title: 'COVID-19 Positive Test Rates',
  content: 'Daily positive test rate per 100k',
  subtext: 'This data is an example and does not reflect actual averages',
  data: [
    {
      'Positive Test': 2100
    }
  ],
  dataColumn: 'Positive Test',
  dataFunction: 'Sum',
  customDenom: true,
  dataDenom: 100000,
  suffix: '%',
  roundToPlace: 1,
  nodeWidth: 22,
  nodeSpacer: 2,
  theme: 'green',
}

export const Square = Template.bind({})
Square.args = {
  shape: 'square',
  title: 'Insured Rates for Georgia',
  content: 'of families are under active health insurance in the state of Georgia; either through the healthcare marketplace, or through provider',
  subtext: 'This data is an example and does not reflect actual averages',
  data: [
    {
      'Coverage': 68.4
    }
  ],
  dataColumn: 'Coverage',
  dataFunction: 'Sum',
  customDenom: false,
  suffix: '%',
  nodeWidth: 25,
  nodeSpacer: 2,
  theme: 'cyan'
}


