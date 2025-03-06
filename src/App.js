import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const getGreeting = () => {
    fetch(`http://localhost:3001/api/greet?name=${name}`)
      .then((response) => response.json())
      .then((data) => setMessage(data.message || data.error))
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <h1>Welcome to Younglabs</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={getGreeting}>Get Greeting</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;
