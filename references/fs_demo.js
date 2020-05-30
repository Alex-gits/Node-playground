const fs = require('fs');
const path = require('path');

// Create folder

// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//   if (err) throw err;
//   console.log('Folder created...')
// })


// Create and write to file

// fs.writeFile(path.join(__dirname, '/test', 'hello-world.txt'), 'Hello world', err => {
//   if (err) throw err;
//   console.log('File written to...')

//   fs.appendFile(path.join(__dirname, '/test', 'hello-world.txt'), ' and all other worlds!', err => {
//     if (err) throw err;
//     console.log('File appended to...')
//   })
// })



// Reade file

// fs.readFile(path.join(__dirname, '/test', 'hello-world.txt'), 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data)
// })



// Rename file

// fs.rename(path.join(__dirname, '/test', 'hello-world.txt'), path.join(__dirname, '/test', 'hello-world2.txt'), err => {
//   if (err) throw err;
//   console.log('File renamed...')
// })