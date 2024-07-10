const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');

// Function to append logs to a file
const appendToFile = (message) => {
  const logFilePath = path.join(__dirname, 'ping-log.txt');
  fs.appendFile(logFilePath, `${message}\n`, (err) => {
    if (err) {
      console.error(`Error writing to log file: ${err}`);
    }
  });
};

// Function to ping the server
const pingServer = async () => {
  try {
    const response = await fetch('https://form-server-shzd.onrender.com/');
    const data = await response.json();
    const timestamp = new Date().toLocaleString();
    const logMessage = `[${timestamp}] Ping response: ${JSON.stringify(data)}`;
    console.log(logMessage);
    appendToFile(logMessage);
  } catch (error) {
    const timestamp = new Date().toLocaleString();
    const errorMessage = `[${timestamp}] Error pinging server: ${error}`;
    console.error(errorMessage);
    appendToFile(errorMessage);
  }
};

// Ping the server immediately
pingServer();

// Set up an interval to ping the server every 10 minutes
setInterval(pingServer, 600000); // 600000ms = 10 minutes
