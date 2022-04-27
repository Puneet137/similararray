"use strict";
function similar(array1, array2) {
    return array2.filter(function (key) {
        return array1.indexOf(key) != -1;
    });
}
let array1 = [1, 2, 3, 5, 6];
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let similarArray = similar(array1, array2);
console.log(similarArray);
module.exports = similar;
