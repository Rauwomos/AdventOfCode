const fs = require('fs')

function wholeDivisionInRow(row) {
    for(var i=0;i<row.length; i++) {
            for(var j=0; j<row.length; j++) {
                if(row[i]!=row[j] && row[i]%row[j] == 0) {
                    return row[i]/row[j]
                }
            }
        }
    throw "Failed to find divisor in row"
}

function parseInput(err, data) {
    // If there was an error, stop
    if(err)
        throw err

    var input2D = data.split('\n').map(row => row.split(',').map(val => parseInt(val)).sort((a,b) => a - b))
    var checksum = 0;
    for(i in input2D)
        checksum += wholeDivisionInRow(input2D[i])

    console.log(checksum)

    
}

fs.readFile('./input.txt', 'utf-8', parseInput)