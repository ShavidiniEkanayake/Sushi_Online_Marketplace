import React from "react";
import { Input } from "antd";
import { Button, Card } from "react-bootstrap";
import axios from "axios";
import "react-notifications/lib/notifications.css";
import {
    EyeTwoTone,
    EyeInvisibleOutlined,
  } from "@ant-design/icons";

import "../../card.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

const LogInDetails = async (email, password) => {
    const result = await axios.post("", {
      email: email,
      password:password,
    });
    console.log(email);
  
    if (result.status == 200) {
      NotificationManager.success("Your LogIn Succesfully");
      setTimeout(() => {}, 20000);
      window.location = "";
    } else {
      NotificationManager.error("Your LogIn Unsuccesfully");
    }
  };

const LogIn = () => {
return(
    <div className="mt-20" style={{ marginLeft: "32rem" }}>
      <NotificationContainer></NotificationContainer>
      <Card style={{ width: "30rem" }}>
        <Card.Body>
          <Card.Title style={{ marginLeft: "11rem" }}>LogIn</Card.Title>
          <div className="my-6 mx-9">
            <div class="row">
              <div class="col">
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
                
              </div>
            </div>
          </div>

          <Button
            variant="primary"
            style={{ marginLeft: "20rem" }}
            onClick={() => {
          
              const email = document.getElementById("email").value;
                const password = document.getElementById("password").value;
              
              console.log(email);
           
              console.log(password);
              
              if (email == "") {
                NotificationManager.warning(
                  "Please enter your email"
                );
              } else {
                LogInDetails( email,password);
              }
            }}
          >
           LogIn
          </Button>
        </Card.Body>
      </Card>
    </div>
)
}

export default LogIn;