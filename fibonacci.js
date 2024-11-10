function fibs (num) {
    let numOne = 0;
    let numTwo = 1;
    let numTot;

    for(i = 1; i <= num; i++) {
        console.log(numOne);
        numTot = numOne + numTwo;
        numOne = numTwo
        numTwo = numTot
    }
}

// fibs(7)

// using recursion method

function fibsRec (num) {
    
    if (num == 0) return [0];
    if (num == 1) return [0, 1];
    
    console.log("This is printed recursively")
    const arr = fibsRec(num - 1)
    return [...arr, arr[num- 1] + arr[num- 2]]
}

console.log(fibsRec(8));





