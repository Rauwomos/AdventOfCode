const fs = require('fs')

function parseInput(err, data) {
    x = d => {
        z = d.split('').map(n => parseInt(n))
        t = 0

        // Iterate over list and add double the value to the total if value half way the the array matches
        for(i=0; i < z.length/2; i++)
            if(z[i] == z[i+z.length/2])
                t += z[i] * 2
        return t
    }

    console.log(x(data))
    
}

fs.readFile('i', 'utf-8', parseInput)