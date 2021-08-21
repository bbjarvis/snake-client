const net = require("net");
const { stdin } = require("process");
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost", // IP address here,
    port: 50541,// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log('Successfully connected to game server')
    conn.write('Name: BBJ');
    console.log('Connected')
 
  });
  // runs when data is recieved
  conn.on('data', (data) => {
    console.log(data.toString());
  });

  return conn;
};

module.exports = connect;