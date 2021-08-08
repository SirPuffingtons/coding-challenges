// Write a function that takes a string and returns it with the first letter of each word in uppercase.

function capitalize(string) {
    const words = string.toLowerCase().split(' ')

    for(let i = 0; i < words.length; i++) {
        words[i] = words[i].substring(0, 1).toUpperCase() + words[i].substring(1)
    }

    return words.join(' ')
}

console.log(capitalize('this is a string'))