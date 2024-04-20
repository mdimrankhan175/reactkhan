import React from 'react';
import { Link } from 'react-router-dom';
import {HeaderContainer, Logo, Nav, NavLink} from './styledComponents';

const Header=()=>{
    return(
        <HeaderContainer>
            <Link to="/">
                <Logo src='' alt='logo' /> 
            </Link>
            <Nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/useState'>useState</NavLink>
            </Nav>       
        </HeaderContainer>
    )
}
export default Header;