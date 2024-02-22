import React, { useState } from 'react';
import './App.css';

function App() {
  const p = [
    {
      name: 'Dinesh',
      passward: 1230,
    },
    {
      name: 'chandra',
      passward: 6666,
    },
  ];

  const [userName, setUserName] = useState('');
  const [userPassward, setUserPassward] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = () => {
    const user = p.find(
      (u) => u.name.toLowerCase() === userName.toLowerCase() && u.passward === parseInt(userPassward)
    );

    if (user) {
      setMessage('Login Successfully');
    } else {
      setMessage('Please give right username and passward');
    }
  };

  return (
    <>
    <div id="box">
    <div id="log-in">
      <div>
        <label htmlFor="User_name">User_name:</label>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <br />
      <div>
        <label htmlFor="User_passward">User_passward:</label>
        <input
          type="password"
          value={userPassward}
          onChange={(e) => setUserPassward(e.target.value)}
        />
      </div>
      <br/>
      <button type="submit" onClick={handleLogin}>
        click
      </button>
      { <p>{message}</p>}
      </div>
      </div>
    </>
  );
}

export default App;