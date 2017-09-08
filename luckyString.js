function solution(str) {
    str = str.toLowerCase().split('').sort();
    let count1 = 1,
        count2 = 0,
        count,
        firstIndex = 0,
        lastIndex = 0;
    for (let i = 1; i < str.length; i++) {
        if (a[i] === a[firstIndex]) {
            continue;
        } else {
            lastIndex = i - 1;
            count1 = lastIndex - firstIndex + 1;
            if ((lastIndex - firstIndex + 1) === count1(lastIndex - firstIndex + 1) === count2)
                firstIndex = i;

            count2++;
        }
    }
    return str;
}

console.log(solution('abbabccdcda0fn1'));