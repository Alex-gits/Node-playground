const Logger = require('./logger');
const fs = require('fs');
const path = require('path');
const os = require('os');

const logger = new Logger();

const operatingSystem = os.platform();
const arch = os.arch();
const maxMemory = os.totalmem();


logger.on('message', data => {
  fs.writeFile(path.join(__dirname, 'user-info.txt'), `*${data.user}* System Info. \r\n`, err => {
    if (err) throw err;
    console.log('File has been written...');

    fs.appendFile(path.join(__dirname, 'user-info.txt'), 
    `Platform: ${operatingSystem}, Architecture: ${arch}, Memory: ${maxMemory}, user-id: ${data.id}`, 
    err => {
      if (err) throw err;
      console.log('User info has been added...')
    })
  })
})

logger.log('Alex');