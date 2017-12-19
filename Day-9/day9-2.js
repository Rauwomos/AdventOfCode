const fs = require('fs')

solve = d => {

    let inGarbage = false
    let total = 0

    // Remove all garbage
    for (i=0; i<d.length; i++) {
        if(inGarbage) {
            if(d[i] == '>') {
                inGarbage = false
                d = d.slice(0,i) + d.slice(i+1)
            } else if(d[i] == '!') {
                d = d.slice(0,i) + d.slice(i+2)
            } else {
                total++
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

    return total
}

fs.readFile('i', 'utf-8', (e,d) => console.log(solve(d)))