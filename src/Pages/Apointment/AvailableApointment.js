import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Service from '../Apointment/service'
import BookingModal from './BookingModal';
import Loading from '../Shared/Loading.js'

const AvailableApointment = ({ date }) => {
    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    const formatedDate = format(date, 'PP')

    // using react query 
    const { data: services, isLoading, refetch } = useQuery(['available', formatedDate], () => fetch(`https://gentle-everglades-35240.herokuapp.com/available?date=${formatedDate}`)
        .then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }
    // useEffect(() => {
    //     fetch(`https://gentle-everglades-35240.herokuapp.com/available?date=${formatedDate}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [formatedDate])
    return (
        <div>
            <p className='text-center text-secondary mb-5'>Available Apointments on{format(date, 'PP')} </p>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    services?.map(service => <Service
                        key={service._id} service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {treatment && <BookingModal date={date} treatement={treatment} setTreatment={setTreatment}
                refetch={refetch}
            ></BookingModal>}
        </div>
    );
};

export default AvailableApointment;