const fs = require('fs')

solve = d => {

    let inGarbage = false

    // Remove all garbage
    for (i=0; i<d.length; i++) {
        if(inGarbage) {
            if(d[i] == '>') {
                inGarbage = false
                d = d.slice(0,i) + d.slice(i+1)
            } else if(d[i] == '!') {
                d = d.slice(0,i) + d.slice(i+2)
            } else {
                d = d.slice(0,i) + d.slice(i+1)
            }
            i--
        } else {
            if(d[i] == '<') {
                inGarbage = true
                d = d.slice(0,i) + d.slice(i+1)
                i--
            }
        }
    }


    let depthCount = 0
    let total = 0

    // Count the score
    for(i in d) {
        if(d[i] == '{') {
            depthCount ++
            total += depthCount
        } else if(d[i] == '}') {
            depthCount--
        }
    }

    return total

}

fs.readFile('i', 'utf-8', (e,d) => console.log(solve(d)))