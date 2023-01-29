import React from "react";
import { Button, Badge, Card, button } from "react-bootstrap";
import { Form, Label, FormGroup, Input } from "reactstrap";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "../../card.css";

const Add = async () => {
  const [inTime, setInTime] = useState("");
  const [outTime, setOutTime] = useState("");
  const [date, setDate] = useState("");

  if (inTime === "") {
    setInTime(new Date().toLocaleTimeString());
    setDate(new Date().toLocaleDateString());
  } else {
    setOutTime(new Date().toLocaleTimeString());
    const data = {
      inTime: inTime,
      outTime: new Date().toLocaleTimeString(),
      date: date,
    };
    try {
      // const res = await axios.post(
      //   `http://localhost:5000/api/employee/attendence/${email}`,
      //   data
      // );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
};

const Home = () => {
  return (
    <div className="mt-20 ">
      <Card style={{ width: "30rem" }}>
        <Card.Body className="">
          <Card.Title>Add Items</Card.Title>
          <div className="my-6 mx-9">
            <div class="row">
              <div class="col">
                <label className="mb-1">Item Name</label>
                <input
                  type="text"
                  //   onChange={(e) => setFirstName(e.target.value)}
                  //   defaultValue ={firstName}
                  class="form-control"
                />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <label className="mb-1">Item Description</label>
                <input
                  type="text"
                  //   onChange={(e) => setLastName(e.target.value)}
                  //   defaultValue ={lastName}
                  class="form-control"
                />
              </div>
            </div>
          </div>

          <Button variant="primary" className="my-3 mx-9">
            ADD
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Home;
