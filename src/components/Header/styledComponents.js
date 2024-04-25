import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer=styled.header`
display:flex;
justify-content:space-between;
align-items:center;
padding: 20px;
background-color: #333;
color: #fff;
`

export const Logo=styled.img`
width:35px;
border-radius:100px;
`
export const Nav=styled.nav`
display:flex;

`

export const NavLink=styled(Link)`
    margin-right: 20px;
    color: #fff;
    text-decoration: none;
`