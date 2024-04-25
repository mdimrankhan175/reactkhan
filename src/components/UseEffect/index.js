import React, {useState, useEffect} from 'react';
import UserCard from '../UserCard';
import { TableContainer, Heading, Table,TableHead, TableBody,TableRow, TableHeaderCell, TableCell } from './styledComponents';

const UseEffect=()=>{
    const [users, setUsers]=useState([]);
    const [isLoading, setIsLoading]=useState(true);
    const [error, setError]=useState(null);

    useEffect(()=>{
        const fetchData=async ()=>{
            setIsLoading(true);
            try{
                const response=await fetch("https://gorest.co.in/public-api/users");
                if(!response.ok){
                    throw new Error("Fetching data failed")
                }
                const data=await response.json();
                setUsers(data.data)
                setIsLoading(false)

            }catch(error){
                setError(error.message)
                setIsLoading(false)                                
            }
        }
        fetchData();
    },[]);

    if(isLoading){
        return <div>Loading...</div>
    }
    if(error){
        return <div>Error: {error}</div>
    }    

    return(
        <TableContainer>
            <Heading>Users Table</Heading>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableHeaderCell>ID</TableHeaderCell>
                        <TableHeaderCell>Name</TableHeaderCell>
                        <TableHeaderCell>Email</TableHeaderCell>
                        <TableHeaderCell>Status</TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map(user => (
                        <TableRow key={user.id}>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.name}</TableCell> 
                            <TableCell>{user.email}</TableCell> 
                            <TableCell>{user.status}</TableCell>                            
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
export default UseEffect;