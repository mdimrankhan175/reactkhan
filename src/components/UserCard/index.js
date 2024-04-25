import React from 'react';
import {CardContainer, CardHeading} from './styledComonents'
const UserCard=({user})=>{
    return (
        <CardContainer className='user-card'>
            <CardHeading>{user.name}</CardHeading>
            <p>{user.email}</p>
        </CardContainer>
    )
}

export default UserCard;