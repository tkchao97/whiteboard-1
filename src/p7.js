function sqrt(x) {
    if (x == 0 || x == 1) return x; 

    for (let i = 1; i <= x; i++) {
        if (i * i == x) {
            return "Square root of " + x + " is " + i ;  // if i times i equals x, i is the square root of x
        }
    }

    return "Not a perfect square";  // print this message if x is not a perfect square 
}



console.log(sqrt(36));
console.log(sqrt(144));
console.log(sqrt(25));
console.log(sqrt(100));
console.log(sqrt(81));
