function spinWords(value) {
    //TODO Have fun :)
    var counter = 0,
        temp = "",
        result = '';
    for (var i = 0; i < value.length; i++) {

        if (value[i] === " " && counter > 4) {
            result += temp.split('').reverse().join('') + " ";
            counter = 0;
            temp = "";
        } else if (value[i] === " ") {
            result += temp + " ";
            counter = 0;
            temp = "";
        } else {
            counter++;
            temp += value[i];
        }
    }
    if (temp.length > 4)
        result += temp.split('').reverse().join('');
    else
        result += temp;
    console.log(result);
}
spinWords(" hey uttam pratap");