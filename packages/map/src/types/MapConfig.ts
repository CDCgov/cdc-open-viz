import { ComponentThemes } from '@cdc/core/types/ComponentThemes'
import { Visualization } from '@cdc/core/types/Visualization'
import { EditorColumnProperties } from '@cdc/core/types/EditorColumnProperties'

export type MapVisualSettings = {
  /** minBubbleSize - Minimum Circle Size when the map has a type of bubble */
  minBubbleSize: number
  /** maxBubbleSize - Maximum Circle Size when the map has a type of bubble */
  maxBubbleSize: number
  /** extraBubbleBorder - Bubble Maps > adds a white circle around the bubble to show contrast on other bubbles */
  extraBubbleBorder: boolean
  /** cityStyle - visual indicator of cities on state maps */
  cityStyle: 'circle' | 'pin'
  /** cityStyle - optional visual indicator of label on the Legend */
  cityStyleLabel: string
  /** geoCodeCircleSize - controls the size of the city style option (circle or pin) */

  geoCodeCircleSize: number
  /** showBubbleZeros - shows circles on maps when the data is provided even if its a zero value */
  showBubbleZeros: boolean
  /** additionalCityStyles - shows Circle, Square, Triangle, Rhombus/Diamond, Star, Map Pin on maps when the additionalCityStyles is added */
  additionalCityStyles: [] | [{ label: string; column: string; value: string; shape: string }]
}

type PatternSelection = {
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
}

export type GeoColumnProperties = Pick<EditorColumnProperties, 'name' | 'label' | 'tooltip' | 'dataTable'>
export type LatitudeColumnProperties = Pick<EditorColumnProperties, 'name'>
export type LongitudeColumnProperties = Pick<EditorColumnProperties, 'name'>
export type NavigateColumnProperties = Pick<EditorColumnProperties, 'name'>
export type PrimaryColumnProperties = Pick<EditorColumnProperties, 'dataTable' | 'label' | 'name' | 'prefix' | 'suffix' | 'tooltip'>

export type LegendShapeItem = {
  column: string
  key: string
  operator: string
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

export type MapConfig = Visualization & {
  color: string // map color palette
  customColors: string[] // custom color palette
  columns: {
    geo: GeoColumnProperties
    primary: PrimaryColumnProperties
    navigate: NavigateColumnProperties
    latitude: LatitudeColumnProperties
    longitude: LongitudeColumnProperties
    categorical: { name }
  }
  dataUrl: string
  runtimeDataUrl: string
  filters: any[]
  general: {
    allowMapZoom: boolean
    convertFipsCodes: boolean
    displayAsHex: boolean
    displayStateLabels: boolean
    fullBorder: boolean
    geoBorderColor: string
    geoLabelOverride: string
    geoType: 'us' | 'us-county' | 'world'
    hasRegions: boolean
    headerColor: ComponentThemes
    hideGeoColumnInTooltip: boolean
    hidePrimaryColumnInTooltip: boolean
    language: string
    palette: {
      isReversed: boolean
    }
    showDownloadButton: boolean
    showDownloadMediaButton: boolean
    showSidebar: boolean
    showTitle: boolean
    statePicked: {
      fipsCode: string
      stateName: string
    }
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
  }
  tooltips: {
    appearanceType: 'hover' | 'click'
    linkLabel: string
    capitalizeLabels: true
    opacity: number
  }
  runtime: {
    editorErrorMessage: string[]
    // when a single state map doesn't include a fips code show a message...
    noStateFoundMessage: string
  }
  mapPosition: { coordinates: Coordinate; zoom: number }
  map: {
    layers: { url; namespace; fill; fillOpacity; stroke; strokeWidth; tooltip }[]
    patterns: PatternSelection[]
  }
  hexMap: HexMapSettings
  filterBehavior: string
  visual: MapVisualSettings
}
