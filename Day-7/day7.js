const fs = require('fs')

// Parses input into 2d array and passes that to solve2
solve = d=>{
    input = d.split('\n').map(l=> l.replace(/\W+/g, ' ').trim().split(' '))
    for(line in input) {
        rest = input[line].slice(2)
        input[line] = {
            'name': input[line][0],
            'weight': +input[line][1],
            'children': rest
        }
    }

    let child = input[0].name
    let parent = input.filter(o => o.children.includes(child))
    while(true) {
        let parent = input.filter(o => o.children.includes(child))[0]
        if(parent) {
            child = parent.name
        } else {
            return child
        }
    }
}

fs.readFile('i', 'utf-8', (e,d) => console.log(solve(d)))