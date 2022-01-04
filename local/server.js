const express = require('express');
const cors = require('cors');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server, {
   cors: {
      origin: '*',
      methods: ['GET', 'POST'],
      allowedHeaders: ['my-custom-header'],
      credentials: true,
   },
});

app.use(cors());
const rooms = new Map();

app.use(express.json());

app.get('/rooms', (req, res) => {
   res.json(rooms); /*req: client -> server */
}); /*res: server -> client */

io.on('connection', (socket) => {
   console.log('socket connected', socket.id);
   socket.on('test_count', (abc) => {
      console.log('num is:', abc);
   });

   socket.on('ping', (count) => {
      console.log(count);
   });
});

server.listen(9999, (err) => {
   if (err) {
      throw new Error(err);
   }
   console.log('*server started on port 9999*');
});
