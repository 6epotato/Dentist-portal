import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Service from '../Apointment/service'
import BookingModal from './BookingModal';

const AvailableApointment = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <p className='text-center text-secondary mb-5'>Available Apointments on{format(date, 'PP')} </p>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service
                        key={service._id} service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {treatment && <BookingModal treatement={treatment}></BookingModal>}
        </div>
    );
};

export default AvailableApointment;