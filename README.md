# arduino-nodejs-react-realtime-dashboard
This repository contains the code for a real-time dashboard that displays data collected from an Arduino connected to a Node.js backend. The backend receives data from the Arduino via the USB port and uses Socket.io to emit the data in real-time to a React front-end. The React front-end then displays the data on a dashboard, updating in real-time as new data is received. This repository includes the code for the Node.js backend, the Arduino sketch, and the React front-end. With this code, you can quickly build a real-time dashboard for monitoring and displaying data collected from an Arduino using Node.js and React.

## Working
The different lights present on the dashboard turns ON and OFF based upon data from arduino.  
You can see frontend over this link:  
[WebApp](https://dreamy-dodol-f0c20f.netlify.app/)

# Developer's Guide

Steps to run:  
1. Run `cd frontend/` and then `npm install` commands in terminal to install all dependencies.  
2. Now run command `npm start` in terminal to start your react app.  
Your frontend is now running.

Now to run backend:  
1. Run `cd ..` and `cd backend/` commands in your terminal one by one to go to your backend directory.  
2. Now run `npm install` command to install all dependencies.  
3. Now run command `npm start`

# TroubleShooting  
1. You might be getting some errors related to some variables.
2. Search `.env` file inside backend directory.  
3. Define or change the following variables value corresponding to your system and need, where  
USBPortPath: is the path of the USB port of your system  
`USBPortPath='/dev/tty.SLAB_USBtoUART'`  

ReactAppURL is the address where your frontend in hosted locally  
`ReactAppURL="http://localhost:3000"`  

and PORT is the port number on which you want to host your backend  
`PORT = 4000` 

