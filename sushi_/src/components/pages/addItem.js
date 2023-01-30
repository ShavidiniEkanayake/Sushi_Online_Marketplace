import React from "react";
import { Select, Space,message, Upload } from "antd";
import { InboxOutlined } from '@ant-design/icons';
import { useParams } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import axios from "axios";
import "react-notifications/lib/notifications.css";
import "../../card.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

const { Dragger } = Upload;

const Add = async (id, name, description, category, price, qty) => {
  const result = await axios.post(
    "http://localhost:3001/api/product/addItem?vendorId=63d7f2b25d9ed68f50467557",
    {
      name: name,
      description: description,
    }
  );

  if (result.status == 200) {
    NotificationManager.success("Your Product Added Succesfully");
    setTimeout(() => {}, 20000);
    window.location = "";
  } else {
    NotificationManager.error("Your Product Added Unsuccesfully");
  }
};

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const Home = () => {
  const { id } = useParams();
  return (
    <div className="mt-20" style={{ marginLeft: "32rem" }}>
      <NotificationContainer></NotificationContainer>
      <Card style={{ width: "30rem" }}>
        <Card.Body>
          <Card.Title style={{ marginLeft: "11rem" }}>Add Items</Card.Title>

          <div className="my-6 mx-9">
            <div class="row">
              <div class="col">
                {/* <label className="mb-1">Item Name</label> */}
                <input
                  type="text"
                  id="name"
                  name="name"
                  style={{ marginBottom: 15 }}
                  placeholder="Product Name"
                  class="form-control"
                  required
                />

                {/* <label className="mb-1">Item Description</label> */}
                <textarea
                  type="textarea"
                  id="description"
                  name="description"
                  style={{ marginBottom: 15 }}
                  class="form-control"
                  placeholder="About the product"
                />
                <Space wrap>
                  <Select
                    placeholder="Category"
                    style={{
                      width: 375,
                      marginBottom: 15
                    }}
                    onChange={handleChange}
                    options={[
                      {
                        value: "jack",
                        label: "Jack",
                      },
                      {
                        value: "lucy",
                        label: "Lucy",
                      },
                      {
                        value: "Yiminghe",
                        label: "yiminghe",
                      },
                      {
                        value: "disabled",
                        label: "Disabled",
                        disabled: true,
                      },
                    ]}
                  />
                </Space>
                <input
                  type="text"
                  id="price"
                  name="price"
                  style={{ marginBottom: 15 }}
                  placeholder="Price"
                  class="form-control"
                  required
                />
                <input
                  type="text"
                  id="QTY"
                  name="QTY"
                  style={{ marginBottom: 15 }}
                  placeholder="Avalilable QTY"
                  class="form-control"
                  required
                />
              </div>
            </div>
          </div>

          <Button
            variant="primary"
            className="my-3 mx-9"
            style={{ marginLeft: "22rem" }}
            onClick={() => {
              const name = document.getElementById("name").value;
              const description = document.getElementById("description").value;

              if (name == "") {
                NotificationManager.warning(
                  "Please enter your product name of "
                );
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
