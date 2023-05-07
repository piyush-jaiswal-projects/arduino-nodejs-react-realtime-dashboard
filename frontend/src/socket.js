import { io } from 'socket.io-client';

const URL = process.env.REACT_APP_Backend_Path;
console.log(URL);

export const socket = io(URL);