import { describe, expect, it } from 'vitest'
import { getTp5DashboardComponentClasses } from '../tp5DashboardComponentClasses'

describe('getTp5DashboardComponentClasses', () => {
  it('adds shared TP5 dashboard component classes for eligible components', () => {
    expect(
      getTp5DashboardComponentClasses({
        type: 'data-bite',
        biteStyle: 'tp5',
        tp5Visual: { calloutStyle: 'thin-border' }
      })
    ).toEqual([
      'tp5-dashboard-component',
      'tp5-dashboard-component--data-bite',
      'tp5-dashboard-component--thin-border'
    ])

    expect(
      getTp5DashboardComponentClasses({ type: 'waffle-chart', visualizationType: 'TP5 Waffle' })
    ).toEqual(['tp5-dashboard-component', 'tp5-dashboard-component--waffle'])

    expect(
      getTp5DashboardComponentClasses({ type: 'waffle-chart', visualizationType: 'TP5 Gauge' })
    ).toEqual(['tp5-dashboard-component', 'tp5-dashboard-component--gauge'])

    expect(
      getTp5DashboardComponentClasses({ type: 'markup-include', contentEditor: { style: 'tp5' } })
    ).toEqual(['tp5-dashboard-component', 'tp5-dashboard-component--markup-include'])
  })

  it('adds TP5 callout style modifiers for supported non-default styles', () => {
    expect(
      getTp5DashboardComponentClasses({ type: 'data-bite', biteStyle: 'tp5', tp5Visual: { calloutStyle: 'callout' } })
    ).toEqual(['tp5-dashboard-component', 'tp5-dashboard-component--data-bite'])

    expect(
      getTp5DashboardComponentClasses({
        type: 'data-bite',
        biteStyle: 'tp5',
        tp5Visual: { calloutStyle: 'drop-shadow' }
      })
    ).toEqual([
      'tp5-dashboard-component',
      'tp5-dashboard-component--data-bite',
      'tp5-dashboard-component--drop-shadow'
    ])

    expect(
      getTp5DashboardComponentClasses({
        type: 'data-bite',
        biteStyle: 'tp5',
        tp5Visual: { calloutStyle: 'invalid' }
      })
    ).toEqual(['tp5-dashboard-component', 'tp5-dashboard-component--data-bite'])
  })

  it('does not add shared TP5 dashboard component classes for non-TP5 or unrelated components', () => {
    const configs = [
      { type: 'data-bite', biteStyle: 'body' },
      { type: 'waffle-chart', visualizationType: 'Waffle' },
      { type: 'waffle-chart', visualizationType: 'Gauge' },
      { type: 'markup-include', contentEditor: { style: 'default' } },
      { type: 'chart', visual: { tp5Treatment: true } },
      { type: 'map', visual: { tp5Treatment: true } },
      { type: 'table' },
      { type: 'dashboardFilters' }
    ]

    configs.forEach(config => {
      expect(getTp5DashboardComponentClasses(config)).toEqual([])
    })
  })
})
