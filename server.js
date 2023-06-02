const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
const http = require('http');
const socketManager = require('./socketTest');
const emitController = require('./controller/emitter')
const server = http.createServer(app);
app.use(cors());
// Initialize the Socket.IO instance and store it in a variable
const io = socketManager.initializeSocketIO(server);


// Pass the io instance to your controller files or other modules as needed
emitController.setSocketIO(io);
setTimeout(()=>{
emitController.emitMessageToClients()
},5000)
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});




