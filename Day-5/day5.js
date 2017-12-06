const fs = require('fs')

function parseInput(err, data) {
    // If there was an error, stop
    if(err)
        throw err

    // Parse input file into array of sorted arrays of numbers, one line per array
    var input = data.split('\n').map(v => +v)

    var index = 0
    var count = 0

    while(index >= 0 && index < input.length) {
        count++
        index += input[index]++
    }
    
    console.log(count)
}

fs.readFile('i', 'utf-8', parseInput)