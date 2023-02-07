import React from "react";
import { Select, Space, message,Input } from "antd";
import {
  UploadOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
} from "@ant-design/icons";
import { useParams } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import "react-notifications/lib/notifications.css";

import "../../card.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

const Add = async (fname, lname,  role, email, password,description) => {
  const result = await axios.post("http://localhost:3001/api/user/register", {
    fname: fname,
    lname: lname,
    role: role,
    email: email,
    password:password,
    description: description,
  });
  console.log(email);

  if (result.status == 200) {
    NotificationManager.success("Your Product Added Succesfully");
    setTimeout(() => {}, 20000);
    window.location = "http://localhost:3000/logIn";
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
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const { id } = useParams();
  return (
    <div className="mt-20" style={{ marginLeft: "32rem" }}>
      <NotificationContainer></NotificationContainer>
      <Card style={{ width: "30rem" }}>
        <Card.Body>
          <Card.Title style={{ marginLeft: "11rem" }}>Sign Up</Card.Title>
          <div className="my-6 mx-9">
            <div class="row">
              <div class="col">
                {/* <label className="mb-1">Item Name</label> */}
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  style={{ marginBottom: 15 }}
                  placeholder="First Name"
                  class="form-control"
                  required
                />
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  style={{ marginBottom: 15 }}
                  placeholder="Last Name"
                  class="form-control"
                  required
                />
                <input
                  type="text"
                  id="role"
                  name="role"
                  style={{ marginBottom: 15 }}
                  placeholder="Role"
                  class="form-control"
                  required
                />
                {/* <Space wrap>
                  <Select
                    id="role"
                    name="role"
                    placeholder="Role"
                    style={{
                      width: 375,
                      marginBottom: 15,
                    }}
                    onChange={handleChange}
                    options={[
                      {
                        value: "Vendor",
                        label: "Vendor",
                      },
                      {
                        value: "Buyer",
                        label: "Buyer",
                      },
                    ]}
                  />
                </Space> */}
                <input
                  type="text"
                  id="email"
                  name="email"
                  style={{ marginBottom: 15 }}
                  placeholder="Email"
                  class="form-control"
                  required
                />

                {/* <Space direction="vertical"> */}
                  <Input.Password
                    id="password"
                    name="password"
                    style={{ marginBottom: 15, width: 375 }}
                    placeholder="input password"
                    iconRender={(visible) =>
                      visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                  />
                {/* </Space> */}
                <textarea
                  type="textarea"
                  id="description"
                  name="description"
                  style={{ marginBottom: 15 }}
                  class="form-control"
                  placeholder="About You"
                />
              </div>
            </div>
          </div>

          <Button
            variant="primary"
            style={{ marginLeft: "20rem" }}
            onClick={() => {
              const fname = document.getElementById("fname").value;
              const lname = document.getElementById("lname").value;
              const role = document.getElementById("role").value;
              const email = document.getElementById("email").value;
                const password = document.getElementById("password").value;
              const description = document.getElementById("description").value;
              console.log(fname);
              console.log(lname);
              console.log(email);
              console.log(role);
              console.log(password);
              console.log(description);

              if (fname == "") {
                NotificationManager.warning(
                  "Please enter your product name of "
                );
              } else {
                Add(fname, lname, role, email,password,description);
              }
            }}
          >
            Sign Up
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Home;
