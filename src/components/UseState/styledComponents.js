import {styled, createGlobalStyle} from 'styled-components';

export const GlobalStyle=createGlobalStyle`
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
export const CounterContainer=styled.div`
display:felx;
flex-direction:column;
justify-content: center;
align-items:center;
background-color:grey;
height:300px;
width:500px;
border-radius:10px;
text-align: center;
`
export const CounterText=styled.p`
font-family:Roboto;
font-size:32px;
color:#fff;
`;

export const CounterValue=styled.p`
font-weight:500;
font-size: 34px;
color:lightpink;
`

export const CounterButton=styled.button`
font-size: 1em;
  padding: 0.5em 1em;
  margin-top: 1em;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  
  &:hover {
    background-color: #0056b3;
  }
`;

