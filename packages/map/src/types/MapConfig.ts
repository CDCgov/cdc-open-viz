import { type ComponentThemes } from '@cdc/core/types/ComponentThemes'
import { type Visualization } from '@cdc/core/types/Visualization'
import { type EditorColumnProperties } from '@cdc/core/types/EditorColumnProperties'
import { type Version } from '@cdc/core/types/Version'
import { type VizFilter } from '@cdc/core/types/VizFilter'
import { type Annotation } from '@cdc/core/types/Annotation'
import { MarkupConfig } from '@cdc/core/types/MarkupVariable'
import { AltTextConfig } from '@cdc/core/types/AltText'

// Runtime data types
export type RuntimeFilters = VizFilter[] & { fromHash?: number }

// Base column properties with name required, all others optional
type BaseColumnProperties = Pick<EditorColumnProperties, 'name'> &
  Partial<Pick<EditorColumnProperties, 'label' | 'tooltip' | 'dataTable' | 'prefix' | 'suffix'>>

type BubbleColumnProperties = Pick<EditorColumnProperties, 'name'> &
  Partial<Pick<EditorColumnProperties, 'label' | 'tooltip'>>

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
  /** Legacy bubble map size field. Current configs use bubble.layers[].minBubbleSize. */
  minBubbleSize?: number
  /** Legacy bubble map size field. Current configs use bubble.layers[].maxBubbleSize. */
  maxBubbleSize?: number
  /** Legacy bubble map border field. Current configs use bubble.layers[].extraBubbleBorder. */
  extraBubbleBorder?: boolean
  /** Legacy bubble zero-value field. Current configs use bubble.layers[].showBubbleZeros. */
  showBubbleZeros?: boolean
  /** cityStyle - visual indicator of cities on state maps */
  cityStyle: 'circle' | 'pin' | 'star' | 'diamond' | 'triangle' | 'square'
  /** cityStyle - optional visual indicator of label on the Legend */
  cityStyleLabel: string
  /** geoCodeCircleSize - controls the size of the city style option (circle or pin) */
  geoCodeCircleSize: number
  /** additionalCityStyles - shows Circle, Square, Triangle, Rhombus/Diamond, Star, Map Pin on maps when the additionalCityStyles is added */
  additionalCityStyles: [] | [{ label: string; column: string; value: string; shape: string }]
}

export type BubbleLayer = {
  label?: string
  /** Chooses whether bubbles are positioned by geography lookup or explicit coordinates. */
  locationSource?: 'data-column' | 'latitude-longitude'
  minBubbleSize: number
  maxBubbleSize: number
  extraBubbleBorder: boolean
  showBubbleZeros: boolean
  /** Independent color palette for bubbles; when unset, inherits config.general.palette. */
  palette?: { name: string; isReversed?: boolean }
  /** Independent legend settings for bubbles; when unset, inherits config.legend behavior. */
  legend?: {
    [key: string]: any
    show?: boolean
    type?: string
    numberOfItems?: number
    title?: string
    description?: string
    style?: 'circles' | 'boxes' | 'gradient'
    size?: {
      show?: boolean
      title?: string
      description?: string
    }
  }
  columns: {
    geo: BubbleColumnProperties
    primary: BubbleColumnProperties
    /** Optional latitude column used to position bubbles directly from row coordinates. */
    latitude?: { name: string }
    /** Optional longitude column used to position bubbles directly from row coordinates. */
    longitude?: { name: string }
    categorical?: BubbleColumnProperties
    /** When set, this column drives bubble sizing instead of the primary column. */
    size?: BubbleColumnProperties
  }
}

export type BubbleConfig = {
  layers: BubbleLayer[]
  /** Set by the 4.26.7 migration when an old bubble map is upgraded. Indicates the columns
   *  were moved from config.columns into the first bubble layer; top-level columns are cleared. */
  migratedToBubbleAccordion?: boolean
  /** Legacy single-layer shape accepted for configs authored before bubble.layers. */
  minBubbleSize?: number
  maxBubbleSize?: number
  extraBubbleBorder?: boolean
  showBubbleZeros?: boolean
  palette?: BubbleLayer['palette']
  legend?: BubbleLayer['legend']
  columns?: BubbleLayer['columns']
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
  altText?: AltTextConfig
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
    showClearSelectionButton?: boolean
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
    showNeighboringStates?: boolean
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
    downloadUrlLabel?: string
    showDownloadUrl: boolean
    showFullGeoNameInCSV: boolean
    forceDisplay: boolean
    indexLabel: string
    cellMinWidth: string
    search?: boolean
    searchPlaceholder?: string
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
  bubble?: BubbleConfig
  smallMultiples?: SmallMultiples
  // visualization type
  type: 'map'
  // version of the map
  version: Version
} & MarkupConfig
