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

                            <input type="text" placeholder="email" className="input input-bordered w-96" />
                        </div>
                        <div className="form-control mb-3">

                            <input type="text" placeholder="Subject" className="input input-bordered w-96" />
                        </div>
                        <div className=" w-96 md:w-full  mb-2 mt-2">
                            <textarea className="bg-gray-100 rounded border-lg border-gray-400 leading-normal  w-96 h-20 py-2 px-3  placeholder-gray-500 focus:outline-none focus:bg-white" name="body" placeholder='Your massage' required></textarea>
                        </div>
                        <div className='grid justify-items-center'>
                            <button className="btn btn-primary uppercase text-white text-bold bg-gradient-to-r from-secondary to-priamry w-20">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;