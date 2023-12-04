import React from 'react';
import { useState } from 'react';

import { FormControl, FormGroup, Input, InputLabel, Typography, styled, Button } from '@mui/material';

import { addUser } from '../service/api';
import {useNavigate} from 'react-router-dom';

const Container = styled(FormGroup)`
    width:50%;
    margin:5% auto 0 auto;
    & > div {
        margin-top :30px;
    }
    
`
const defaultValue = {
    name: "",
    username: "",
    email: "",
    phone: ""
}

export default function AddUser() {

    const [user, setUser] = useState(defaultValue);

    const navigate = useNavigate();

    const onValueChange = (e) => {
        // console.log(e.target.name, e.target.value)
        setUser({ ...user, [e.target.name]: e.target.value })
        // console.log(user)
    }

    const addUserDetails = async () => {
        await addUser(user);
        navigate('/all');
    }

    return (
        <Container>
            <Typography variant='h4'>Add User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="name" />
            </FormControl>
            <FormControl>
                <InputLabel>UserName</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='username' />
            </FormControl>
            <FormControl>
                <InputLabel>Email Id</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' />
            </FormControl>
            <FormControl>
                <InputLabel>Phone Number</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' />
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={() => addUserDetails()}>Add User</Button>
            </FormControl>
        </Container>
    )
}
