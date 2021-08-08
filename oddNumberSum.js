// Write a function which takes an array of numbers and returns the sum of all odd numbers within that array—with and without using .reduce().

const oddNumberSumReduce = array => array.reduce((total, i) => {
    if(i % 2 === 1) return total += i
    
    return total
})

function oddNumberSum(array) {
    let sum = 0

    for(i of array) if(i % 2 === 1) sum += i

    return sum
}

console.log(oddNumberSumReduce([1, 2, 3, 4, 5]))
console.log(oddNumberSum([1, 2, 3, 4, 5]))