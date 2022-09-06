import { io as SocketIo } from 'socket.io-client';

import { ChampionOptionType } from '~/state';
const URL = `${import.meta.env.VITE_API_SOCKET_URL}`;

class SocketClient {
  private connection;

  constructor() {
    this.connection = SocketIo(URL);
    this.connection.on('winner', (message) => console.log(message));
    this.connection.on('miss', (message) => console.log(message));
  }

  handleJoinRoom(roomId: string) {
    this.connection.emit('join-room', { roomId });
  }

  handleSendGuess(champion: ChampionOptionType) {
    this.connection.emit('guess', champion.value);
  }

  handleDisconnect() {
    this.connection.disconnect();
  }
}

export const guessTheChampSocket = new SocketClient();
