function codeTry(A) {
    var max = Math.max(...A);
    if (max <= 0)
        return 1;
    for (var i = 1; i < max; i++) {
        if (A.indexOf(i) === -1) {
            return i;
        }
    }
    return max + 1;
}

var res = codeTry([-1, -2, 0, 3])
console.log(res);