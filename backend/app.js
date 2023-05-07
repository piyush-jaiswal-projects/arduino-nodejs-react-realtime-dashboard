const express = require('express')

const http = require('http');
const cors = require('cors');
const dotenv = require('dotenv');

const {SerialPort} = require('serialport')
const { ReadlineParser } = require('@serialport/parser-readline')
const { Server } = require("socket.io");


//initialize express app
const app = express()
const server = http.createServer(app);

//configure environment variables
dotenv.config();


//CORS
const corsOptions = {
    origin: process.env.ReactAppURL,
    methods: 'PUT, POST, GET, DELETE, PATCH, OPTIONS', // Allowed methods
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Authorization', // Allowed headers
    credentials: true
};

app.use(cors(corsOptions));

//setting up socket
const io = new Server(server, {
  cors: {
    origin: process.env.ReactAppURL,
    methods: 'PUT, POST, GET, DELETE, PATCH, OPTIONS', // Allowed methods
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Authorization', // Allowed headers
    credentials: true
  }
});

io.on('connection', (socket) => {
    console.log('Frontend connected');
  });


//data from port
const port = new SerialPort({
  path: process.env.USBPortPath,
  baudRate: 115200,
  dataBits: 8,
  parity: 'none',
  stopBits: 1,
  flowControl: false })

const parser = new ReadlineParser()
port.pipe(parser)
parser.on('data', (data) => {
  io.emit('data', data);
  console.log(data);
});



app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

server.listen(process.env.PORT, () => {
    console.log(`listening on : ${process.env.PORT}`);
});

