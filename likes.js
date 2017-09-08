function likes(names) {
    let len = names.length,
        text;
    if (len === 0)
        text = "no one likes this";
    else if (len === 1)
        text = names[0] + " likes this";
    else if (len === 2)
        text = names[0] + " and " + names[1] + " like this";
    else
        text = names[0] + ", " + names[1] + "and" + len - 2 + " others like this";

    return text;
}