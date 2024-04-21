import React, {useState, useEffect} from 'react';
// import axios from 'axios';
import {TableContainer, Heading, Table, TableHead, TableRow, TableHeaderCell, TableBody, TableCell} from './styledComponents'

const UseEffect=()=>{
    const [users, setUsers]=useState([]);
    const [isLoading, setIsLoading]=useState(true);
    const [error, setError]=useState(null);
    
    useEffect(()=>{
        const fetchData=async ()=>{
            setIsLoading(true);
            try{
                // const response=await axios.get("https://gorest.co.in/public-api/users");
                // setUsers(response.data.data)
                // setIsLoading(false)
                const response=await fetch("https://gorest.co.in/public-api/users");
                if(!response.ok){
                    throw new Error('Failed to fetch data');
                }
                const data=await response.json();
                setUsers(data.data);
                setIsLoading(false);
            }catch(error){
                setError(error.message);
                setIsLoading(false)
            }
        }
        fetchData()
    }, []);

    if(isLoading){
        return <div>Loading...</div>
    }

    if(error){
        return <div>Error: {error}</div>
    }
    
    return(
        <TableContainer>
            <Heading>User Table</Heading>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableHeaderCell>ID</TableHeaderCell>
                        <TableHeaderCell>NAME</TableHeaderCell>
                        <TableHeaderCell>EMAIL</TableHeaderCell>
                        <TableHeaderCell>GENDER</TableHeaderCell>
                        <TableHeaderCell>STATUS</TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map(user=>(
                        <TableRow key={user.id}>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.gender}</TableCell>
                            <TableCell>{user.status}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default UseEffect