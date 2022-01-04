import React from 'react';
import DataSend from './DataSend';
import png from './images/logo.png';
import socket from './Socket';

socket.on('connected', 'connected');

const sock_emit = (a) => {
   socket.emit('cords', a);
};

class Cord extends React.Component {
   constructor(props) {
      super(props);

      this.state = { x: 0, y: 0 };
   }

   _onMouseMove(e) {
      this.setState({ x: e.screenX, y: e.screenY });
      DataSend({ x: e.screenX, y: e.screenY });
   }

   render() {
      const { x, y } = this.state;

      // {() => {this._onMouseMove.bind(this); sock_emit(this)}}

      return (
         <div onMouseMove={this._onMouseMove.bind(this)}>
            <img src={png} alt='' />
            <h1>
               {x} {y}
            </h1>
            {/* <DataSend {...this.state}/> */}
         </div>
      );
   }
}
export default Cord;
