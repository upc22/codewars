function longest(s1, s2) {
    let hash = [],
        i,
        str = [],
        len1 = s1.length,
        len2 = s2.length;
    len = len1 > len2 ? len1 : len2;
    for (i = 0; i < 26; i++) {
        hash[i] = 0;
    }
    for (i = 0; i < len; i++) {
        if (s1[i] && s2[i]) {
            hash[s1.charCodeAt(i) - 97]++;
            hash[s2.charCodeAt(i) - 97]++;

        } else if (s1[i]) {
            hash[s1.charCodeAt(i) - 97]++;
        } else if (s2[i]) {
            hash[s2.charCodeAt(i) - 97]++;
        }
    }

    for (i = 0; i < 26; i++) {
        if (hash[i]) {
            str.push(String.fromCharCode(i + 97));
        }
    }
    //return str.join('');
    console.log(str.join(''));
}

longest("loopingisfunbutdangerous", "lessdangerousthancoding");