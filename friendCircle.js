var result = "";

function solution(M) {
    M = JSON.parse(M);
    let number = M.length,
        numOfCircles = 0,
        groups = [];
    var IsiNCircle = new Array(number).fill(0);

    for (var i = 0; i < number; i++) {
        if (!IsiNCircle[i]) {
            IsiNCircle[i] = 1;
            findCircle(M, IsiNCircle, i);
            result += '|';
        }
    }
    for (var j = 0; j < result.length; j++) {
        result = result.replace(",|", "|");
    }
    return result.substring(0, result.length - 1);
}


function findCircle(friends, inCircle, studentIndex) {
    result = result + studentIndex + ",";
    let length = friends.length;
    for (var i = 0; i < length; ++i) {
        if (friends[studentIndex][i] === 1 && !inCircle[i] && i !== studentIndex) {
            inCircle[i] = 1;
            findCircle(friends, inCircle, i);
        }
    }
}

console.log(solution('[[1,1,0],[1,1,0],[0,0,1]]'));