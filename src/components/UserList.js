import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import {
    Button, ListGroup,
    ListGroupItem
} from "reactstrap";
import { GlobalContext } from "../context/GlobalState";
import Skeleton from './Skeleton';

export const UserList = () => {
    const { users, removeUser, loading } = useContext(GlobalContext);


    return (
        <ListGroup className="mt-4">
            {loading ? (
                <Skeleton />
            ) : (
                <>
                    {users.map(user => (
                        <ListGroupItem className="d-flex justify-content-between" key={user.id}>
                            <strong>{user.name}</strong>
                            <div className="ml-auto">
                                <Link to={`/edit/${user.id}`} color="warning" className="btn btn-warning me-1">Edit</Link>
                                <Button onClick={() => removeUser(user.id)} color="danger">Delete</Button>
                            </div>
                        </ListGroupItem>
                    ))}
                </>
            )}
        </ListGroup>
    )
}