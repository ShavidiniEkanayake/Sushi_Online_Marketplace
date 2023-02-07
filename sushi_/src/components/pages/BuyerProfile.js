import React from "react";
import { Modal, InputNumber, Space } from "antd";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";

const Content = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [product, setProduct] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:3001/api/product");
      setProduct(result);
      setLoading(false);
      console.log(result.data.data);
    };
    fetchData();
  }, []);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const Delete = async () =>{
    try {
      const res = await axios.delete(
        "http://localhost:3001/api/product/63d96757465e368b59dcf56a",
      );
      console.log(res);
      window.location.reload();
    } catch (error) {
      console.log(error);
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
        className="mt-28"
        class="row"
        style={{ marginTop: 90, marginLeft: 200 }}
      >
        <div class="row-span-full">
          <h1 style={{ marginLeft: 450 }}>Product</h1>
        </div>

        {product.data.data.map((Project) => (
          <div class="card col-3" style={{ margin: 20 }}>
            <img
              class="card-img-top"
              src="https://www.w3schools.com/images/picture.jpg"
            ></img>
            <h5 class="card-title" className="mt-3">
              {Project.name}
            </h5>
            <p class="card-text">{Project.description}</p>
            <div class="row-span-full">
              <Button
                variant="outline-primary"
                className="my-3 mx-9x ml-8"
                onClick={() => {}}
              >
                View
              </Button>
              <Button
                variant="outline-danger"
                className="my-3 mx-9x ml-5"
                onClick={() => {}}
              >
                Delete
              </Button>
                <Button
                  variant="primary"
                  className="my-3 mx-9x ml-5"
                  onClick={Delete}
                >
                  Buy
                </Button>
            </div>
          </div>
        ))}
      </div>
    );
  }
};

const MyProfile = () => {
  return (
    <div>
      <div>
        <div>
          <Content />
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
