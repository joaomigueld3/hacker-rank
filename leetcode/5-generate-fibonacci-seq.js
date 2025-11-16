/**
 * Write a generator function that returns a generator object which yields the fibonacci sequence.
The fibonacci sequence is defined by the relation Xn = Xn-1 + Xn-2.
The first few numbers of the series are 0, 1, 1, 2, 3, 5, 8, 13.
 */

/* Fibonacci formula: For all 'n > 1' then 'fib (n) = fib (n-1) + fib (n-2) */

// returns the value of Fibonacci function in the 'n' position
function fibRecursive (n) {
    if (n <= 0 ) return 0
    else if (n === 1) return 1
    return fibRecursive(n-1) + fibRecursive(n-2)
}

console.log('fibRecursive: ', fibRecursive(10)) // fib(10) = 55

//returns array of Fibonacci sequence up to 'index'
function fibSequenceArray (index) {
      if (index > 100000000) { 
        console.log('limit exceeded') 
        return null 
    }
    const fibSeq = [];
    let fibI = 0;
    for (let i = 0; i < index; i++) {
      if (i === 0) {
        fibSeq.push(0);
        i++
      }
      if (i === 1) {
        fibSeq.push(1);
        i++
      }
        fibI = fibSeq[i-1] + fibSeq[i-2];
        fibSeq.push(fibI);
    }
    return fibSeq;

}

console.log('fib sequence: ',fibSequenceArray(5))

/**
 * A generator function to produce the Fibonacci sequence up to 'n' items.
 * @param {number} n - The number of Fibonacci items to generate.
 */
var fibGenerator = function*(n) {
  let current = 0;
  let next = 1;

  for (let i = 0; i < n; i++) {
    // Yield the current value first
    yield current;
    
    // Then, update the state for the *next* iteration
    // [current, next] becomes [next, current + next]
    [current, next] = [next, current + next];
  }
}

// Get the first 7 numbers
const fibArray = [...fibGenerator(7)];

console.log(fibArray);
// Output: [0, 1, 1, 2, 3, 5, 8]


/**
 * An infinite Fibonacci sequence generator.
 */
function* fibonacciInfinite() {
  let [current, next] = [0, 1];

  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

const n = 10;
const sequence = [];
const fibGen = fibonacciInfinite(); // Get the generator object

for (let i = 0; i < n; i++) {
  // Pull the next value from the generator
  sequence.push(fibGen.next().value);
}

console.log(sequence);
// Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
