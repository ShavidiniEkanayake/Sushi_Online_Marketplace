import {Link} from "react-router-dom";
import { useEffect, useState } from "react";
import { AiOutlineSearch, AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import axios from "axios";

const Header = () => {
    return (
        <div className="text-center mt-5" style={{ fontFamily: "Inter", fontSize: "20px", color: "grey" }}>
            <span className="display-6">ADMIN DASHBOARD</span>
        </div>
    )
}

const AllProduct = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          const result = await axios("");
          setProduct(result.data);
        };
        fetchData();
      }, []);
    
      return(
        <div><h1>aaa</h1></div>
      )
}

const Home = () =>{
    return(
        <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12"><Header/></div>
          </div>
          <div>
          <div className="col-lg-12"><AllProduct/></div>
          </div>
        </div>
      </div>
    )
}

export default Home;