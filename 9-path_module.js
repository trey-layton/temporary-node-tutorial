const path = require('path');
console.log(path.sep)
const filePath = path.join('/content','subfodler','test.txt')
console.log(filePath)
const base = path.basename(filePath)
console.log(base)
const absolute = path.resolve(__dirname, 'content','subfodler','test.txt')
console.log(absolute)