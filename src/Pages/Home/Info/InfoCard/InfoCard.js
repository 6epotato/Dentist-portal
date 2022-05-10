import React from 'react';

const InfoCard = ({ img, title, bgColor }) => {
    return (
        <div>
            <div className={`card card-side  shadow-xl px-4 ${bgColor}`}>
                <figure><img src={img} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-white">{title}</h2>
                    <p className='text-white'>Click the button to watch on Jetflix app.</p>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;