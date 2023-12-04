import React from 'react';
import { useState , useEffect } from 'react';

import { FormControl, FormGroup, Input, InputLabel, Typography, styled, Button } from '@mui/material';

import { editUser , getsUser } from '../service/api';
import {useNavigate , useParams} from 'react-router-dom';

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

export default function EditUser() {

    const [user, setUser] = useState(defaultValue);

    const navigate = useNavigate();
    const {id} = useParams()

    useEffect(() =>{
        loadUserDetails();
    },[])

    const loadUserDetails = async() => {
        const response = await getsUser(id);
        setUser(response.data);
    }

    const onValueChange = (e) => {
        // console.log(e.target.name, e.target.value)
        setUser({ ...user, [e.target.name]: e.target.value })
        // console.log(user)
    }

    const editUserDetails = async () => {
        await editUser(user, id);
        navigate('/all');
    }

    return (
        <Container>
            <Typography variant='h4'>Edit User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="name" value={user.name} />
            </FormControl>
            <FormControl>
                <InputLabel>UserName</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='username' value={user.username}/>
            </FormControl>
            <FormControl>
                <InputLabel>Email Id</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={user.email}/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone Number</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' value={user.phone} />
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={() => editUserDetails()}>Edit User</Button>
            </FormControl>
        </Container>
    )
}
