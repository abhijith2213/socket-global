const socketIO = require('socket.io');
let io;

function initializeSocketIO(server) {
  io = socketIO(server,{
    cors: {
        origin: "http://127.0.0.1:5173",
        methods: ["GET", "POST"],
     }
});

  // Add any event listeners or configuration specific to your application
  // For example:
  io.on('connection', (socket) => {
    console.log('A user connected.');
    
    // Handle socket events
    socket.on('message', (data) => {
      console.log('Received message:', data);
    });
  });

  // Return the io instance
  return io;
}

module.exports = {
  initializeSocketIO,
  getIO: () => io, // Export a getter function to access the io instance
};
