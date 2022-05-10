import React from 'react';
import Banner from './Banner/Banner';
import ContactForm from './ContactForm/ContactForm';
import DentalCare from './DentalCare/DentalCare';
import Info from './Info/Info';
import MakeApointment from './MakeApointment/MakeApointment';
import Service from './Service/Service';
import Testominial from './Testomonial/Testominial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Service></Service>
            <DentalCare></DentalCare>
            <MakeApointment></MakeApointment>
            <Testominial></Testominial>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;