const fs = require('fs')

function parseInput(err, data) {
    // If there was an error, stop
    if(err)
        throw err

    // Read the file into an array of integers
    const numArray = data.split('').map(i => parseInt(i))
    var total = 0;

    // Iterate over list and add double the value to the total if value half way the the array matches
    for(var i=0; i < numArray.length/2; i++) {
        if(numArray[i] == numArray[i+numArray.length/2])
            total += numArray[i] * 2
    }

    // Output the result
    console.log(total)
}

fs.readFile('i', 'utf-8', parseInput)