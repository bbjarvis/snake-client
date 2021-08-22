const { constants } = require("buffer");
const { MOVE_UP_KEY, MOVE_LEFT_KEY, MOVE_DOWN_KEY, MOVE_RIGHT_KEY, GOOD_JOB_KEY, AWESOME_KEY, TOO_BAD_KEY } = require("./constants");

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
    switch(key) {
      // movement keys
      case MOVE_UP_KEY:
        connection.write('Move: up');
        break;
      case MOVE_LEFT_KEY:
        connection.write('Move: left');
        break;
      case MOVE_DOWN_KEY:
        connection.write('Move: down');
        break;
      case MOVE_RIGHT_KEY:
        connection.write('Move: right');
        break;
      // message keys
      case GOOD_JOB_KEY:
        connection.write('Say: Good Job');
        break;
      case AWESOME_KEY:
        connection.write('Say: AWESOME!!!');
        break;
      case TOO_BAD_KEY:
        connection.write('Say: Too Bad');
    }
    
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