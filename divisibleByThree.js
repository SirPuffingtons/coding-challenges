// Write a function that takes a low and a high number, and print the numbers between them, adding 'div3' if the number is divisible by 3.

function divisibleByThree(low, high) {
    let output = []

    for(i = low; i <= high; i++) output.push(i % 3 === 0 ? `${i}div3` : i)

    return output
}

console.log(divisibleByThree(15, 109))