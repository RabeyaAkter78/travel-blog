import React from 'react';
import SectionTITLE from '../../Shared/SectionTitle/SectionTITLE.JSX';

const Faq = () => {
    return (
        <div>
            <SectionTITLE heading={"Frequently Asked Question"}>

            </SectionTITLE>

            <div className='mb-8 md:mx-24'>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" checked="checked" />
                    <div className="collapse-title text-xl font-medium">
                        What services does your travel agency provide?
                    </div>
                    <div className="collapse-content">
                        <p>We offer a wide range of travel services, including flight bookings, hotel reservations, vacation packages, cruise bookings, car rentals, and personalized travel itineraries.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        How do I book a flight through your agency?
                    </div>
                    <div className="collapse-content">
                        <p>You can easily book a flight through our website or by contacting our customer service team. Simply enter your travel details, choose your preferred flight, and complete the booking process.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Are there any additional fees when booking through your agency?
                    </div>
                    <div className="collapse-content">
                        <p>We strive to provide transparent pricing. While there may be certain taxes or fees imposed by airlines or government authorities, we clearly outline all costs during the booking process. There are no hidden fees.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;