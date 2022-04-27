"use strict";
function similar(array1:number[], array2:number[]) {
    return array2.filter(function (key:any) {
        return array1.indexOf(key) != -1;
    });
}
let array1:number[] = [1, 2, 3, 5, 6];
let array2 :number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let similarArray:number[] = similar(array1, array2);
console.log(similarArray)


module.exports = similar;