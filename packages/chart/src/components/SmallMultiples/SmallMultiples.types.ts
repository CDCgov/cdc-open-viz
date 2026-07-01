import type { ForwardRefExoticComponent, RefAttributes } from 'react'

export type SmallMultipleChartComponent = ForwardRefExoticComponent<
  {
    parentWidth: number
    parentHeight: number
  } & RefAttributes<SVGAElement>
>
