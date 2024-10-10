function anagramChecker(str1, str2) {
    
    function adjust(str) {
        return str
            .toLowerCase()
            .replace(/[^a-z]/g, '')  // Remove non-alphabetic characters
            .split('')
            .sort()
            .join('');
    }

    // Normalize both strings and check if they are identical
    return adjust(str1) === adjust(str2);
}

// Test examples
console.log(anagramChecker("listen", "silent"));            
console.log(anagramChecker("debit card", "Bad credit"));     
console.log(anagramChecker("hello", "bye"));               
console.log(anagramChecker("restful", "fluster"));           
console.log(anagramChecker("listen", "silentt"));            
console.log(anagramChecker("Conversation", "Voices, rant on"));  
