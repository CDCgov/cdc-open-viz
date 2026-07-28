import { describe, expect, it } from 'vitest'
import {
  getTp5DashboardColorTheme,
  getTp5DashboardColorThemeVariables,
  getTp5DashboardComponentClasses
} from '../tp5DashboardComponentClasses'

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
      'tp5-dashboard-component--drop-shadow',
      'tp5-dashboard-component--accent-left'
    ])

    expect(
      getTp5DashboardComponentClasses({
        type: 'data-bite',
        biteStyle: 'tp5',
        tp5Visual: { calloutStyle: 'invalid' }
      })
    ).toEqual(['tp5-dashboard-component', 'tp5-dashboard-component--data-bite'])
  })

  it('defaults drop-shadow accent position to left and normalizes invalid values to left', () => {
    expect(
      getTp5DashboardComponentClasses({
        type: 'data-bite',
        biteStyle: 'tp5',
        tp5Visual: { calloutStyle: 'drop-shadow' }
      })
    ).toContain('tp5-dashboard-component--accent-left')

    expect(
      getTp5DashboardComponentClasses({
        type: 'data-bite',
        biteStyle: 'tp5',
        tp5Visual: { calloutStyle: 'drop-shadow', accentPosition: 'invalid' }
      })
    ).toContain('tp5-dashboard-component--accent-left')
  })

  it('adds the top accent position modifier only for drop-shadow', () => {
    expect(
      getTp5DashboardComponentClasses({
        type: 'data-bite',
        biteStyle: 'tp5',
        tp5Visual: { calloutStyle: 'drop-shadow', accentPosition: 'top' }
      })
    ).toEqual([
      'tp5-dashboard-component',
      'tp5-dashboard-component--data-bite',
      'tp5-dashboard-component--drop-shadow',
      'tp5-dashboard-component--accent-top'
    ])

    expect(
      getTp5DashboardComponentClasses({
        type: 'data-bite',
        biteStyle: 'tp5',
        tp5Visual: { calloutStyle: 'thin-border', accentPosition: 'top' }
      })
    ).not.toContain('tp5-dashboard-component--accent-top')

    expect(
      getTp5DashboardComponentClasses({
        type: 'data-bite',
        biteStyle: 'tp5',
        tp5Visual: { calloutStyle: 'callout', accentPosition: 'top' }
      })
    ).not.toContain('tp5-dashboard-component--accent-top')
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

  it('normalizes missing and invalid TP5 dashboard color themes to cyan', () => {
    expect(getTp5DashboardColorTheme()).toEqual({
      accent: 'var(--colors-cyan-40v, #009EC1)',
      accentText: 'var(--colors-cyan-60v, #007A99)',
      accentLight: 'var(--colors-cyan-15, #DFF2F6)',
      circleLightOuter: 'var(--colors-cyan-15, #DFF2F6)',
      circleLightInner: 'var(--colors-cyan-5, #F4FBFC)',
      circleDarkOuter: 'var(--colors-cyan-15, #DFF2F6)',
      circleDarkInner: 'var(--colors-cyan-50v, #0081A1)'
    })
    expect(getTp5DashboardColorTheme('invalid')).toEqual({
      accent: 'var(--colors-cyan-40v, #009EC1)',
      accentText: 'var(--colors-cyan-60v, #007A99)',
      accentLight: 'var(--colors-cyan-15, #DFF2F6)',
      circleLightOuter: 'var(--colors-cyan-15, #DFF2F6)',
      circleLightInner: 'var(--colors-cyan-5, #F4FBFC)',
      circleDarkOuter: 'var(--colors-cyan-15, #DFF2F6)',
      circleDarkInner: 'var(--colors-cyan-50v, #0081A1)'
    })
  })

  it('returns blue TP5 dashboard color theme values', () => {
    expect(getTp5DashboardColorTheme('blue')).toEqual({
      accent: 'var(--colors-blue-dark, #0B4778)',
      accentText: 'var(--colors-link-blue, #005EA2)',
      accentLight: 'var(--colors-gray-cool-3, #F5F6F7)',
      circleLightOuter: '#E6EBF1',
      circleLightInner: '#EFF2F6',
      circleDarkOuter: 'var(--colors-blue-darkest, #112F4E)',
      circleDarkInner: 'var(--colors-blue-dark, #0B4778)'
    })
  })

  it('applies TP5 dashboard color variables only to eligible TP5 dashboard styles', () => {
    expect(
      getTp5DashboardColorThemeVariables({
        type: 'data-bite',
        biteStyle: 'tp5',
        tp5Visual: { calloutStyle: 'thin-border', colorTheme: 'blue' }
      })
    ).toEqual({
      '--tp5-dashboard-accent': 'var(--colors-blue-dark, #0B4778)',
      '--tp5-dashboard-accent-text': 'var(--colors-link-blue, #005EA2)',
      '--tp5-dashboard-accent-light': 'var(--colors-gray-cool-3, #F5F6F7)',
      '--tp5-data-bite-circle-light-outer': '#E6EBF1',
      '--tp5-data-bite-circle-light-inner': '#EFF2F6',
      '--tp5-data-bite-circle-dark-outer': 'var(--colors-blue-darkest, #112F4E)',
      '--tp5-data-bite-circle-dark-inner': 'var(--colors-blue-dark, #0B4778)'
    })

    expect(
      getTp5DashboardColorThemeVariables({
        type: 'data-bite',
        biteStyle: 'tp5',
        tp5Visual: { calloutStyle: 'thin-border', colorTheme: 'invalid' }
      })
    ).toEqual({
      '--tp5-dashboard-accent': 'var(--colors-cyan-40v, #009EC1)',
      '--tp5-dashboard-accent-text': 'var(--colors-cyan-60v, #007A99)',
      '--tp5-dashboard-accent-light': 'var(--colors-cyan-15, #DFF2F6)',
      '--tp5-data-bite-circle-light-outer': 'var(--colors-cyan-15, #DFF2F6)',
      '--tp5-data-bite-circle-light-inner': 'var(--colors-cyan-5, #F4FBFC)',
      '--tp5-data-bite-circle-dark-outer': 'var(--colors-cyan-15, #DFF2F6)',
      '--tp5-data-bite-circle-dark-inner': 'var(--colors-cyan-50v, #0081A1)'
    })

    expect(
      getTp5DashboardColorThemeVariables({
        type: 'data-bite',
        biteStyle: 'tp5',
        tp5Visual: { calloutStyle: 'drop-shadow', colorTheme: 'blue' }
      })
    ).toEqual({
      '--tp5-dashboard-accent': 'var(--colors-blue-dark, #0B4778)',
      '--tp5-dashboard-accent-text': 'var(--colors-link-blue, #005EA2)',
      '--tp5-dashboard-accent-light': 'var(--colors-gray-cool-3, #F5F6F7)',
      '--tp5-data-bite-circle-light-outer': '#E6EBF1',
      '--tp5-data-bite-circle-light-inner': '#EFF2F6',
      '--tp5-data-bite-circle-dark-outer': 'var(--colors-blue-darkest, #112F4E)',
      '--tp5-data-bite-circle-dark-inner': 'var(--colors-blue-dark, #0B4778)'
    })

    expect(
      getTp5DashboardColorThemeVariables({
        type: 'data-bite',
        biteStyle: 'tp5',
        tp5Visual: { calloutStyle: 'callout', colorTheme: 'blue' }
      })
    ).toBeUndefined()
    expect(
      getTp5DashboardColorThemeVariables({
        type: 'data-bite',
        biteStyle: 'body',
        tp5Visual: { calloutStyle: 'thin-border', colorTheme: 'blue' }
      })
    ).toBeUndefined()
  })
})
