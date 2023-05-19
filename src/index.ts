/* eslint-disable no-console */
export const palindrome = (str: string) => {
  str = str.toLowerCase().replaceAll(/[^a-zA-Z0-9]+/g, '')
  let reversed = ''

  for (let i = str.length - 1; i >= 0; i--) reversed += str[i]

  return reversed === str
}

export const convertToRoman = (num: number) => {
  // Start by separating the numbers
  // e.g. 36 = [3, 6], 9 = [9]
  const splitNums = `${num}`.split('')

  // Then add padding
  // 36 = [30, 6], 9 = [9]
  const separatedNums = splitNums
    .reverse()
    .map((str, idx) => Number(str.padEnd(idx + 1, '0')))
    .reverse()

  // Map roman values
  const getBase = (num: number) => {
    if (num <= 10)
      return { flat: num, base: ['I', 'V', 'X'] }
    if (num <= 100)
      return { flat: num / 10, base: ['X', 'L', 'C'] }
    if (num <= 1000)
      return { flat: num / 100, base: ['C', 'D', 'M'] }
    return { flat: num / 1000, base: ['M'] }
  }

  const mapRoman = (num: number) => {
    const { flat, base } = getBase(num)
    switch (flat) {
      case 1:
        return base[0]
      case 2:
        return base[0].repeat(2)
      case 3:
        return base[0].repeat(3)
      case 4:
        return base[0] + base[1]
      case 5:
        return base[1]
      case 6:
        return base[1] + base[0]
      case 7:
        return base[1] + base[0].repeat(2)
      case 8:
        return base[1] + base[0].repeat(3)
      case 9:
        return base[0] + base[2]
      case 10:
        return base[2]
    }
  }

  return separatedNums.map(num => mapRoman(num)).join('')
}

export const rot13 = (input: string) => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
  const arr = input.toUpperCase().split('')

  const shifted = arr.map((char) => {
    const idx = alphabet.indexOf(char)

    if (idx === -1)
      return char

    let shiftedLetterIndex = idx + 13
    if (shiftedLetterIndex + 1 > alphabet.length)
      shiftedLetterIndex -= alphabet.length

    return alphabet[shiftedLetterIndex]
  }).join('')

  return shifted
}

export const telephoneCheck = (str: string) => {
  // Should validate US phone numbers
  // e.g. 555-555-5555, 1 555-555-5555, 1 (555) 555-5555, 5555555555, 555-555-5555, (555)555-5555, 1(555)555-5555
  return /^1? ?(\(\d{3}\)|\d{3})-? ?\d{3}-? ?\d{4}$/.test(str)
}
