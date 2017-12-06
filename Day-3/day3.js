m = Math

function dist(input) {
    console.log(input)
    sqrt = Math.sqrt(input)
    ceil = Math.ceil(sqrt)%2?Math.ceil(sqrt):Math.ceil(sqrt+1)
    floor = Math.floor(sqrt)
    numInSquare = ceil*ceil - (ceil-2)*(ceil-2)
    // console.log(input-floor*floor)
    console.log('sqrt: ' + sqrt)
    console.log('ceil: ' + ceil)
    console.log('numInSquare: ' + numInSquare)
    console.log('one axis: ' + (ceil-1)/2)
    // console.log('other axis: ' + Math.floor(sqrt-1))
}

dist(14)
dist(20)
dist(27)