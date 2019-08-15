function cleanKeys(obj) {
    array = []
    for (let key in obj) {
        array.push(obj[key])
    };
    return array
}

function twoSum(sum, array) {
    rtn = {}
    for (let i = 0; i < array.length; i++) {
        for(let j of array) {
            if (i + j === sum) {
                rtn[Math.abs(i - j)] = ([i, j])
            }
        }
    }
    return cleanKeys(rtn)
}

function betterTwoSum(sum, array) {
    rtn = []
    for (let i = 0; i < array.length / 2; i++) {
        for(let j of array) {
            if (i + j === sum) {
                rtn.push([i, j])
            }
        }
    }
    return rtn
}
let sum = 6
let a = [5, -2, 4, 9, 1]

console.log(twoSum(sum, a))
console.log(betterTwoSum(sum, a))