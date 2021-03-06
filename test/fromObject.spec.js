/* global describe, it, expect */
import { fromObject } from '../src/fromObject'

describe('fromObject', () => {
  it('should return an affine matrix', () => {
    let expected = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }
    let o1 = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }
    let o2 = { a: 1, b: 2, z: 500, c: 3, d: 4, e: 5, f: 6, x: 100, y: 200 }
    let o3 = { a: '1', b: '2', c: '3', d: '4', e: '5', f: '6' }
    expect(fromObject(o1)).toEqual(expected)
    expect(fromObject(o2)).toEqual(expected)
    expect(fromObject(o3)).toEqual(expected)
  })
})
