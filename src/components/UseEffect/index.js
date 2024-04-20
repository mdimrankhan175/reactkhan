import React, {useState, useEffect} from 'react';
// import axios from 'axios';

const UseEffect=()=>{
    const [users, setUsers]=useState([]);
    const [isLoading, setIsLoading]=useState(true);
    const [error, setError]=useState(null);
    
    useEffect(()=>{
        const fetchData = async () => {
            setIsLoading(true);
            try{
            //  const response=await axios.get("https://gorest.co.in/public-api/users");
            //  setUsers(response.data.data);
            //  setIsLoading(false)
                const response=await fetch("https://gorest.co.in/public-api/users");    
                if (!response.ok) {
                    throw new Error('Failed to fetch Data');
                }
                const data = await response.json();
                setUsers(data.data);
                setIsLoading(false)
            }catch (error){
                setError(error.message);
                setIsLoading(false);
            }
        };
        fetchData();
    },[]);

    if (isLoading){
        return <div>Loading...</div>
    }
    
    if (error){
        return <div>Error: {error}</div>
    }

    return(
        <div>
            <h1>Users Table</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user=>(
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}

export default UseEffect