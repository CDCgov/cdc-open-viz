import { readFileSync } from 'node:fs'
import path from 'node:path'
import { afterEach, describe, expect, it } from 'vitest'

const packagesRoot = path.resolve(__dirname, '../../..')
const readPackageStyles = packageName =>
  readFileSync(path.join(packagesRoot, packageName, 'src/css/main.css'), 'utf8').replace(
    /^@charset\s+["'][^"']+["'];\s*/,
    ''
  )

const mountWithPackageStyles = (packageName: string, markup: string) => {
  const style = document.createElement('style')
  style.textContent = readPackageStyles(packageName)
  style.dataset.calloutTest = 'true'
  document.head.appendChild(style)
  document.body.innerHTML = `<div class="cove-visualization type-${packageName}">${markup}</div>`
}

afterEach(() => {
  document.querySelectorAll('style[data-callout-test]').forEach(style => style.remove())
  document.body.innerHTML = ''
})

describe('isolated TP5 callout styling', () => {
  // Load only the consuming package's CSS: Storybook can otherwise mask a missing
  // import by loading the same shared styles later through an unrelated package.
  it.each(['data-bite', 'chart', 'map', 'waffle-chart'])(
    '%s positions and sizes its own flag without another package or a .cove ancestor',
    packageName => {
      mountWithPackageStyles(packageName, '<div class="cdc-callout"><img class="cdc-callout__flag" alt="" /></div>')
      const callout = document.querySelector('.cdc-callout')!
      const flag = document.querySelector('.cdc-callout__flag')!
      expect(getComputedStyle(callout).position).toBe('relative')
      expect(getComputedStyle(flag).position).toBe('absolute')
      expect(getComputedStyle(flag).width).toBe('1.84rem')
      expect(getComputedStyle(flag).right).toBe('1.08rem')
      expect(getComputedStyle(flag).top).toBe('-0.36rem')
    }
  )

  it.each([false, true])('data-bite reserves title space only with a flag: %s', hasFlag => {
    mountWithPackageStyles(
      'data-bite',
      `
      <div class="cove-visualization__body bite__style--tp5">
        <div class="cdc-callout ${hasFlag ? 'cdc-callout--has-flag' : ''}">
          <h3 class="cdc-callout__heading">Title</h3>
        </div>
      </div>
    `
    )
    expect(getComputedStyle(document.querySelector('.cdc-callout__heading')!).paddingRight).toBe(
      hasFlag ? '1.5rem' : '0px'
    )
  })

  it('dashboard rows still remove flag spacing when they hide the flag', () => {
    mountWithPackageStyles('data-bite', '')
    const style = document.createElement('style')
    style.dataset.calloutTest = 'true'
    style.textContent = readPackageStyles('dashboard')
    document.head.appendChild(style)
    document.body.innerHTML = `
      <div class="cove-visualization type-dashboard"><div class="cdc-dashboard-inner-container">
        <div class="row">
          <div class="col-md-6"><div class="cove-visualization type-data-bite">
            <div class="cove-visualization__body bite__style--tp5">
              <div class="cdc-callout cdc-callout--has-flag">
                <img class="cdc-callout__flag" alt="" /><h3 class="cdc-callout__heading">Title</h3>
              </div>
            </div>
          </div></div>
          <div class="col-md-6"></div>
        </div>
      </div></div>
    `
    expect(getComputedStyle(document.querySelector('.cdc-callout__flag')!).display).toBe('none')
    expect(getComputedStyle(document.querySelector('.cdc-callout__heading')!).paddingRight).toBe('0px')
  })

  it.each([
    ['data-bite', false],
    ['data-bite', true],
    ['markup-include', false],
    ['markup-include', true]
  ])('%s removes resolved-color borders with White Background Style %s', (packageName, whiteBackground) => {
    const bodyClass = packageName === 'data-bite' ? 'bite__style--tp5' : 'markup-include-component--tp5'
    const calloutClass = packageName === 'data-bite' ? '' : 'markup-include-tp5'
    mountWithPackageStyles(
      packageName as string,
      `
      <div class="cove-visualization__body ${bodyClass} ${whiteBackground ? 'white-background-style' : ''}">
        <div class="cdc-callout cdc-callout--data-color ${calloutClass}" style="background-color: #f45b53"></div>
      </div>
    `
    )
    const callout = document.querySelector('.cdc-callout')!
    expect(getComputedStyle(callout).borderTopWidth).toBe('0px')
    expect(getComputedStyle(callout).backgroundColor).toBe('rgb(244, 91, 83)')
    callout.classList.remove('cdc-callout--data-color')
    if (whiteBackground) {
      expect(getComputedStyle(callout).borderTopWidth).toBe('1px')
    }
  })

  it('data-bite styles its configuration overlay without another package', () => {
    mountWithPackageStyles(
      'data-bite',
      '<section class="waiting"><section class="waiting-container"></section></section>'
    )
    expect(getComputedStyle(document.querySelector('.waiting')!).position).toBe('absolute')
    expect(getComputedStyle(document.querySelector('.waiting')!).textAlign).toBe('center')
    expect(getComputedStyle(document.querySelector('.waiting-container')!).maxWidth).toBe('400px')
  })
})
