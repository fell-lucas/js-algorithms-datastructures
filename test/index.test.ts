import { describe, expect, it } from 'vitest'
import { convertToRoman, palindrome, rot13, telephoneCheck } from '../src'

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

describe('convertToRoman', () => {
  it('should work', () => {
    expect(convertToRoman(2)).toEqual('II')
    expect(convertToRoman(3)).toEqual('III')
    expect(convertToRoman(4)).toEqual('IV')
    expect(convertToRoman(5)).toEqual('V')
    expect(convertToRoman(9)).toEqual('IX')
    expect(convertToRoman(12)).toEqual('XII')
    expect(convertToRoman(16)).toEqual('XVI')
    expect(convertToRoman(29)).toEqual('XXIX')
    expect(convertToRoman(44)).toEqual('XLIV')
    expect(convertToRoman(45)).toEqual('XLV')
    expect(convertToRoman(68)).toEqual('LXVIII')
    expect(convertToRoman(83)).toEqual('LXXXIII')
    expect(convertToRoman(97)).toEqual('XCVII')
    expect(convertToRoman(400)).toEqual('CD')
    expect(convertToRoman(500)).toEqual('D')
    expect(convertToRoman(501)).toEqual('DI')
    expect(convertToRoman(649)).toEqual('DCXLIX')
    expect(convertToRoman(798)).toEqual('DCCXCVIII')
    expect(convertToRoman(891)).toEqual('DCCCXCI')
    expect(convertToRoman(1000)).toEqual('M')
    expect(convertToRoman(1004)).toEqual('MIV')
    expect(convertToRoman(1006)).toEqual('MVI')
    expect(convertToRoman(1023)).toEqual('MXXIII')
    expect(convertToRoman(2014)).toEqual('MMXIV')
    expect(convertToRoman(3999)).toEqual('MMMCMXCIX')
  })
})

describe('rot13 cipher', () => {
  it('should work', () => {
    expect(rot13('SERR PBQR PNZC')).toEqual('FREE CODE CAMP')
    expect(rot13('SERR CVMMN!')).toEqual('FREE PIZZA!')
    expect(rot13('FREE PIZZA!')).toEqual('SERR CVMMN!')
    expect(rot13('SERR YBIR?')).toEqual('FREE LOVE?')
    expect(rot13('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.')).toEqual('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.')
  })
})

describe('telephoneCheck', () => {
  it('should work', () => {
    const validNumbers = [
      '555-555-5555',
      '(555)555-5555',
      '(555) 555-5555',
      '555 555 5555',
      '5555555555',
      '1 555 555 5555',
    ]
    validNumbers.forEach((number) => {
      expect(telephoneCheck(number)).toEqual(true)
    })
  })
})
