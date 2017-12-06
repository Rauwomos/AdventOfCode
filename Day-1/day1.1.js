fs = require('fs')

function parseInput(err, data) {
    // Read the file into an array of integers
    x = d => {
        z = d.split('').map(i => parseInt(i))
        t = (z[0] == z[z.length-1])?z[0]:0
        
        // Iterate over z and add the value to the total if the neighbours match
        for(i=1; i<z.length;i++)
            if(z[i] == z[i-1])
                t += z[i]
        return t
    }

    // Output the result
    console.log(x(data))
}

fs.readFile('i', 'utf-8', parseInput)