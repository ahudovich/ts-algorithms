import { equal } from 'node:assert/strict'

/**
 * Sums the first n nonnegative integer numbers.
 *
 * @param n - The last nonnegative integer number to sum
 * @returns The sum of all nonnegative integer numbers up to n
 */
function sumOfNonnegativeNumbers(n: number) {
  const isEven = n % 2 === 0
  const numberOfPairs = Math.floor(n / 2)

  // prettier-ignore
  return isEven
    ? numberOfPairs * (1 + n)
    : numberOfPairs * (1 + (n - 1)) + n
}

// Tests
equal(sumOfNonnegativeNumbers(0), 0)
equal(sumOfNonnegativeNumbers(1), 1)
equal(sumOfNonnegativeNumbers(2), 3)
equal(sumOfNonnegativeNumbers(3), 6)
equal(sumOfNonnegativeNumbers(100), 5050)
equal(sumOfNonnegativeNumbers(101), 5151)
