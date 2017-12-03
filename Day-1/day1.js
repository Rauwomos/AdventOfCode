const fs = require('fs')

function parseInput(err, data) {
    // If there was an error, stop
    if(err)
        throw err

    // Read the file into an array of integers
    const numArray = data.split('').map(i => parseInt(i))
    var total = 0;

    // check the case for the first and last item in the list
    if (numArray[0] == numArray[numArray.length-1])
        total += numArray[0]
    
    // Iterate over list and add the value to the total if the neighbours match
    for(var i=0; i<numArray.length-1;i++) {
        if(numArray[i] == numArray[i+1])
            total += numArray[i]
    }

    // Output the result
    console.log(total)
}

fs.readFile('i', 'utf-8', parseInput)