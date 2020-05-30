const path = require('path');

// 1. Full path

console.log(__filename) // full path to the file - D:\IT\node js\references\path_demo.js




// 2. Base file name

console.log(path.basename(__filename))




// 3. Directory name

console.log(path.dirname(__filename)) // sane as console.log(__dirname)




// 4. File extansion (разрешение файла)

console.log(path.extname(__filename)) // .js




// 5. Create detailed path object

console.log(path.parse(__filename))




// 6. Create paths

console.log(path.join(__dirname, 'test', 'hello.html'))