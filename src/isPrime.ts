import { equal } from 'node:assert/strict'

function isPrime(num: number): boolean {
  if (num <= 1) return false

  const limit = Math.sqrt(num)

  for (let i = 2; i <= limit; i++) {
    if (num % i === 0) {
      return false
    }
  }

  return true
}

// Tests
equal(isPrime(-10), false)
equal(isPrime(0), false)
equal(isPrime(1), false)
equal(isPrime(2), true)
equal(isPrime(3), true)
equal(isPrime(4), false)
equal(isPrime(5), true)
equal(isPrime(7), true)
equal(isPrime(51), false)
equal(isPrime(100), false)
