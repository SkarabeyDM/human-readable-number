module.exports = function toReadable(number)
{
  let words = new Array(3)

  const digits = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
  const tens = [, , "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]

  const hundred = ~~((number / 100) % 10),
    ten = ~~((number / 10) % 10),
    digit = ~~(number % 10)


  // Hundreds
  if (hundred)
    words[0] = digits[hundred] + " hundred"

  // Tens
  if (ten)
    if (ten > 1)
      words[1] = tens[ten]
    else if (ten == 1) {
      words[1] = digits[10 + digit]

      return words.filter(Boolean).join(" ")
    }

  // Digits
  if (digit) {
    if (digit != 0)
      words[2] = digits[digit]
  } else if (!number)
    return "zero"

  return words.filter(Boolean).join(" ")
}