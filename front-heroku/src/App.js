import { useEffect, useState } from 'react';
import './App.css';

import logo from './logo.svg';

function App() {
  const [user, setUsers] = useState([])
  const users = async () => {
    const users = await fetch('https://guilhermerx-back.herokuapp.com/');
    const data = await users.json();
    setUsers(data);
  }

  useEffect(() => {
    users()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {user.map((item) => <p>{item.name}</p>)}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
