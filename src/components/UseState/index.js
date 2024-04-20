import React, { useState } from 'react';
import {GlobalStyle, CounterContainer, CounterText,CounterValue, CounterButton } from './styledComponents';

const UseState=()=>{
    const [count, setCount]=useState(0);
    const [isCounting, setIsCounting]=useState(false);
    const [intervalId, setIntervalId]=useState(null);

    const toggleCounter=()=>{
        if(!isCounting){
            const id=setInterval(() => {
                setCount(prevCount=>prevCount+1);
            }, 1000);
            setIntervalId(id)
        }else{
            clearInterval(intervalId)
            setCount(0)
        }
        setIsCounting(prevIsCounting=>!prevIsCounting)
    }

    return(
        <>
            <GlobalStyle />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor:'lightblue' }}>
            <CounterContainer>               
                    <CounterText>Welcome to Counter App </CounterText>
                    <CounterValue>{count}</CounterValue>
                    <CounterButton onClick={toggleCounter}>{isCounting?'Stop':'Start'}</CounterButton>
            </CounterContainer>
            </div>
        </>
    )
}

export default UseState;