import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fireEvent, waitFor } from 'storybook/test'
import { assertVisualizationRendered, waitForPresence } from '@cdc/core/helpers/testing'
import { geoAlbersUsaTerritories } from 'd3-composite-projections'
import CdcMap from '../CdcMap'

const meta: Meta<typeof CdcMap> = {
  title: 'Components/Templates/Map/Geocode',
  component: CdcMap,
  parameters: {
    docs: {
      description: {
        component:
          'Regression coverage for U.S. geocode maps that use site names as geography keys and territory names in an additional column.'
      }
    }
  }
}

export default meta

type Story = StoryObj<typeof CdcMap>

const territoryGeocodeIssueConfig = {
  type: 'map',
  general: {
    type: 'us-geocode',
    geoType: 'us-county',
    title: 'Territory Geocodes With Site Geography',
    showTitle: true,
    showSidebar: false,
    allowMapZoom: true,
    territoriesAlwaysShow: true,
    hideGeoColumnInTooltip: false,
    hidePrimaryColumnInTooltip: false
  },
  columns: {
    geo: {
      name: 'Site',
      label: 'Site',
      displayColumn: 'Site',
      tooltip: true,
      dataTable: true
    },
    primary: {
      name: 'Value',
      label: 'Example value',
      tooltip: true,
      dataTable: true
    },
    latitude: {
      name: 'Latitude'
    },
    longitude: {
      name: 'Longitude'
    },
    additionalColumn1: {
      name: 'State/Territory',
      label: 'State/Territory',
      tooltip: true,
      dataTable: true
    }
  },
  legend: {
    type: 'equalnumber',
    numberOfItems: 5,
    position: 'side',
    title: 'Example value',
    style: 'circles'
  },
  visual: {
    cityStyle: 'circle',
    cityStyleLabel: 'Territory location',
    geoCodeCircleSize: 8,
    additionalCityStyles: []
  },
  table: {
    forceDisplay: false,
    showDataTableLink: false,
    download: false
  },
  data: [
    {
      Site: 'Site Alpha',
      'State/Territory': 'American Samoa',
      Latitude: -14.2781,
      Longitude: -170.7025,
      Value: 37
    },
    {
      Site: 'Site Bravo',
      'State/Territory': 'Guam',
      Latitude: 13.4757,
      Longitude: 144.7489,
      Value: 82
    },
    {
      Site: 'Site Charlie',
      'State/Territory': 'Northern Mariana Islands',
      Latitude: 15.1778,
      Longitude: 145.7509,
      Value: 14
    },
    {
      Site: 'Site Delta',
      'State/Territory': 'Puerto Rico',
      Latitude: 18.4655,
      Longitude: -66.1057,
      Value: 65
    },
    {
      Site: 'Site Echo',
      'State/Territory': 'U.S. Virgin Islands',
      Latitude: 18.3419,
      Longitude: -64.9307,
      Value: 49
    }
  ]
}

export const TerritoryOutlinesWithSiteGeography: Story = {
  args: {
    config: territoryGeocodeIssueConfig,
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)

    const mapCanvas = (await waitForPresence('.county-map-canvas:not(.d-none)', canvasElement)) as HTMLCanvasElement
    const tooltip = canvasElement.querySelector('[id$="-canvas"].tooltip') as HTMLDivElement
    const projection = geoAlbersUsaTerritories()
      .scale(mapCanvas.width * 1.25)
      .translate([mapCanvas.width / 2, mapCanvas.height / 2])
    const canvasBounds = mapCanvas.getBoundingClientRect()

    expect(mapCanvas).toBeVisible()
    expect(canvasElement).toHaveTextContent('Territory Geocodes With Site Geography')

    for (const location of territoryGeocodeIssueConfig.data) {
      const [mapX, mapY] = projection([location.Longitude, location.Latitude])

      fireEvent.mouseMove(mapCanvas, {
        clientX: canvasBounds.left + mapX / (mapCanvas.width / canvasBounds.width),
        clientY: canvasBounds.top + mapY / (mapCanvas.height / canvasBounds.height)
      })

      await waitFor(() => expect(tooltip).toHaveTextContent(location.Site))
    }
  }
}
