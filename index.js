function twoSum(sum, array) {
    rtn = []
    for (let i of array) {
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