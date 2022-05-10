import React from 'react';

const InfoCard = ({ img, title, bgColor }) => {
    return (
        <div>
            <div class={`card card-side  shadow-xl px-4 ${bgColor}`}>
                <figure><img src={img} alt="Movie" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{title}</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;