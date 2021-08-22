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
      case 'w':
        connection.write('Move: up');
        break;
      case 'a':
        connection.write('Move: left');
        break;
      case 's':
        connection.write('Move: down');
        break;
      case 'd':
        connection.write('Move: right');
        break;
      // message keys
      case 'g':
        connection.write('Say: Good Job');
        break;
      case 'e':
        connection.write('Say: AWESOME!!!');
        break;
      case 't':
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