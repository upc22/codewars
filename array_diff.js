function diff(a, b) {
    return a.filter(function(value) {
        let len = b.length;
        while (len--) {
            if (b[len] === value)
                return false;
        }
        return true;
    })
}