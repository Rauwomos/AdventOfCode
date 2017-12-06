const fs = require('fs')

function hasDuplicates(array) {
    return (new Set(array)).size == array.length;
}

function parseInput(err, data) {
    // If there was an error, stop
    if(err)
        throw err

    // Parse input file into array of sorted arrays of numbers, one line per array
    var input2D = data.split('\n').map(row => row.split(' ')).map(row => hasDuplicates(row)).reduce((acc, cur) => {return +cur + acc}, 0)

    console.log(input2D)
}

fs.readFile('i', 'utf-8', parseInput)