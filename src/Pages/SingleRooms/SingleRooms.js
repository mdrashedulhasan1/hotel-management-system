import React from 'react';
import room1 from '../../Images/single-room/Single-Room-01.jpg'
import room2 from '../../Images/single-room/Single-Room-02.jpg'
import room3 from '../../Images/single-room/Single-Room-03.jpg'
import room4 from '../../Images/single-room/Single-Room-04.jpg'
import room5 from '../../Images/single-room/Single-Room-05.jpg'
import room6 from '../../Images/single-room/Single-Room-06.jpg'
import SingleRoom from '../SingleRoom/SingleRoom';
import './SingleRooms.css';
const SingleRooms = () => {
    const singleRooms = [
        {
            _id: 1,
            img: room1,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, dolores!'
        },
        {
            _id: 2,
            img: room2,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, dolores!'
        },
        {
            _id: 3,
            img: room3,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, dolores!'
        },
        {
            _id: 4,
            img: room4,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, dolores!'
        },
        {
            _id: 5,
            img: room5,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, dolores!'
        },
        {
            _id: 6,
            img: room6,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, dolores!'
        },
    ]
    return (
        <div>
            <h1>Single Room</h1>
            <div className='single-rooms-container'>
                {
                    singleRooms.map(room => <SingleRoom key={room._id} room={room}></SingleRoom>)
                }
            </div>
        </div>
    );
};

export default SingleRooms;