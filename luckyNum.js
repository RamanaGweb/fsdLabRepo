const readline = require('readline');

// Set up the terminal interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Map of lucky numbers to personality traits
const luckyTraits = {
    1: "beautiful",
    2: "bondleader",
    3: "charming",
    4: "handsome",
    5: "superfriend",
    6: "lovable",
    7: "fighter",
    8: "adjustable",
    9: "all known person"
};

// Function to reduce the date of birth to a single digit
function getLuckyNumber(dobString) {
    // Remove all non-digit characters (hyphens, spaces, etc.)
    let digits = dobString.replace(/\D/g, '');

    if (!digits) return null;

    // Loop until we are left with a single digit
    while (digits.length > 1) {
        let sum = 0;
        for (let char of digits) {
            sum += parseInt(char, 10);
        }
        digits = sum.toString();
    }

    return parseInt(digits, 10);
}

// Ask the user for their date of birth
rl.question('Enter your date of birth (dd-mm-yyyy): ', (input) => {
    const luckyNumber = getLuckyNumber(input);

    if (luckyNumber && luckyTraits[luckyNumber]) {
        console.log(`\nYour Lucky Number is: ${luckyNumber}`);
        console.log(`Personality Trait: ${luckyTraits[luckyNumber]}`);
    } else {
        console.log('\nInvalid input. Please make sure to enter numbers.');
    }

    rl.close();
});