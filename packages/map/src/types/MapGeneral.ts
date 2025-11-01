import { type ComponentThemes } from '@cdc/core/types/ComponentThemes'
import { BaseGeneral } from '@cdc/core/types/General'

/**
 * Map-specific general configuration
 * Extends BaseGeneral with map-specific settings for behavior, appearance, and geographic options
 */
export interface MapGeneral extends BaseGeneral {
  /** Target for navigation links */
  navigationTarget: '_self' | '_blank'
  /** Message to display when there is no data */
  noDataMessage: string // single-state no data message
  /** Subtitle text displayed below title */
  subtext: string
  /** Introductory text displayed above map */
  introText: string
  /** Whether to allow zooming on the map */
  allowMapZoom: boolean
  /** Whether to convert FIPS codes to proper format */
  convertFipsCodes: boolean
  /** Whether to display map as hexagonal tiles (hex map) */
  displayAsHex: boolean
  /** Whether to show state labels on the map */
  displayStateLabels: boolean
  /** Whether to show full border around map */
  fullBorder: boolean
  /** Color for geographic region borders */
  geoBorderColor: string
  /** Custom label to override default geographic labels */
  geoLabelOverride: string
  /** Whether to use the new equal number quantile scaling method */
  equalNumberOptIn: boolean
  /** Type of geographic map to display */
  geoType:
    | 'us'
    | 'us-region'
    | 'us-county'
    | 'world'
    | 'us-geocode'
    | 'world-geocode'
    | 'bubble'
    | 'single-state'
    | 'google-map'
  /** Whether map has custom regions defined */
  hasRegions: boolean
  /** Theme color for header/title area */
  headerColor: ComponentThemes
  /** Whether to hide geographic column in tooltips */
  hideGeoColumnInTooltip: boolean
  /** Whether to hide primary data column in tooltips */
  hidePrimaryColumnInTooltip: boolean
  /** Language code for internationalization */
  language: string
  /** Whether to show download media button */
  showDownloadMediaButton: boolean
  /** Whether to show download image button */
  showDownloadImgButton: boolean
  /** Whether to show download PDF button */
  showDownloadPdfButton: boolean
  /** Whether to show sidebar panel */
  showSidebar: boolean
  /** Whether to show title */
  showTitle: boolean
  /** List of states to display (for multi-state/single-state maps) */
  statesPicked: {
    /** FIPS code for the state */
    fipsCode: string
    /** Full name of the state */
    stateName: string
  }[]
  /** Whether territories should always be shown */
  territoriesAlwaysShow: boolean
  /** Custom label for territories section */
  territoriesLabel: string
  /** Title text for the map */
  title: string
  /** Type of map visualization */
  type: 'data' | 'navigation' | 'us-geocode' | 'world-geocode' | 'bubble'
}
