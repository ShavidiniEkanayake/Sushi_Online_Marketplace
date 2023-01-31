import React from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";

const Content = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:3001/api/product");
      setProduct(result);
      setLoading(false);
      console.log(result.data.data);
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
        className="mt-28"
        class="row"
        style={{ marginTop: 90, marginLeft: 200 }}
      >
        <div class="row-span-full" >
          <h1 style={{ marginLeft: 450 }}>Product</h1>
        <Button
                variant="primary"
                className="my-3 mx-9x ml-8 "
                href="http://localhost:3000/vendor/addProduct"
                style={{ marginLeft: 940}}
              >
                Add Product
              </Button>
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
                variant="outline-success"
                className="my-3 mx-9x ml-5"
                onClick={() => {}}
              >
                Edit
              </Button>
              <Button
                variant="outline-danger"
                className="my-3 mx-9x ml-5"
                onClick={() => {}}
              >
                Delete
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
