
/**
 * Implement a generator function that can be used
 * to generate numbers in the Fibonacci Sequence
 */
export function* getFibSequence(): IterableIterator<number> {
  let first = 1
  let second = 1
  while(true) {
    let sum = first + second
    yield sum
    first = second
    second = sum
  }
}