function queueTime(customers, n) {
    let len = customers.length;
    if (!len)
        return 0;
    else if (len <= n)
        return Math.max.apply(null, customers);
    else {
        let tills = new Array(n).fill(0);
        for (let i = 0; i < n; i++) {
            tills[i] = customers[i];
        }
        tills.sort((a, b) => {
            return a - b;
        });
        for (let i = n; i < len; i++) {
            tills[0] += customers[i];
            tills.sort((a, b) => {
                return a - b;
            });

        }
        return Math.max.apply(null, tills);
    }

}

var time = queueTime([38, 25, 28, 29, 46, 18, 24, 43, 9, 42, 9, 39, 22, 43, 43, 40, 6, 20, 23, 50, 43, 5, 36, 9, 23], 4);
console.log(time);