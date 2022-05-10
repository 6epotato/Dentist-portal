import React from 'react';
import ServcieCard from './ServiceCard/ServcieCard';
import cavity from '../../../assets/images/cavity.png'
import fluoride from '../../../assets/images/fluoride.png'
import whitening from '../../../assets/images/whitening.png'

const Service = () => {
    return (
        <div>
            <p className='mt-16 text-center text-primary font-bold uppercase'>Our services</p>
            <p className='text-xl text-center mb-12'>Services We Provide</p>


            <div className=' grid grid-cols-1 lg:grid-cols-3'>
                <ServcieCard title="Cavity Filling" description="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the" img={cavity}></ServcieCard>
                <ServcieCard title="Fluoride Treatment" description="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the" img={fluoride}></ServcieCard>
                <ServcieCard title="Teeth Whitening" description="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the" img={whitening}></ServcieCard>
            </div>
        </div>
    );
};

export default Service;