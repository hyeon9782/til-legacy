import logo from './logo.svg';
// import './App.css';
// import './App.scss';
import styles from './App.module.css';
import Button from './components/Button';

function App() {
  return (
    <div className={styles[App]}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button>Button</Button>
      </header>
    </div>
  );
}

export default App;
