export const palindrome = (str: string) => {
  str = str.toLowerCase().replaceAll(/[^a-zA-Z0-9]+/g, '')
  let reversed = ''

  for (let i = str.length - 1; i >= 0; i--)
    reversed += str[i]

  return reversed === str
}
