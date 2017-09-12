function solution(str) {
    let hash = new Array(256).fill(0);
    str.toLowerCase().split('').sort().forEach(function(value) {
        hash[value.charCodeAt()]++;
    });
    hash = hash.filter(function(value) {
        return value > 0;
    });
    let min = Math.min(...hash),
        count = 0;

    for (var i = 0; i < hash.length; i++) {
        if (count > 1)
            return 'NO'
        if ([min + 1, min].indexOf(hash[i]) === -1) {
            return 'NO';
        } else if (hash[i] === (min + 1)) {
            count++;
        }
    }
    return 'YES';

}

console.log(solution('abbabccdcda0fn1'));