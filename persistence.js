function persistence(num) {
    if (num < 10)
        return 0;
    if (num % 10 === 0)
        return 1;
    let product = 1,
        persistence = 1;
    while (num) {

        product = product * (num % 10);
        num = (num / 10) >> 0;
        if (num === 0 && product > 9) {
            persistence++;
            num = product;
            product = 1
        }

    }
    return persistence;
}

persistence(999);