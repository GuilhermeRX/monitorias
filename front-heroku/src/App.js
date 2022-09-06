import './App.css';
import logo from './logo.svg';

function App() {
  const users = async () => {
    const users = await fetch('https://guilhermerx-back.herokuapp.com/');
    const data = await users.json();
    return data;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {users}
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
