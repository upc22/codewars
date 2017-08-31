function solution(str) {
    var hash = new Array(256).fill(0);
    for (var i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) > 96 && str.charCodeAt(i) < 123)
            hash[str.charCodeAt(i) - 32]++;
        else
            hash[str.charCodeAt(i)]++;
    }
    for (var i = 0; i < hash.length; i++) {
        if (hash[i] === 0) {
            hash.splice(i--, 1);
        }
    }
    console.log(hash)
    var a = hash[0],
        count = 0;
    for (var i = 1; i < hash.length; i++) {
        if (count > 1)
            return 'NO'
        if ([a - 1, a, a + 1].indexOf(hash[i]) === -1) {
            return 'NO';
        } else if ([a - 1, a + 1].indexOf(hash[i]) > 0) {
            count++;
        }
    }
    return 'YES';
}

console.log(universal('abbabccdcda'));