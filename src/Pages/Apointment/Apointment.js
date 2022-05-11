import React, { useState } from 'react';
import ApointmentBanner from './ApointmentBanner';
import AvailableApointment from './AvailableApointment';

const Apointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <ApointmentBanner date={date} setDate={setDate}></ApointmentBanner>
            <AvailableApointment date={date}></AvailableApointment>
        </div>
    );
};

export default Apointment;