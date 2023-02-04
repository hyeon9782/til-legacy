import logo from './logo.svg';
import './App.css';
import NaverLogin from './components/NaverLogin';
import axios from 'axios';
import { useEffect } from 'react';

function App() {
  // const fetchData = async () => {
  //   const res = await axios.get("https://map.naver.com/v5/api/bookmark/sync");
  //   console.log(res);
  // }
  // useEffect(() => {
  //   fetchData();
  // }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <NaverLogin />
      </header>
    </div>
  );
}

export default App;
