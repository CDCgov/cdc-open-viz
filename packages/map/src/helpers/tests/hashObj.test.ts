import { hashObj } from '../hashObj'

describe('hashObj', () => {
  it('should return a hash value for a given object', () => {
    const obj = { state: 'Georgia', city: 'Atlanta' }
    const expectedHash = -380051767
    const result = hashObj(obj)
    expect(result).toBe(expectedHash)
  })
})
