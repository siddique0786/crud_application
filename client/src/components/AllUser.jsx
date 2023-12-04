import React from 'react';
import { useEffect, useState } from 'react';

import { Table, TableHead, TableCell, TableRow, TableBody, styled, Button } from '@mui/material';
import { getUser , deleteUser} from '../service/api';
import { Link } from 'react-router-dom';

const StyledTable = styled(Table)`
  width:90%;
  margin: 50px auto 0 auto;
`

const THead = styled(TableRow)`
   background: #39A7FF;
   & > th{
    color : #fff;
    font-size:23px;
   }
`;

const TBody = styled(TableRow)`
  & > td{
    font-size:20px;
  }
`


export default function AllUser() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    let response = await getUser();
    setUsers(response.data);
  }

  const deleteUserDetails = async(id) =>{
    await deleteUser(id);
    getAllUsers();
  }

  return (
    <StyledTable>
      <TableHead>
        <THead>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone Number</TableCell>
          <TableCell></TableCell>
        </THead>
      </TableHead>
      <TableBody>
        {
          users.map(user => (
            <TBody key={user._id}>
              <TableCell>{user._id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>
                <Button variant='contained' style={{marginRight:10}} component={Link} to={`/edit/${user._id}`}>Edit</Button>
                <Button variant='contained' color='secondary' onClick={() => deleteUserDetails(user._id)}>Delete</Button>
              </TableCell>
            </TBody>
          ))
        }
      </TableBody>
    </StyledTable>
  )
}
