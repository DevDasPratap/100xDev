// const fs = require('fs')
// function expensiveOperation(n) {
//     let result = 0;
//     for (let i = 0; i < n * 1000000; i++) {
//         result += Math.sqrt(i);
//     }
//     return result;
// }

// fs.readFile('read.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(data)
//         // Perform an expensive operation
//         const result = expensiveOperation(10);
//         console.log(`\nExpensive operation result: ${result}`);
//     }
// })


console.log('This message will be printed first.\n');

const fs = require('fs');

// Function to read a file asynchronously
fs.readFile('read.txt', 'utf8', (err, data) => {
  if (err) {
    if (err.code === 'ENOENT') {
      console.error('Error: File not found!');
    } else {
      console.error('Error reading file:', err);
    }
    return;
  }
  console.log('File contents:', data);
});

// Expensive operation: A simple, large computational task
const expensiveOperation = () => {
  let sum = 0;
  for (let i = 0; i < 1e8; i++) { 
    sum += i;
  }
  console.log('Expensive operation done');
};


expensiveOperation();