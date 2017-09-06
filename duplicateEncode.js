function duplicateEncode(word) {
    var hash = new Array(),
        currentIndex, i,
        resultant = '';
    for (i = 0; i < 256; i++) {
        hash[i] = 0;
    }
    for (i = 0; i < word.length; i++) {
        currentIndex = word.charCodeAt(i);
        if (currentIndex > 64 && currentIndex < 91)
            currentIndex += 32;
        hash[currentIndex]++;
    }
    for (i = 0; i < word.length; i++) {
        currentIndex = word.charCodeAt(i);
        if (currentIndex > 64 && currentIndex < 91)
            currentIndex += 32;
        if (hash[currentIndex] > 1) {
            resultant += ')';
        } else if (hash[currentIndex] === 1) {
            resultant += '(';
        } else {
            continue;
        }
    }

    return resultant;

}

duplicateEncode("Success");