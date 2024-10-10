let numOfElements = 10;              
const fibonacciSequence = generateFibonacciSequence();          

function fibonacci(n) {
    if (n <= 1) {
        return n;  // if n = 0,1, return n
    } else {
    return fibonacci(n - 1) + fibonacci(n - 2); // fibonacci formula
    }
}

function generateFibonacciSequence() {
    let sequence = [0, 1];
    for (let i = 2; i < numOfElements; i++) {
        sequence.push(fibonacci(i));      // Push each Fibonacci number to the sequence
    }
    return sequence;
}

console.log(fibonacciSequence.join(','));       
