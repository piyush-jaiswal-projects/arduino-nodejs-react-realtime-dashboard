# arduino-nodejs-react-realtime-dashboard
This repository contains the code for a real-time dashboard that displays data collected from an Arduino connected to a Node.js backend. The backend receives data from the Arduino via the USB port and uses Socket.io to emit the data in real-time to a React front-end. The React front-end then displays the data on a dashboard, updating in real-time as new data is received. This repository includes the code for the Node.js backend, the Arduino sketch, and the React front-end. With this code, you can quickly build a real-time dashboard for monitoring and displaying data collected from an Arduino using Node.js and React.

## Working
The different lights present on the dashboard turns ON and OFF based upon data from arduino.  
You can see frontend over this link:  
[WebApp](https://dreamy-dodol-f0c20f.netlify.app/)

# Developer's Guide
The app is divided into two parts : frontend and backend 

## Frontend  
Steps to run:  
1. Run `npm install` command to install all dependencies.  
2. Create `.env` file inside frontend/src directory.  
3. Define the path on which your backend is or will be hosted:  
`REACT_APP_Backend_Path = "http://localhost:4000"`  
4. Now run command `npm start`  

## Backend  
Steps to run:  
1. Run `npm install` command to install all dependencies.  
2. Create `.env` file inside backend directory.  
3. Define the following variables, where USBPortPath is the path of the USB port of your system, ReactAppURL is the address where your frontend in hosted locally, and PORT is the port number on which you want to host your backend:  
`USBPortPath='/dev/tty.SLAB_USBtoUART'`
`ReactAppURL="http://localhost:3000"`
`PORT = 4000` 
4. Now run command `npm start`

