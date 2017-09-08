function countSmileys(arr) {
    console.log(arr.filter((x) => {
        let eyes = 0,
            mouths = 0,
            noses = 0;
        for (let i = 0; i < x.length; i++) {
            if ((x[i] === ")" || x[i] === "D") && mouths < eyes)
                mouths++;
            else if (x[i] === ";" || x[i] === ":")
                eyes++;
            else if (x[i] === "-" || x[i] === "~")
                noses++;
            else
                return false;
        }
        return mouths === eyes && mouths === 1 && noses <= 1 ? true : false;
    }));
}

countSmileys([':o)', ';~D', ';~(', ':~-D', ':~)', ';~>', ';>']);