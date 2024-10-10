let list1 = [4, 5, 2, 3, 1, 6];
let list2 = [8, 7, 6, 9, 4, 5];


for(let i = 0; i < list1.length; i++) {
    for(let j = 0; j < list2.length; j++) {
        if(list1[i] == list2[j]) {     // if list 1 intersect with list 2
            console.log(list1[i]);     // print the number
        }
    }
}
