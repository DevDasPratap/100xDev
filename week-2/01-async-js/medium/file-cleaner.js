const fs = require('fs')

function fileCleaner(filePath) {
    fs.readFile(filePath, 'utf-8', (err, data)=>{
        if (err) {
            console.log(err.toString())
            return err
        }
        const cleanData = data.replace(/\s+/g, ' ')

        fs.writeFile(filePath, cleanData, 'utf-8', (err, data)=>{
            if (err) {
                console.log(err.toString())
                return err
            }else{
                return data
            }
        })
    })
}

const res = fileCleaner('file.txt')

console.log(res)