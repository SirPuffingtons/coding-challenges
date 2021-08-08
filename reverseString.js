// Write a function that will reverse a given string—with and without .reverse().

const stringInReverse = string => string.split('').reverse().join('')

function stringInReverseManually(string) {
    let reversedString = ''

    for(let i = string.length-1; i >= 0; i--)
        reversedString += string[i]

    return reversedString
}

console.log(stringInReverse('this is a string.'))
console.log(stringInReverseManually('this is a string.'))