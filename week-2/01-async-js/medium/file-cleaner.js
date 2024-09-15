// const fs = require('fs')

// function fileCleaner(filePath) {
//     try {
//         fs.readFile(filePath, 'utf-8', (err, data) => {
//             if (err) {
//                 console.log(err.toString())
//                 return err
//             }
//             const cleanData = data.replace(/\s+/g, ' ')

//             fs.writeFile(filePath, cleanData, 'utf-8', (err, data) => {
//                 if (err) {
//                     console.log(err.toString())
//                     return err
//                 } else {
//                     return data
//                 }
//             })
//         })
//     } catch (error) {
//         console.log(error.toString())
//     }
// }

// const res = fileCleaner('file.txt')

// console.log(res)


const fs = require('fs');


const cleanFile = (filePath) => {

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file:', err);
            return;
        }

        const cleanedContent = data.replace(/\s+/g, ' ').trim();

        fs.writeFile(filePath, cleanedContent, 'utf8', (err) => {
            if (err) {
                console.error('Error writing to the file:', err);
                return;
            }
            console.log('File cleaned successfully.');
        });
    });
};


const filePath = 'example.txt'; 
cleanFile(filePath);