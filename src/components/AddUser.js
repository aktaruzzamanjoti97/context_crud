import React, { useContext, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import {
  Button, Form,
  FormGroup, Input, Label
} from "reactstrap";
import { v4 as uuid } from "uuid";
import { GlobalContext } from "../context/GlobalState";

export const AddUser = () => {
  const [name, setName] = useState('');
  const { addUser } = useContext(GlobalContext);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: uuid(),
      name
    }
    addUser(newUser);
    navigate("/");
    console.log(addUser);
  }

  const onChange = (e) => {
    setName(e.target.value);
  }

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input type="text" value={name} onChange={onChange} name="name" placeholder="Enter user" required></Input>
      </FormGroup>
      <Button type="submit">Submit</Button>
      <Link to="/" className="btn btn-danger ms-2">Cancel</Link>
    </Form>
  )
}