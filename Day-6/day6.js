const fs = require('fs')

// Checks if 2d array contains duplicate arrays
function hasDuplicates(array) {
    array = array.map(v=>v+'')
    return (new Set(array)).size !== array.length;
}

// Spreads the largest value across all values as described in problem
spread = a=>{
    max = Math.max(...a)
    index = a.indexOf(max)
    a[index++]=0
    for(i=max; i>0; i--) {
        a[index++%a.length]++
    }
    return a
}

// Parses input into 2d array and passes that to solve2
solve = d=>{
    input = [d.split('\t').map(v=>+v)]
    return solve2(input)
}

// Recursivly solves the problem
solve2 = (iterations) => {
    iterations.push(spread(iterations[iterations.length-1].slice(0)))
    if(hasDuplicates(iterations)) {
        return iterations.length-1
    }
    return solve2(iterations)
}

fs.readFile('i', 'utf-8', (e,d) => console.log(solve(d)))