function findMaxOccurrence(str) {
    let charCount = {};  // Object to store character counts
    let maxChar = '';    // Variable to store character with max occurrences
    let maxCount = 0;    // Variable to store max count

    for (let char of str) {
        // Ignore non-alphabet characters
        if (!/[a-zA-Z]/.test(char)) continue;

        // Count occurrences of each character
        charCount[char] = (charCount[char] || 0) + 1;

        // Update maxChar and maxCount if this character has more occurrences
        if (charCount[char] > maxCount) {
            maxChar = char;
            maxCount = charCount[char];
        }
    }

    return { character: maxChar, occurrence: maxCount };
}

// Example usage
let input = "Hello, world!";
let result = findMaxOccurrence(input);
console.log(`Character: '${result.character}', Occurrence: ${result.occurrence}`);
