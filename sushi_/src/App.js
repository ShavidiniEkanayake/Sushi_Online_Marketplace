import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Landing from './components/common/header';

import Home from "./components/pages/Home";
import AddItem from "./components/pages/AddItem";

function App() {
  return (
    <Router>
        <Landing/>
          <Routes>
          <Route excat path="/admin/dashboard" element={<Home/>} />
          <Route excat path="/admin/addProduct" element={<AddItem/>} />
          </Routes>

    </Router>
    
  );
}

export default App;
