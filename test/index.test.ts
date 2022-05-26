import { describe, expect, it } from 'vitest'
import { palindrome } from '../src'

describe('palindrome', () => {
  it('should work', () => {
    expect(palindrome('eye')).toBeTypeOf('boolean')
    expect(palindrome('eye')).toEqual(true)
    expect(palindrome('_eye')).toEqual(true)
    expect(palindrome('race car')).toEqual(true)
    expect(palindrome('not a palindrome')).toEqual(false)
    expect(palindrome('A man, a plan, a canal. Panama')).toEqual(true)
    expect(palindrome('never odd or even')).toEqual(true)
    expect(palindrome('nope')).toEqual(false)
    expect(palindrome('almostomla')).toEqual(false)
    expect(palindrome('My age is 0, 0 si ega ym.')).toEqual(true)
    expect(palindrome('1 eye for of 1 eye.')).toEqual(false)
    expect(palindrome('0_0 (: /-\ :) 0-0')).toEqual(true)
    expect(palindrome('five|\_/|four')).toEqual(false)
  })
})
