const fs = require('fs')

comparison = {
    '>': (x,y) => {return x > +y},
    '<': (x,y) => {return x < +y},
    '>=': (x,y) => {return x >= +y},
    '<=': (x,y) => {return x <= +y},
    '==': (x,y) => {return x == +y},
    '!=': (x,y) => {return x != +y}
}


solve = d => {
    input = d.split('\n').map(l => l.split(' '))
    variables = {}
    for(line in input) {
        // Check if the variables are initialised. If not initialise to 0
        if(!variables.hasOwnProperty(input[line][0])) {
            variables[input[line][0]] = 0
        }
        if(!variables.hasOwnProperty(input[line][4])) {
            variables[input[line][4]] = 0
        }
        
        // Do comparison and update value if necesary
        if(comparison[input[line][5]](variables[input[line][4]], input[line][6])) {
            if(input[line][1] == 'inc') {
                variables[input[line][0]] += +input[line][2]
            } else {
                variables[input[line][0]] -= +input[line][2]
            }
        }

    }
    values = Object.values(variables)
    return Math.max(...values)

}

fs.readFile('i', 'utf-8', (e,d) => console.log(solve(d)))