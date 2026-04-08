import { type ComponentThemes } from '@cdc/core/types/ComponentThemes'
import { type Visualization } from '@cdc/core/types/Visualization'
import { type EditorColumnProperties } from '@cdc/core/types/EditorColumnProperties'
import { type Version } from '@cdc/core/types/Version'
import { type VizFilter } from '@cdc/core/types/VizFilter'
import { type Annotation } from '@cdc/core/types/Annotation'
import { MarkupConfig } from '@cdc/core/types/MarkupVariable'

// Runtime data types
export type RuntimeFilters = VizFilter[] & { fromHash?: number }

type MapVisualSettings = {
  /** border - shows or hides component border */
  border?: boolean
  /** borderColorTheme - use themed border color */
  borderColorTheme?: boolean
  /** accent - use accent styling */
  accent?: boolean
  /** background - use themed background color */
  background?: boolean
  /** hideBackgroundColor - hide default background color */
  hideBackgroundColor?: boolean
  /** tp5Treatment - render the TP5 callout shell */
  tp5Treatment?: boolean
  /** tp5Background - enable the TP5 cyan background */
  tp5Background?: boolean
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
  // column used to match patterns; empty string means match dataValue across all row columns
  dataKey: string
  // value to match (numeric-like values are compared numerically)
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
type BaseColumnProperties = Pick<EditorColumnProperties, 'name'> &
  Partial<Pick<EditorColumnProperties, 'label' | 'tooltip' | 'dataTable' | 'prefix' | 'suffix'>>

// Simple column type for name-only columns
type SimpleColumnProperties = Pick<EditorColumnProperties, 'name'>

// Specific column types for better semantics
type GeoColumnProperties = BaseColumnProperties & { displayColumn?: string }
type HSAColumnProperties = SimpleColumnProperties
type LatitudeColumnProperties = SimpleColumnProperties
type LongitudeColumnProperties = SimpleColumnProperties
type NavigateColumnProperties = SimpleColumnProperties
type PrimaryColumnProperties = BaseColumnProperties

type LegendShapeItem = {
  column: string
  key: string
  operator: '=' | '≠' | '<' | '>' | '<=' | '>='
  shape: string
  value: string
}

type LegendGrouping = {
  legendTitle: string
  legendDescription: string
  items: LegendShapeItem[]
}

type HexMapSettings = {
  type: 'shapes' | 'standard'
  shapeGroups: LegendGrouping[]
}

export type Coordinate = [number, number]

export type DataRow = {
  uid?: string // optional 'uid' property
  [key: string]: string | number | boolean | null | undefined // allowing primitive data types for dynamic columns
}

export type SmallMultiples = {
  mode?: 'by-column'
  tileColumn?: string
  tilesPerRowDesktop?: number
  tilesPerRowMobile?: number
  tileOrderType?: 'asc' | 'desc' | 'custom'
  tileOrder?: string[]
  tileTitles?: { [key: string]: string }
  synchronizedTooltips?: boolean
}

export type MapConfig = Visualization & {
  annotations: Annotation[]
  // map color palette
  color: string
  columns: {
    geo: GeoColumnProperties
    hsa: HSAColumnProperties
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
      customColorsOrdered?: string[]
    }
    showDownloadMediaButton: boolean
    showDownloadImgButton: boolean
    includeContextInDownload?: boolean
    showDownloadPdfButton: boolean
    showHSABoundaries?: boolean
    showSidebar: boolean
    showStateDropdown?: boolean
    showTitle: boolean
    statesPicked: {
      fipsCode: string
      stateName: string
    }[]
    hideUnselectedStates?: boolean
    countriesPicked?: {
      iso: string
      name: string
    }[]
    hideUnselectedCountries?: boolean // When true, hide unselected countries; when false (default), gray them out
    territoriesAlwaysShow: boolean
    territoriesLabel: string
    title: string
    titleStyle: 'legacy' | 'large' | 'small'
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
    download: boolean
    downloadDataLabel?: string
    downloadImageLabel?: string
    showDownloadUrl: boolean
    showFullGeoNameInCSV: boolean
    forceDisplay: boolean
    indexLabel: string
    cellMinWidth: string
  }
  tooltips: {
    appearanceType: 'hover' | 'click'
    linkLabel: string
    noDataLabel?: string
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
  smallMultiples?: SmallMultiples
  // visualization type
  type: 'map'
  // version of the map
  version: Version
} & MarkupConfig
