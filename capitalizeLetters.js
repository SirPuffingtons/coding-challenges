// Write a function that takes a string and returns it with the first letter of each word in uppercase.

function capitalize(string) {
    const words = string.toLowerCase().split(' ')

    for(let i = 0; i < words.length; i++)
        words[i] = words[i].substring(0, 1).toUpperCase() + words[i].substring(1)

    return words.join(' ')
}

const capitalizeString = string =>
    string
        .toLowerCase()
        .split(' ')
        .map(word => word[0].toUpperCase() + word.substr(1))
        .join(' ')


const capitalizeStringRegex = string => string.replace(/\b[a-z]/gi, char => char.toUpperCase())

console.log(capitalize('this is a string'))
console.log(capitalizeString('this is a string'))
console.log(capitalizeStringRegex('this is a string'))