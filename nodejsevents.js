const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('WaterFull', () => {
  console.log('Please turn off the motor!');
  setTimeout(()=>{
    console.log('Please turn off the motor! its a reminder');
  },3000)
  
});

console.log("Program is running")
console.log("its still running")
myEmitter.emit('WaterFull');