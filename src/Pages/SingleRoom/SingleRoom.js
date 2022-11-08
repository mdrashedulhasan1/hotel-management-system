import React from 'react';
import './SingleRoom.css';
const SingleRoom = ({room}) => {
    return (
        <div className='single-room-container'>
            <img className='w-100' style={{height:'300px'}} src={room.img} alt="" />
            <p>{room.description}</p>
            <button>Book Now!</button>
        </div>
    );
};

export default SingleRoom;