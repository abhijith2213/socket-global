const socketManager = require('../socketTest');
let io;

// Set the io instance for this module
function setSocketIO(socketIO) {
    console.log("called me");
  io = socketIO;
}

// Emit a message to all connected clients
function emitMessageToClients() {
    console.log("called function");
  if (io) {
    console.log("in the IO");
    io.emit('newMessage', { message: 'A new message has been sent from the server.' });
  }
}
module.exports = {
  setSocketIO,
  emitMessageToClients,
};
