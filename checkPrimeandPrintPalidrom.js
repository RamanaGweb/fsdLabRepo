const readline = require('readline');

// Set up interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Helper function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

// Helper function to check if a number is a palindrome
function isPalindrome(num) {
    const str = num.toString();
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

// Helper function to find the next palindrome after a given number
function findNextPalindrome(num) {
    let next = num + 1;
    while (!isPalindrome(next)) {
        next++;
    }
    return next;
}

// Main execution logic
rl.question('Enter a positive integer: ', (input) => {
    const number = parseInt(input, 10);

    // Validate if the input is a valid positive integer
    if (isNaN(number) || number <= 0) {
        console.log('Please enter a valid positive integer.');
    } else if (isPrime(number)) {
        const nextPalindrome = findNextPalindrome(number);
        console.log(`The number is prime. The next palindrome number is: ${nextPalindrome}`);
    } else {
        console.log('not a prime');
    }

    rl.close();
});