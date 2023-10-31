import { PropsWithChildren, type CSSProperties } from 'react'

type VisualSettings = {
  accent: boolean
  background: boolean
  border: boolean
  borderColorTheme: boolean
  hideBackgroundColor: boolean
  showTitle?: boolean
}

type BaseWrapperProps = {
  visualSettings: VisualSettings
  className?: string
  title: string
  style?: CSSProperties
}

// Type Predicates=
type ChartVizWrapperProps = PropsWithChildren<{
  showTitle: boolean
  visualizationType: 'chart'
  subType: string
}> &
  BaseWrapperProps

type DataBiteVizWrapperProps = PropsWithChildren<{
  showTitle?: never
  visualizationType: 'data-bite'
  subType: never
}> &
  BaseWrapperProps

type WaffleChartVizWrapperProps = PropsWithChildren<{
  showTitle?: never
  visualizationType: 'waffle-chart'
  subType: never
}> &
  BaseWrapperProps

type MarkupIncludeVizWrapperProps = PropsWithChildren<{
  showTitle?: never
  visualizationType: 'markup-include'
  subType: never
}> &
  BaseWrapperProps

// prettier-ignore
export type VizWrapperProps =
  | ChartVizWrapperProps
  | DataBiteVizWrapperProps
  | MarkupIncludeVizWrapperProps
  | WaffleChartVizWrapperProps
