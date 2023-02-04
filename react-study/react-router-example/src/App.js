// import './App.css';
import { BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './pages/Home';
import Profile from './pages/Profile';
import About from './pages/About';
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
          <Route path="/profile/:id" element={<Profile></Profile>} />
          <Route path="/profile" element={<Profile></Profile>} />
          <Route path="/about" element={<About></About>} />
          <Route path="/" exact element={<Home></Home>} />
          <Route element={<NotFound></NotFound>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
