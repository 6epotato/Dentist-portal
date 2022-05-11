import React from 'react';

const service = ({ service, setTreatment }) => {
    const { name, slots } = service
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-secondary">{name}</h2>
                    <p>{slots.length !== 0 ? slots[0] : <span className='text-red-700'>Try Another Date</span>}</p>
                    <p>{slots.length} {
                        slots.length > 1 ? 'Spaces' : 'Space'
                    } available</p>
                    <div className="card-actions">
                        <label onClick={() => setTreatment(service)} disabled={slots.length == 0} for="booking-modal" class="btn btn-primary bg-gradient-to-r from-secondary to-priamry ">Book Appointment</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default service;