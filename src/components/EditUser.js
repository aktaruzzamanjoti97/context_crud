import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { GlobalContext } from '../context/GlobalState';

export const EditUser = (props) => {
    const { editUser, users } = useContext(GlobalContext);
    const [selectedUser, setSelectedUser] = useState({
        id: '',
        name: ''
    })
    let navigate = useNavigate();
    const params = useParams();
    const currentUserId = params.id;
    console.log(typeof(currentUserId))

    useEffect(() => {
        const userId = currentUserId;
        const selectedUser = users.find(user => user.id === userId);
        setSelectedUser(selectedUser);
    }, [currentUserId, users])

    const onChange = (e) => {
        setSelectedUser({ ...selectedUser, id: currentUserId, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        console.log('clicked')
        e.preventDefault();
        editUser(selectedUser);
        navigate('/');
        console.log(editUser);
    }




    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label>Name</Label>
                <Input type="text" value={selectedUser?.name} onChange={onChange} name="name" placeholder="Enter user" required></Input>
            </FormGroup>
            <Button type="submit">Edit Name</Button>
            <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
        </Form>
    );
};
