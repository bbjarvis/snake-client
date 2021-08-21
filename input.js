

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
 const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on("data", (key) => {
    handleUserInput(key);
  })
  return stdin;
}
 // allow user to exit using ctrl+c
const handleUserInput = (key) => {
  // \u0003 maps to ctrl+c input
    if (key === '\u0003') {
      process.exit();
  }
}
module.exports = setupInput;