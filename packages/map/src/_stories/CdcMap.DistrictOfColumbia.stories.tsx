import type { Meta, StoryObj } from '@storybook/react-vite'
import CdcMap from '../CdcMap'

const meta: Meta<typeof CdcMap> = {
  title: 'Components/Templates/Map/Geographic Name Formatting',
  component: CdcMap
}

export default meta

type Story = StoryObj<typeof CdcMap>

/**
 * Tests that "District of Columbia" is displayed correctly with lowercase "of"
 * regardless of input casing (DISTRICT OF COLUMBIA, District Of Columbia, etc.)
 */
export const DistrictOfColumbia: Story = {
  args: {
    config: {
      type: 'map',
      general: {
        type: 'data',
        geoType: 'us',
        displayAsHex: false,
        displayGeoName: true,
        title: 'District of Columbia - Title Case Test',
        showTitle: true,
        showSidebar: true
      },
      columns: {
        geo: {
          name: 'State',
          label: 'State'
        },
        primary: {
          name: 'Value',
          label: 'Population (thousands)',
          tooltip: true,
          dataTable: true
        }
      },
      legend: {
        type: 'equalnumber',
        numberOfItems: 5,
        position: 'side'
      },
      tooltips: {
        appearanceType: 'hover',
        capitalizeLabels: true
      },
      data: [
        { State: 'DISTRICT OF COLUMBIA', Value: 689 },
        { State: 'Virginia', Value: 8631 },
        { State: 'Maryland', Value: 6177 },
        { State: 'Delaware', Value: 1003 },
        { State: 'West Virginia', Value: 1775 }
      ]
    }
  }
}

/**
 * Tests US Territories with special formatting:
 * - "Federated States of Micronesia" (lowercase "of")
 * - "Commonwealth of the Northern Mariana Islands" (lowercase "of" and "the")
 * - "U.S. Virgin Islands" (special case with periods in U.S.)
 */
export const USTerritories: Story = {
  args: {
    config: {
      type: 'map',
      general: {
        type: 'data',
        geoType: 'us',
        displayAsHex: false,
        displayGeoName: true,
        title: 'US Territories - Special Name Formatting',
        showTitle: true,
        showSidebar: true
      },
      columns: {
        geo: {
          name: 'Territory',
          label: 'Territory'
        },
        primary: {
          name: 'Value',
          label: 'Population (thousands)',
          tooltip: true,
          dataTable: true
        }
      },
      legend: {
        type: 'equalnumber',
        numberOfItems: 7,
        position: 'side'
      },
      tooltips: {
        appearanceType: 'hover',
        capitalizeLabels: true
      },
      data: [
        { Territory: 'FEDERATED STATES OF MICRONESIA', Value: 113 },
        { Territory: 'COMMONWEALTH OF THE NORTHERN MARIANA ISLANDS', Value: 57 },
        { Territory: 'U.S. VIRGIN ISLANDS', Value: 106 },
        { Territory: 'AMERICAN SAMOA', Value: 49 },
        { Territory: 'GUAM', Value: 168 },
        { Territory: 'PUERTO RICO', Value: 3194 },
        { Territory: 'PALAU', Value: 18 }
      ]
    }
  }
}

/**
 * Tests various input casings for "District of Columbia" to ensure
 * all variations produce the correct output with lowercase "of"
 */
export const DistrictOfColumbiaVariations: Story = {
  args: {
    config: {
      type: 'map',
      general: {
        type: 'data',
        geoType: 'us',
        displayAsHex: false,
        displayGeoName: true,
        title: 'District of Columbia - All Input Variations',
        showTitle: true,
        showSidebar: true
      },
      columns: {
        geo: {
          name: 'State',
          label: 'State'
        },
        primary: {
          name: 'Value',
          label: 'Test Value',
          tooltip: true,
          dataTable: true
        }
      },
      legend: {
        type: 'equalnumber',
        numberOfItems: 6,
        position: 'side'
      },
      tooltips: {
        appearanceType: 'hover',
        capitalizeLabels: true
      },
      data: [
        { State: 'DISTRICT OF COLUMBIA', Value: 100 },
        { State: 'District Of Columbia', Value: 101 },
        { State: 'district of columbia', Value: 102 },
        { State: 'District of Columbia', Value: 103 },
        { State: 'DC', Value: 104 },
        { State: 'WASHINGTON DC', Value: 105 }
      ]
    }
  }
}

