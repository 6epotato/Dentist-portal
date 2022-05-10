import React from 'react';

const Review = ({ review }) => {
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
                <div className="card-body">
                    <p>{review.description}</p>
                    <div className=" flex  items-center mt-4">
                        <div className="avatar pr-4 ">
                            <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={review.img} />
                            </div>

                        </div>
                        <div>
                            <p className='text-xl font-bold'> {review.name}</p>
                            <p className='font-bold'>{review.address}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;