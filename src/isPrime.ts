import { equal } from 'node:assert/strict'

function isPrime(num: number): boolean {
  if (num <= 1) return false

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false
    }
  }

  return true
}

// Tests
console.log(equal(isPrime(-10), false))
console.log(equal(isPrime(0), false))
console.log(equal(isPrime(1), false))
console.log(equal(isPrime(2), true))
console.log(equal(isPrime(3), true))
console.log(equal(isPrime(4), false))
console.log(equal(isPrime(5), true))
console.log(equal(isPrime(7), true))
console.log(equal(isPrime(51), false))
console.log(equal(isPrime(100), false))
