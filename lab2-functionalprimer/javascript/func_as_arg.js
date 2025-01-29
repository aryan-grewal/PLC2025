/* //Create list of ints from 1 to 5, Haskell equivalent [1..5]
function arrFunc(){
    let arr = [];
    for (let i = 1; i<=5; i++) {
        arr.push(i);
    }
    return arr;    
}

function applicatorFunc(inpFunc, s){
    if(s=='s'){
        const arr = inpFunc();        
        let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        return sum;
    }
    else{        
        const arr = inpFunc();
        let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        return sum/5;
    }
}

let x = applicatorFunc(arrFunc, 's');
console.log(x); */

const readline = require('readline');
// Generalized version
function arrFunc(start, end){
    let arr = [];
    for (let i = start; i <= end; i++) {
        arr.push(i);
    }
    return arr;
}

function applicatorFunc(arr, operation){
    let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    if (operation === 'sum') {
        return sum;
    } else if (operation === 'avg') {
        return sum / arr.length;
    } else {
        throw new Error("Invalid operation. Use 'sum' or 'avg'.");
    }
}

// Setup readline interface for user input in Node.js
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Get user input
rl.question('Enter the start number: ', (start) => {
    rl.question('Enter the end number: ', (end) => {
        rl.question('Enter "sum" for the sum or "avg" for the average: ', (operation) => {
            // Convert input to integers
            start = parseInt(start);
            end = parseInt(end);

            let arr = arrFunc(start, end)
            let result = applicatorFunc(arr, operation);
            console.log(result);

            rl.close();
        });
    });
});
