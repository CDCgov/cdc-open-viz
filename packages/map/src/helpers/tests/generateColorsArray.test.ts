import { generateColorsArray } from '../generateColorsArray'

describe('generateColorsArray', () => {
  it('should return an array of colors', () => {
    const colors = generateColorsArray('#fde0dd', false)
    expect(colors).toEqual(expect.arrayContaining(['#fde0dd', '#ffd0c9', '#edd1ce']))
  })

  it('should return a brighter hover color when special flag is true', () => {
    const colors = generateColorsArray('#fde0dd', true)
    expect(colors[1]).toEqual('#fffaf7')
  })

  it('should return a darker color for the third element in the array', () => {
    const colors = generateColorsArray('#fde0dd', false)
    expect(colors[2]).toBe('#edd1ce')
  })
})
