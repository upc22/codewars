function design(n) {
    var len = n * n;
    var str = [];
    for (var i = 1, k = n, x = 1; i <= len; i++) {
        i < k ? str.push(" ") : str.push("#");
        if (i % n === 0 && i !== len) {
            str.push('\n');
            let y = x++;
            k = x * n - y;
        }

    }

    return str.join('');
}

console.log(design(5));