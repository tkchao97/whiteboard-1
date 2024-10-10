// input 1 to 100

for(let i = 1; i <= 100; i++) {    // let i be 1 and it will loop to 100
    if(i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");   // if i divide 3 or divide 5 and the remainder is 0, print "FizzBuzz"
    } else if(i % 3 == 0) {
        console.log("Fizz");       // if i divide 3 and remainder is 0, print "Fizz"
    } else if(i % 5 == 0) {
        console.log("Buzz");       // if i divide 5 and remainder is 0, print "Buzz"
    } else {
        console.log(i);            // if not, print the number
    }
}