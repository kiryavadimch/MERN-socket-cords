import socket from './Socket';

function DataSend(props) {
   console.log('test');

   console.log(props);

   socket.emit('test_count', props);
   // return
}

export default DataSend;
