import React from "react";
import { Modal, InputNumber, Space, Button, Input, message } from "antd";
import { EyeTwoTone, EyeInvisibleOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import axios from "axios";
import "react-notifications/lib/notifications.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

const AllProduct = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [product, setProduct] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false);
  const [disProduct, setDisProduct] = useState([]);
  const [discount, setDiscount] = useState([]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "http://localhost:3001/api/product/viewone/?product_id=64083315c71ac6e5099973e9"
      );
      setProduct(result);
      setLoading(false);
    };
    fetchData();

    const fetchDiscount = async () => {
      const discount = await axios(
        "http://localhost:3001/api/discount/newdiscount/?product_id=64083315c71ac6e5099973e9&userId=640890c6552730c892306780"
      );
      setDiscount(discount);
      console.log(discount);
    };
    fetchDiscount();
  }, []);

  const calculateDiscount = async () => {
    const result = await axios.put(
      "http://localhost:3001/api/discount/calDiscount/?product_id=64083315c71ac6e5099973e9&price=1000"
    );
    setDisProduct(result);
  };

  const enterPassword = async (password) => {
    const result = await axios.post(
      "http://localhost:3001/api/user/insertpassword",
      {
        pass: password,
      }
    );
    // console.log("ss" + result.message);
    if (result.status == 200) {
      NotificationManager.success("Your passowrd is correct.");
      setTimeout(() => {}, 200000);
        window.location = "http://localhost:3000/discount";
    } else if (result.status == 400) {
      NotificationManager.error("Please Enter correct password");
    }
  };

  if (loading) {
    return (
      <>
        <p>Data Loading</p>
      </>
    );
  } else if (error) {
    return (
      <>
        <p>Error: {error}</p>
      </>
    );
  } else {
    return (
      <div
        className="mt-28 "
        class="row"
        style={{ marginTop: 90, marginLeft: 200 }}
      >
        <NotificationContainer></NotificationContainer>
        <h1 style={{ marginLeft: 450 }}>Product</h1>
        {product.data.Product.map((Project) => (
          <div className="card col-3 mt-96 mb-10">
            <div>
              <img
                class="card-img-top"
                src="https://www.w3schools.com/images/picture.jpg"
              ></img>
              <h5 class="card-title" className="mt-3">
                {Project.name}
              </h5>
              <p class="card-text">{Project.description}</p>
              <Input.Password
                placeholder="input password"
                id="pass"
                name="pass"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
              <Button
                variant="primary"
                className="my-3 mx-9"
                onClick={() => {
                  const password = document.getElementById("pass").value;

                  if ([password] == "") {
                    NotificationManager.warning(
                      "Please enter your product password "
                    );
                  } else {
                    enterPassword(password);
                    calculateDiscount();
                  }
                }}
              >
                Enter
              </Button>

              <div>
                <h4>Price : {Project.price}</h4>
              </div>
              <div>
                {discount.data.discount.map((disProduct) => (
                  <h4>Total: {disProduct.newPrice}</h4>
                ))}
              </div>
            </div>

            {/* <div className="card col-3 mt-96 mb-10" >
              
            </div> */}
          </div>
        ))}
      </div>
    );
  }
};

const Home = () => {
  return (
    <div>
      <div>
        <div>
          <AllProduct />
        </div>
      </div>
    </div>
  );
};

export default Home;
