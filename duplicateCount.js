function duplicateCount(text) {
    let hash = new Array(100).fill(0),
        i;
    for (i = 0; i < text.length; i++) {
        if (isNaN(text[i]))
            hash[text[i].toUpperCase().charCodeAt(0)]++;
        else
            hash[text[i].charCodeAt(0)]++;
    }
    console.log(hash)
    return hash.filter(x => { return x > 1 }).length;
}

duplicateCount('aA11');