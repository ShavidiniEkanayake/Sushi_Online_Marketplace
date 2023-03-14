import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Landing from './components/common/header';

import Home from "./components/pages/Home";
import AddItem from "./components/pages/AddItem";
import MyProile from "./components/pages/VendorProfile";
import Register from "./components/pages/Registration";
import LogIn from "./components/pages/LogIn"
import BuyerProfile from "./components/pages/BuyerProfile"
import Footer from "./components/common/footer";
import Discount from "./components/pages/Discount";

function App() {
  return (
    <Router>
        <Landing/>
          <Routes>
          <Route excat path="/" element={<Home/>} />
          <Route excat path="/vendor/addProduct" element={<AddItem/>} />
          <Route excat path="/vendor/myProfile" element={<MyProile/>} />
          <Route excat path="/register" element={<Register/>} />
          <Route excat path="/logIn" element={<LogIn/>} />
          <Route excat path="/buyerProfile" element={<BuyerProfile/>} />
          <Route excat path="/discount" element={<Discount/>}/>
          </Routes>
          <Footer/>

    </Router>
    
  );
}

export default App;
