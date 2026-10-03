function reverseWords(sentence) {
    return sentence
        .split(' ')
        .map(word => word.split('').reverse().join(''))
        .join(' ');
}

// Example usage:
const input = "My name is Ram";
const output = reverseWords(input);

console.log("Input: ", input);
console.log("Output:", output);