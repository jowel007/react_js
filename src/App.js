import React, { useState } from 'react';
import './App.css';

function App() {
  
  const [username, setUsername] = useState('Rohan');

  const clickHandler = (eventData) => {
    setUsername('asif');
    console.log(username);

    setUsername('rahul');
    console.log(username);

    setUsername('jishan');
    console.log(username);

  };

  return(
    <div className='main'>
      <p>Hello, {username}</p>
      <button className='bnt' onClick={clickHandler}>Click</button>
    </div>
  );

}

export default App;
