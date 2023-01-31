import React from "react";
import { Modal, InputNumber, Space } from "antd";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

const AllProduct = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [product, setProduct] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [value, setValue] = useState("99");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:3001/api/product");
      setProduct(result);
      setLoading(false);
      console.log(result);
    };
    fetchData();
  }, []);

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
        <h1 style={{ marginLeft: 450 }}>Product</h1>
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
            <Button variant="primary" className="my-3 mx-9" onClick={showModal}>
              Add To Cart
            </Button>

            <Modal
              title={Project.name}
              centered
              open={isModalOpen}
              mask={false}
              onCancel={false}
            >
              <img
                class="card-img-top"
                src="https://www.w3schools.com/images/picture.jpg"
              ></img>
              <p>{Project.description}</p>
              <div>
                <Space>
                <InputNumber
                  min={1}
                  max={10000}
                  value={value}
                  onChange={setValue}
                />
                <Button
                  type="primary"
                  onClick={() => {
                    setValue(1);
                  }}
                >
                  Reset
                </Button>
              </Space>
              <Button variant="primary" className=" ml-28">
                Add To Cart
              </Button>
              <Button variant="outline-primary" className=" ml-3" onClick={handleCancel}>
                Cancel
              </Button>
              </div>
              
            </Modal>
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
