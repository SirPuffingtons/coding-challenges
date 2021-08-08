// Write a function that returns an array of integers from 1-100 where multiples of 3 are replaced by 'fizz', multiples of 5 are replaced by 'buzz', and multiples of both 3 and 5 are replaced by 'fizzbuzz'.

function fizzBuzz() {
    for(let i = 1; i <= 100; i++) {
        let string = ''

        if(i % 3 === 0) string += 'fizz'
        if(i % 5 === 0) string += 'buzz'

        console.log(string === '' ? i : string)
    }
}

fizzBuzz()