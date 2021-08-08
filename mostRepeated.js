// Write a function that will return the most common character in a given string and how many times it shows up.

function mostRepeated(string) {
    const chars = {}
    let highest = [null, 0]

    for(char of string.split(''))
        chars[char] ? chars[char]++ : chars[char] = 1

    for(char in chars)
        if(chars[char] > highest[1]) highest = [char, chars[char]]

    return highest[0] + ' x ' + highest[1]
}

console.log(mostRepeated('javascript'))