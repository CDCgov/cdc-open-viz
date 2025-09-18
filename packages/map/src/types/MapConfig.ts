import { type ComponentThemes } from '@cdc/core/types/ComponentThemes'
import { type Visualization } from '@cdc/core/types/Visualization'
import { type EditorColumnProperties } from '@cdc/core/types/EditorColumnProperties'
import { type Version } from '@cdc/core/types/Version'
import { type VizFilter } from '@cdc/core/types/VizFilter'

export type MapVisualSettings = {
  /** minBubbleSize - Minimum Circle Size when the map has a type of bubble */
  minBubbleSize: number
  /** maxBubbleSize - Maximum Circle Size when the map has a type of bubble */
  maxBubbleSize: number
  /** extraBubbleBorder - Bubble Maps > adds a white circle around the bubble to show contrast on other bubbles */
  extraBubbleBorder: boolean
  /** cityStyle - visual indicator of cities on state maps */
  cityStyle: 'circle' | 'pin' | 'star' | 'diamond' | 'triangle' | 'square'
  /** cityStyle - optional visual indicator of label on the Legend */
  cityStyleLabel: string
  /** geoCodeCircleSize - controls the size of the city style option (circle or pin) */
  geoCodeCircleSize: number
  /** showBubbleZeros - shows circles on maps when the data is provided even if it's a zero value */
  showBubbleZeros: boolean
  /** additionalCityStyles - shows Circle, Square, Triangle, Rhombus/Diamond, Star, Map Pin on maps when the additionalCityStyles is added */
  additionalCityStyles: [] | [{ label: string; column: string; value: string; shape: string }]
}

export type PatternSelection = {
  // dropdown selection for getting the column used on a pattern
  dataKey: string
  // text field input to match values found in the column
  dataValue: string
  // style of pattern to use
  pattern: 'lines' | 'circles' | 'waves'
  // optional legend update
  label: string
  // size of pattern
  size: 'small' | 'medium' | 'large'
  color: string
  contrastCheck: boolean
}

// Base column properties with name required, all others optional
export type BaseColumnProperties = Pick<EditorColumnProperties, 'name'> &
  Partial<Pick<EditorColumnProperties, 'label' | 'tooltip' | 'dataTable' | 'prefix' | 'suffix'>>

// Simple column type for name-only columns
export type SimpleColumnProperties = Pick<EditorColumnProperties, 'name'>

// Specific column types for better semantics
export type GeoColumnProperties = BaseColumnProperties
export type LatitudeColumnProperties = SimpleColumnProperties
export type LongitudeColumnProperties = SimpleColumnProperties
export type NavigateColumnProperties = SimpleColumnProperties
export type PrimaryColumnProperties = BaseColumnProperties

export type LegendShapeItem = {
  column: string
  key: string
  operator: '=' | '≠' | '<' | '>' | '<=' | '>='
  shape: string
  value: string
}

export type LegendGrouping = {
  legendTitle: string
  legendDescription: string
  items: LegendShapeItem[]
}

export type HexMapSettings = {
  type: 'shapes' | 'standard'
  shapeGroups: LegendGrouping[]
}

export type Coordinate = [number, number]

export type DataRow = {
  uid?: string // optional 'uid' property
  [key: string]: any // allowing any additional properties with a dynamic key (e.g., for `configPrimaryName`)
}

export type MapConfig = Visualization & {
  annotations: Annotation[]
  // map color palette
  color: string
  columns: {
    geo: GeoColumnProperties
    primary: PrimaryColumnProperties
    navigate: NavigateColumnProperties
    latitude: LatitudeColumnProperties
    longitude: LongitudeColumnProperties
    categorical: { name: string }
  }
  dataUrl: string
  data: DataRow[]
  runtimeDataUrl: string
  filters: VizFilter[]
  general: {
    navigationTarget: '_self' | '_blank'
    noDataMessage: string // single-state no data message
    subtext: string
    introText: string
    allowMapZoom: boolean
    convertFipsCodes: boolean
    displayAsHex: boolean
    displayStateLabels: boolean
    fullBorder: boolean
    geoBorderColor: string
    geoLabelOverride: string
    // whether to use the old custom quantile scaling method or new custom quantile scaling method
    equalNumberOptIn: boolean
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
    hasRegions: boolean
    headerColor: ComponentThemes
    hideGeoColumnInTooltip: boolean
    hidePrimaryColumnInTooltip: boolean
    language: string
    palette: {
      isReversed: boolean
      name: string
      version: string
      customColors?: string[]
    }
    showDownloadMediaButton: boolean
    showDownloadImgButton: boolean
    showDownloadPdfButton: boolean
    showSidebar: boolean
    showTitle: boolean
    statesPicked: {
      fipsCode: string
      stateName: string
    }[]
    territoriesAlwaysShow: boolean
    territoriesLabel: string
    title: string
    type: 'data' | 'navigation' | 'us-geocode' | 'world-geocode' | 'bubble'
  }
  legend: {
    additionalCategories
    categoryValuesOrder
    description
    descriptions: {}
    specialClasses: { key; label; value }[]
    unified: boolean
    separateZero: boolean
    singleColumn: boolean
    singleRow: boolean
    verticalSorted: boolean
    showSpecialClassesLast: boolean
    dynamicDescription: boolean
    type: string
    numberOfItems: number
    position: string
    title: string
    style: 'circles' | 'boxes' | 'gradient'
    subStyle: 'linear blocks' | 'smooth'
    tickRotation: string
    hideBorder: false
    singleColumnLegend: false
    separators?: string
  }
  table: {
    label: string
    expanded: boolean
    limitHeight: boolean
    height: string
    caption: string
    showDownloadUrl: boolean
    showFullGeoNameInCSV: boolean
    forceDisplay: boolean
    download: boolean
    indexLabel: string
    cellMinWidth: string
  }
  tooltips: {
    appearanceType: 'hover' | 'click'
    linkLabel: string
    opacity: number
  }
  runtime: {
    editorErrorMessage: string[]
  }
  mapPosition: { coordinates: Coordinate; zoom: number }
  map: {
    layers: { url; namespace; fill; fillOpacity; stroke; strokeWidth; tooltip }[]
    patterns: PatternSelection[]
  }
  hexMap: HexMapSettings
  filterBehavior: string
  filterIntro: string
  visual: MapVisualSettings
  // visualization type
  type: 'map'
  // version of the map
  version: Version
}
