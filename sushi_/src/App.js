import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Landing from './components/common/header';


import Home from "./components/pages/home";

function App() {
  return (
    <Router>
        <Landing>
          <Routes>
          <Route excat path="/admin/dashboard" element={<Home/>} />
          </Routes>
        </Landing>
    </Router>
    
  );
}

export default App;
