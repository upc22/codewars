function validParentheses(parens) {
    let count = 0;
    for (let i = 0; i < parens.length; i++) {
        if (count < 0)
            return false;
        parens[i] === '(' ? count++ : count--;
    }
    return count === 0;
}