/**
 * Tests world countries with special name formatting using ALL CAPS input:
 * - "Republic of the Congo" (lowercase "of" and "the")
 * - "Democratic Republic of the Congo" (lowercase "of" and "the")
 * - "Bolivia (Plurinational State of)" (lowercase "of")
 * - "Iran (Islamic Republic of)" (lowercase "of")
 * - Countries with "and" in their names (lowercase "and")
 */
export const WorldCountriesAllCaps: Story = {
  args: {
    config: {
      type: 'map',
      general: {
        type: 'data',
        geoType: 'world',
        displayAsHex: false,
        title: 'World Countries - ALL CAPS Input Test',
        showTitle: true,
        showSidebar: true
      },
      columns: {
        geo: {
          name: 'Country',
          label: 'Country'
        },
        primary: {
          name: 'Value',
          label: 'Test Value',
          tooltip: true,
          dataTable: true
        }
      },
      legend: {
        type: 'equalnumber',
        numberOfItems: 10,
        position: 'side'
      },
      tooltips: {
        appearanceType: 'hover',
        capitalizeLabels: true
      },
      data: [
        { Country: 'REPUBLIC OF THE CONGO', Value: 100 },
        { Country: 'DEMOCRATIC REPUBLIC OF THE CONGO', Value: 101 },
        { Country: 'BOLIVIA (PLURINATIONAL STATE OF)', Value: 102 },
        { Country: 'IRAN (ISLAMIC REPUBLIC OF)', Value: 103 },
        { Country: 'ANTIGUA AND BARBUDA', Value: 104 },
        { Country: 'BOSNIA AND HERZEGOVINA', Value: 105 },
        { Country: 'TRINIDAD AND TOBAGO', Value: 106 },
        { Country: 'SAINT KITTS AND NEVIS', Value: 107 },
        { Country: 'SAO TOME AND PRINCIPE', Value: 108 },
        { Country: 'HEARD ISLAND AND MCDONALD ISLANDS', Value: 109 }
      ]
    }
  }
}

/**
 * Tests hyphenated geographic names to ensure proper title casing
 * for both parts of the hyphenated name
 */
export const HyphenatedNames: Story = {
  args: {
    config: {
      type: 'map',
      general: {
        type: 'data',
        geoType: 'us',
        displayAsHex: false,
        displayGeoName: true,
        title: 'Hyphenated Geographic Names',
        showTitle: true,
        showSidebar: true
      },
      columns: {
        geo: {
          name: 'County',
          label: 'County'
        },
        primary: {
          name: 'Value',
          label: 'Test Value',
          tooltip: true,
          dataTable: true
        }
      },
      legend: {
        type: 'equalnumber',
        numberOfItems: 5,
        position: 'side'
      },
      tooltips: {
        appearanceType: 'hover',
        capitalizeLabels: true
      },
      data: [
        { County: 'ANNE ARUNDEL-BALTIMORE', Value: 100 },
        { County: 'WINSTON-SALEM', Value: 101 },
        { County: 'SAINT-PIERRE', Value: 102 }
      ]
    }
  }
}

/**
 * Tests multi-word state names to ensure proper capitalization
 */
export const MultiWordStateNames: Story = {
  args: {
    config: {
      type: 'map',
      general: {
        type: 'data',
        geoType: 'us',
        displayAsHex: false,
        displayGeoName: true,
        title: 'Multi-Word State Names',
        showTitle: true,
        showSidebar: true
      },
      columns: {
        geo: {
          name: 'State',
          label: 'State'
        },
        primary: {
          name: 'Value',
          label: 'Test Value',
          tooltip: true,
          dataTable: true
        }
      },
      legend: {
        type: 'equalnumber',
        numberOfItems: 8,
        position: 'side'
      },
      tooltips: {
        appearanceType: 'hover',
        capitalizeLabels: true
      },
      data: [
        { State: 'NEW HAMPSHIRE', Value: 100 },
        { State: 'NEW JERSEY', Value: 101 },
        { State: 'NEW MEXICO', Value: 102 },
        { State: 'NEW YORK', Value: 103 },
        { State: 'NORTH CAROLINA', Value: 104 },
        { State: 'NORTH DAKOTA', Value: 105 },
        { State: 'SOUTH CAROLINA', Value: 106 },
        { State: 'SOUTH DAKOTA', Value: 107 },
        { State: 'WEST VIRGINIA', Value: 108 },
        { State: 'RHODE ISLAND', Value: 109 }
      ]
    }
  }
}
