import Axios from 'axios';
import React, { createContext, useEffect, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
    loading: true,
    error: '',
    users: []
}

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);


    useEffect(() => {
        Axios({ url: 'https://jsonplaceholder.typicode.com/users' })
            .then((response) => {
                dispatch({ type: 'SUCCESS', result: response.data });
            })
            .catch(() => {
                dispatch({ type: 'ERROR' });
            });
    }, []);

    // Actions
    const removeUser = (id) => {
        dispatch({
            type: 'REMOVE_USER',
            payload: id
        })
    }

    const addUser = (user) => {
        dispatch({
            type: 'ADD_USER',
            payload: user
        })
    }

    const editUser = (user) => {
        dispatch({
            type: 'EDIT_USER',
            payload: user
        })
    }

    return (
        <GlobalContext.Provider value={{
            users: state.users,
            loading: state.loading,
            removeUser,
            addUser,
            editUser
        }}>
            {children}
        </GlobalContext.Provider>
    )
}