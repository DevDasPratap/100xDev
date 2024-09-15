// const fs = require('fs')
// function expensiveOperation(n) {
//     let result = 0;
//     for (let i = 0; i < n * 1000000; i++) {
//         result += Math.sqrt(i);
//     }
//     return result;
// }
// const data = 'This is some sample data to be written to the file.';

// fs.writeFile('read.txt', data, (err) => {
//     if (err) {
//         console.error('Error writing file:', err);
//     } else {
//         console.log('File written successfully!');
//         // Perform an expensive operation
//         const result = expensiveOperation(10);
//         console.log(`\nExpensive operation result: ${result}`);
//     }
// })

// console.log('This message will be printed first.\n');


const fs = require('fs').promises;

async function writeToFile(filename, content) {
  try {
    await fs.writeFile(filename, content, 'utf8');
    console.log('File has been written successfully');
  } catch (error) {
    console.error('Error writing to file:', error);
  }
}

// Usage
writeToFile('example.txt', 'Hello, world!');