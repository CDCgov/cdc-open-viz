import type { Meta, StoryObj } from '@storybook/react-vite'
import CdcMapComponent from '../CdcMapComponent'
import { assertVisualizationRendered } from '@cdc/core/helpers/testing'
import usaStateGradient from './_mock/usa-state-gradient.json'

const meta: Meta<typeof CdcMapComponent> = {
  title: 'Components/Templates/Map/HTML in Data Table',
  component: CdcMapComponent,
  parameters: {
    docs: {
      description: {
        component:
          'Demonstrates map data tables with colored legend circles rendered inline next to location names, and HTML content in a notes column.'
      }
    }
  }
}

export default meta

type Story = StoryObj<typeof CdcMapComponent>

const data = [
  { STATE: 'Overall', Rate: '55', Location: 'Vehicle', URL: 'https://www.cdc.gov', Notes: '' },
  {
    STATE: 'Alabama',
    Rate: 130,
    Location: 'Vehicle',
    URL: 'https://www.cdc.gov/',
    Notes: 'Rate increased <strong>8%</strong> from prior year'
  },
  {
    STATE: 'Alaska',
    Rate: 40,
    Location: 'Work',
    URL: 'https://www.cdc.gov/',
    Notes: 'Remote regions excluded from <em>survey</em>'
  },
  { STATE: 'American Samoa', Rate: 55, Location: 'Home', URL: 'https://www.cdc.gov/', Notes: '' },
  {
    STATE: 'Arizona',
    Rate: 0,
    Location: 'School',
    URL: 'https://www.cdc.gov/',
    Notes: '<span style="color:#d54309;">⚠ Below target</span> — outreach underway'
  },
  {
    STATE: 'Arkansas',
    Rate: 60,
    Location: 'School',
    URL: 'https://www.cdc.gov/',
    Notes: 'See <a href="https://www.cdc.gov" target="_blank">CDC report</a> for details'
  },
  {
    STATE: 'California',
    Rate: 30,
    Location: 'Home',
    URL: 'https://www.cdc.gov/',
    Notes: '<strong>Leading state</strong> in program participation'
  },
  {
    STATE: 'Colorado',
    Rate: 40,
    Location: 'Vehicle',
    URL: 'https://www.cdc.gov/',
    Notes: 'Data validated by <em>state health dept</em>'
  },
  {
    STATE: 'Connecticut',
    Rate: 55,
    Location: 'Home',
    URL: 'https://www.cdc.gov/',
    Notes: '<span style="color:#2e8540;">✓ Target achieved</span>'
  },
  { STATE: 'Deleware', Rate: '57', Location: 'Home', URL: 'https://www.cdc.gov/', Notes: '' },
  { STATE: 'DC', Rate: 60, Location: 'Home', URL: 'https://www.cdc.gov/', Notes: '' },
  {
    STATE: 'Florida',
    Rate: 30,
    Location: 'Work',
    URL: 'https://www.cdc.gov/',
    Notes: 'Excludes <em>federal facilities</em>'
  },
  {
    STATE: 'Georgia',
    Rate: 40,
    Location: 'Work',
    URL: 'https://www.cdc.gov/',
    Notes: 'Improved <strong>12 points</strong> since 2021'
  },
  {
    STATE: 'Hawaii',
    Rate: 57,
    Location: 'School',
    URL: 'https://www.cdc.gov/',
    Notes: 'Island populations surveyed <em>separately</em>'
  },
  {
    STATE: 'Idaho',
    Rate: 60,
    Location: 'School',
    URL: 'https://www.cdc.gov/',
    Notes: 'Rural adjustment applied — see <strong>methodology</strong>'
  },
  {
    STATE: 'Illinois',
    Rate: 30,
    Location: 'Work',
    URL: 'https://www.cdc.gov/',
    Notes: 'Chicago metro reported <em>independently</em>'
  },
  {
    STATE: 'Indiana',
    Rate: 40,
    Location: 'Vehicle',
    URL: 'https://www.cdc.gov/',
    Notes: 'Rate includes <strong>all age groups</strong>'
  },
  {
    STATE: 'Iowa',
    Rate: 55,
    Location: 'Home',
    URL: 'https://www.cdc.gov/',
    Notes: 'Consistent with <em>national average</em>'
  },
  {
    STATE: 'Kansas',
    Rate: 57,
    Location: 'Home',
    URL: 'https://www.cdc.gov/',
    Notes: 'Data from <strong>Q3 2023</strong> survey'
  },
  {
    STATE: 'Kentucky',
    Rate: 60,
    Location: 'NA',
    URL: 'https://www.cdc.gov/',
    Notes: '<span style="color:#d54309;">Below regional median</span>'
  },
  {
    STATE: 'Louisiana',
    Rate: 30,
    Location: 'Vehicle',
    URL: 'https://www.cdc.gov/',
    Notes: 'Post-storm data collection <em>delayed</em>'
  },
  {
    STATE: 'Maine',
    Rate: 40,
    Location: 'Work',
    URL: 'https://www.cdc.gov/',
    Notes: 'Coastal counties weighted <strong>separately</strong>'
  },
  { STATE: 'Marshall Islands', Rate: 55, Location: 'Home', URL: 'https://www.cdc.gov/', Notes: '' },
  {
    STATE: 'Maryland',
    Rate: 57,
    Location: 'School',
    URL: 'https://www.cdc.gov/',
    Notes: 'Includes DC metro area <em>overlap</em>'
  },
  {
    STATE: 'Massachusetts',
    Rate: 60,
    Location: 'School',
    URL: 'https://www.cdc.gov/',
    Notes: '<span style="color:#2e8540;">✓ Highest in region</span>'
  },
  {
    STATE: 'Michigan',
    Rate: 12,
    Location: 'Work',
    URL: 'https://www.cdc.gov/',
    Notes: '<span style="color:#d54309;">⚠ Significant decline</span> noted'
  },
  { STATE: 'Micronesia', Rate: 65, Location: 'Vehicle', URL: 'https://www.cdc.gov/', Notes: '' },
  {
    STATE: 'Minnesota',
    Rate: 55,
    Location: 'Home',
    URL: 'https://www.cdc.gov/',
    Notes: 'Tribal nations surveyed <em>separately</em>'
  },
  {
    STATE: 'Mississippi',
    Rate: 57,
    Location: 'Home',
    URL: 'https://www.cdc.gov/',
    Notes: 'Additional outreach <strong>planned for 2024</strong>'
  },
  {
    STATE: 'Montana',
    Rate: 60,
    Location: 'Home',
    URL: 'https://www.cdc.gov/',
    Notes: 'Large geographic area — <em>sample size limited</em>'
  },
  { STATE: 'Montana', Rate: 30, Location: 'Vehicle', URL: 'https://www.cdc.gov/', Notes: '' },
  {
    STATE: 'Nebraska',
    Rate: 40,
    Location: 'Work',
    URL: 'https://www.cdc.gov/',
    Notes: 'Rate stable over <strong>3-year period</strong>'
  },
  {
    STATE: 'Nevada',
    Rate: 55,
    Location: 'Home',
    URL: 'https://www.cdc.gov/',
    Notes: 'Las Vegas metro excluded from <em>rural rate</em>'
  },
  {
    STATE: 'New Hampshire',
    Rate: 57,
    Location: 'School',
    URL: 'https://www.cdc.gov/',
    Notes: 'Highest participation in <strong>New England</strong>'
  },
  {
    STATE: 'New Jersey',
    Rate: 60,
    Location: 'School',
    URL: 'https://www.cdc.gov/',
    Notes: 'Dense population — <em>high confidence interval</em>'
  },
  {
    STATE: 'New Mexico',
    Rate: 12,
    Location: 'Work',
    URL: 'https://www.cdc.gov/',
    Notes: '<span style="color:#d54309;">Below target</span> — tribal programs expanding'
  },
  {
    STATE: 'New York',
    Rate: 40,
    Location: 'Vehicle',
    URL: 'https://www.cdc.gov/',
    Notes: 'NYC data reported <em>separately</em>'
  },
  {
    STATE: 'North Carolina',
    Rate: 55,
    Location: 'Home',
    URL: 'https://www.cdc.gov/',
    Notes: 'Urban/rural split — see <strong>supplemental table</strong>'
  },
  {
    STATE: 'North Dakota',
    Rate: 57,
    Location: 'Home',
    URL: 'https://www.cdc.gov/',
    Notes: 'Oil field worker population <em>adjusted</em>'
  },
  { STATE: 'Northern Mariana Islands', Rate: '60', Location: 'Home', URL: 'https://www.cdc.gov/', Notes: '' },
  {
    STATE: 'Ohio',
    Rate: 88,
    Location: 'Vehicle',
    URL: 'https://www.cdc.gov/',
    Notes: '<span style="color:#2e8540;">✓ Above national average</span>'
  },
  {
    STATE: 'Oklahoma',
    Rate: 40,
    Location: 'Work',
    URL: 'https://www.cdc.gov/',
    Notes: 'Native American populations <em>surveyed separately</em>'
  },
  {
    STATE: 'Oregon',
    Rate: 55,
    Location: 'Home',
    URL: 'https://www.cdc.gov/',
    Notes: 'Coast vs inland rates <strong>vary significantly</strong>'
  },
  { STATE: 'Palau', Rate: 15, Location: 'School', URL: 'https://www.cdc.gov/', Notes: '' },
  {
    STATE: 'Pennsylvania',
    Rate: 60,
    Location: 'School',
    URL: 'https://www.cdc.gov/',
    Notes: 'Philadelphia metro weighted <em>separately</em>'
  },
  { STATE: 'Puerto Rico', Rate: 30, Location: 'Work', URL: 'https://www.cdc.gov/', Notes: '' },
  {
    STATE: 'Rhode Island',
    Rate: 40,
    Location: 'Vehicle',
    URL: 'https://www.cdc.gov/',
    Notes: '<strong>Smallest state</strong> — high confidence in data'
  },
  {
    STATE: 'South Carolina',
    Rate: 55,
    Location: 'Home',
    URL: 'https://www.cdc.gov/',
    Notes: 'Rate improved after <em>2022 initiative</em>'
  },
  {
    STATE: 'South Dakota',
    Rate: 86,
    Location: 'Home',
    URL: 'https://www.cdc.gov/',
    Notes: '<span style="color:#2e8540;">✓ Above target</span>'
  },
  {
    STATE: 'Tennessee',
    Rate: 60,
    Location: 'Home',
    URL: 'https://www.cdc.gov/',
    Notes: 'Nashville metro drives <strong>overall rate</strong>'
  },
  {
    STATE: 'Texas',
    Rate: 30,
    Location: 'Vehicle',
    URL: 'https://www.cdc.gov/',
    Notes: 'Border region data <em>collected separately</em>'
  },
  { STATE: 'Utah', Rate: 54, Location: 'Work', URL: 'https://www.cdc.gov/', Notes: '' },
  {
    STATE: 'Vermont',
    Rate: 40,
    Location: 'Home',
    URL: 'https://www.cdc.gov/',
    Notes: 'Near-complete <em>population coverage</em>'
  },
  { STATE: 'Virgin Islands', Rate: 55, Location: 'School', URL: 'https://www.cdc.gov/', Notes: '' },
  {
    STATE: 'Virginia',
    Rate: 57,
    Location: 'School',
    URL: 'https://www.cdc.gov/',
    Notes: 'Northern VA excluded — see <em>DC metro</em>'
  },
  {
    STATE: 'Washington',
    Rate: 62,
    Location: 'Work',
    URL: 'https://www.cdc.gov/',
    Notes: '<span style="color:#2e8540;">✓ Strong program outcomes</span>'
  },
  {
    STATE: 'West Virginia',
    Rate: 25,
    Location: 'Vehicle',
    URL: 'https://www.cdc.gov/',
    Notes: '<span style="color:#d54309;">⚠ Lowest in region</span>'
  },
  {
    STATE: 'Wyoming',
    Rate: 43,
    Location: 'Vehicle',
    URL: 'https://www.cdc.gov/',
    Notes: 'Smallest population — <strong>widest confidence interval</strong>'
  }
]

export const USAStateMap: Story = {
  name: 'USA State Map',
  args: {
    config: {
      ...usaStateGradient,
      data,
      table: {
        ...usaStateGradient.table,
        expanded: true
      },
      columns: {
        ...usaStateGradient.columns,
        Notes: {
          name: 'Notes',
          label: 'Notes',
          dataTable: true,
          tooltip: false
        }
      }
    },
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}
