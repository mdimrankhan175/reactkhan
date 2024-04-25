import React from 'react';
import { Link } from 'react-router-dom';
import {HeaderContainer, Logo, Nav, NavLink} from './styledComponents';

const Header=()=>{
    return(
        <HeaderContainer>
            <Link to="/">
                <Logo src='https://res.cloudinary.com/dbelvmspz/image/upload/v1660558582/imran_logo_zh0c8u.jpg' alt='IMRAN KHAN' /> 
            </Link>
            <Nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/useState'>useState</NavLink>
                <NavLink to='/useEffect'>useEffect</NavLink>
            </Nav>       
        </HeaderContainer>
    )
}
export default Header;