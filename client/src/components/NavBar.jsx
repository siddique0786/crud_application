import React from 'react'
import { AppBar , Toolbar,styled} from "@mui/material";

import { NavLink } from 'react-router-dom';

 const Header = styled(AppBar)`
   background: #F875AA;
`
const Tabs = styled(NavLink)`
      font-size:20px;
      margin-right:20px;
      color: inherit;
      text-decoration:none;
`


export default function NavBar() {
  return (
    <Header position='static'>
        <Toolbar>
            <Tabs to='/'>Code for Interview</Tabs>
            <Tabs to='/all'>All User</Tabs>
            <Tabs to='/add'>Add User</Tabs>
        </Toolbar>
    </Header>
  )
}
