import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';

const AvailableApointment = ({ date }) => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <p className='text-center text-secondary'>Available Apointments on{format(date, 'PP')} </p>
        </div>
    );
};

export default AvailableApointment;