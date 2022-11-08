import React from 'react';

const DoubleRoom = ({doubleRoom}) => {
    return (
        <div className='col-sm-12 col-md-6 col-lg-4'>
            <div class="card">
                <img style={{height:'300px'}} src={doubleRoom.img} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <p class="card-text">{doubleRoom.description}</p>
                        <a href="#" class="btn btn-primary">Book Now!</a>
                    </div>
            </div>
        </div>
    );
};

export default DoubleRoom;