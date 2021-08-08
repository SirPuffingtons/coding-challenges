// Write a function that sums up the numbers in an array of arrays—with and without using .reduce().

const array = [[3, 2], [1], [4, 12], [3, 15, 2]]

const arraySumReduce = array => array.reduce((a, b) => a.concat(b)).reduce((a, b) => a + b)

const arraySumFlatReduce = array => array.flat().reduce((a, b) => a + b)

function arraySum(array) {
    let sum = 0

    array.forEach(i => sum += typeof(i) === 'number' ? i : arraySum(i))

    return sum
}

console.log(arraySumReduce(array))
console.log(arraySumFlatReduce(array))
console.log(arraySum(array))