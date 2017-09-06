function longestConsec(strarr, k) {
    // your code
    var len = strarr.length;
    if (len = 0 || k <= 0 || k > n)
        return '';
    var targetArr = [],
        count = 0;
    for (var i = 0; i < len; i++) {
        if (count < k) {
            count++;
            targetArr.push(strarr[i]);
        }
    }
}