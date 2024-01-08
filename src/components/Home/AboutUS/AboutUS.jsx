import React from 'react';
import SectionTITLE from '../../Shared/SectionTitle/Sectiontitle';

const AboutUS = () => {
    return (
        <div>
            <SectionTITLE
                heading={"About US"}
            ></SectionTITLE>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://media.istockphoto.com/id/909195692/photo/young-brave-divers-couple-jumping-off-cliff-into-ocean.webp?b=1&s=170667a&w=0&k=20&c=F981l6EQ0eHgJt8Oh8xhMIH4hwItS0Wfc7Li1cYSAgw=" />
                    <div>
                        <h1 className="text-5xl font-bold">About US</h1>
                        <p className="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ad expedita necessitatibus nostrum. Sapiente deserunt, voluptas quas odio vitae error iusto quidem asperiores consequatur nulla amet, aliquam totam cupiditate. Consectetur excepturi laboriosam debitis magnam? Quaerat aperiam non, laboriosam ullam quia, nulla asperiores vel natus rerum minus perferendis quibusdam magnam vitae? </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUS;