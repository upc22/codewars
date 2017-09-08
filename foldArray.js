function foldArray(array, runs) {
    let len = array.length;
    if (len === 1 || runs < 1)
        return array;

    let mid = Math.round(len / 2),
        result = [];
    for (let i = 0; i < mid; i++) {
        result[i] = i === (len - i - 1) ? array[i] : array[i] + array[len - i - 1];
    }
    return foldArray(result, --runs);

}

var abc = foldArray([1, 2, 3, 4, 5], 2);
console.log(abc);