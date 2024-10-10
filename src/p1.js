let numArray = [21, 400, 8, -3 ,77, 99, -16, 55, 111, -36, 28];  

//
for(let i = 0; i < numArray.length; i++) {
    let temp;

    for(let j = 0; j < numArray.length - i - 1; j++) { // find the biggest number
        if(numArray[j] > numArray[j + 1]) {  // compare number 1 and number 2
            temp = numArray[j];                                        
            numArray[j] = numArray[j + 1];
            numArray[j + 1] = temp;   // if number 1 bigger, change the position with number 2
        }
    }
}

console.log(numArray);
