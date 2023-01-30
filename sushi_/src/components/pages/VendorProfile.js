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
      const result = await axios("http://localhost:3001/api/product/viewProductById?vendorId=63d7746db8316c832afa39db");
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
    <div className="mt-28" class="row" style={{marginTop:90,marginLeft:200}}>
      <h1 style={{marginLeft:450}}>Product</h1>
      {product.data.Product.map((Project) => (
        <div class="card col-3" style={{margin:20}}>
          <img class="card-img-top" src="https://www.w3schools.com/images/picture.jpg"></img>
          <h5 class="card-title" className="mt-3">{Project.name}</h5>
          <p class="card-text">
           {Project.description}
          </p>
          <Button
            variant="primary"
            className="my-3 mx-9x"
            onClick={() => {
              
            }}
          >
            Add To Cart
          </Button>
        </div>
      ))}
    </div>
  );
      }

}

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

  export default MyProfile