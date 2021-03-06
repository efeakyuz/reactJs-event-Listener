import alertify from "alertifyjs";
import React, { Component } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

export default class FormDemo2 extends Component {
  state = { email: "", password: "", city: "", description: "" };

  handlerChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  handlerSubmit = (event) => {
    event.preventDefault();
    alertify.success(this.state.email + " added to db");
    alertify.success(this.state.password + " added to db");
    alertify.success(this.state.description + " added to db");
    alertify.success(this.state.city + " added to db");
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handlerSubmit}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
              onChange={this.handlerChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              onChange={this.handlerChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input
              type="textarea"
              name="description"
              id="description"
              placeholder="Enter Description"
              onChange={this.handlerChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="city">City</Label>
            <Input
              type="select"
              name="city"
              id="city"
              onChange={this.handlerChange}>
                  <option>Ankara</option>
                  <option>İstanbul</option>
                  <option>İzmir</option>
                  <option>Muğla</option>
            </Input>
          </FormGroup>
          <Button type="submit">Save</Button>
        </Form>
      </div>
    );
  }
}
