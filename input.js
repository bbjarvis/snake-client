const { constants } = require("buffer");
const consts = require("./constants");
// const consts = require('./constants')
// stores the active TCP connection object
let connection;
/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
 const setupInput = function(conn) {
   connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on("data", (key) => {
    handleUserInput(key);
    
    // input commands, getting logged into 'connection' so they can go to play.js
    connection.write(consts[key]);

    return stdin;
  })

}

 // allow user to exit using ctrl+c
const handleUserInput = (key) => {
  // \u0003 maps to ctrl+c input
    if (key === '\u0003') {
      process.exit();
  }
}
module.exports = setupInput;