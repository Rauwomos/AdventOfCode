const fs = require('fs')

function parseInput(err, data) {
    // If there was an error, stop
    if(err)
        throw err

    // Parse data into array of sorted array of numbers, one line per array
    var input2D = data.split('\n').map(row => row.split(',').map(val => parseInt(val)).sort((a,b) => a - b))
    
    // Calculate checksum
    var checksum = 0;
    for(i in input2D)
        checksum += input2D[i][input2D[i].length-1] - input2D[i][0]

    // Print checksum
    console.log(checksum)
}

fs.readFile('./input.txt', 'utf-8', parseInput)