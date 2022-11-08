import React from 'react';
import room1 from '../../Images/double-room/Double-Room-01.jpg'
import room2 from '../../Images/double-room/Double-Room-02.jpg'
import room3 from '../../Images/double-room/Double-Room-03.jpg'
import room4 from '../../Images/double-room/Double-Room-04.jpg'
import room5 from '../../Images/double-room/Double-Room-05.jpg'
import room6 from '../../Images/double-room/Double-Room-06.jpg'
import DoubleRoom from '../DoubleRoom/DoubleRoom';
const DoubleRooms = () => {
    const doubleRooms = [
        {
            _id: 1,
            img: room1,
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, corporis.',
        },
        {
            _id: 2,
            img: room2,
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, corporis.',
        },
        {
            _id: 3,
            img: room3,
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, corporis.',
        },
        {
            _id: 4,
            img: room4,
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, corporis.',
        },
        {
            _id: 5,
            img: room5,
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, corporis.',
        },
        {
            _id: 6,
            img: room6,
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, corporis.',
        },
    ]
    return (
        <div>
            <h1>Double Rooms</h1>
            <div className='row g-3'>
                {
                    doubleRooms.map(doubleRoom => <DoubleRoom key={doubleRoom._id} doubleRoom={doubleRoom}></DoubleRoom>)
                }
            </div>
        </div>
    );
};

export default DoubleRooms;