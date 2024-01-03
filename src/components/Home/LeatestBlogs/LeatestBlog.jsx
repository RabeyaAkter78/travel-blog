import React from 'react';
import SectionTITLE from '../../Shared/SectionTitle/SectionTITLE.JSX';

const LeatestBlog = () => {
    return (
        <div className=' mb-8'>
            <SectionTITLE
                heading={"Leatest Blog"}></SectionTITLE>
            <div className="flex flex-col items-center mb-8">
                <div >
                    <img className='w-[1100px] h-[500px]' src="https://media.istockphoto.com/id/1496414074/photo/traveler-man-standing-on-the-crater-of-kawah-ijen-volcano-with-sunrise-sky-in-the-morning.webp?b=1&s=170667a&w=0&k=20&c=Lu1JNLk8lOXXjuzpyfftIdAdLHoA8ss2ESYf1mbySP4=" alt="" />
                </div>
            </div>

            <div className="grid grid-cols-2 ms-18 items-center" >
            <img className='w-1/2' src="https://media.istockphoto.com/id/1496414074/photo/traveler-man-standing-on-the-crater-of-kawah-ijen-volcano-with-sunrise-sky-in-the-morning.webp?b=1&s=170667a&w=0&k=20&c=Lu1JNLk8lOXXjuzpyfftIdAdLHoA8ss2ESYf1mbySP4=" alt="" />
            <img className='w-1/2' src="https://media.istockphoto.com/id/1496414074/photo/traveler-man-standing-on-the-crater-of-kawah-ijen-volcano-with-sunrise-sky-in-the-morning.webp?b=1&s=170667a&w=0&k=20&c=Lu1JNLk8lOXXjuzpyfftIdAdLHoA8ss2ESYf1mbySP4=" alt="" />
         
            </div>

        </div>
    );
};

export default LeatestBlog;