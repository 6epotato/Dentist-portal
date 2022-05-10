import React from 'react';
import apointment from '../../../assets/images/appointment.png'

const ContactForm = () => {
    return (
        <div className='my-20'>
            <div style={{ background: `url(${apointment})` }} className='grid justify-items-center'>
                <p className='mt-16 text-center text-primary font-bold uppercase'>Contact Us</p>
                <p className='text-xl text-center mb-12 text-white'>Stay connected with us</p>
                <div>
                    <div className="form-control mb-6">
                        <div className="form-control mb-3">

                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control mb-3">

                            <input type="text" placeholder="Subject" className="input input-bordered" />
                        </div>
                        <div className="mb-5 pt-0">
                            <input type="text" placeholder="Your Massage" className="px-3 py-4 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full" />
                        </div>
                        <button className="btn btn-primary uppercase text-white text-bold bg-gradient-to-r from-secondary to-priamry">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;