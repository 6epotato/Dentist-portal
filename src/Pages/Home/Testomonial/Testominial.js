import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import Review from './Review/Review';

const Testominial = () => {
    const reviews = [
        {
            _id: 1,
            name: "Winson Herry",
            address: "california",
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people1


        },
        {
            _id: 2,
            name: "Winson Herry",
            address: "california",
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people2


        },
        {
            _id: 3,
            name: "Winson Herry",
            address: "california",
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people3


        },
    ]
    return (
        <section className='my-12 px-12'>
            <div className='flex justify-between'>
                <div >
                    <p className='font-bold text-xl text-primary'>Testimonial</p>
                    <p className=' text-3xl '>Make an appointment Today</p>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testominial;