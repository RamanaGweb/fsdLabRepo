function isFibonacciLoop(num) {
    if (num < 0 || typeof num !== "number") return false;
    if (num === 0 || num === 1) return true;

    let prev = 0;
    let current = 1;

    while (current < num) {
        let next = prev + current;
        prev = current;
        current = next;
    }

    return current === num;
}

// Example usage:
const numberToTest = 55; 
console.log(`${numberToTest} is a Fibonacci number:`, isFibonacciLoop(numberToTest)); 
