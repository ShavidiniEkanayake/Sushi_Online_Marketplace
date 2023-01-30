import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Landing from './components/common/header';

import Home from "./components/pages/Home";
import AddItem from "./components/pages/AddItem";
import MyProile from "./components/pages/VendorProfile";

function App() {
  return (
    <Router>
        <Landing/>
          <Routes>
          <Route excat path="/vendor/dashboard" element={<Home/>} />
          <Route excat path="/vendor/addProduct" element={<AddItem/>} />
          <Route excat path="/vendor/myProfile" element={<MyProile/>} />
          </Routes>

    </Router>
    
  );
}

export default App;
