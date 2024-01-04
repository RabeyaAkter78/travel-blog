import React from 'react';
import SectionTITLE from '../../Shared/SectionTitle/SectionTITLE.JSX';

const Reviews = () => {
    return (
        <div className='mb-8 '>
            <SectionTITLE heading={" Customer Experiences"}>

            </SectionTITLE>
            <div className="carousel w-full ">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="hero bg-base-200 ">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                            <div>
                                <h1 className="text-5xl font-bold text-orange-500">"Unforgettable Adventure!"</h1>
                                <p className="py-6">I recently booked a vacation package through this travel agency, and I couldn't be happier with the entire experience. The booking process was straightforward, and the variety of options for flights and accommodations made it easy to tailor the trip to my preferences.

                                    The personalized travel itinerary provided by the team was fantastic, including all the key attractions and activities I wanted to experience. The attention to detail was evident, and it made my journey incredibly enjoyable.</p>

                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="hero bg-base-200 ">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                            <div>
                                <h1 className="text-5xl font-bold text-orange-500">"A Dream Vacation Come True!"</h1>
                                <p className="py-6">What truly set this agency apart was their commitment to customer satisfaction. When we encountered a minor hiccup during our trip, the customer service team was quick to respond and resolve the issue. Their dedication to ensuring a smooth and enjoyable travel experience did not go unnoticed.

                                    In these uncertain times, the agency's communication about safety protocols provided an added layer of reassurance. It's evident that they prioritize the well-being of their customers.</p>

                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className="hero bg-base-200 ">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                            <div>
                                <h1 className="text-5xl font-bold text-orange-500">"Exceptional Service and Unforgettable Memories"</h1>
                                <p className="py-6">I recently used the services of this travel agency for a family vacation, and it was an absolute pleasure from start to finish. The staff demonstrated a level of professionalism and expertise that made the entire planning process a breeze.

                                    The range of travel options, from flights to accommodations, was impressive. The team took the time to understand our preferences and crafted a customized itinerary that catered to our interests. The result was a trip that exceeded our expectations.</p>

                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <div className="hero bg-base-200 ">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                            <div>
                                <h1 className="text-5xl font-bold text-orange-500">"Seamless Travel Experience"</h1>
                                <p className="py-6">I recently planned a trip through an online travel agency, and the entire experience was outstanding. From the booking process to the actual journey, everything was well-coordinated and stress-free.

                                    The website was user-friendly, allowing me to easily browse through various travel options. The pricing was transparent, with no hidden fees, making it straightforward to plan my budget. The ability to customize my itinerary online was a huge plus.

                                    The suggested travel itinerary was well-crafted, including both popular attractions and off-the-beaten-path gems. It was evident that the team behind the scenes had a deep knowledge of the destinations. The accommodations recommended were comfortable and conveniently located, enhancing my overall experience.</p>

                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Reviews;