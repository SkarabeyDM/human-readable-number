function toReadable(number)
{
  const digits = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
  const tens = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]

  const getWords = (number, mayZero = true) => {
    // 100 - 999
    if (number >= 100) {
      const hundred = Math.trunc(number / 100)
      number -= hundred * 100
      return `${digits[hundred - 1]} hundred${number ? (" " + getWords(number, false)) : ""}`
    }
    // 20 - 99
    else if (20 <= number) {
      const ten = Math.trunc(number / 10)
      number -= ten * 10
      return `${tens[ten - 2]}${number ? (" " + getWords(number, false)) : ""}`
    }
    // 1 - 19
    else if (1 <= number) return digits[number - 1]
    // 0
    else if (mayZero) return "zero"
  }
  return getWords(number)
}

module.exports = toReadable