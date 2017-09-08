function titleCase(title, minorWords) {
    var minorWords = minorWords && minorWords.toLowerCase().split(' '),
        sentence = title.toLowerCase().split(' '),
        result = sentence.map((x) => {
            if (minorWords && minorWords.indexOf(x) !== -1) {
                console.log(minorWords.indexOf(x))
                return x;
            }
            return x.charAt(0).toUpperCase() + x.slice(1);
        }).join(' ');
    console.log(result.charAt(0).toUpperCase() + result.slice(1));
    //return sentence.charAt(0).toUpperCase() + sentence.slice(1);
}

titleCase('a clash of KINGS', 'a an the of');