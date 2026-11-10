import { lazy } from 'react'

// Share the lazy component identities between dashboard rows and the child editor.
// Each renderer is fetched only when its visualization type is mounted.
export const CdcChart = lazy(() => import('@cdc/chart/src/CdcChartComponent'))
export const CdcMap = lazy(() => import('@cdc/map/src/CdcMapComponent'))
export const CdcDataBite = lazy(() => import('@cdc/data-bite/src/CdcDataBite'))
export const CdcWaffleChart = lazy(() => import('@cdc/waffle-chart/src/CdcWaffleChart'))
export const CdcMarkupInclude = lazy(() => import('@cdc/markup-include/src/CdcMarkupInclude'))
