import React from "react";
import { useParams } from "react-router-dom";
import { Button,Card } from "react-bootstrap";
import axios from "axios";
import "../../card.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

const Add = async (id, name, description, category, price, qty) => {
  const result = await axios.post("http://localhost:3001/api/product/addItem?vendorId=63d7f2b25d9ed68f50467557", {
    name: name,
    description: description,

  });

  if (result.status == 200) {
    NotificationManager.success("Your Product Added Succesfully");
    setTimeout(() => {}, 20000);
    window.location = "";
  } else {
    NotificationManager.error("Your Product Added Unsuccesfully");
  }
};

const Home = () => {
  const{id} = useParams();
  return (
    <div className="mt-20" style={{ marginLeft: "20rem" }}>
      <Card style={{ width: "30rem" }}>
        <Card.Body>
          <Card.Title style={{ marginLeft: "13rem" }}>Add Items</Card.Title>
          <NotificationContainer></NotificationContainer>
          <div className="my-6 mx-9">
            <div class="row">
              <div class="col">
                <label className="mb-1">Item Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  style={{}}
                  placeholder="Product Name"
                  class="form-control"
                  required
                />

                <label className="mb-1">Item Description</label>
                <textarea
                  type="textarea"
                  id="description"
                  name="description"
                  class="form-control"
                  placeholder="About the product"
                />
              </div>
            </div>
          </div>

          <Button
            variant="primary"
            className="my-3 mx-9"
            onClick={() => {
              const name = document.getElementById("name").value;
              const description = document.getElementById(
                "description"
              ).value;

              if (name == "") {
                console.log("No content");
                NotificationManager.warning("Please enter your product name of ");
              } else {
                Add(id, name, description);
              }
            }}
          >
            ADD
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Home;
