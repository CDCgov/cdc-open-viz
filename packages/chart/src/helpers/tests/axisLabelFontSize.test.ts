import { describe, expect, it } from 'vitest'
import { AXIS_LABEL_FONT_SIZE, AXIS_LABEL_FONT_SIZE_SMALL, getAxisLabelFontSize } from '../axisLabelFontSize'

describe('axisLabelFontSize', () => {
  it('returns the desktop axis label size for non-mobile visualization viewports', () => {
    expect(getAxisLabelFontSize('sm')).toBe(AXIS_LABEL_FONT_SIZE)
    expect(getAxisLabelFontSize('md')).toBe(AXIS_LABEL_FONT_SIZE)
    expect(getAxisLabelFontSize('lg')).toBe(AXIS_LABEL_FONT_SIZE)
  })

  it('returns the compact axis label size for mobile visualization viewports', () => {
    expect(getAxisLabelFontSize('xxs')).toBe(AXIS_LABEL_FONT_SIZE_SMALL)
    expect(getAxisLabelFontSize('xs')).toBe(AXIS_LABEL_FONT_SIZE_SMALL)
  })
})
