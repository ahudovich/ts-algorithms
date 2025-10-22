import { equal } from 'node:assert/strict'

/**
 * Performs a linear search to find an index of a value in an array.
 *
 * @param nums - The array to search in
 * @param n - The value to look for
 * @returns The index of the value in the array, or -1 if it is not found
 */
function getIndexOf(nums: Array<number>, n: number): number {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === n) {
      return i
    }
  }

  return -1
}

// Tests
equal(getIndexOf([], 5), -1)
equal(getIndexOf([10, 20, 30, 40], 25), -1)

equal(getIndexOf([5], 5), 0)
equal(getIndexOf([5], 10), -1)

equal(getIndexOf([2, 2, 2], 2), 0)
equal(getIndexOf([2, 2, 2], 3), -1)

equal(getIndexOf([7, 3, 7, 1], 7), 0)
equal(getIndexOf([1, 5, 4, 3], 4), 2)
