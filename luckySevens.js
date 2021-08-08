// Write a function called lucky_sevens which takes an array of integers and returns true if any three consecutive elements sum to 7.

function lucky_sevens(array) {
    if(typeof(array) !== 'object' || array.length < 3)
        return 'Expected an array of length greater than 2.'

    for(i = 2; i < array.length; i++)
        if(array[i] + array[i-1] + array[i-2] === 7)
            return true

    return false
}

console.log(lucky_sevens('a'))
console.log(lucky_sevens([4]))
console.log(lucky_sevens([4, 5, 6]))
console.log(lucky_sevens([1, 4, 2]))