import React from 'react';
import SectionTITLE from '../../Shared/SectionTitle/SectionTITLE.JSX';

const LeatestBlog = () => {
    return (
        <div className='mb-8'>
            <SectionTITLE
                heading={"Leatest Blog"}></SectionTITLE>
            <div className='grid grid-cols-1 md:grid-cols-3 ml-8'>
                <div className="card w-72 md:w-96 bg-primary text-primary-content mb-4 ">
                    <figure className="px-4 pt-5">
                        <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Card title!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn">Read More</button>
                        </div>
                    </div>
                </div>
                <div className="card w-72 md:w-96 bg-primary text-primary-content mb-4">
                    <figure className="px-4 pt-5">
                        <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Card title!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn">Read More</button>
                        </div>
                    </div>
                </div>
                <div className="card w-72 md:w-96 bg-primary text-primary-content mb-4">
                    <figure className="px-4 pt-5">
                        <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Card title!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn">Read More</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default LeatestBlog;