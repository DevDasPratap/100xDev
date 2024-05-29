const fs = require('fs')
function expensiveOperation(n) {
    let result = 0;
    for (let i = 0; i < n * 1000000; i++) {
        result += Math.sqrt(i);
    }
    return result;
}

fs.readFile('read.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
        // Perform an expensive operation
        const result = expensiveOperation(10);
        console.log(`\nExpensive operation result: ${result}`);
    }
})

console.log('This message will be printed first.\n');