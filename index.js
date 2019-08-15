function cleanKeys(obj) {
    array = []
    for (let key in obj) {
        array.push(obj[key])
    };
    return array
}

function twoSum(sum, array) {
    rtn = {}
    for (let i of array) {
        for(let j of array) {
            if (i + j === sum) {
                rtn[Math.abs(i - j)] = ([i, j])
            }
        }
    }
    return cleanKeys(rtn)
}

let sum = 6
let a = [5, -2, 4, 9, 1]

console.log(twoSum(sum, a))