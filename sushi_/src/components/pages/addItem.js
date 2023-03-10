import React from "react";
import { Select, Space, message, Upload } from "antd";
import { UploadOutlined } from '@ant-design/icons';
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

const Add = async (name, description, price, avalilableQTY) => {
  const result = await axios.post(
    "http://localhost:3001/api/product/addProduct",
    {
      name: name,
      description: description,
      price:price,
      avalilableQTY:avalilableQTY,
      
    }
    
  );
  console.log(name);
              

  if (result.status == 200) {
    NotificationManager.success("Your Product Added Succesfully");
    setTimeout(() => {}, 200000);
    window.location = "http://localhost:3000/";
  } else {
    NotificationManager.error("Your Product Added Unsuccesfully");
  }
};

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const props = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
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
                {/* <Space wrap>
                  <Select
                    placeholder="category"
                    style={{
                      width: 375,
                      marginBottom: 15,
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
                </Space> */}
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
                  id="avalilableQTY"
                  name="avalilableQTY"
                  style={{ marginBottom: 15 }}
                  placeholder="Avalilable QTY"
                  class="form-control"
                  required
                />
                {/* <Upload {...props} id="image">
                  <Button icon={<UploadOutlined />}>Upload product image</Button>
                </Upload> */}
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
              // const category = document.getElementById("category").value;
              const price = document.getElementById("price").value;
              const avalilableQTY = document.getElementById("avalilableQTY").value;
              // const image = document.getElementById("image").value;
              

              if (name == "") {
                NotificationManager.warning(
                  "Please enter your product name of "
                );
              } else {
                Add( name, description,price,avalilableQTY);
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
