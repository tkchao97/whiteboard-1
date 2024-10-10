list1 = [4, 5, 2, 3, 1, 6];
list2 = [8, 7, 6, 9, 4, 5];

let found = 0;
let symmetricDifference = [];

// find the difference from list 1 compare to list 2
for(let i = 0; i < list1.length; i++) {
    let difference = true;
    for(let j = 0; j < list2.length; j++) {
        if(list1[i] == list2[j]) {
            difference = false;
        }
    }
    if(difference) {
        symmetricDifference[found] = list1[i];
        found++;
    }
}

// find the difference from list 2 compare to list 1
for(let i = 0; i < list2.length; i++) {
    let difference = true;
    for(let j = 0; j < list1.length; j++) {
        if(list2[i] == list1[j]) {
            difference = false;
        }
    }
    if(difference) {
        symmetricDifference[found] = list2[i];
        found++;
    }
}

// arrange the number in ascending order
for(let i = 0; i < symmetricDifference.length - 1; i++) {
    let min = i;

    for(let j = i + 1; j < symmetricDifference.length; j++) {
        if(symmetricDifference[j] < symmetricDifference[min]) {
            min = j;
        }
    }

    if(min !== i) {
        let temp = symmetricDifference[i];
        symmetricDifference[i] = symmetricDifference[min];
        symmetricDifference[min] = temp;
    }
}

console.log(symmetricDifference);