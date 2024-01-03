import React from 'react';
import SectionTITLE from '../../Shared/SectionTitle/SectionTITLE.JSX';

const TripInspiration = () => {
    return (
        <div>
            <SectionTITLE

                heading={"Trip Inspiration"}
            >
            </SectionTITLE>
            <div className='grid grid-cols-6 gap-4 mb-8 mx-28 '>
                <button className='btn-outline btn-success py-2 px-4 border-success border '>All</button>
                <button className='btn-outline btn-success py-2 px-4 border-success border'>Advanture</button>
                <button className='btn-outline btn-success py-2 px-4 border-success border'>High Advanture</button>
                <button className='btn-outline btn-success py-2 px-4 border-success border'>Water Sports</button>
                <button className='btn-outline btn-success py-2 px-4 border-success border'>History & Culture</button>
                <button className='btn-outline btn-success py-2 px-4 border-success border'>Others Activity</button>
               
            </div>

        </div>
    );
};

export default TripInspiration;