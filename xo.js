function XO(str) {

    if ((str.match(/x/gi) || []).length === (str.match(/o/gi) || []).length)
        return true
    return false

}