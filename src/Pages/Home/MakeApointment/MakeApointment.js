import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import apointment from '../../../assets/images/appointment.png'

const MakeApointment = () => {
    return (
        <section style={{ background: `url(${apointment})` }}
            className='flex justify-center items-center mt-12'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-150px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <p className='font-bold text-xl text-primary'>Appointment</p>
                <p className=' text-3xl text-white'>Make an appointment Today</p>
                <p className='text-white' >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <button className="btn my-2 btn-primary uppercase text-white text-bold bg-gradient-to-r from-secondary to-priamry">Get Started</button>
            </div>
        </section>
    );
};

export default MakeApointment;