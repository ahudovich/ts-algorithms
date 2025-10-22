import { deepEqual } from 'node:assert/strict'

type Result = Array<[number, number]>

function getFactorPairs(num: number): Result {
  if (num <= 1) return []

  const result: Result = []
  const limit = Math.sqrt(num)

  for (let i = 1; i <= limit; i++) {
    if (num % i === 0) {
      result.push([i, num / i])
    }
  }

  return result
}

// Tests
console.log(deepEqual(getFactorPairs(-10), []))
console.log(deepEqual(getFactorPairs(0), []))
console.log(deepEqual(getFactorPairs(1), []))
console.log(deepEqual(getFactorPairs(2), [[1, 2]]))
// prettier-ignore
console.log(deepEqual(getFactorPairs(4), [[1, 4], [2, 2]]))
// prettier-ignore
console.log(deepEqual(getFactorPairs(6), [[1, 6], [2, 3]]))
// prettier-ignore
console.log(deepEqual(getFactorPairs(12), [[1, 12], [2, 6], [3, 4]]))
