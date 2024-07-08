import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    const pingServer = () => {
      fetch('https://form-server-shzd.onrender.com/')
        .then(response => response.json())
        .then(data => console.log('Ping response:', data))
        .catch(error => console.error('Error pinging server:', error));
    };

    // Ping the server immediately on component mount
    pingServer();

    // Set up an interval to ping the server every 10 minutes
    const intervalId = setInterval(pingServer, 600000); // 600000ms = 10 minutes

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Pinging server every 10 minutes...</p>
      </header>
    </div>
  );
}

export default App;
