const similar = require('../dist/index');

test(' returns similar array', () => {
    const array1 = [1,3,5];
    const array2 = [1,2,6,3];
    expect(similar(array1, array2)).toEqual(expect.arrayContaining([1, 3]))
});