const EventEmitter = require('events');

// Create emitter class
class MyEmitter extends EventEmitter { }

// Init object
const myEmitter = new MyEmitter();

// Event listener
myEmitter.on('eventExample', data => console.log(data));

// Init event
myEmitter.emit('eventExample', 123)