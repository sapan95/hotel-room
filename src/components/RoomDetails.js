import React, {useState} from 'react'
import classes from './RoomDetails.module.css'
function RoomDetails() {
    const [rooomCount, setRoomCount] = useState(1);
    const [adultCount, setAdultCount] = useState(1);
    const [childrenCount, setChildrenCount] = useState(0);

    const roomDecreaseHandler = () =>{
        setRoomCount((prevState) => prevState > 1 ? --prevState : prevState);
        
    }

    const roomIncreaseHandler = () =>{
        setRoomCount((prevState) => prevState < 5 ? ++prevState : prevState);
    }

    const adultsDecreaseHandler = () =>{
        setAdultCount((prevState) => prevState + childrenCount > rooomCount ? --prevState : prevState);
    }

    const adultsIncreaseHandler = () =>{
        setAdultCount((prevState) => prevState + childrenCount < rooomCount * 4 ? ++prevState : prevState);
    }

    const childrenDecreaseHandler = () =>{
        setChildrenCount((prevState) => prevState >= 1 ? --prevState : prevState);
    }

    const childrenIncreaseHandler = () =>{
        setChildrenCount((prevState) => prevState + (rooomCount > adultCount ? rooomCount : adultCount) < rooomCount * 4 ? ++prevState : prevState);
    }

    return (
        <div className = {classes.container}>
            <div className = {classes.item}>
                <span className = {classes.left}>ROOMS</span>
                <span className = {classes.right}>
                    <button disabled = {rooomCount <= 1} onClick = {roomDecreaseHandler}>-</button>
                    <span>{rooomCount}</span>
                    <button disabled = {rooomCount >= 5} onClick = {roomIncreaseHandler}>+</button>
                </span>
            </div>
            <div className = {classes.item}>
                <span className = {classes.left}>ADULTS</span>
                <span className = {classes.right}>
                <button disabled = {adultCount <= rooomCount} onClick = {adultsDecreaseHandler}>-</button>
                <span>{adultCount}</span>
                <button disabled = {adultCount + childrenCount >= rooomCount * 4} onClick = {adultsIncreaseHandler}>+</button>
                </span>
            </div>
            <div className = {classes.item}>
                <span className = {classes.left}>CHILDREN</span>
                <span className = {classes.right}>
                    <button disabled = {childrenCount <= 0} onClick = {childrenDecreaseHandler}>-</button>
                    <span>{childrenCount}</span>
                    <button disabled = {(rooomCount > adultCount ? rooomCount : adultCount) + childrenCount >= rooomCount * 4} 
                     onClick = {childrenIncreaseHandler}>+</button>
                </span>
            </div>
        </div>
    )
}

export default RoomDetails
