const fs = require('fs')

let reader = fs.createReadStream('./a.txt')
let writer = fs.createReadStream('./b.txt')

reader.pipe(writer)
